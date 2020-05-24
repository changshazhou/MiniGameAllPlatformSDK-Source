import BaseModule from "../framework/BaseModule";
export default class AdModule extends BaseModule {
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
