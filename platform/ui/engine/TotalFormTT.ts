import Common from "../../utils/Common";
import UIForms from "../../config/UIForms";
import EventType from "../../utils/EventType";
import BaseForm from "./BaseForm";
import BaseModule from "../../framework/BaseModule";


export default class totalFormTT extends BaseForm {

    checked: cc.Sprite = null;
    unchecked: cc.Sprite = null;
    btnVideo: cc.Node = null;
    btnReceive: cc.Node = null;
    levelCoin: cc.Label = null;
    txtMemo: cc.Label = null;

    public isMask: boolean = true;
    public mIsChecked: boolean = true;
    private mOpenVideo: boolean = true;


    public addEvent() {

    }
    public removeEvent() {
    }


    public onShareChange() {
        this.mIsChecked = !this.mIsChecked;
        this.mOpenVideo = !this.mOpenVideo;
        this.changeUI();

    }

    public changeUI() {
        let lblReceive = this.btnReceive.getComponent(cc.Label)
        if (this.mIsChecked) {
            this.checked.node.active = true;
            lblReceive.string = "领取五倍奖励";

        }
        else {
            this.checked.node.active = false;
            lblReceive.string = "领取奖励";

        }
    }

    public mLevelCoinNum: number = 0;
    public mLevelShareCoinNum: number = 0;
    onShow(data) {
        let { coin, shareCoin } = data;
        this.mLevelCoinNum = coin;
        this.mLevelShareCoinNum = shareCoin
        this.levelCoin.string = `${Common.formatMoney(this.mLevelCoinNum)}`

        this.addEvent();
        moosnow.platform.showBanner();


        this.mIsReceive = false;
        this.mOpenVideo = true;
        moosnow.http.getAllConfig(res => {
            if (res) {
                if (res.totalFormVideo == 1) {
                    this.showCheckedVideo();
                }
                else if (res.totalFormVideo == 2) {
                    this.showUnCheckedVideo();
                }
                else {
                    let precent = res && res.shareFormVideoPrecent ? parseFloat(res.shareFormVideoPrecent) : 0.5
                    if (Common.randomNumBoth(0, 100) / 100.0 < precent) {
                        this.showCheckedVideo();
                    }
                    else
                        this.showUnCheckedVideo();
                }
            }
            else {
                this.showCheckedVideo();
            }
        })
    }
    private showCheckedVideo() {
        this.mIsChecked = true;
        this.txtMemo.string = "看视频得5倍奖励";
        this.changeUI();
    }

    private showUnCheckedVideo() {
        this.mIsChecked = false;
        this.txtMemo.string = "不看视频得5倍奖励";
        this.changeUI();
    }


    willHide() {
        this.removeEvent();
        moosnow.platform.hideBanner();
    }


    public onVideo() {
        moosnow.platform.showVideo(res => {
            if (res == moosnow.VIDEO_STATUS.END) {

                this.scheduleOnce(() => {
                    moosnow.ui.hideUIForm(UIForms.TotalForm, null);
                    moosnow.http.getMisTouchNum(misNum => {
                        if (misNum == 0) {
                            moosnow.ui.pushUIForm(UIForms.EndForm, this.FormData)
                        }
                        else {
                            moosnow.ui.pushUIForm(UIForms.MistouchForm)
                        }
                    })

                }, 2.1)
            }
            else if (res == moosnow.VIDEO_STATUS.ERR) {
                moosnow.ui.showToast(moosnow.VIDEO_MSG.ERR)
            }
            else {
                moosnow.ui.showToast(moosnow.VIDEO_MSG.NOTEND)
            }
        })
    }

    private mIsReceive: boolean = false;
    public onReceive() {
        if (this.mIsReceive)
            return;
        this.mIsReceive = true;

        if (this.mOpenVideo) {
            moosnow.platform.showVideo(res => {
                this.mIsReceive = false;
                if (res == moosnow.VIDEO_STATUS.END) {
                    this.scheduleOnce(() => {
                        moosnow.ui.hideUIForm(UIForms.TotalForm, null);
                        moosnow.http.getMisTouchNum(misNum => {
                            if (misNum == 0) {
                                moosnow.ui.pushUIForm(UIForms.EndForm, this.FormData)
                            }
                            else {
                                moosnow.ui.pushUIForm(UIForms.MistouchForm)
                            }
                        })

                    }, 2.1)
                }
                else if (res == moosnow.VIDEO_STATUS.ERR) {
                    moosnow.ui.showToast(moosnow.VIDEO_MSG.ERR)
                }
                else {
                    moosnow.ui.showToast(moosnow.VIDEO_MSG.NOTEND)
                }
            })
        }
        else {

        }

    }

    onHide() {
        moosnow.platform.hideBanner();
    }


    // update (dt) {}
}
