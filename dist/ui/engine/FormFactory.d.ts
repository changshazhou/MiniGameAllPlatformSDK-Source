import BaseForm from "./BaseForm";
export declare class FormKeyValue {
    formNode: any;
    formLogic: BaseForm;
    constructor(formNode: any, formLogic: any);
}
export declare class FormQuene {
    constructor(name: any, formNode: any, formLogic: any);
    formName: string;
    quene: Array<FormKeyValue>;
    addForm(formNode: any, formLogic: any): void;
    addFormKV(kv: FormKeyValue): void;
}
export default class FormFactory {
    static mInstance: FormFactory;
    static get instance(): FormFactory;
    private static _FormQuene;
    static get formQuene(): FormQuene[];
    private static _CachedQuene;
    static cachedQuene(): FormQuene[];
    private static addFrom2Cached;
    /**
     * 从缓存中取form
     * @param name
     */
    static getFormFromCached(name: any): FormKeyValue;
    /**
     * 添加Form节点到队列
     * @param name
     * @param formNode
     * @param formLogic
     */
    static addForm2Quene(name: string, formNode: any, formLogic?: BaseForm): void;
    /**
     * 根据逻辑类回收
     * @param item
     * @param idx
     * @param callback
     * @param num
     */
    private static recoverFormLogic;
    static removeFormByLogic(logic: BaseForm, callback: (formKV: FormKeyValue) => void): void;
    /**
     * 从队列里移除Form
     * @param name
     * @param formNode
     */
    static removeFormFromQuene(name: string, formKV: FormKeyValue, callback?: (formKV: FormKeyValue) => void): void;
    /**
     * 从队列里移除所有
     * @param name
     */
    static removeAllFormFromQuene(name: string, callback?: (formKV: FormKeyValue) => void): void;
    private mLayoutQuene;
    private mCachedLayout;
    getLayout(url: string, callback: (attr: any) => void): void;
    private mTemplatesQuene;
    private mCachedTemplates;
    getTemplates(url: string, callback: (attr: any) => void): void;
    showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, remoteLayout?: boolean, layoutOptions?: any): void;
    hideFormByLogic(logic: BaseForm, callback?: (formKV: any) => void): void;
    hideForm(name: string, formNode: any, formData?: any): void;
    createNodeByTemplate(name: string, tempLogic?: any, tempData?: any, parent?: cc.Node, remoteLayout?: boolean, layoutOptions?: any): void;
    hideNodeByTemplate(name: string, formNode: any, formData?: any): void;
}
