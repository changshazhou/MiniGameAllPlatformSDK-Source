/**
 * 广告结果
 */
export default class Form {
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
}
