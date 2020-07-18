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


    public formComponents: Array<any> = [];
    private mComponentQuene = [];

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
            let componentLogic = new this.formComponents[i]();
            this.mComponentQuene.push(componentLogic)
            componentLogic.initForm(node);
        }
    }

    disable() {
        this.node = null;
        this.mNodeMap.forEach(v => {
            this[v] = null;
        })
        this.mComponentQuene.forEach(item => {
            item.disable();
        })
        this.mComponentQuene = [];
        this.formComponents = [];
    }

    public findNodeByName(node: any, attrName: string): any {
        return null;
    }

    willShow(data?) {
        this.mFormData = data;
        this.mComponentQuene.forEach(item => {
            item.willShow(data);
        })
    }

    onShow(data) {
        this.mComponentQuene.forEach(item => {
            item.onShow(data);
        })
    }

    willHide(data) {
        this.mComponentQuene.forEach(item => {
            item.willHide(data);
        })
    }

    onHide(data) {
        this.mComponentQuene.forEach(item => {
            item.onHide(data);
        })
    }



}