import BaseForm from "./BaseForm";
import UIFormSetting from "../../config/UIFormSetting";
import MistouchForm from "./MistouchForm";
import BaseModule from "../../framework/BaseModule";

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

    }

    public removeEvent() {

    }

    public openBox() {
        if (this.mOpenVideo) {
            this.btnConfirm.active = false;
            moosnow.platform.showVideo(res => {
                if (res == moosnow.VIDEO_STATUS.END) {
                    if (this.FormData && this.FormData.callback)
                        this.FormData.callback(true)
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
            moosnow.ui.hideUIForm(UIFormSetting.MistouchForm, null);
        }
    }

    public checkboxChange() {
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

    public playBoxAnim(animName) {
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
