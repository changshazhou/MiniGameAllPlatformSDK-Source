import EventType from "../../utils/EventType";
import { AD_POSITION } from "../../enum/AD_POSITION";
import BaseForm from "../engine/BaseForm";
import AdForm from "../engine/AdForm";
import LayaNodeEvent from "./LayaNodeEvent";


export default class CocosAdForm extends AdForm {

    public addEvent() {
        if (this.exportClose)
            this.exportClose.on(LayaNodeEvent.TOUCH_END, this.onBack, this)
        if (this.btnSideShow)
            this.btnSideShow.on(LayaNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.on(LayaNodeEvent.TOUCH_START, this.sideIn, this)
        super.addEvent();
    }
    public removeEvent() {
        if (this.exportClose)
            this.exportClose.off(LayaNodeEvent.TOUCH_END, this.onBack, this)
        if (this.btnSideShow)
            this.btnSideShow.off(LayaNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.off(LayaNodeEvent.TOUCH_START, this.sideIn, this)
        super.removeEvent();
    }
    public floatAnim(floatNode: Laya.Node) {

        let timeLine = new Laya.TimeLine();
        timeLine.addLabel("turnRight", 0).to(floatNode, { rotation: 10 }, 300, null, 0)
            .addLabel("turnDown", 0).to(floatNode, { rotation: -10 }, 600, null, 0)
            .addLabel("turnLeft", 0).to(floatNode, { rotation: 0 }, 300, null, 0)
            .addLabel("turnUp", 0).to(floatNode, { scaleX: 0.8, scaleY: 0.8 }, 300, null, 0)
            .addLabel("turnUp", 0).to(floatNode, { scaleX: 1, scaleY: 1 }, 300, null, 0);
        timeLine.play(0, true);
    }
    public sideOut() {

    }
    public sideIn() {

    }
    public pushScroll(scrollView: any, layout: any) {
        if (layout.type == cc.Layout.Type.GRID) {
            if (scrollView.vertical) {
                this.mScrollVec.push({
                    scrollView,
                    move2Up: false
                })
            }
            else {
                this.mScrollVec.push({
                    scrollView,
                    move2Left: false
                })
            }
        }
        else if (layout.type == cc.Layout.Type.HORIZONTAL) {
            this.mScrollVec.push({
                scrollView,
                move2Left: false
            })
        }
        else if (layout.type == cc.Layout.Type.VERTICAL) {
            this.mScrollVec.push({
                scrollView,
                move2Up: false
            })
        }
    }

    private mMoveSpeed: number = 2;
    public onFwUpdate() {


    }
}