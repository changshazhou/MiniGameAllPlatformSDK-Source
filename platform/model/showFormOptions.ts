import BaseForm from "../ui/engine/BaseForm";
import NodeHelper from "../ui/engine/NodeHelper";

export default class showFormOptions {

    constructor(name: string, formLogic?: typeof BaseForm, formData?: any) {
        this.name = name;
        this.formLogic = formLogic;
        this.formData = formData;
    }

    public name: string = "";
    public formLogic?: typeof BaseForm;
    public formData?: any = null;
    /**
     * 显示的父节点，默认cc.Canvas.instance.node 或 Laya.stage
     */
    public parent?: cc.Node = null;
    public callback?: (node: cc.Node) => void;
    public remoteLayout: boolean = true;
    public layoutOptions: any = null;
    /**
     * 仅显示一个Form，如果调用多次showForm ,将无效果
     */
    public showOnce: boolean = true;
}