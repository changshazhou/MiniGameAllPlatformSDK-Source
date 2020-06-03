import MistouchForm from "./MistouchForm";
export default class MistouchFormTT extends MistouchForm {
    clickProgress: cc.ProgressBar;
    btnReceive: cc.Node;
    btnConfirm: cc.Node;
    checked: cc.Sprite;
    unchecked: cc.Sprite;
    step1: cc.Node;
    step2: cc.Node;
    logo: cc.Node;
    mMaxNum: number;
    mCurrentNum: number;
    mOpenVideo: boolean;
    willShow(data: any): void;
    willHide(): void;
    subProgress(): void;
    addEvent(): void;
    removeEvent(): void;
    openBox(): void;
    private checkboxChange;
    private showCheckbox;
    private playBoxAnim;
    onLogoUp(): void;
    onBannerClick(): void;
    resetProgress(): void;
    update(): void;
}
