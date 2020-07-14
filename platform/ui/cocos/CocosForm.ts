import Form, { FormQuene } from "../engine/Form"
import CocosNodeHelper from "./CocosNodeHelper";
import NodeAttribute from "../engine/NodeAttribute";
import BaseForm from "../engine/BaseForm";




export default class CocosForm extends Form {

    public static get instance() {
        if (!this.mInstance)
            this.mInstance = new CocosForm()
        return this.mInstance;
    }




    public _createChild(parent: cc.Node, children: Array<NodeAttribute>) {
        for (let i = 0; i < children.length; i++) {
            let nodeCfg = children[i] as NodeAttribute;
            let node = CocosNodeHelper.createImage(parent, nodeCfg.url, nodeCfg.x, nodeCfg.y, nodeCfg.width, nodeCfg.height);
        }
    }

    private _createUINode(formCfg: NodeAttribute, formLogic: typeof BaseForm, formData?: any) {
        let formNode = CocosNodeHelper.createImage(CocosNodeHelper.canvasNode, formCfg.url, formCfg.x, formCfg.y, formCfg.width, formCfg.height, name);
        if (formCfg.isMask)
            CocosNodeHelper.createMask(formNode);
        this._createChild(formNode, formCfg.child);

        let logic = new formLogic();
        logic.initForm(formNode);
        logic.willShow(formData);
        formNode.active = true;
        logic.onShow(formNode);

        Form.addForm2Quene(name, formNode, logic)
    }

    public hideForm(name: string, formNode: any, formData?: any) {
        if (formNode) {
            Form.removeFormFromQuene(name, formNode, (formKV) => {
                formKV.formLogic.willHide(formData);
                formKV.formNode.active = false;
                formKV.formLogic.onHide(formData);
            })
        }
        else
            Form.removeAllFormFromQuene(name, (formKV) => {
                formKV.formLogic.willHide(formData);
                formKV.formNode.active = false;
                formKV.formLogic.onHide(formData);
            })
    }


    public showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, remoteLayout: boolean = true, layoutOptions: any = null) {
        if (!parent)
            parent = CocosNodeHelper.canvasNode;

        let formKV = Form.getFormFromCached(name);
        if (formKV) {
            parent.addChild(formKV.formNode);
            formKV.formLogic.willShow(formData);
            formKV.formNode.active = true;
            formKV.formLogic.onShow(formData);
            Form.addForm2Quene(name, formKV)
        }
        else {
            let url = 'https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/Game/demo/layout.json'
            if (remoteLayout) {
                this.getLayout(url, (res) => {
                    if (res[name]) {
                        let formCfg = res[name] as NodeAttribute;
                        this._createUINode(formCfg, formLogic, formData);
                    }
                })
            }
            else {
                this._createUINode(layoutOptions, formLogic, formData);
            }
        }

    }
}