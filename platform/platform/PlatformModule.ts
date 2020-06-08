import MathUtils from "../utils/MathUtils";
import Common from "../utils/Common";
import BaseModule from "../framework/BaseModule";
import moosnowAdRow from "../model/moosnowAdRow";
import moosnowAppConfig from "../model/moosnowAppConfig";
import { PlatformType } from "../enum/PlatformType";
import nativeAdRow from "../model/nativeAdRow";
import bannerStyle from "../model/bannerStyle";
import { BANNER_POSITION } from "../enum/BANNER_POSITION";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import EventType from "../utils/EventType";



// var videoLoading: boolean = false;
// var videoCb = null;
export default class PlatformModule extends BaseModule {

    constructor() {
        super();
        this.initAppConfig();
        // this._regisiterWXCallback();
        this.initShare(true);
        this.share_clickTime = null; //分享拉起时间
        this.currentShareCallback = null; //模拟分享回调
        this.shareFail = false;

        this.updateProgram();
        this.initRecord();
    }

    public baseUrl = "https://api.liteplay.com.cn/";
    public moosnowConfig: moosnowAppConfig;
    public share_clickTime: number;
    public currentShareCallback: Function = null;
    public shareFail: boolean = null;
    public vibrateOn: boolean = false;
    public systemInfo: any = null;

    public banner: any = null;
    public video: any = null;
    public inter: any = null;
    public native: any = null;
    public box: any = null;


    public platformName: string = "wx";
    public bannerId: string = "";
    public videoId: string = "";
    public interId = "";
    public boxId = "";


    /**
     * https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
     */
    public nativeId: Array<number> = [];
    public nativeIdIndex: number = 0;

    public bannerWidth: number = 300;
    public bannerHeigth: number = 96;
    public bannerShowCount: number = 0;
    public bannerShowCountLimit: number = 3;
    public bannerCb: Function = null;
    public bannerPosition: string = BANNER_POSITION.BOTTOM;
    public bannerStyle: bannerStyle = null;
    public isBannerShow: boolean = false;

    public videoCb: Function = null;
    public videoLoading: boolean = false;

    public interShowCount: number = 0;
    public interShowCountLimit: number = 3;
    public isInterLoaded: boolean = false;


    public nativeAdResult: nativeAdRow = null;
    public nativeCb: Function = null;
    public nativeLoading: boolean = false;






    public record: any = null;


    public shareInfoArr: { img: string, title: string }[] = [];
    onEnable() {


    }
    private vibrateSwitch(on) {
        this.vibrateOn = on;
    }

    // lateStart() {
    //     this.updateProgram();

    //     if (!window[this.platformName]) return;
    //     Lite.event.sendEventImmediately('OnWXShow', this.getLaunchOption());
    // }

    public initAppConfig() {
        let winCfg = window["moosnowConfig"];

        if (Common.platform == PlatformType.WX)
            this.moosnowConfig = winCfg.wx;
        else if (Common.platform == PlatformType.OPPO || Common.platform == PlatformType.OPPO_ZS)
            this.moosnowConfig = winCfg.oppo;
        else if (Common.platform == PlatformType.VIVO)
            this.moosnowConfig = winCfg.vivo;
        else if (Common.platform == PlatformType.QQ)
            this.moosnowConfig = winCfg.qq;
        else if (Common.platform == PlatformType.BAIDU)
            this.moosnowConfig = winCfg.bd;
        else if (Common.platform == PlatformType.BYTEDANCE)
            this.moosnowConfig = winCfg.byte;
        else
            this.moosnowConfig = winCfg.wx;

        this.bannerId = this.moosnowConfig["bannerId"];
        this.videoId = this.moosnowConfig["videoId"];
        this.interId = this.moosnowConfig["interId"];
        this.boxId = this.moosnowConfig["boxId"];
        this.nativeId = this.moosnowConfig["nativeId"] as [];

        console.log('moosnowConfig ', JSON.stringify(this.moosnowConfig))
    }

