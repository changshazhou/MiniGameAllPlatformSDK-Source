import NodeAttribute from "./NodeAttribute";
import Common from "../../utils/Common";

export default class LayoutAttribute extends NodeAttribute {

    public static parse(json: any): LayoutAttribute {
        let retValue = {
            ...new LayoutAttribute(),
            ...json
        }
        retValue.resizeMode = NodeAttribute.convertStr2Enum(cc.Layout.ResizeMode, json.resizeMode, cc.Layout.ResizeMode.CONTAINER);
        retValue.startAxis = NodeAttribute.convertStr2Enum(cc.Layout.AxisDirection, json.startAxis, cc.Layout.AxisDirection.HORIZONTAL);
        retValue.layoutType = NodeAttribute.convertStr2Enum(cc.Layout.Type, json.layoutType, cc.Layout.Type.HORIZONTAL);
        return retValue
    }

    public layoutType: cc.Layout.Type;
    public resizeMode: cc.Layout.ResizeMode;
    public startAxis: cc.Layout.AxisDirection;

    public left: number = 30;
    public top: number = 30;
    public right: number = 30;
    public bottom: number = 30;
    public spacingX: number = 30;
    public spacingY: number = 30;


}