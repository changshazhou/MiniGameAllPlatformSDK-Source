import BaseModule from "../../framework/BaseModule";
export default class DelayShow extends BaseModule {
    private mNode;
    show(node: any, delayTime?: number): void;
    hide(node: any, delayTime?: number): void;
    clear(): void;
    hideNode(): void;
    private showNode;
}
