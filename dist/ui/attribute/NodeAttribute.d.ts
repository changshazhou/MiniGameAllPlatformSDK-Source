export default class NodeAttribute {
    static parse(json: any): NodeAttribute;
    name: string;
    x: number;
    y: number;
    width: number | string;
    height: number | string;
    url: string;
    isMask: boolean;
    maskUrl: string;
    child: Array<NodeAttribute>;
    event: Array<string>;
    type: string;
    active: boolean;
}