    public isIphoneXModel() {
        if (!window[this.platformName]) return;
        let sysInfo = this.getSystemInfoSync();
        if (/iphone x/.test(sysInfo.model.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }
    public isIphoneX() {
        if (!window[this.platformName]) return;
        let sysInfo = this.getSystemInfoSync();
        let screenHeight = sysInfo.screenHeight;
        let screenWidth = sysInfo.screenWidth;
        let ratioWH = screenWidth / screenHeight;
        if (ratioWH <= 0.5 || ratioWH >= 2) {
            return true;
        } else {
            return false;
        }
        // let lanscape = screenHeight == 375 && screenWidth == 812;
        // let portrait = screenHeight == 812 && screenWidth == 375;
        // if (lanscape || portrait) {
        //     return true;
        // }
        // return false;
    }

    private compareVersion(v1, v2) {
        v1 = v1.split('.')
        v2 = v2.split('.')
        const len = Math.max(v1.length, v2.length)

        while (v1.length < len) {
            v1.push('0')
        }
        while (v2.length < len) {
            v2.push('0')
        }

        for (let i = 0; i < len; i++) {
            const num1 = parseInt(v1[i])
            const num2 = parseInt(v2[i])

            if (num1 > num2) {
                return 1
            } else if (num1 < num2) {
                return -1
            }
        }

        return 0
    }
    /**
    * 检测版本是否可用
    * @param version 需要检查的版本号
    */
    public supportVersion(version: string) {
        let sdkVersion = this.getSystemInfoSync().SDKVersion
        return (this.compareVersion(sdkVersion, version) >= 0);
    }

    private versionRet: boolean = null;
    /**
     * 检查当前版本的导出广告是否开启
     * @param {string} version 版本号 为了兼容旧版本SDK的参数，目前已无作用，SDK会取moosnowConfig 中的version 来判断
     * @param {*} callback 
     * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
     */
    public checkVersion(version: string, callback: Function) {
        if (this.versionRet != null) {
            callback(this.versionRet);
            return;
        } else {
            this._checkConfigVersion(callback)
        }
    }
    private _checkRemoteVersion(callback: Function) {
        var url = this.baseUrl + 'admin/wx_list/getAppConfig';
        var signParams = {
            appid: this.moosnowConfig.moosnowAppId,
        };
        let data = signParams;
        moosnow.http.request(url, data, 'POST',
            (res) => {
                this.versionRet = this.checkLog(res.data.version)
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
    private _checkConfigVersion(callback) {
        moosnow.http.getAllConfig(res => {
            if (res && res.version) {
                this.versionRet = this.checkLog(res.version);
                callback(this.versionRet)
            }
            else {
                this._checkRemoteVersion(callback);
            }
        })
    }

    public checkLog(remoteVersion) {
        let configVersion = moosnow.platform.moosnowConfig.version
        let versionRet = remoteVersion == configVersion;
        console.log(`版本检查 后台版本${remoteVersion} 配置文件版本${configVersion}`)
        console.log("获取广告开关：", versionRet);
        return versionRet;
    }


    public isSmallWidth() {
        if (!window[this.platformName]) return;
        let sysInfo = this.getSystemInfoSync();
        let screenHeight = sysInfo.screenHeight;
        let screenWidth = sysInfo.screenWidth;
        if (screenHeight < 667) {
            console.log('高度不够', screenHeight);
            return true;
        }
        return false;
    }

    public login(success?: Function, fail?: Function) {
        if (Common.isFunction(success)) {
            let token = moosnow.data.getToken()
            if (!token) {
                token = Common.generateUUID();
                token = token.replace(/-/g, '')
                moosnow.data.setToken(token);
            }
            success(token);

        }
    }


    public postMessage(data: { action: number, data?: any }) {
        if (!window[this.platformName]) return;
        // console.log("postMessage:", data);
        if (!window[this.platformName].getOpenDataContext) return;
        window[this.platformName].getOpenDataContext().postMessage(data);
    }
    public prevNavigate = Date.now();
    /**
     * 跳转到指定App
     * @param row  跳转数据
     * @param success  跳转成功
     * @param fail 跳转失败
     * @param complete  跳转完成
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
        let { appid, path, extraData } = row;
        extraData = extraData || {};
        moosnow.http.navigate(appid, (res) => {
            window[this.platformName].navigateToMiniProgram({
                appId: appid,
                path: path,
                extraData: extraData,
                success: () => {
                    moosnow.http.point("跳转", {
                        position: row.position,
                        appid,
                        img: row.atlas || row.img
                    })
                    moosnow.http.navigateEnd(res.code)
                    moosnow.http.exportUser();
                    if (success)
                        success();
                },
                fail: (err) => {
                    console.log('navigateToMini fail ', err, ' fail callback ', !!fail)
                    if (fail)
                        fail();
                },
                complete: () => {
                    if (complete)
                        complete();
                }
            })
        });

    }
    /**
     * 更新版本
     */
    private updateProgram() {
        let self = this;
        if (!window[this.platformName]) return;
        if (typeof window[this.platformName].getUpdateManager === 'function') { // 请在使用前先判断是否支持
            const updateManager = window[this.platformName].getUpdateManager()
            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                // console.log('是否有新版本', res.hasUpdate);
            })

            updateManager.onUpdateReady(function (res) {
                self.showModal('发现新版本', '新版本已经准备好，是否更新？', '取消', '更新', function (res) {
                    if (res)
                        updateManager.applyUpdate();
                });
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            })

            updateManager.onUpdateFailed(function () {
                // 新的版本下载失败
            })
        }
    }

    public vibrateShort() {
        if (!window[this.platformName]) return;
        if (window[this.platformName] && !window[this.platformName].vibrateShort) return;
        window[this.platformName].vibrateShort();
    }
    public vibrateLong() {
        if (!window[this.platformName]) return;
        if (window[this.platformName] && !window[this.platformName].vibrateLong) return;
        window[this.platformName].vibrateLong();
    }

    public showLoading(title: string) {
        if (!window[this.platformName]) {
            console.log('showLoading', title)
            return;
        }
        window[this.platformName].showLoading({
            title: title,
            mask: false,
            success: null,
            fail: null,
            complete: null
        });
    }
    public hideLoading() {
        if (!window[this.platformName]) {
            return;
        }
        window[this.platformName].hideLoading();
    }
    public showModal(title: string, content: string, cancelTitle: string, confirmTitle: string, confirm: (res) => void) {
        if (!window[this.platformName]) {
            return;
        }
        window[this.platformName].showModal({
            title: title,
            content: content,
            cancelText: cancelTitle,
            confirmText: confirmTitle,
            showCancel: true,
            cancelColor: '#000000',
            confirmColor: '#3CC51F',
            fail: null,
            complete: null,
            success(res) {
                if (res.confirm) {
                    if (confirm) confirm(true);
                    // console.log('用户点击确定')
                } else if (res.cancel) {
                    if (confirm) confirm(false);
                    // console.log('用户点击取消')
                }
            }
        })
    }

    public showModalWithoutCancel(title: string, content: string, confirmTitle: string, confirm: (res) => void) {
        if (!window[this.platformName]) {
            return;
        }
        window[this.platformName].showModal({
            title: title,
            content: content,
            showCancel: false,
            confirmText: confirmTitle,
            cancelColor: '#000000',
            confirmColor: '#3CC51F',
            cancelText: '',
            fail: null,
            complete: null,
            success(res) {
                if (res.confirm) {
                    if (confirm) confirm(true);
                    // console.log('用户点击确定')
                } else if (res.cancel) {
                    if (confirm) confirm(false);
                    // console.log('用户点击取消')
                }
            }
        })
    }

    public showToast(title: string, toastType: string = 'none', mask: boolean = false) {
        if (!window[this.platformName]) {
            return;
        }
        window[this.platformName].showToast({
            title: title,
            icon: toastType,
            duration: 2000,
            mask: mask,
            image: null,
            success: null,
            fail: null,
            complete: null
        })
    }

    public authOrGetUserInfo(callback: (userInfo: any, flag: boolean) => void) {
        if (!window[this.platformName]) {
            return;
        }
        let self = this;

        this.getSetting(
            function (setting) {
                console.log('授权信息', setting);
                if (setting['scope.userInfo']) {
                    //已经授权
                    self.getUserInfo(
                        function (userInfo) {
                            //获取用户信息成功
                            console.log('获取用户信息：', userInfo);
                            callback(userInfo, false);
                        },
                        function (error) {
                            //获取用户信息失败
                            // callback(null);
                        });
                } else {
                    //未授权
                    self.showUserInfoButton(
                        function (userInfo) {
                            callback(userInfo, true);
                            console.log('授权获取用户信息：', userInfo);
                        }
                    );
                }
            },
            function (error) {
                //获取授权设置失败
                self.showUserInfoButton(
                    function (userInfo) {
                        callback(userInfo, true);
                        console.log('授权获取用户信息：', userInfo);
                    }
                );
            });



    }

    private showUserInfoButton(callback: (userInfo: any) => void) {
        let obj = {
            type: 'text',
            text: '',
            style: this._initLoginButton(),
        };
        let btn = window[this.platformName].createUserInfoButton(obj);
        btn.onTap(function (res) {
            if (res.userInfo && res.userInfo.nickName) {
                //授权成功
                callback(res.userInfo);
                btn.hide();
            } else {
                //授权失败
                callback(null);
            }
        });
        btn.show();
    }

    private getSetting(success: Function, fail: Function) {
        window[this.platformName].getSetting({
            success: function (res) {
                success(res.authSetting);
                // res.authSetting = {
                //   "scope.userInfo": true,
                //   "scope.userLocation": true
                // }
            },
            fail: function () {
                fail();
            },
            complete: null,
        })
    }

    private getUserInfo(success: (userInfo: any) => void, fail: Function) {
        window[this.platformName].getUserInfo({
            success: function (res) {
                success(res.userInfo);
            },
            fail: function () {
                fail();
            },
            withCredentials: false,
            complete: null,
            lang: 'en',
        })
    }

    /**
     * 获取游戏启动参数
     * 返回值
     * scene	number	场景值	
     * query	Object	启动参数	
     * isSticky	boolean	当前小游戏是否被显示在聊天顶部	
     * shareTicket	string	shareTicket   分享到群后点击进入小游戏会有此变量 
     */
    public getLaunchOption() {
        if (window[this.platformName] && window[this.platformName].getLaunchOptionsSync)
            return window[this.platformName].getLaunchOptionsSync();
        else
            return {}
    }

    /**
     * return obj
     * brand	string	手机品牌
     * model	string	手机型号
     * pixelRatio	number	设备像素比
     * screenWidth	number	屏幕宽度
     * screenHeight	number	屏幕高度
     * windowWidth	number	可使用窗口宽度
     * windowHeight	number	可使用窗口高度
     * language	string	微信设置的语言
     * version	string	微信版本号
     * system	string	操作系统版本
     * platform	string	客户端平台
     * fontSizeSetting	number	用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。	>= 1.5.0
     * SDKVersion	string	客户端基础库版本	                                >= 1.1.0
     * benchmarkLevel	number	性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好(目前设备最高不到50)	                                >= 1.8.0
     * battery	number	电量，范围 1 - 100	                                   >= 1.9.0
     * wifiSignal	number	wifi 信号强度，范围 0 - 4	                        >= 1.9.0
     */
    public getSystemInfoSync() {
        if (this.systemInfo == null) {
            if (window[this.platformName] && window[this.platformName].getSystemInfoSync)
                this.systemInfo = window[this.platformName].getSystemInfoSync();
            else
                this.systemInfo = {}
            console.log('设备信息', this.systemInfo)
        }
        return this.systemInfo;
    }
    /**
     * 横屏还是竖屏
     * @param windowHeight 
     * @param windowWidth 
     */
    public isLandscape(windowHeight, windowWidth) {
        return windowHeight < windowWidth
    }

    //-----------------分享------------------
    public initShare(shareInfoArr) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].showShareMenu) return;
        this.shareInfoArr = shareInfoArr;
        window[this.platformName].showShareMenu({
            withShareTicket: true,
            success: null,
            fail: null,
            complete: null
        });
        if (window[this.platformName].onShareAppMessage)
            window[this.platformName].onShareAppMessage(() => {
                return this._buildShareInfo();
            });
    }

