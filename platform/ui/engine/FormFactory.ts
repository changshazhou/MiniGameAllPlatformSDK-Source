import BaseForm from "./BaseForm";
import { ROOT_CONFIG } from "../../config/ROOT_CONFIG";
import Common from "../../utils/Common";
import NodeAttribute from "../attribute/NodeAttribute";

/**
 * UI节点和逻辑
 */
export class LayoutFormKeyValue {

    public formNode: cc.Node | Laya.Node = null;
    public formLogic: BaseForm = null;

    // constructor(formNode, formLogic) {
    //     this.formNode = formNode;
    //     this.formLogic = formLogic;
    // }
}
/**
 * 节点缓存
 */
export class LayoutFormQuene {
    // constructor(name, formNode, formLogic) {
    //     this.formName = name;
    //     // this.quene.push(new LayoutFormKeyValue(formNode, formLogic))
    // }
    formName: string = "";
    mQuene: Array<LayoutFormKeyValue> = [];
    /**
     * 节点队列
     */
    public get quene() {
        return this.mQuene;
    }
    public set quene(value) {
        // debugger
        this.mQuene = value
    }
    // public addForm(formNode, formLogic) {
    //     this.quene.push(new LayoutFormKeyValue(formNode, formLogic));
    // }
    // public addFormKV(kv: LayoutFormKeyValue) {
    //     this.quene.push(kv);
    // }
}
export default class FormFactory {

    public layoutUrl = `${ROOT_CONFIG.HTTP_ROOT}/layout/${Common.config.moosnowAppId}/layout.json`;
    public templatesUrl = `${ROOT_CONFIG.HTTP_ROOT}/layout/${Common.config.moosnowAppId}/templates.json`;


    private mFormQuene: Array<LayoutFormQuene> = [];
    public get layoutQuene() {
        return this.mFormQuene;
    };

    public set layoutQuene(value) {
        this.mFormQuene = value;
    }

    private mCachedLayoutQuene: Array<LayoutFormQuene> = [];
    public get cachedLayoutQuene() {
        return this.mCachedLayoutQuene;
    }
    public set cachedLayoutQuene(value) {
        this.mCachedLayoutQuene = value;
    }

    private addFrom2Cached(name: string, formKV: LayoutFormKeyValue) {
        let cacheIdx: number = -1;
        for (let i = 0; i < this.cachedLayoutQuene.length; i++) {
            let item = this.cachedLayoutQuene[i];
            if (item.formName == name) {
                cacheIdx = i;
                break;
            }
        }
        if (cacheIdx != -1) {
            this.cachedLayoutQuene[cacheIdx].quene.push(formKV);
        }
        else {
            let item = new LayoutFormQuene()
            item.formName = name;
            item.quene.push(formKV)
            this.cachedLayoutQuene.push(item);
        }

    }

