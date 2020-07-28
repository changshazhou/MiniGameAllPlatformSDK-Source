import PrizeForm from "../engine/PrizeForm";
export default class CocosPrizeForm extends PrizeForm {
    coinNum: cc.Label;
    btnConfirm: cc.Node;
    initForm(logic: any): void;
    willHide(): void;
}
