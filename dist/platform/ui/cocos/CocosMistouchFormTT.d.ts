import MistouchFormTT from "../engine/MistouchFormTT";
export default class CocosMistouchFormTT extends MistouchFormTT {
    clickProgress: cc.ProgressBar;
    btnReceive: cc.Node;
    btnConfirm: cc.Node;
    checked: cc.Sprite;
    unchecked: cc.Sprite;
    step1: cc.Node;
    step2: cc.Node;
    logo: cc.Node;
    playBoxAnim(animName: any): void;
    addEvent(): void;
    removeEvent(): void;
}
