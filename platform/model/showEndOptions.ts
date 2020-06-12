import showTouchOptions from "./showTouchOptions";

/**
 * 唤起结算页参数
 */
export default class showEndOptions {
    /**
     * 金币数量
     */
    public coinNum: number;
    /**
    * 金币数量
    */
    public videoNum: number;
    /**
    * 分享得到金币数量
    */
    public shareCoinNum: number;
    /**
     * 普通领取回调
     */
    public onReceive: Function;
    /**
     * 视频领取回调
     */
    public onVideoReceive: Function;
    /**
     * 扩展数据
     */
    public extraData: Object = {};
    /**
     * 用户点击领取后是否隐藏当前页
     */
    public hideEnd: boolean = true;
    /**
    * 通关成功 or 通关失败
    */
    public isWin: boolean = true;

    /**
     * 结束时的游戏关卡
     */
    public level: string;

    /**
     * 唤起误触时的参数
     */
    public touchOptions: showTouchOptions

}