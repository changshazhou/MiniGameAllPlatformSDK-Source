import CocosBaseForm from "./CocosBaseForm";
import showBoxOptions from "../../../model/showBoxOptions";
import CheckboxComponent from "../common/CheckboxComponent";
export default class CocosBoxForm extends CocosBaseForm {
    boxLayout: cc.Node;
    btnReceive: cc.Node;
    btnNext: cc.Node;
    keyNum: cc.Node;
    get FormData(): showBoxOptions;
    private mTryFromVideo;
    formComponents: CheckboxComponent[];
    onShow(data: any): void;
    onHide(data: any): void;
    private addListener;
    private removeListener;
    private onPrizeBoxUnLock;
    private _Receiveing;
    private onReceive;
    private nextForm;
    private updateKeyNum;
}
