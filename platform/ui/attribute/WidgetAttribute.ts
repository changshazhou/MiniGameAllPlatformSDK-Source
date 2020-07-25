import NodeAttribute from "./NodeAttribute";
import LayoutAttribute from "./LayoutAttribute";


export default class WidgetAttribute extends NodeAttribute {

    public static parse(json: any): WidgetAttribute {
        return { ...new WidgetAttribute(), ...json }
    }


}