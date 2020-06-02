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
    onCancel: Function;

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
    preload(url: any, callback: any): void;
    /**
     *
     */
    _findComponent(node: any, classname: any): any;
    _findComponentByName(instance: any, classname: any): any;
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
    public _object2Query;
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
    bannerHeigth: number;
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
    shareInfoArr: {
        img: string;
        title: string;
    }[];
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
     */
    share(query?: Object, callback?: (shared: boolean) => void): void;
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
      * @param callback 关闭回调
      * @param remoteOn 被后台开关控制
      */
    showAppBox(callback?: Function, remoteOn?: boolean): void;
    /**
     *
     * @param callback
     */
    hideAppBox(callback?: Function): void;  /**
    * 平台数据上报
    * @param name
    * @param value
    */
    reportMonitor(name?: string, value?: string): void;
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
    private mCurrentMisTouchCount;
    getCurrentMisTouchCount(): number;
    setCurrentMisTouchCount(num: number): void;
    private mChannel_id;
    getChannelId(): string;
    setChannelId(value: any): void;
    private mChannel_appid;
    getChannelAppId(): string;
    setChannelAppId(value: any): void;
}
declare class EventModule extends BaseModule {
    constructor();
    private _eventList;
    private _waitingForSendList;
    /**
    * 添加一个监听者
    * @param {string} eventName 监听的事件名
    * @param {typeof Class} target 监听者
    * @param {Function} callback 监听事件触发后的回调
    */
    addListener(eventName: any, target: any, callback: any): void;
    /**
     * 将事件添加到发送队列里在update里发送
     * @param {string} eventName 要发送的事件名
     * @param {any} data 要发送的自定义数据
     */
    addToSendQueue(eventName: any, data: any): void;
    /**
     * 当前帧立即发送一个事件
     * @param {String} eventName 事件名
     * @param {any} data 自定义数据
     */
    sendEventImmediately(eventName: any, data: any): void;
    /**
     * 移除一个监听者
     * @param {string} eventName 事件名
     * @param {any} target 监听者
     */
    removeListener(eventName: any, target: any): void;
    /**
     * 移除所有监听者
     */
    removeAllListener(): void;
    _addListener(eventName: any, target: any, once: any, callback: any): void;
    _addToSendList(eventName: any, data: any): void;
    _sendEvent(eventName: any, data: any): void;
    onUpdate(): void;
    onDisable(): void;
}
/**
 * 监听者
 */
declare class MListener {
    callback: Function;
    target: any;
    once: Boolean;
    constructor();
}
/**
 * 事件类
 */
declare class MLEvent {
    eventName: string;
    listeners: Array<any>;
    constructor();
}
declare enum PlatformType {
    /**
     * 微信
     */
    WX = 0,
    /**
     * 字节跳动
     */
    BYTEDANCE = 1,
    /**
     * OPPO
     */
    OPPO = 2,
    /**
     * OPPO
     */
    OPPO_ZS = 3,
    /**
     * 百度
     */
    BAIDU = 4,
    /**
     * QQ
     */
    QQ = 5,
    /**
     * PC电脑
     */
    PC = 6,
    /**
     * V
     */
    VIVO = 7
}
declare class EventType {
    static ON_PLATFORM_SHOW: string;
    static ON_PLATFORM_HIDE: string;
    static ON_AD_SHOW: string;
    static AD_VIEW_CHANGE: string;


}

interface IUIModule {
    showToast(msg: string): any;
    /**
     * 显示一个ui
     * @param {string} name  resources/UI目录下的预设名字
     * @param {Object} data 携带的自定义数据
     * @param {Function} callback ui显示后回调:(formModel,data:Object)
     */
    pushUIForm(name: any, data?: any, callback?: any): any;
    /**
    * 从栈顶隐藏一个UI
    * @param {bool} destroy 是否销毁
    */
    pop(destroy: boolean, cb?: any): any;
    /**
   * 获取一个UIForm
   * @param {string} name
   */
    getUIFrom(name: string): any;
    /**
    * 隐藏某个UI
    * @param {string} name 预设名
    * @param {any} data 携带的自定义数据
    */
    hideUIForm(name: string, data: any, cb?: any): any;
    hideAllUIForm(): any;
    destroyUIForm(name: string, data: any): any;
}

