import BaseModule from "../../framework/BaseModule";
export default class BaseForm extends BaseModule {
    mFormData: any;
    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    get FormData(): any;
    /**
     * 初始化
     * @param logic
     */
    initForm(logic: any): void;
    willShow(data?: any): void;
    onShow(data: any): void;
    willHide(data: any): void;
    onHide(data: any): void;
}
