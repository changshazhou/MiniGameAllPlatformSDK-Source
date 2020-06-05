
import Common from "../../utils/Common";
import UIForms from "../../config/UIForms";
import BaseForm from "./BaseForm";

export default class PrizeForm extends BaseForm {

    coinNum: cc.Label = null;
    btnConfirm: cc.Node = null;


    initForm(logic) {
        this.initProperty(logic);
        // this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.closeForm, this)
    }

    willHide() {
        // this.btnConfirm.off(cc.Node.EventType.TOUCH_END, this.closeForm, this)
    }

    willShow(data) {
        super.willShow(data);
        this.coinNum.string = `${Common.formatMoney(data.coinNum)}`;
        moosnow.platform.hideBanner();
    }

    closeForm() {
        moosnow.ui.destroyUIForm(UIForms.PrizeForm, null)
        moosnow.ui.destroyUIForm(UIForms.MistouchForm, null);
        if (this.FormData.showCoinAnim == true) {
            moosnow.ui.pushUIForm(UIForms.CoinForm, {
                ...Common.deepCopy(this.FormData),
                callback: () => {
                    if (this.FormData.onCompleted)
                        this.FormData.onCompleted();
                }
            })
        }
        else {
            if (this.FormData.onCompleted)
                this.FormData.onCompleted();
        }
    }

}
