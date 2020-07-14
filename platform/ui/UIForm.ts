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
import { ROOT_CONFIG } from "../config/ROOT_CONFIG";
import CocosFormHelper from "./cocos/CocosForm";
import CocosForm from "./cocos/CocosForm";

/**
 * 广告结果
 */
export default class UIForm {

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
        moosnow.ui.showToast(msg)
    }

    /**
     *  预加载广告
     * @param callback 
     */
    public preloadAd(callback?: Function) {
        moosnow.ui.pushUIForm(UIFormSetting.AdForm, { showAd: moosnow.AD_POSITION.NONE }, callback, ROOT_CONFIG.UI_ROOT);
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
        if (moosnow.getAppPlatform() == moosnow.APP_PLATFORM.BYTEDANCE && moosnow.platform.isIphone()) {
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
        moosnow.ui.pushUIForm(UIFormSetting.CoinForm, options, () => { }, ROOT_CONFIG.UI_ROOT)
    }


    /**
     * 显示狂点页面
     * @param callback 点击完成回调
     * @param type 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
     */
    public showMistouch(options: showTouchOptions) {
        moosnow.ui.pushUIForm(UIFormSetting.MistouchForm, options, () => {

        }, ROOT_CONFIG.UI_ROOT)
    }
    /**
     * 显示奖励
     * @param style 金币动画
     * @param baseNum 视频奖励领取的倍数
     * @param showCoinAnim 显示金币动画
     * @param callback 
     */
    public showPrize(options: showPrizeOptions) {
        moosnow.ui.pushUIForm(UIFormSetting.PrizeForm, options, () => {

        }, ROOT_CONFIG.UI_ROOT)
    }


    /**
     * 显示结算统计页
     * @param coinNum 
     * @param callback 
     */
    public showTotal(options: showTotalOptions) {
        moosnow.ui.pushUIForm(UIFormSetting.TotalForm, options, () => { }, ROOT_CONFIG.UI_ROOT)
    }


    /**
    * 显示结算统计页
    * @param coinNum 
    * @param callback 
    */
    public showEnd(options: showEndOptions) {
        moosnow.ui.pushUIForm(UIFormSetting.EndForm, options, () => { }, ROOT_CONFIG.UI_ROOT)
    }



    /**
     *  showShare
     */
    public showShare(options: showShareOptions) {
        moosnow.ui.pushUIForm(UIFormSetting.ShareForm, options, () => { }, ROOT_CONFIG.UI_ROOT)
    }


    public createForm(formName: string = "") {
        
    }
}