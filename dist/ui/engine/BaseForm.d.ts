export default class BaseForm {
    private mIntervalArr;
    schedule(callback: Function, time: number): void;
    unschedule(callback: any): void;
    initProperty(form: any): void;
}
