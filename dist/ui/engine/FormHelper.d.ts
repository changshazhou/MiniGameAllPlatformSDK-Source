import NodeAttribute from "./NodeAttribute";
export default class FormHelper {
    static getLayout(url: string, callback: (attr: any) => void): void;
    static createChild(parent: any, children: Array<NodeAttribute>): void;
    static createForm(name: string, parent?: cc.Node): void;
}
