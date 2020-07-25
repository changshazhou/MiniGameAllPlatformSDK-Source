import NodeAttribute from "./NodeAttribute";
import LayoutAttribute from "./LayoutAttribute";
export default class ViewScrollAttribute extends NodeAttribute {
    static parse(json: any): ViewScrollAttribute;
    layout: LayoutAttribute;
}
