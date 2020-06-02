import MistouchForm from "../engine/MistouchForm";
export default class CocosMistouchForm extends MistouchForm {
    clickProgress: cc.ProgressBar;
    btnBanner: cc.Node;
    logo: cc.Node;
    mBeginPos: cc.Vec2;
    mEndPos: cc.Vec2;
    addEvent(): void;
    removeEvent(): void;
    onLogoUp(): void;
    onLogoDown(): void;
    initPos(): void;
}
