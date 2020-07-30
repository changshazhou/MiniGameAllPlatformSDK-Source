import FormFactory from "../../engine/FormFactory";
import NodeAttribute from "../../attribute/NodeAttribute";
import BaseForm from "../../engine/BaseForm";
export default class CocosFormFactory extends FormFactory {
    static get instance(): FormFactory;
    _createChild(parent: cc.Node, children: Array<NodeAttribute>): void;
    private createNode;
    private _createUINode;
    hideFormByLogic(logic: BaseForm, formData?: any): void;
    hideForm(name: string, formNode: any, formData?: any): void;
    showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, callback?: () => void, remoteLayout?: boolean, layoutOptions?: any): void;
    createNodeByTemplate(name: string, tempLogic?: any, tempData?: any, parent?: cc.Node, remoteLayout?: boolean, layoutOptions?: any): void;
    hideNodeByTemplate(name: string, formNode: any, formData?: any): void;
    getTemplate(tempName: string, callback?: Function): void;
}
