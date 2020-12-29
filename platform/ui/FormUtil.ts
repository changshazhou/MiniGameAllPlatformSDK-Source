import EventType from "../utils/PLATFORM_EVENT";
import CocosFormFactory from "./cocos/helper/CocosFormFactory";
import CocosToastForm from "./cocos/form/CocosToastForm";
import showAdOptions from "../model/showAdOptions";
import FormLayout from "./FormLayout";
import CocosBaseForm from "./cocos/form/CocosBaseForm";
import FormFactory from "./engine/FormFactory";
import CocosNativeForm from "./cocos/form/CocosNativeForm";
import showNativeOptions from "../model/showNativeOptions";
import CheckboxComponent from "./cocos/common/CheckboxComponent";
import showFormOptions from "../model/showFormOptions";
import vectory from "../model/Vectory";

/**
 * 广告结果
 */
export default class FormUtil {



    public formFactory: FormFactory;
    constructor() {
        this.formFactory = new CocosFormFactory();
    }

    public mCheckbox: CheckboxComponent;
    /**
     * 初始化多选框状态
     * @param defaultChecked 默认选择状态
     * @param callback checkboxToggle 触发的回调 isChecked 表示选择状态
     */
    public initCheckboxState(defaultChecked = true, callback?: (isChecked) => void) {
        this.mCheckbox = new CheckboxComponent(defaultChecked, callback);
        this.mCheckbox.onShow(null);

    }

    /**
     * 执行点击
     */
    public checkboxToggle() {
        this.mCheckbox.checkToggle();
    }





    private mBaseForm = new CocosBaseForm();
    /**
     * 增加点击效果和事件回调
     * @param node 
     * @param callback 
     * @param stopPropagation 
     * @param once 
     */
    public applyClickAnim(node: cc.Node, callback?: Function, stopPropagation: boolean = false, once: boolean = true) {
        this.mBaseForm.applyClickAnim(node, callback, stopPropagation, once)
    }
    /**
     * 删除点击效果和事件回调
     * @param node 
     */
    public removeClickAnim(node: cc.Node) {
        this.mBaseForm.removeClickAnim(node)
    }

    /**
     * Toast消息
     * @param msg  消息内容
     */
    public showToast(msg: string) {
        this.formFactory.showForm(new showFormOptions(FormLayout.ToastForm, CocosToastForm, msg))
    }


    public showNativeAd(options: showNativeOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.NativeForm, CocosNativeForm, options))
    }

    /**
     * 显示广告
     * @param adType 广告类型
     * @param callback  有返回按钮时的回调
     * @param points  层级
     * @param templetes  层级
     * @param zIndex  层级
     */
    public showAd(adType: number = 0, callback: () => void, points?: Array<vectory>, templetes?: Array<string>, zIndex: number = cc.macro.MAX_ZINDEX,
        pointName: string = "", formName: string = "" || "loadingForm" || "homeForm" || "gameForm" || "endForm" || "respawnForm") {

        let options = new showAdOptions();
        options.adType = adType;
        options.zIndex = zIndex;
        options.floatPositon = points;
        options.floatTempletes = templetes;
        options.pointName = pointName;
        options.formName = formName;
        options.callback = callback;
        this.showAd2(options)

    }

    /**
     * 显示广告
     * @param options 
     */
    public showAd2(options: showAdOptions) {
        moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, {
            showAd: options.adType,
            zIndex: options.zIndex,
            points: options.floatPositon,
            templetes: options.floatTempletes,
            pointName: options.pointName,
            formName: options.formName,
            callback: options.callback,
        })
    }


    public hideAd(callback: Function) {
        moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: 0, callback })
    }
}