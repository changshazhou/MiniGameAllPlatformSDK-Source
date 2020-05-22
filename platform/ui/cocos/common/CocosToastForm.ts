import CocosUIForm from "./CocosUIForm";

const { ccclass, property } = cc._decorator;
@ccclass
export default class CocosToastForm extends CocosUIForm {

    @property(cc.Node)
    msgText: cc.Node = null;

    constructor() {
        super();
    }
    start() {
        super.start();
    }



    show(msg: string) {
        this.node.zIndex = 9999;
        this.msgText.getComponent(cc.Label).string = msg;
        this.node.active = true;
        this.node.runAction(cc.sequence(
            cc.scaleTo(0.1, 1.2),
            cc.scaleTo(0.1, 1)
        ))
        this.scheduleOnce(this.hide, 1)
    }
    hide() {
        // Lite.ui.hideUIForm(UIForms.ToastForm, null)
        this.node.active = false;
    }
}
