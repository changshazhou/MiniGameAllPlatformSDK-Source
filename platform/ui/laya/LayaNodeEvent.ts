import NodeEvent from "../engine/NodeEvent";

export default class LayaNodeEvent extends NodeEvent {

    static get TOUCH_START(): string {
        return Laya.Event.CLICK;
    }
    static get TOUCH_END(): string {
        return Laya.Event.CLICK;
    }

}