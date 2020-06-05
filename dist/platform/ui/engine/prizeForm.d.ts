import BaseForm from "./BaseForm";
export default class PrizeForm extends BaseForm {
    coinNum: cc.Label;
    btnConfirm: cc.Node;
    initForm(logic: any): void;
    willHide(): void;
    willShow(data: any): void;
    closeForm(): void;
}
