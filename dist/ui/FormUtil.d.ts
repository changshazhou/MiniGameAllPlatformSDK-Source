import showAdOptions from "../model/showAdOptions";
import FormFactory from "./engine/FormFactory";
import showNativeOptions from "../model/showNativeOptions";
import CheckboxComponent from "./cocos/common/CheckboxComponent";
import vectory from "../model/Vectory";
/**
 * 广告结果
 */
export default class FormUtil {
    formFactory: FormFactory;
    constructor();
    mCheckbox: CheckboxComponent;
    /**
     * 初始化多选框状态
     * @param defaultChecked 默认选择状态
     * @param callback checkboxToggle 触发的回调 isChecked 表示选择状态
     */
    initCheckboxState(defaultChecked?: boolean, callback?: (isChecked: any) => void): void;
    /**
     * 执行点击
     */
    checkboxToggle(): void;
    private mBaseForm;
    /**
     * 增加点击效果和事件回调
     * @param node
     * @param callback
     * @param stopPropagation
     * @param once
     */
    applyClickAnim(node: cc.Node, callback?: Function, stopPropagation?: boolean, once?: boolean): void;
    /**
     * 删除点击效果和事件回调
     * @param node
     */
    removeClickAnim(node: cc.Node): void;
    /**
     * Toast消息
     * @param msg  消息内容
     */
    showToast(msg: string): void;
    showNativeAd(options: showNativeOptions): void;
    /**
     * 显示广告
     * @param adType 广告类型
     * @param callback  有返回按钮时的回调
     * @param points  层级
     * @param templetes  层级
     * @param zIndex  层级
     */
    showAd(adType: number, callback: () => void, points?: Array<vectory>, templetes?: Array<string>, zIndex?: number, pointName?: string, formName?: string): void;
    /**
     * 显示广告
     * @param options
     */
    showAd2(options: showAdOptions): void;
    hideAd(callback: Function): void;
}
