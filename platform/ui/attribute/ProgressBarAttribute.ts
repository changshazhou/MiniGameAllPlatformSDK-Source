import NodeAttribute from "./NodeAttribute";

export default class ProgressBarAttribute extends NodeAttribute {

    public static parse(json: any): ProgressBarAttribute {
        return { ...new ProgressBarAttribute(), ...json }
    }

    public mode: cc.ProgressBar.Mode = cc.ProgressBar.Mode.HORIZONTAL;
}