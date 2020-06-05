/**
 * 金币飞入动画
 */
export default class coinAnimStyle {
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
    starVec: {
        x: any;
        y: any;
    };
    /**
     * 结束位置
     */
    endVec: {
        x: any;
        y: any;
    };
}
