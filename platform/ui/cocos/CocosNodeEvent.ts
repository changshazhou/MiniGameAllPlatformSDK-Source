import NodeEvent from "../engine/NodeEvent";

export default class CocosNodeEvent extends NodeEvent {

    static get TOUCH_START(): string {
        return cc.Node.EventType.TOUCH_START;
    }
    static get TOUCH_END(): string {
        return cc.Node.EventType.TOUCH_END;
    }
    static get TOUCH_CANCEL(): string {
        return cc.Node.EventType.TOUCH_CANCEL;
    }

}