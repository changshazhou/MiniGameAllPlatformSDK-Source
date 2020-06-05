import PlatformModule from "./PlatformModule";
import Common from "../utils/Common";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import MathUtils from "../utils/MathUtils";
import { SHARE_CHANNEL } from "../enum/SHARE_CHANNEL";
import { BANNER_POSITION } from "../enum/BANNER_POSITION";
import appLaunchOption from "../model/appLaunchOption";
import bannerStyle from "../model/bannerStyle";
import moosnowAdRow from "../model/moosnowAdRow";

export default class TTModule extends PlatformModule {

    public platformName: string = "tt";
    public recordRes: any = null;
    public recordCb: any = null;
    public recordNumber: number = 0;
    public bannerWidth: number = 208;

    constructor() {
        super();
        this._regisiterWXCallback();
        this.initBanner();
        this.initRecord();
        this.initInter();
    }

    public prepareInter() {
        if (!window[this.platformName]) return;
        if (typeof window[this.platformName].createInterstitialAd != "function") return;

        if (Common.isEmpty(this.interId)) {
            console.warn('插屏广告ID为空，系统不加载')
            return;
        }
        this.inter = window[this.platformName].createInterstitialAd({
            adUnitId: this.interId
        });
        this.inter.onLoad(this._onInterLoad.bind(this));
        this.inter.onClose(this._onInterClose.bind(this));
        this.inter.load();
    }


    public _bottomCenterBanner(size) {
        if (this.bannerWidth != size.width) {
            let wxsys = this.getSystemInfoSync();
            let windowWidth = wxsys.windowWidth;
            let windowHeight = wxsys.windowHeight;
            this.bannerWidth = size.width;
            this.bannerHeigth = (this.bannerWidth / 16) * 9; // 根据系统约定尺寸计算出广告高度
            let top = windowHeight - this.bannerHeigth - 10
            console.log('bannerWidth ', this.bannerWidth, 'bannerHeigth', this.bannerHeigth, 'top', top)
            if (this.banner) {
                this.banner.style.top = top;
                this.banner.style.left = (windowWidth - size.width) / 2;
            }

        }
    }

