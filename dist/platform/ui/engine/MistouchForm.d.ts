import BaseForm from "../engine/BaseForm";
import { MISTOUCH_BANNER_TYPE } from "../../enum/MISTOUCH_BANNER_TYPE";
export default class MistouchForm extends BaseForm {
    clickProgress: any;
    btnBanner: any;
    logo: any;
    mBeginPos: any;
    mEndPos: any;
    mMaxNum: number;
    mCurrentNum: number;
    mNavigateIndex: number;
    mBannerShow: boolean;
    mShowTime: number;
    mBannerClickType: MISTOUCH_BANNER_TYPE;
    initPos(): void;
    willShow(data: any): void;
    willHide(): void;
    subProgress(): void;
    addEvent(): void;
    removeEvent(): void;
    bannerClickCallback(isOpend: any): void;
    onLogoUp(): void;
    onLogoDown(): void;
    onBannerClick(): void;
    resetProgress(): void;
    onHideBanner(): void;
    update(): void;
}
