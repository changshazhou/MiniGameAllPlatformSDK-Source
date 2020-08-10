export default class clickQueneItem {
    node: cc.Node | Laya.Node;
    stopPropagation: boolean;
    callback: Function;
    once: boolean;
    clicking: boolean;
}
