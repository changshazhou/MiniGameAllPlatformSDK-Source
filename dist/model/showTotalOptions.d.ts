import showEndOptions from "./showEndOptions";
/**
 * 唤起结算页参数
 */
export default class showTotalOptions {
    /**
     * 金币数量
     */
    coinNum: number;
    /**
    * 金币数量
    */
    videoNum: number;
    /**
    * 分享得到金币数量
    */
    shareCoinNum: number;
    /**
     * 普通领取回调
     */
    onReceive: Function;
    /**
     * 视频领取回调
     */
    onVideoReceive: Function;
    /**
     * 点击更多好玩
     */
    onMore: Function;
    /**
     * 扩展数据
     */
    extraData: Object;
    /**
     * 用户点击领取后是否隐藏当前页
     */
    hideTotal: boolean;
    /**
     * 用户点击领取后是否打开结束页
     */
    showEnd: boolean;
    /**
     * 打开结束也时的参数 showEnd=true 时 必填
     */
    endOptions: showEndOptions;
}
