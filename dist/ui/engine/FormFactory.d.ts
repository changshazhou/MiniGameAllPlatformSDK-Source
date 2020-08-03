import BaseForm from "./BaseForm";
/**
 * UI节点和逻辑
 */
export declare class LayoutFormKeyValue {
    formNode: cc.Node | Laya.Node;
    formLogic: BaseForm;
}
/**
 * 节点缓存
 */
export declare class LayoutFormQuene {
    formName: string;
    mQuene: Array<LayoutFormKeyValue>;
    /**
     * 节点队列
     */
    get quene(): LayoutFormKeyValue[];
    set quene(value: LayoutFormKeyValue[]);
}
export default class FormFactory {
    layoutUrl: string;
    templatesUrl: string;
    private mFormQuene;
    get layoutQuene(): LayoutFormQuene[];
    set layoutQuene(value: LayoutFormQuene[]);
    private mCachedLayoutQuene;
    get cachedLayoutQuene(): LayoutFormQuene[];
    set cachedLayoutQuene(value: LayoutFormQuene[]);
    private addFrom2Cached;
    /**
     * 从缓存中取form
     * @param name
     */
    getFormFromCached(name: any): LayoutFormKeyValue;
    /**
     * 添加Form节点到队列
     * @param name
     * @param formNode
     * @param formLogic
     */
    addForm2Quene(name: string, formNode: cc.Node | Laya.Node, formLogic?: BaseForm): void;
    /**
     * 根据逻辑类回收
     * @param item
     * @param idx
     * @param callback
     * @param num
     */
    private recoverFormLogic;
    removeFormByLogic(logic: BaseForm, callback: (formKV: LayoutFormKeyValue) => void): void;
    /**
     * 从队列里移除Form
     * @param name
     * @param formNode
     */
    removeFormFromQuene(name: string, formKV: LayoutFormKeyValue, callback?: (formKV: LayoutFormKeyValue) => void): void;
    /**
     * 从队列里移除所有
     * @param name
     */
    removeAllFormFromQuene(name: string, callback?: (formKV: LayoutFormKeyValue) => void): void;
    /**
     * 根据名称和节点获取 FormKeyValue
     * @param name
     * @param formNode
     */
    getKVByName(name: string, formNode: cc.Node | Laya.Node): LayoutFormKeyValue;
    getKVsByName(name: string): LayoutFormKeyValue[];
    private mLayoutQuene;
    private mCachedLayout;
    getLayout(callback: (attr: any) => void): void;
    private mTemplatesQuene;
    private mCachedTemplates;
    getTemplates(callback: (attr: any) => void): void;
    getTemplate(tempName: string, callback?: Function): void;
    showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, callback?: Function, remoteLayout?: boolean, layoutOptions?: any): void;
    hideFormByLogic(logic: any, callback?: (formKV: any) => void): void;
    hideForm(name: string, formNode: any, formData?: any): void;
    createNodeByTemplate(name: string, tempLogic?: any, tempData?: any, parent?: cc.Node, remoteLayout?: boolean, layoutOptions?: any): void;
    hideNodeByTemplate(name: string, formNode: any, formData?: any): void;
}
