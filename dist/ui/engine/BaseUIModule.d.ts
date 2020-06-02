import BaseModule from "../../framework/BaseModule";
declare class FormModel {
    name: string;
    node: cc.Node;
    UIForm: any;
    zIndex: number;
    constructor();
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
export declare class BaseUIModule extends BaseModule {
    rootCanvas: any;
    constructor();
    layerIndex: number;
    UIRoot: string;
    UIFormStack: Array<any>;
    cachedUIForms: Array<any>;
    toastForm: any;
    showToast(msg: string): void;
    /**
     * 显示一个ui
     * @param {string} name  resources/UI目录下的预设名字
     * @param {Object} data 携带的自定义数据
     * @param {Function} callback ui显示后回调:(formModel,data:Object)
     */
    pushUIForm(name: any, data?: any, callback?: any): void;
    /**
     * 从栈顶隐藏一个UI
     * @param {bool} destroy 是否销毁
     */
    pop(destroy?: boolean, cb?: any): void;
    /**
    * 获取一个UIForm
    * @param {string} name
    */
    getUIFrom(name: string): any;
    /**
     * 隐藏某个UI
     * @param {string} name 预设名
     * @param {any} data 携带的自定义数据
     */
    hideUIForm(name: string | cc.Component | Laya.Script, data: any, cb?: any): void;
    hideAllUIForm(): void;
    destroyUIForm(name: string, data: any): void;
    _formatUIFormName(name: string): string;
    /**
     * 实例化resource下ui目录的prefab
     * @param {Int} formId 层级
     * @param {string} name resources下的路径
     * @param {Function} callback 参数 node
     */
    _createUINode(name: string, formId: number, callback: Function): void;
    /**
     * 创建一个formModel
     * @param {string} name
     * @param {Function} callback (node, index)
     */
    _createUIFormModel(name: string, callback: Function): void;
    _getUINodeFromCacheByName(name: string): any;
    _showUIForm(formModel: FormModel, data: any): void;
    _hideUIForm(formModel: FormModel, data: any, cb?: any): void;
    _destroyUIForm(formModel: FormModel, data: any): void;
    _removeStack(removeItem: any): void;
}
export {};
