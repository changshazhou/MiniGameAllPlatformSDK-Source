import NodeAttribute from "./NodeAttribute";
export default class LayoutAttribute extends NodeAttribute {
    layoutType: cc.Layout.Type;
    resizeMode: cc.Layout.ResizeMode;
    startAxis: cc.Layout.AxisDirection;
    static parse(json: any): LayoutAttribute;
    left: number;
    top: number;
    right: number;
    bottom: number;
    spacingX: number;
    spacingY: number;
}
