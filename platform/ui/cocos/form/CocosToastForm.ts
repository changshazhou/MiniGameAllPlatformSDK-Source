import CocosBaseForm from "./CocosBaseForm";
import CocosFormFactory from "../helper/CocosFormFactory";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import FormLayout from "../../FormLayout";
export default class CocosToastForm extends CocosBaseForm {

    msgText: cc.Node = null;


    private onMaskMouseDown(e: cc.Event.EventTouch) {
        e.stopPropagation();
    }
    willShow(msg: string) {
        super.willShow();
        this.node.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this)
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        this.msgText.getComponent(cc.Label).string = msg;
        this.node.active = true;
        this.node.runAction(cc.sequence(
            cc.scaleTo(0.1, 1.2),
            cc.scaleTo(0.1, 1)
        ))
        this.scheduleOnce(this.hide, 1)
    }
    willHide(data) {
        super.willHide(data);
        this.node.off(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this)
    }
    hide() {
        // this.node.active = false;
        this.hideForm();
    }
}
