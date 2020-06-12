import Common from "../utils/Common";

export default class BaseModule {
    protected moduleName: string = "";

    private mIntervalArr: Object = {};
    private mTimeoutArr: Object = {};
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
        this.mTimeoutArr[id] = callback;
    }
    public unscheduleOnce(callback) {
        for (let key in this.mTimeoutArr) {
            if (this.mTimeoutArr[key] === callback || Common.isEmpty(this.mTimeoutArr[key])) {
                clearTimeout(parseInt(key))
            }
        }
    }

    public initProperty(form) {
        for (let v in form) {
            if (this.hasOwnProperty(v)) {
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
            if (logic.willHide && logic.willShow) {
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