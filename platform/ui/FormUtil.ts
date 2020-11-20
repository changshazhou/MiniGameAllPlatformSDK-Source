import EventType from "../utils/EventType";
import UIFormSetting from "../config/UIFormSetting";
import { AD_POSITION } from "../enum/AD_POSITION";

import showCoinOptions from "../model/showCoinOptions";
import showOptions from "../model/showOptions";
import showTotalOptions from "../model/showTotalOptions";
import showEndOptions from "../model/showEndOptions";
import showMistouchOptions from "../model/showMistouchOptions";
import showPrizeOptions from "../model/showPrizeOptions";
import showShareOptions from "../model/showShareOptions";
import showPauseOptions from "../model/showPauseOptions";
import showTryOptions from "../model/showTryOptions";
import CocosFormFactory from "./cocos/helper/CocosFormFactory";
import CocosEndForm from "./cocos/form/CocosEndForm";
import CocosPauseForm from "./cocos/form/CocosPauseForm";
import CocosTotalForm from "./cocos/form/CocosTotalForm";
import CocosToastForm from "./cocos/form/CocosToastForm";
import CocosTryForm from "./cocos/form/CocosTryForm";
import showSetOptions from "../model/showSetOptions";
import CocosSetForm from "./cocos/form/CocosSetForm";
import showBoxOptions from "../model/showBoxOptions";
import CocosBoxForm from "./cocos/form/CocosBoxForm";
import CocosShareForm from "./cocos/form/CocosShareForm";
import CocosMistouchForm from "./cocos/form/CocosMistouchForm";
import CocosAdForm from "./cocos/form/CocosAdForm";
import showAdOptions from "../model/showAdOptions";
import loadAdOptions from "../model/loadAdOptions";
import CocosPrizeForm from "./cocos/form/CocosPrizeForm";
import FormLayout from "./FormLayout";
import CocosBaseForm from "./cocos/form/CocosBaseForm";
import FormFactory from "./engine/FormFactory";
import CocosNativeForm from "./cocos/form/CocosNativeForm";
import showNativeOptions from "../model/showNativeOptions";
import vectory from "../../dist/model/Vectory";
import CocosRespawnForm from "./cocos/form/CocosRespawnForm";
import showRespawnOptions from "../model/showRespawnOptions";
import showFailOptions from "../model/showFailOptions";
import CocosFailForm from "./cocos/form/CocosFailForm";
import CheckboxComponent from "./cocos/common/CheckboxComponent";
import showFormOptions from "../model/showFormOptions";

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

    public loadAd(options: loadAdOptions) {
        let formOptions = new showFormOptions(FormLayout.AdForm, CocosAdForm, { ...new loadAdOptions(), ...options });
        formOptions.callback = (node: cc.Node) => {
            console.log('create ad form')
        }
        this.formFactory.showForm(formOptions)
    }

    /**
     * 显示广告
     * @param adType 广告类型
     * @param callback  有返回按钮时的回调
     * @param points  层级
     * @param templetes  层级
     * @param zIndex  层级
     */
    public showAd(adType: number = AD_POSITION.NONE, callback: () => void, points?: Array<vectory>, templetes?: Array<string>, zIndex: number = cc.macro.MAX_ZINDEX,
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
        moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: AD_POSITION.NONE, callback })
    }

    /**
     * 金币动画
     * @param options 
     */
    public showCoin(options: showCoinOptions) {
    }


    /**
     * 显示狂点页面
     * @param options 
     */
    public showMistouch(options: showMistouchOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.MistouchForm, CocosMistouchForm, options))
    }
    /**
     * 显示奖励
     * @param style 金币动画
     * @param baseNum 视频奖励领取的倍数
     * @param showCoinAnim 显示金币动画
     * @param callback 
     */
    public showPrize(options: showPrizeOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.PrizeForm, CocosPrizeForm, options))
    }



    /**
     * 显示结算统计页
     * @param coinNum 
     * @param callback 
     */
    public showTotal(options: showTotalOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.TotalForm, CocosTotalForm, options))
    }


    /**
    * 显示结算统计页
    * @param coinNum 
    * @param callback 
    */
    public showEnd(options: showEndOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.EndForm, CocosEndForm, options))
    }

    /**
        * 显示复活页面
        * @param coinNum 
        * @param callback 
        */
    public showRespawn(options: showRespawnOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.RespawnForm, CocosRespawnForm, options))
    }
    /**
     * 显示失败页面
     * @param coinNum 
     * @param callback 
     */
    public showFail(options: showFailOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.FailForm, CocosFailForm, options))
    }
    /**
      * 显示结算统计页
      * @param coinNum 
      * @param callback 
      */
    public showPause(options: showPauseOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.PauseForm, CocosPauseForm, options))
    }

    /**
     *  showShare
     */
    public showShare(options: showShareOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.ShareForm, CocosShareForm, options))
    }

    /**
    *  showShare
    */
    public showTry(options: showTryOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.TryForm, CocosTryForm, options))
    }

    /**
     *  showShare
     */
    public showSet(options: showSetOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.SetForm, CocosSetForm, options))
    }

    /**
        *  showShare
        */
    public showBox(options: showBoxOptions) {
        this.formFactory.showForm(new showFormOptions(FormLayout.BoxForm, CocosBoxForm, options))
    }

    /**
     * 显示窗体  此方法只会显示UI内容，不包含任何逻辑,一般用于自定义窗体
     * @param formName FormLayout 中的枚举值或者 字符串
     */
    public createForm(formName: string) {
        this.formFactory.showForm(new showFormOptions(formName, CocosBaseForm, {}))
    }
    /**
     * 隐藏窗体  
     * @param formName FormLayout 中的枚举值或者 字符串
     */
    public hideForm(formName: string) {
        this.formFactory.hideForm(formName, null);
    }

}