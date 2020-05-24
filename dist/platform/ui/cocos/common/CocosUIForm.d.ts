export default class CocosUIForm extends cc.Component implements IUIForm {
    isPopEffect: boolean;
    isMask: boolean;
    fullView: boolean;
    formName: string;
    private maskName;
    constructor();
    start(): void;
    addMask(): void;
    removeMask(): void;
    private onMaskMouseDown;
    /**
    * 隐藏UIForm
    */
    hide(): void;
    private mFormData;
    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    get FormData(): any;
    willShow(data?: any): void;
    onShow(data: any): void;
    willHide(data: any): void;
    onHide(data: any): void;
    onEnable(): void;
    onDisable(): void;
    hideAnim(cb: any): void;
}
