import showCoinOptions from "../model/showCoinOptions";
import showOptions from "../model/showOptions";
import showTotalOptions from "../model/showTotalOptions";
import showEndOptions from "../model/showEndOptions";
import showTouchOptions from "../model/showTouchOptions";
import showPrizeOptions from "../model/showPrizeOptions";
import showShareOptions from "../model/showShareOptions";
import showPauseOptions from "../model/showPauseOptions";
import showTryOptions from "../model/showTryOptions";
import showSetOptions from "../model/showSetOptions";
import showBoxOptions from "../model/showBoxOptions";
/**
 * 广告结果
 */
export default class FormUtil {
    constructor();
    optionsFactory: typeof showOptions;
    /**
     * Toast消息
     * @param msg  消息内容
     */
    showToast(msg: string): void;
    /**
     *  预加载广告
     * @param callback
     */
    preloadAd(callback?: Function): void;
    private mLoadedAdFrom;
    /**
     * 显示广告
     * @param adType 广告类型
     * @param callback  有返回按钮时的回调
     * @param zIndex  层级
     */
    showAd(adType: number, callback: Function, zIndex?: number): void;
    /**
     * 金币动画
     * @param options
     */
    showCoin(options: showCoinOptions): void;
    /**
     * 显示狂点页面
     * @param callback 点击完成回调
     * @param type 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
     */
    showMistouch(options: showTouchOptions): void;
    /**
     * 显示奖励
     * @param style 金币动画
     * @param baseNum 视频奖励领取的倍数
     * @param showCoinAnim 显示金币动画
     * @param callback
     */
    showPrize(options: showPrizeOptions): void;
    /**
     * 显示结算统计页
     * @param coinNum
     * @param callback
     */
    showTotal(options: showTotalOptions): void;
    /**
    * 显示结算统计页
    * @param coinNum
    * @param callback
    */
    showEnd(options: showEndOptions): void;
    /**
      * 显示结算统计页
      * @param coinNum
      * @param callback
      */
    showPause(options: showPauseOptions): void;
    /**
     *  showShare
     */
    showShare(options: showShareOptions): void;
    /**
    *  showShare
    */
    showTry(options: showTryOptions): void;
    /**
     *  showShare
     */
    showSet(options: showSetOptions): void;
    /**
        *  showShare
        */
    showBox(options: showBoxOptions): void;
    createForm(formName: string): void;
}
