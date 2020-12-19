import Common from "../utils/Common";

export default class BaseModule {
    protected moduleName: string = "";


    private static mIntervalArr: Object = {};
    private static mTimeoutArr: Object = {};
    private static mScheduleIndex: number = 0;
    private mIntervalArr: Object = {};
    private mTimeoutArr: Object = {};
    private mScheduleIndex: number = 0;

    private mMaping = {}

    public schedule(callback: Function, time: number, ...arg) {
        let self = this;
        // this.mMaping[this.mScheduleIndex] = callback;
        let handle = setInterval(() => {
            if (callback)
                callback.apply(self, ...arg);
        }, time * 1000, self);
        this.mIntervalArr[this.mScheduleIndex] = {
            handle,
            callback
        };
        this.mScheduleIndex++;
    }
    public unschedule(callback) {
        for (let idx in this.mIntervalArr) {
            if (this.mIntervalArr[idx].callback == callback) {
                clearInterval(parseInt(this.mIntervalArr[idx].handle))
            }
        }
    }

    public scheduleOnce(callback: Function, time: number, ...arg) {
        let self = this;
        let handle = setTimeout(() => {
            clearTimeout(handle);
            if (callback)
                callback.apply(self, ...arg);
        }, time * 1000)
        this.mTimeoutArr[this.mScheduleIndex] = {
            handle,
            callback
        };
        this.mScheduleIndex++;
    }
    public unscheduleOnce(callback) {
        for (let idx in this.mTimeoutArr) {
            if (this.mTimeoutArr[idx].callback == callback) {
                clearInterval(parseInt(this.mTimeoutArr[idx].handle))
            }
        }
    }

    public static schedule(callback: Function, time: number, ...arg) {
        let self = this;
        // this.mMaping[this.mScheduleIndex] = callback;
        let handle = setInterval(() => {
            if (callback)
                callback.apply(self, ...arg);
        }, time * 1000, self);
        this.mIntervalArr[this.mScheduleIndex] = {
            handle,
            callback
        };
        this.mScheduleIndex++;
    }
    public static unschedule(callback) {
        for (let idx in this.mIntervalArr) {
            if (this.mIntervalArr[idx].callback == callback) {
                clearInterval(parseInt(this.mIntervalArr[idx].handle))
            }
        }
    }

    public static scheduleOnce(callback: Function, time: number) {
        let self = this;
        let handle = setTimeout(() => {
            clearTimeout(handle);
            if (callback)
                callback.apply(self)

        }, time * 1000)
        this.mTimeoutArr[this.mScheduleIndex] = {
            handle,
            callback
        };
        this.mScheduleIndex++;
    }
    public static unscheduleOnce(callback) {
        for (let idx in this.mTimeoutArr) {
            if (this.mTimeoutArr[idx].callback == callback) {
                clearInterval(parseInt(this.mTimeoutArr[idx].handle))
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