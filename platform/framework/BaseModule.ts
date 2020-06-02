import Common from "../utils/Common";

export default class BaseModule {
    protected moduleName: string = "";

    private mIntervalArr: Object = {};
    public schedule(callback: Function, time: number) {
        let self = this;
        let id = setInterval(() => {
            if (callback)
                callback.apply(self)
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

    public scheduleOnce(callback: Function, time: number) {
        let self = this;
        let id = setTimeout(() => {
            clearTimeout(id);
            if (callback)
                callback.apply(self)

        }, time * 1000)
    }

    public initProperty(form) {
        for (let v in form) {
            if (v.indexOf("m") != 0 && (form[v] instanceof cc.Node || form[v] instanceof cc.Component)) {
                this[v] = form[v];
            }
        }
    }

    public preload(url, callback) {
        if (callback)
            callback();
    }

    /**
     * 
     */
    _findComponent(node, classname) {
        let retValue = null;
        for (let i = 0; i < node._components.length; i++) {
            let logic = node._components[i];
            if (this._findComponentByName(logic.constructor, classname)) {
                retValue = logic;
                break;
            }
        }
        return retValue;
    }
    _findComponentByName(instance, classname) {
        if (instance) {
            if (instance.name == classname)
                return true
            else
                return this._findComponentByName(instance.$super, classname)
        }
        return false;
    }
}