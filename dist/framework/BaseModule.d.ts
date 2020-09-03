export default class BaseModule {
    protected moduleName: string;
    private static mIntervalArr;
    private static mTimeoutArr;
    private static mScheduleIndex;
    private mIntervalArr;
    private mTimeoutArr;
    private mScheduleIndex;
    private mMaping;
    schedule(callback: Function, time: number, ...arg: any[]): void;
    unschedule(callback: any): void;
    scheduleOnce(callback: Function, time: number): void;
    unscheduleOnce(callback: any): void;
    static schedule(callback: Function, time: number, ...arg: any[]): void;
    static unschedule(callback: any): void;
    static scheduleOnce(callback: Function, time: number): void;
    static unscheduleOnce(callback: any): void;
    initProperty(form: any): void;
    preload(url: any, callback: any): void;
    /**
     *
     */
    _findComponent(node: any, classname: any): any;
    _findComponentByName(instance: any, classname: any): any;
}
