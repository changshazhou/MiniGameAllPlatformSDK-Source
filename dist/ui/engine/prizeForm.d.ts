import BaseForm from "./BaseForm";
import showPrizeOptions from "../../model/showPrizeOptions";
export default class PrizeForm extends BaseForm {
    coinNum: cc.Label;
    btnConfirm: cc.Node;
    get FormData(): showPrizeOptions;
    initForm(logic: any): void;
    willHide(): void;
    willShow(data: any): void;
    closeForm(): void;
}