interface IResourceModule {
    /**
     * 加载resources下的cc.SpriteFrame, cc.AnimationClip, cc.Prefab
     * 不带扩展名
     * @method loadAsset
     * @param {string} url resources下路径
     * @param {string} assetType cc.SpriteFrame, cc.AnimationClip, cc.Prefab..
     * @param {Function} [callback] (err:Error,asset:cc.Asset)
     */
    loadAsset(url: any, assetType: any, callback: any): any;
    /**
    * 加载resources目录下某个目录下的指定类型的资源(用于预加载整个目录资源)
    * @param {string} dir resources下的目录
    * @param {typeof cc.Asset} type
    * @param {Function} progressCallback (precent:number)
    * @param {Function} completeCallback (err:Error,reses:Asset[])
    */
    loadAssetDir(dir: any, type: any, progressCallback: any, completeCallback: any): any;
}
declare class BaseEntityModule extends BaseModule {
    private entityLogics;
    private _serializeId;
    private paused;
    prefabPath: string;
    private mEntity3DPools;
    private mEntity3DLogics;
    private entityPools;
    private mIsSlow;
    constructor();
    start(): void;
    update(dt: any): void;
    pause(): void;
    resume(): void;
    getAllEntity(name: any): any[];
    showEntity(name: any, parentNode: any, data: any): any;
    hideEntity(logic: any, data: any, isDestory?: boolean): void;
    hideAllEntity(name: any, isDestory?: boolean): void;
    private _showEntity;
    private _hideEntity;
    private _createEntity;
    private _getPrefabByName;
    private _getOrNewEntityPool;
    private _getEntityPool;
    private _newEntityPool;
}
declare class Common {
    static titleCase(s: any): any;
    static numFixed(num: any, len: any): number;
    static parseMoney(value: any): number;
    static objKeySort(obj: any): {};
    static isWeChat(): boolean;
    static isQQPlay(): boolean;
    static isObject(x: any): boolean;
    static object2Query(obj: any): string;
    static isFunction(fun: any): boolean;
    static isEmpty(obj: any): boolean;
    static formatTime(date: any): string;
    static formatNumber(n: any): any;
    /**
     * 复制源对象属性到目标上
     * @param {*} from
     * @param {*} target
     */
    static copy(from: any, target: any): void;
    static randomNumBoth(Min: any, Max: any): any;
    static randomFloat(Min: any, Max: any): any;
    static randomToRatio(start: number, end: number, range: number): boolean;
    static generateUUID(): string;
    static isNumber(obj: any): boolean;
    static isArray(obj: any): boolean;
    static isString(obj: any): boolean;
    private static mPlatform;
    /**
     * 获取当前的运行平台
     * PC状态下会返回debug平台
     * debug没有时 默认返回微信平台
     */
    static get platform(): PlatformType;
    static deepCopy(obj: any): object | [];
    static popOpenAnim(node: cc.Node, callback?: Function): void;
    static popCloseAnim(node: cc.Node, callback?: Function): void;
    static formatMoney(value: number): any;
}
declare interface IForm {
    showToast(msg: string): any;
    showAd(params: {
        showAd: any;
        callback: any;
    }): any;
    showReward(): any;
}
declare enum AD_POSITION {
    /**
  * 不显示
  */
    NONE = 0,
    BANNER = 1,
    FLOAT = 2,
    /**
     * 侧拉广告
     */
    SIDE = 4,
    CENTER = 8,
    EXPORT = 16,

    /**
     * 返回按钮
     */
    BACK = 32,
    /**
     * 黑色半透明遮挡
     */
    MASK = 64,
    /**
     * 延迟显示
     */
    WAIT = 128,

    /**
     * 左右两侧
     */
    LEFTRIGHT = 256
}

declare class BaseForm {
    private mIntervalArr;
    schedule(callback: Function, time: number): void;
    unschedule(callback: any): void;
    initProperty(form: any): void;
}


