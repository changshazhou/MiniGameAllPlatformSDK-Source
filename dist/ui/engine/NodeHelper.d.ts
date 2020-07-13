export default class NodeHelper {
    static get canvasNode(): cc.Node;
    static createNode(): void;
    static createImage(parent: any, url: string, x?: number, y?: number, width?: number, heigth?: number): void;
    static changeSrc(image: any, url: string): void;
    static createMask(parent: any): void;
}
