import DelayMove from "../engine/DelayMove";
export default class CocosDelayMove extends DelayMove {
    moveNode: cc.Node;
    distince: number;
    showBanner: boolean;
    pos1: cc.Vec2;
    pos2: cc.Vec2;
    initPos(): void;
    setPosition(node: any, visible: any, x: any, y: any): void;
    copyNode(): cc.Node;
    removeTemp(tempButtom: any): void;
}
