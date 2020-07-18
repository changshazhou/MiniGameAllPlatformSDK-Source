import CocosBaseForm from "./CocosBaseForm";
import showTotalOptions from "../../../model/showTotalOptions";
import CheckboxComponent from "../common/CheckboxComponent";
export default class CocosTotalForm extends CocosBaseForm {
    checked: cc.Node;
    unchecked: cc.Node;
    btnContinue: cc.Node;
    coinNum: cc.Node;
    videoText: cc.Node;
    private mCheckedVideo;
    formComponents: CheckboxComponent[];
    get FormData(): showTotalOptions;
    addListener(): void;
    removeListener(): void;
    onReceive(): void;
    mLevelCoinNum: number;
    mLevelShareCoinNum: number;
    onShow(data: any): void;
    willHide(data: any): void;
}
