import EventType from "../../utils/EventType";
import { AD_POSITION } from "../../enum/AD_POSITION";
import BaseForm from "./BaseForm";
import Common from "../../utils/Common";

const { ccclass, property } = cc._decorator;
@ccclass
export default class AdForm extends BaseForm {

    @property(cc.Node)
    public pauseContainer: cc.Node = null;

    @property(cc.ScrollView)
    public pauseView: cc.ScrollView = null;

    @property(cc.Layout)
    public pauseLayout: cc.Layout = null;


    @property(cc.Node)
    public centerContainer: cc.Node = null;

    @property(cc.ScrollView)
    public centerView: cc.ScrollView = null;

    @property(cc.Layout)
    public centerLayout: cc.Layout = null;


    @property(cc.Node)
    public exportContainer: cc.Node = null;

    @property(cc.ScrollView)
    public exportView: cc.ScrollView = null;

    @property(cc.Layout)
    public exportLayout: cc.Layout = null;

    @property(cc.Node)
    public exportClose: cc.Node = null;

    @property(cc.Node)
    public exportMask: cc.Node = null;



    @property(cc.Node)
    public exportCloseTxt: cc.Node = null;

    @property(cc.Node)
    public floatContainer: cc.Node = null;

    @property(cc.Node)
    public floatFull: cc.Node = null;



    @property(cc.Node)
    public bannerContainer: cc.Node = null;

    @property(cc.ScrollView)
    public bannerView: cc.ScrollView = null;

    @property(cc.Layout)
    public bannerLayout: cc.Layout = null;




    @property(cc.Node)
    public endContainer: cc.Node = null;

    @property(cc.ScrollView)
    public endView: cc.ScrollView = null;

    @property(cc.Layout)
    public endLayout: cc.Layout = null;


    @property(cc.Node)
    public failContainer: cc.Node = null;

    @property(cc.ScrollView)
    public failView: cc.ScrollView = null;

    @property(cc.Layout)
    public failLayout: cc.Layout = null;


    @property(cc.Node)
    public gameOverContainer: cc.Node = null;

    @property(cc.ScrollView)
    public gameOverView: cc.ScrollView = null;

    @property(cc.Layout)
    public gameOverLayout: cc.Layout = null;




    @property(cc.Node)
    public respawnContainer: cc.Node = null;

    @property(cc.ScrollView)
    public respawnScrollView: cc.ScrollView = null;

    @property(cc.Layout)
    public respawnLayout: cc.Layout = null;





    @property(cc.Node)
    public playerDiedContainer: cc.Node = null;

    @property(cc.ScrollView)
    public playerDiedScrollView: cc.ScrollView = null;

    @property(cc.Layout)
    public playerDiedLayout: cc.Layout = null;




    @property(cc.Node)
    public leftContainer: cc.Node = null;

    @property(cc.ScrollView)
    public leftView: cc.ScrollView = null;

    @property(cc.Layout)
    public leftLayout: cc.Layout = null;

    @property(cc.ScrollView)
    public rightView: cc.ScrollView = null;

    @property(cc.Layout)
    public rightLayout: cc.Layout = null;

    @property(cc.Node)
    public drawerContainer: cc.Node = null;

    @property(cc.ScrollView)
    public drawerView: cc.ScrollView = null;

    @property(cc.Layout)
    public drawerLayout: cc.Layout = null;

    @property(cc.Node)
    public drawerShow: cc.Node = null;

    @property(cc.Node)
    public drawerHide: cc.Node = null;


    private mAdItemList = [];
    public setPosition(source: Array<moosnowAdRow>, position: string = ""): Array<moosnowAdRow> {
        let retValue = Common.deepCopy(source) as [];
        retValue.forEach((item: moosnowAdRow) => {
            item.position = position;
        })
        return retValue;
    }

    private mScrollVec = [];
    /**
     * 
     * @param scrollView 
     * @param layout 
     * @param positionTag 
     * @param entityName 
     */
    public initView(container: cc.Node, scrollView: cc.ScrollView, layout: cc.Layout, position: AD_POSITION, entityName: string | cc.Prefab) {
        if (!entityName) {
            console.warn('entityName is null 无法初始化 ')
            return;
        }
        moosnow.entity.preload(entityName, () => {
            moosnow.ad.getAd((res) => {
                let source = this.setPosition(res.indexLeft, "");

                source.forEach((item, idx) => {
                    let adItemCtl = moosnow.entity.showEntity(entityName, layout.node, item);
                    this.mAdItemList.push(adItemCtl);
                })
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
            })

        })
    }



    public addEvent() {
        this.exportClose.on(cc.Node.EventType.TOUCH_END, this.onBack, this)
        moosnow.event.addListener(EventType.AD_VIEW_CHANGE, this, this.onAdChange)
    }
    public removeEvent() {
        this.exportClose.off(cc.Node.EventType.TOUCH_END, this.onBack, this)
        moosnow.event.removeListener(EventType.AD_VIEW_CHANGE, this)
    }

