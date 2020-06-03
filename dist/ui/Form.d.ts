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
    /**
     * 金币动画
     * @param imgNum 动画图片数量
     * @param starVec 开始位置
     * @param endVec 结束位置
     * @param callback 结束回调
     */
    showCoin(imgNum: number, starVec: {
        x: 0;
        y: 0;
    }, endVec: {
        x: 0;
        y: 0;
    }, callback: Function): void;
    /**
     * 显示狂点页面
     * @param callback 点击完成回调
     * @param type 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
     */
    showMistouch(callback: Function, type?: number): void;
}
