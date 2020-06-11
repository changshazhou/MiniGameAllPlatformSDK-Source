
import Common from "../../utils/Common";
import UIForms from "../../config/UIForms";
import BaseForm from "./BaseForm";

export default class TotalForm extends BaseForm {

    checked: cc.Sprite = null;
    unchecked: cc.Sprite = null;
    btnReceive: cc.Sprite = null;
    levelCoin: cc.Label = null;
    public mCheckedVideo: boolean = true;


    initForm(logic) {
        this.initProperty(logic);
        // this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.closeForm, this)
    }

    public addEvent() {
    }
    public removeEvent() {
    }
    public onReceive() {
        if (this.mCheckedVideo) {
            moosnow.platform.showVideo(res => {
                if (res == moosnow.VIDEO_STATUS.END) {
                    this.openEndForm(this.mLevelCoinNum * 5)
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
            this.openEndForm(this.mLevelCoinNum)
        }
    }

    private openEndForm(coin) {
        moosnow.ui.hideUIForm(UIForms.TotalForm, null)
        moosnow.ui.pushUIForm(UIForms.EndForm, { coin, level: this.FormData.level, levelShareCoinNum: this.mLevelShareCoinNum, ...this.FormData })
    }

    public onShareChange() {
        this.mCheckedVideo = !this.mCheckedVideo;
        this.changeUI();

    }
    public changeUI() {
    }

    public mLevelCoinNum: number = 0;
    public mLevelShareCoinNum: number = 0;
    public onShow(data) {

        let { coin, shareCoin } = data;
        this.mLevelCoinNum = coin;
        this.mLevelShareCoinNum = shareCoin;
        this.levelCoin.string = `${Common.formatMoney(this.mLevelCoinNum)}`
        this.addEvent();
        this.mCheckedVideo = true;
        this.changeUI();
        moosnow.platform.stopRecord();
        moosnow.platform.showBanner();
    }

    public willHide() {
        this.removeEvent();
        moosnow.platform.hideBanner();
    }

}
