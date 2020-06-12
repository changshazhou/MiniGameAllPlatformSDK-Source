import DelayMove from "../engine/DelayMove";
export default class CocosDelayMove extends DelayMove {
    moveNode: cc.Node;
    distince: number;
    showBanner: boolean;
    pos1: cc.Vec2;
    pos2: cc.Vec2;
    initPos(): void;
    copyNode(): cc.Node;
    removeTemp(tempButtom: any): void;
}