    public getShareInfo(ticket: string, success: (encryptedData: string, iv: string) => void, fail: Function = null) {
        if (!window[this.platformName]) {
            return;
        }
        window[this.platformName].getShareInfo({
            shareTicket: ticket,
            success: function (res) {
                success(res.encryptedData, res.iv);
            },
            fail: function () {
                if (fail) fail();
            },
            complete: null,
        });
    }
    /**
     * 分享
     * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }  
     * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
     * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
     */
    public share(query: Object = {}, callback?: (shared: boolean) => void) {
        if (!window[this.platformName]) {
            if (callback)
                callback(true);
        }
        this.currentShareCallback = callback;
        this.share_clickTime = Date.now();
        this.shareFail = false;
        this._share(query);
    }

    public shareWithoutCheck(query: Object = {}, callback?: (shared: boolean) => void) {
        if (!window[this.platformName]) {
            if (callback)
                callback(true);
        }
        this.currentShareCallback = callback;
        this.share_clickTime = 1;
        this.shareFail = false;
        this._share(query);
    }

    private _share(query = null) {
        if (!window[this.platformName]) {
            this.currentShareCallback(true)
            return
        };;
        if (!window[this.platformName].shareAppMessage) {
            this.currentShareCallback(true)
            return
        };
        let self = this;
        let shareInfo = this._buildShareInfo(query);
        console.log('分享数据：', shareInfo)
        window[this.platformName].shareAppMessage(shareInfo);
    }

