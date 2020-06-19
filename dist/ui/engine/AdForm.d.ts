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
    extend1Container: any;
    extend1View: any;
    extend1Layout: any;
    extend2Container: any;
    extend2View: any;
    extend2Layout: any;
    extend3Container: any;
    extend3View: any;
    extend3Layout: any;
    extend4Container: any;
    extend4View: any;
    extend4Layout: any;
    topContainer: any;
    topView: any;
    topLayout: any;
    private mAdItemList;
    setPosition(source: Array<moosnowAdRow>, position?: string, callback?: Function, refresh?: boolean): Array<moosnowAdRow>;
    loadAd(entityName: string | cc.Prefab, callback: Function): void;
    mScrollVec: any[];
    /**
     * 绑定导出数据
     * @param container 列表容器节点，显示/隐藏  的核心节点
     * @param scrollView
     * @param layout cc.Layout
     * @param position 位置信息，将提交到统计后台用于分析
     * @param entityName  需要绑定的预制体
     * @param callback  跳转取消时的回调函数
     */
    initView(container: any, scrollView: any, layout: any, position: string, entityName: string | cc.Prefab, callback?: Function): void;
    pushScroll(scrollView: any, layout: any): void;
    addEvent(): void;
    removeEvent(): void;
    private mChangeLen;
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
    private mPrevShowAd;
    private mBackCall;
    displayChange(data: any, callback?: any): void;
    onBack(): void;
    sideOut(): void;
    sideIn(): void;
    private mEndLogic;
    /**
     * 绑定广告数据-固定显示6个导出
     * @param container 列表容器节点，显示/隐藏  的核心节点
     * @param layout cc.Layout
     * @param position 位置信息，将提交到统计后台用于分析
     * @param entityName 需要绑定的预制体
     * @param callback 跳转取消时的回调函数
     */
    initFiexdView(container: any, layout: any, position: string, entityName: string | cc.Prefab, callback?: Function): void;
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
     * @param entityName  需要绑定的预制体
     * @param callback  跳转取消时的回调函数
     */
    initFloatAd(parentNode: any, prefabs: Array<string>, points: Array<object>, position: string, callback?: Function): void;
    floatAnim(floatNode: any): void;
    private updateFloat;
    private hasAd;
    private mSecond;
    private showExportClose;
    private displayAd;
    onFwUpdate(): void;
}
