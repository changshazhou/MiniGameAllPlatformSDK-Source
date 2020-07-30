import CocosBaseForm from "./CocosBaseForm";
import CocosFormFactory from "../helper/CocosFormFactory";


export default class CocosPauseForm extends CocosBaseForm {

    btnContinue: cc.Node = null;
    btnHome: cc.Node = null;
    btnReplay: cc.Node = null;


    public isMask: boolean = false

    private addListener() {
        this.applyClickAnim(this.btnContinue, () => {
            this.onContinue();
        })
        this.applyClickAnim(this.btnHome, () => {
            this.onToHome();
        })
        this.applyClickAnim(this.btnReplay, () => {
            this.onReplay();
        })
    }
    private removeListener() {
        this.removeClickAnim(this.btnContinue)
        this.removeClickAnim(this.btnHome)
        this.removeClickAnim(this.btnReplay)
    }

    willShow(data) {
        this.addListener();
        moosnow.platform.hideBanner();
    }
    willHide(data) {
        this.removeListener();
    }
    onShow() {
        moosnow.platform.pauseRecord();

    }
    public onContinue() {
        this.hideForm();
    }
    public onToHome() {
        moosnow.platform.stopRecord();


    }
    public onReplay() {

        moosnow.platform.stopRecord(() => {
            moosnow.platform.startRecord();
        });
    }

    // update (dt) {}
}
