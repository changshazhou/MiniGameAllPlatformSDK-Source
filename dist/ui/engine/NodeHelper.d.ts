import NodeAttribute from "../attribute/NodeAttribute";
import TextAttribute from "../attribute/TextAttribute";
import BaseModule from "../../framework/BaseModule";
export default class NodeHelper extends BaseModule {
    static get canvasNode(): cc.Node;
    private static nodeNum;
    static getNodeName(): string;
    static createNode(): void;
    static createImage(parent: cc.Node, imgCfg: NodeAttribute): void;
    static createText(parent: cc.Node, textCfg: TextAttribute): void;
    static changeSrc(image: any, imgCfg: NodeAttribute): void;
    static createMask(parent: any): void;
}
