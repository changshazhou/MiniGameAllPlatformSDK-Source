import EventType from "../utils/EventType";
import UIFormSetting from "../config/UIFormSetting";
import { AD_POSITION } from "../enum/AD_POSITION";

import showCoinOptions from "../model/showCoinOptions";
import showOptions from "../model/showOptions";
import showTotalOptions from "../model/showTotalOptions";
import showEndOptions from "../model/showEndOptions";
import showTouchOptions from "../model/showTouchOptions";
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

/**
 * 广告结果
 */
export default class FormUtil {

    constructor() {

        // showOptions.create(showTotalOptions)
        // console.log('showTotalOptions', showOptions.create(showTotalOptions))

        // showOptions.create(showEndOptions)
        // showOptions.create(showTouchOptions)
        // showOptions.create(showPrizeOptions)
        // showOptions.create(showShareOptions)
    }


    public optionsFactory: typeof showOptions

    /**
     * Toast消息
     * @param msg  消息内容
     */
    public showToast(msg: string) {
        CocosFormFactory.instance.showForm("toastForm", CocosToastForm, msg)
    }

    /**
     *  预加载广告
     * @param callback 
     */
    public preloadAd(callback?: Function) {
    }



    private mLoadedAdFrom: boolean = false;
    /**
     * 显示广告
     * @param adType 广告类型
     * @param callback  有返回按钮时的回调
     * @param zIndex  层级
     */
    public showAd(adType: number = AD_POSITION.NONE, callback: Function, zIndex: number = 999) {
        //
        if (Common.platform == PlatformType.BYTEDANCE && moosnow.platform.isIphone()) {
            console.log('头条iphone 不显示广告')
            return;
        }
        moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback, zIndex })

    }


    /**
     * 金币动画
     * @param options 
     */
    public showCoin(options: showCoinOptions) {
    }


    /**
     * 显示狂点页面
     * @param callback 点击完成回调
     * @param type 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
     */
    public showMistouch(options: showTouchOptions) {
    }
    /**
     * 显示奖励
     * @param style 金币动画
     * @param baseNum 视频奖励领取的倍数
     * @param showCoinAnim 显示金币动画
     * @param callback 
     */
    public showPrize(options: showPrizeOptions) {
    }


    /**
     * 显示结算统计页
     * @param coinNum 
     * @param callback 
     */
    public showTotal(options: showTotalOptions) {
        CocosFormFactory.instance.showForm("totalForm", CocosTotalForm, options)
    }


    /**
    * 显示结算统计页
    * @param coinNum 
    * @param callback 
    */
    public showEnd(options: showEndOptions) {
        CocosFormFactory.instance.showForm("endForm", CocosEndForm, options)
    }

    /**
      * 显示结算统计页
      * @param coinNum 
      * @param callback 
      */
    public showPause(options: showPauseOptions) {
        CocosFormFactory.instance.showForm("pauseForm", CocosPauseForm, options)
    }

    /**
     *  showShare
     */
    public showShare(options: showShareOptions) {
        CocosFormFactory.instance.showForm("shareForm", CocosShareForm, options)
    }

    /**
    *  showShare
    */
    public showTry(options: showTryOptions) {
        CocosFormFactory.instance.showForm("tryForm", CocosTryForm, options)
    }

    /**
     *  showShare
     */
    public showSet(options: showSetOptions) {
        CocosFormFactory.instance.showForm("setForm", CocosSetForm, options)
    }

    /**
        *  showShare
        */
    public showBox(options: showBoxOptions) {
        CocosFormFactory.instance.showForm("boxForm", CocosBoxForm, options)
    }


    public createForm(formName: string) {
        CocosFormFactory.instance.showForm(formName, CocosEndForm, {})
    }


}