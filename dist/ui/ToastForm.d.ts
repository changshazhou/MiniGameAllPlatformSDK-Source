import UIForm from "../../framework/ui/UIForm";
export default class ToastForm extends UIForm {
    msgText: cc.Node;
    constructor();
    start(): void;
    show(msg: string): void;
    hide(): void;
}
