import NodeUtil from "../engine/NodeUtil";

export default class CocosNodeUtil extends NodeUtil {

    public createImage(parent: cc.Node, url: string, x: number = 0, y: number = 0, width?: number | string, height?: number | string) {

        let node = new cc.Node();
        node.addComponent(cc.Sprite);
        this.changeSrc(node, url);
        node.x = x;
        node.y = y;
        node.width = width == "canvasWidth" ? cc.Canvas.instance.node.width : parseInt("" + width)
        node.height = height == "canvasWidth" ? cc.Canvas.instance.node.height : parseInt("" + height)
        parent.addChild(node)
    }

    public changeSrc(image: cc.Node, url: string) {
        let sprite = image.getComponent(cc.Sprite);
        if (url) {
            cc.loader.load(url, (err, tex) => {
                if (err) {
                    console.log(`load image  url ${url} fail`)
                    return;
                }
                let spriteFrame = new cc.SpriteFrame(tex)
                sprite.spriteFrame = spriteFrame;
            })
        }
    }

    public createMask() {

    }


    public createForm(name: string) {
        this.getLayout((res) => {
            if (res[name]) {
                let formNode = this.createImage(cc.Canvas.instance.node, "",);
                res[name].child.forEach((item) => {

                })
            }
        })
    }
}