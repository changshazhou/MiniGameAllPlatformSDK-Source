import showOptions from "./showOptions";
/**
 * 唤起结算页参数
 */
export default class showTotalOptions extends showOptions {
    /**
     * 返回 回调
     */
    callback?: Function;
    /**
     * 重新开始回调
     */
    videoCallback?: Function;
    /**
     * 显示金币数量
     */
    coinNum: number;
    /**
     * 视频文本
     */
    videoText: string;
}
