
import Common from "../../utils/Common";
import UIFormSetting from "../../config/UIFormSetting";
import BaseForm from "./BaseForm";
import { ROOT_CONFIG } from "../../config/ROOT_CONFIG";

export default class TotalForm extends BaseForm {

    checked: cc.Sprite = null;
    unchecked: cc.Sprite = null;
    btnReceive: cc.Sprite = null;
    levelCoin: cc.Label = null;
    public mCheckedVideo: boolean = true;


    initForm(logic) {
        this.initProperty(logic);
        // this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
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
        moosnow.ui.hideUIForm(UIFormSetting.TotalForm, null)
        moosnow.ui.pushUIForm(UIFormSetting.EndForm, { coin, level: this.FormData.level, levelShareCoinNum: this.mLevelShareCoinNum, ...this.FormData }, () => { }, ROOT_CONFIG.UI_ROOT)
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
