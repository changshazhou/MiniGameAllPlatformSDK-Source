import NodeAttribute from "./NodeAttribute";
export default class WidgetAttribute extends NodeAttribute {
    static parse(json: any): WidgetAttribute;
    constructor(isAlignLeft?: boolean, isAlignTop?: boolean, isAlignRight?: boolean, isAlignBottom?: boolean, left?: number, top?: number, right?: number, bottom?: number);
    isAlignLeft: boolean;
    isAlignTop: boolean;
    isAlignRight: boolean;
    isAlignBottom: boolean;
    left: number;
    top: number;
    right: number;
    bottom: number;
}
