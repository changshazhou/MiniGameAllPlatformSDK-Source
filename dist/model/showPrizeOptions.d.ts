import showOptions from "./showOptions";
/**
 * 奖励页参数
 */
export default class showPrizeOptions extends showOptions {
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
