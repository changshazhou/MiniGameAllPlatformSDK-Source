import BaseForm from "../ui/engine/BaseForm";
export default class showFormOptions {
    constructor(name: string, formLogic?: typeof BaseForm, formData?: any);
    name: string;
    formLogic?: typeof BaseForm;
    formData?: any;
    /**
     * 显示的父节点，默认cc.Canvas.instance.node 或 Laya.stage
     */
    parent?: cc.Node;
    callback?: (node: cc.Node) => void;
    remoteLayout: boolean;
    layoutOptions: any;
    /**
     * 仅显示一个Form，如果调用多次showForm ,将无效果
     */
    showOnce: boolean;
}
