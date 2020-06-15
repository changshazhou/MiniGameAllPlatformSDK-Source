import PrizeFormTT from "../engine/PrizeFormTT";
export default class CocosPrizeFormTT extends PrizeFormTT {
    coinNum: cc.Label;
    btnConfirm: cc.Node;
    onChecked(): void;
    initForm(logic: any): void;
    willHide(): void;
    addListener(): void;
    removeListener(): void;
}
