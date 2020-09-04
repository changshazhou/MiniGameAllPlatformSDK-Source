import FormFactory from "../../engine/FormFactory";
import NodeAttribute from "../../attribute/NodeAttribute";
import BaseForm from "../../engine/BaseForm";
export default class CocosFormFactory extends FormFactory {
    _createChild(parent: cc.Node, children: Array<NodeAttribute>): void;
    private createNode;
    private _createUINode;
    hideFormByLogic(logic: any, formData?: any): void;
    hideForm(name: string, formNode: any, formData?: any): void;
    private logicShow;
    private logicHide;
    showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, callback?: (node: cc.Node) => void, remoteLayout?: boolean, layoutOptions?: any): void;
    createNodeByTemplate(name: string, tempLogic?: any, tempData?: any, parent?: cc.Node, remoteLayout?: boolean, layoutOptions?: any): void;
    hideNodeByTemplate(name: string, formNode: any, formData?: any): void;
    getTemplate(tempName: string, callback?: Function): void;
}
