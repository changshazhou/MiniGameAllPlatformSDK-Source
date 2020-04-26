import PlatformModule from "./PlatformModule";
import moosnowAdRow from "../model/moosnowAdRow";
import Common from "../utils/Common";
import bannerStyle from "../model/bannerStyle";
import { VIDEO_STATUS } from "../platform/PlatformModule";
import { BANNER_POSITION } from "../enum/BANNER_POSITION";

export default class OPPOModule extends PlatformModule {

    public platformName: string = "qg";
    public appSid: string = "";
    public baseUrl = "https://api.liteplay.com.cn/";
    private versionRet: boolean = null;
    public bannerWidth: number = 600;
    public bannerHeight: number = 96;

    private interLoadedShow: boolean = false;
    constructor() {
        super();

        this.initAdService();
    }

    /**
    * 检查当前版本的导出广告是否开启
    * @param {string} version 
    * @param {*} callback 
    * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
    */
    public checkVersion(version: string, callback) {
        if (this.versionRet != null) {
            callback(this.versionRet);
            return;
        } else {
            var url = this.baseUrl + 'admin/wx_list/getAppConfig';
            var signParams = {
                appid: this.moosnowConfig.moosnowAppId,
            };
            let data = signParams;
            moosnow.http.request(url, data, 'POST',
                (res) => {
                    this.versionRet = res.data.version != moosnow.platform.moosnowConfig.version;
                    console.log(`版本检查 后台版本${res.zs_version} 配置文件版本${moosnow.platform.moosnowConfig.version}`)
                    console.log("获取广告开关：", this.versionRet);
                    callback(this.versionRet);
                },
                () => {
                    console.log('checkVersion fail');
                },
                () => {
                    console.log('checkVersion complete');
                }
            );
        }
    }
    private initAdService() {
        if (!window[this.platformName])
            return;
        let self = this;

        if (this.supportVersion("1051")) {
            console.log(`初始化广告`);
            self.initBanner();
            self.initInter();
            self._prepareNative();
        }
        else {
            window[this.platformName].initAdService({
                isDebug: true,
                appId: this.moosnowConfig.moosnowAppId,
                success: (res) => {
                    console.log(`初始化广告`);
                    self.initBanner();
                    self.initInter();
                    self._prepareNative();
                },
                fail: (res) => {
                    console.warn(`初始化广告错误 ${res.code}  ${res.msg}`);
                },
                complete: (res) => {
                    console.log("initAdService  complete");
                }
            })
        }

    }

