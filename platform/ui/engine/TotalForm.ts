
import Common from "../../utils/Common";
import UIFormSetting from "../../config/UIFormSetting";
import BaseForm from "./BaseForm";
import { ROOT_CONFIG } from "../../config/ROOT_CONFIG";

export default class TotalForm extends BaseForm {

    checked: cc.Node = null;
    unchecked: cc.Node = null;
    btnReceive: cc.Node = null;
    coinNum: cc.Node = null;
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
                }
                else {
                }
            })
        }
        else {
            this.openEndForm(this.mLevelCoinNum)
        }
    }

    private openEndForm(coin) {
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
        this.coinNum.getComponent(cc.Label).string = `${Common.formatMoney(this.mLevelCoinNum)}`
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
