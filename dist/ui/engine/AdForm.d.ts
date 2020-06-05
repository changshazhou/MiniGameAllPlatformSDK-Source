import BaseForm from "./BaseForm";
import moosnowAdRow from "../../model/moosnowAdRow";
export default class AdForm extends BaseForm {
    pauseContainer: any;
    pauseView: any;
    pauseLayout: any;
    centerContainer: any;
    centerView: any;
    centerLayout: any;
    exportContainer: any;
    exportView: any;
    exportLayout: any;
    exportClose: any;
    exportMask: any;
    exportCloseTxt: any;
    floatContainer: any;
    floatFull: any;
    bannerContainer: any;
    bannerView: any;
    bannerLayout: any;
    endContainer: any;
    endView: any;
    endLayout: any;
    failContainer: any;
    failView: any;
    failLayout: any;
    gameOverContainer: any;
    gameOverView: any;
    gameOverLayout: any;
    respawnContainer: any;
    respawnScrollView: any;
    respawnLayout: any;
    playerDiedContainer: any;
    playerDiedScrollView: any;
    playerDiedLayout: any;
    leftContainer: any;
    leftView: any;
    leftLayout: any;
    rightView: any;
    rightLayout: any;
    sideContainer: any;
    sideView: any;
    sideLayout: any;
    btnSideShow: any;
    btnSideHide: any;
    private mAdItemList;
    setPosition(source: Array<moosnowAdRow>, position?: string): Array<moosnowAdRow>;
    private mScrollVec;
    /**
     *
     * @param scrollView
     * @param layout
     * @param positionTag AD_POSITION
     * @param entityName
     */
    initView(container: any, scrollView: any, layout: any, position: number, entityName: string | cc.Prefab): void;
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
    /**
     *
     * @param parentNode 父节点
     * @param prefabs 匹配的预制体
     * @param points 需要显示的坐标点
     */
    initFloatAd(parentNode: any, prefabs: Array<string>, points: Array<object>): void;
    floatAnim(floatNode: any): void;
    private updateFloat;
    private hasAd;
    private mSecond;
    private showExportClose;
    private displayAd;
}
