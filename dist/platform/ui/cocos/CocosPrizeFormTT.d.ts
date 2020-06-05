import PrizeFormTT from "../engine/PrizeFormTT";
export default class CocosPrizeFormTT extends PrizeFormTT {
    coinNum: cc.Label;
    btnConfirm: cc.Node;
    initForm(logic: any): void;
    willHide(): void;
}
