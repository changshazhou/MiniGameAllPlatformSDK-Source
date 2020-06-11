import Common from "../../utils/Common";
import UIForms from "../../config/UIForms";
import EventType from "../../utils/EventType";
import BaseForm from "./BaseForm";


const { ccclass, property } = cc._decorator;

@ccclass
export default class totalFormTT extends BaseForm {

    @property(cc.Sprite)
    checked: cc.Sprite = null;

    @property(cc.Sprite)
    unchecked: cc.Sprite = null;

    @property(cc.Node)
    btnVideo: cc.Node = null;

    @property(cc.Node)
    btnReceive: cc.Node = null;

    @property(cc.Label)
    levelCoin: cc.Label = null;

    @property(cc.Label)
    txtMemo: cc.Label = null;

    public isMask: boolean = true;
    private mIsChecked: boolean = true;
    private mOpenVideo: boolean = true;


    public addEvent() {
        this.unchecked.node.on(cc.Node.EventType.TOUCH_END, this.onShareChange, this)
        this.btnReceive.on(cc.Node.EventType.TOUCH_END, this.onReceive, this)
        this.btnVideo.on(cc.Node.EventType.TOUCH_END, this.onReceive, this)

    }
    public removeEvent() {
        this.unchecked.node.off(cc.Node.EventType.TOUCH_END, this.onShareChange, this);
        this.btnReceive.off(cc.Node.EventType.TOUCH_END, this.onReceive, this);
        this.btnVideo.off(cc.Node.EventType.TOUCH_END, this.onReceive, this);
    }


    private onHome() {
        Common.addCoin(this.node, this.mLevelCoinNum, () => {
            moosnow.ui.hideUIForm(UIForms.TotalForm, null);
            moosnow.http.getMisTouchNum(misNum => {
                if (misNum == 0) {
                    moosnow.ui.pushUIForm(UIForms.HomeForm)
                }
                else {
                    moosnow.ui.pushUIForm(UIForms.MistouchForm)
                }
            })
        })
    }

    private onShareChange() {
        this.mIsChecked = !this.mIsChecked;
        this.mOpenVideo = !this.mOpenVideo;
        this.changeUI();

    }

    private changeUI() {
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
                
                Common.addCoin(this.node, this.mLevelCoinNum * 5, () => {
                })
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
                    Common.addCoin(this.node, this.mLevelCoinNum * 5, () => {
                    })
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
            Common.addCoin(this.node, this.mLevelCoinNum, () => {
                moosnow.ui.hideUIForm(UIForms.TotalForm, null);
                moosnow.ui.pushUIForm(UIForms.EndForm, this.FormData)
            })

        }

    }

    onHide() {
        moosnow.platform.hideBanner();
        moosnow.event.sendEventImmediately(EventType.ADFORM_CHANGE, {})
    }


    // update (dt) {}
}
