import CocosBaseForm from "./CocosBaseForm";
import showTotalOptions from "../../../model/showTotalOptions";
export default class CocosTotalForm extends CocosBaseForm {
    checked: cc.Node;
    unchecked: cc.Node;
    btnContinue: cc.Node;
    coinNum: cc.Node;
    videoText: cc.Node;
    mCheckedVideo: boolean;
    get FormData(): showTotalOptions;
    addListener(): void;
    removeListener(): void;
    onReceive(): void;
    checkChange(mistouch?: boolean): void;
    mLevelCoinNum: number;
    mLevelShareCoinNum: number;
    private mCanNum;
    private mCheckBoxMistouch;
    private mClickNum;
    private mVideoNum;
    onShow(data: any): void;
    willHide(): void;
}
