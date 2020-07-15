import FormFactory from "../engine/FormFactory";
import NodeAttribute from "../engine/NodeAttribute";
import BaseForm from "../engine/BaseForm";
export default class CocosFormFactory extends FormFactory {
    static get instance(): FormFactory;
    _createChild(parent: cc.Node, children: Array<NodeAttribute>): void;
    private _createUINode;
    hideForm(name: string, formNode: any, formData?: any): void;
    showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, remoteLayout?: boolean, layoutOptions?: any): void;
}