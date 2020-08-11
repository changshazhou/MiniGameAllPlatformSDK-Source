import showTouchOptions from "./showMistouchOptions";
import showOptions from "./showOptions";
import showCoinOptions from "./showCoinOptions";

/**
 * 唤起结算页参数
 */
export default class showFailOptions extends showOptions {

    /**
     * 继续游戏回调
     */
    callback?: Function
    /**
     * 分享之后回调
     */
    shareCallback?: Function
    /**
     * 视频之后回调
     */
    videoCallback?: Function
}