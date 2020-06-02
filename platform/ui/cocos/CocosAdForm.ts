import EventType from "../../utils/EventType";
import { AD_POSITION } from "../../enum/AD_POSITION";
import BaseForm from "../engine/BaseForm";
import AdForm from "../engine/AdForm";

const { ccclass, property } = cc._decorator;
@ccclass
export default class CocosAdForm extends AdForm {

    public addEvent() {
        if (this.exportClose)
            this.exportClose.on(cc.Node.EventType.TOUCH_END, this.onBack, this)
        if (this.btnSideShow)
            this.btnSideShow.on(cc.Node.EventType.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.on(cc.Node.EventType.TOUCH_START, this.sideIn, this)
        super.addEvent();
    }
    public removeEvent() {
        if (this.exportClose)
            this.exportClose.off(cc.Node.EventType.TOUCH_END, this.onBack, this)
        if (this.btnSideShow)
            this.btnSideShow.off(cc.Node.EventType.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.off(cc.Node.EventType.TOUCH_START, this.sideIn, this)
        super.removeEvent();
    }
    public floatAnim(floatNode) {
        floatNode.runAction(
            cc.sequence(
                cc.rotateTo(0.3, 10),
                cc.rotateTo(0.6, -10),
                cc.rotateTo(0.3, 0),
                cc.scaleTo(0.3, 0.8),
                cc.scaleTo(0.3, 1)
            ).repeatForever()
        )
    }
}