declare class AdForm extends BaseForm {
    pauseContainer: cc.Node;
    pauseView: cc.ScrollView;
    pauseLayout: cc.Layout;
    centerContainer: cc.Node;
    centerView: cc.ScrollView;
    centerLayout: cc.Layout;
    exportContainer: cc.Node;
    exportView: cc.ScrollView;
    exportLayout: cc.Layout;
    exportClose: cc.Node;
    exportMask: cc.Node;
    exportCloseTxt: cc.Node;
    floatContainer: cc.Node;
    floatFull: cc.Node;
    bannerContainer: cc.Node;
    bannerView: cc.ScrollView;
    bannerLayout: cc.Layout;
    endContainer: cc.Node;
    endView: cc.ScrollView;
    endLayout: cc.Layout;
    failContainer: cc.Node;
    failView: cc.ScrollView;
    failLayout: cc.Layout;
    gameOverContainer: cc.Node;
    gameOverView: cc.ScrollView;
    gameOverLayout: cc.Layout;
    respawnContainer: cc.Node;
    respawnScrollView: cc.ScrollView;
    respawnLayout: cc.Layout;
    playerDiedContainer: cc.Node;
    playerDiedScrollView: cc.ScrollView;
    playerDiedLayout: cc.Layout;
    leftContainer: cc.Node;
    leftView: cc.ScrollView;
    leftLayout: cc.Layout;
    rightView: cc.ScrollView;
    rightLayout: cc.Layout;
    drawerContainer: cc.Node;
    drawerView: cc.ScrollView;
    drawerLayout: cc.Layout;
    drawerShow: cc.Node;
    drawerHide: cc.Node;
    private mAdItemList;
    setPosition(source: Array<moosnowAdRow>, position?: string): Array<moosnowAdRow>;
    private mScrollVec;
    /**
     *
     * @param scrollView
     * @param layout
     * @param positionTag
     * @param entityName
     */
    initView(container: cc.Node, scrollView: cc.ScrollView, layout: cc.Layout, position: AD_POSITION, entityName: string | cc.Prefab): void;
    addEvent(): void;
    removeEvent(): void;
    onAdChange(data: any): void;
    private mIndex;
    /**
     *
     * @param zindex
     */
    onAfterShow(zindex: number): void;
    /**
      *
      * @param data
      */
    willShow(data: any): void;
    private mShowAd;
    private mBackCall;
    displayChange(data: any, callback?: any): void;
    onBack(): void;
    private mMoveSpeed;
    onFwUpdate(dt: any): void;
    willHide(): void;
    private mFloatIndex;
    private mFloatRefresh;
    private mFloatCache;
    private mAdData;
    initFloatAd(parentNode: any, prefabs: any, points: Array<cc.Vec2>): void;
    floatAnim(floatNode: any): void;
    private updateFloat;
    private hasAd;
    private mSecond;
    private showExportClose;
    private displayAd;
}
declare class FormModel {
    name: string;
    node: cc.Node;
    UIForm: any;
    zIndex: number;
    constructor();
}
/**
  * HASDO:
  * 1栈方式管理UI，
  * 2缓存UI
  * 3入栈（显示UI）
  * 4出栈（关闭UI）
  * 5关闭指定UI
  *
  * TODO:
  * 1上层UI遮盖下层UI逻辑回调
  * 2设置label默认字体
  * 3按需清理缓存
  *
  * ISSUE
  * 1由于UI是异步加载，导致UI栈顺序会错乱 (fixed)
  * 2连续push相同UI（待测试）
  */