    public prevNavigate = Date.now();
    /**
     * 跳转到指定App
     * @param row 
     * @param success 
     * @param fail 
     * @param complete 
     */
    public navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function) {


        console.log('跳转数据：', row)
        if (Date.now() - this.prevNavigate < 300) {
            console.log(' 跳转太频繁 >>>>>>>>>>>>>>>>>>>>> ')
            return;
        }
        this.prevNavigate = Date.now();

        if (!window[this.platformName]) {
            if (success)
                success();
            return;
        }
        let { appid, path, extraData, pkgName } = row;
        extraData = extraData || {};
        // 跳转小游戏按钮，支持最低平台版本号'1044' (minPlatformVersion>='1044')
        if (!this.supportVersion(1044)) {
            console.log('版本过低 平台不支持跳转')
            return
        }
        window[this.platformName].navigateToMiniGame({
            appId: appid,
            path: path,
            pkgName: pkgName || appid,
            extraData: extraData,
            success: () => {
                if (window[this.platformName] && window[this.platformName].aldSendEvent) {
                    window[this.platformName].aldSendEvent('跳转', {
                        position: row.position,
                        appid,
                        img: row.atlas || row.img
                    })
                }
                moosnow.http.exportUser();
                if (success)
                    success();
            },
            fail: (err) => {
                console.log('navigateToMiniProgram error ', err)
                if (fail)
                    fail();
            },
            complete: () => {
                if (complete)
                    complete();
            }
        })
    }

    public supportVersion(version: string | number) {
        let oppoSys = this.getSystemInfoSync();
        return oppoSys.platformVersion >= version
    }



    /**
     * 游戏登录
     * @param callback 
     * @param fail 
     */
    // public login(callback?: Function, fail?: Function) {

    //     moosnow.http.getAllConfig(res => {

    //     });

    //     let self = this;

    //     let userToken = moosnow.data.getToken();
    //     if (userToken) {
    //         self.getUserToken("", userToken, callback)
    //     }
    //     else {
    //         if (!this.supportVersion(1040)) {
    //             if (Common.isFunction(callback))
    //                 callback({})
    //             return;
    //         }
    //         window[this.platformName].login({
    //             success: (res) => {
    //                 if (res.code) {
    //                     //发起网络请求
    //                     self.getUserToken(res.code, "", callback)
    //                 } else {
    //                     if (Common.isFunction(callback))
    //                         callback({})
    //                 }
    //             },
    //             fail: (res) => {
    //                 if (Common.isFunction(callback))
    //                     callback({})
    //             }
    //         })
    //     }
    // }

    /**
     * 
     * @param code 
     * @param user_id 
     * @param callback 
     */
    // private getUserToken(code, user_id, callback?) {


    //     if (!this.supportVersion(1050)) {
    //         if (Common.isFunction(callback))
    //             callback({});
    //         return;
    //     }
    //     let options = window[this.platformName].getLaunchOptionsSync();



    //     let channel_id = options.query && options.query.channel_id ? options.query.channel_id : "0";
    //     let channel_appid = options.referrerInfo && options.referrerInfo.appId ? options.referrerInfo.appId : "0";

    //     moosnow.data.setChannelAppId(channel_appid);
    //     moosnow.data.setChannelId(channel_id);

    //     if (window[this.platformName] && window[this.platformName].aldSendEvent) {
    //         window[this.platformName].aldSendEvent("来源", {
    //             origin: options.referrerInfo ? options.referrerInfo.appId : '未知',
    //             path: options.query.from || 0
    //         })
    //     }

    //     moosnow.http.request(`${this.baseUrl}api/channel/login.html`, {
    //         appid: moosnow.platform.moosnowConfig.moosnowAppId,
    //         code: code,
    //         user_id: user_id,
    //         channel_id: channel_id,
    //         channel_appid: channel_appid
    //     }, "POST", (respone) => {
    //         if (respone.code == 0 && respone.data && respone.data.user_id) {
    //             moosnow.data.setToken(respone.data.user_id);
    //         }
    //         if (Common.isFunction(callback))
    //             callback(respone)
    //     }, () => {
    //         //如果出错，不影响游戏
    //         if (Common.isFunction(callback))
    //             callback({})
    //     });
    // }



    public _prepareBanner() {
        if (!window[this.platformName].createBannerAd) return;
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        if (windowWidth < this.bannerWidth) {
            this.bannerWidth = windowWidth;
        }
        if (this.banner) {
            this.banner.offResize(this._bottomCenterBanner);
            this.banner.offError(this._onBannerError);
            this.banner.offLoad(this._onBannerLoad);
            this.banner.offHide();
        }
        this.banner = this._createBannerAd();
        this.banner.onResize(this._bottomCenterBanner.bind(this));
        this.banner.onError(this._onBannerError.bind(this));
        this.banner.onLoad(this._onBannerLoad.bind(this));
        this.banner.onHide(this._onBannerHide.bind(this));
    }
    public _bottomCenterBanner(size) {
        this._resetBanenrStyle(size)
    }

    public _resetBanenrStyle(size) {
        if (Common.isEmpty(size)) {
            console.log('设置的banner尺寸为空,不做调整')
            return;
        }
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;

        // console.log('banner位置或大小被重新设置，当前设备信息', wxsys, ' 设置尺寸', size)
        if (!isNaN(size.height)) {
            this.banner.style.height = size.height;
        }
        else {
            if (isNaN(this.banner.style.height)) {
                this.banner.style.height = this.bannerHeight
            }
        }
        // console.log('设置的banner height 不是数字，height不做调整')
        if (!isNaN(size.width)) {
            this.banner.style.left = (windowWidth - size.width) / 2;
        }
        else
            console.log('设置的banner width 不是数字，left 不做调整')

        let top = 0;
        if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
            top = windowHeight - this.banner.style.height;
        }
        else if (this.bannerPosition == BANNER_POSITION.CENTER)
            top = (windowHeight - this.banner.style.height) / 2;
        else if (this.bannerPosition == BANNER_POSITION.TOP)
            top = 0;
        else
            top = this.bannerStyle.top;

        this.banner.style.top = top;
        console.log('banner位置或大小被重新设置 ', this.banner.style, 'set top ', top)
    }

    public _onBannerHide() {
        console.log('banner 已隐藏 ')
    }

    /**
     * 
     * @param callback 点击回调
     * @param position banner的位置，默认底部
     * @param style 自定义样式
     */
    public showBanner(callback?: Function, position: string = BANNER_POSITION.BOTTOM, style?: bannerStyle) {
        console.log('显示banner')
        this.bannerCb = callback;
        this.isBannerShow = true;
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
            console.log('show banner style 1', this.banner.style)
            this._resetBanenrStyle({
                width: this.banner.style.width,
                height: this.banner.style.height
            });
            console.log('show banner style 2', this.banner.style)
            this.banner.show()
        }
    }

    public createRewardAD(show) {
        if (moosnow.platform.videoLoading) {
            return;
        }
        if (!window[this.platformName]) {
            moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        if (!window[this.platformName].createRewardedVideoAd) {
            return;
        }
        if (this.video) {
            this.video.offClose(this._onVideoClose);
            this.video.offError(this._onVideoError);
            this.video.offLoad(this._onVideoLoad);
        } else {
            if (Common.isEmpty(this.videoId)) {
                console.warn(' video id is null')
                return;
            }
            this.video = window[this.platformName].createRewardedVideoAd({
                adUnitId: this.videoId
            });
        }
        this.video.onError(this._onVideoError.bind(this));
        this.video.onClose(this._onVideoClose.bind(this));
        this.video.onLoad(this._onVideoLoad.bind(this));
        moosnow.platform.videoLoading = true;
        this.video.load();

    }
    public _onVideoLoad() {
        console.log('加载video成功回调')
        moosnow.platform.videoLoading = false;
        if (this.video) {
            this.video.show();
        }
    }

    public prepareInter() {
        if (Common.isEmpty(this.interId)) {
            console.warn('插屏广告ID为空，系统不加载');
            return;
        }
        if (!window[this.platformName])
            return;


        if (this.supportVersion("1061")) {
            if (typeof window[this.platformName].createInterstitialAd != "function")
                return;
            this.inter = window[this.platformName].createInterstitialAd({
                adUnitId: this.interId
            });
            this.inter.onLoad(this._onInterLoad.bind(this));
            this.inter.onClose(this._onInterClose.bind(this));
            this.inter.load()
        }
        else {
            if (typeof window[this.platformName].createInsertAd != "function")
                return;
            this.inter = window[this.platformName].createInsertAd({
                adUnitId: this.interId
            });
            this.inter.onLoad(this._onInterLoad.bind(this));
            this.inter.onShow(this._onInterOnShow.bind(this))
            this.inter.load()
        }


    };

    public showInter() {
        if (this.inter)
            this.inter.show();
        else
            this.interLoadedShow = true
    }
    public _onInterLoad() {
        if (this.interLoadedShow) {
            if (this.inter) {
                this.inter.show();
            }
            else
                this.interLoadedShow = false;
        }

    }
    public _onInterOnShow() {
        if (this.inter)
            this.inter.load();
    }
}