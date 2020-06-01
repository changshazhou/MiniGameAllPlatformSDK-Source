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
        moosnow.event.addListener(EventType.AD_VIEW_CHANGE, this, this.onAdChange)
    }
    public removeEvent() {
        if (this.exportClose)
            this.exportClose.off(cc.Node.EventType.TOUCH_END, this.onBack, this)
        moosnow.event.removeListener(EventType.AD_VIEW_CHANGE, this)
    }

}