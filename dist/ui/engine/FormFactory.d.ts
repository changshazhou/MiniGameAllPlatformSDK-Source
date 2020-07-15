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
    getLayout(url: string, callback: (attr: any) => void): void;
    showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, remoteLayout?: boolean, layoutOptions?: any): void;
    hideForm(name: string, formNode: any, formData?: any): void;
}
