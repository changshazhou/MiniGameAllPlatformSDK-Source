import NodeAttribute from "./NodeAttribute";


export default class TextAttribute extends NodeAttribute {

    public static parse(json: any): TextAttribute {
        return { ...new TextAttribute(), ...json }
    }
    /**
    * 文本内容的水平对齐方式
    */
    public horizontalAlign: string = "center";
    public color: string = "#ffffff";
    public fontSize: number = 32;
    public lineHeight: number = 32;


}