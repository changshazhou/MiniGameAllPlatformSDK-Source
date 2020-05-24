import CocosUIForm from "./common/CocosUIForm";
export default class prizeForm extends CocosUIForm {
    coinNum: cc.Label;
    btnConfirm: cc.Node;
    formName: string;
    isMask: boolean;
    start(): void;
    willShow(data: any): void;
    closeForm(): void;
}
