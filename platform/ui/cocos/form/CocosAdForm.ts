import { AD_POSITION } from "../../../enum/AD_POSITION";
import CocosBaseForm from "./CocosBaseForm";
import moosnowResult from "../../../model/moosnowResult";
import Common from "../../../utils/Common";
import CocosAdViewItem from "../template/CocosAdViewItem";
import moosnowAdRow from "../../../model/moosnowAdRow";
import showAdOptions from "../../../model/loadAdOptions";
import EventType from "../../../utils/EventType";
import CocosNodeHelper from "../helper/CocosNodeHelper";


export default class CocosAdForm extends CocosBaseForm {

    public endContainer: cc.Node = null;
    public endContainer_layout: cc.Node = null;

    public exportContainer: cc.Node = null;
    public exportContainer_scroll: cc.Node = null;
    public exportContainer_layout: cc.Node = null;

    public exportClose: cc.Node = null;
    public formMask: cc.Node = null;
    public exportCloseTxt: cc.Node = null;
    public btnBack: cc.Node = null;

    public floatContainer: cc.Node = null;
    public floatFull: any = null;

    public bannerContainer: cc.Node = null;
    public bannerContainer_scroll: cc.Node = null;
    public bannerContainer_layout: cc.Node = null;

    public topContainer: cc.Node = null;
    public topContainer_scroll: cc.Node = null;
    public topContainer_layout: cc.Node = null;


    public leftContainer: cc.Node = null;
    public leftContainer_scroll: cc.Node = null;
    public leftContainer_layout: cc.Node = null;

    public rightContainer: cc.Node = null;
    public rightContainer_scroll: cc.Node = null;
    public rightContainer_layout: cc.Node = null;

    public rotateContainer: cc.Node = null;
    public rotateContainer_layout: cc.Node = null;




    public sideContainer: any = null;
    public sideView: any = null;
    public sideLayout: any = null;
    public btnSideShow: any = null;
    public btnSideHide: any = null;



    private mShowAd = AD_POSITION.NONE;
    private mPrevShowAd = AD_POSITION.NONE;
    private mPrevBackCall: Function
    private mBackCall: Function
    private mScrollVec = [];
    private mEndLogic = [];
    private mMoveSpeed: number = 2;

    private addListener() {
        this.applyClickAnim(this.btnBack, () => {
            this.onBack();
        })
        this.applyClickAnim(this.exportClose, () => {
            this.onNavigate();
        })
        this.applyClickAnim(this.btnSideShow, () => {
            this.sideOut();
        })
        this.applyClickAnim(this.btnSideHide, () => {
            this.sideIn();
        })
        moosnow.event.addListener(EventType.AD_VIEW_CHANGE, this, this.onAdChange)
    }
    private removeListener() {

        this.removeClickAnim(this.btnBack)
        this.removeClickAnim(this.exportClose)
        this.removeClickAnim(this.btnSideShow)
        this.removeClickAnim(this.btnSideHide)
        moosnow.event.removeListener(EventType.AD_VIEW_CHANGE, this)
    }
    private mTempPoints: Array<cc.Vec2>;
    private mTempTempletes: Array<string>;
    private onAdChange(data) {

        this.mShowAd = AD_POSITION.NONE;
        this.displayAd(false)

        this.mTempPoints = data && data.points ? data.points : null;
        this.mTempTempletes = data && data.templetes ? data.templetes : null;

        if (data.showAd != AD_POSITION.RECOVER) {
            this.mPrevShowAd = this.mShowAd;
            this.mPrevBackCall = this.mBackCall;
        }
        if (data.showAd == AD_POSITION.RECOVER) {
            data.showAd = this.mPrevShowAd;
            data.callback = this.mPrevBackCall;
        }
        this.displayChange(data.showAd, data.callback)

        if (!isNaN(data.zIndex)) {
            this.node.zIndex = data.zIndex;
        }
        else {
            this.node.zIndex = cc.macro.MAX_ZINDEX;
        }
    }

    public onBack() {
        if (this.mBackCall) {
            this.mBackCall();
        }
    }

