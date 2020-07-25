import NodeAttribute from "./NodeAttribute";
export default class LayoutAttribute extends NodeAttribute {
    static parse(json: any): LayoutAttribute;
    layoutType: cc.Layout.Type;
    mode: cc.Layout.ResizeMode;
    startAxis: cc.Layout.AxisDirection;
    left: number;
    top: number;
    right: number;
    bottom: number;
    spacingX: number;
    spacingY: number;
}
