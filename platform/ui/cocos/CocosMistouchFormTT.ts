import BaseForm from "../engine/BaseForm";
import UIFormSetting from "../../config/UIFormSetting";
import MistouchForm from "../engine/MistouchForm";
import MistouchFormTT from "../engine/MistouchFormTT";
import CocosNodeEvent from "./CocosNodeEvent";

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

        this.unchecked.node.on(CocosNodeEvent.TOUCH_END, this.checkboxChange, this)
        this.btnReceive.on(CocosNodeEvent.TOUCH_START, this.onLogoUp, this)
        this.btnReceive.on(CocosNodeEvent.TOUCH_END, this.onBannerClick, this)
        this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.openBox, this)

    }

    public removeEvent() {
        this.unchecked.node.off(CocosNodeEvent.TOUCH_END, this.checkboxChange, this)
        this.btnReceive.off(CocosNodeEvent.TOUCH_START, this.onLogoUp, this)
        this.btnReceive.off(CocosNodeEvent.TOUCH_END, this.onBannerClick, this)
        this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.openBox, this)
    }

}
