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
     * 延迟移动
     * @param moveNode  需要移动的节点
     * @param distince 移动的距离
     * @param showBanner 移动后是否显示 banner
     */
    move(moveNode: any, distince: any, showBanner: any): void;
    setPosition(node: any, visible: any, x: any, y: any): void;
    movePosition(): void;
    copyNode(): void;
    onPosCallback(tempButtom: any): void;
    removeTemp(tempButtom: any): void;
}
