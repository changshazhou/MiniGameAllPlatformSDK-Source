import BaseModule from "../../framework/BaseModule";


export default class BaseForm extends BaseModule {

    public mFormData: any;


    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    public get FormData() {

        return this.mFormData;
    }
    /**
     * 初始化
     * @param logic 
     */
    initForm(logic) {
        this.initProperty(logic);
    }

    willShow(data?) {
        this.mFormData = data;
    }

    onShow(data) {

    }

    willHide(data) {

    }

    onHide(data) {

    }



}