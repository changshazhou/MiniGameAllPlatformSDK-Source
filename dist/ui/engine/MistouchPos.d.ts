import BaseModule from "../../framework/BaseModule";
export default class MistouchPos extends BaseModule {
    posButton: cc.Node;
    moveDis: number;
    showBanner: boolean;
    pos1: cc.Vec2;
    pos2: cc.Vec2;
    mMistouchPosNum: number;
    mMistouchPosSecond: number;
    initPos(): void;
    move(): void;
    movePosition(): void;
    copyNode(): void;
    onPosCallback(tempButtom: any): void;
    removeTemp(tempButtom: any): void;
}
