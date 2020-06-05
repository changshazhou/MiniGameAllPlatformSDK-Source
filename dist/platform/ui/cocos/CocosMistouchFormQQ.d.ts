import MistouchFormQQ from "../engine/MistouchFormQQ";
export default class CocosMistouchFormQQ extends MistouchFormQQ {
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
    onLogoUp(): void;
    onLogoDown(): void;
    addEvent(): void;
    removeEvent(): void;
    playHandAnim(): void;
    showButton(isShow: any): void;
    showHand(isShow: any): void;
}
