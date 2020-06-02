import BaseModule from "../../framework/BaseModule";
import Common from "../../utils/Common";
class FormModel {
    public name: string = "";
    public node: cc.Node = null;
    public UIForm: any = null;
    public zIndex: number = 0;
    constructor() {
        this.name = "";
        this.node = null;
        this.UIForm = null;
        this.zIndex = 0;
    }

}
/**
  * HASDO:
  * 1栈方式管理UI，
  * 2缓存UI
  * 3入栈（显示UI）
  * 4出栈（关闭UI）
  * 5关闭指定UI
  * 
  * TODO:
  * 1上层UI遮盖下层UI逻辑回调
  * 2设置label默认字体
  * 3按需清理缓存
  * 
  * ISSUE
  * 1由于UI是异步加载，导致UI栈顺序会错乱 (fixed)
  * 2连续push相同UI（待测试）
  */
export class BaseUIModule extends BaseModule {

    public rootCanvas = null;
    constructor() {
        super();
        this.layerIndex = 0;
        this.UIRoot = 'moosnow/prefab/ui/';     //定义resources目录下存放UI预设的目录
        this.UIFormStack = [];
        this.cachedUIForms = [];
        this.toastForm = null;
    }

    public layerIndex: number = 0;
    public UIRoot: string = "";
    public UIFormStack: Array<any> = [];
    public cachedUIForms: Array<any> = [];
    public toastForm: any = null;

    showToast(msg: string) {
        let self = this;
        if (self.toastForm == null) {
            this._createUINode('toastForm', 1000, (node, index) => {
                cc.Canvas.instance.node.addChild(node);
                self.toastForm = this._findComponent(node, "toastForm");
                node.zIndex = index;
                self.toastForm.show(msg);
            });
        } else {
            self.toastForm.show(msg);
        }
    }


    /**
     * 显示一个ui
     * @param {string} name  resources/UI目录下的预设名字 
     * @param {Object} data 携带的自定义数据
     * @param {Function} callback ui显示后回调:(formModel,data:Object)
     */
    pushUIForm(name, data?, callback?) {
        let self = this;
        let cachedFormModel = this._getUINodeFromCacheByName(name);
        if (cachedFormModel == null) {
            this._createUIFormModel(name, (formModel) => {
                self._showUIForm(formModel, data);
                if (callback) {
                    callback(formModel, data);
                }
            });
        } else {
            //缓存取出
            cachedFormModel.zIndex = this.layerIndex++;
            this.UIFormStack.push(cachedFormModel);
            this._showUIForm(cachedFormModel, data);
            if (callback) {
                callback(cachedFormModel, data);
            }
        }
    }
    /**
     * 从栈顶隐藏一个UI
     * @param {bool} destroy 是否销毁
     */
    pop(destroy: boolean = false, cb?: any) {
        if (this.UIFormStack.length == 0) return;
        let formModel = this.UIFormStack.pop();
        if (destroy) {
            this._destroyUIForm(formModel, null);
        }
        else {
            this._hideUIForm(formModel, null, cb);
        }

    }

    /**
    * 获取一个UIForm
    * @param {string} name 
    */
    getUIFrom(name: string) {
        for (let i = 0; i < this.UIFormStack.length; i++) {
            const formModel = this.UIFormStack[i];
            if (formModel.name == name) {
                return formModel.UIForm;
            }
        }
    }

    /**
     * 隐藏某个UI
     * @param {string} name 预设名
     * @param {any} data 携带的自定义数据
     */
    hideUIForm(name: string | cc.Component | Laya.Script, data: any, cb?: any) {

        if (name instanceof String) {
            for (let i = 0; i < this.UIFormStack.length; i++) {
                const formModel = this.UIFormStack[i];
                if (formModel.name == name) {
                    this._hideUIForm(formModel, data, cb);
                }
            }
        }
        else {
            for (let i = 0; i < this.UIFormStack.length; i++) {
                const formModel = this.UIFormStack[i];
                if (formModel == name) {
                    this._hideUIForm(formModel, data, cb);
                }
            }
        }


    }

    hideAllUIForm() {
        for (let i = this.UIFormStack.length - 1; i >= 0; i--) {
            const formModel = this.UIFormStack[i];
            this._hideUIForm(formModel, null);
        }
    }

