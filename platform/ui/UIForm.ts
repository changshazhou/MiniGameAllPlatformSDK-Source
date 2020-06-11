import EventType from "../utils/EventType";
import UIForms from "../config/UIForms";
import { AD_POSITION } from "../enum/AD_POSITION";
import coinAnimStyle from "../model/coinAnimStyle";

/**
 * 广告结果
 */
export default class UIForm {

    /**
     * Toast消息
     * @param msg  消息内容
     */
    public showToast(msg: string) {
        moosnow.ui.showToast(msg)
    }

    /**
     * 预加载广告
     */
    public preloadAd() {
        moosnow.ui.pushUIForm(UIForms.AdForm, { showAd: moosnow.AD_POSITION.NONE }, null);
    }

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
        let adForm = moosnow.ui.getUIFrom(UIForms.AdForm);
        if (adForm) {
            adForm.node.zIndex = zIndex;
            moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback })
        }
        else {
            moosnow.ui.pushUIForm(UIForms.AdForm, { showAd: moosnow.AD_POSITION.NONE }, () => {
                let adForm = moosnow.ui.getUIFrom(UIForms.AdForm);
                adForm.node.zIndex = zIndex;
                moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback })
            });

        }
    }


    /**
     * 金币动画
     * @param style 
     * @param callback 
     */
    public showCoin(style: coinAnimStyle, callback: Function) {
        moosnow.ui.pushUIForm(UIForms.CoinForm, {
            ...style,
            callback: () => {
                console.log('showCoin callback ')
                if (callback)
                    callback();
            },
        }, () => {

        })
    }


    /**
     * 显示狂点页面
     * @param callback 点击完成回调
     * @param type 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
     */
    public showMistouch(callback: Function, type: number = 1) {
        moosnow.ui.pushUIForm(UIForms.MistouchForm, {
            mistouchType: type == 2 ? 4 : 1,
            onCompleted: () => {
                if (callback)
                    callback();
            }
        }, () => {

        })
    }
    /**
     * 显示奖励
     * @param style 金币动画
     * @param baseNum 视频奖励领取的倍数
     * @param showCoinAnim 显示金币动画
     * @param callback 
     */
    public showPrize(style: coinAnimStyle, baseNum: number, showCoinAnim: boolean = true, callback: Function) {
        moosnow.ui.pushUIForm(UIForms.PrizeForm, {
            ...style,
            baseNum,
            showCoinAnim,
            onCompleted: () => {
                if (callback)
                    callback();
            }
        }, () => {

        })
    }


    /**
     * 显示结算统计页
     * @param coinNum 
     * @param callback 
     */
    public showTotal(coinNum: number, callback: Function) {
        moosnow.ui.pushUIForm(UIForms.TotalForm, {
            coinNum: coinNum,
            onReceive: () => {
                if (callback)
                    callback();
            }
        })
    }


    /**
    * 显示结算统计页
    * @param coinNum 
    * @param callback 
    */
    public showEnd(coinNum: number, callback: Function) {
        moosnow.ui.pushUIForm(UIForms.EndForm, {
            coinNum: coinNum,
            onReceive: () => {
                if (callback)
                    callback();
            }
        })
    }
}