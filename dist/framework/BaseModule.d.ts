export default class BaseModule {
    protected moduleName: string;
    private mIntervalArr;
    private mTimeoutArr;
    schedule(callback: Function, time: number, ...arg: any[]): void;
    unschedule(callback: any): void;
    scheduleOnce(callback: Function, time: number): void;
    unscheduleOnce(callback: any): void;
    initProperty(form: any): void;
    preload(url: any, callback: any): void;
    /**
     *
     */
    _findComponent(node: any, classname: any): any;
    _findComponentByName(instance: any, classname: any): any;
}
