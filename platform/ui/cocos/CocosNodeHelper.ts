import NodeHelper from "../engine/NodeHelper";

export default class CocosNodeHelper extends NodeHelper {

    public static get canvasNode() {
        return cc.Canvas.instance.node;
    }
    private static nodeNum: number = 0;
    public static createNode(name?: string) {
        if (!name) {
            this.nodeNum++;
            name = 'createNode' + this.nodeNum
        }
        let node = new cc.Node();
        node.name = name
        return node;
    }

    public static createImage(parent: cc.Node, url: string, x: number = 0, y: number = 0, width?: number | string, height?: number | string, name?: string): cc.Node {

        let node = this.createNode(name);
        node.addComponent(cc.Sprite);
        this.changeSrc(node, url);
        node.x = x;
        node.y = y;
        node.width = width == "canvasWidth" ? this.canvasNode.width : parseInt("" + width)
        node.height = height == "canvasHeight" ? this.canvasNode.height : parseInt("" + height)
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

    public static createMask(parent: cc.Node) {
        let skin = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/SDK/img_mask.png";
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
        mask.on(cc.Node.EventType.TOUCH_START, this.onMaskMouseDown, this)
    }

    private static onMaskMouseDown(e: cc.Event.EventTouch) {
        e.stopPropagation();
    }

}