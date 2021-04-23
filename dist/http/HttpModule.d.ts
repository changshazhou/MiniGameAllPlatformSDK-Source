import BaseModule from "../framework/BaseModule";
export declare class HttpModule extends BaseModule {
    private appid;
    private secret;
    private versionNumber;
    version: string;
    baseUrl: string;
    private instanceTime;
    constructor();
    private mLaunchOptions;
    private get appLaunchOptions();
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
    _object2Query(obj: any): string;
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
     * 跳转记录
     * @param jump_appid
     * @param callback
     */
    navigate(row: any, callback: (res: any) => void): void;
    /**
     * 跳转完成
     * @param code
     */
    navigateEnd(code: string): void;
    /**
     * 数据打点
     * @param name  打点名称
     */
    point(name: string, data?: any): void;
    /**
    * 统计开始游戏
    * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
    */
    startGame(level: string): void;
    /**
     * 统计结束游戏
     * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     * @param {boolean} isWin 是否成功
     */
    endGame(level: string, isWin: boolean): void;
    /**
     * 视频统计
     * @param {number} type 0：视频点击 1：视频观看完成
     * @param {string} info 信息 ex:“领取三倍金币”
     * @param {string} level 关卡数
     */
    videoPoint(type: any, info: string, level: string): void;
    /**
     *
     * @param callback
     */
    getAllConfig(callback: Function): void;
    cfgData: any;
    areaData: any;
    _cfgQuene: any[];
    updateCache(key: string, value: any): void;
    private getCfg;
    /**
     *
     * @param res
     * @param applyRemote 使用后台数据
     */
    private defaultCfg;
    loadCfg(callback: any): void;
    private _localQuene;
    loadArea(callback: any): void;
    getForceExport(callback: any): void;
    disabledForceExport(res: any, res2: any, callback: any): void;
    getBannerShowCountLimit(callback: any): void;
    private disableAd;
    getShareInfo(cb: any): void;
}
