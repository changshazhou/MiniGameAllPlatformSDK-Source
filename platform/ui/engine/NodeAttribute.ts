export default class NodeAttribute {

    public static parse(json: any): NodeAttribute {
        return { ...new NodeAttribute(), ...json }
    }


    public name: string;
    public x: number = 0;
    public y: number = 0;
    public width: number | string = 0;
    public height: number | string = 0;
    public url: string = "";
    public isMask: boolean = false;
    public maskUrl: string = "";
    public child: Array<NodeAttribute> = null;
    public event: Array<string> = [];
    public type: string = "";

}