import showTouchOptions from "./showMistouchOptions";
import showOptions from "./showOptions";
import showCoinOptions from "./showCoinOptions";

/**
 * 唤起暂停页参数
 */
export default class showPauseOptions extends showOptions {

    /**
     * 继续游戏 回调
     */
    callback?: Function
    /**
     * 重新开始 回调
     */
    replayCallback?: Function
    /**
    * 回到首页 回调
    */
    homeCallback?: Function
}