import showShareOptions from "../../../model/showShareOptions";
import CocosBaseForm from "./CocosBaseForm";
export default class CocosShareForm extends CocosBaseForm {
    btnShare: cc.Node;
    btnNext: cc.Node;
    coinNum: cc.Node;
    get FormData(): showShareOptions;
    onShow(data: any): void;
    onHide(data: any): void;
    private addListener;
    private removeListener;
    private onNext;
    private onShareVideo;
    private onVideo;
    private onShare;
}
