export default class BaseModule {
    protected moduleName: string;
    preload(url: any, callback: any): void;
    /**
     *
     */
    _findComponent(node: any, classname: any): any;
    _findComponentByName(instance: any, classname: any): any;
}
