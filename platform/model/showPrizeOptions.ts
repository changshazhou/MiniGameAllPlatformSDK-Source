import showCoinOptions from "./showCoinOptions";
import showOptions from "./showOptions";
/**
 * 奖励页参数
 */
export default class showPrizeOptions extends showOptions {
    /**
     * 
     */
    logo: string = null;
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