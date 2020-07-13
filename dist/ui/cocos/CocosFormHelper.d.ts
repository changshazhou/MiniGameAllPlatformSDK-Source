import FormHelper from "../engine/FormHelper";
import NodeAttribute from "../engine/NodeAttribute";
export default class CocosFormHelper extends FormHelper {
    static createChild(parent: cc.Node, children: Array<NodeAttribute>): void;
    static createForm(name: string, parent?: cc.Node): void;
}
