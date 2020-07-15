
import { ENGINE_TYPE } from "../../enum/ENGINE_TYPE";
import Common from "../../utils/Common";

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



    public static createImage(parent: any, url: string, x: number = 0, y: number = 0, width?: number, heigth?: number) {

    }

    public static changeSrc(image: any, url: string) {

    }

    public static createMask(parent) {



    }


}