
import Common from "../../utils/Common";
import UIForms from "../../config/UIForms";
import PrizeForm from "../engine/PrizeForm";

export default class CocosPrizeForm extends PrizeForm {

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
