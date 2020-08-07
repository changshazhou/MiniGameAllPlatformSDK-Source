import BaseModule from "../../framework/BaseModule";
export default class BaseForm extends BaseModule {
    node: any;
    mFormData: any;
    start(): void;
    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    get FormData(): any;
    formComponents: Array<any>;
    private mNodeMap;
    /**
     * 初始化
     * @param node
     */
    initForm(node: any): void;
    disable(): void;
    findNodeByName(node: any, attrName: string): any;
    willShow(data?: any): void;
    onShow(data: any): void;
    willHide(data: any): void;
    onHide(data: any): void;
    hideForm(): void;
}
