import FormFactory, { FormQuene } from "../../engine/FormFactory"
import CocosNodeHelper from "./CocosNodeHelper";
import NodeAttribute from "../../engine/NodeAttribute";
import BaseForm from "../../engine/BaseForm";
import TextAttribute from "../../engine/TextAttribute";
import LayoutAttribute from "../../engine/LayoutAttribute";




export default class CocosFormFactory extends FormFactory {

    public static get instance() {
        if (!this.mInstance)
            this.mInstance = new CocosFormFactory()
        return this.mInstance;
    }




    public _createChild(parent: cc.Node, children: Array<NodeAttribute>) {
        for (let i = 0; i < children.length; i++) {
            let jsonCfg = children[i];
            let node = null;
            let nodeCfg: NodeAttribute = null
            if (jsonCfg.type == 'text') {
                nodeCfg = TextAttribute.parse(jsonCfg);
                node = CocosNodeHelper.createText(parent, nodeCfg as TextAttribute);
            }
            else if (jsonCfg.type == 'layout') {
                nodeCfg = LayoutAttribute.parse(jsonCfg);
                node = CocosNodeHelper.createLayout(parent, nodeCfg as LayoutAttribute);
            }
            else {
                nodeCfg = TextAttribute.parse(jsonCfg);
                node = CocosNodeHelper.createImage(parent, nodeCfg);
            }
            if (nodeCfg.child && nodeCfg.child.length > 0) {
                this._createChild(node, nodeCfg.child);
            }
        }
    }

    private _createUINode(formCfg: NodeAttribute, formLogic: typeof BaseForm, formData?: any, parent?: any) {
        if (!parent)
            parent = CocosNodeHelper.canvasNode
        let formNode = CocosNodeHelper.createImage(parent, formCfg);
        if (formCfg.isMask)
            CocosNodeHelper.createMask(formNode, formCfg.maskUrl);

        this._createChild(formNode, formCfg.child);

        let logic = new formLogic();
        logic.initForm(formNode);
        logic.willShow(formData);
        formNode.active = true;
        logic.onShow(formNode);

        FormFactory.addForm2Quene(formCfg.name, formNode, logic)
    }

    public hideFormByLogic(logic: BaseForm, formData?: any) {
        FormFactory.removeFormByLogic(logic, (formKV) => {
            if (formKV instanceof Array) {
                formKV.forEach(item => {
                    item.formLogic.willHide(formData);
                    item.formNode.active = false;
                    item.formLogic.onHide(formData);
                })
            }
            else {
                formKV.formLogic.willHide(formData);
                formKV.formNode.active = false;
                formKV.formLogic.onHide(formData);
            }
        })
    }


    public hideForm(name: string, formNode: any, formData?: any) {
        if (formNode) {
            FormFactory.removeFormFromQuene(name, formNode, (formKV) => {
                formKV.formLogic.willHide(formData);
                formKV.formNode.active = false;
                formKV.formLogic.onHide(formData);
            })
        }
        else
            FormFactory.removeAllFormFromQuene(name, (formKV) => {
                formKV.formLogic.willHide(formData);
                formKV.formNode.active = false;
                formKV.formLogic.onHide(formData);
            })
    }


    public showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, remoteLayout: boolean = true, layoutOptions: any = null) {
        if (!parent)
            parent = CocosNodeHelper.canvasNode;

        let formKV = FormFactory.getFormFromCached(name);
        if (formKV) {
            parent.addChild(formKV.formNode);
            formKV.formLogic.willShow(formData);
            formKV.formNode.active = true;
            formKV.formLogic.onShow(formData);
            FormFactory.addForm2Quene(name, formKV)
        }
        else {
            let url = 'https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/Game/demo/layout.json'
            if (remoteLayout) {
                this.getLayout(url, (res) => {
                    if (res[name]) {
                        let formCfg = NodeAttribute.parse(res[name]);
                        formCfg.name = name;
                        this._createUINode(formCfg, formLogic, formData, parent);
                        console.log('_createUINode ', Date.now())
                    }
                })
            }
            else {
                this._createUINode(layoutOptions, formLogic, formData);
            }
        }
    }



    public createNodeByTemplate(name: string, tempLogic?: any, tempData?: any, parent?: cc.Node, remoteLayout: boolean = true, layoutOptions: any = null) {
        if (!parent)
            parent = CocosNodeHelper.canvasNode;

        let formKV = FormFactory.getFormFromCached(name);
        if (formKV) {
            parent.addChild(formKV.formNode);
            formKV.formLogic.willShow(tempData);
            formKV.formNode.active = true;
            formKV.formLogic.onShow(tempData);
            FormFactory.addForm2Quene(name, formKV)
        }
        else {
            let url = 'https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/Game/demo/templates.json'
            if (remoteLayout) {
                this.getTemplates(url, (res) => {
                    let tempCfg = res[name]
                    if (tempCfg) {
                        let formCfg = NodeAttribute.parse(tempCfg);
                        formCfg.name = name;
                        this._createUINode(formCfg, tempLogic, tempData, parent);
                        console.log('_createUINode ', Date.now())
                    }
                })
            }
            else {
                this._createUINode(layoutOptions, tempLogic, tempData);
            }
        }
    }

    public hideNodeByTemplate(name: string, formNode: any, formData?: any) {
        if (formNode) {
            FormFactory.removeFormFromQuene(name, formNode, (formKV) => {
                formKV.formLogic.willHide(formData);
                formKV.formNode.active = false;
                formKV.formLogic.onHide(formData);
            })
        }
        else
            FormFactory.removeAllFormFromQuene(name, (formKV) => {
                formKV.formLogic.willHide(formData);
                formKV.formNode.active = false;
                formKV.formLogic.onHide(formData);
            })
    }
}