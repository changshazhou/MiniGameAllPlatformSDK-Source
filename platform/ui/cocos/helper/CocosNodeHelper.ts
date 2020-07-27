import NodeHelper from "../../engine/NodeHelper";
import { ROOT_CONFIG } from "../../../config/ROOT_CONFIG";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import ViewAttribute from "../../attribute/ViewAttribute";
import NodeAttribute from "../../attribute/NodeAttribute";
import TextAttribute from "../../attribute/TextAttribute";
import LayoutAttribute from "../../attribute/LayoutAttribute";
import ProgressBarAttribute from "../../attribute/ProgressBarAttribute";
import ScrollAttribute from "../../attribute/ScrollAttribute";
import WidgetAttribute from "../../attribute/WidgetAttribute";

export default class CocosNodeHelper extends NodeHelper {

    public static get canvasNode() {
        return cc.Canvas.instance.node;
    }

    public static createNode(name?: string, nodeCfg?: NodeAttribute) {
        if (!name) {
            name = this.getNodeName();
        }
        let node = new cc.Node();
        node.name = name;
        if (nodeCfg)
            node.active = nodeCfg.active;
        return node;
    }

    public static createImage(parent: cc.Node, imgCfg: NodeAttribute): cc.Node {

        let node = this.createNode(imgCfg.name, imgCfg);
        node.addComponent(cc.Sprite);
        this.changeSrc(node, imgCfg.url);
        node.x = imgCfg.x;
        node.y = imgCfg.y;
        node.width = this.convertWidth(imgCfg.width);
        node.height = this.convertWidth(imgCfg.height);
        parent.addChild(node)
        return node;
    }



    /**
     * 16进制颜色转换为RGB色值
     * @method hexColor
     */
    public static colorHex2RGB(hexColor: string) {

        if (hexColor.substr(0, 1) == "#") hexColor = hexColor.substring(1);
        hexColor = hexColor.toLowerCase();
        let b = new Array();
        for (let x = 0; x < 3; x++) {
            b[0] = hexColor.substr(x * 2, 2)
            b[3] = "0123456789abcdef";
            b[1] = b[0].substr(0, 1)
            b[2] = b[0].substr(1, 1)
            b[20 + x] = b[3].indexOf(b[1]) * 16 + b[3].indexOf(b[2])
        }
        //return b[20] + "," + b[21] + "," + b[22];
        return new cc.Color(b[20], b[21], b[22]);

    }

    public static createText(parent: cc.Node, textCfg: TextAttribute) {
        let node = this.createNode(textCfg.name, textCfg);
        node.color = this.colorHex2RGB(textCfg.color);
        let txt = node.addComponent(cc.Label);
        txt.enableWrapText = false;
        txt.overflow = cc.Label.Overflow.SHRINK;
        txt.fontSize = textCfg.fontSize;
        txt.lineHeight = textCfg.lineHeight;
        let horizontalAlign = cc.Label.HorizontalAlign[textCfg.horizontalAlign.toUpperCase()]
        txt.horizontalAlign = horizontalAlign ? horizontalAlign : cc.Label.HorizontalAlign.CENTER;
        txt.verticalAlign = cc.Label.VerticalAlign.CENTER;
        txt.useSystemFont = true;
        if (textCfg.text)
            txt.string = textCfg.text;

        node.x = textCfg.x;
        node.y = textCfg.y;
        node.width = this.convertWidth(textCfg.width);
        node.height = this.convertWidth(textCfg.height);
        parent.addChild(node)
        return node;
    }


    public static createLayout(parent: cc.Node, layoutCfg: LayoutAttribute): cc.Node {

        let node = this.createNode(layoutCfg.name, layoutCfg);
        let layout: cc.Layout = node.addComponent(cc.Layout);
        layout.paddingLeft = layoutCfg.left;
        layout.paddingTop = layoutCfg.top;
        layout.paddingRight = layoutCfg.right;
        layout.paddingBottom = layoutCfg.bottom;

        layout.spacingX = layoutCfg.spacingX;
        layout.spacingY = layoutCfg.spacingY;

        layout.type = cc.Layout.Type.VERTICAL;  //LayoutAttribute.convertType(layoutCfg.layoutType);
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;//layoutCfg.resizeMode;
        layout.startAxis = layoutCfg.startAxis;

        node.x = layoutCfg.x;
        node.y = layoutCfg.y;
        node.width = this.convertWidth(layoutCfg.width);
        node.height = this.convertWidth(layoutCfg.height);
        parent.addChild(node)
        return node;
    }

    public static createProgressBar(parent: cc.Node, progressBarCfg: ProgressBarAttribute): cc.Node {

        let node = this.createNode(progressBarCfg.name, progressBarCfg);
        let progressBar: cc.ProgressBar = node.addComponent(cc.ProgressBar);
        let sprite = node.addComponent(cc.Sprite);
        this.changeSrc(node, progressBarCfg.url);
        progressBar.mode = cc.ProgressBar.Mode.HORIZONTAL;  // progressBarCfg.mode;
        progressBar.totalLength = 300;
        progressBar.progress = 0.1;


        node.x = progressBarCfg.x;
        node.y = progressBarCfg.y;
        node.width = this.convertWidth(progressBarCfg.width);
        node.height = this.convertWidth(progressBarCfg.height);


        if (progressBarCfg.child && progressBarCfg.child.length > 0) {
            let bar = this.createImage(node, NodeAttribute.parse(progressBarCfg.child[0]));
            progressBar.barSprite = bar.getComponent(cc.Sprite);

        }
        parent.addChild(node)
        return node;
    }


