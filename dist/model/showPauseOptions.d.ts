import showOptions from "./showOptions";
/**
 * 唤起暂停页参数
 */
export default class showPauseOptions extends showOptions {
    /**
     * 返回 回调
     */
    callback?: Function;
    /**
     * 重新开始回调
     */
    replayCallback?: Function;
}
