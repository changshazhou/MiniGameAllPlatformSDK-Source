import MistouchPos from "../engine/MistouchPos";
export default class CocosMistouchPos extends MistouchPos {
    posButton: cc.Node;
    moveDis: number;
    showBanner: boolean;
    pos1: cc.Vec2;
    pos2: cc.Vec2;
    initPos(): void;
    copyNode(): void;
    removeTemp(tempButtom: any): void;
}
