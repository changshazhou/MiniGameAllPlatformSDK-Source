import showCoinOptions from "./showCoinOptions";
import showOptions from "./showOptions";
/**
 * 奖励页参数
 */
export default class showPrizeOptions extends showOptions {
    // /**
    //  * 实例化参数
    //  */
    // public static create(): showPrizeOptions {
    //     return new showPrizeOptions();
    // }
    /**
     * 是否显示金币动画
     */
    showCoinAnim: boolean = true
    /**
     * 显示金币动画时，金币动画的参数
     */
    coinOptions?: showCoinOptions = null
    /**
     * 
     */
    baseNum: number = 1
    /**
     * 点击完成回调
     */
    callback?: Function = null;
    /**
     * 分享完成回调
     */
    shareCallback?: (shared: boolean) => void = null;
    /**
     * 看完视频回调
     */
    videoCallback?: Function = null;
}