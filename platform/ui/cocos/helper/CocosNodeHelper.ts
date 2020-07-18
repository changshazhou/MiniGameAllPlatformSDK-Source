import NodeHelper from "../../engine/NodeHelper";
import { ROOT_CONFIG } from "../../../config/ROOT_CONFIG";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import Common from "../../../utils/Common";
import NodeAttribute from "../../engine/NodeAttribute";
import TextAttribute from "../../engine/TextAttribute";

export default class CocosNodeHelper extends NodeHelper {

    public static get canvasNode() {
        return cc.Canvas.instance.node;
    }

    public static createNode(name?: string) {
        if (!name) {
            name = this.getNodeName();
        }
        let node = new cc.Node();
        node.name = name
        return node;
    }

    public static createImage(parent: cc.Node, imgCfg: NodeAttribute): cc.Node {

        let node = this.createNode(imgCfg.name);
        node.addComponent(cc.Sprite);
        this.changeSrc(node, imgCfg.url);
        node.x = imgCfg.x;
        node.y = imgCfg.y;
        node.width = imgCfg.width == "canvasWidth" ? this.canvasNode.width : parseInt("" + imgCfg.width)
        node.height = imgCfg.height == "canvasHeight" ? this.canvasNode.height : parseInt("" + imgCfg.height)
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
        let node = this.createNode(textCfg.name);
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
        node.width = textCfg.width == "canvasWidth" ? this.canvasNode.width : parseInt("" + textCfg.width)
        node.height = textCfg.height == "canvasHeight" ? this.canvasNode.height : parseInt("" + textCfg.height)
        parent.addChild(node)
        return node;
    }

    public static changeSrc(image: cc.Node, url: string, callback?: Function) {
        let sprite = image.getComponent(cc.Sprite);
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
}