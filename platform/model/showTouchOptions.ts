import showOptions from "./showOptions"

export default class showTouchOptions extends showOptions {
    // /**
    // * 实例化参数
    // */
    // public static create(): showTouchOptions {
    //     return new showTouchOptions();
    // }
    /**
     * 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
     */
    type: number = 1
    /**
     * 点击完成回调
     */
    callback?: Function

}