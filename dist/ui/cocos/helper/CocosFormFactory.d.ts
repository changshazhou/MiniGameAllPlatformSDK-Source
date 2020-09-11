import FormFactory from "../../engine/FormFactory";
import NodeAttribute from "../../attribute/NodeAttribute";
import showFormOptions from "../../../model/showFormOptions";
export default class CocosFormFactory extends FormFactory {
    _createChild(parent: cc.Node, children: Array<NodeAttribute>): void;
    private createNode;
    private _createUINode;
    hideFormByLogic(logic: any, formData?: any): void;
    private logicShow;
    private logicHide;
    hideForm(name: string, formNode: any, formData?: any): void;
    showForm(options: showFormOptions): void;
    createNodeByTemplate(name: string, tempLogic?: any, tempData?: any, parent?: cc.Node, remoteLayout?: boolean, layoutOptions?: any): void;
    hideNodeByTemplate(name: string, formNode: any, formData?: any): void;
    getTemplate(tempName: string, callback?: Function): void;
}
