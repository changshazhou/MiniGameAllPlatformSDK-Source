import { AD_POSITION } from "../../../enum/AD_POSITION";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import CocosBaseForm from "./CocosBaseForm";
import moosnowResult from "../../../model/moosnowResult";
import Common from "../../../utils/Common";
import CocosFormFactory from "../helper/CocosFormFactory";
import CocosAdViewItem from "../template/CocosAdViewItem";
import moosnowAdRow from "../../../model/moosnowAdRow";
import showAdOptions from "../../../model/loadAdOptions";
import AdViewItem from "../../engine/AdViewItem";
import EventType from "../../../utils/EventType";


export default class CocosAdForm extends CocosBaseForm {

    public endContainer: any = null;
    public endContainer_view: any = null;
    public endContainer_layout: any = null;

    public exportContainer: any = null;
    public exportContainer_view: any = null;
    public exportContainer_layout: any = null;

    public exportClose: any = null;
    public exportMask: any = null;
    public exportCloseTxt: any = null;

    public btnBack: any = null;
    public floatContainer: any = null;
    public floatFull: any = null;

    public bannerContainer: any = null;
    public bannerContainer_view: any = null;
    public bannerContainer_layout: any = null;


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



    private mShowAd = moosnow.AD_POSITION.NONE;
    private mPrevShowAd = moosnow.AD_POSITION.NONE;
    private mPrevBackCall: Function
    private mBackCall: Function
    private mScrollVec = [];
    private mEndLogic = [];

    private addListener() {
        if (this.btnBack)
            this.btnBack.on(CocosNodeEvent.TOUCH_END, this.onBack, this)
        if (this.exportClose)
            this.exportClose.on(CocosNodeEvent.TOUCH_END, this.onNavigate, this)
        if (this.btnSideShow)
            this.btnSideShow.on(CocosNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.on(CocosNodeEvent.TOUCH_START, this.sideIn, this)


        moosnow.event.addListener(EventType.AD_VIEW_CHANGE, this, this.onAdChange)
    }
    private removeListener() {
        if (this.btnBack)
            this.btnBack.off(CocosNodeEvent.TOUCH_END, this.onBack, this)
        if (this.exportClose)
            this.exportClose.off(CocosNodeEvent.TOUCH_END, this.onNavigate, this)
        if (this.btnSideShow)
            this.btnSideShow.off(CocosNodeEvent.TOUCH_START, this.sideOut, this)
        if (this.btnSideHide)
            this.btnSideHide.off(CocosNodeEvent.TOUCH_START, this.sideIn, this)


        moosnow.event.removeListener(EventType.AD_VIEW_CHANGE, this)
    }

    private onAdChange(data) {

        this.displayChange(data.showAd, data.callback)

        if (!isNaN(data.zIndex)) {
            this.node.zIndex = data.zIndex;
        }
        else {
            this.node.zIndex = 9999;
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

        this.loadAd((res) => {
            if (res.length == 0)
                return;
            let source = this.setPosition(res, "浮动ICON", callback, true);

            let showIds = [];

            this.FormData.floatTempletes.forEach((templateName, idx) => {
                let showIndex = idx;
                if (showIndex > source.length - 1)
                    showIndex = 0;
                let adRow = source[showIndex] as any;
                showIds.push({
                    appid: adRow.appid,
                    position: adRow.position,
                    index: idx
                })
                let point = this.FormData.floatPositon.length - 1 > idx ? this.FormData.floatPositon[idx] as any : this.FormData.floatPositon[0];
                adRow.x = point.x;
                adRow.y = point.y;
                adRow.source = source;
                adRow.showIds = showIds;
                let logic = CocosFormFactory.instance.createNodeByTemplate(templateName, AdViewItem, adRow);
                this.mFloatCache[idx] = {
                    index: showIndex,
                    logic: logic,
                };
                this.floatAnim((logic as any).node);
            })
            this.updateFloat(source);

            this.schedule(() => {
                this.updateFloat(source);
            }, this.mFloatRefresh);

        })

    }

    private updateFloat(source) {

        for (let key in this.mFloatCache) {
            let showIndex = this.mFloatCache[key].index;
            let logic = this.mFloatCache[key].logic;
            if (showIndex < this.mAdData.indexLeft.length - 1)
                showIndex++;
            else
                showIndex = 0;
            this.mFloatCache[key].index = showIndex;

            logic.refreshImg({ ...this.mAdData.indexLeft[showIndex], onCancel: this.mFloatCache[key].onCancel });

        }

    }

    /**
       * 绑定广告数据-固定显示6个导出
       * @param container 列表容器节点，显示/隐藏  的核心节点
       * @param layout cc.Layout
       * @param position 位置信息，将提交到统计后台用于分析
       * @param entityName 需要绑定的预制体
       * @param callback 跳转取消时的回调函数
       */
    public initFiexdView(container: any, layout: any, position: string, templateName: string, callback?: Function) {

        this.loadAd((res) => {

            CocosFormFactory.instance.hideNodeByTemplate(templateName, null);

            let banner = this.setPosition(res, position, callback, true);
            let endAd: Array<moosnowAdRow> = [];
            let showIds = [];
            for (let i = 0; i < 6; i++) {
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
                CocosFormFactory.instance.createNodeByTemplate(templateName, CocosAdViewItem, adRow, layout)
            })
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
    public initView(scrollView: any, layout: cc.Node, position: string, templateName: string, callback?: Function) {

        this.loadAd((res) => {
            this.hideAllAdNode(templateName, layout);
            let source = this.setPosition(res, position, callback);
            source.forEach((item, idx) => {
                CocosFormFactory.instance.createNodeByTemplate(templateName, CocosAdViewItem, item, layout)
            })
            this.pushScroll(scrollView, layout);
        })
    }


    public hideAllAdNode(templateName: string, node: cc.Node) {
        if (!node)
            return;
        for (let i = 0; i < node.childrenCount; i++) {
            CocosFormFactory.instance.hideNodeByTemplate(templateName, node.children[i]);
            i--
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

    /**
     * 
     * @param data 
     */
    public willShow(data) {
        this.addListener();
        
        this.mAdItemList = [];
        this.mScrollVec = []
        // this.addEvent();
        this.displayChange(data.showAd, data.callback)
    }

    public willHide() {
        super.willShow();
        this.removeListener();
    }

    public displayChange(data, callback = null) {
        this.mShowAd = data;
        this.displayAd(true)
        this.mBackCall = callback;
    }

    private displayAd(visible: boolean) {

        // this.exportClose.active = this.exportContainer.active = visible && this.hasAd(AD_POSITION.EXPORT);
        // if (visible && this.hasAd(AD_POSITION.EXPORT)) {
        //     moosnow.http.getAllConfig(res => {
        //         if (res.exportAutoNavigate == 1) {
        //             moosnow.platform.navigate2Mini(this.mAdData.indexLeft[Common.randomNumBoth(0, this.mAdData.indexLeft.length - 1)])
        //         }
        //     })

        //     this.exportClose.active = false;
        //     this.unschedule(this.showExportClose)
        //     this.schedule(this.showExportClose, 1)
        // }

        this.bannerContainer.active = visible && this.hasAd(AD_POSITION.BANNER);


    }

    public onShow(data) {
        super.onShow(data);
        if (this.FormData && this.FormData.callback)
            this.FormData.callback();
        var param = {}

        this.initView(this.bannerContainer_view, this.bannerContainer_layout, "banner", "bannerAdItem");
        //控制显示广告  后续补充
    }

}