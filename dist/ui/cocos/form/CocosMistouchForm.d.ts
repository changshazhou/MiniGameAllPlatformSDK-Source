import CocosBaseForm from "./CocosBaseForm";
import showMistouchOptions from "../../../model/showMistouchOptions";
export default class CocosMistouchForm extends CocosBaseForm {
    clickProgress: cc.Node;
    btnReceive: any;
    logo: any;
    mBeginPos: cc.Vec2;
    mEndPos: cc.Vec2;
    mMaxNum: number;
    mCurrentNum: number;
    mNavigateIndex: number;
    mBannerShow: boolean;
    mShowTime: number;
    addEvent(): void;
    removeEvent(): void;
    onLogoUp(): void;
    onLogoDown(): void;
    initPos(): void;
    mBannerClickType: number;
    get FormData(): showMistouchOptions;
    willShow(data: any): void;
    willHide(): void;
    subProgress(): void;
    bannerClickCallback(isOpend: any): void;
    onBannerClick(): void;
    resetProgress(): void;
    onHideBanner(): void;
    onFwUpdate(): void;
}
