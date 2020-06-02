import BaseModule from "../../framework/BaseModule";
export default class BaseForm extends BaseModule {
    private mIntervalArr;
    schedule(callback: Function, time: number): void;
    unschedule(callback: any): void;
    initProperty(form: any): void;
}
