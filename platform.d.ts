declare class moosnowAdRow {
    appid: string;
    boxAppid: string;
    desc: string;
    img: string;
    path: string;
    title: string;
    atlas: string;
    pkgName: string;
    extraData: any;
    position: string;
}
declare class moosnowAppConfig {
    bannerId: string;
    videoId: string;
    interId: string;
    nativeId: Array<string>;
    moosnowAppId: string;
    version: string;
    url: string;
}

declare class moosnowResult {
    indexBanner: Array<moosnowAdRow>;
    indexFloat: Array<moosnowAdRow>;
    indexLeft: Array<moosnowAdRow>;
    gameEndPage: Array<moosnowAdRow>;
    gameRespawnPage: Array<moosnowAdRow>;
    exportPage: Array<moosnowAdRow>;
}

declare class nativeAdRow {
    adId: string;
    title: string;
    desc: string;
    icon: string;
    imgUrlList: Array<string>;
    logoUrl: string;
    clickBtnTxt: string;
    creativeType: number;
    interactionType: number;
}

declare class BaseModule {
    protected moduleName: string;
}

declare class AdModule extends BaseModule {
    baseUrl: string;
    constructor();
    /**
     * 随机去除重复数据
     * @param source
     */
    private getDistinctAd;
    /**
     * 获取广告数据 目前仅有indexLeft提供使用
     * @param {Function} callback
     * @returns  more 更多好玩 个人中心的广告 现已经不用了
     *   promotion 首页推广   首页开始按钮下的广告
     *   indexFloat 首页浮动广告 首页右上的广告
     *   indexLeft 首页侧栏
     *   gameFloat 游戏页浮动广告
     *   endPage 结束页广告
     */
    getAd(callback: Function): void;
    getRemoteAd(cb: any): void;
}


declare class HttpModule extends BaseModule {
    private appid;
    private secret;
    private versionNumber;
    version: string;
    baseUrl: string;
    private mLaunchOptions;
    constructor();
    /**
     * 请求服务
     * @param {*} url
     * @param {*} data
     * @param {*} method
     * @param {*} success
     * @param {*} fail
     * @param {*} complete
     */
    request(url: string, data: any, method: 'POST' | 'GET', success?: Function, fail?: Function, complete?: Function): void;
    private _object2Query;
    isDisableArea(callback: any): void;
    /**
       * Loading加载完成
       */
    finishLoading(): void;
    /**
      * 点击了banner
      */
    clickBanner(): void;
    /**
     * 看完了视频
     */
    clickVideo(): void;
    /**
     * 导出跳转
     */
    exportUser(): void;
    /**
     *
     * @param url
     */
    private postData;
    /**
     * 数据打点
     * @param name  打点名称
     */
    point(name: any, data?: any): void;
    /**
    * 统计开始游戏
    * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
    */
    startGame(level: any): void;
    /**
     * 统计结束游戏
     * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     * @param {boolean} isWin 是否成功
     */
    endGame(level: any, isWin: any): void;
    /**
     * 视频统计
     * @param {number} type 0：视频点击 1：视频观看完成
     * @param {string} info 信息 ex:“领取三倍金币”
     * @param {string} level 关卡数
     */
    videoPoint(type: any, info: any, level: any): void;
    /**
     *
     * @param callback
     */
    getAllConfig(callback: Function): void;
    private cfgData;
    private areaData;
    loadCfg(callback: any): void;
    loadArea(callback: any): void;
    getForceExport(callback: any): void;
    disabledForceExport(res: any, res2: any, callback: any): void;
    /**
     * 获取误点间隔次数，启动游戏时调用
     * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
     */
    getMisTouchNum(callback: any): void;
    /**
      * 获取位移间隔次数，启动游戏时调用
      * @param {Funtion} callback 回调参数为mistouchPosNum:int，当misTouchNum=0时关闭误点，当mistouchPosNum=n(0除外)时，每隔n次，触发误点1次
      */
    getMistouchPosNum(callback: any): void;
    getBannerShowCountLimit(callback: any): void;
    private disableAd;
}

declare class SettingModule extends BaseModule {
    constructor();
    onEnable(): void;
    getInt(k: string, defaultValue: number): number;
    getFloat(k: string, defaultValue: number): number;
    getBool(k: string, defaultValue: boolean): boolean;
    getString(k: string, defaultValue: string): string;
    getObject(k: string, defaultValue: Object): any;
    setObject(k: string, v: Object): void;
    setBool(k: string, v: boolean): void;
    setValue(k: string, v: any): void;
    appendInt(k: string, v: any): number;
    appendFloat(k: string, v: any): void;
    removeValueOfKey(key: string): void;
    removeAll(): void;
    _getValue(k: any, defaultValue: any): string;
}


