import BaseModule from "../../framework/BaseModule";


export default class BaseLogic extends BaseModule {

    private mLogicData: any;


    /**
    * 父类缓存willShow，onShow传递到实体的逻辑数据
    */
    public get LogicData() {
        return this.mLogicData;
    }
    willShow(data?) {
        this.mLogicData = data;
    }

    onShow(data) {

    }

    willHide(data) {

    }

    onHide(data) {

    }



}