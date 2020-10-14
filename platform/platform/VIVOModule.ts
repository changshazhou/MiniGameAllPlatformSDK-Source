import PlatformModule from "./PlatformModule";
import moosnowAdRow from "../model/moosnowAdRow";
import Common from "../utils/Common";
import bannerStyle from "../model/bannerStyle";
import { BANNER_POSITION } from "../enum/BANNER_POSITION";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import EventType from "../utils/EventType";
import { MSG } from "../config/MSG";

export default class VIVOModule extends PlatformModule {

    public platformName: string = "qg";
    public appSid: string = "";
    public bannerWidth: number = 720;
    public bannerHeight: number = 114;

    private interLoadedShow: boolean = false;
    constructor() {
        super();
        this._regisiterWXCallback();
        this.initAdService();
    }

    private initAdService() {
        // this.initBanner();
        // this.initInter();
        this._prepareNative();
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
        return oppoSys.platformVersionCode >= version
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
    }

    public getSystemInfoSync() {
        if (this.systemInfo == null) {
            if (window[this.platformName] && window[this.platformName].getSystemInfoSync)
                this.systemInfo = window[this.platformName].getSystemInfoSync();
            else
                this.systemInfo = {}
            console.log(MSG.SYSTEM_INFO, this.systemInfo)
        }


        return this.systemInfo;
    }

    private mShowTime: number;
    private mMinInterval: number = 10
    public _createBannerAd() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;
        let nowTime = Date.now();
        if (!this.mShowTime)
            this.mShowTime = nowTime;
        if (!!!this.mShowTime || ((!!this.mShowTime) && nowTime - this.mShowTime <= this.mMinInterval * 1000)) {
            console.log(`banner创建太频繁了 ${this.mMinInterval}秒内只能显示一次`);
            return;
        }
        this.mShowTime = Date.now();


        let wxsys = this.getSystemInfoSync();
        let screenWidth = wxsys.screenWidth;
        let screenHeight = wxsys.screenHeight;
        let statusBarHeight = wxsys.statusBarHeight;
        let pixelRatio = wxsys.pixelRatio;
        let notchHeight = this.getNotchHeight();

        let left = (screenWidth - this.bannerWidth) / 2;
        if (Common.isEmpty(this.bannerId)) {
            console.warn(MSG.BANNER_KEY_IS_NULL)
            return;
        }

