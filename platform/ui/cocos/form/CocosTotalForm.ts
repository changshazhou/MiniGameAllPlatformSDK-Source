
import TotalForm from "../../engine/TotalForm";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import CocosBaseForm from "./CocosBaseForm";
import Common from "../../../utils/Common";
import showTotalOptions from "../../../model/showTotalOptions";

export default class CocosTotalForm extends CocosBaseForm {

    checked: cc.Node = null;
    unchecked: cc.Node = null;
    btnReceive: cc.Node = null;
    levelCoin: cc.Label = null;
    public mCheckedVideo: boolean = true;

    public get FormData(): showTotalOptions {

        return this.mFormData;
    }

    public addListener() {
        this.applyClickAnim(this.unchecked, () => {
            this.onContinue();
        })
        this.applyClickAnim(this.btnReceive, () => {
            this.onReceive();
        })
    }
    public removeListener() {
        this.removeClickAnim(this.unchecked)
        this.removeClickAnim(this.btnReceive)
    }
    public onReceive() {
        if (this.mCheckedVideo) {
            moosnow.platform.showVideo(res => {
                if (res == moosnow.VIDEO_STATUS.END) {
                    if (this.FormData.videoCallback)
                        this.FormData.videoCallback();
                }
                else if (res == moosnow.VIDEO_STATUS.ERR) {
                }
                else {
                }
            })
        }
        else {

        }
    }
    public onContinue() {
        if (this.FormData.callback)
            this.FormData.callback();
    }
    public changeUI() {
        if (this.mCheckedVideo) {
            this.checked.active = true;
        }
        else {
            this.checked.active = false;
        }
    }

    public mLevelCoinNum: number = 0;
    public mLevelShareCoinNum: number = 0;
    public onShow(data) {

        this.mLevelCoinNum = this.FormData.coinNum;
        this.mLevelShareCoinNum = this.FormData.coinNum;

        this.levelCoin.string = `${Common.formatMoney(this.mLevelCoinNum)}`
        this.addListener();
        this.mCheckedVideo = true;
        this.changeUI();
        moosnow.platform.stopRecord();
        moosnow.platform.showBanner();
    }

    public willHide() {
        this.removeListener();
        moosnow.platform.hideBanner();
    }
}
