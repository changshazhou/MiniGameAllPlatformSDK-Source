import DelayMove from "../engine/DelayMove";

export default class CocosDelayMove extends DelayMove {



    public moveNode: cc.Node = null;
    public distince: number = -100;
    public showBanner: boolean = true;

    public pos1: cc.Vec2 = cc.Vec2.ZERO;
    public pos2: cc.Vec2 = cc.Vec2.ZERO;

    public initPos() {
        if (this.pos1.x == 0 && this.pos1.y == 0) {
            this.pos1 = this.moveNode.position.clone();
            this.pos2 = this.pos1.add(new cc.Vec2(0, this.distince))
        }
    }


    public copyNode() {
        let tempButtom = cc.instantiate(this.moveNode);
        tempButtom.active = true;
        this.moveNode.parent.addChild(tempButtom)
        tempButtom.x = this.pos2.x;
        tempButtom.y = this.pos2.y;
        return tempButtom;
    }

    public removeTemp(tempButtom) {
        tempButtom.active = false;
        tempButtom.removeFromParent();
        tempButtom.destroy();
    }
}