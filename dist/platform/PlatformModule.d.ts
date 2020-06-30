import BaseModule from "../framework/BaseModule";
import moosnowAdRow from "../model/moosnowAdRow";
import moosnowAppConfig from "../model/moosnowAppConfig";
import nativeAdRow from "../model/nativeAdRow";
import bannerStyle from "../model/bannerStyle";
export default class PlatformModule extends BaseModule {
    constructor();
    baseUrl: string;
    moosnowConfig: moosnowAppConfig;
    share_clickTime: number;
    currentShareCallback: Function;
    currentShortCall: Function;
    shareFail: boolean;
    vibrateOn: boolean;
    systemInfo: any;
    banner: any;
    video: any;
    inter: any;
    native: any;
    box: any;
    platformName: string;
    bannerId: string;
    videoId: string;
    interId: string;
    boxId: string;
    /**
     * https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
     */
    nativeId: Array<number>;
    nativeIdIndex: number;
    bannerWidth: number;
    bannerHeigth: number;
    bannerShowCount: number;
    bannerShowCountLimit: number;
    bannerCb: Function;
    bannerPosition: string;
    bannerStyle: bannerStyle;
    isBannerShow: boolean;
    videoCb: Function;
    videoLoading: boolean;
    videoPlaying: boolean;
    interShowCount: number;
    interShowCountLimit: number;
    isInterLoaded: boolean;
    nativeAdResult: nativeAdRow;
    nativeCb: Function;
    nativeLoading: boolean;
    record: any;
    shareInfoArr: {
        img: string;
        title: string;
    }[];
    onEnable(): void;
    private vibrateSwitch;
    initAppConfig(): void;
    /***
     * 检测IphoneX
     */
    isIphoneXModel(): boolean;
    /***
     * 检测Iphone
     */
    isIphone(): boolean;
    isIphoneX(): boolean;
    private compareVersion;
    /**
    * 检测版本是否可用
    * @param version 需要检查的版本号
    */
    supportVersion(version: string): boolean;
    /**
     * 是否支持函数
     * @param name
     */
    supportFunction(name: string): boolean;
    private versionRet;
    /**
     * 检查当前版本的导出广告是否开启
     * @param {string} version 版本号 为了兼容旧版本SDK的参数，目前已无作用，SDK会取moosnowConfig 中的version 来判断
     * @param {*} callback
     * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
     */
    checkVersion(version: string, callback: Function): void;
    private _checkRemoteVersion;
    private _checkConfigVersion;
    checkLog(remoteVersion: any): boolean;
    isSmallWidth(): boolean;
    login(success?: Function, fail?: Function): void;
    postMessage(data: {
        action: number;
        data?: any;
    }): void;
    prevNavigate: number;
    /**
     * 跳转到指定App
     * @param row  跳转数据
     * @param success  跳转成功
     * @param fail 跳转失败
     * @param complete  跳转完成
     */
    navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function): void;
    /**
     * 更新版本
     */
    private updateProgram;
    /**
     * 短震动
     */
    vibrateShort(): void;
    /**
     * 长震动
     */
    vibrateLong(): void;
    showLoading(title: string): void;
    hideLoading(): void;
    showModal(title: string, content: string, cancelTitle: string, confirmTitle: string, confirm: (res: any) => void): void;
    showModalWithoutCancel(title: string, content: string, confirmTitle: string, confirm: (res: any) => void): void;
    showToast(title: string, toastType?: string, mask?: boolean): void;
    authOrGetUserInfo(callback: (userInfo: any, flag: boolean) => void): void;
    private showUserInfoButton;
    private getSetting;
    private getUserInfo;
    /**
     * 获取游戏启动参数
     * 返回值
     * scene	number	场景值
     * query	Object	启动参数
     * isSticky	boolean	当前小游戏是否被显示在聊天顶部
     * shareTicket	string	shareTicket   分享到群后点击进入小游戏会有此变量
     */
    getLaunchOption(): any;
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
    getSystemInfoSync(): any;
    /**
     * 横屏还是竖屏
     * @param windowHeight
     * @param windowWidth
     */
    isLandscape(windowHeight: any, windowWidth: any): boolean;
    initShare(shareInfoArr: any): void;
    getShareInfo(ticket: string, success: (encryptedData: string, iv: string) => void, fail?: Function): void;
    /**
     * 分享
     * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }
     * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
     * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
     * @param shortCall 时间过短时回调 ,err 是具体错误信息，目前只在头条分享录屏时用到
     */
    share(query?: Object, callback?: (shared: boolean) => void, shortCall?: (err: any) => void): void;
    shareWithoutCheck(query?: Object, callback?: (shared: boolean) => void): void;
    private _share;
    _buildShareInfo(query?: any): {
        title: string;
        imageUrl: string;
        query: any;
    };
    private _onShareback;
    private _initLoginButton;
    initRecord(): void;
    clipRecord(): void;
    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    startRecord(duration?: number, callback?: any): void;
    /**
     * 停止录屏
     * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
     */
    stopRecord(callback?: any): void;
    pauseRecord(): void;
    resumeRecord(): void;
    /**
     * 注册微信各种回调
     */
    _regisiterWXCallback(): void;
    private _regisiterOnShow;
    private _onShowCallback;
    private _regisiterOnHide;
    private _onHideCallback;
    initBanner(): void;
    _prepareBanner(): void;
    _createBannerAd(): any;
    _onBannerLoad(): void;
    _onBannerError(err: any): void;
    _bottomCenterBanner(size: any): void;
    _resetBanenrStyle(size: any): void;
    /**
      * 显示平台的banner广告
      * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
      * @param callback 点击回调
      * @param position banner的位置，默认底部
      * @param style 自定义样式
      */
    showBanner(remoteOn?: boolean, callback?: (isOpend: boolean) => void, position?: string, style?: bannerStyle): void;
    _showBanner(): void;
    private mTimeoutId;
    /**
     * 会自动隐藏的banner
     * 一般用游戏中
     *
     */
    showAutoBanner(): void;
    /**
     * 连续不断的显示和隐藏 banner
     */
    showIntervalBanner(): void;
    /**
     * 取消banner
     */
    clearIntervalBanner(): void;
    /**
     * 隐藏banner
     */
    hideBanner(): void;
    initVideo(): void;
    createRewardAD(show: any): void;
    _onVideoError(msg: any, code: any): void;
    _onVideoClose(isEnd: any): void;
    _onVideoLoad(): void;
    /**
     * 唤起视频
     * @param completeCallback
     */
    showVideo(completeCallback?: any): void;
    initInter(): void;
    prepareInter(): void;
    showInter(): void;
    _onInterLoad(): void;
    _onInterClose(): void;
    _onInterError(err: any): void;
    _prepareNative(): void;
    _onNativeLoad(res: any): void;
    _onNativeError(err: any): void;
    _destroyNative(): void;
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
    showNativeAd(callback: Function): void;
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
    clickNative(callback?: Function): void;
    /**
    * 盒子广告
    * @param callback 关闭回调
    * @param remoteOn 被后台开关控制
    */
    showAppBox(callback?: Function, remoteOn?: boolean): void;
    /**
     *
     * @param callback
     */
    hideAppBox(callback?: Function): void;
    /**
     * 平台数据上报
     * @param name
     * @param value
     */
    reportMonitor(name?: string, value?: string): void;
    /**
     * 更多游戏按钮
     * @param url
     * @param callback
     * @param style
     */
    showMoreGameButton(url: string, callback?: Function, style?: any): void;
    initRank(): void;
    showRank(): void;
    updateUserScore(score: any): void;
    hideRank(): void;
    onDisable(): void;
}
