
import { ENGINE_TYPE } from "../../enum/ENGINE_TYPE";
import Common from "../../utils/Common";
import NodeAttribute from "../attribute/NodeAttribute";
import TextAttribute from "../attribute/TextAttribute";

export default class NodeHelper {


    public static get canvasNode() {
        return cc.Canvas.instance.node;
    }
    private static nodeNum: number = 0;
    public static getNodeName() {
        this.nodeNum++;
        return 'createNode' + this.nodeNum
    }

    public static createNode() {

    }



    public static createImage(parent: cc.Node, imgCfg: NodeAttribute) {

    }

    public static createText(parent: cc.Node, textCfg: TextAttribute) {

    }

    public static changeSrc(image: any, imgCfg: NodeAttribute) {

    }

    public static createMask(parent) {



    }


}