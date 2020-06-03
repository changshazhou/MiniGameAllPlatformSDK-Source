import MistouchForm from "./MistouchForm";
export default class MistouchFormQQ extends MistouchForm {
    clickProgress: any;
    btnBanner: any;
    logo: any;
    hand: any;
    pinch1: any;
    pinch2: any;
    pinch3: any;
    pinch4: any;
    pinch5: any;
    pinch6: any;
    mBeginPos: any;
    mEndPos: any;
    willShow(data: any): void;
    mistouchAppBox(): boolean;
    subProgress(): void;
    addEvent(): void;
    removeEvent(): void;
    onLogoUp(): void;
    onLogoDown(): void;
    initPos(): void;
    onHideBanner(): void;
    onBannerClick(): void;
}
