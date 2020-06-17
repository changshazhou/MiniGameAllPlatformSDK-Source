import EventType from "../../utils/EventType";
import { AD_POSITION } from "../../enum/AD_POSITION";
import BaseForm from "../engine/BaseForm";
import AdForm from "../engine/AdForm";
import CocosNodeEvent from "./CocosNodeEvent";


export default class CocosAdForm extends AdForm {

    public addEvent() {
        if (this.exportClose)
            this.exportClose.on(CocosNodeEvent.TOUCH_END, this.onBack, this)
        if (this.btnSideShow)
            this.btnSideShow.on(CocosNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.on(CocosNodeEvent.TOUCH_START, this.sideIn, this)
        super.addEvent();
    }
    public removeEvent() {
        if (this.exportClose)
            this.exportClose.off(CocosNodeEvent.TOUCH_END, this.onBack, this)
        if (this.btnSideShow)
            this.btnSideShow.off(CocosNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.off(CocosNodeEvent.TOUCH_START, this.sideIn, this)
        super.removeEvent();
    }
    public floatAnim(floatNode) {
        floatNode.runAction(
            cc.sequence(
                cc.rotateTo(0.3, 10),
                cc.rotateTo(0.6, -10),
                cc.rotateTo(0.3, 0),
                cc.scaleTo(0.3, 0.8),
                cc.scaleTo(0.3, 1)
            ).repeatForever()
        )
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
        for (let i = 0; i < this.mScrollVec.length; i++) {
            let item = this.mScrollVec[i];
            let scrollView = item.scrollView as cc.ScrollView;
            if (scrollView.isScrolling())
                continue;

            let scrollOffset = scrollView.getMaxScrollOffset();
            let maxH = scrollOffset.y / 2 + 20;
            let maxW = scrollOffset.x / 2 + 20;
            let contentPos = scrollView.getContentPosition()
            if (item.move2Up == true) {
                if (contentPos.y > maxH) {
                    item.move2Up = false;
                }
                item.scrollView.setContentPosition(new cc.Vec2(contentPos.x, contentPos.y + this.mMoveSpeed))
            }
            else if (item.move2Up == false) {
                if (contentPos.y < -maxH) {
                    item.move2Up = true;
                }
                item.scrollView.setContentPosition(new cc.Vec2(contentPos.x, contentPos.y - this.mMoveSpeed))
            }
            if (item.move2Left == true) {
                if (contentPos.x > maxW) {
                    item.move2Left = false;
                }
                item.scrollView.setContentPosition(new cc.Vec2(contentPos.x + this.mMoveSpeed, contentPos.y))
            }
            else if (item.move2Left == false) {
                if (contentPos.x < -maxW) {
                    item.move2Left = true;
                }
                item.scrollView.setContentPosition(new cc.Vec2(contentPos.x - this.mMoveSpeed, contentPos.y))
            }
        }

    }
}