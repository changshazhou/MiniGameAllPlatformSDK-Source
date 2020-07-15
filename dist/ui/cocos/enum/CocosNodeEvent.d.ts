import NodeEvent from "../../engine/NodeEvent";
export default class CocosNodeEvent extends NodeEvent {
    static get TOUCH_START(): string;
    static get TOUCH_END(): string;
    static get TOUCH_CANCEL(): string;
}
