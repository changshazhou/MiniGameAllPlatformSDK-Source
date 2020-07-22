import showOptions from "./showOptions";
export default class showMistouchOptions extends showOptions {
    /**
     * 跳动的图片地址
     */
    url: string;
    /**
     * 点击完成回调
     */
    callback?: Function;
    /**
     * 误触后得到的 金币数量
     */
    coinNum: number;
}
