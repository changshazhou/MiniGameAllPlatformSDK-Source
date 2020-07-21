import BaseForm from "./BaseForm";

export class FormKeyValue {

    public formNode: any = null;
    public formLogic: BaseForm = null;

    constructor(formNode, formLogic) {
        this.formNode = formNode;
        this.formLogic = formLogic;
    }
}

export class FormQuene {
    constructor(name, formNode, formLogic) {
        this.formName = name;
        this.quene.push(new FormKeyValue(formNode, formLogic))
    }
    formName: string = "";
    quene: Array<FormKeyValue> = [];
    public addForm(formNode, formLogic) {
        this.quene.push(new FormKeyValue(formNode, formLogic));
    }
    public addFormKV(kv: FormKeyValue) {
        this.quene.push(kv);

    }
}
export default class FormFactory {

    public static mInstance: FormFactory = null;
    public static get instance() {
        if (!this.mInstance)
            this.mInstance = new FormFactory()
        return this.mInstance;
    }

    private static _FormQuene: Array<FormQuene> = [];
    public static get formQuene() {
        return this._FormQuene;
    };

    private static _CachedQuene: Array<FormQuene> = [];
    public static cachedQuene() {
        return this._CachedQuene;
    }

    private static addFrom2Cached(name: string, formKV: FormKeyValue) {
        let cacheQuene: FormQuene = null;
        for (let i = 0; i < this._CachedQuene.length; i++) {
            let item = this._CachedQuene[i];
            if (item.formName == name) {
                cacheQuene = item;
                break;
            }
        }
        if (cacheQuene)
            cacheQuene.addFormKV(formKV)
        else
            this._CachedQuene.push(new FormQuene(name, formKV.formNode, formKV.formLogic));
    }

    /**
     * 从缓存中取form
     * @param name 
     */
    public static getFormFromCached(name) {
        for (let i = 0; i < this.formQuene.length; i++) {
            let item = this.formQuene[i];
            if (item.formName == name) {
                for (let j = 0; j < item.quene.length; j++) {
                    item.quene.splice(j, 1)
                    return item.quene[j];
                }
                break;
            }
        }
        return null;
    }
    /**
     * 添加Form节点到队列
     * @param name 
     * @param formNode 
     * @param formLogic 
     */
    public static addForm2Quene(name: string, formNode: any, formLogic?: BaseForm) {

        let idx = -1;
        for (let i = 0; i < this._FormQuene.length; i++) {
            let item = this._FormQuene[i];
            if (item.formName == name) {
                idx = i
                break;
            }
        }
        console.log('addForm2Quene 1 ', this._FormQuene)
        if (idx != -1) {
            this._FormQuene[idx].addForm(formNode, formLogic);
        }
        else
            this._FormQuene.push(new FormQuene(name, formNode, formLogic));

        console.log('addForm2Quene 2 ', this._FormQuene)
    }

    /**
     * 从队列里移除Form
     * @param name 
     * @param formNode 
     */
    public static removeFormFromQuene(name: string, formKV: FormKeyValue, callback?: (formKV: FormKeyValue) => void) {
        for (let i = 0; i < this.formQuene.length; i++) {
            let item = this.formQuene[i];
            if (item.formName == name) {
                for (let j = 0; j < item.quene.length; j++) {
                    if (item.quene[j] == formKV) {
                        item.quene.splice(j, 1);
                        this.addFrom2Cached(name, formKV);
                        if (callback)
                            callback(formKV)
                        break;
                    }
                }
                break;
            }
        }
    }
    /**
     * 从队列里移除所有
     * @param name 
     */
    public static removeAllFormFromQuene(name: string, callback?: (formKV: FormKeyValue) => void) {
        for (let i = 0; i < this.formQuene.length; i++) {
            let item = this.formQuene[i];
            if (item.formName == name) {
                for (let j = 0; j < item.quene.length; j++) {
                    let formKeyValue = item.quene[j];
                    item.quene.splice(j, 1);
                    this.addFrom2Cached(name, formKeyValue);
                    if (callback)
                        callback(formKeyValue)
                    j--;
                }
                break;
            }
        }
    }
    private mLayoutQuene = [];
    private mCachedLayout: any;
    public getLayout(url: string, callback: (attr) => void) {
        if (!this.mCachedLayout) {
            this.mLayoutQuene.push(callback);
            if (this.mLayoutQuene.length == 1)
                moosnow.http.request(url, {}, 'GET', (res) => {
                    this.mCachedLayout = res;
                    this.mLayoutQuene.forEach(item => {
                        item(res)
                    })
                    this.mLayoutQuene = [];
                })

        }
        else
            callback(this.mCachedLayout);
    }

    private mTemplatesQuene = [];
    private mCachedTemplates: any;
    public getTemplates(url: string, callback: (attr) => void) {
        if (!this.mCachedTemplates) {
            this.mTemplatesQuene.push(callback);
            if (this.mTemplatesQuene.length == 1)
                moosnow.http.request(url, {}, 'GET', (res) => {
                    this.mCachedTemplates = res;
                    this.mTemplatesQuene.forEach(item => {
                        item(res)
                    })
                    this.mTemplatesQuene = [];
                })

        }
        else
            callback(this.mCachedTemplates);
    }

    public showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, remoteLayout: boolean = true, layoutOptions: any = null) {

    }

public hideForm(name: string, formNode: any, formData?: any) {

    }

    public createNodeByTemplate(name: string, tempLogic?: any, tempData?: any, parent?: cc.Node, remoteLayout: boolean = true, layoutOptions: any = null) {

    }

    public hideNodeByTemplate(name: string, formNode: any, formData?: any) {

    }

}