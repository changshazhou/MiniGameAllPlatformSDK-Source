import showTouchOptions from "./showTouchOptions";
import showOptions from "./showOptions";

/**
 * 唤起结算页参数
 */
export default class showEndOptions extends showOptions {
    // /**
    //  * 实例化参数
    //  */
    // public static create(): showEndOptions {
    //     return new showEndOptions();
    // }
    /**
     * 金币数量
     */
    public coinNum: number = 0;
    /**
    * 金币数量
    */
    public videoNum: number = 0;
    /**
    * 分享得到金币数量
    */
    public shareCoinNum: number = 0;
    /**
     * 普通领取回调
     */
    public onReceive: Function;
    /**
     * 视频领取回调
     */
    public onVideoReceive: Function;

    /**
    * 通关成功 or 通关失败
    */
    public isWin: boolean = true;

    /**
     * 结束时的游戏关卡
     */
    public level: string = "1";

    /**
     * 唤起误触时的参数
     */
    public touchOptions: showTouchOptions

}