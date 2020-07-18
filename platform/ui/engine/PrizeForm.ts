
import Common from "../../utils/Common";
import UIFormSetting from "../../config/UIFormSetting";
import BaseForm from "./BaseForm";
import showPrizeOptions from "../../model/showPrizeOptions";
import { ROOT_CONFIG } from "../../config/ROOT_CONFIG";

export default class PrizeForm extends BaseForm {

    coinNum: cc.Node = null;
    btnConfirm: cc.Node = null;

    public get FormData(): showPrizeOptions {
        return this.mFormData;
    }

    initForm(logic) {
        this.initProperty(logic);
        // this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
    }

    willHide() {
        // this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.closeForm, this)
    }

    willShow(data) {
        super.willShow(data);
        this.coinNum.getComponent(cc.Label).string = `${Common.formatMoney(data.coinNum)}`;
        moosnow.platform.hideBanner();
    }

    closeForm() {
        moosnow.ui.destroyUIForm(UIFormSetting.PrizeForm, null)
        moosnow.ui.destroyUIForm(UIFormSetting.MistouchForm, null);
        if (this.FormData.showCoinAnim == true) {
            moosnow.ui.pushUIForm(UIFormSetting.CoinForm, {
                ...Common.deepCopy(this.FormData),
                callback: () => {
                    if (this.FormData.callback)
                        this.FormData.callback();
                }
            }, () => { }, ROOT_CONFIG.UI_ROOT)
        }
        else {
            if (this.FormData.callback)
                this.FormData.callback();
        }
    }

}