    //构建分享内容
    public _buildShareInfo(query = null) {
        let title = "", imageUrl = ""
        if (this.shareInfoArr.length > 0) {
            let item = this.shareInfoArr[MathUtils.randomNumBoth(0, this.shareInfoArr.length - 1)];
            title = item.title;
            imageUrl = item.img;
        }
        let shareInfo = {
            title: title,
            imageUrl: imageUrl,
            query: query,
        };
        return shareInfo;
    }

    private _onShareback() {
        let self = this;
        setTimeout(() => {
            if (this.share_clickTime && this.currentShareCallback) {
                // console.log('分享回来:',this.shareFail);
                if (this.shareFail) {
                    this.currentShareCallback(false);
                } else {
                    if (this.share_clickTime == 1 || (Date.now() - this.share_clickTime >= 3 * 1000)) {
                        //分享成功
                        this.currentShareCallback(true);
                        // console.log('分享成功',this.shareFail);
                    } else {
                        this.currentShareCallback(false);
                        // console.log('分享失败',this.shareFail);
                    }
                }
            }
            this.shareFail = false;
            this.currentShareCallback = null;
            this.share_clickTime = null;
        }, 100);
    }

    private _initLoginButton() {
        if (!window[this.platformName]) return;
        let wxsys = window[this.platformName].getSystemInfoSync();
        let style = {
            left: 0,
            top: 0,
            width: wxsys.screenWidth,
            height: wxsys.screenHeight,
            lineHeight: 40,
            // backgroundColor: '#de0000',
            color: '#ffffff',
            type: 'text',
            text: '获取用户信息',
            textAlign: 'center',
            fontSize: 28,
            // borderRadius: 5,
        }
        return style;
    }
    //-----------------录屏 具体逻辑在子类实现------------------
    public initRecord() { }
    public clipRecord() { }
    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    public startRecord(duration = 300, callback = null) {
        if (!this.record) {
            if (callback)
                callback(false);
            return;
        }
    }
    /**
     * 停止录屏
     * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
     */
    public stopRecord(callback = null) {
        if (!this.record) {
            if (callback)
                callback(false);
            return;
        }
    }

