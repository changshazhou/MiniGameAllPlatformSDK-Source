import NodeAttribute from "./NodeAttribute";
export default class ViewAttribute extends NodeAttribute {
    static parse(json: any): ViewAttribute;
    /**
    * 文本内容的水平对齐方式
    */
    horizontalAlign: string;
    color: string;
    fontSize: number;
    lineHeight: number;
    text: string;
}
