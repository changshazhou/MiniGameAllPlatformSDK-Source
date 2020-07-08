import NodeUtil from "../engine/NodeUtil";
export default class CocosNodeUtil extends NodeUtil {
    createImage(parent: cc.Node, url: string, x?: number, y?: number, width?: number | string, height?: number | string): void;
    changeSrc(image: cc.Node, url: string): void;
    createMask(): void;
    createForm(name: string): void;
}
