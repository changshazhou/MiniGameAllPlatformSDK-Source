import BaseForm from "./BaseForm";
export default class TotalForm extends BaseForm {
    checked: cc.Node;
    unchecked: cc.Node;
    btnReceive: cc.Node;
    coinNum: cc.Node;
    mCheckedVideo: boolean;
    initForm(logic: any): void;
    addEvent(): void;
    removeEvent(): void;
    onReceive(): void;
    private openEndForm;
    onShareChange(): void;
    changeUI(): void;
    mLevelCoinNum: number;
    mLevelShareCoinNum: number;
    onShow(data: any): void;
    willHide(): void;
}
