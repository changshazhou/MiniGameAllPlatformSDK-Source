import FormFactory, { FormQuene, FormKeyValue } from "../../engine/FormFactory"
import CocosNodeHelper from "./CocosNodeHelper";
import NodeAttribute from "../../attribute/NodeAttribute";
import BaseForm from "../../engine/BaseForm";
import TextAttribute from "../../attribute/TextAttribute";
import LayoutAttribute from "../../attribute/LayoutAttribute";
import ProgressBarAttribute from "../../attribute/ProgressBarAttribute";
import ViewAttribute from "../../attribute/ViewAttribute";
import LayoutType from "../../../enum/LayoutType";
import WidgetAttribute from "../../attribute/WidgetAttribute";




export default class CocosFormFactory extends FormFactory {

    public static get instance() {
        if (!this.mInstance)
            this.mInstance = new CocosFormFactory()
        return this.mInstance;
    }

    public _createChild(parent: cc.Node, children: Array<NodeAttribute>) {
        for (let i = 0; i < children.length; i++) {
            let jsonCfg = children[i];
            let node = this.createNode(parent, jsonCfg);
        }
    }

    private createNode(parent: cc.Node, jsonCfg: NodeAttribute) {
        let node = null;
        let nodeCfg: NodeAttribute = null;
        if (jsonCfg.type == LayoutType.progressBar) {
            nodeCfg = ProgressBarAttribute.parse(jsonCfg);
            node = CocosNodeHelper.createProgressBar(parent, nodeCfg as ProgressBarAttribute);
            if (nodeCfg.child && nodeCfg.child.length > 1) {
                nodeCfg.child.splice(0, 1)
                this._createChild(node, nodeCfg.child);
            }
        }

        else if (jsonCfg.type == LayoutType.view) {
            nodeCfg = ViewAttribute.parse(jsonCfg);
            node = CocosNodeHelper.createView(parent, nodeCfg as ViewAttribute);
        }
        else {
            if (jsonCfg.type == LayoutType.text) {
                nodeCfg = TextAttribute.parse(jsonCfg);
                node = CocosNodeHelper.createText(parent, nodeCfg as TextAttribute);
            }
            else if (jsonCfg.type == LayoutType.layout) {
                nodeCfg = LayoutAttribute.parse(jsonCfg);
                node = CocosNodeHelper.createLayout(parent, nodeCfg as LayoutAttribute);
            }
            else if (jsonCfg.type == LayoutType.widget) {
                nodeCfg = WidgetAttribute.parse(jsonCfg);
                node = CocosNodeHelper.createWidget(parent, nodeCfg as WidgetAttribute);
            }
            else {
                nodeCfg = NodeAttribute.parse(jsonCfg);
                node = CocosNodeHelper.createImage(parent, nodeCfg);
            }
            if (jsonCfg.widget) {
                CocosNodeHelper.createWidget(node, WidgetAttribute.parse(jsonCfg.widget));
            }
            if (nodeCfg.child && nodeCfg.child.length > 0) {
                this._createChild(node, nodeCfg.child);
            }
        }
        return node;
    }

    private _createUINode(formCfg: NodeAttribute, formLogic: typeof BaseForm, formData?: any, parent?: any): cc.Node {
        if (!parent)
            parent = CocosNodeHelper.canvasNode
        let formNode = this.createNode(parent, formCfg);

        // if (formCfg.isMask)
        //     CocosNodeHelper.createMask(formNode, formCfg.maskUrl);

        // this._createChild(formNode, formCfg.child);

        let logic = new formLogic();
        logic.initForm(formNode);
        logic.willShow(formData);
        formNode.active = true;
        logic.onShow(formNode);

        FormFactory.addForm2Quene(formCfg.name, formNode, logic);
        return formNode;
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


    public showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, callback?: () => void, remoteLayout: boolean = true, layoutOptions: any = null) {
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
                        let formCfg = res[name];//NodeAttribute.parse(res[name]);
                        formCfg.name = name;
                        this._createUINode(formCfg, formLogic, formData, parent);
                        console.log('_createUINode ', Date.now())
                        if (callback)
                            callback()
                    }
                })
            }
            else {
                this._createUINode(layoutOptions, formLogic, formData);
                if (callback)
                    callback()
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
            FormFactory.addForm2Quene(name, formKV);
        }
        else {
            let url = 'https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/Game/demo/templates.json'
            if (remoteLayout) {
                this.getTemplates(url, (res) => {
                    let tempCfg = res[name]
                    if (tempCfg) {
                        let formCfg = NodeAttribute.parse(tempCfg);
                        formCfg.name = name;
                        let node = this._createUINode(formCfg, tempLogic, tempData, parent);
                        // console.log('_createUINode ', Date.now())
                    }
                })
            }
            else {
                let node = this._createUINode(layoutOptions, tempLogic, tempData);
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