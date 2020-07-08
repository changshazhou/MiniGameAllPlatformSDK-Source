export default class NodeUtil {
    get rootNode(): {};
    getLayout(callback: Function): void;
    createImage(parent: any, url: string, x?: number, y?: number, width?: number, heigth?: number): void;
    changeSrc(image: any, url: string): void;
    createMask(): void;
    createForm(name: string): void;
}
