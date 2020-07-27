import NodeAttribute from "./NodeAttribute";
import LayoutAttribute from "./LayoutAttribute";
import ScrollAttribute from "./ScrollAttribute";
export default class ViewAttribute extends NodeAttribute {
    static parse(json: any): ViewAttribute;
    scroll: ScrollAttribute;
    layout: LayoutAttribute;
}
