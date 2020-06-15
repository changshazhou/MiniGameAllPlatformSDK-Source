import shareFormTT from "../engine/shareFormTT";
import CocosNodeEvent from "./CocosNodeEvent";

export default class CocosShareFormTT extends shareFormTT {


    public addListener() {
        this.btnBack.on(CocosNodeEvent.TOUCH_END, this.onBack, this)
        this.btnShare.on(CocosNodeEvent.TOUCH_END, this.onShareVideo, this)
    }


    public removeListener() {
        this.btnBack.off(CocosNodeEvent.TOUCH_END, this.onBack, this)
        this.btnShare.off(CocosNodeEvent.TOUCH_END, this.onShareVideo, this)
    }
}