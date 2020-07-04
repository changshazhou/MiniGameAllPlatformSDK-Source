import Common from "../../utils/Common";
import UIFormSetting from "../../config/UIFormSetting";
import EventType from "../../utils/EventType";
import BaseForm from "./BaseForm";
import showPrizeOptions from "../../model/showPrizeOptions";
import BaseModule from "../../framework/BaseModule";

export default class PrizeFormTT extends BaseForm {


    prizeBg1: cc.Node = null;
    prizeBg2: cc.Node = null;
    btnCancel: cc.Node = null;
    txtCoutdown: cc.Label = null;
    btnVideo: cc.Node = null;
    btnShare: cc.Node = null;
    btnReceive: cc.Node = null;
    checked: cc.Node = null;
    unchecked: cc.Node = null;
    public isMask: boolean = true;
    public mChecked: boolean = false;


    public get FormData(): showPrizeOptions {

        return this.mFormData;
    }

    initForm(logic) {
        this.initProperty(logic);
        // this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
    }

    willShow(data) {
        super.willShow(data);
        this.addListener();

        this.mChecked = false;
        this.onChecked();

        this.prizeBg1.active = false;
        this.prizeBg2.active = false;
        moosnow.http.getAllConfig(res => {
            if (res) {
                if (res.prizeFormVideo == 1) {
                    this.showVideo();
                }
                else if (res.prizeFormVideo == 2) {
                    this.showShare();
                }
                else {
                    let precent = res && res.prizeFormVideosPrecent ? parseFloat(res.prizeFormVideosPrecent) : 0.5
                    if (Common.randomNumBoth(0, 100) / 100.0 < precent) {
                        this.showVideo();
                    }
                    else
                        this.showShare();
                }
            }
            else {
                this.showShare();
            }
        })

        this.mTotalSecond = 10;
        this.mCurrentSecond = 0;
        this.resumeCountdown();
        moosnow.platform.showBanner();
    }

    onHide() {
        this.removeListener();
    }

    private showVideo() {
        this.prizeBg1.active = true;
        this.prizeBg2.active = false;

    }
    private showShare() {
        this.prizeBg1.active = false;
        this.prizeBg2.active = true;
    }

    private mTotalSecond: number = 10
    private mCurrentSecond: number = 0
    private onCountdown() {
        this.mCurrentSecond += 1;
        let num = this.mTotalSecond - this.mCurrentSecond;
        if (num < 0) {
            this.unschedule(this.onCountdown);
            moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null);
            return;
        }
        this.txtCoutdown.string = `${num}秒`
    }

    private stopCountdown() {
        this.unschedule(this.onCountdown)
    }

    private resumeCountdown() {
        this.schedule(this.onCountdown, 1)
    }

    public addListener() {
        // this.btnCancel.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
        // this.btnVideo.on(CocosNodeEvent.TOUCH_END, this.onVideo, this)
        // this.btnReceive.on(CocosNodeEvent.TOUCH_END, this.onReceive, this)
        // this.btnShare.on(CocosNodeEvent.TOUCH_END, this.onShare, this)
        // this.unchecked.on(CocosNodeEvent.TOUCH_END, this.onChecked, this)
    }

    public removeListener() {
        // this.btnCancel.off(CocosNodeEvent.TOUCH_END, this.closeForm, this)
        // this.btnVideo.off(CocosNodeEvent.TOUCH_END, this.onVideo, this)
        // this.btnReceive.off(CocosNodeEvent.TOUCH_END, this.onReceive, this)
        // this.btnShare.off(CocosNodeEvent.TOUCH_END, this.onShare, this)
        // this.unchecked.off(CocosNodeEvent.TOUCH_END, this.onChecked, this)
    }

    closeForm() {
        moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null)
    }

    public onChecked() {
    }

    public onShare() {
        this.stopCountdown();
        moosnow.platform.share({
            channel: ""
        }, (shared) => {
            this.resumeCountdown();
            if (this.FormData) {
                if (this.FormData.hideForm)
                    moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null);
                if (this.FormData.shareCallback)
                    this.FormData.shareCallback(shared)
            }
        })
    }

    public onReceive() {
        if (this.mChecked)
            this.onVideo();
        else
            if (this.FormData) {
                if (this.FormData.hideForm)
                    moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null);
                if (this.FormData.callback)
                    this.FormData.callback()
            }
    }

    public onVideo() {
        this.stopCountdown();
        moosnow.platform.showVideo(res => {
            if (res == moosnow.VIDEO_STATUS.END) {
                if (this.FormData) {
                    if (this.FormData.hideForm)
                        moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null);
                    if (this.FormData.videoCallback)
                        this.FormData.videoCallback()
                }
                return;
            }
            else if (res == moosnow.VIDEO_STATUS.ERR)
                moosnow.ui.showToast(moosnow.VIDEO_MSG.ERR)
            else {
                moosnow.ui.showToast(moosnow.VIDEO_MSG.NOTEND)
            }
            this.resumeCountdown();
        })
    }

}
