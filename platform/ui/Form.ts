import CocosAdFrom from "./cocos/CocosAdForm";
import AdForm from "./engine/AdForm";
import EventType from "../utils/EventType";

/**
 * 广告结果
 */
export default class Form {
    /**
     * 显示广告
     * @param adType 
     * @param callback 
     */
    public showAd(adType: AD_POSITION = AD_POSITION.NONE, callback: Function) {
        moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback })
    }
}