    /**
     * 从缓存中取form
     * @param name 
     */
    public getFormFromCached(name) {
        for (let i = 0; i < this.cachedLayoutQuene.length; i++) {
            let item = this.cachedLayoutQuene[i];
            if (item.formName == name) {
                for (let j = 0; j < item.quene.length; j++) {
                    let cacheForm = item.quene.splice(j, 1);
                    if (item.quene.length == 0) {
                        this.cachedLayoutQuene.splice(i, 1)
                    }
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
    public addForm2Quene(name: string, formNode: cc.Node | Laya.Node, formLogic?: BaseForm) {

        let idx = -1;
        for (let i = 0; i < this.layoutQuene.length; i++) {
            let item = this.layoutQuene[i];
            if (item.formName == name) {
                idx = i
                break;
            }
        }
        // console.log('addForm2Quene 1 ', this._FormQuene)
        if (idx != -1) {
            let kv = new LayoutFormKeyValue();
            kv.formNode = formNode;
            kv.formLogic = formLogic;
            this.layoutQuene[idx].quene.push(kv);
        }
        else {
            let quene = new LayoutFormQuene();
            quene.formName = name;
            let kv = new LayoutFormKeyValue();
            kv.formNode = formNode;
            kv.formLogic = formLogic;
            quene.quene.push(kv)
            this.layoutQuene.push(quene);
        }

        // console.log('addForm2Quene 2 ', this._FormQuene)
    }
    /**
     * 根据逻辑类回收
     * @param item 
     * @param idx 
     * @param callback 
     * @param num 
     */
    private recoverFormLogic(item: LayoutFormQuene, idx, callback: (formKV: LayoutFormKeyValue | Array<LayoutFormKeyValue>) => void, num: number = 1) {
        let formKVs = item.quene.splice(idx, num);
        if (item.quene.length == 0) {
            for (let i = 0; i < this.layoutQuene.length; i++) {
                if (item == this.layoutQuene[i]) {
                    this.layoutQuene.splice(i, 1)
                    break;
                }
            }
        }
        formKVs.forEach(formKV => {
            this.addFrom2Cached(item.formName, formKV);
        })
        if (callback) {
            if (formKVs.length == 1)
                callback(formKVs[0])
            else
                callback(formKVs)
        }
    }

    public removeFormByLogic(logic: BaseForm, callback: (formKV: LayoutFormKeyValue) => void) {
        for (let i = 0; i < this.layoutQuene.length; i++) {
            let item = this.layoutQuene[i];
            for (let j = 0; j < item.quene.length; j++) {
                if (item.quene[j].formLogic == logic) {
                    this.recoverFormLogic(item, j, callback);
                    break;
                }
            }
        }
    }

    /**
     * 从队列里移除Form
     * @param name 
     * @param formNode 
     */
    public removeFormFromQuene(name: string, formKV: LayoutFormKeyValue, callback?: (formKV: LayoutFormKeyValue) => void) {
        for (let i = 0; i < this.layoutQuene.length; i++) {
            let item = this.layoutQuene[i];
            if (item.formName == name) {
                for (let j = 0; j < item.quene.length; j++) {
                    if (item.quene[j] == formKV) {
                        this.recoverFormLogic(item, j, callback);
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
    public removeAllFormFromQuene(name: string, callback?: (formKV: LayoutFormKeyValue) => void) {
        for (let i = 0; i < this.layoutQuene.length; i++) {
            let item = this.layoutQuene[i];
            if (item.formName == name) {
                for (let j = 0; j < item.quene.length; j++) {
                    this.recoverFormLogic(item, j, callback);
                    j--;
                }
                break;
            }
        }
    }
    private mLayoutQuene = [];
    private mCachedLayout: any;
    public getLayout(callback: (attr) => void) {
        if (!this.mCachedLayout) {
            this.mLayoutQuene.push(callback);
            if (this.mLayoutQuene.length == 1)
                moosnow.http.request(this.layoutUrl, {}, 'GET', (res) => {
                    this.mCachedLayout = res;
                    console.log('getLayout call num ', this.mLayoutQuene.length)
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
    public getTemplates(callback: (attr) => void) {
        if (!this.mCachedTemplates) {
            this.mTemplatesQuene.push(callback);
            if (this.mTemplatesQuene.length == 1)
                moosnow.http.request(this.templatesUrl, {}, 'GET', (res) => {
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

    public getTemplate(tempName: string, callback?: Function) {
        this.getTemplates((res) => {
            let tempCfg = res[tempName]
            if (tempCfg) {
                let formCfg = NodeAttribute.parse(tempCfg);
                callback(formCfg)
            }
        })
    }

    public showForm(name: string, formLogic?: typeof BaseForm, formData?: any, parent?: cc.Node, callback?: Function, remoteLayout: boolean = true, layoutOptions: any = null) {

    }

    public hideFormByLogic(logic: any, callback?: (formKV) => void) {

    }

    public hideForm(name: string, formNode: any, formData?: any) {

    }

    public createNodeByTemplate(name: string, tempLogic?: any, tempData?: any, parent?: cc.Node, remoteLayout: boolean = true, layoutOptions: any = null) {

    }

    public hideNodeByTemplate(name: string, formNode: any, formData?: any) {

    }

}