        let styleTop = 0;
        if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
            styleTop = (screenHeight - this.bannerHeight);
        }
        else if (this.bannerPosition == BANNER_POSITION.CENTER)
            styleTop = (screenHeight - this.bannerHeight) / 2;
        else if (this.bannerPosition == BANNER_POSITION.TOP) {
            if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth))
                styleTop = 0
            else
                styleTop = statusBarHeight + notchHeight
        }
        else
            styleTop = this.bannerStyle.top;

        let style = {
            top: styleTop,
            left: left,
            width: this.bannerWidth,
            height: this.bannerHeight
        }
        let banner = window[this.platformName].createBannerAd({
            posId: this.bannerId,
            style
        });
        return banner;
    }

    private getNotchHeight() {
        let retVal = 0;
        if (window[this.platformName].getNotchHeightSync)
            retVal = window[this.platformName].getNotchHeightSync().height;
        return retVal;
    }

    public _bottomCenterBanner(size) {
        this.bannerHeight = size.realHeight
        this.bannerWidth = size.realWidth

        console.log('onSize callback  ', size)
    }


    public _onBannerClose() {
        console.log('banner 已关闭 ')
    }

    public _onBannerHide() {
        console.log('banner 已隐藏 ')
    }


    /**
      * 显示平台的banner广告
      * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
      * @param callback 点击回调
      * @param position banner的位置，默认底部
      * @param style 自定义样式
      */
    public showBanner(remoteOn: boolean = true, callback?: (isOpend: boolean) => void, position: string = BANNER_POSITION.BOTTOM, style?: bannerStyle) {


        this.bannerCb = callback;
        this.isBannerShow = true;
        if (!window[this.platformName]) return;
        this.bannerPosition = position;
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
            this.banner.hide();
            this.banner.destroy()
            this.banner = null;
        }
        this.banner = this._createBannerAd();
        if (!(this.banner && this.banner.show))
            return;
        let adshow = this.banner.show();
        adshow && adshow.then(() => {
            console.log("banner广告展示成功");
        }).catch((err) => {
            moosnow.http.getAllConfig(res => {
                if (res.bannerErrorShowInter == 1) {
                    console.log('banner加载出错，用插屏代替')
                    this.showInter();
                }
            })

            switch (err.code) {
                case 30003:
                    console.log("新用户1天内不能曝光Banner，请将手机时间调整为1天后，退出游戏重新进入")
                    break;
                case 30009:
                    console.log("10秒内调用广告次数超过1次，10秒后再调用")
                    break;
                case 30002:
                    console.log("加载广告失败，重新加载广告")
                    break;
                default:
                    // 参考 https://minigame.vivo.com.cn/documents/#/lesson/open-ability/ad?id=广告错误码信息 对错误码做分类处理
                    console.log("banner广告展示失败")
                    console.log(JSON.stringify(err))
                    break;
            }
        });
    }

    public hideBanner() {
        console.log(MSG.HIDE_BANNER)
        if (!window[this.platformName]) {
            return;
        }
        if (this.banner) {
            console.log("隐藏和销毁banner")
            this.banner.hide();
            this.banner.destroy();
            this.banner = null;
        }
    }
    private mVideoTime: number;
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
        if (Common.isEmpty(this.videoId)) {
            console.warn(MSG.VIDEO_KEY_IS_NULL)
            return;
        }

        if (!this.mVideoTime) {
            this.mVideoTime = Date.now();
        }
        else {
            if (Date.now() - this.mVideoTime < 10 * 1000) {
                if (moosnow.platform.videoCb) {
                    moosnow.platform.videoCb(VIDEO_STATUS.ERR);
                }
                return;
            }
            else {
                this.mVideoTime = Date.now();
            }
        }

        if (!this.video) {
            moosnow.platform.videoLoading = true;
            this.video = window[this.platformName].createRewardedVideoAd({
                posId: this.videoId
            });
            this.video.onError(this._onVideoError.bind(this));
            this.video.onClose(this._onVideoClose.bind(this));
            this.video.onLoad(this._onVideoLoad.bind(this));
        }
        else
            this.video.load();

    }
    public _onVideoLoad() {
        console.log(MSG.VIDEO_LOAD_COMPLETED)
        moosnow.platform.videoLoading = false;
        if (this.video) {
            this.video.show()
                .then(() => {
                    this.videoPlaying = true;
                    moosnow.event.sendEventImmediately(EventType.ON_PLATFORM_HIDE, {})
                    console.log('激励视频广告展示完成');
                }).catch((err) => {
                    console.log('激励视频广告展示失败', JSON.stringify(err));
                    if (moosnow.platform.videoCb) {
                        moosnow.platform.videoCb(VIDEO_STATUS.ERR);
                    }
                })
        }
    }
    public _onVideoClose(isEnd) {
        console.log(MSG.VIDEO_CLOSE_COMPLETED, isEnd.isEnded)
        moosnow.platform.videoLoading = false;
        this.videoPlaying = false;
        if (!!isEnd.isEnded) {
            moosnow.http.clickVideo();
        }
        moosnow.event.sendEventImmediately(EventType.ON_PLATFORM_SHOW, {})
        if (moosnow.platform.videoCb) {
            let ret = (!!isEnd.isEnded) ? VIDEO_STATUS.END : VIDEO_STATUS.NOTEND;
            moosnow.platform.videoCb(ret);
        }
    }
    public prepareInter() {
        if (Common.isEmpty(this.interId)) {
            console.warn(MSG.INTER_KEY_IS_NULL);
            return;
        }
        if (!window[this.platformName])
            return;


        if (!window[this.platformName].createInterstitialAd)
            return;

        if (this.inter) {
            this.inter.offLoad();
            this.inter.offClose();
            this.inter.offError();
            this.inter = null;
        }
        console.log('创建插屏广告');
        this.inter = window[this.platformName].createInterstitialAd({
            posId: this.interId
        });
        this.inter.onLoad(this._onInterLoad.bind(this));
        this.inter.onClose(this._onInterClose.bind(this));
        this.inter.onError(this._onInterError.bind(this));
        this.inter.load()
    };

    public showInter() {

        this.prepareInter();
    }
    public _onInterLoad() {
        if (this.inter) {
            let t = this.inter.show();
            t && t.then(() => {
                console.log('插屏广告展示完成');
            }).catch((err) => {
                console.log('插屏广告展示失败', err);
            })
        }
    }
    public _onInterOnShow() {
        if (this.inter)
            this.inter.load();
    }

    public showAutoBanner() {
        console.log(' vivo 不支持自动')
    }

    public reportMonitor(name: string, value: string) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].reportMonitor) return;
        window[this.platformName].reportMonitor('game_scene', 0)
    }

    public _prepareNative(isLoad: boolean = false) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createNativeAd) return;
        this._destroyNative();
        this.native = window[this.platformName].createNativeAd({
            posId: this.nativeId[this.nativeIdIndex]
        })
        this.native.onLoad(this._onNativeLoad.bind(this));
        this.native.onError(this._onNativeError.bind(this));
        this.nativeLoading = true;
        if (isLoad)
            this.native.load()
    }

    public _onNativeLoad(res) {
        this.nativeLoading = false;
        console.log(MSG.NATIVE_LOAD_COMPLETED, res)
        if (res && res.adList && res.adList.length > 0) {
            this.nativeAdResult = res.adList[res.adList.length - 1];
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
                moosnow.http.getAllConfig(res => {
                    if (res.nativeErrorShowInter == 1) {
                        console.log('原生加载出错，用插屏代替')
                        this.showInter();
                    }
                    else {
                        this.nativeCb(null)
                    }
                })

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
            }
            else {
                console.log(MSG.NATIVE_NOT_ID_USE)
                this.nativeIdIndex = 0;
            }
        }
        else {
            console.log(MSG.NATIVE_ERROR2, err)
        }
        moosnow.http.getAllConfig(res => {
            if (res.nativeErrorShowInter == 1) {
                console.log('原生加载出错，用插屏代替')
                this.showInter();
            }
            else {
                if (this.nativeCb)
                    this.nativeCb(null)
            }
        })
    }

    public _destroyNative() {
        this.nativeLoading = false;
        if (this.native) {
            this.native.offLoad() // 移除原生广告加载成功回调
            this.native.offError() // 移除失败回调
            this.native.destroy() // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
        }
        console.log(MSG.NATIVE_DESTROY)
    }

    /**
    * 目前只有OPPO VIVO 平台有此功能
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
        if (this.native) {
            let ret = this.native.load();
            ret && ret.then(() => {
                console.log('原生广告加载完成');
            }).catch((err) => {

                console.log('原生广告加载失败');

                moosnow.http.getAllConfig(res => {
                    if (res.nativeErrorShowInter == 1) {
                        console.log('原生加载出错，用插屏代替');
                        this.nativeCb(null);
                        this.showInter();
                    }
                    else {
                        this.nativeCb(null);
                    }
                })

            })
        }
        else {
            this._prepareNative(true);
            // if (this.native)
            //     this.native.load();
        }
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
            console.log(MSG.NATIVE_CLICK, this.nativeAdResult.adId)
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


    public hasShortcutInstalled(success: (has) => void) {
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
            }
        })
    }
    public installShortcut(success: () => void, message: string = "方便下次快速启动") {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].installShortcut) return;
        window[this.platformName].installShortcut({
            message,
            success: (status) => {
                if (success)
                    success()
                console.log('创建成功')
            }
        })
    }

    public exitApplication() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].exitApplication) return;
        window[this.platformName].exitApplication();
    }
}