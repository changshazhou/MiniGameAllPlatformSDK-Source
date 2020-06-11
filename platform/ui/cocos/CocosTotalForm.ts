
import TotalForm from "../engine/TotalForm";

export default class CocosTotalForm extends TotalForm {


    public addEvent() {
        this.unchecked.node.on(cc.Node.EventType.TOUCH_END, this.onShareChange, this)
        this.btnReceive.node.on(cc.Node.EventType.TOUCH_END, this.onReceive, this)
    }
    public removeEvent() {
        this.unchecked.node.off(cc.Node.EventType.TOUCH_END, this.onShareChange, this)
        this.btnReceive.node.off(cc.Node.EventType.TOUCH_END, this.onReceive, this)
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
