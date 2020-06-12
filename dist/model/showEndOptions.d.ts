import showTouchOptions from "./showTouchOptions";
/**
 * 唤起结算页参数
 */
export default class showEndOptions {
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
     * 扩展数据
     */
    extraData: Object;
    /**
     * 用户点击领取后是否隐藏当前页
     */
    hideEnd: boolean;
    /**
    * 通关成功 or 通关失败
    */
    isWin: boolean;
    /**
     * 结束时的游戏关卡
     */
    level: string;
    /**
     * 唤起误触时的参数
     */
    touchOptions: showTouchOptions;
}
