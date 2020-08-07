import showOptions from "./showOptions"

/**
 * 奖励页参数
 */
export default class showShareOptions extends showOptions {
    // /**
    //  * 实例化参数
    //  */
    // public static create(): showShareOptions {
    //     return new showShareOptions();
    // }
    /**
     * 分享将获得金币数量
     */
    shareCoinNum: number = 0;
    /**
     * 分享后的回调
     */
    shareCallback?: (shared) => void
    /**
     * 视频回调
     */
    videoCallback?: Function


    /**
     * 普通按钮回调 
     */
    callback?: Function

}