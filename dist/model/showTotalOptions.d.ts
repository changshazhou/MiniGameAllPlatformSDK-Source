import showEndOptions from "./showEndOptions";
import showOptions from "./showOptions";
import showCoinOptions from "./showCoinOptions";
import showTouchOptions from "./showTouchOptions";
/**
 * 唤起结算页参数
 */
export default class showTotalOptions extends showOptions {
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
     * 打开结束页时的参数 ，=null 时将不展示
     */
    endOptions?: showEndOptions;
    /**
     * 金币动画参数
     */
    coinOptions?: showCoinOptions;
    /**
     * 金币动画参数
     */
    touchOptions?: showTouchOptions;
}
