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
    playHandAnim(): void;
    mistouchAppBox(): boolean;
    subProgress(): void;
    initPos(): void;
    onHideBanner(): void;
    showButton(isShow: any): void;
    showHand(isShow: any): void;
    onBannerClick(): void;
}
