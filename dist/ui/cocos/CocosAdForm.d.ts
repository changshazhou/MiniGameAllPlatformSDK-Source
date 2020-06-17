import AdForm from "../engine/AdForm";
export default class CocosAdForm extends AdForm {
    addEvent(): void;
    removeEvent(): void;
    floatAnim(floatNode: any): void;
    pushScroll(scrollView: any, layout: any): void;
    private mMoveSpeed;
    onFwUpdate(): void;
}
