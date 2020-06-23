import NodeEvent from "../engine/NodeEvent";
export default class LayaNodeEvent extends NodeEvent {
    static get TOUCH_START(): string;
    static get TOUCH_END(): string;
}