    destroyUIForm(name: string, data: any) {
        for (let i = 0; i < this.UIFormStack.length; i++) {
            const formModel = this.UIFormStack[i];
            if (formModel.name == name) {
                this._destroyUIForm(formModel, data);
            }
        }
    }
    _formatUIFormName(name: string) {
        return name.replace(/\//g, "_")
    }
    /**
     * 实例化resource下ui目录的prefab
     * @param {Int} formId 层级
     * @param {string} name resources下的路径   
     * @param {Function} callback 参数 node
     */
    _createUINode(name: string, formId: number, callback: Function) {
        let path = this.UIRoot + name;
        cc.loader.loadRes(path, cc.Prefab, (err, prefab) => {
            var formNode = cc.instantiate(prefab);
            if (callback) callback(formNode, formId);
        });
    }

    /**
     * 创建一个formModel
     * @param {string} name  
     * @param {Function} callback (node, index)
     */
    _createUIFormModel(name: string, callback: Function) {
        //防止异步加载UI层级错乱方案
        //1异步加载预设前初始化一个model,记录将要加载的预设名以及zindex
        //2异步时传入该zindex，在加载完成时回调返回该zindex
        //3循环匹配UIStack，判断取出zindex和name相等的model，赋值UIForm和node
        let self = this;
        let formModel = new FormModel();
        formModel.name = name;
        let formId = this.layerIndex++;
        formModel.zIndex = formId;
        this.UIFormStack.push(formModel);

        this._createUINode(name, formId, (node: cc.Node, index) => {
            for (let i = 0; i < self.UIFormStack.length; i++) {
                const tempFormModel = self.UIFormStack[i];
                if (tempFormModel.zIndex == index && tempFormModel.name == node.name) {
                    if (node == null) {
                        this._removeStack(i);
                        return;
                    } else {

                        let form = this._findComponent(node, "UIForm");
                        form.formName = name;
                        tempFormModel.UIForm = form;
                        tempFormModel.node = node;
                        if (callback) {
                            callback(formModel);
                        }
                        return;
                    }
                }
            }
        });
    }


    _getUINodeFromCacheByName(name: string) {
        for (let i = 0; i < this.cachedUIForms.length; i++) {
            const element = this.cachedUIForms[i];
            if (element.node != null && element.name == name) {
                this.cachedUIForms.splice(i, 1);
                return element;
            }
        }
        return null;
    }

    _showUIForm(formModel: FormModel, data: any) {

        cc.Canvas.instance.node.addChild(formModel.node);
        formModel.UIForm.willShow(data);
        formModel.node.active = true;
        if (data && !isNaN(data.zIndex))
            formModel.node.zIndex = data.zIndex;
        else
            formModel.node.zIndex = formModel.zIndex;

        formModel.UIForm.onShow(data);
        if (formModel.UIForm.isPopEffect) {
            let owner = formModel.node;
            Common.popOpenAnim(owner);
        }
    }

    _hideUIForm(formModel: FormModel, data: any, cb?: any) {
        formModel.UIForm.willHide(data);
        formModel.UIForm.onHide(data);
        this._removeStack(formModel)
        this.cachedUIForms.push(formModel);
        if (formModel.UIForm.isPopEffect) {
            let owner = formModel.node;
            Common.popCloseAnim(owner, () => {
                formModel.node.active = false;
                formModel.node.removeFromParent(false);
                // formModel.node.removeSelf();
                if (cb)
                    cb();
            })
        } else {
            formModel.UIForm.hideAnim(() => {
                formModel.node.active = false;
                formModel.node.removeFromParent(false);
                // formModel.node.removeSelf();
                if (cb)
                    cb();
            })
        }
    }

    _destroyUIForm(formModel: FormModel, data: any) {
        formModel.UIForm.willHide(data);
        formModel.node.removeFromParent();
        formModel.UIForm.onHide(data);
        formModel.node.active = false;
        this._removeStack(formModel)
        formModel.node.destroy();
    }
    _removeStack(removeItem: any) {
        if (isNaN(removeItem)) {
            this.UIFormStack.forEach((item, idx) => {
                if (item == removeItem) {
                    this.UIFormStack.splice(idx, 1);
                }
            })
        }
        else
            this.UIFormStack.splice(removeItem, 1);
    }
}