import showOptions from "./showOptions";
export default class showNativeOptions extends showOptions {
    x: number;
    y: number;
    /**
    * 关闭广告时回调
    */
    callback?: Function;
    /**
     * 没有广告数据时回调
     */
    nullCallback?: Function;
}
