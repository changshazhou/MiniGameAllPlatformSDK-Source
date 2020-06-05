
import Common from "../../utils/Common";
import UIForms from "../../config/UIForms";
import PrizeFormTT from "../engine/PrizeFormTT";

export default class CocosPrizeFormTT extends PrizeFormTT {

    coinNum: cc.Label = null;
    btnConfirm: cc.Node = null;


    initForm(logic) {
        this.initProperty(logic);
        this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.closeForm, this)
    }

    willHide() {
        this.btnConfirm.off(cc.Node.EventType.TOUCH_END, this.closeForm, this)
    }
}
