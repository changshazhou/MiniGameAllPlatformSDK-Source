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
        let formQuene: FormQuene = null;
        for (let i = 0; i < this._FormQuene.length; i++) {
            let item = this._FormQuene[i];
            if (item.formName == name) {
                formQuene = item;
                break;
            }
        }
        if (formQuene)
            formQuene.addForm(formNode, formLogic)
        else
            this._FormQuene.push(new FormQuene(name, formNode, formLogic));
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


    public getLayout(url: string, callback: (attr) => void) {
        moosnow.http.request(url, {}, 'GET', (res) => {
            callback(res)
        })
    }

    public showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, remoteLayout: boolean = true, layoutOptions: any = null) {

    }





}