
import Common from "../../utils/Common";
import UIForms from "../../config/UIForms";
import PrizeForm from "../engine/PrizeForm";
import CocosNodeEvent from "./CocosNodeEvent";

export default class CocosPrizeForm extends PrizeForm {

    coinNum: cc.Label = null;
    btnConfirm: cc.Node = null;


    initForm(logic) {
        this.initProperty(logic);
        this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
    }

    willHide() {
        this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.closeForm, this)
    }
}
