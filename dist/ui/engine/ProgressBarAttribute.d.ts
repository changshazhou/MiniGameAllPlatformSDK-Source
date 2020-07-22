import NodeAttribute from "./NodeAttribute";
export default class ProgressBarAttribute extends NodeAttribute {
    static parse(json: any): ProgressBarAttribute;
    mode: cc.ProgressBar.Mode;
}
