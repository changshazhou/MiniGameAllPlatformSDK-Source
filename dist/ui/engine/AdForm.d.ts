import { AD_POSITION } from "../../enum/AD_POSITION";
import BaseForm from "./BaseForm";
export default class AdForm extends BaseForm {
    pauseContainer: cc.Node;
    pauseView: cc.ScrollView;
    pauseLayout: cc.Layout;
    centerContainer: cc.Node;
    centerView: cc.ScrollView;
    centerLayout: cc.Layout;
    exportContainer: cc.Node;
    exportView: cc.ScrollView;
    exportLayout: cc.Layout;
    exportClose: cc.Node;
    exportMask: cc.Node;
    exportCloseTxt: cc.Node;
    floatContainer: cc.Node;
    floatFull: cc.Node;
    bannerContainer: cc.Node;
    bannerView: cc.ScrollView;
    bannerLayout: cc.Layout;
    endContainer: cc.Node;
    endView: cc.ScrollView;
    endLayout: cc.Layout;
    failContainer: cc.Node;
    failView: cc.ScrollView;
    failLayout: cc.Layout;
    gameOverContainer: cc.Node;
    gameOverView: cc.ScrollView;
    gameOverLayout: cc.Layout;
    respawnContainer: cc.Node;
    respawnScrollView: cc.ScrollView;
    respawnLayout: cc.Layout;
    playerDiedContainer: cc.Node;
    playerDiedScrollView: cc.ScrollView;
    playerDiedLayout: cc.Layout;
    leftContainer: cc.Node;
    leftView: cc.ScrollView;
    leftLayout: cc.Layout;
    rightView: cc.ScrollView;
    rightLayout: cc.Layout;
    sideContainer: cc.Node;
    sideView: cc.ScrollView;
    sideLayout: cc.Layout;
    btnSideShow: cc.Node;
    btnSideHide: cc.Node;
    private mAdItemList;
    setPosition(source: Array<moosnowAdRow>, position?: string): Array<moosnowAdRow>;
    private mScrollVec;
    /**
     *
     * @param scrollView
     * @param layout
     * @param positionTag
     * @param entityName
     */
    initView(container: cc.Node, scrollView: cc.ScrollView, layout: cc.Layout, position: AD_POSITION, entityName: string | cc.Prefab): void;
    addEvent(): void;
    removeEvent(): void;
    onAdChange(data: any): void;
    private mIndex;
    /**
     *
     * @param zindex
     */
    onAfterShow(zindex: number): void;
    /**
      *
      * @param data
      */
    willShow(data: any): void;
    private mShowAd;
    private mBackCall;
    displayChange(data: any, callback?: any): void;
    onBack(): void;
    private mMoveSpeed;
    onFwUpdate(dt: any): void;
    sideOut(): void;
    sideIn(): void;
    willHide(): void;
    private mFloatIndex;
    private mFloatRefresh;
    private mFloatCache;
    private mAdData;
    initFloatAd(parentNode: any, prefabs: any, points: Array<cc.Vec2>): void;
    floatAnim(floatNode: any): void;
    private updateFloat;
    private hasAd;
    private mSecond;
    private showExportClose;
    private displayAd;
}