    public static createScroll(parent: cc.Node, scrollCfg: ScrollAttribute) {

    }

    public static createView(parent: cc.Node, viewCfg: ViewAttribute) {

        let container = this.createNode(viewCfg.name, viewCfg);
        parent.addChild(container);

        let node = this.createNode(viewCfg.name + '_scroll', viewCfg);
        let scroll = node.addComponent(cc.ScrollView);
        scroll.horizontal = viewCfg.scroll.horizontal;
        scroll.horizontalScrollBar = null;
        scroll.verticalScrollBar = null;
        scroll.vertical = !scroll.horizontal;
        node.width = this.convertWidth(viewCfg.scroll.width);
        node.height = this.convertHeight(viewCfg.scroll.height);
        container.addChild(node);


        let view = this.createNode(viewCfg.name + "_view");
        let mask = view.addComponent(cc.Mask);
        // mask.type = cc.Mask.Type.RECT;

        this.createWidget(view, new WidgetAttribute(true, true, true, true));


        view.width = this.convertWidth(viewCfg.scroll.width);
        view.height = this.convertHeight(viewCfg.scroll.height);
        node.addChild(view);


        viewCfg.layout.name = viewCfg.name + '_layout';

        let layoutNode = this.createLayout(view, LayoutAttribute.parse(viewCfg.layout));
        layoutNode.width = this.convertWidth(viewCfg.layout.width);
        layoutNode.height = this.convertHeight(viewCfg.layout.height);
        return layoutNode;

    }

    public static createWidget(view: cc.Node, widgetCfg: WidgetAttribute) {

        let widget = view.addComponent(cc.Widget);

        widget.isAlignLeft = widgetCfg.isAlignRight;
        widget.isAlignTop = widgetCfg.isAlignTop;
        widget.isAlignRight = widgetCfg.isAlignRight;
        widget.isAlignBottom = widgetCfg.isAlignBottom;

        widget.left = widgetCfg.left;
        widget.top = widgetCfg.top;
        widget.right = widgetCfg.right;
        widget.bottom = widgetCfg.bottom;
    }


    public static changeSrc(image: cc.Node | cc.Sprite, url: string, callback?: Function) {
        let sprite;
        if (image instanceof cc.Node)
            sprite = image.getComponent(cc.Sprite);
        else
            sprite = image;

        if (url) {
            let isRemote = url.indexOf("http") != -1
            if (cc.resources)
                if (!isRemote)
                    cc.resources.load(url, cc.SpriteFrame, (err, spriteFrame: cc.SpriteFrame) => {
                        if (err) {
                            console.log(' cc.resources.load ', err)
                            return;
                        }
                        sprite.spriteFrame = spriteFrame;
                        if (callback)
                            callback();
                    });
                else {
                    cc.assetManager.loadRemote(url, cc.SpriteFrame, (err, tex: cc.Texture2D) => {
                        if (err) {
                            console.log(' cc.assetManager.loadRemote ', err)
                            return;
                        }
                        let spriteFrame = new cc.SpriteFrame(tex)
                        sprite.spriteFrame = spriteFrame;
                        if (callback)
                            callback();
                    });
                }
            else {
                cc.loader.load(url, (err, tex) => {
                    if (err) {
                        console.log(' cc.loader.load ', err)
                        return;
                    }
                    let spriteFrame = new cc.SpriteFrame(tex)
                    sprite.spriteFrame = spriteFrame;
                    if (callback)
                        callback();
                });
            }
        }
    }

    public static changeText(text: cc.Node, msg: string) {
        if (!text) {
            console.log('对象不存在,赋值失败')
            return;
        }
        let lab = text.getComponent(cc.Label)
        if (lab) {
            lab.string = msg;
        }
    }


    public static createMask(parent: cc.Node, maskUrl: string = undefined) {
        let skin = `${ROOT_CONFIG.HTTP_ROOT}/SDK/layout/img_mask.png`;
        let mask = this.createNode("img_mask");
        let sprite = mask.addComponent(cc.Sprite);
        let widget = mask.addComponent(cc.Widget);
        widget.isAlignLeft = widget.isAlignTop = widget.isAlignRight = widget.isAlignBottom = true;
        widget.left = widget.top = widget.right = widget.bottom = 0;

        this.changeSrc(mask, skin, () => {
            sprite.type = cc.Sprite.Type.SLICED;
            sprite.spriteFrame.insetBottom = 1;
            sprite.spriteFrame.insetTop = 1;
            sprite.spriteFrame.insetLeft = 1;
            sprite.spriteFrame.insetRight = 1;
            mask.width = parent.width
            mask.height = parent.height
        })

        parent.addChild(mask);
        mask.zIndex = -1;
        mask.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this)
    }

    private static onMaskMouseDown(e: cc.Event.EventTouch) {
        e.stopPropagation();
    }


    public static findNodeByName(node: cc.Node, attrName: string): cc.Node {
        let targetNode = null;
        for (let i = 0; i < node.childrenCount; i++) {
            let child = node.children[i]
            if (child.name == attrName) {
                targetNode = child
                break;
            }
            else {
                let node = this.findNodeByName(child, attrName);
                if (node) {
                    targetNode = node;
                    break;
                }
            }
        }
        return targetNode;
    }

    public static convertWidth(width: string | number): number {
        let retValue = this.canvasNode.width
        if (!isNaN(width as number)) {
            return parseInt("" + width)
        }
        return retValue;
    }
    public static convertHeight(height: string | number): number {
        let retValue = this.canvasNode.height
        if (!isNaN(height as number)) {
            return parseInt("" + height)
        }
        return retValue;
    }
}