    public get FormData(): showAdOptions {
        return this.mFormData;
    }



    private mFloatIndex = 0;
    private mFloatRefresh = 3;
    private mFloatCache = {};
    private mAdData: moosnowResult;

    private loadAd(callback?: (res: Array<moosnowAdRow>) => void) {
        if (this.mAdData)
            callback(this.mAdData.indexLeft)
        else {
            this.loadNum = 0;
            moosnow.form.formFactory.getLayout(() => {
                this.checkLoad(callback);
            })
            moosnow.form.formFactory.getTemplates(() => {
                this.checkLoad(callback);
            })
            moosnow.ad.getAd((res) => {
                this.mAdData = res;
                this.checkLoad(callback);
            })
        }
    }
    private loadNum = 0;
    private loadManNum = 3;
    private checkLoad(callback?: Function) {
        this.loadNum++
        if (this.loadNum == this.loadManNum) {
            callback(this.mAdData.indexLeft)
        }
    }

    public onRandomNavigate() {
        let item = this.mAdData.indexLeft[Common.randomNumBoth(0, this.mAdData.indexLeft.length - 1)];
        moosnow.platform.navigate2Mini(item, () => { }, () => {

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
    public pushScroll(scrollView: cc.ScrollView, layout: cc.Layout) {
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
    private addAd(ad) {
        this.mShowAd |= ad;
    }
    private removeAd(ad) {
        if (this.hasAd(ad))
            this.mShowAd ^= ad;
    }
    private hasAd(ad) {
        return (this.mShowAd & ad) == ad;
    }
    public showClose(visible) {

        this.exportClose.active = false;
        this.exportCloseTxt.active = false;
        this.btnBack.active = false;

        this.unschedule(this.onWaitShow)

        if (visible && this.hasAd(AD_POSITION.BACK)) {
            if (this.hasAd(AD_POSITION.WAIT)) {
                this.mSecond = 3;
                this.onWaitShow();
                this.schedule(this.onWaitShow, 1);
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
    public onWaitShow() {
        this.mSecond -= 1;
        this.exportCloseTxt.active = true;
        if (this.mSecond <= 0) {
            this.exportClose.active = true;
            this.btnBack.active = true;
            this.exportCloseTxt.active = false;
            this.unschedule(this.onWaitShow)
            return;
        }
        CocosNodeHelper.changeText(this.exportCloseTxt, `剩余${this.mSecond}秒可关闭`)

    }

    private mAdItemList = [];
    public setPosition(source: Array<moosnowAdRow>, position: string = "", callback?: Function, refresh: boolean = false): Array<moosnowAdRow> {
        let retValue = Common.deepCopy(source) as [];
        retValue.forEach((item: moosnowAdRow) => {
            item.position = position;
            item.onCancel = callback;
            item.refresh = refresh;
        })
        return retValue;
    }
    /**
     * 
     * @param parentNode 父节点
     * @param prefabs 匹配的预制体
     * @param points 需要显示的坐标点
     * @param entityName  需要绑定的预制体
     * @param callback  跳转取消时的回调函数
     */
    public initFloatAd(callback?: Function) {


        if (this.mAdData.indexLeft.length == 0)
            return;
        let source = this.setPosition(this.mAdData.indexLeft, "浮动ICON", callback, true);

        let showIds = [];

        let points = this.mTempPoints || this.FormData.floatPositon;
        let templetes = this.mTempTempletes || this.FormData.floatTempletes;

        points.forEach((point, idx) => {
            let showIndex = idx;
            if (showIndex > source.length - 1)
                showIndex = 0;
            let adRow = source[showIndex] as any;
            showIds.push({
                appid: adRow.appid,
                position: adRow.position,
                index: idx
            })
            let templateName = templetes.length - 1 > idx ? templetes[idx] as any : templetes[0];
            console.log('initFloatAd', point.x, point.y)
            adRow.x = point.x;
            adRow.y = point.y;
            adRow.source = source;
            adRow.showIds = showIds;
            adRow.index = idx;
            moosnow.form.formFactory.createNodeByTemplate(templateName, CocosAdViewItem, adRow, this.floatContainer);

        })
        this.updateFloat(source);

        this.schedule(this.updateFloat, this.mFloatRefresh, [source]);

        this.floatRuning = false;

    }


    private removeFloatAd() {
        this.floatContainer.children.forEach(floatNode => {
            floatNode.stopAllActions();
        })

        let templetes = this.FormData.floatTempletes;
        if (this.mTempTempletes) {
            templetes = templetes.concat(this.mTempTempletes)
        }
        templetes.forEach(tempName => {
            moosnow.form.formFactory.hideNodeByTemplate(tempName, null);
        })

        this.unschedule(this.updateFloat)
    }


    private floatRuning = false;
    private floatAnim() {
        if (this.floatRuning)
            return;
        let templetes = this.mTempTempletes || this.FormData.floatTempletes;
        if (this.floatContainer.childrenCount >= templetes.length)
            this.floatRuning = true;
        this.floatContainer.children.forEach(floatNode => {
            floatNode.stopAllActions();
            floatNode.runAction(
                cc.sequence(
                    cc.rotateTo(0.3, 10),
                    cc.rotateTo(0.6, -10),
                    cc.rotateTo(0.3, 0),
                    cc.scaleTo(0.3, 0.8),
                    cc.scaleTo(0.3, 1)
                ).repeatForever()
            )
        })
    }


    private updateFloat(source) {
        let templetes = this.mTempTempletes || this.FormData.floatTempletes;
        this.floatContainer.children.forEach(floatNode => {
            templetes.forEach(templeteName => {
                moosnow.form.formFactory.getKVsByName(templeteName).forEach(kv => {
                    if (kv.formNode == floatNode) {
                        if (kv.formLogic.FormData.index < this.mAdData.indexLeft.length - 1)
                            kv.formLogic.FormData.index++;
                        else
                            kv.formLogic.FormData.index = 0;
                        let logic = (kv.formLogic as any) as CocosAdViewItem
                        logic.refreshImg({ ...this.mAdData.indexLeft[kv.formLogic.FormData.index], onCancel: kv.formLogic.FormData.onCancel });
                    }
                })
            })

        })
    }

    /**
       * 绑定广告数据-固定显示6个导出
       * @param container 列表容器节点，显示/隐藏  的核心节点
       * @param layout cc.Layout
       * @param position 位置信息，将提交到统计后台用于分析
       * @param entityName 需要绑定的预制体
       * @param callback 跳转取消时的回调函数
       */
    public initFiexdView(layout: cc.Node, position: string, templateName: string, callback?: Function) {
        if (!this.mAdData) return;
        layout.removeAllChildren();
        let banner = this.setPosition(this.mAdData.indexLeft, position, callback, true);
        let endAd: Array<moosnowAdRow> = [];
        let showIds = [];
        for (let i = 0; i < 8; i++) {
            let item = banner.length > i ? banner[i] : banner[0];
            showIds.push({
                appid: item.appid,
                position: item.position,
                index: i
            })
            endAd.push(item);
        }
        endAd.forEach(item => {
            let adRow = { ...item, showIds, source: banner }
            moosnow.form.formFactory.createNodeByTemplate(templateName, CocosAdViewItem, adRow, layout)
        })
    }
    /**
     * 绑定导出数据
     * @param container 列表容器节点，显示/隐藏  的核心节点
     * @param scrollView 
     * @param layout cc.Layout
     * @param position 位置信息，将提交到统计后台用于分析
     * @param entityName  需要绑定的预制体
     * @param callback  跳转取消时的回调函数
     */
    public initView(scrollView: cc.ScrollView, layout: cc.Node, position: string, templateName: string, callback?: Function, source?: Array<moosnowAdRow>) {

        this.hideAllAdNode(templateName, layout);
        if (!source)
            source = this.setPosition(this.mAdData.indexLeft, position, callback);
        source.forEach((item, idx) => {
            moosnow.form.formFactory.createNodeByTemplate(templateName, CocosAdViewItem, item, layout)
        })
        this.pushScroll(scrollView, layout.getComponent(cc.Layout));
    }


    public hideAllAdNode(templateName: string, node: cc.Node) {
        if (!node)
            return;
        for (let i = 0; i < node.childrenCount; i++) {
            moosnow.form.formFactory.hideNodeByTemplate(templateName, node.children[i]);
            i--
        }
    }


    public onFwUpdate() {

        this.floatAnim();
        this.scrollMove();

    }

    private scrollMove() {
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


    /**
     * 
     * @param data 
     */
    public willShow(data) {
        super.willShow(data);
        this.floatRuning = false;
        this.addListener();

        this.mAdItemList = [];
        this.mScrollVec = []
        // this.addEvent();
        this.displayChange(data.showAd, data.callback)
    }

    public willHide() {
        super.willShow();
        this.removeListener();
        this.unschedule(this.onFwUpdate);
    }

    public displayChange(data, callback = null) {
        this.mShowAd = data;
        this.displayAd(true)
        this.mBackCall = callback;
    }

    private displayAd(visible: boolean) {
        this.endContainer.active = visible && this.hasAd(AD_POSITION.EXPORT_FIXED);
        this.endContainer.active && this.initEnd();

        // !this.endContainer.active && this.disableEnd();
        this.bannerContainer.active = visible && this.hasAd(AD_POSITION.BANNER);
        this.topContainer.active = visible && this.hasAd(AD_POSITION.TOP);

        this.floatContainer.active = visible && this.hasAd(AD_POSITION.FLOAT);

        this.floatContainer.active && this.initFloatAd();

        if (!this.floatContainer.active) {
            this.removeFloatAd();
        }


        this.leftContainer.active = this.rightContainer.active = visible && this.hasAd(AD_POSITION.LEFTRIGHT);
        this.exportContainer.active = visible && this.hasAd(AD_POSITION.EXPORT)
        this.rotateContainer.active = visible && this.hasAd(AD_POSITION.ROTATE);
        this.rotateContainer.active && this.initRotate();
        !this.rotateContainer.active && this.disableRotate();
        this.formMask.active = visible && this.hasAd(AD_POSITION.MASK);
        if (visible && this.hasAd(AD_POSITION.EXPORT)) {
            moosnow.http.getAllConfig(res => {
                if (res.exportAutoNavigate == 1) {
                    moosnow.platform.navigate2Mini(this.mAdData.indexLeft[Common.randomNumBoth(0, this.mAdData.indexLeft.length - 1)])
                }
            })
            // this.exportClose.active = false;
            // this.unschedule(this.onWaitShow)
            // this.schedule(this.onWaitShow, 1)
        }
        this.showClose(visible);

    }

    public onShow(data) {
        super.onShow(data);

        moosnow.http.getAllConfig(res => {
            if (res) {
                if (!isNaN(res.adScrollViewSpeed))
                    this.mMoveSpeed = parseFloat(res.adScrollViewSpeed);
            }
        })

        this.loadAd(() => {
            this.schedule(this.onFwUpdate, 0.016)
            this.initBanner();
            this.initExport();
            this.initTop();
            this.initLeftRight();
            if (this.FormData && this.FormData.callback)
                this.FormData.callback();
        })
    }

    private initBanner() {
        let layout = this.bannerContainer_layout.getComponent(cc.Layout);
        let scrollView = this.bannerContainer_scroll.getComponent(cc.ScrollView);
        layout.type = cc.Layout.Type.HORIZONTAL;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        this.initView(scrollView, this.bannerContainer_layout, "banner", "bannerAdItem");
        //控制显示广告  后续补充
    }

    private initTop() {
        let layout = this.topContainer_layout.getComponent(cc.Layout);
        let scrollView = this.topContainer_scroll.getComponent(cc.ScrollView);
        layout.type = cc.Layout.Type.HORIZONTAL;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        this.initView(scrollView, this.topContainer_layout, "top", "bannerAdItem");
        //控制显示广告  后续补充
    }
    private initLeftRight() {
        let source = this.mAdData.indexLeft;
        let endNum = source.length / 2
        let right = source.slice(0, endNum)
        let left = source.slice(endNum, source.length)

        let leftLayout = this.leftContainer_layout.getComponent(cc.Layout);
        leftLayout.type = cc.Layout.Type.VERTICAL;
        leftLayout.resizeMode = cc.Layout.ResizeMode.CONTAINER;

        let rightLayout = this.rightContainer_layout.getComponent(cc.Layout);
        rightLayout.type = cc.Layout.Type.VERTICAL;
        rightLayout.resizeMode = cc.Layout.ResizeMode.CONTAINER;

        let leftView = this.leftContainer_scroll.getComponent(cc.ScrollView);
        leftView.horizontal = false;
        leftView.vertical = true;
        let rightView = this.rightContainer_scroll.getComponent(cc.ScrollView);
        rightView.horizontal = false;
        rightView.vertical = true;
        this.initView(leftView, this.leftContainer_layout, "left", "leftAdItem", () => { }, left);
        this.initView(rightView, this.rightContainer_layout, "right", "leftAdItem", () => { }, right);
    }

    private initEnd() {
        let layout = this.endContainer_layout.getComponent(cc.Layout);
        layout.type = cc.Layout.Type.GRID;
        layout.resizeMode = cc.Layout.ResizeMode.NONE;
        this.initFiexdView(this.endContainer_layout, "8个固定大导出", "fiexdAdItem");
    }
    // private disableEnd() {
    //     moosnow.form.formFactory.hideNodeByTemplate("exportAdItem", null);
    // }



    private initExport() {
        let layout = this.exportContainer_layout.getComponent(cc.Layout);
        let scrollView = this.exportContainer_scroll.getComponent(cc.ScrollView);
        layout.type = cc.Layout.Type.GRID;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        // layout.startAxis = cc.Layout.AxisDirection.VERTICAL;
        this.initView(scrollView, this.exportContainer_layout, "大导出", "exportAdItem");
    }

    private disableRotate() {
        let tempName = "rotateAdItem"
        moosnow.form.formFactory.hideNodeByTemplate(tempName, null);
    }
    private initRotate(callback?: Function) {
        if (!this.mAdData)
            return;
        let source = this.setPosition(this.mAdData.indexLeft, "旋转导出", callback, true);
        let beginIdx = Common.randomNumBoth(0, source.length - 1);
        let tempName = "rotateAdItem"
        moosnow.form.formFactory.getTemplate(tempName, (tempCfg) => {

            let x = tempCfg.width / 2;
            let y = tempCfg.height / 2;
            let spacingX: number = 15;
            let spacingY: number = 15;

            let pos = [
                { x: -x - spacingX, y: y + spacingY },
                { x: x + spacingX, y: y + spacingY },
                { x: -x - spacingX, y: -y - spacingY },
                { x: x + spacingX, y: -y - spacingY }
            ];
            let showIds = [];
            let endAd: Array<moosnowAdRow> = [];
            for (let i = 0; i < 4; i++) {
                if (source.length == 0)
                    break;
                let rowIndex = Common.randomNumBoth(0, source.length - 1);
                let adRow = source.splice(rowIndex, 1)[0] as any;
                adRow.x = pos[i].x;
                adRow.y = pos[i].y;

                showIds.push({
                    appid: adRow.appid,
                    position: adRow.position,
                    index: i
                })
                endAd.push(adRow);
            }

            endAd.forEach(adRow => {
                adRow.source = source;
                adRow.showIds = showIds;
                moosnow.form.formFactory.createNodeByTemplate(tempName, CocosAdViewItem, adRow, this.rotateContainer_layout);
            })
            let t = CocosNodeHelper.canvasNode.width / 2 / 800
            this.rotateContainer_layout.children.forEach((item, idx) => {

                item.x = pos[idx].x - CocosNodeHelper.canvasNode.width / 2;
                item.stopAllActions();
                item.runAction(
                    cc.spawn(
                        cc.moveTo(t, new cc.Vec2(pos[idx].x, pos[idx].y)),
                        cc.rotateBy(t, 360)
                    )
                )
            })
        })

    }


    public disableAd() {
        this.unschedule(this.onFwUpdate)
    }
}