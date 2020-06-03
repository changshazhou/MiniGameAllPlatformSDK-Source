import BaseModule from "../../framework/BaseModule";
export default class BaseLogic extends BaseModule {
    private mLogicData;
    /**
    * 父类缓存willShow，onShow传递到实体的逻辑数据
    */
    get LogicData(): any;
    willShow(data?: any): void;
    onShow(data: any): void;
    willHide(data: any): void;
    onHide(data: any): void;
}
