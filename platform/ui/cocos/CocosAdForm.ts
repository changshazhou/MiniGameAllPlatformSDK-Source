import EventType from "../../utils/EventType";
import { AD_POSITION } from "../../enum/AD_POSITION";
import BaseForm from "../engine/BaseForm";
import AdForm from "../engine/AdForm";
import CocosNodeEvent from "./CocosNodeEvent";


export default class CocosAdForm extends AdForm {

    public addEvent() {
        if (this.exportClose)
            this.exportClose.on(CocosNodeEvent.TOUCH_END, this.onBack, this)
        if (this.btnSideShow)
            this.btnSideShow.on(CocosNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.on(CocosNodeEvent.TOUCH_START, this.sideIn, this)
        super.addEvent();
    }
    public removeEvent() {
        if (this.exportClose)
            this.exportClose.off(CocosNodeEvent.TOUCH_END, this.onBack, this)
        if (this.btnSideShow)
            this.btnSideShow.off(CocosNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.off(CocosNodeEvent.TOUCH_START, this.sideIn, this)
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