    private mZindex: number = 9999;
    public onAdChange(data) {

        this.displayChange(data.showAd, data.callback)

        // if (!isNaN(data.zIndex)) {
        //     this.node.zIndex = data.zIndex;
        // }
        // else {
        //     this.node.zIndex = this.mZindex;
        // }
    }

    /**
      * 
      * @param data 
      */
    public willShow(data) {

        this.mAdItemList = [];
        this.mScrollVec = []
        this.addEvent();
        if (data)
            this.displayChange(data.showAd, data.callback)
        else
            this.displayChange(AD_POSITION.NONE, null)

    }

    private mShowAd = moosnow.AD_POSITION.NONE;
    private mBackCall: Function
    public displayChange(data, callback = null) {
        let curApp = moosnow.getAppPlatform()
        if (moosnow.APP_PLATFORM.WX == curApp || curApp == moosnow.APP_PLATFORM.OPPO) {
            this.mShowAd = data;
            this.displayAd(true)
            this.mBackCall = callback;
        }
        else {
            this.onBack();
        }

    }
    public onBack() {
        if (this.mBackCall) {
            this.mBackCall();
        }
    }


    private mMoveSpeed: number = 2;
    public onFwUpdate(dt) {
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

    public willHide() {
        this.removeEvent();
        this.mAdItemList.forEach(item => {
            moosnow.entity.hideEntity(item, null);
        })
        this.mAdItemList = [];
        this.mScrollVec = [];
    }
    private mFloatIndex = 0;
    private mFloatRefresh = 3;
    private mFloatCache = {};
    private mAdData: moosnowResult
    public initFloatAd(parentNode, prefabs, points: Array<cc.Vec2>) {
        moosnow.ad.getAd((res: moosnowResult) => {
            this.mAdData = res;
            let source = [...res.indexLeft];

            points.forEach((item, idx) => {
                let showIndex = idx  //Common.randomNumBoth(0, this.mAdData.indexLeft.length - 1);
                let adRow = { ...source[showIndex], position: "首页浮动" }
                let itemName = prefabs.length - 1 >= idx ? prefabs[idx] : prefabs[0];

                let logic = moosnow.entity.showEntity(itemName, parentNode, adRow);
                this.mFloatCache[idx] = {
                    index: showIndex,
                    logic: logic,
                    onCancel: adRow.onCancel
                };
                this.floatAnim(item);
            })
            this.updateFloat(Common.deepCopy(res));
            setInterval(() => {
                this.updateFloat(Common.deepCopy(res));
            }, this.mFloatRefresh * 1000)
        })

    }
    private floatAnim(floatNode) {
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


    private updateFloat(source) {

        for (let key in this.mFloatCache) {
            let showIndex = this.mFloatCache[key].index;
            let logic = this.mFloatCache[key].logic;
            if (showIndex < source.indexLeft.length - 1)
                showIndex++;
            else
                showIndex = 0;
            this.mFloatCache[key].index = showIndex;

            logic.refreshImg({ ...source.indexLeft[showIndex], onCancel: this.mFloatCache[key].onCancel });

        }


    }
    private hasAd(ad) {
        return (this.mShowAd & ad) == ad;
    }


    private mSecond: number = 3
    private showExportClose() {
        this.mSecond -= 1;
        this.exportCloseTxt.active = true;
        let closeLabel = this.exportCloseTxt.getComponent(cc.Label)
        if (this.mSecond <= 0) {
            this.exportClose.active = true;
            this.exportCloseTxt.active = false;
            this.unschedule(this.showExportClose)
            return;
        }
        closeLabel.string = `剩余${this.mSecond}秒可关闭`


    }


    private displayAd(visible: boolean) {

        this.floatContainer.active = visible && this.hasAd(AD_POSITION.FLOAT);

        this.bannerContainer.active = visible && this.hasAd(AD_POSITION.BANNER);

        this.centerContainer.active = visible && this.hasAd(AD_POSITION.CENTER);

        this.leftContainer.active = visible && this.hasAd(AD_POSITION.LEFTRIGHT);

        this.exportMask.active = visible && this.hasAd(AD_POSITION.MASK);


        // this.endContainer.active = visible && this.hasAd(AD_POSITION.EXPORT);
        // this.endContainer.active && this.initEndExport();

        this.exportClose.active = false;
        this.exportCloseTxt.active = false;

        this.unschedule(this.showExportClose)

        if (this.hasAd(AD_POSITION.BACK)) {
            if (this.hasAd(AD_POSITION.WAIT)) {
                this.mSecond = 3;
                this.showExportClose();
                this.schedule(this.showExportClose, 1);
            }
            else {
                this.exportClose.active = true;
                this.exportCloseTxt.active = false;
            }
        }
        else {
            this.exportClose.active = false;
            this.exportCloseTxt.active = false;
        }

        this.exportContainer.active = visible && this.hasAd(AD_POSITION.EXPORT)
        if (visible && this.hasAd(AD_POSITION.EXPORT)) {
            moosnow.http.getAllConfig(res => {
                if (res.exportAutoNavigate == 1) {
                    moosnow.platform.navigate2Mini(this.mAdData.indexLeft[Common.randomNumBoth(0, this.mAdData.indexLeft.length - 1)])
                }
            })
        }

    }

}