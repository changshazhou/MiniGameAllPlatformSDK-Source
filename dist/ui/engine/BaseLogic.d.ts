import BaseModule from "../../framework/BaseModule";
export default class BaseLogic extends BaseModule {
    /**
     * 初始化
     * @param logic
     */
    initForm(logic: any): void;
    mLogicData: any;
    /**
    * 父类缓存willShow，onShow传递到实体的逻辑数据
    */
    get LogicData(): any;
    willShow(data?: any): void;
    initPosition(data: any): void;
    onShow(data: any): void;
    willHide(data: any): void;
    onHide(data: any): void;
}
