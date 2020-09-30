import CocosBaseForm from "./CocosBaseForm";
import moosnowAdRow from "../../../model/moosnowAdRow";
import showAdOptions from "../../../model/loadAdOptions";
export default class CocosAdForm extends CocosBaseForm {
    endContainer: cc.Node;
    endContainer_layout: cc.Node;
    exportContainer: cc.Node;
    exportContainer_scroll: cc.Node;
    exportContainer_layout: cc.Node;
    exportClose: cc.Node;
    formMask: cc.Node;
    exportCloseTxt: cc.Node;
    btnBack: cc.Node;
    floatContainer: cc.Node;
    floatFull: any;
    bannerContainer: cc.Node;
    bannerContainer_scroll: cc.Node;
    bannerContainer_layout: cc.Node;
    topContainer: cc.Node;
    topContainer_scroll: cc.Node;
    topContainer_layout: cc.Node;
    leftContainer: cc.Node;
    leftContainer_scroll: cc.Node;
    leftContainer_layout: cc.Node;
    rightContainer: cc.Node;
    rightContainer_scroll: cc.Node;
    rightContainer_layout: cc.Node;
    rotateContainer: cc.Node;
    rotateContainer_layout: cc.Node;
    sideContainer: any;
    sideView: any;
    sideLayout: any;
    btnSideShow: any;
    btnSideHide: any;
    private mShowAd;
    private mPrevShowAd;
    private mPrevBackCall;
    private mBackCall;
    private mScrollVec;
    private mEndLogic;
    private mMoveSpeed;
    private addListener;
    private removeListener;
    private mTempPoints;
    private mTempTempletes;
    private onAdChange;
    onBack(): void;
    get FormData(): showAdOptions;
    private mFloatIndex;
    private mFloatRefresh;
    private mFloatCache;
    private mAdData;
    private loadAd;
    private onAdCancel;
    private loadNum;
    private loadManNum;
    private checkLoad;
    onRandomNavigate(): void;
    onNavigate(): void;
    sideOut(): void;
    sideIn(): void;
    pushScroll(scrollView: cc.ScrollView, layout: cc.Layout): void;
    private addAd;
    private removeAd;
    private hasAd;
    showClose(visible: any): void;
    mSecond: number;
    onWaitShow(): void;
    private mAdItemList;
    setPosition(source: Array<moosnowAdRow>, position?: string, callback?: Function, refresh?: boolean): Array<moosnowAdRow>;
    /**
     *
     * @param parentNode 父节点
     * @param prefabs 匹配的预制体
     * @param points 需要显示的坐标点
     * @param entityName  需要绑定的预制体
     * @param callback  跳转取消时的回调函数
     */
    initFloatAd(callback?: Function): void;
    private removeFloatAd;
    private floatRuning;
    private floatAnim;
    private updateFloat;
    /**
       * 绑定广告数据-固定显示6个导出
       * @param container 列表容器节点，显示/隐藏  的核心节点
       * @param layout cc.Layout
       * @param position 位置信息，将提交到统计后台用于分析
       * @param entityName 需要绑定的预制体
       * @param callback 跳转取消时的回调函数
       */
    initFiexdView(layout: cc.Node, position: string, templateName: string, callback?: Function): void;
    /**
     * 绑定导出数据
     * @param container 列表容器节点，显示/隐藏  的核心节点
     * @param scrollView
     * @param layout cc.Layout
     * @param position 位置信息，将提交到统计后台用于分析
     * @param entityName  需要绑定的预制体
     * @param callback  跳转取消时的回调函数
     */
    initView(scrollView: cc.ScrollView, layout: cc.Node, position: string, templateName: string, callback?: Function, source?: Array<moosnowAdRow>): void;
    hideAllAdNode(templateName: string, node: cc.Node): void;
    onFwUpdate(): void;
    private scrollMove;
    /**
     *
     * @param data
     */
    willShow(data: any): void;
    willHide(): void;
    displayChange(data: any, callback?: any): void;
    private displayAd;
    onShow(data: any): void;
    private initBanner;
    private initTop;
    private initLeftRight;
    private initEnd;
    private initExport;
    private disableRotate;
    private initRotate;
    disableAd(): void;
}
