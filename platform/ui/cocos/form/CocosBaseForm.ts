import BaseForm from "../../engine/BaseForm"
import CocosNodeEvent from "../enum/CocosNodeEvent";
import CocosNodeHelper from "../helper/CocosNodeHelper";
import clickQueneItem from "../../../model/clickQueneItem";



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

    public getClickQueneItem(e: cc.Event.EventTouch): clickQueneItem {
        let queneId = e.getCurrentTarget().uuid;
        let retVal = this.mClickQuene[queneId]
        if (retVal)
            return retVal;
        else
            return null
    }
    private onTouchStart(e: cc.Event.EventTouch) {
        let quene = this.getClickQueneItem(e);
        if (!quene) return;
        if (quene.once && quene.clicking) return;
        console.log('onMouseDown')
        moosnow.audio.playClickEffect();
        this.downAnim(quene.node)
        if (this.mDowning)
            return;
        this.mDowning = true;

    }
    private onTouchEnd(e: cc.Event.EventTouch) {
        let quene = this.getClickQueneItem(e);
        if (!quene) return;
        if (quene.once && quene.clicking) return;
        console.log('onMouseUp')
        this.upAnim(quene.node, () => {
            if (quene && quene.callback)
                quene.callback();
        })
        if (quene && quene.stopPropagation)
            e.stopPropagation();
    }

    private onTouchCancel(e: cc.Event.EventTouch) {
        let quene = this.getClickQueneItem(e);
        if (!quene) return;
        if (quene.once && quene.clicking) return;
        this.upAnim(quene.node)
    }

    /**
     * 应用点击动画
     * @param node 
     * @param callback 
     * @param stopPropagation 
     * @param once 
     */
    public applyClickAnim(node: cc.Node, callback?: Function, stopPropagation: boolean = false, once: boolean = true) {
        if (node && node.uuid) {
            this.mClickQuene[node.uuid] = {
                node,
                stopPropagation,
                callback,
                once,
                clicking: false
            };
            node.on(CocosNodeEvent.TOUCH_START, this.onTouchStart, this);
            node.on(CocosNodeEvent.TOUCH_END, this.onTouchEnd, this);
            node.on(CocosNodeEvent.TOUCH_CANCEL, this.onTouchCancel, this);
        }
        else {
            console.log('缺少对象，无法绑定事件')
        }
    }
    public removeClickAnim(node: cc.Node) {
        if (node && node.uuid) {
            this.mClickQuene[node.uuid] = null;
            delete this.mClickQuene[node.uuid];
            node.off(CocosNodeEvent.TOUCH_START, this.onTouchStart, this)
            node.off(CocosNodeEvent.TOUCH_END, this.onTouchEnd, this);
            node.off(CocosNodeEvent.TOUCH_CANCEL, this.onTouchCancel, this);
        }
    }

    public findNodeByName(node: cc.Node, attrName: string): cc.Node {
        return CocosNodeHelper.findNodeByName(node, attrName)
    }



}