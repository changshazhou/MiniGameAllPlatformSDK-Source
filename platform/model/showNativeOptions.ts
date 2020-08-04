import showOptions from "./showOptions"

export default class showNativeOptions extends showOptions {


    public x: number = 0
    public y: number = 0
    /**
    * 关闭广告时回调
    */
    public callback?: Function
    /**
     * 没有广告数据时回调
     */
    public nullCallback?: Function
}