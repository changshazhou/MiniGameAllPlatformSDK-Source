import BaseModule from "../../framework/BaseModule";
import Common from "../../utils/Common";
import EventType from "../../utils/PLATFORM_EVENT";


export default class BaseForm extends BaseModule {

    private mOwner: any = null;
    public get node() {
        if (this.mOwner)
            return this.mOwner
        else
            return {}
    }
    public set node(value) {
        this.mOwner = value;
    }
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
        if (data && this.node) {
            if (data.x)
                this.node.x = data.x
            if (data.y)
                this.node.y = data.y
            if (data.zIndex)
                this.node.zIndex = data.zIndex
        }
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

    public hideForm() {
        moosnow.form.formFactory.hideFormByLogic(this)
    }

}