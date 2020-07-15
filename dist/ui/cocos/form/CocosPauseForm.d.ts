import CocosBaseForm from "./CocosBaseForm";
export default class CocosPauseForm extends CocosBaseForm {
    btnContinue: cc.Node;
    btnHome: cc.Node;
    btnReplay: cc.Node;
    isMask: boolean;
    private addListener;
    private removeListener;
    willShow(data: any): void;
    willHide(data: any): void;
    onShow(): void;
    onContinue(): void;
    onToHome(): void;
    onReplay(): void;
}
