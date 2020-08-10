export default class clickQueneItem {
    
    public node: cc.Node | Laya.Node;
    public stopPropagation: boolean = true
    public callback: Function
    public once: boolean = true
    public clicking: boolean = false
}