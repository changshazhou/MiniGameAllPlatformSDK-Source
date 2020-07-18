import BaseModule from "../../framework/BaseModule";
import Common from "../../utils/Common";
import EventType from "../../utils/EventType";


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


    public formComponents: Array<any> = [];

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
        for (let i = 0; i < this.formComponents.length; i++) {
            this.formComponents[i].initForm(node);
        }
    }

    disable() {
        this.node = null;
        this.mNodeMap.forEach(v => {
            this[v] = null;
        })
        this.formComponents.forEach(item => {
            item.disable();
        })
        this.formComponents = [];
    }

    public findNodeByName(node: any, attrName: string): any {
        return null;
    }

    willShow(data?) {
        this.mFormData = data;
        this.formComponents.forEach(item => {
            item.willShow(data);
        })
    }

    onShow(data) {
        this.formComponents.forEach(item => {
            item.onShow(data);
        })
    }

    willHide(data) {
        this.formComponents.forEach(item => {
            item.willHide(data);
        })
    }

    onHide(data) {
        this.formComponents.forEach(item => {
            item.onHide(data);
        })
    }



}