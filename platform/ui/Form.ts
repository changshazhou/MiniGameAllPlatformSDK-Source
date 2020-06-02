import CocosAdFrom from "./cocos/CocosAdForm";
import AdForm from "./engine/AdForm";
import EventType from "../utils/EventType";
import UIForms from "../enum/UIForms";

/**
 * 广告结果
 */
export default class Form {

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
    public showAd(adType: AD_POSITION = AD_POSITION.NONE, callback: Function, zIndex: number = 999) {
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
}