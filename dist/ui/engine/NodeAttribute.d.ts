export default class NodeAttribute {
    constructor(parameters: any);
    name: string;
    x: number;
    y: number;
    width: number | string;
    height: number | string;
    url: string;
    isMask: boolean;
    child: Array<NodeAttribute>;
    event: Array<string>;
    type: string;
}
