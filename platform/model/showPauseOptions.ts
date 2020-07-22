import showTouchOptions from "./showMistouchOptions";
import showOptions from "./showOptions";
import showCoinOptions from "./showCoinOptions";

/**
 * 唤起暂停页参数
 */
export default class showPauseOptions extends showOptions {

    /**
     * 返回 回调
     */
    callback?: Function
    /**
     * 重新开始回调
     */
    replayCallback?: Function
}