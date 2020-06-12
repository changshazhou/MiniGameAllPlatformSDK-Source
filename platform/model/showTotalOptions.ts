import showEndOptions from "./showEndOptions";


/**
 * 唤起结算页参数
 */
export default class showTotalOptions {
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
     * 点击更多好玩 
     */
    public onMore: Function;
    /**
     * 扩展数据
     */
    public extraData: Object = {};
    /**
     * 用户点击领取后是否隐藏当前页
     */
    public hideTotal: boolean = true;
    /**
     * 用户点击领取后是否打开结束页
     */
    public showEnd: boolean = true;

    /**
     * 打开结束也时的参数 showEnd=true 时 必填
     */
    public endOptions: showEndOptions
}