declare class BaseUIModule extends BaseModule {
    rootCanvas: any;
    constructor();
    layerIndex: number;
    UIRoot: string;
    UIFormStack: Array<any>;
    cachedUIForms: Array<any>;
    toastForm: any;
    showToast(msg: string): void;
    /**
     * 显示一个ui
     * @param {string} name  resources/UI目录下的预设名字
     * @param {Object} data 携带的自定义数据
     * @param {Function} callback ui显示后回调:(formModel,data:Object)
     */
    pushUIForm(name: any, data?: any, callback?: any): void;
    /**
     * 从栈顶隐藏一个UI
     * @param {bool} destroy 是否销毁
     */
    pop(destroy?: boolean, cb?: any): void;
    /**
    * 获取一个UIForm
    * @param {string} name
    */
    getUIFrom(name: string): any;
    /**
     * 隐藏某个UI
     * @param {string} name 预设名
     * @param {any} data 携带的自定义数据
     */
    hideUIForm(name: string, data: any, cb?: any): void;
    hideAllUIForm(): void;
    destroyUIForm(name: string, data: any): void;
    _formatUIFormName(name: string): string;
    /**
     * 实例化resource下ui目录的prefab
     * @param {Int} formId 层级
     * @param {string} name resources下的路径
     * @param {Function} callback 参数 node
     */
    _createUINode(name: string, formId: number, callback: Function): void;
    /**
     * 创建一个formModel
     * @param {string} name
     * @param {Function} callback (node, index)
     */
    _createUIFormModel(name: string, callback: Function): void;
    _getUINodeFromCacheByName(name: string): any;
    _showUIForm(formModel: FormModel, data: any): void;
    _hideUIForm(formModel: FormModel, data: any, cb?: any): void;
    _destroyUIForm(formModel: FormModel, data: any): void;
    _removeStack(removeItem: any): void;
}
declare class MistouchForm extends BaseForm {
    clickProgress: any;
    btnBanner: any;
    logo: any;
    mBeginPos: any;
    mEndPos: any;
    private mMaxNum;
    private mCurrentNum;
    private mNavigateIndex;
    private mBannerShow;
    private mShowTime;
    private mBannerClickType;
    private LogicData;
    initPos(): void;
    willShow(data: any): void;
    willHide(): void;
    private subProgress;
    addEvent(): void;
    removeEvent(): void;
    private bannerClickCallback;
    onLogoUp(): void;
    onLogoDown(): void;
    onBannerClick(): void;
    /**
     * 点击完成回调
     */
    onCompleted(): void;
    private resetProgress;
    private onHideBanner;
    update(): void;
}
declare class FormControl {
    private mAdForm;
    /**
     * 广告form
     */
    get adForm(): AdForm;
    private mMistouchForm;
    get mistouchForm(): MistouchForm;
}
/**
 * 广告结果
 */
declare class Form {
    /**
     * 预加载广告
     */
    preloadAd(): void;
    /**
     * 显示广告
     * @param adType 广告类型
     * @param callback  有返回按钮时的回调
     * @param zIndex  层级
     */
    showAd(adType: AD_POSITION, callback: Function, zIndex?: number): void;
    /**
    * 显示狂点页面
    */
    showMistouch(): void;
}
declare class DelayMove extends BaseModule {
    posButton: cc.Node;
    moveDis: number;
    showBanner: boolean;
    private pos1;
    private pos2;
    private mMistouchPosNum;
    private mMistouchPosSecond;
    /**
     *
     * @param moveNode
     * @param distince
     * @param showBanner
     */
    move(moveNode: any, distince: any, showBanner: any): void;
    private setPos;
    private onPosCallback;
    private removeTemp;
}
declare class DelayShow extends BaseModule {
    show(node: any, delayTime?: number): void;
    hideNode(node: any): void;
    private showNode;
}
declare class Delay extends BaseModule {
    private mMistouchPos;
    private mDelayMove;
    get DelayMove(): DelayMove;
    private mDelayShow;
    get DelayShow(): DelayShow;
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
    static SHARE_CHANNEL: {
        ARTICLE: string;
        VIDEO: string;
        TOKEN: string;
        LINK: string;
    };
    static Common = Common;
    static EVENT_TYPE = EventType;
    static APP_PLATFORM = PlatformType;
    static AD_POSITION = AD_POSITION;
    static getAppPlatform(): PlatformType
    static http: HttpModule
    static platform: PlatformModule
    static ad: AdModule
    static setting: SettingModule
    static data: GameDataCenter
    static event: EventModule
    static ui: BaseUIModule
    static resource: IResourceModule
    static entity: BaseEntityModule
    static form: Form
    static control: FormControl
    static delay: Delay
}
