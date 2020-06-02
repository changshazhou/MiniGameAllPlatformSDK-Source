import BaseModule from "../../framework/BaseModule";

const { ccclass, property } = cc._decorator;
@ccclass
export default class BaseForm extends BaseModule {

    private mIntervalArr: Object = {};
    public schedule(callback: Function, time: number) {
        let id = setInterval(() => {
            if (callback)
                callback()
        }, time * 1000)
        this.mIntervalArr[id] = callback;
    }
    public unschedule(callback) {
        for (let key in this.mIntervalArr) {
            if (this.mIntervalArr[key] === callback || Common.isEmpty(this.mIntervalArr[key])) {
                clearInterval(parseInt(key))
            }
        }
    }

    public initProperty(form) {
        for (let v in form) {
            if (v.indexOf("m") != 0 && (form[v] instanceof cc.Node || form[v] instanceof cc.Component)) {
                this[v] = form[v];
            }
        }
    }
}