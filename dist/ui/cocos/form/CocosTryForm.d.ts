import CocosBaseForm from "./CocosBaseForm";
import showTryOptions from "../../../model/showTryOptions";
import CheckboxComponent from "../common/CheckboxComponent";
export default class CocosTryForm extends CocosBaseForm {
    logo: cc.Node;
    btnVideo: cc.Node;
    btnNext: cc.Node;
    formComponents: (typeof CheckboxComponent)[];
    get FormData(): showTryOptions;
    addListener(): void;
    removeListener(): void;
    onShow(data: any): void;
    onHide(data: any): void;
    private onVideoTry;
    private onNext;
}
