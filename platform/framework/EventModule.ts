
import BaseModule from "./BaseModule";
import ArrayUtil from "../utils/ArrayUtil";
export default class EventModule extends BaseModule {

    constructor() {
        super();
        //监听列表
        this._eventList = [];
        //待发送队列
        this._waitingForSendList = [];
    }
    private _eventList: Array<MLEvent> = [];
    private _waitingForSendList: Array<any> = [];


    /**
    * 添加一个监听者
    * @param {string} eventName 监听的事件名
    * @param {typeof Class} target 监听者
    * @param {Function} callback 监听事件触发后的回调
    */
    addListener(eventName, target, callback) {
        this._addListener(eventName, target, false, callback);
    }

    /**
     * 将事件添加到发送队列里在update里发送
     * @param {string} eventName 要发送的事件名
     * @param {any} data 要发送的自定义数据
     */
    addToSendQueue(eventName, data) {
        this._addToSendList(eventName, data);
    }

    /**
     * 当前帧立即发送一个事件
     * @param {String} eventName 事件名
     * @param {any} data 自定义数据
     */
    sendEventImmediately(eventName, data) {
        this._sendEvent(eventName, data);
        this.onUpdate();
    }

    /**
     * 移除一个监听者
     * @param {string} eventName 事件名
     * @param {any} target 监听者
     */
    removeListener(eventName, target) {
        var isEventNameAvailable = eventName != null && eventName != '';
        if (!isEventNameAvailable) {
            console.error('eventName:' + eventName + '不合法！');
            return;
        }
        for (let i = 0; i < this._eventList.length; i++) {
            let event: MLEvent = this._eventList[i];
            if (event.eventName === eventName) {
                for (let j = 0; j < event.listeners.length; j++) {
                    let listener = event.listeners[j];
                    if (listener.target === target) {
                        ArrayUtil.remove(event.listeners, listener)
                        break;
                    }
                }
                if (event.listeners.length == 0) {
                    ArrayUtil.remove(this._eventList, event)
                }
                break;
            }
        }
    }

    /**
     * 移除所有监听者
     */
    removeAllListener() {
        this._eventList.length = 0;
        this._eventList = [];
        this._waitingForSendList.length = 0;
        this._waitingForSendList = [];
    }

    _addListener(eventName, target, once, callback) {
        var isEventNameAvailable = eventName != null && eventName != '';
        if (!isEventNameAvailable) {
            console.error('eventName:' + eventName + '不合法！');
            return;
        }
        let listener = new MListener();
        callback instanceof Function ? listener.callback = callback : console.error('callback不是一个方法');
        target ? listener.target = target : console.error('target为空');
        listener.once = once;
        let hasSameEvent = false;
        if (this._eventList.length > 0) {
            for (let i = 0; i < this._eventList.length; i++) {
                let tempEvent = this._eventList[i];
                //判断是否已经有相同事件
                if (eventName === tempEvent.eventName) {
                    //有相同事件，则增加监听者
                    tempEvent.listeners.push(listener);
                    hasSameEvent = true;
                    return;
                }
            }
            //没有相同事件
            if (!hasSameEvent) {
                //创建一个新事件
                let event = new MLEvent();
                event.eventName = eventName;
                event.listeners.push(listener);
                this._eventList.push(event);
            }
        } else {
            let event = new MLEvent();
            event.eventName = eventName;
            event.listeners.push(listener);
            this._eventList.push(event);
        }

    }

    _addToSendList(eventName, data) {
        var isEventNameAvailable = eventName != null && eventName != '';
        if (!isEventNameAvailable) {
            console.error('eventName:' + eventName + '不合法！');
            return;
        }
        let toBeSend = {
            eventName: eventName,
            data: data
        };
        this._waitingForSendList.push(toBeSend);
    }

    _sendEvent(eventName, data) {
        let copyedEventList = this._eventList;
        for (let i = 0; i < copyedEventList.length; i++) {
            let event = copyedEventList[i];
            if (event.eventName === eventName) {
                //匹配该事件下的监听列表
                let listeners = event.listeners;
                for (let j = listeners.length - 1; j >= 0; j--) {
                    let listener = listeners[j];
                    let callback = listener.callback;
                    let target = listener.target;
                    if (!target) {
                        ArrayUtil.remove(this._eventList[i].listeners, listener);
                        j--;
                        continue;
                    }
                    callback.call(target, data);
                    if (listener.once) {
                        if (this._eventList[i].listeners[j]) {
                            ArrayUtil.remove(this._eventList[i].listeners, listener);
                            i--;
                        }
                    }
                }
            }
        }
    }

    onUpdate() {
        if (this._waitingForSendList.length == 0) {
            return;
        }
        //两种方式各有利弊，方案1发送慢  方案2和立即发送没区别
        //1一帧发送一次事件（优化方案：一帧发送n个事件，n根据情况可调整）
        //     let event = this._waitingForSendList[0];
        //     this._sendEvent(event.eventName, event.data);
        //     if (cc.js.array.contains(this._waitingForSendList, event)) {
        //         cc.js.array.remove(this._waitingForSendList, event);
        //     }

        //2当前帧发送所有事件
        for (let i = 0; i < this._waitingForSendList.length; i++) {
            let event = this._waitingForSendList[i];
            this._sendEvent(event.eventName, event.data);
            ArrayUtil.remove(this._waitingForSendList, event);
            i--;
        }
    }

    onDisable() {
    }
}

/**
 * 监听者
 */
export class MListener {
    public callback: Function = null;
    public target: any = []
    public once: Boolean = false
    constructor() {
        this.callback = null;
        this.target = null;
        this.once = false;
    }
}

/**
 * 事件类
 */
export class MLEvent {
    public eventName: string = "";
    public listeners: Array<any> = []
    constructor() {
        this.eventName = '';
        this.listeners = [];
    }
}


