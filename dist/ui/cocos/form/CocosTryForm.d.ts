import CocosBaseForm from "./CocosBaseForm";
import showTryOptions from "../../../model/showTryOptions";
export default class CocosTryForm extends CocosBaseForm {
    logo: cc.Node;
    btnVideo: cc.Node;
    btnNext: cc.Node;
    get FormData(): showTryOptions;
    addListener(): void;
    removeListener(): void;
    onShow(data: any): void;
    onHide(): void;
    private onVideoTry;
    private onNext;
}
