import showOptions from "./showOptions";
/**
 * 皮肤试用
 */
export default class showTryOptions extends showOptions {
    /**
     * 皮肤地址
     */
    skinUrl: string;
    /**
     * 不试用 回调
     */
    callback?: Function;
    /**
     * 视频回调
     */
    videoCallback?: Function;
}
