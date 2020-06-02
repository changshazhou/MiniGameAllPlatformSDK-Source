import BaseForm from "../engine/BaseForm";
export default class MistouchForm extends BaseForm {
    clickProgress: any;
    btnBanner: any;
    logo: any;
    mBeginPos: any;
    mEndPos: any;
    private mMaxNum;
    private mCurrentNum;
    private mNavigateIndex;
    private mBannerShow;
    private mShowTime;
    private mBannerClickType;
    private LogicData;
    initPos(): void;
    willShow(data: any): void;
    willHide(): void;
    private subProgress;
    addEvent(): void;
    removeEvent(): void;
    private bannerClickCallback;
    onLogoUp(): void;
    onLogoDown(): void;
    onBannerClick(): void;
    /**
     * 点击完成回调
     */
    onCompleted(): void;
    private resetProgress;
    private onHideBanner;
    update(): void;
}
