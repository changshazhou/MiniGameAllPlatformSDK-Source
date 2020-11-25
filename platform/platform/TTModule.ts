import PlatformModule from "./PlatformModule";
import Common from "../utils/Common";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import MathUtils from "../utils/MathUtils";
import { SHARE_CHANNEL } from "../enum/SHARE_CHANNEL";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "../enum/BANNER_POSITION";
import appLaunchOption from "../model/appLaunchOption";
import bannerStyle from "../model/bannerStyle";
import moosnowAdRow from "../model/moosnowAdRow";
import moosnowResult from "../model/moosnowResult";
import { MSG } from "../config/MSG";
import { ENGINE_TYPE } from "../enum/ENGINE_TYPE";

export default class TTModule extends PlatformModule {

    public platformName: string = "tt";
    public recordRes: any = null;
    public recordCb: any = null;
    public recordNumber: number = 0;


    public moreGameCb: Function = null;

    constructor() {
        super();
        this._regisiterWXCallback();
        this._registerTTCallback();
        this.initBanner();
        this.initRecord();
        // 
        this.scheduleOnce(() => {
            this.initVideo();
        }, 1)
        this.bannerWidth = 208;
    }

    private _registerTTCallback() {
        if (!window[this.platformName]) return;
        // 监听弹窗关闭
        if (window[this.platformName].onMoreGamesModalClose)
            window[this.platformName].onMoreGamesModalClose((res) => {
                console.log("modal closed", res);
                if (this.moreGameCb)
                    this.moreGameCb(0);
            });
        // 监听小游戏跳转
        if (window[this.platformName].onNavigateToMiniGameBox) {
            window[this.platformName].onNavigateToMiniGameBox((res) => {
                console.log('onNavigateToMiniGameBox', res);
            })
        }
        else if (window[this.platformName].onNavigateToMiniProgram)
            window[this.platformName].onNavigateToMiniProgram((res) => {
                console.log('onNavigateToMiniProgram', res);
            })
    }