/**
 * banner位置
 */
declare class bannerStyle {
    top: number;
    left: number;
    width: number;
    height: number;
}



declare class PlatformModule extends BaseModule {
    constructor();
    baseUrl: string;
    moosnowConfig: moosnowAppConfig;
    share_clickTime: number;
    currentShareCallback: Function;
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
    bannerShowCount: number;
    bannerShowCountLimit: number;
    bannerCb: Function;
    bannerPosition: string;
    bannerStyle: bannerStyle;
    isBannerShow: boolean;
    videoCb: Function;
    videoLoading: boolean;
    interShowCount: number;
    interShowCountLimit: number;
    isInterLoaded: boolean;
    nativeAdResult: nativeAdRow;
    nativeCb: Function;
    nativeLoading: boolean;
    record: any;
    private shareInfoArr;
    onEnable(): void;
    private vibrateSwitch;
    initAppConfig(): void;
    isIphoneXModel(): boolean;
    isIphoneX(): boolean;
    private compareVersion;
    /**
    * 检测版本是否可用
    * @param version 需要检查的版本号
    */
    supportVersion(version: string): boolean;
    /**
     * 检查当前版本的导出广告是否开启
     * @param {string} version 版本号 为了兼容旧版本SDK的参数，目前已无作用，SDK会取moosnowConfig 中的version 来判断
     * @param {*} callback
     * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
     */
    checkVersion(version: string, callback: any): void;
    isSmallWidth(): boolean;
    login(success?: Function, fail?: Function): void;
    postMessage(data: {
        action: number;
        data?: any;
    }): void;
    prevNavigate: number;
    /**
     * 跳转到指定App
     * @param row
     * @param success
     * @param fail
     * @param complete
     */
    navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function): void;
    /**
     * 更新版本
     */
    private updateProgram;
    vibrateShort(): void;
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
    initShare(shareInfoArr: any): void;
    getShareInfo(ticket: string, success: (encryptedData: string, iv: string) => void, fail?: Function): void;
    share(query?: Object, callback?: (shared: boolean) => void): void;
    shareWithoutCheck(query?: Object, callback?: (shared: boolean) => void): void;
    private _share;
    private _buildShareInfo;
    private _onShareback;
    private _initLoginButton;
    initRecord(): void;
    clipRecord(): void;
    startRecord(duration?: number, callback?: any): void;
    stopRecord(callback?: any): void;
    /**
     * 注册微信各种回调
     */
    private _regisiterWXCallback;
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
     *
     * @param callback 点击回调
     * @param position banner的位置，默认底部
     * @param style 自定义样式
     */
    showBanner(callback?: Function, position?: string, style?: bannerStyle): void;
    /**
     * 会自动隐藏的banner
     * 一般用游戏中
     *
     */
    showAutoBanner(): void;
    hideBanner(): void;
    initVideo(): void;
    createRewardAD(show: any): void;
    _onVideoError(msg: any, code: any): void;
    _onVideoClose(isEnd: any): void;
    _onVideoLoad(): void;
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
    private _destroyNative;
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
    clickNative(): void;
    /**
     * 盒子广告
     */
    showAppBox(): void;
    initRank(): void;
    showRank(): void;
    updateUserScore(score: any): void;
    hideRank(): void;
    onDisable(): void;
}



declare class GameDataCenter extends BaseModule {
    private TOKEN;
    private mUserToken;
    getToken(): string;
    setToken(v: any): void;
    private mChannel_id;
    getChannelId(): string;
    setChannelId(value: any): void;
    private mChannel_appid;
    getChannelAppId(): string;
    setChannelAppId(value: any): void;
}


declare class moosnow {
    static VIDEO_STATUS: {
        END: string;
        NOTEND: string;
        ERR: string;
    };
    static VIDEO_MSG: {
        ERR: string;
        NOTEND: string;
    };
    static SHARE_MSG: {
        FAIL: string;
    };
    static BANNER_POSITION: {
        TOP: string;
        CENTER: string;
        BOTTOM: string;
        CUSTOM: string;
    }
    static http: HttpModule
    static platform: PlatformModule
    static ad: AdModule
    static setting: SettingModule
    static data: GameDataCenter
}


