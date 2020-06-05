import Common from "../../utils/Common";
import UIForms from "../../config/UIForms";
import EventType from "../../utils/EventType";
import BaseForm from "./BaseForm";

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
    private mChecked: boolean = false;

    initForm(logic) {
        this.initProperty(logic);
        // this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.closeForm, this)
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
            moosnow.ui.hideUIForm(UIForms.PrizeForm, null);
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
        this.btnCancel.on(cc.Node.EventType.TOUCH_END, this.closeForm, this)
        this.btnVideo.on(cc.Node.EventType.TOUCH_END, this.onVideo, this)
        this.btnReceive.on(cc.Node.EventType.TOUCH_END, this.onReceive, this)
        this.btnShare.on(cc.Node.EventType.TOUCH_END, this.onShare, this)
        this.unchecked.on(cc.Node.EventType.TOUCH_END, this.onChecked, this)
    }

    public removeListener() {
        this.btnCancel.off(cc.Node.EventType.TOUCH_END, this.closeForm, this)
        this.btnVideo.off(cc.Node.EventType.TOUCH_END, this.onVideo, this)
        this.btnReceive.off(cc.Node.EventType.TOUCH_END, this.onReceive, this)
        this.btnShare.off(cc.Node.EventType.TOUCH_END, this.onShare, this)
        this.unchecked.off(cc.Node.EventType.TOUCH_END, this.onChecked, this)
    }

    closeForm() {
        moosnow.ui.hideUIForm(UIForms.PrizeForm, null)
    }

    private onChecked() {
        this.mChecked = !this.mChecked;
        this.checked.active = this.mChecked;
    }

    private onShare() {
        this.stopCountdown();
        moosnow.platform.share({
            channel: ""
        }, (shared) => {
            this.resumeCountdown();
            if (shared) {
                this.addCoin(this.getCoinNum() * 2, () => {
                    moosnow.ui.hideUIForm(UIForms.PrizeForm, null);
                });
            }
        })
    }

    private onReceive() {
        if (this.mChecked)
            this.onVideo();
        else
            this.addCoin(this.getCoinNum(), () => {
                moosnow.ui.hideUIForm(UIForms.PrizeForm, null);
            });
    }

    private onVideo() {
        this.stopCountdown();
        moosnow.platform.showVideo(res => {
            if (res == moosnow.VIDEO_STATUS.END) {
                this.addCoin(this.getCoinNum() * (this.FormData && this.FormData.baseNum ? parseFloat(this.FormData.baseNum) : 2), () => {
                    moosnow.ui.hideUIForm(UIForms.PrizeForm, null);
                });
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
    private getCoinNum() {
        let coinNum = Common.randomNumBoth(500, 600);
        return coinNum;
    }

    private addCoin(coinNum, callback: Function) {

        moosnow.ui.hideUIForm(UIForms.MistouchForm, null);
        moosnow.event.sendEventImmediately(EventType.COIN_CHANGED, null);
        moosnow.ui.pushUIForm(UIForms.CoinForm, {
            ...Common.deepCopy(this.FormData),
            coinNum,
            callback: () => {
                if (callback)
                    callback();
            }
        })


    }


}
