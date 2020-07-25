import NodeAttribute from "./NodeAttribute";
import LayoutAttribute from "./LayoutAttribute";


export default class ViewScrollAttribute extends NodeAttribute {

    public static parse(json: any): ViewScrollAttribute {
        return { ...new ViewScrollAttribute(), ...json }
    }
    
    public layout: LayoutAttribute = new LayoutAttribute();

}