import NodeAttribute from "./NodeAttribute";

export default class LayoutAttribute extends NodeAttribute {

    public static parse(json: any): LayoutAttribute {
        return { ...new LayoutAttribute(), ...json }
    }

    public layoutType: cc.Layout.Type = cc.Layout.Type.GRID;
    public mode: cc.Layout.ResizeMode = cc.Layout.ResizeMode.CONTAINER;
    public startAxis: cc.Layout.AxisDirection = cc.Layout.AxisDirection.HORIZONTAL;

    public left: number = 30;
    public top: number = 30;
    public right: number = 30;
    public bottom: number = 30;
    public spacingX: number = 30;
    public spacingY: number = 30;
}