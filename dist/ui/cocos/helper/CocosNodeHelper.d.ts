import NodeHelper from "../../engine/NodeHelper";
import NodeAttribute from "../../engine/NodeAttribute";
import TextAttribute from "../../engine/TextAttribute";
import LayoutAttribute from "../../engine/LayoutAttribute";
import ProgressBarAttribute from "../../engine/ProgressBarAttribute";
export default class CocosNodeHelper extends NodeHelper {
    static get canvasNode(): cc.Node;
    static createNode(name?: string): cc.Node;
    static createImage(parent: cc.Node, imgCfg: NodeAttribute): cc.Node;
    /**
     * 16进制颜色转换为RGB色值
     * @method hexColor
     */
    static colorHex2RGB(hexColor: string): cc.Color;
    static createText(parent: cc.Node, textCfg: TextAttribute): cc.Node;
    static createLayout(parent: cc.Node, layoutCfg: LayoutAttribute): cc.Node;
    static createProgressBar(parent: cc.Node, progressBarCfg: ProgressBarAttribute): cc.Node;
    static changeSrc(image: cc.Node | cc.Sprite, url: string, callback?: Function): void;
    static createMask(parent: cc.Node, maskUrl?: string): void;
    private static onMaskMouseDown;
    static findNodeByName(node: cc.Node, attrName: string): cc.Node;
    static convertWidth(width: string | number): number;
    static convertHeight(height: string | number): number;
}
