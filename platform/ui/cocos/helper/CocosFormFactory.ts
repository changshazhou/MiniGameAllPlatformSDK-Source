import FormFactory, { LayoutFormKeyValue } from "../../engine/FormFactory"
import CocosNodeHelper from "./CocosNodeHelper";
import NodeAttribute from "../../attribute/NodeAttribute";
import BaseForm from "../../engine/BaseForm";
import TextAttribute from "../../attribute/TextAttribute";
import LayoutAttribute from "../../attribute/LayoutAttribute";
import ProgressBarAttribute from "../../attribute/ProgressBarAttribute";
import ViewAttribute from "../../attribute/ViewAttribute";
import LayoutType from "../../../enum/LayoutType";
import WidgetAttribute from "../../attribute/WidgetAttribute";
import Common from "../../../utils/Common";




export default class CocosFormFactory extends FormFactory {


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
            let viewRet = CocosNodeHelper.createView(parent, nodeCfg as ViewAttribute);
            node = viewRet.viewContainer;
            if (nodeCfg.child && nodeCfg.child.length > 0) {
                this._createChild(node, nodeCfg.child);
            }
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

        if (formCfg.isMask)
            CocosNodeHelper.createMask(formNode, formCfg.maskUrl);

        // this._createChild(formNode, formCfg.child);

        let logic = new formLogic();
        logic.initForm(formNode);
        this.logicShow(logic, formNode, formData);

        this.addForm2Quene(formCfg.name, formNode, logic);
        return formNode;
    }

    public hideFormByLogic(logic: any, formData?: any) {
        this.removeFormByLogic(logic, (formKV) => {
            if (formKV instanceof Array) {
                formKV.forEach(item => {
                    this.logicHide(item.formLogic, item.formNode, formData);
                })
            }
            else {
                this.logicHide(formKV.formLogic, formKV.formNode, formData);
            }
        })
    }


    public hideForm(name: string, formNode: any, formData?: any) {
        if (formNode) {
            this.removeFormFromQuene(name, formNode, (formKV) => {
                this.logicHide(formKV.formLogic, formKV.formNode, formData);
            })
        }
        else
            this.removeAllFormFromQuene(name, (formKV) => {
                this.logicHide(formKV.formLogic, formKV.formNode, formData);
            })
    }


    private logicShow(formLogic, formNode, formData) {
        if (Common.isOnlyUI && Common.isPC)
            return;
        formLogic.willShow(formData);
        formNode.active = true;
        formLogic.onShow(formData);
    }

    private logicHide(formLogic, formNode, formData) {
        if (Common.isOnlyUI && Common.isPC)
            return;
        formLogic.willHide(formData);
        formNode.active = true;
        formLogic.onHide(formData);
        (formNode as cc.Node).removeFromParent();
    }

    public showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, callback?: () => void, remoteLayout: boolean = true, layoutOptions: any = null) {
        if (!parent)
            parent = CocosNodeHelper.canvasNode;

        let formKV = this.getFormFromCached(name);
        if (formKV) {
            parent.addChild(formKV.formNode as cc.Node);
            this.logicShow(formKV.formLogic, formKV.formNode, formData);
            this.addForm2Quene(name, formKV.formNode, formKV.formLogic)
        }
        else {
            if (remoteLayout) {
                this.getLayout((res) => {
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

        let formKV = this.getFormFromCached(name);
        if (formKV) {
            parent.addChild(formKV.formNode as cc.Node);
            this.logicShow(formKV.formLogic, formKV.formNode, tempData);
            this.addForm2Quene(name, formKV.formNode, formKV.formLogic);
        }
        else {
            if (remoteLayout) {
                this.getTemplates((res) => {
                    let tempCfg = res[name];
                    if (tempCfg) {
                        let formCfg = NodeAttribute.parse(tempCfg);
                        formCfg.name = name;
                        let node = this._createUINode(formCfg, tempLogic, tempData, parent);
                        // console.log('createNodeByTemplate ', formCfg)
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
            this.removeFormFromQuene(name, formNode, (formKV) => {
                this.logicHide(formKV.formLogic, formKV.formNode, formData);
            })
        }
        else
            this.removeAllFormFromQuene(name, (formKV) => {
                this.logicHide(formKV.formLogic, formKV.formNode, formData);
            })
    }


    public getTemplate(tempName: string, callback?: Function) {
        super.getTemplate(tempName, (tempCfg) => {
            tempCfg.width = CocosNodeHelper.convertWidth(tempCfg.width)
            tempCfg.height = CocosNodeHelper.convertHeight(tempCfg.height)
            if (callback)
                callback(tempCfg)
        })
    }
}