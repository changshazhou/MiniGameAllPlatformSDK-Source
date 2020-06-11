import BaseForm from "./BaseForm";
export default class totalFormTT extends BaseForm {
    checked: cc.Sprite;
    unchecked: cc.Sprite;
    btnVideo: cc.Node;
    btnReceive: cc.Node;
    levelCoin: cc.Label;
    txtMemo: cc.Label;
    isMask: boolean;
    private mIsChecked;
    private mOpenVideo;
    addEvent(): void;
    removeEvent(): void;
    private onHome;
    private onShareChange;
    private changeUI;
    mLevelCoinNum: number;
    mLevelShareCoinNum: number;
    onShow(data: any): void;
    private showCheckedVideo;
    private showUnCheckedVideo;
    willHide(): void;
    onVideo(): void;
    private mIsReceive;
    onReceive(): void;
    onHide(): void;
}
