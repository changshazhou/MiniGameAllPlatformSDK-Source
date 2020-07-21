import CocosBaseForm from "./CocosBaseForm";
export default class CocosToastForm extends CocosBaseForm {
    msgText: cc.Node;
    private onMaskMouseDown;
    willShow(msg: string): void;
    willHide(data: any): void;
    hide(): void;
}
