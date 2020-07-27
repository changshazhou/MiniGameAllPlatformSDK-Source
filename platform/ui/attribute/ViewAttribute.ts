import NodeAttribute from "./NodeAttribute";
import LayoutAttribute from "./LayoutAttribute";
import ScrollAttribute from "./ScrollAttribute";


export default class ViewAttribute extends NodeAttribute {

    public static parse(json: any): ViewAttribute {
        return { ...new ViewAttribute(), ...json }
    }
    public scroll: ScrollAttribute = new ScrollAttribute();
    public layout: LayoutAttribute = new LayoutAttribute();

}