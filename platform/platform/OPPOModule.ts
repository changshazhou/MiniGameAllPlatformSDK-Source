import PlatformModule from "./PlatformModule";
import moosnowAdRow from "../model/moosnowAdRow";
import Common from "../utils/Common";
import bannerStyle from "../model/bannerStyle";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import EventType from "../utils/EventType";
import { MSG } from "../config/MSG";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "../enum/BANNER_POSITION";

export default class OPPOModule extends PlatformModule {

    public platformName: string = "qg";
    public appSid: string = "";
    public bannerWidth: number = 760;
    public bannerHeight: number = 96;

    private interLoadedShow: boolean = false;
    constructor() {
        super();
        this._regisiterWXCallback();
        this.initAdService();
    }


    private initAdService() {
        if (!window[this.platformName])
            return;

        let self = this;
        if (window[this.platformName].initAdService) {
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
        else {
            console.log(`初始化广告`);
            self.initBanner();
            self.initInter();
            self._prepareNative();
        }


        moosnow.event.addListener(EventType.ON_PLATFORM_SHOW, this, this.onAppShow)
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


        console.log(MSG.NAVIGATE_DATA, row)
        if (Date.now() - this.prevNavigate < 300) {
            console.log(MSG.NAVIGATE_FAST)
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
            console.log(MSG.PLATFORM_UNSUPPORT)
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




    public _onBannerError(err) {
        console.warn('banner___error:', err.errCode, ' msg ', err.errMsg);
        if (this.banner) {
            this.banner.hide();
            this.banner.offResize(this._bottomCenterBanner);
            this.banner.offError(this._onBannerError);
            this.banner.offLoad(this._onBannerLoad);
            this.banner.offHide();
            this.banner.destroy();
            this.banner = null;
        }

    }

    public _prepareBanner() {
        if (!window[this.platformName].createBannerAd) return;
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        //横屏模式 
        if (this.isLandscape(wxsys.windowHeight, wxsys.windowWidth)) {
            if (windowWidth < this.bannerWidth) {
                this.bannerWidth = windowWidth;
            }
        }
        else {
            //竖屏
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
    public _createBannerAd() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let left = (windowWidth - this.bannerWidth) / 2;
        if (Common.isEmpty(this.bannerId)) {
            console.warn(MSG.BANNER_KEY_IS_NULL)
            return;
        }

        let styleTop = windowHeight - this.bannerHeigth;
        let banner = window[this.platformName].createBannerAd({
            adUnitId: this.bannerId,
            style: {
                top: styleTop,
                left: left,
                width: this.bannerWidth
            }
        });
        return banner;
    }
    public _bottomCenterBanner(size) {
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let statusBarHeight = wxsys.statusBarHeight;
        let notchHeight = wxsys.notchHeight || 0
        this.bannerWidth = size.width;
        this.bannerHeigth = size.height;

        this.banner.style.left = (windowWidth - size.width) / 2;
        let styleTop = windowHeight - this.bannerHeigth;
        // if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
        //     styleTop = windowHeight - this.bannerHeigth;
        // }
        // else if (this.bannerPosition == BANNER_POSITION.CENTER)
        //     styleTop = (windowHeight - this.bannerHeigth) / 2;
        // else if (this.bannerPosition == BANNER_POSITION.TOP) {
        //     if (this.isLandscape(wxsys.windowHeight, wxsys.windowWidth))
        //         styleTop = 0
        //     else
        //         styleTop = statusBarHeight + notchHeight
        // }
        // else
        //     styleTop = this.bannerStyle.top;
        this.banner.style.top = styleTop;
        console.log('_bottomCenterBanner  ', this.banner.style)
    }

    public _getBannerPosition(horizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.NONE, vertical: BANNER_VERTICAL = BANNER_VERTICAL.NONE) {

        console.log("QQModule -> _getBannerPosition -> vertical", vertical)
        console.log("QQModule -> _getBannerPosition -> horizontal", horizontal)

        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let statusBarHeight = wxsys.statusBarHeight;
        let notchHeight = wxsys.notchHeight || 0

        if (!isNaN(this.bannerWidth) && this.banner)
            this.banner.style.width = this.bannerWidth;
        if (!isNaN(this.bannerHeight) && this.banner)
            this.banner.style.height = this.bannerHeight;

        let top = 0;
        let left = 0;
        if (vertical == BANNER_VERTICAL.TOP) {
            if (this.isLandscape(wxsys.windowHeight, wxsys.windowWidth))
                top = 0
            else
                top = statusBarHeight + notchHeight
        }
        else if (vertical == BANNER_VERTICAL.CENTER) {
            top = (windowHeight - this.bannerHeigth) / 2;
        }
        else if (vertical == BANNER_VERTICAL.BOTTOM) {
            top = windowHeight - this.bannerHeigth - 16;
        }

        if (horizontal == BANNER_HORIZONTAL.LEFT) {
            left = 0;
        }
        else if (horizontal == BANNER_HORIZONTAL.RIGHT) {
            left = windowWidth - this.bannerWidth;
        }
        else if (horizontal == BANNER_HORIZONTAL.CENTER) {
            left = (windowWidth - this.bannerWidth) / 2;
        }

        console.log("QQModule -> _getBannerPosition -> left", left, 'top', top)
        // return {
        //     left: 16,
        //     top: 16,
        // }
        return {
            left,
            top,
        }
    }


    public _resetBanenrStyle(size) {


        let style = this._getBannerPosition();
        this.banner.style.top = style.top;
        this.banner.style.left = style.left;
        console.log('_resetBanenrStyle ', this.banner.style, 'set style ', style)
    }

    public _onBannerHide() {
        console.log('banner 已隐藏 ')
    }

    public destroyBanner() {
        if (this.banner) {
            this.banner.hide();
            this.banner.offResize(this._bottomCenterBanner);
            this.banner.offError(this._onBannerError);
            this.banner.offLoad(this._onBannerLoad);
            this.banner.offHide();
            this.banner.destroy();
            this.banner = null;
        }
    }

    /**
     * 显示平台的banner广告
     * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
     * @param callback 点击回调
     * @param position banner的位置，默认底部
     * @param style 自定义样式
     */
    public showBanner(remoteOn: boolean = true, callback?: (isOpend: boolean) => void, horizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.NONE, vertical: BANNER_VERTICAL = BANNER_VERTICAL.NONE, style?: bannerStyle) {
        console.log(MSG.BANNER_SHOW)
        this.bannerCb = callback;
        this.isBannerShow = true;
        if (!window[this.platformName]) {
            return;
        }
        this.bannerHorizontal = horizontal;
        this.bannerVertical = vertical;
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

            this._resetBanenrStyle({
                width: this.banner.style.width,
                height: this.banner.style.height
            });
            this.banner.show()
            setTimeout(() => {
                this._resetBanenrStyle({
                    width: this.banner.style.width,
                    height: this.banner.style.height
                });
            }, 500)
        }
        else {
            this.initBanner();
        }
    }

    public hideBanner() {
        console.log(MSG.HIDE_BANNER)
        if (!this.isBannerShow)
            return;
        if (!window[this.platformName]) {
            return;
        }
        this.bannerShowCount++;
        if (this.banner) {
            if (this.bannerShowCount >= this.bannerShowCountLimit) {
                console.log('banner destroy');
                this.banner.hide();
                this.banner.offResize(this._bottomCenterBanner);
                this.banner.offError(this._onBannerError);
                this.banner.offLoad(this._onBannerLoad);
                this.banner.offHide();
                this.banner.destroy();
                this.banner = null;
                console.log('重新创建banner');
                this._prepareBanner();
            } else {
                this.banner.hide();
            }
        }
        else {
            this._prepareBanner();
        }
        this.isBannerShow = false;
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
                console.warn(MSG.VIDEO_KEY_IS_NULL)
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
        console.log(MSG.VIDEO_LOAD_COMPLETED)
        moosnow.platform.videoLoading = false;
        if (this.video) {
            this.video.show();
        }
    }

    public prepareInter() {
        if (Common.isEmpty(this.interId)) {
            console.warn(MSG.INTER_KEY_IS_NULL);
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

    public showAutoBanner() {
        console.log(' oppo 不支持自动')
    }

    public reportMonitor(name: string, value: string) {
        if (!window[this.platformName])
            return;
        if (!window[this.platformName].reportMonitor)
            return;
        window[this.platformName].reportMonitor('game_scene', 0)
    }

    public _prepareNative() {
        if (!window[this.platformName]) return;
        if (typeof window[this.platformName].createNativeAd != "function") return;
        this.native = window[this.platformName].createNativeAd({
            adUnitId: parseInt("" + this.nativeId[this.nativeIdIndex])
        })
        this.native.onLoad(this._onNativeLoad.bind(this));
        this.native.onError(this._onNativeError.bind(this));
        this.nativeLoading = true;
        // this.native.load()
    }

    public _onNativeLoad(res) {
        this.nativeLoading = false;
        console.log(MSG.NATIVE_LOAD_COMPLETED, res)
        if (res && res.adList && res.adList.length > 0) {
            this.nativeAdResult = res.adList[0];
            if (!Common.isEmpty(this.nativeAdResult.adId)) {
                console.log(MSG.NATIVE_REPORT)
                this.native.reportAdShow({
                    adId: this.nativeAdResult.adId
                });
            }
            if (Common.isFunction(this.nativeCb)) {
                this.nativeCb(Common.deepCopy(this.nativeAdResult))
            }
        }
        else {
            console.log(MSG.NATIVE_LIST_NULL)
            if (Common.isFunction(this.nativeCb)) {
                this.nativeCb(null)
            }
        }
    }

    public _onNativeError(err) {
        this.nativeLoading = false;
        this.nativeAdResult = null;
        if (err.code == 20003) {
            if (this.nativeIdIndex < this.nativeId.length - 1) {
                console.log(MSG.NATIVE_ERROR, err,)
                this.nativeIdIndex += 1;
                this._destroyNative();
                this._prepareNative();
                this.nativeCb(null)
            }
            else {
                console.log(MSG.NATIVE_NOT_ID_USE)
                this.nativeIdIndex = 0;
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(null)
                }

            }

        }
        else {
            console.log(MSG.NATIVE_ERROR2, err)
            if (Common.isFunction(this.nativeCb)) {
                this.nativeCb(null)
            }
        }
    }

    public _destroyNative() {
        this.nativeLoading = false;
        this.native.offLoad() // 移除原生广告加载成功回调
        this.native.offError() // 移除失败回调
        this.native.destroy() // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
        console.log(MSG.NATIVE_DESTROY)
    }

    /**
    * 目前只有OPPO平台有此功能
    * 返回原生广告数据，开发者根据返回的数据来展现
    * 没有广告返回null
    * 
    * 
    * 例如 cocos
    * let adData=moosnow.platform.getNativeAd();
    * cc.loader.load(adData.imgUrlList[0], (err, texture) => {
    *   adImg.active = true
    *   adImg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
    * })
    * 
    * 例如 laya
    * let adData=moosnow.platform.getNativeAd();
    * new Laya.Image().skin=adData.imgUrlList[0];
    * 
    * @param callback 回调函数
    */
    public showNativeAd(callback: Function) {
        this.nativeCb = callback;
        if (this.native)
            this.native.load();
        // if (!this.nativeLoading && !Common.isEmpty(this.nativeAdResult)) {
        //     let nativeData = Common.deepCopy(this.nativeAdResult)
        //     callback(nativeData)
        // }
    }

    /**
     * 目前只有OPPO平台有此功能 
     * 用户点击了展示原生广告的图片时，使用此方法
     * 例如 cocos
     * this.node.on(CocosNodeEvent.TOUCH_END, () => {
     *     moosnow.platform.clickNative();
     * }, this)
     * 
     * 
     * 例如 laya
     * (new Laya.Image()).on(Laya.Event.MOUSE_UP, this, () => {
     *     moosnow.platform.clickNative();
     * })
     * 
     */
    public clickNative(callback?: Function) {

        if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
            this.mClickedNativeCallback = callback;
            this.mIsClickedNative = true;
            console.log(MSG.NATIVE_NOT_ID_USE, this.nativeAdResult.adId)
            this.native.reportAdClick({
                adId: this.nativeAdResult.adId
            })
        }
    }
    private mClickedNativeCallback: Function
    private mIsClickedNative: boolean = false;
    private onAppShow() {
        if (this.mIsClickedNative) {
            this.mIsClickedNative = false;
            if (Common.isFunction(this.mClickedNativeCallback))
                this.mClickedNativeCallback();
        }
    }


    public hasShortcutInstalled(success: (has) => void, fail: (err) => void) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].hasShortcutInstalled) return;
        window[this.platformName].hasShortcutInstalled({
            success: (status) => {
                if (success)
                    success(!!status)
                if (status) {
                    console.log('已创建')
                } else {
                    console.log('未创建')
                }
            },
            fail: (res) => {
                if (fail)
                    fail(res)
            }
        })
    }
    public installShortcut(success: (res) => void, message: string = "方便下次快速启动", fail: (err) => void) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].installShortcut) return;
        window[this.platformName].installShortcut({
            message,
            success: (status) => {
                if (success)
                    success(status)
                console.log('创建成功')
            },
            fail: (res) => {
                if (fail)
                    fail(res)
            }
        })
    }

    public exitApplication() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].exitApplication) return;
        window[this.platformName].exitApplication();
    }
}