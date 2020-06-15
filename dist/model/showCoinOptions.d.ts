import showOptions from "./showOptions";
import vectory from "./Vectory";
/**
 * 金币飞入动画
 */
export default class showCoinOptions extends showOptions {
    /**
     * Y方向的随机范围
     */
    randomY: number;
    /**
    * X方向的随机范围
    */
    randomX: number;
    /**
     * 金币图片数量
     */
    imgNum: number;
    /**
     * 金币数量
     */
    coinNum: number;
    /**
     * 开始位置
     */
    starVec: vectory;
    /**
     * 结束位置
     */
    endVec: vectory;
    /**
     * 结束位置
     */
    callback?: Function;
}
