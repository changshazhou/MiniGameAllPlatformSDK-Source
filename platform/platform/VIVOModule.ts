import PlatformModule from "./PlatformModule";
import moosnowAdRow from "../model/moosnowAdRow";
import Common from "../utils/Common";
import bannerStyle from "../model/bannerStyle";
import { BANNER_POSITION } from "../enum/BANNER_POSITION";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import EventType from "../utils/EventType";

export default class VIVOModule extends PlatformModule {

    public platformName: string = "qg";
    public appSid: string = "";
    public baseUrl = "https://api.liteplay.com.cn/";
    private versionRet: boolean = null;
    public bannerWidth: number = 760;
    public bannerHeight: number = 96;

    private interLoadedShow: boolean = false;
    constructor() {
        super();
        this._regisiterWXCallback();
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
                    this.versionRet = res.data.version == moosnow.platform.moosnowConfig.version;
                    console.log(`版本检查 后台版本${res.data.version} 配置文件版本${moosnow.platform.moosnowConfig.version}`)
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
        this.initBanner();
        this.initInter();
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




    public _onBannerError(err) {
        console.warn('banner___error:', err.errCode, ' msg ', err.errMsg);
        this.destroyBanner();
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
            this.banner.offSize(this._bottomCenterBanner);
            this.banner.offError(this._onBannerError);
            this.banner.offLoad(this._onBannerLoad);
            this.banner.offClose(this._onBannerClose)
        }
        this.banner = this._createBannerAd();
        if (this.banner) {
            this.banner.onSize(this._bottomCenterBanner.bind(this));
            this.banner.onError(this._onBannerError.bind(this));
            this.banner.onLoad(this._onBannerLoad.bind(this));
            this.banner.onClose(this._onBannerClose.bind(this))
        }

    }

    private mShowTime: number;
    private mMinInterval: number = 10
    public _createBannerAd() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;
        if (!this.mShowTime)
            this.mShowTime = Date.now();
        else {
            if (Date.now() - this.mShowTime <= this.mMinInterval * 1000) {
                console.log(`banner创建太频繁了 ${this.mMinInterval}秒内只能显示一次`)
                return;
            }
        }


        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let left = (windowWidth - this.bannerWidth) / 2;
        if (Common.isEmpty(this.bannerId)) {
            console.warn('banner id is null')
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
        if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
            styleTop = windowHeight - this.bannerHeigth;
        }
        else if (this.bannerPosition == BANNER_POSITION.CENTER)
            styleTop = (windowHeight - this.bannerHeigth) / 2;
        else if (this.bannerPosition == BANNER_POSITION.TOP) {
            if (this.isLandscape(wxsys.windowHeight, wxsys.windowWidth))
                styleTop = 0
            else
                styleTop = statusBarHeight + notchHeight
        }
        else
            styleTop = this.bannerStyle.top;
        this.banner.style.top = styleTop;
        console.log('_bottomCenterBanner  ', this.banner.style)
    }

    public _resetBanenrStyle(size) {

        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let statusBarHeight = wxsys.statusBarHeight;
        let notchHeight = wxsys.notchHeight || 0

        if (!isNaN(this.bannerWidth))
            this.banner.style.width = this.bannerWidth;
        if (!isNaN(this.bannerHeight))
            this.banner.style.height = this.bannerHeight;

        let styleTop = windowHeight - this.bannerHeigth;
        if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
            styleTop = windowHeight - this.bannerHeigth;
        }
        else if (this.bannerPosition == BANNER_POSITION.CENTER)
            styleTop = (windowHeight - this.bannerHeigth) / 2;
        else if (this.bannerPosition == BANNER_POSITION.TOP) {
            if (this.isLandscape(wxsys.windowHeight, wxsys.windowWidth))
                styleTop = 0
            else
                styleTop = statusBarHeight + notchHeight
        }
        else
            styleTop = this.bannerStyle.top;

        this.banner.style.top = styleTop;
        console.log('_resetBanenrStyle ', this.banner.style, 'set styleTop ', styleTop)
    }

    public _onBannerClose() {
        console.log('banner 已关闭 ')
    }

    public _onBannerHide() {
        console.log('banner 已隐藏 ')
    }

    public destroyBanner() {
        if (this.banner) {
            this.banner.offResize(this._bottomCenterBanner);
            this.banner.offError(this._onBannerError);
            this.banner.offLoad(this._onBannerLoad);
            this.banner.offClose(this._onBannerClose);
            this.banner.destroy();
            this.banner = null;
        }
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
        if (!window[this.platformName]) return;
        if (this.banner) {
            let adshow = this.banner.show();
            adshow && adshow.then(() => {
                console.log("banner广告展示成功");
            }).catch((err) => {
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
        else {
            this.initBanner();
        }
    }
    public hideBanner() {
        console.log('隐藏banner')
        if (!this.isBannerShow)
            return;
        if (!window[this.platformName]) {
            return;
        }
        this.bannerShowCount++;
        if (this.banner) {
            if (this.bannerShowCount >= this.bannerShowCountLimit) {
                this.destroyBanner();
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
        console.log(`加载原生广告成功`, res)
        if (res && res.adList && res.adList.length > 0) {
            this.nativeAdResult = res.adList[0];
            if (!Common.isEmpty(this.nativeAdResult.adId)) {
                console.log(`上报原生广告`)
                this.native.reportAdShow({
                    adId: this.nativeAdResult.adId
                });
            }
            if (Common.isFunction(this.nativeCb)) {
                this.nativeCb(Common.deepCopy(this.nativeAdResult))
            }
        }
        else {
            console.log(`原生广告数据没有，回调Null`)
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
                console.log(`原生广告加载出错 `, err, '使用新ID加载原生广告')
                this.nativeIdIndex += 1;
                this._destroyNative();
                this._prepareNative();
            }
            else {
                console.log(`原生广告ID已经用完，本次没有广告`)
                this.nativeIdIndex = 0;
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(null)
                }

            }

        }
        else {
            console.log(`原生广告加载出错，本次没有广告`, err)
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
        console.log('原生广告销毁')
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
     * this.node.on(cc.Node.EventType.TOUCH_END, () => {
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
            console.log('点击了原生广告', this.nativeAdResult.adId)
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
}