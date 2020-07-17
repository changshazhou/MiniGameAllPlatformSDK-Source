import BaseModule from "../../framework/BaseModule";
import Common from "../../utils/Common";


export default class BaseForm extends BaseModule {


    public node: any
    public mFormData: any;

    start() {

    }

    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    public get FormData() {

        return this.mFormData;
    }
    private mNodeMap: Array<string> = [];
    /**
     * 初始化
     * @param node 
     */
    initForm(node) {
        this.node = node;
        for (let v in this) {
            if (!Common.isFunction(this[v])) {
                let findNode = this.findNodeByName(node, v);
                if (findNode)
                    this[v] = findNode;
                this.mNodeMap.push(v);
            }
        }
    }

    disable() {
        this.node = null;
        this.mNodeMap.forEach(v => {
            this[v] = null;
        })
    }

    public findNodeByName(node: any, attrName: string): any {
        return null;
    }

    willShow(data?) {
        this.mFormData = data;
    }

    onShow(data) {

    }

    willHide(data) {

    }

    onHide(data) {

    }



}