    public initRecord() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].getGameRecorderManager) return;
        // if (!this.isDouyin()) return;
        this.record = window[this.platformName].getGameRecorderManager();
    }

    public clipRecord() {
        if (!this.record) return;
        this.recordNumber++;
        console.log('clipRecord', this.recordNumber)
        this.record.recordClip({
            timeRange: [2, 2],
            success: (r) => {
                console.log('clipRecord 成功 ', r)
            }
        })
    }

    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    public startRecord(duration = 300, callback = null) {
        console.log('record startRecord');
        if (!this.record) {
            if (callback)
                callback(false);
            return;
        }

        this.recordNumber = 0;
        this.recordCb = null;
        this.recordRes = null;

        this.record.onStart(res => {
            console.log('record onStart');
            if (callback)
                callback(res);
        });

        let recordRes = this.recordRes
        this.record.onStop(res => {
            console.log('on stop ', res)
            if (this.recordNumber >= 4) {
                this.record.clipVideo({
                    path: res.videoPath,
                    success: (r) => {
                        console.log('record clip succes:', r);
                        this.recordRes = r;
                        console.log('record clip recordRes :', this.recordRes);
                        if (this.recordCb)
                            this.recordCb(r);
                    },
                    fail: () => {
                        console.log('record clip fail:', res);
                        this.recordRes = res;
                        if (this.recordCb)
                            this.recordCb(res);
                    }
                })
            } else {
                this.recordRes = res;
                if (this.recordCb)
                    this.recordCb(res);
            }
        });
        this.record.start({
            duration
        });
    }

    /**
     * 停止录屏
     * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
     */
    public stopRecord(callback = null) {
        console.log(' stop Record  callback  ', !!callback);
        if (!this.record) {
            if (callback)
                callback(false);
            return;
        }
        console.log('record stop recordRes ', this.recordRes)
        if (this.recordRes) {
            if (Common.isFunction(callback))
                callback(this.recordRes);
        } else {
            this.recordCb = callback;
            this.record.stop();
            console.log('record stop  ', this.recordRes)
        }
    }

    public pauseRecord() {
        if (this.record)
            this.record.pause()
    }
    public resumeRecord() {
        if (this.record)
            this.record.resume()
    }

    /**
     * 分享
     * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }  
     * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
     * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
     */
    public share(query: Object = {}, callback?: (shared: boolean) => void) {
        this.currentShareCallback = callback;
        let shareInfo = this._buildShareInfo(query);
        console.log('shareInfo:', shareInfo);
        if (!window[this.platformName]) {
            this.currentShareCallback(true)
            return
        };;
        if (!window[this.platformName].shareAppMessage) {
            this.currentShareCallback(true)
            return
        };
        window[this.platformName].shareAppMessage(shareInfo);
    }


    public _buildShareInfo(query: any) {
        let title = "", imageUrl = ""
        if (this.shareInfoArr.length > 0) {
            let item = this.shareInfoArr[MathUtils.randomNumBoth(0, this.shareInfoArr.length - 1)];
            title = item.title;
            imageUrl = item.img;
        }
        let channel = SHARE_CHANNEL.LINK;

        if (query && [SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO].indexOf(query.channel) != -1) {
            channel = query.channel;
        }
        // console.log('this. recordRes ', this.recordRes)
        let videoPath = (this.recordRes && this.recordRes.videoPath) ? this.recordRes.videoPath : "";
        console.log('video path ', videoPath)
        return {
            channel: channel,
            title: title,
            imageUrl: imageUrl,
            query: moosnow.http._object2Query(query),
            extra: {
                videoPath: videoPath,
                videoTopics: [title]
            },
            success: () => {
                console.log('share video success ')
                if (this.currentShareCallback)
                    this.currentShareCallback(true);
            },
            fail: (e) => {
                console.log('share video success ', e)
                if (this.currentShareCallback)
                    this.currentShareCallback(false);
            }
        }
    }

    private mBannerLoaded: boolean = false
    public _onBannerLoad() {
        this.bannerShowCount = 0;
        this.mBannerLoaded = true;
        if (this.isBannerShow) {
            this.showBanner();
        }
    }

    public _prepareBanner() {
        this.mBannerLoaded = false;
        super._prepareBanner();
    }
    public _resetBanenrStyle(size) {
        if (Common.isEmpty(size)) {
            console.log('设置的banner尺寸为空,不做调整')
            return;
        }
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let top = 0;
        if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
            top = windowHeight - this.bannerHeigth - 10
        }
        else if (this.bannerPosition == BANNER_POSITION.CENTER)
            top = (windowHeight - this.bannerHeigth) / 2;
        else if (this.bannerPosition == BANNER_POSITION.TOP)
            top = 0;

        if (this.bannerStyle) {
            this.banner.style = this.bannerStyle;
        }
        else {
            this.banner.style.top = top;
            console.log('banner位置或大小被重新设置 ', this.banner.style, 'set top ', top)
        }
    }
    /**
    * 
    * @param callback 点击回调
    * @param position banner的位置，默认底部
    * @param style 自定义样式
    */
    public showBanner(callback?: Function, position: string = BANNER_POSITION.BOTTOM, style?: bannerStyle) {
        // if (this.isBannerShow)
        //     return;
        console.log('显示banner')
        this.bannerCb = callback;

        this.isBannerShow = true;
        if (!this.mBannerLoaded) {
            return;
        }

        if (!window[this.platformName]) {
            return;
        }
        this.bannerPosition = position;
        this.bannerStyle = style;

        if (this.banner) {
            // let wxsys = this.getSystemInfoSync();
            // let windowWidth = wxsys.windowWidth;
            // let windowHeight = wxsys.windowHeight;
            // if (position == BannerPosition.Bottom) {

            // }
            // this.banner.top = 1
            console.log('show banner style ', this.banner.style)

            // this.hideBanner();
            this.banner.hide();
            this._resetBanenrStyle({
                width: this.banner.style.width,
                height: this.banner.style.realHeight
            })
            this.banner.show().then(() => {
                this._resetBanenrStyle({
                    width: this.banner.style.width,
                    height: this.banner.style.realHeight
                })
            })
        }
    }
    public showAppBox() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].showMoreGamesModal) return;
        const systemInfo = this.getSystemInfoSync();
        if (systemInfo.platform == "ios") return;
        // iOS 不支持，建议先检测再使用
        if (systemInfo.platform !== "ios") {
            // 打开互跳弹窗
            let appLaunchOptions: Array<appLaunchOption> = [];
            moosnow.ad.getAd((res: moosnowAdRow) => {
                let opt = new appLaunchOption();
                opt.appId = res.appid;
                opt.query = res.path
                opt.extraData = res.extraData;
                appLaunchOptions.push(opt)
            })
            const banner = window[this.platformName].showMoreGamesModal({
                style: {
                    left: 20,
                    top: 40,
                    width: 150,
                    height: 40
                },
                appLaunchOptions: appLaunchOptions,
                success(res) {
                    console.log("show app box success", res.errMsg);
                },
                fail(res) {
                    console.log("show app box fail", res.errMsg);
                }
            });
            // banner.show();
            // banner.onTap(() => {
            //     console.log("点击跳转游戏盒子");
            // });
        }
    }

    public showAppBox2() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createMoreGamesBanner) return;
        const systemInfo = this.getSystemInfoSync();
        if (systemInfo.platform == "ios") return;
        // iOS 不支持，建议先检测再使用
        if (systemInfo.platform !== "ios") {
            // 打开互跳弹窗
            let appLaunchOptions: Array<appLaunchOption> = [];
            moosnow.ad.getAd((res: moosnowAdRow) => {
                let opt = new appLaunchOption();
                opt.appId = res.appid;
                opt.query = res.path
                opt.extraData = res.extraData;
                appLaunchOptions.push(opt)
            })
            const banner = window[this.platformName].createMoreGamesBanner({
                style: {
                    left: 20,
                    top: 40,
                    width: 150,
                    height: 40
                },
                appLaunchOptions: appLaunchOptions,
                success(res) {
                    console.log("show app box success", res.errMsg);
                },
                fail(res) {
                    console.log("show app box fail", res.errMsg);
                }
            });
            banner.show();
            banner.onTap(() => {
                console.log("点击跳转游戏盒子");
            });
        }
    }
}