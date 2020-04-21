
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
    private getDistinctAd;
    getAd(callback: (appList: moosnowResult) => {}): void;
    getRemoteAd(cb: any): void;
    private cacheImage;
    private cacheKey;
    private loadCacheImage;
    private getResUrl;
    private initRetValue;
    private formatRow;
    private convertToCacheUrl;
    private saveCacheUrl;
    private downloadImage;
    private mMemory;
    private getCache;
    private setCache;
}


declare class HttpModule extends BaseModule {
    private appid;
    private secret;
    private versionNumber;
    version: string;
    baseUrl: string;
    private mLaunchOptions;
    constructor();
    request(url: string, data: any, method: 'POST' | 'GET', success?: Function, fail?: Function, complete?: Function): void;
    private _object2Query;
    isDisableArea(callback: any): void;
    finishLoading(): void;
    clickBanner(): void;
    clickVideo(): void;
    exportUser(): void;
    private postData;
    point(name: any, data?: any): void;
    startGame(level: any): void;
    endGame(level: any, isWin: any): void;
    videoPoint(type: any, info: any, level: any): void;
    getAllConfig(callback: Function): void;
    private cfgData;
    private areaData;
    loadCfg(callback: any): void;
    loadArea(callback: any): void;
    getForceExport(callback: any): void;
    disabledForceExport(res: any, res2: any, callback: any): void;
    getMisTouchNum(callback: any): void;
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

declare const VIDEO_STATUS: {
    END: string;
    NOTEND: string;
    ERR: string;
};
declare const VIDEO_MSG: {
    ERR: string;
    NOTEND: string;
};
declare const SHARE_MSG: {
    FAIL: string;
};
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
    platformName: string;
    bannerId: string;
    videoId: string;
    interId: string;
    bannerWidth: number;
    bannerShowCount: number;
    bannerShowCountLimit: number;
    videoCb: Function;
    videoLoading: boolean;
    interShowCount: number;
    interShowCountLimit: number;
    isInterLoaded: boolean;
    record: any;
    private shareInfoArr;
    onEnable(): void;
    private vibrateSwitch;
    initAppConfig(): void;
    isIphoneXModel(): boolean;
    isIphoneX(): boolean;
    private compareVersion;
    checkVersion(version: string): boolean;
    checkVersionAd(version: string, callback: any): void;
    isSmallWidth(): boolean;
    login(success?: Function, fail?: Function): void;
    postMessage(data: {
        action: number;
        data?: any;
    }): void;
    prevNavigate: number;
    navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function): void;
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
    getLaunchOption(): any;
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
    showBanner(): void;
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
    _onInterError(): void;
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
    static initPlatform: Function
    static http: HttpModule
    static platform: PlatformModule
    static ad: AdModule
    static setting: SettingModule
    static data: GameDataCenter
}
