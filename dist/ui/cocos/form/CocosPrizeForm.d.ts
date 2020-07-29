import CocosBaseForm from "./CocosBaseForm";
import CheckboxComponent from "../common/CheckboxComponent";
export default class CocosPrizeForm extends CocosBaseForm {
    btnCancel: cc.Node;
    txtCountdown: cc.Node;
    btnVideo: cc.Node;
    btnShare: cc.Node;
    btnReceive: cc.Node;
    private mChecked;
    formComponents: CheckboxComponent[];
    private addListener;
    private removeListener;
    willShow(data: any): void;
    willHide(data: any): void;
    private mTotalSecond;
    private mCurrentSecond;
    private onCountdown;
    private stopCountdown;
    private resumeCountdown;
    private onShare;
    private onVideo;
    private onReceive;
}
