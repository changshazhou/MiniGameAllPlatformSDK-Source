import CocosUIForm from "./common/CocosUIForm";
import UIForms from "../../enum/UIFORMS";
import Common from "../../utils/Common";


const { ccclass, property } = cc._decorator;

@ccclass
export default class prizeForm extends CocosUIForm {

    @property(cc.Label)
    coinNum: cc.Label = null;

    @property(cc.Node)
    btnConfirm: cc.Node = null;

    public formName: string = "";
    public isMask: boolean = true;

    start() {
        super.start();
        this.btnConfirm.on(cc.Node.EventType.TOUCH_START, this.closeForm, this)
    }

    willShow(data) {
        super.willShow(data);
        this.coinNum.string = `${Common.formatMoney(data.coinNum)}`;
    }

    closeForm() {
        moosnow.ui.hideUIForm(UIForms.PrizeForm, null)
        moosnow.ui.hideUIForm(UIForms.MistouchForm, null);



    }

}
