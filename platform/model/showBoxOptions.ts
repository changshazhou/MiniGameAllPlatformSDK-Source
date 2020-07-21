import showOptions from "./showOptions";


export default class showBoxOptions extends showOptions {
    /**
     * 行数 默认3
     */
    rowNum: number = 3;
    /**
     * 列 默认3
     */
    colNum: number = 3;
    /**
     * 打开获得的金币数,长度2的数组  [100,300] 随机取
     */
    coinNum: Array<number> = [];
    /**
     * 打开视频获得的金币数,长度2的数组  [100,300] 随机取
     */
    videoCoinNum: Array<number> = [];
    /**
     * 视频宝箱得位置
     */
    videoNum: Array<number> = [0, 5, 9]
    /**
     * 打开箱子时回调
     */
    openCallback: (coinNum) => void;
    /**
     * 
     */
    callback: () => void

}