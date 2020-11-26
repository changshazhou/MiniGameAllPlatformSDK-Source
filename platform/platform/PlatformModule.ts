import MathUtils from "../utils/MathUtils";
import Common from "../utils/Common";
import BaseModule from "../framework/BaseModule";
import moosnowAdRow from "../model/moosnowAdRow";
import moosnowAppConfig from "../model/moosnowAppConfig";
import nativeAdRow from "../model/nativeAdRow";
import bannerStyle from "../model/bannerStyle";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "../enum/BANNER_POSITION";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import PLATFORM_EVENT from "../utils/PLATFORM_EVENT";
import { MSG } from "../config/MSG";
import { BLOCK_HORIZONTAL, BLOCK_VERTICAL } from "../enum/BLOCK_POSITION";



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
    public currentShareCallback: (success: boolean) => void;
    public currentShortCall: Function = null;
    public shareFail: boolean = null;
    public vibrateOn: boolean = false;
    public systemInfo: any = null;

    public block: any = null;
    public currentBannerId: string;
    public banner: any = {

    };
    public currentVideoId: string;
    public video: any = {

    };
    public inter: any = null;
    public native: any = null;
    public box: any = null;


    public platformName: string = "wx";

    public getBannerId(idx: number = 0, random: boolean = false) {
        let id = Common.config["bannerId"] as any;
        if (id instanceof Array) {
            if (random || idx < 0) {
                return MathUtils.randomNumBoth(0, id.length - 1)
            }
            else {
                if (id.length - 1 < idx) {
                    console.warn('banner id数组小于传入索引值，请检查代码')
                    return null
                }
                return id[idx]
            }
        }
        else {
            return id;
        }
    };

    public getBlockId(idx: number = 0) {
        let id = Common.config["blockId"] as any;
        if (id instanceof Array) {
            if (id.length - 1 < idx) {
                console.warn('block id数组小于传入索引值，请检查代码')
                return null
            }
            return id[idx]
        }
        else {
            return id;
        }
    };


    public getVideoId(idx: number = 0) {
        let id = Common.config["videoId"] as any;
        if (id instanceof Array) {
            if (id.length - 1 < idx) {
                console.warn('video id数组小于传入索引值，请检查代码')
                return null
            }
            return id[idx]
        }
        else {
            return id;
        }
    };
    public interId = "";
    public boxId = "";


    /**
     * https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
     */
    public nativeId: Array<number> = [];
    public nativeIdIndex: number = 0;

    public mBannerWidth: number = 300;
    public get bannerWidth(): number {
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        //横屏模式
        if (wxsys.windowHeight < wxsys.windowWidth) {
            if (windowWidth < 300) {
                this.mBannerWidth = windowWidth;
            }
            else {
                this.mBannerWidth = 300
            }
        }
        else {
            //竖屏
            this.mBannerWidth = windowWidth;
        }
        return this.mBannerWidth;
    };
    public set bannerWidth(value) {
        this.mBannerWidth = value
    }
    public bannerHeigth: number = 96;
    public bannerHorizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.NONE;
    public bannerVertical: BANNER_VERTICAL = BANNER_VERTICAL.NONE
    public bannerShowCount: number = 0;
    public bannerShowCountLimit: number = 3;

    public bannerShowTime: number = 0;
    public bannerShowTimeLimit: number = 15;
    public bannerLimitType: number = 0;

    public bannerCb: Function = null;
    public bannerStyle: bannerStyle = null;
    public isBannerShow: boolean = false;

    public blockWidth: number = 300;
    public blockHeigth: number = 96;
    public blockHorizontal: BLOCK_HORIZONTAL = BLOCK_HORIZONTAL.NONE;
    public blockVertical: BLOCK_VERTICAL = BLOCK_VERTICAL.NONE

    public videoCb: Function = null;
    public videoLoading: boolean = false;
    public videoPlaying: boolean = false;

    public interShowCount: number = 0;
    public interShowCountLimit: number = 3;


    public isInterLoaded: boolean = false;


    public nativeAdResult: nativeAdRow = null;
    public nativeCb: Function = null;
    public nativeLoading: boolean = false;

    public recordObj: any = null;


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
        this.moosnowConfig = Common.config;

        this.interId = this.moosnowConfig["interId"];
        this.boxId = this.moosnowConfig["boxId"];
        this.nativeId = this.moosnowConfig["nativeId"] as [];

        console.log('moosnowConfig ', JSON.stringify(this.moosnowConfig))
    }
    /***
     * 检测IphoneX
     */
    public isIphoneXModel() {
        if (!window[this.platformName]) return;
        let sysInfo = this.getSystemInfoSync();
        if (/iphone x/.test(sysInfo.model.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }
    /***
     * 检测Iphone
     */
    public isIphone() {
        if (!window[this.platformName]) return;
        let sysInfo = this.getSystemInfoSync();
        if (/iphone/.test(sysInfo.model.toLowerCase())) {
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

    /**
     * 是否支持函数
     * @param name 
     */
    public supportFunction(name: string) {
        if (!window[this.platformName]) return false;
        if (!window[this.platformName][name]) return false;
        return true;
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
        let versionRet = remoteVersion != configVersion;
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
            if (token == "") {
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

    public navigate2Video(videoid) {

    }

    public getClipboardData(success: (res) => void, fail: (res) => void) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].getClipboardData) return;
        window[this.platformName].getClipboardData({
            success(res) {
                if (success)
                    success(res.data)
                console.log(`${res.data}`);
            },
            fail(res) {
                if (fail)
                    fail(res)
                console.log(`getClipboardData调用失败`);
            },
        });
    }

    public setClipboardData(msg: string, success: (res) => void, fail: (res) => void) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].setClipboardData) return;
        window[this.platformName].setClipboardData({
            data: msg,
            success: (res) => {
                if (success)
                    success(res)
                console.log(`setClipboardData调用成功`);
            },
            fail: (res) => {
                if (fail)
                    fail(res)
                console.log(`setClipboardData调用失败`);
            },
        });

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

        console.log(MSG.NAVIGATE_DATA, row)
        if (Date.now() - this.prevNavigate < 300) {
            console.log(MSG.NAVIGATE_FAST)
            return;
        }
        this.prevNavigate = Date.now();

        if (!window[this.platformName]) {
            if (fail)
                fail();
            // if (success)
            //     success();
            return;
        }
        let launchOption = this.getLaunchOption();
        let { appid, path, extraData } = row;
        extraData = extraData || {};
        let param = {
            position: row.position,
            appid,
            img: row.atlas || row.img,
            scene: launchOption.scene,
            wxgamecid: launchOption.query.wxgamecid
        }
        moosnow.http.point("打开跳转", param)
        window[this.platformName].navigateToMiniProgram({
            appId: appid,
            path: path,
            extraData: extraData,
            success: () => {
                console.log('跳转参数', param)
                moosnow.http.point("跳转", param)
                if (success)
                    success();
            },
            fail: (err) => {
                console.log('跳转失败 ', err, ' fail callback ', !!fail)
                if (fail)
                    fail();
            },
            complete: () => {
                if (complete)
                    complete();
            }
        })

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
    /**
     * 短震动
     */
    public vibrateShort() {
        if (!window[this.platformName]) return;
        if (window[this.platformName] && !window[this.platformName].vibrateShort) return;
        window[this.platformName].vibrateShort();
    }
    /**
     * 长震动
     */
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
            console.log(MSG.SYSTEM_INFO, this.systemInfo)
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
            menus: ['shareAppMessage', 'shareTimeline'],
            success: null,
            fail: null,
            complete: null
        });
        if (window[this.platformName].onShareAppMessage)
            window[this.platformName].onShareAppMessage(() => {
                return this._buildShareInfo();
            });
        if (window[this.platformName].onShareTimeline)
            // 绑定分享参数
            window[this.platformName].onShareTimeline(() => {
                return this._buildShareInfo();
            })
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
     * @param shortCall 时间过短时回调 ,err 是具体错误信息，目前只在头条分享录屏时用到
     */
    public share(query: Object = {}, callback?: (shared: boolean) => void, shortCall?: (err: any) => void) {
        if (!window[this.platformName]) {
            if (callback)
                callback(true);
            return;
        }
        this.currentShareCallback = callback;
        this.currentShortCall = shortCall;
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
    /**
     * 裁剪视频
     * @param timeRange 默认[2,2] 裁剪视频时保留的前后时长
     * @param callback 剪切完成时回调
     */
    public clipRecord(timeRange: Array<number> = [2, 2], callback: (res: any) => void) { };
    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    public startRecord(duration = 300, callback = null) {
        if (!this.recordObj) {
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
        if (!this.recordObj) {
            if (callback)
                callback(false);
            return;
        }
    }

    public pauseRecord() {
    }
    public resumeRecord() {
    }
    /**
     * 
     * @param style 
     * @param timeRange 
     * @param callback 
     */
    public showShareButton(style: object, timeRange?: Array<Array<number>>, callback?: Function) {

    }

    public hideShareButton() {

    }
    //-----------------注册事件------------------

    /**
     * 注册微信各种回调
     */
    public _regisiterWXCallback() {
        if (!window[this.platformName]) return;
        this._regisiterOnShow();
        this._regisiterOnHide();
    }

    private _regisiterOnShow() {
        if (!window[this.platformName].onShow) return;
        let self = this;
        window[this.platformName].onShow((res) => {
            self._onShowCallback(res);
        });
    }

    private _onShowCallback(res) {
        this._onShareback();
        console.log('on show ', res)
        moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_SHOW, res);
    }

    private _regisiterOnHide() {
        if (!window[this.platformName].onHide) return;
        let self = this;
        window[this.platformName].onHide((res) => {
            self._onHideCallback(res)
        });
    }

    private _onHideCallback(res) {
        //Lite.log.log('WX_hide');
        console.log('on show ', res)
        moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_HIDE, res);
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

    }

    /**
     * 创建banner 
     * @param adIndex 
     * @return bannerId
     */
    public _createBannerAd(adIndex: number): string {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;
        let bannerId = this.getBannerId(adIndex)
        if (Common.isEmpty(bannerId)) {
            console.warn(MSG.BANNER_KEY_IS_NULL)
            return;
        }
        if (this.banner[bannerId])
            return this.banner[bannerId];

        this.bannerShowTime = Date.now();
        let style = this._getBannerPosition();
        console.log("🚀 ~ file: PlatformModule.ts ~ line 995 ~ PlatformModule ~ _createBannerAd ~ style", style)
        if (!this.banner[bannerId]) {

            this.banner[bannerId] = window[this.platformName].createBannerAd({
                adUnitId: bannerId,
                adIntervals: 30,
                style: {
                    top: style.top,
                    left: style.left,
                    width: this.bannerWidth
                }
            });
            this.banner[bannerId].isLoaded = false;
            if (this.banner[bannerId]) {
                this.banner[bannerId].onResize(this._onBannerResize.bind(this, bannerId));
                this.banner[bannerId].onError(this._onBannerError.bind(this, bannerId));
                this.banner[bannerId].onLoad(this._onBannerLoad.bind(this, bannerId));
            }
        }
        return bannerId;
    }
    public _onBannerLoad(bannerId) {
        console.log("🚀 ~ file: PlatformModule.ts ~ line 1043 ~ PlatformModule ~ _onBannerLoad ~ bannerId", bannerId)
        this.bannerShowCount = 0;
    }
    public _onBannerError(bannerId, err) {
        console.warn('banner___error:', err.errCode, err.errMsg);
        this.banner[bannerId] = null;
        this.isBannerShow = false;
        moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_HIDE, null);
        moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_ERROR, null);

    }
    public _onBannerResize(bannerId, size) {
        console.log("_bottomCenterBanner -> size", size)
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        if (!isNaN(this.banner[bannerId].style.realWidth))
            this.bannerWidth = this.banner[bannerId].style.realWidth;
        if (!isNaN(this.banner[bannerId].style.realHeight))
            this.bannerHeigth = this.banner[bannerId].style.realHeight;

        console.log("_bottomCenterBanner -> this.banner.style", this.banner[bannerId].style)

        if (this.bannerStyle)
            this.applyCustomStyle({
                banner: this.banner[bannerId]
            });
        else
            this.banner[bannerId].style.left = (windowWidth - size.width) / 2;

    }

    public _resetBanenrStyle(e) {

        console.log("🚀 ~ file: PlatformModule.ts ~ line 1045 ~ PlatformModule ~ _resetBanenrStyle ~ size", e)

        if (this.bannerStyle) {
            this.applyCustomStyle(e);
        }
        else {
            let style = this._getBannerPosition();
            e.banner.style.top = style.top;
            e.banner.style.left = style.left;
            console.log(MSG.BANNER_RESIZE, e.banner.style, 'set top ', top)
        }
    }

    public applyCustomStyle(e) {
        for (let key in this.bannerStyle) {
            e.banner.style[key] = this.bannerStyle[key]
        }
    }

    public _getBannerPosition() {

        let horizontal: BANNER_HORIZONTAL = this.bannerHorizontal
        let vertical: BANNER_VERTICAL = this.bannerVertical

        // console.log("_getBannerPosition -> horizontal", horizontal)
        // console.log("_getBannerPosition -> vertical", vertical)



        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let top = 0;
        let left = 0;
        if (vertical == BANNER_VERTICAL.TOP) {
            top = 0;
        }
        else if (vertical == BANNER_VERTICAL.CENTER) {
            top = (windowHeight - this.bannerHeigth) / 2;
        }
        else if (vertical == BANNER_VERTICAL.BOTTOM) {
            top = windowHeight - this.bannerHeigth;
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

        console.log("TTModule -> _getBannerPosition -> left", left, 'top', top)
        // return {
        //     left: 16,
        //     top: 16,
        // }
        return {
            left,
            top,
        }
    }
    public preloadBanner(idIndex: number = -1) {
        return
        let bannerId = this.getBannerId(idIndex)
        if (!this.banner[bannerId])
            this._createBannerAd(idIndex);
    }

    /**
      * 显示平台的banner广告
      * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
      * @param callback 点击回调
      * @param horizontal banner的位置，默认底部
      * @param vertical banner的位置，默认底部
      * @param idIndex id顺序 -1 会随机
      * @param style 自定义样式
      */
    public showBanner(remoteOn: boolean = true, callback?: (isOpend: boolean) => void, horizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.CENTER, vertical: BANNER_VERTICAL = BANNER_VERTICAL.BOTTOM, idIndex: number = -1, style?: bannerStyle) {

        console.log(MSG.BANNER_SHOW)
        this.bannerCb = callback;
        if (!window[this.platformName]) {
            return;
        }
        this.bannerHorizontal = horizontal;
        this.bannerVertical = vertical;
        this.bannerStyle = style;

        if (!window[this.platformName].createBannerAd) return;

        this.currentBannerId = this._createBannerAd(idIndex);


        if (this.mTimeoutId) {
            clearTimeout(this.mTimeoutId);
            this.mTimeoutId = null;
        }

        if (remoteOn)
            moosnow.http.getAllConfig(res => {
                if (res.mistouchNum == 0) {
                    console.log('后台关闭了banner，不执行显示')
                    return;
                }
                else {
                    console.log('后台开启了banner，执行显示')
                    this._showBanner(idIndex);
                }
            })
        else
            this._showBanner(idIndex);
    }

    public _showBanner(idIndex) {
        let banner = this.banner[this.getBannerId(idIndex)]
        if (banner) {
            banner.hide();
            /**
             * 先设置位置
             */
            this._resetBanenrStyle({
                banner,
                width: banner.style.width,
                height: banner.style.realHeight
            })
            let showPromise = banner.show();
            showPromise && showPromise
                .then(() => {
                    /**
                     * 再微调，banner 大小可能跟上一个有变化
                     */
                    this._resetBanenrStyle({
                        banner,
                        width: banner.style.width,
                        height: banner.style.realHeight
                    })
                })
        }
    }

    public mTimeoutId: number
    /**
     * 会自动隐藏的banner
     * 一般用游戏中
     * @param horizontal banner的位置，默认底部
     * @param vertical banner的位置，默认底部
     * @param idIndex id顺序 -1 会随机
     */
    public showAutoBanner(horizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.CENTER, vertical: BANNER_VERTICAL = BANNER_VERTICAL.BOTTOM, idIndex: number = -1) {
        console.log('执行自动显示和隐藏Banner功能')
        moosnow.http.getAllConfig(res => {
            if (res && res.gameBanner == 1) {
                this.showBanner(true, () => { }, horizontal, vertical, idIndex)
                let time = isNaN(res.gameBanenrHideTime) ? 1 : parseFloat(res.gameBanenrHideTime);
                this.mTimeoutId = setTimeout(() => {
                    console.log('自动隐藏时间已到，开始隐藏Banner')
                    this.hideBanner(true);

                }, time * 1000)
            }
            else {
                console.log('后台关闭了auto banner')
            }
        })
    }


    public exitApplication() {

    }


    /**
     * 连续不断的显示和隐藏 banner
     * @param position 
     */
    public showIntervalBanner(horizontal: BLOCK_HORIZONTAL = BLOCK_HORIZONTAL.NONE, vertical: BLOCK_VERTICAL = BLOCK_VERTICAL.NONE) {
        console.log('执行 showIntervalBanner')
        moosnow.http.getAllConfig(res => {
            let gameBannerInterval = res && !isNaN(res.gameBannerInterval) ? parseFloat(res.gameBannerInterval) : 20;
            // this.showAutoBanner(horizontal, vertical);
            this.schedule(this.showAutoBanner, gameBannerInterval, [horizontal, vertical])
        })
    }
    /**
     * 取消banner
     */
    public clearIntervalBanner() {
        console.log('执行 clearIntervalBanner')
        this.unschedule(this.showAutoBanner)
    }

    /**
    * 隐藏banner
    * @param destroy 
    */
    public hideBanner(destroy: boolean = false) {

        for (let k in this.banner) {
            if (this.banner[k]) {
                if (this.banner[k].hide) {
                    this.banner[k].hide();
                }
            }
        }
        if (destroy && this.banner[this.currentBannerId] && this.banner[this.currentBannerId].destroy) {
            this.banner[this.currentBannerId].hide();
            this.banner[this.currentBannerId].destroy();
            this.banner[this.currentBannerId] = null;
        }
    }

    //------------广告video------------
    public initVideo() {
        this.createRewardAD(false);
    }
    public createRewardAD(show: boolean, idIndex: number = 0) {
        if (this.videoLoading) {
            return;
        }
        if (!window[this.platformName]) {
            if (moosnow.platform.videoCb)
                moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        if (!window[this.platformName].createRewardedVideoAd) {
            if (moosnow.platform.videoCb)
                moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        let videoId = this.getVideoId(idIndex);
        if (Common.isEmpty(videoId)) {
            console.warn(MSG.VIDEO_KEY_IS_NULL)
            if (moosnow.platform.videoCb)
                moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        if (!this.video[videoId]) {
            this.video[videoId] = window[this.platformName].createRewardedVideoAd({
                adUnitId: videoId
            });
            if (!this.video[videoId]) {
                console.warn('创建视频广告失败')
                return;
            }
            this.video[videoId].onError(this._onVideoError);
            this.video[videoId].onClose(this._onVideoClose);
            this.video[videoId].onLoad(this._onVideoLoad);
        }
        moosnow.platform.videoLoading = true;
        moosnow.platform.videoPlaying = false;
        this.video[videoId].load()
            .then(() => {
                if (show) {
                    moosnow.platform.videoPlaying = true;
                    this.video[videoId].show().then(() => { }).catch(err => {
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
        console.log(MSG.VIDEO_ERROR_COMPLETED, msg, code)
        moosnow.platform.videoLoading = false;
        moosnow.platform.videoPlaying = false;
        if (moosnow.platform.videoCb) {
            moosnow.platform.videoCb(VIDEO_STATUS.ERR);
            moosnow.platform.videoCb = null;
        }
    }

    public _onVideoClose(isEnd) {
        console.log(MSG.VIDEO_CLOSE_COMPLETED, isEnd.isEnded)
        moosnow.platform.videoLoading = false;
        moosnow.platform.videoPlaying = false;
        moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_SHOW, null);
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
        console.log(MSG.VIDEO_LOAD_COMPLETED)
        moosnow.platform.videoLoading = false;
    }
    /**
     * 唤起视频
     * @param completeCallback 
     * @param position
     */
    public showVideo(completeCallback = null, idIndex: number = 0) {
        console.log('显示video')
        moosnow.platform.videoCb = completeCallback;
        this.createRewardAD(true, idIndex);
    }

    //--------------插屏广告---------------
    public initInter() {
        this.prepareInter();
    }
    public prepareInter() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createInterstitialAd) return;
        if (!this.supportVersion('2.8.0')) return;
        if (Common.isEmpty(this.interId)) {
            console.warn(MSG.INTER_KEY_IS_NULL);
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
     * this.node.on(cc.Node.PLATFORM_EVENT.TOUCH_END, () => {
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

    /**
     * 用户是否关注抖音号
     * @param success 
     * @param fail 
     */
    public checkFollowAwemeSate(success: (hasFollowed) => void, fail: (err) => void) {
        if (success)
            success(true)
    }
    /**
     * 调用后跳转个人主页，并且回调关注成功/失败回调，异步回调接口
     * @param success 
     * @param fail 
     */
    public openAwemeUserProile(success: (hasFollowed) => void, fail: (err) => void) {
        if (success)
            success(true)
    }

    public hasShortcutInstalled(success: (has) => void, fail: (err) => void) {
        success(false)
    }

    public installShortcut(success: (res) => void, message: string = "方便下次快速启动", fail: (err) => void) {

    }
    public showBlock(horizontal: BLOCK_HORIZONTAL = BLOCK_HORIZONTAL.NONE, vertical: BLOCK_VERTICAL = BLOCK_VERTICAL.NONE, orientation: number = 1, size: number = 5) {

    }

    public hideBlock() {

    }
    private isLoaded: boolean = false;
    /**
     * 屏蔽iphone关闭退出按钮
     */
    public hideExitButton() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createVideo) return;
        if (!this.isIphone()) return;

        if (this.isLoaded) {
            return;
        }
        this.isLoaded = true;
        moosnow.http.getAllConfig(res => {
            let isBlockClose = res && res.isBlockClose == 1;
            if (isBlockClose) {
                let sysInfo = this.getSystemInfoSync();
                var width: number = sysInfo.screenWidth;
                var height: number = sysInfo.screenHeight;
                var url: String = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/video/1.mp4";

                var video: any = (window['wx'] as any).createVideo({
                    x: 0,
                    y: 0,
                    width: width,
                    height: height,
                    src: url,
                    objectFit: "contain",
                    controls: !1,
                    autoplay: !0,
                    showCenterPlayBtn: !1,
                    enableProgressGesture: !1
                });
                if (sysInfo.model.indexOf("iPhone") != -1) {
                    console.log("苹果手机 播放视频");
                    video.requestFullScreen();
                }
                video.onEnded(function (e): void {
                    video.destroy();
                    console.log("video.destroy");
                });
            }
        })
    }


    onDisable() {
    }

}