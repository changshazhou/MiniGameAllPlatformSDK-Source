import NodeHelper from "../engine/NodeHelper";
export default class CocosNodeHelper extends NodeHelper {
    static get canvasNode(): cc.Node;
    static createNode(name?: string): cc.Node;
    static createImage(parent: cc.Node, url: string, x?: number, y?: number, width?: number | string, height?: number | string, name?: string): cc.Node;
    static changeSrc(image: cc.Node, url: string, callback?: Function): void;
    static createMask(parent: cc.Node): void;
    private static onMaskMouseDown;
}
