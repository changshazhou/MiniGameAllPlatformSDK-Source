import CocosBaseForm from "./CocosBaseForm";
import showPauseOptions from "../../../model/showPauseOptions";
export default class CocosPauseForm extends CocosBaseForm {
    btnContinue: cc.Node;
    btnHome: cc.Node;
    btnReplay: cc.Node;
    isMask: boolean;
    get FormData(): showPauseOptions;
    private addListener;
    private removeListener;
    willShow(data: any): void;
    willHide(data: any): void;
    onShow(data: any): void;
    onContinue(): void;
    onToHome(): void;
    onReplay(): void;
}
