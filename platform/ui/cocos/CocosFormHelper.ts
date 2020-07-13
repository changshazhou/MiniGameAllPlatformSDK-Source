import FormHelper from "../engine/FormHelper"
import CocosNodeHelper from "./CocosNodeHelper";
import CocosNodeEvent from "../../../dist/ui/cocos/CocosNodeEvent";
import NodeAttribute from "../engine/NodeAttribute";

export default class CocosFormHelper extends FormHelper {

    public static createChild(parent: cc.Node, children: Array<NodeAttribute>) {
        for (let i = 0; i < children.length; i++) {
            let nodeCfg = children[i] as NodeAttribute;
            let node = CocosNodeHelper.createImage(parent, nodeCfg.url, nodeCfg.x, nodeCfg.y, nodeCfg.width, nodeCfg.height);

        }

    }
    public static createForm(name: string, parent?: cc.Node) {
        if (!parent)
            parent = CocosNodeHelper.canvasNode;
        this.getLayout('https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/SDK/layout.json', (res) => {
            if (res[name]) {
                let formCfg = res[name] as NodeAttribute;
                let formNode = CocosNodeHelper.createImage(CocosNodeHelper.canvasNode, formCfg.url, formCfg.x, formCfg.y, formCfg.width, formCfg.height, name);
                if (formCfg.isMask)
                    CocosNodeHelper.createMask(formNode);
                this.createChild(formNode, res[name].child);
            }
        })
    }
}