    public pauseRecord() {
    }
    public resumeRecord() {
    }

    //-----------------注册事件------------------

    /**
     * 注册微信各种回调
     */
    public _regisiterWXCallback() {
        console.log('register callback ', this.platformName, !!window[this.platformName])
        if (!window[this.platformName]) return;
        this._regisiterOnShow();
        this._regisiterOnHide();
    }

    private _regisiterOnShow() {
        console.log('register app on show ', !!window[this.platformName].onShow)
        if (!window[this.platformName].onShow) return;
        let self = this;
        window[this.platformName].onShow((res) => {
            self._onShowCallback(res);
        });
    }

    private _onShowCallback(res) {
        this._onShareback();
        console.log('on show ', res)
        //Lite.log.log('WX_show:', res);
        moosnow.event.sendEventImmediately(EventType.ON_PLATFORM_SHOW, res);
    }

    private _regisiterOnHide() {

        console.log('register app on hide ', !!window[this.platformName].onShow)
        if (!window[this.platformName].onHide) return;
        let self = this;
        window[this.platformName].onHide(self._onHideCallback.bind(this));
    }

    private _onHideCallback(res) {
        //Lite.log.log('WX_hide');
        moosnow.event.sendEventImmediately(EventType.ON_PLATFORM_HIDE, res);
        console.log('on hide ', res)
        let isOpend = res && ((res.targetAction == 8 || res.targetAction == 9 || res.targetAction == 10) && res.targetPagePath.length > 50)
        if (isOpend) {
            moosnow.http.clickBanner();
        }
        if (this.bannerCb) {
            this.bannerCb(isOpend);
        }
        else {
            console.log('banner callback is null ')
        }
    }


