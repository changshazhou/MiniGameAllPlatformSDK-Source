import NodeHelper from "../../engine/NodeHelper";
import ViewAttribute from "../../attribute/ViewAttribute";
import NodeAttribute from "../../attribute/NodeAttribute";
import TextAttribute from "../../attribute/TextAttribute";
import LayoutAttribute from "../../attribute/LayoutAttribute";
import ProgressBarAttribute from "../../attribute/ProgressBarAttribute";
import ScrollAttribute from "../../attribute/ScrollAttribute";
import WidgetAttribute from "../../attribute/WidgetAttribute";
export default class CocosNodeHelper extends NodeHelper {
    static get canvasNode(): cc.Node;
    static createNode(name?: string, nodeCfg?: NodeAttribute): cc.Node;
    static createImage(parent: cc.Node, imgCfg: NodeAttribute): cc.Node;
    /**
     * 16进制颜色转换为RGB色值
     * @method hexColor
     */
    static colorHex2RGB(hexColor: string): cc.Color;
    static createText(parent: cc.Node, textCfg: TextAttribute): cc.Node;
    static createLayout(parent: cc.Node, layoutCfg: LayoutAttribute): cc.Node;
    static createProgressBar(parent: cc.Node, progressBarCfg: ProgressBarAttribute): cc.Node;
    static createScroll(parent: cc.Node, scrollCfg: ScrollAttribute): void;
    static createView(parent: cc.Node, viewCfg: ViewAttribute): {
        viewContainer: cc.Node;
        layoutNode: cc.Node;
    };
    static createWidget(view: cc.Node, widgetCfg: WidgetAttribute): cc.Node;
    static changeSrc(image: cc.Node | cc.Sprite, imgCfg: NodeAttribute, callback?: Function): void;
    static setSpriteGrid(imgCfg: NodeAttribute, sprite: cc.Sprite): void;
    static changeText(text: cc.Node, msg: string): void;
    static createMask(parent: cc.Node, maskUrl?: string): void;
    static addStopPropagation(node: cc.Node): void;
    static removeStopPropagation(node: cc.Node): void;
    private static onMaskMouseDown;
    static findNodeByName(node: cc.Node, attrName: string): cc.Node;
    static convertWidth(width: string | number): number;
    static convertHeight(height: string | number): number;
    static convertIndex(zindex: string | number): number;
}
