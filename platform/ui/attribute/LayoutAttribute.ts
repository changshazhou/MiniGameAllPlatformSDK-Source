import NodeAttribute from "./NodeAttribute";
import Common from "../../utils/Common";

export default class LayoutAttribute extends NodeAttribute {

    public layoutType: cc.Layout.Type = cc.Layout.Type.GRID;
    public resizeMode: cc.Layout.ResizeMode = cc.Layout.ResizeMode.CONTAINER;
    public startAxis: cc.Layout.AxisDirection = cc.Layout.AxisDirection.HORIZONTAL;


    public static parse(json: any): LayoutAttribute {
        let retValue = {
            ...new LayoutAttribute(),
            ...json
        }
        retValue.layoutType = NodeAttribute.convertStr2Enum(cc.Layout.Type, json.layoutType, cc.Layout.Type.GRID);
        retValue.resizeMode = NodeAttribute.convertStr2Enum(cc.Layout.ResizeMode, json.resizeMode, cc.Layout.ResizeMode.CONTAINER);
        retValue.startAxis = NodeAttribute.convertStr2Enum(cc.Layout.AxisDirection, json.startAxis, cc.Layout.AxisDirection.HORIZONTAL);

        return retValue
    }


    public left: number = 30;
    public top: number = 30;
    public right: number = 30;
    public bottom: number = 30;
    public spacingX: number = 30;
    public spacingY: number = 30;


}