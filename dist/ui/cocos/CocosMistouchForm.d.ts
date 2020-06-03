import MistouchForm from "../engine/MistouchForm";
export default class CocosMistouchForm extends MistouchForm {
    clickProgress: any;
    btnBanner: any;
    logo: any;
    mBeginPos: cc.Vec2;
    mEndPos: cc.Vec2;
    addEvent(): void;
    removeEvent(): void;
    onLogoUp(): void;
    onLogoDown(): void;
    initPos(): void;
}
