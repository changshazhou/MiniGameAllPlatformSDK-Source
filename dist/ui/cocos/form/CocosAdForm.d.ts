import CocosBaseForm from "./CocosBaseForm";
export default class CocosAdForm extends CocosBaseForm {
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
    btnBack: any;
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
    private mShowAd;
    private mPrevShowAd;
    private mPrevBackCall;
    private mBackCall;
    addListener(): void;
    removeListener(): void;
    onBack(): void;
    private mFloatIndex;
    private mFloatRefresh;
    private mFloatCache;
    private mAdData;
    private loadAd;
    onRandomNavigate(): void;
    onNavigate(): void;
    floatAnim(floatNode: any): void;
    sideOut(): void;
    sideIn(): void;
    pushScroll(scrollView: any, layout: any): void;
    showClose(visible: any): void;
    mSecond: number;
    showExportClose(): void;
    private mMoveSpeed;
    onFwUpdate(): void;
}
