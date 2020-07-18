import NodeAttribute from "./NodeAttribute";
import TextAttribute from "./TextAttribute";
export default class NodeHelper {
    static get canvasNode(): cc.Node;
    private static nodeNum;
    static getNodeName(): string;
    static createNode(): void;
    static createImage(parent: cc.Node, imgCfg: NodeAttribute): void;
    static createText(parent: cc.Node, textCfg: TextAttribute): void;
    static changeSrc(image: any, url: string): void;
    static createMask(parent: any): void;
}
