import CocosAdFrom from "./cocos/CocosAdForm";
import AdForm from "./engine/AdForm";
import EventType from "../utils/EventType";
import UIForms from "../config/UIForms";
import Common from "../utils/Common";

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


    /**
     * 金币动画
     * @param imgNum 动画图片数量
     * @param starVec 开始位置
     * @param endVec 结束位置
     * @param callback 结束回调
     */
    public showCoin(imgNum: number = 20, starVec: { x: 0, y: 0 }, endVec: { x: 0, y: 0 }, callback: Function) {
        console.log('showCoin');
        cc.loader.loadRes(moosnow.entity.prefabPath + 'coin', cc.Prefab, () => {
            for (let i = 0; i < imgNum; i++) {
                let delayTime = Common.randomNumBoth(0, 100) / 200.0;

                let logic = moosnow.entity.showEntity("coin", cc.Canvas.instance.node, {
                    x: Common.randomNumBoth(starVec.x - 100, starVec.x + 100),
                    y: Common.randomNumBoth(starVec.y - 100, starVec.y + 100)
                })

                logic.node.runAction(
                    cc.sequence(
                        cc.delayTime(delayTime),
                        cc.spawn(
                            cc.moveTo(1, endVec.x, endVec.y),
                            cc.fadeOut(1.0),
                            cc.sequence(
                                cc.scaleTo(0.8, 1.2, 1.2),
                                cc.scaleTo(0.8, 0.8, 9.8)
                            )
                        ),
                        cc.callFunc(() => {
                            moosnow.entity.hideEntity(logic, null, true);
                        })
                    )

                )
            }
            let t = setTimeout(() => {
                clearTimeout(t);
                if (Common.isFunction(callback))
                    callback();
            }, 2100)
        })

    }


    /**
     * 显示狂点页面
     */
    public showMistouch() {
        moosnow.ui.pushUIForm(UIForms.MistouchForm, {}, () => {

        })
    }
}