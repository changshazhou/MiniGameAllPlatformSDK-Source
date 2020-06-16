import showEndOptions from "./showEndOptions";
import showOptions from "./showOptions";
import showCoinOptions from "./showCoinOptions";
import showTouchOptions from "./showTouchOptions";


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
     * 打开结束页时的参数 ，=null 时将不展示
     */
    public endOptions?: showEndOptions

    /**
     * 金币动画参数
     */
    public coinOptions?: showCoinOptions


    /**
     * 金币动画参数
     */
    public touchOptions?: showTouchOptions
}