import BaseModule from "./BaseModule";
export default class EventModule extends BaseModule {
    constructor();
    private _eventList;
    private _waitingForSendList;
    /**
    * 添加一个监听者
    * @param {string} eventName 监听的事件名
    * @param {typeof Class} target 监听者
    * @param {Function} callback 监听事件触发后的回调
    */
    addListener(eventName: any, target: any, callback: any): void;
    /**
     * 将事件添加到发送队列里在update里发送
     * @param {string} eventName 要发送的事件名
     * @param {any} data 要发送的自定义数据
     */
    addToSendQueue(eventName: any, data: any): void;
    /**
     * 当前帧立即发送一个事件
     * @param {String} eventName 事件名
     * @param {any} data 自定义数据
     */
    sendEventImmediately(eventName: any, data: any): void;
    /**
     * 移除一个监听者
     * @param {string} eventName 事件名
     * @param {any} target 监听者
     */
    removeListener(eventName: any, target: any): void;
    /**
     * 移除所有监听者
     */
    removeAllListener(): void;
    _addListener(eventName: any, target: any, once: any, callback: any): void;
    _addToSendList(eventName: any, data: any): void;
    _sendEvent(eventName: any, data: any): void;
    onUpdate(): void;
    onDisable(): void;
}
/**
 * 监听者
 */
export declare class MListener {
    callback: Function;
    target: any;
    once: Boolean;
    constructor();
}
/**
 * 事件类
 */
export declare class MLEvent {
    eventName: string;
    listeners: Array<any>;
    constructor();
}
