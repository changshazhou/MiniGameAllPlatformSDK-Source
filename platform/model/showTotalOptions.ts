import showEndOptions from "./showEndOptions";
import showOptions from "./showOptions";


/**
 * 唤起结算页参数
 */
export default class showTotalOptions extends showOptions {

    // /**
    // * 实例化参数
    // */
    // public static create(): showTotalOptions {
    //     return new showTotalOptions();
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
     * 点击更多好玩 
     */
    public onMore: Function;


    /**
     * 用户点击领取后是否打开结束页
     */
    public showEnd: boolean = true;

    /**
     * 打开结束也时的参数 showEnd=true 时 必填
     */
    public endOptions?: showEndOptions
}