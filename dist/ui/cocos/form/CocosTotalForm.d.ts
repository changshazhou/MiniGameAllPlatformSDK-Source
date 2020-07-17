import CocosBaseForm from "./CocosBaseForm";
import showTotalOptions from "../../../model/showTotalOptions";
export default class CocosTotalForm extends CocosBaseForm {
    checked: cc.Node;
    unchecked: cc.Node;
    btnReceive: cc.Node;
    levelCoin: cc.Label;
    mCheckedVideo: boolean;
    get FormData(): showTotalOptions;
    addListener(): void;
    removeListener(): void;
    onReceive(): void;
    onContinue(): void;
    changeUI(): void;
    mLevelCoinNum: number;
    mLevelShareCoinNum: number;
    onShow(data: any): void;
    willHide(): void;
}
