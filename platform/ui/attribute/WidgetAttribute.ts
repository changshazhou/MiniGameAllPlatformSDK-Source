import NodeAttribute from "./NodeAttribute";
import LayoutAttribute from "./LayoutAttribute";


export default class WidgetAttribute extends NodeAttribute {

    public static parse(json: any): WidgetAttribute {
        return { ...new WidgetAttribute(), ...json }
    }

    constructor(isAlignLeft = false, isAlignTop = false, isAlignRight = false, isAlignBottom = false, left = 0, top = 0, right = 0, bottom = 0) {
        super();
        this.isAlignLeft = isAlignLeft;
        this.isAlignTop = isAlignTop;
        this.isAlignRight = isAlignRight;
        this.isAlignBottom = isAlignBottom

        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom
    }

    public isAlignLeft: boolean = false;
    public isAlignTop: boolean = false;
    public isAlignRight: boolean = false;
    public isAlignBottom: boolean = false;

    public left: number = 0;
    public top: number = 0;
    public right: number = 0;
    public bottom: number = 0;

}