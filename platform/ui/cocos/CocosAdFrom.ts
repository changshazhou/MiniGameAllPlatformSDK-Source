
export default class CocosAdFrom extends cc.Component implements IUIForm {


    public isPopEffect: boolean = false;
    public isMask: boolean = false;
    public fullView: boolean = true;
    public formName: string = "";
    private maskName = "img_mask";
    constructor() {
        super();
        this.formName = "";
    }
    start() {
        if (this.isMask) {
            this.addMask();
        }
    }

    public addMask() {

        if (this.node.getChildByName(this.maskName)) {
            this.node.active = true;
            return;
        }

        let skin = "texture/game/img_mask.png";
        let mask = new cc.Node();
        let sprite = mask.addComponent(cc.Sprite);
        let widget = mask.addComponent(cc.Widget);
        widget.isAlignLeft = widget.isAlignTop = widget.isAlignRight = widget.isAlignBottom = true;
        widget.left = widget.top = widget.right = widget.bottom = 0;

        mask.on(cc.Node.EventType.TOUCH_START, this.onMaskMouseDown, this)
    }

    public removeMask() {
        if (this.node.getChildByName(this.maskName)) {
            this.node.active = false;
            return;
        }
    }

    private onMaskMouseDown(e: cc.Event.EventTouch) {
        e.stopPropagation();
    }
    /**
    * 隐藏UIForm
    */
    hide() {
        // MLF.UI.destroyUIForm(this.formName)
    }

    private mFormData: any;
    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    public get FormData() {
        return this.mFormData;
    }
    willShow(data?) {
        this.mFormData = data;
    }

    onShow(data) {

    }

    willHide(data) {

    }

    onHide(data) {

    }

    onEnable() {
    }

    onDisable() {
    }

    hideAnim(cb) {
        cb();
    }
}
