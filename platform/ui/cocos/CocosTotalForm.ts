
import TotalForm from "../engine/TotalForm";
import CocosNodeEvent from "./CocosNodeEvent";

export default class CocosTotalForm extends TotalForm {


    public addEvent() {
        this.unchecked.node.on(CocosNodeEvent.TOUCH_END, this.onShareChange, this)
        this.btnReceive.node.on(CocosNodeEvent.TOUCH_END, this.onReceive, this)
    }
    public removeEvent() {
        this.unchecked.node.off(CocosNodeEvent.TOUCH_END, this.onShareChange, this)
        this.btnReceive.node.off(CocosNodeEvent.TOUCH_END, this.onReceive, this)
    }

    public changeUI() {
        if (this.mCheckedVideo) {
            this.checked.node.active = true;
        }
        else {
            this.checked.node.active = false;
        }
    }
}