    //-----------------Banner广告------------------
    public initBanner() {
        if (!window[this.platformName]) return;
        this._prepareBanner()
    }

    public _prepareBanner() {
        if (!window[this.platformName].createBannerAd) return;
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        //横屏模式
        if (wxsys.windowHeight < wxsys.windowWidth) {
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
        }
        this.banner = this._createBannerAd();
        if (this.banner) {
            this.banner.onResize(this._bottomCenterBanner.bind(this));
            this.banner.onError(this._onBannerError.bind(this));
            this.banner.onLoad(this._onBannerLoad.bind(this));
        }
    }
    public _createBannerAd() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let left = (windowWidth - this.bannerWidth) / 2;
        if (Common.isEmpty(this.bannerId)) {
            console.warn('banner id is null')
            return;
        }
        let banner = window[this.platformName].createBannerAd({
            adUnitId: this.bannerId,
            style: {
                top: 0,
                left: left,
                width: this.bannerWidth
            }
        });
        return banner;
    }
    public _onBannerLoad() {
        this.bannerShowCount = 0;
    }
    public _onBannerError(err) {
        console.warn('banner___error:', err.errCode, err.errMsg);
        this.banner = null;
        this.isBannerShow = false;
        moosnow.event.sendEventImmediately(EventType.ON_BANNER_HIDE, null);
    }
    public _bottomCenterBanner(size) {

        // if (Common.isEmpty(size)) {
        //     console.log('设置的banner尺寸为空,不做调整')
        //     return;
        // }

        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        // let windowHeight = wxsys.windowHeight;
        // this.banner.style.height = size.height;
        this.banner.style.left = (windowWidth - size.width) / 2;
        // this.banner.style.top = windowHeight - size.height;
        this.bannerWidth = this.banner.style.realWidth;
        this.bannerHeigth = this.banner.style.realHeight;
        console.log('_bottomCenterBanner', this.banner.style)
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
            top = windowHeight - this.bannerHeigth;
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
        if (!window[this.platformName]) {
            return;
        }
        this.bannerPosition = position;
        this.bannerStyle = style;

        if (this.mTimeoutId) {
            clearTimeout(this.mTimeoutId);
            this.mTimeoutId = null;
        }


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

    private mTimeoutId: number
    /**
     * 会自动隐藏的banner
     * 一般用游戏中
     * 
     */
    public showAutoBanner() {
        console.log('执行自动显示和隐藏Banner功能')
        moosnow.http.getAllConfig(res => {
            if (res && res.gameBanner == 1) {
                moosnow.platform.showBanner();
                let time = isNaN(res.gameBanenrHideTime) ? 1 : parseFloat(res.gameBanenrHideTime);

                this.mTimeoutId = setTimeout(() => {
                    console.log('自动隐藏时间已到，开始隐藏Banner')
                    if (this.isBannerShow) {
                        this.hideBanner();
                    }
                    else {
                        this.hideBanner();
                    }

                }, time * 1000)
            }
        })
    }

    public hideBanner() {
        console.log('隐藏banner')
        if (!this.isBannerShow)
            return;
        this.isBannerShow = false;
        if (!window[this.platformName]) {
            return;
        }
        this.bannerShowCount++;
        if (this.banner) {
            if (this.bannerShowCount >= this.bannerShowCountLimit) {
                console.log('banner destroy');
                this.banner.hide();
                this.banner.destroy();
                this.banner = null;
                this._prepareBanner();
                // console.log('banner---destory');
            } else {
                this.banner.hide();
            }
        }
        else {
            this._prepareBanner();
        }
    }

    //------------广告video------------
    public initVideo() {
        this.createRewardAD(false);
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
            moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        if (Common.isEmpty(this.videoId)) {
            console.warn(' video id is null')
            moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        if (this.video) {
            this.video.offClose(this._onVideoClose);
            this.video.offError(this._onVideoError);
            this.video.offLoad(this._onVideoLoad);
        } else {

            this.video = window[this.platformName].createRewardedVideoAd({
                adUnitId: this.videoId
            });
            if (!this.video) {
                console.warn('创建视频广告失败')
                return;
            }

        }
        this.video.onError(this._onVideoError);
        this.video.onClose(this._onVideoClose);
        this.video.onLoad(this._onVideoLoad);
        moosnow.platform.videoLoading = true;
        this.video.load()
            .then(() => {
                if (show) {
                    this.video.show().then(() => { }).catch(err => {
                        this._onVideoError(err.errMsg, err.errCode);
                        console.log(err.errMsg);
                    });
                }
            }).catch(err => {
                this._onVideoError(err.errMsg, err.errCode);
                console.log(err.errMsg);
            });
    }

    public _onVideoError(msg, code) {
        console.log('加载video失败回调', msg, code)
        moosnow.platform.videoLoading = false;
        if (moosnow.platform.videoCb) {
            moosnow.platform.videoCb(VIDEO_STATUS.ERR);
            moosnow.platform.videoCb = null;
        }
    }

    public _onVideoClose(isEnd) {
        console.log('video结束回调', isEnd.isEnded)
        moosnow.platform.videoLoading = false;
        if (!!isEnd.isEnded) {
            moosnow.http.clickVideo();
        }
        if (moosnow.platform.videoCb) {
            let ret = (!!isEnd.isEnded) ? VIDEO_STATUS.END : VIDEO_STATUS.NOTEND;
            setTimeout(() => {
                moosnow.platform.videoCb(ret);
            }, 50);
        }
    }

    public _onVideoLoad() {
        console.log('加载video成功回调')
        moosnow.platform.videoLoading = false;
    }

    public showVideo(completeCallback = null) {

        console.log('显示video')
        moosnow.platform.videoCb = completeCallback;
        this.createRewardAD(true);
    }

    //--------------插屏广告---------------
    public initInter() {
        this.prepareInter();
    }
    public prepareInter() {
        if (!window[this.platformName]) return;
        if (typeof window[this.platformName].createInterstitialAd != "function") return;
        if (!this.supportVersion('2.8.0')) return;
        if (Common.isEmpty(this.interId)) {
            console.warn('插屏广告ID为空，系统不加载')
            return;
        }
        this.inter = window[this.platformName].createInterstitialAd({
            adUnitId: this.interId
        });
        this.inter.onLoad(this._onInterLoad.bind(this));
        this.inter.onClose(this._onInterClose.bind(this));
        // this.inter.load();
    }
    public showInter() {
        if (!this.inter) return;
        if (this.isInterLoaded)
            this.inter.show();
    }
    public _onInterLoad() {
        this.interShowCount = 0;
        this.isInterLoaded = true;
        console.log('插屏广告加载完成')
    }
    public _onInterClose() {
        this.interShowCount++;
        if (this.interShowCount >= this.interShowCountLimit) {
            this.isInterLoaded = false;
            this.inter.load();
        }
    }
    public _onInterError(err) {
        console.log(`插屏广告出错：`, err)
    }


    public _prepareNative() {
    }

    public _onNativeLoad(res) {
    }

    public _onNativeError(err) {
    }

    public _destroyNative() {
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
        if (Common.isFunction(callback))
            callback();
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
    }



    /**
    * 盒子广告
    * @param callback 关闭回调
    * @param remoteOn 被后台开关控制
    */
    public showAppBox(callback?: Function, remoteOn: boolean = true) {
        if (Common.isFunction(callback))
            callback();
    }

    /**
     * 
     * @param callback 
     */
    public hideAppBox(callback?: Function) {
        if (Common.isFunction(callback))
            callback();
    }

    /**
     * 平台数据上报
     * @param name 
     * @param value 
     */
    public reportMonitor(name?: string, value?: string) {

    }

    /**
     * 更多游戏按钮
     * @param url 
     * @param callback 
     * @param style 
     */
    public showMoreGameButton(url: string, callback?: Function, style = null) {
        if (callback)
            callback();
    }

    //----自定义--
    public initRank() {
        let data = {
            action: 1,
        };
        this.postMessage(data);
    }
    public showRank() {
        let data = {
            action: 10,
        };
        this.postMessage(data);
    }
    public updateUserScore(score) {
        let data = {
            action: 13,
            data: score,
        };
        this.postMessage(data);
    }
    public hideRank() {
        let data = {
            action: 20,
        }
        this.postMessage(data);
    }

    onDisable() {
    }
}