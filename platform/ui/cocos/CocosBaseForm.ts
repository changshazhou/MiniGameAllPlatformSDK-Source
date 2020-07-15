import BaseForm from "../engine/BaseForm"
import CocosNodeEvent from "./CocosNodeEvent";

export default class CocosBaseForm extends BaseForm {



    private downAnim(node) {
        node.scale = 1;
        node.runAction(
            cc.sequence(
                cc.scaleTo(0.1, 0.7, 0.7),
                cc.callFunc(() => {
                    // this.mouseUpEffect();
                }, this)
            )
        )
    }
    private upAnim(node, callback?: Function) {
        node.stopAllActions();
        node.scale = 0.7;
        node.runAction(
            cc.sequence(
                cc.scaleTo(0.1, 1, 1),
                cc.callFunc(() => {
                    this.mDowning = false;
                    if (callback)
                        callback();
                }, this)
            )
        )
    }
    private mDowning: boolean = false;
    private mClickQuene = {};
    private onTouchStart(e: cc.Event.EventTouch) {
        console.log('onMouseDown')
        this.downAnim(e.getCurrentTarget())
        if (this.mDowning)
            return;
        this.mDowning = true;

    }
    private onTouchEnd(e: cc.Event.EventTouch) {
        console.log('onMouseUp')
        this.upAnim(e.getCurrentTarget(), () => {
            if (this.mClickQuene[e.getCurrentTarget().uuid])
                this.mClickQuene[e.getCurrentTarget().uuid]();
        })
    }

    private onTouchCancel(e: cc.Event.EventTouch) {
        this.upAnim(e.getCurrentTarget())
    }

    public applyClickAnim(node: cc.Node, callback?: Function) {
        this.mClickQuene[node.uuid] = callback;
        node.on(CocosNodeEvent.TOUCH_START, this.onTouchStart, this);
        node.on(CocosNodeEvent.TOUCH_END, this.onTouchEnd, this);
        node.on(CocosNodeEvent.TOUCH_CANCEL, this.onTouchCancel, this);
    }
    public removeClickAnim(node: cc.Node) {
        this.mClickQuene[node.uuid] = null;
        delete this.mClickQuene[node.uuid];
        node.off(CocosNodeEvent.TOUCH_START, this.onTouchStart, this)
        node.off(CocosNodeEvent.TOUCH_END, this.onTouchEnd, this);
        node.off(CocosNodeEvent.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    public findNodeByName(node: cc.Node, attrName: string): cc.Node {
        let targetNode = null;
        for (let i = 0; i < node.childrenCount; i++) {
            let child = node.children[i]
            if (child.name == attrName) {
                targetNode = child
                break;
            }
            else {
                targetNode = this.findNodeByName(child, attrName)
            }
        }
        return targetNode;
    }

}