import AdForm from "../engine/AdForm";
export default class CocosAdForm extends AdForm {
    addEvent(): void;
    removeEvent(): void;
    floatAnim(floatNode: any): void;
    sideOut(): void;
    sideIn(): void;
    pushScroll(scrollView: any, layout: any): void;
    showClose(visible: any): void;
    mSecond: number;
    showExportClose(): void;
    private mMoveSpeed;
    onFwUpdate(): void;
}
