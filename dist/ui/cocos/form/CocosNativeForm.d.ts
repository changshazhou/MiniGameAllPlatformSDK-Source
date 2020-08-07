import CocosBaseForm from "./CocosBaseForm";
import showNativeOptions from "../../../model/showNativeOptions";
export default class CocosNativeForm extends CocosBaseForm {
    baseBox: cc.Node;
    logo: cc.Node;
    btnTopClose: cc.Node;
    btnClose: cc.Node;
    btnOpen: cc.Node;
    txtMemo: cc.Node;
    get FormData(): showNativeOptions;
    onShow(data: any): void;
    willHide(data: any): void;
    private addListener;
    private remoteListener;
    private onCloseAd;
    private onOpenAd;
}
