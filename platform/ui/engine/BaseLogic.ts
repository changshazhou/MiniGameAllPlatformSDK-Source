import BaseModule from "../../framework/BaseModule";


export default class BaseLogic extends BaseModule {


    /**
     * 初始化
     * @param logic 
     */
    initForm(logic) {
        this.initProperty(logic);
    }

    public mLogicData: any;


    /**
    * 父类缓存willShow，onShow传递到实体的逻辑数据
    */
    public get LogicData() {
        return this.mLogicData;
    }
    willShow(data?) {
        this.mLogicData = data;
        this.initPosition(data);
    }


    public initPosition(data) {

    }

    onShow(data) {

    }

    willHide(data) {

    }

    onHide(data) {

    }



}