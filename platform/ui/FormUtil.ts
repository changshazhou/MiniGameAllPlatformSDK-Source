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

import { ROOT_CONFIG } from "../config/ROOT_CONFIG";
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
import { PlatformType } from "../enum/PlatformType";
import Common from "../utils/Common";
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

/**
 * 广告结果
 */
export default class FormUtil {



    public formFactory: FormFactory;
    constructor() {
        this.formFactory = new CocosFormFactory();
    }

    /**
     * Toast消息
     * @param msg  消息内容
     */
    public showToast(msg: string) {
        this.formFactory.showForm(FormLayout.ToastForm, CocosToastForm, msg)
    }


    public showNativeAd(options: showNativeOptions) {
        this.formFactory.showForm(FormLayout.NativeForm, CocosNativeForm, options)
    }

    public loadAd(options: loadAdOptions) {

        this.formFactory.showForm(FormLayout.AdForm, CocosAdForm, { ...new loadAdOptions(), ...options }, null, () => {
            console.log('create ad form')
        })
    }

    /**
     * 显示广告
     * @param adType 广告类型
     * @param callback  有返回按钮时的回调
     * @param points  层级
     * @param templetes  层级
     * @param zIndex  层级
     */
    public showAd(adType: number = AD_POSITION.NONE, callback: Function, points?: Array<cc.Vec2>, templetes?: Array<string>, zIndex: number = cc.macro.MAX_ZINDEX) {
        //
        if (Common.platform == PlatformType.BYTEDANCE && moosnow.platform.isIphone()) {
            console.log('头条iphone 不显示广告')
            return;
        }
        moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback, zIndex, points, templetes })

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
        this.formFactory.showForm(FormLayout.MistouchForm, CocosMistouchForm, options)
    }
    /**
     * 显示奖励
     * @param style 金币动画
     * @param baseNum 视频奖励领取的倍数
     * @param showCoinAnim 显示金币动画
     * @param callback 
     */
    public showPrize(options: showPrizeOptions) {
        this.formFactory.showForm(FormLayout.PrizeForm, CocosPrizeForm, options)
    }



    /**
     * 显示结算统计页
     * @param coinNum 
     * @param callback 
     */
    public showTotal(options: showTotalOptions) {
        this.formFactory.showForm(FormLayout.TotalForm, CocosTotalForm, options)
    }


    /**
    * 显示结算统计页
    * @param coinNum 
    * @param callback 
    */
    public showEnd(options: showEndOptions) {
        this.formFactory.showForm(FormLayout.EndForm, CocosEndForm, options)
    }

    /**
        * 显示复活页面
        * @param coinNum 
        * @param callback 
        */
    public showRespawn(options: showRespawnOptions) {
        this.formFactory.showForm(FormLayout.RespawnForm, CocosRespawnForm, options)
    }
    /**
     * 显示失败页面
     * @param coinNum 
     * @param callback 
     */
    public showFail(options: showFailOptions) {
        this.formFactory.showForm(FormLayout.FailForm, CocosFailForm, options)
    }
    /**
      * 显示结算统计页
      * @param coinNum 
      * @param callback 
      */
    public showPause(options: showPauseOptions) {
        this.formFactory.showForm(FormLayout.PauseForm, CocosPauseForm, options)
    }

    /**
     *  showShare
     */
    public showShare(options: showShareOptions) {
        this.formFactory.showForm(FormLayout.ShareForm, CocosShareForm, options)
    }

    /**
    *  showShare
    */
    public showTry(options: showTryOptions) {
        this.formFactory.showForm(FormLayout.TryForm, CocosTryForm, options)
    }

    /**
     *  showShare
     */
    public showSet(options: showSetOptions) {
        this.formFactory.showForm(FormLayout.SetForm, CocosSetForm, options)
    }

    /**
        *  showShare
        */
    public showBox(options: showBoxOptions) {
        this.formFactory.showForm(FormLayout.BoxForm, CocosBoxForm, options)
    }

    /**
     * 显示窗体  此方法只会显示UI内容，不包含任何逻辑,一般用于自定义窗体
     * @param formName FormLayout 中的枚举值或者 字符串
     */
    public createForm(formName: string) {
        this.formFactory.showForm(formName, CocosBaseForm, {})
    }
    /**
     * 隐藏窗体  
     * @param formName FormLayout 中的枚举值或者 字符串
     */
    public hideForm(formName: string) {
        this.formFactory.hideForm(formName, null);
    }

}