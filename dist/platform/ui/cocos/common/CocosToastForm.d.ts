import CocosUIForm from "./CocosUIForm";
export default class CocosToastForm extends CocosUIForm {
    msgText: cc.Node;
    constructor();
    start(): void;
    show(msg: string): void;
    hide(): void;
}
