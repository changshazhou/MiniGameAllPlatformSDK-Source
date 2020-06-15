import showOptions from "./showOptions";
/**
 * 奖励页参数
 */
export default class showShareOptions extends showOptions {
    /**
     * 分享将获得金币数量
     */
    shareCoinNum: number;
    /**
     * 分享后的回调
     */
    shareCallback?: (shared: any) => void;
    /**
     * 视频回调
     */
    videoCallback?: Function;
    /**
     * 普通按钮回调
     */
    callback?: Function;
}
