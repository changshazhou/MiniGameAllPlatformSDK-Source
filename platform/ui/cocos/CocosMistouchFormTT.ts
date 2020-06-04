import BaseForm from "../engine/BaseForm";
import UIForms from "../../config/UIForms";
import MistouchForm from "../engine/MistouchForm";
import MistouchFormTT from "../engine/MistouchFormTT";

export default class CocosMistouchFormTT extends MistouchFormTT {

    clickProgress: cc.ProgressBar = null;
    btnReceive: cc.Node = null;
    btnConfirm: cc.Node = null;
    checked: cc.Sprite = null;
    unchecked: cc.Sprite = null;
    step1: cc.Node = null;
    step2: cc.Node = null;
    logo: cc.Node = null;


    public playBoxAnim(animName) {
        let anim = this.logo.getComponent(cc.Animation);
        if (!anim.getAnimationState(animName).isPlaying)
            anim.play(animName)
    }

    public addEvent() {

        this.unchecked.node.on(cc.Node.EventType.TOUCH_END, this.checkboxChange, this)
        this.btnReceive.on(cc.Node.EventType.TOUCH_START, this.onLogoUp, this)
        this.btnReceive.on(cc.Node.EventType.TOUCH_END, this.onBannerClick, this)
        this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.openBox, this)

    }

    public removeEvent() {
        this.unchecked.node.off(cc.Node.EventType.TOUCH_END, this.checkboxChange, this)
        this.btnReceive.off(cc.Node.EventType.TOUCH_START, this.onLogoUp, this)
        this.btnReceive.off(cc.Node.EventType.TOUCH_END, this.onBannerClick, this)
        this.btnConfirm.off(cc.Node.EventType.TOUCH_END, this.openBox, this)
    }

}
