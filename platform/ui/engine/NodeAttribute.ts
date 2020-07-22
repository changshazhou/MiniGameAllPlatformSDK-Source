export default class NodeAttribute {

    public static parse(json: any): NodeAttribute {
        let temp = { ...new NodeAttribute(), ...json }
        return temp;
    }




    public name: string;
    public x: number = 0;
    public y: number = 0;
    public width: number | string = "canvasWidth";
    public height: number | string = "canvasHeight";
    public url: string = "";
    public isMask: boolean = false;
    public maskUrl: string = "";
    public child: Array<NodeAttribute> = null;
    public event: Array<string> = [];
    public type: string = "";

}