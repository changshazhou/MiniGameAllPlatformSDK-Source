import BaseForm from "./BaseForm";
import showShareOptions from "../../model/showShareOptions";
export default class ShareFormTT extends BaseForm {
    btnShare: cc.Node;
    btnBack: cc.Node;
    txtCoinNum: cc.Label;
    isMask: boolean;
    get FormData(): showShareOptions;
    initForm(logic: any): void;
    addListener(): void;
    removeListener(): void;
    onBack(): void;
    mLevelShareCoinNum: number;
    onShow(): void;
    private mShareing;
    onShareVideo(): void;
    private onVideo;
    private onShare;
}
