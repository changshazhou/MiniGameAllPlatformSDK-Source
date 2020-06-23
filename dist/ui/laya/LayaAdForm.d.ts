import AdForm from "../engine/AdForm";
export default class CocosAdForm extends AdForm {
    addEvent(): void;
    removeEvent(): void;
    floatAnim(floatNode: Laya.Node): void;
    sideOut(): void;
    sideIn(): void;
    pushScroll(scrollView: any, layout: any): void;
    private mMoveSpeed;
    onFwUpdate(): void;
}
