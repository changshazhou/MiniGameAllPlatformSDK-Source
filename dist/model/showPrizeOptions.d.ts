import showCoinOptions from "./showCoinOptions";
import showOptions from "./showOptions";
/**
 * 奖励页参数
 */
export default class showPrizeOptions extends showOptions {
    /**
     * 是否显示金币动画
     */
    showCoinAnim: boolean;
    /**
     * 显示金币动画时，金币动画的参数
     */
    coinOptions?: showCoinOptions;
    /**
     *
     */
    baseNum: number;
    /**
     * 点击完成回调
     */
    callback?: Function;
    /**
     * 分享完成回调
     */
    shareCallback?: (shared: boolean) => void;
    /**
     * 看完视频回调
     */
    videoCallback?: Function;
}
