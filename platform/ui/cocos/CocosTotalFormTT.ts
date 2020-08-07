
import TotalFormTT from "../engine/TotalFormTT";
import CocosNodeEvent from "./enum/CocosNodeEvent";

export default class CocosTotalFormTT extends TotalFormTT {

   
    public addEvent() {
        this.unchecked.node.on(CocosNodeEvent.TOUCH_END, this.onShareChange, this)
        this.btnReceive.on(CocosNodeEvent.TOUCH_END, this.onReceive, this)
        this.btnVideo.on(CocosNodeEvent.TOUCH_END, this.onReceive, this)

    }
    public removeEvent() {
        this.unchecked.node.off(CocosNodeEvent.TOUCH_END, this.onShareChange, this);
        this.btnReceive.off(CocosNodeEvent.TOUCH_END, this.onReceive, this);
        this.btnVideo.off(CocosNodeEvent.TOUCH_END, this.onReceive, this);
    }

    public changeUI() {
        let lblReceive = this.btnReceive.getComponent(cc.Label)
        if (this.mIsChecked) {
            this.checked.node.active = true;
            lblReceive.string = "领取五倍奖励";

        }
        else {
            this.checked.node.active = false;
            lblReceive.string = "领取奖励";

        }
    }
}
