export default class BaseModule {
    protected moduleName: string;
    private mIntervalArr;
    schedule(callback: Function, time: number): void;
    unschedule(callback: any): void;
    scheduleOnce(callback: Function, time: number): void;
    initProperty(form: any): void;
    preload(url: any, callback: any): void;
    /**
     *
     */
    _findComponent(node: any, classname: any): any;
    _findComponentByName(instance: any, classname: any): any;
}
