import showOptions from "./showOptions";
import vectory from "./Vectory";

/**
 * 金币飞入动画
 */
export default class showCoinOptions extends showOptions {

    /**
     * Y方向的随机范围
     */
    randomY: number = 100
    /**
    * X方向的随机范围
    */
    randomX: number = 100

    /**
     * 金币图片数量
     */
    imgNum: number = 30;

    /**
     * 金币数量
     */
    coinNum: number = 0;

    /**
     * 开始位置
     */
    starVec: vectory = new vectory();
    /**
     * 结束位置
     */
    endVec: vectory = new vectory();

    /**
     * 结束位置
     */
    callback?: Function;

}


