import BaseForm from "./BaseForm";
import UIForms from "../../config/UIForms";
import MistouchForm from "./MistouchForm";

export default class MistouchFormTT extends MistouchForm {

    clickProgress: cc.ProgressBar = null;
    btnReceive: cc.Node = null;
    btnConfirm: cc.Node = null;
    checked: cc.Sprite = null;
    unchecked: cc.Sprite = null;
    step1: cc.Node = null;
    step2: cc.Node = null;
    logo: cc.Node = null;


    public mMaxNum: number = 10;
    public mCurrentNum: number = 0;
    public mOpenVideo: boolean = true;

    willShow(data) {

        super.willShow(data);

        this.step1.active = true;
        this.step2.active = false;
        this.btnConfirm.active = true;

        this.mCurrentNum = 0;
        this.mOpenVideo = true;
        this.showCheckbox();
        this.addEvent();
        this.schedule(this.subProgress, 0.1)
        moosnow.form.showAd(moosnow.AD_POSITION.NONE, null);

    }
    willHide() {
        this.unschedule(this.subProgress)
        this.unschedule(this.resetProgress)
        this.removeEvent();

    }

    public subProgress() {
        if (this.mCurrentNum > 0)
            this.mCurrentNum -= 0.1
    }
    public addEvent() {

        this.unchecked.node.on(cc.Node.EventType.TOUCH_END, this.checkboxChange, this)
        this.btnReceive.on(cc.Node.EventType.TOUCH_START, this.onLogoUp, this)
        this.btnReceive.on(cc.Node.EventType.TOUCH_END, this.onBannerClick, this)
        this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.openBox, this)


    }

    public removeEvent() {
        this.unchecked.node.off(cc.Node.EventType.TOUCH_END, this.checkboxChange, this)
        this.btnReceive.off(cc.Node.EventType.TOUCH_START, this.onLogoUp, this)
        this.btnReceive.off(cc.Node.EventType.TOUCH_END, this.onBannerClick, this)
        this.btnConfirm.off(cc.Node.EventType.TOUCH_END, this.openBox, this)
    }

    public openBox() {
        if (this.mOpenVideo) {
            this.btnConfirm.active = false;
            moosnow.platform.showVideo(res => {
                if (res == moosnow.VIDEO_STATUS.END) {
                    if (this.FormData && this.FormData.onCompleted)
                        this.FormData.onCompleted(true)
                    return;
                }
                else if (res == moosnow.VIDEO_STATUS.NOTEND) {
                    moosnow.ui.showToast(moosnow.VIDEO_MSG.NOTEND)
                }
                else {
                    moosnow.ui.showToast(moosnow.VIDEO_MSG.ERR)
                }

                this.btnConfirm.active = true;
            })
        }
        else {
            moosnow.ui.hideUIForm(UIForms.MistouchForm, null);
        }
    }

    private checkboxChange() {
        this.mOpenVideo = !this.mOpenVideo;
        this.showCheckbox();
    }
    private showCheckbox() {
        if (this.mOpenVideo) {
            this.checked.node.active = true;
        }
        else {
            this.checked.node.active = false;
        }
    }

    private playBoxAnim(animName) {
        let anim = this.logo.getComponent(cc.Animation);
        if (!anim.getAnimationState(animName).isPlaying)
            anim.play(animName)
    }

    public onLogoUp() {
        // this.logo.position = this.mEndPos;
        this.playBoxAnim("prizeBox2")
    }
    public onBannerClick() {
        if (this.mCurrentNum > this.mMaxNum + 1)
            return;
        this.mCurrentNum += 1;

        if (this.mCurrentNum >= this.mMaxNum) {
            this.step1.active = false;
            this.step2.active = true;
            this.playBoxAnim("prizeBox1")
        }
    }

    public resetProgress() {
        this.mCurrentNum = 0;
    }


    update() {
        let progress = this.mCurrentNum / this.mMaxNum;
        this.clickProgress.progress = progress > 1 ? 1 : progress
    }

}
