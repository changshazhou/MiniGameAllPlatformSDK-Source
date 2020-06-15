
import Common from "../../utils/Common";
import UIForms from "../../config/UIForms";
import PrizeFormTT from "../engine/PrizeFormTT";
import CocosNodeEvent from "./CocosNodeEvent";

export default class CocosPrizeFormTT extends PrizeFormTT {

    coinNum: cc.Label = null;
    btnConfirm: cc.Node = null;

    public onChecked() {
        this.mChecked = !this.mChecked;
        this.checked.active = this.mChecked;
    }

    initForm(logic) {
        this.initProperty(logic);
        this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
    }

    willHide() {
        this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.closeForm, this)
    }

    public addListener() {
        this.btnCancel.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
        this.btnVideo.on(CocosNodeEvent.TOUCH_END, this.onVideo, this)
        this.btnReceive.on(CocosNodeEvent.TOUCH_END, this.onReceive, this)
        this.btnShare.on(CocosNodeEvent.TOUCH_END, this.onShare, this)
        this.unchecked.on(CocosNodeEvent.TOUCH_END, this.onChecked, this)
    }

    public removeListener() {
        this.btnCancel.off(CocosNodeEvent.TOUCH_END, this.closeForm, this)
        this.btnVideo.off(CocosNodeEvent.TOUCH_END, this.onVideo, this)
        this.btnReceive.off(CocosNodeEvent.TOUCH_END, this.onReceive, this)
        this.btnShare.off(CocosNodeEvent.TOUCH_END, this.onShare, this)
        this.unchecked.off(CocosNodeEvent.TOUCH_END, this.onChecked, this)
    }
}
