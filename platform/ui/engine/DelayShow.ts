import BaseModule from "../../framework/BaseModule";

export default class DelayShow extends BaseModule {

    private mNode = null;

    public show(node, delayTime = 3) {
        if (!node)
            return;
        this.mNode = node;
        this.hideNode();
        this.schedule(this.showNode, delayTime)
    }

    public hide(node, delayTime = 3) {
        this.mNode = node;
        this.schedule(this.hideNode, delayTime)
    }

    public clear() {
        this.unschedule(this.showNode)
        this.unschedule(this.hideNode)
    }


    public hideNode() {
        this.mNode.active = false;
    }

    private showNode() {
        this.mNode.active = true;
        this.unschedule(this.showNode)
    }
}