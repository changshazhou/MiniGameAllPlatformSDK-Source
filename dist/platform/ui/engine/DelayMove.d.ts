import BaseModule from "../../framework/BaseModule";
export default class DelayMove extends BaseModule {
    moveNode: cc.Node;
    distince: number;
    showBanner: boolean;
    pos1: cc.Vec2;
    pos2: cc.Vec2;
    mMistouchPosNum: number;
    mMistouchPosSecond: number;
    initPos(): void;
    /**
     *
     * @param moveNode
     * @param distince
     * @param showBanner
     */
    move(moveNode: any, distince: any, showBanner: any): void;
    movePosition(): void;
    copyNode(): void;
    onPosCallback(tempButtom: any): void;
    removeTemp(tempButtom: any): void;
}
