import { AD_POSITION } from "../../../enum/AD_POSITION";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import CocosBaseForm from "./CocosBaseForm";
import moosnowResult from "../../../model/moosnowResult";
import Common from "../../../utils/Common";


export default class CocosAdForm extends CocosBaseForm {

    public pauseContainer: any = null;
    public pauseView: any = null;
    public pauseLayout: any = null;
    public centerContainer: any = null;
    public centerView: any = null;
    public centerLayout: any = null;
    public exportContainer: any = null;
    public exportView: any = null;
    public exportLayout: any = null;
    public exportClose: any = null;
    public exportMask: any = null;
    public exportCloseTxt: any = null;
    public btnBack: any = null;
    public floatContainer: any = null;
    public floatFull: any = null;
    public bannerContainer: any = null;
    public bannerView: any = null;
    public bannerLayout: any = null;
    public endContainer: any = null;
    public endView: any = null;
    public endLayout: any = null;
    public failContainer: any = null;
    public failView: any = null;
    public failLayout: any = null;
    public gameOverContainer: any = null;
    public gameOverView: any = null;
    public gameOverLayout: any = null;
    public respawnContainer: any = null;
    public respawnScrollView: any = null;
    public respawnLayout: any = null;
    public playerDiedContainer: any = null;
    public playerDiedScrollView: any = null;
    public playerDiedLayout: any = null;
    public leftContainer: any = null;
    public leftView: any = null;
    public leftLayout: any = null;
    public rightView: any = null;
    public rightLayout: any = null;
    public sideContainer: any = null;
    public sideView: any = null;
    public sideLayout: any = null;
    public btnSideShow: any = null;
    public btnSideHide: any = null;

    public extend1Container: any = null;
    public extend1View: any = null;
    public extend1Layout: any = null;

    public extend2Container: any = null;
    public extend2View: any = null;
    public extend2Layout: any = null;

    public extend3Container: any = null;
    public extend3View: any = null;
    public extend3Layout: any = null;

    public extend4Container: any = null;
    public extend4View: any = null;
    public extend4Layout: any = null;



    public topContainer: any = null;
    public topView: any = null;
    public topLayout: any = null;



    private mShowAd = moosnow.AD_POSITION.NONE;
    private mPrevShowAd = moosnow.AD_POSITION.NONE;
    private mPrevBackCall: Function
    private mBackCall: Function


    public addListener() {
        if (this.btnBack)
            this.btnBack.on(CocosNodeEvent.TOUCH_END, this.onBack, this)
        if (this.exportClose)
            this.exportClose.on(CocosNodeEvent.TOUCH_END, this.onNavigate, this)
        if (this.btnSideShow)
            this.btnSideShow.on(CocosNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.on(CocosNodeEvent.TOUCH_START, this.sideIn, this)
    }
    public removeListener() {
        if (this.btnBack)
            this.btnBack.off(CocosNodeEvent.TOUCH_END, this.onBack, this)
        if (this.exportClose)
            this.exportClose.off(CocosNodeEvent.TOUCH_END, this.onNavigate, this)
        if (this.btnSideShow)
            this.btnSideShow.off(CocosNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.off(CocosNodeEvent.TOUCH_START, this.sideIn, this)
    }
    public onBack() {
        if (this.mBackCall) {
            this.mBackCall();
        }
    }

    private mFloatIndex = 0;
    private mFloatRefresh = 3;
    private mFloatCache = {};
    private mAdData: moosnowResult;

    private loadAd(callback?: Function) {
        if (this.mAdData)
            callback(this.mAdData.indexLeft)
        else
            moosnow.ad.getAd((res) => {
                this.mAdData = res;
                if (res.indexLeft.length == 0)
                    return;
                callback(this.mAdData.indexLeft)
            })
    }

    public onRandomNavigate() {
        this.loadAd(res => {
            let item = res[Common.randomNumBoth(0, res.length - 1)];
            moosnow.platform.navigate2Mini(item, () => { }, () => {

            })
        })

    }
    public onNavigate() {
        moosnow.http.getAllConfig(res => {
            if (res && res.exportBtnNavigate == 1) {
                this.onRandomNavigate();
            }
            else {
                this.onBack();
            }
        })
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

    public sideOut() {
        let wxsys = moosnow.platform.getSystemInfoSync();
        let statusBarHeight = 0;
        let notchHeight = 0;
        if (wxsys) {
            statusBarHeight = wxsys.statusBarHeight || 0;
            notchHeight = wxsys.notchHeight || 0;
        }

        this.sideView.node.runAction(cc.sequence(
            cc.moveTo(1, statusBarHeight + notchHeight + this.sideView.node.width + 20, 0),
            cc.callFunc(() => {
                this.btnSideShow.active = false;
                this.btnSideHide.active = true;
            })
        ))
    }

    public sideIn() {
        this.sideView.node.runAction(cc.sequence(
            cc.moveTo(1, 0, 0),
            cc.callFunc(() => {
                this.btnSideShow.active = true;
                this.btnSideHide.active = false;
            })
        ))
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
    public showClose(visible) {
        return;
        this.exportClose.active = false;
        this.exportCloseTxt.active = false;
        this.btnBack.active = false;

        this.unschedule(this.showExportClose)

        if (visible && this.hasAd(AD_POSITION.BACK)) {
            if (this.hasAd(AD_POSITION.WAIT)) {
                this.mSecond = 3;
                this.showExportClose();
                this.schedule(this.showExportClose, 1);
            }
            else {
                this.exportClose.active = true;
                this.btnBack.active = true;
                this.exportCloseTxt.active = false;
            }
        }
        else {
            this.exportClose.active = false;
            this.btnBack.active = false;
            this.exportCloseTxt.active = false;
        }
    }
    public mSecond: number = 3
    public showExportClose() {
        this.mSecond -= 1;
        this.exportCloseTxt.active = true;
        let closeLabel = this.exportCloseTxt.getComponent(cc.Label)
        if (this.mSecond <= 0) {
            this.exportClose.active = true;
            this.btnBack.active = true;
            this.exportCloseTxt.active = false;
            this.unschedule(this.showExportClose)
            return;
        }
        closeLabel.string = `剩余${this.mSecond}秒可关闭`
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