    public showInter() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createInterstitialAd) return;

        if (Common.isEmpty(this.interId)) {
            console.warn(MSG.INTER_KEY_IS_NULL);
            return;
        }
        if (this.inter) {
            this.inter.destroy();
        }
        this.inter = window[this.platformName].createInterstitialAd({
            adUnitId: this.interId
        });
        let p = this.inter.load()
        p && p.then(() => {
            this.inter.show();
        })
            .catch((err) => {
                console.log(err);
            });
    }

    public _bottomCenterBanner(size) {
        // if (this.bannerWidth != size.width) {
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        this.bannerWidth = size.width;
        this.bannerHeigth = size.height;// (this.bannerWidth / 16) * 9; // 根据系统约定尺寸计算出广告高度
        let top = windowHeight - this.bannerHeigth
        //     console.log('bannerWidth ', this.bannerWidth, 'bannerHeigth', this.bannerHeigth, 'top', top)
        if (this.banner) {
            this.banner.style.top = top;
            this.banner.style.left = (windowWidth - this.bannerWidth) / 2;
        }

        // }
    }

    public initRecord() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].getGameRecorderManager) return;
        // if (!this.isDouyin()) return;
        this.recordObj = window[this.platformName].getGameRecorderManager();
    }
    /**
     * 裁剪视频
     * @param timeRange 默认[2,2] 裁剪视频时保留的前后时长
     * @param callback 剪切完成时回调
     */
    public clipRecord(timeRange: Array<number> = [2, 2], callback: (res: any) => void) {
        if (!this.recordObj) return;
        this.recordNumber++;
        console.log('clipRecord', this.recordNumber)
        this.recordObj.recordClip({
            timeRange: timeRange,
            success: (r) => {
                console.log('clipRecord 成功 ', r)
                if (Common.isFunction(callback))
                    callback(r)
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
        if (!this.recordObj) {
            if (callback)
                callback(false);
            return;
        }

        this.recordNumber = 0;
        this.recordCb = null;
        this.recordRes = null;

        this.recordObj.onStart(res => {
            console.log('record onStart');
            if (callback)
                callback(res);
        });

        let recordRes = this.recordRes
        this.recordObj.onStop(res => {
            console.log('on stop ', res)
            if (this.recordNumber >= 1) {
                this.recordObj.clipVideo({
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
        this.recordObj.start({
            duration
        });
    }

    /**
     * 停止录屏
     * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
     */
    public stopRecord(callback = null) {
        console.log(' stop Record  callback  ', !!callback);
        if (!this.recordObj) {
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
            this.recordObj.stop();
            console.log('record stop  ', this.recordRes)
        }
    }

    public pauseRecord() {
        if (this.recordObj)
            this.recordObj.pause()
    }
    public resumeRecord() {
        if (this.recordObj)
            this.recordObj.resume()
    }


    /**
      * 分享
      * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }  
      * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
      * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
      * @param shortCall 时间过短时回调 ,err 是具体错误信息，目前只在头条分享录屏时用到
      */
    public share(query: Object = {}, callback?: (shared: boolean) => void, shortCall?: (err: any) => void) {
        this.currentShareCallback = callback;
        this.currentShortCall = shortCall;
        console.log('是否有回调：', shortCall)
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

    private shareVideoId: number;
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
        //"https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/1.mp4";//
        let videoPath = (this.recordRes && this.recordRes.videoPath) ? this.recordRes.videoPath : "";
        console.log('video path ', videoPath)
        return {
            channel: channel,
            title: title,
            imageUrl: imageUrl,
            query: moosnow.http._object2Query(query),
            extra: {
                videoPath: videoPath,
                videoTopics: [title],
                withVideoId: true,
            },
            success: (res) => {
                console.log('share video success :', res)
                this.shareVideoId = res.videoId
                if (this.currentShareCallback)
                    this.currentShareCallback(true);
            },
            fail: (e) => {
                console.log('share video fail ', e)
                console.log('index of : ', e.errMsg.indexOf('short'))
                if (e && e.errMsg && e.errMsg.indexOf('short') != -1 && this.currentShortCall) {
                    console.log('时间太短 执行回调', this.currentShortCall.toString())
                    this.currentShortCall(e);
                    return;
                }
                if (this.currentShareCallback)
                    this.currentShareCallback(false);

            }
        }
    }



    public navigate2Video(videoId) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].navigateToVideoView) return;
        console.log("navigate2Video id ", videoId || this.shareVideoId, videoId, this.shareVideoId);
        if (!(videoId || this.shareVideoId)) return;
        window[this.platformName].navigateToVideoView({
            videoId: videoId || this.shareVideoId,
            success: (res) => {
                /* res结构： {errMsg: string } */
                console.log("navigate2Video success ", res);
            },
            fail: (err) => {
                console.log("navigate2Video err ", err);
                if (err.errCode === 1006) {
                    // tt.showToast({
                    //     title: "something wrong with your network",
                    // });
                }
            },
        })
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
    /**
     * 显示平台的banner广告
     * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
     * @param callback 点击回调
     * @param position banner的位置，默认底部
     * @param style 自定义样式
     */
    public showBanner(remoteOn: boolean = true, callback?: (isOpend: boolean) => void, horizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.NONE, vertical: BANNER_VERTICAL = BANNER_VERTICAL.NONE, adIndex: number = 0, style?: bannerStyle) {
        // if (this.isBannerShow)
        //     return;
        console.log(MSG.BANNER_SHOW)
        this.bannerCb = callback;

        this.isBannerShow = true;
        if (!this.mBannerLoaded) {
            return;
        }

        if (!window[this.platformName]) {
            return;
        }
        this.bannerHorizontal = horizontal;
        this.bannerVertical = vertical;
        this.bannerStyle = style;
        this.bannerStyle = style;



        if (remoteOn)
            moosnow.http.getAllConfig(res => {
                if (res.mistouchNum == 0) {
                    console.log('后台关闭了banner，不执行显示')
                    return;
                }
                else {
                    console.log('后台开启了banner，执行显示')
                    this._showBanner();
                }
            })
        else
            this._showBanner();
    }



    public _showBanner() {
        if (this.banner) {
            console.log('show banner style ', this.banner.style)
            this.banner.hide();
            this._resetBanenrStyle({
                width: this.banner.style.width,
                height: this.banner.style.realHeight
            })
            let showPromise = this.banner.show();

            showPromise && showPromise
                .then(() => {
                    this._resetBanenrStyle({
                        width: this.banner.style.width,
                        height: this.banner.style.realHeight
                    })
                })
        }
    }

    /**
    * 盒子广告
    * @param callback 关闭回调
    * @param remoteOn 被后台开关控制
    */
    public showAppBox(callback?: Function, remoteOn: boolean = true) {
        this.moreGameCb = callback;
        if (!window[this.platformName]) return;
        if (!window[this.platformName].showMoreGamesModal) return;
        moosnow.http.getAllConfig(res => {
            if (remoteOn) {
                if (res && res.showAppBox == 1) {
                    this._showMoreGamesModal();
                }
            }
            else {
                this._showMoreGamesModal();
            }
        })

    }

    private _getAppLaunchOptions(callback: Function) {
        let appLaunchOptions: Array<appLaunchOption> = [];
        moosnow.ad.getAd((res: moosnowResult) => {
            if (res.indexLeft.length == 0)
                return;
            res.indexLeft.forEach(item => {
                let opt = new appLaunchOption();
                opt.appId = item.appid;
                opt.query = item.path || "1=1"
                opt.extraData = item.extraData || {};
                appLaunchOptions.push(opt)
            })
            console.log('appLaunchOptions', appLaunchOptions)
            callback(appLaunchOptions)
        })
    }

    private _showMoreGamesModal() {
        const systemInfo = this.getSystemInfoSync();
        // iOS 不支持，建议先检测再使用
        if (systemInfo.platform == "ios") return;
        // 打开互跳弹窗
        this._getAppLaunchOptions((appLaunchOptions) => {
            console.log('_showMoreGamesModal appLaunchOption', appLaunchOptions)
            const banner = window[this.platformName].showMoreGamesModal({
                appLaunchOptions: appLaunchOptions,
                success: (res) => {
                    console.log("show app box success", res);
                },
                fail: (res) => {
                    console.log("show app box fail", res);
                }
            });
        });
    }

    public showMoreGameBanner() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createMoreGamesBanner) return;
        const systemInfo = this.getSystemInfoSync();
        if (systemInfo.platform == "ios") return;
        // iOS 不支持，建议先检测再使用
        if (systemInfo.platform !== "ios") {
            // 打开互跳弹窗
            let appLaunchOptions: Array<appLaunchOption> = [];
            moosnow.ad.getAd((res: moosnowResult) => {
                if (res.indexLeft.length == 0)
                    return;
                res.indexLeft.forEach(item => {
                    let opt = new appLaunchOption();
                    opt.appId = item.appid;
                    opt.query = item.path || "1=1";
                    opt.extraData = item.extraData || {};
                    appLaunchOptions.push(opt)
                })

            })
            const banner = window[this.platformName].createMoreGamesBanner({
                style: {
                    left: 20,
                    top: 0,
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

    private _moreGameBotton: any;
    public showMoreGameButton(url: string, callback?: Function, style = null) {

        if (!window[this.platformName]) return;
        if (!window[this.platformName].createMoreGamesButton) return;
        let ttsys = this.getSystemInfoSync();
        let defaultStyle = {
            left: ttsys.windowWidth - 80 - 30,
            top: 40,
            width: 80,
            height: 80,
            lineHeight: 80,
            backgroundColor: "#ff0000",
            textColor: "#ffffff",
            textAlign: "center",
            fontSize: 16,
            borderRadius: 0,
            borderWidth: 1,
            borderColor: "#ff0000"
        }
        let buttonStyle = {
            ...defaultStyle,
            ...style
        }

        if (!this._moreGameBotton)
            this._getAppLaunchOptions(appLaunchOptions => {
                cc.loader.loadRes('texture/game/more.png', cc.Texture2D, (error: Error, tex: cc.Texture2D) => {
                    if (error)
                        return;
                    this._moreGameBotton = window[this.platformName].createMoreGamesButton({
                        type: "image",
                        image: tex.url,
                        actionType: "box",
                        style: buttonStyle,
                        appLaunchOptions: appLaunchOptions,
                        onNavigateToMiniGame(res) {
                            console.log("跳转其他小游戏", res);
                            if (callback)
                                callback(1, res)
                        }
                    });
                    this._moreGameBotton.show();

                    this._moreGameBotton.onTap(() => {
                        console.log("点击更多游戏");
                        if (callback)
                            callback(2, null)
                    });
                })

            })
        else
            this._moreGameBotton.show();

    }

    public hideMoreGameButton() {
        if (this._moreGameBotton) {
            this._moreGameBotton.hide();
            // this._moreGameBotton.destory();
        }

    }
    /***
     * 检测Iphone
     */
    public isIphone() {
        if (!window[this.platformName]) return false;
        let systemInfo = this.getSystemInfoSync();
        if (systemInfo.platform == "ios") return true;
        return false;
    }

    public navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function) {
        console.log('tt navigate2Mini ')
        this.showAppBox(() => {
            console.log('tt showAppBox close ')
        }, false)
    }
    /**
      * 调用后跳转个人主页，并且回调关注成功/失败回调，异步回调接口
      * @param success 
      * @param fail 
      */
    public checkFollowAwemeSate(success: (hasFollowed) => void, fail: (err) => void) {
        if (!window[this.platformName]) {
            success(true);
            return;
        }
        if (!window[this.platformName].checkFollowAwemeState) {
            success(true);
            return;
        }
        window[this.platformName].checkFollowAwemeState({
            success: (res) => {
                console.log('---- check success, res:', res)
                let { hasFollowed } = res;
                success(hasFollowed)
            },
            fail: (err) => {
                fail(err);
                // console.log('---- check fail,', err)
            },
            complete: (res) => {
                // console.log('---- check complete, res: ', res)
            }
        })
    }
    /**
     * 调用后跳转个人主页，并且回调关注成功/失败回调，异步回调接口
     * @param success 
     * @param fail 
     */
    public openAwemeUserProile(success: (hasFollowed) => void, fail: (err) => void) {
        if (!window[this.platformName]) {
            success(true);
            return;
        }
        if (!window[this.platformName].openAwemeUserProfile) {
            success(true);
            return;
        }
        window[this.platformName].openAwemeUserProfile({
            success: (res) => {
                console.log('---- open success, res: ', res)
                let { hasFollowed } = res;
                success(hasFollowed);
            },
            fail: (err) => {
                // console.log('---- open fail, err: ', err)
                fail(err);
            },
            complete: (res) => {
                // console.log('---- open complete, res: ',res)
            }
        })
    }
}
