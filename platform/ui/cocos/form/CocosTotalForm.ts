import CocosBaseForm from "./CocosBaseForm";
import Common from "../../../utils/Common";
import showTotalOptions from "../../../model/showTotalOptions";
import MathUtils from "../../../utils/MathUtils";

export default class CocosTotalForm extends CocosBaseForm {

    checked: cc.Node = null;
    unchecked: cc.Node = null;
    btnContinue: cc.Node = null;
    coinNum: cc.Node = null;
    videoText: cc.Node = null;

    public mCheckedVideo: boolean = true;

    public get FormData(): showTotalOptions {

        return this.mFormData;
    }

    public addListener() {
        this.applyClickAnim(this.unchecked, () => {
            this.checkChange(true);
        })
        this.applyClickAnim(this.checked, () => {
            this.checkChange(true);
        })
        this.applyClickAnim(this.btnContinue, () => {
            this.onReceive();
        })
    }
    public removeListener() {
        this.removeClickAnim(this.checked)
        this.removeClickAnim(this.unchecked)
        this.removeClickAnim(this.btnContinue)
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
            if (this.FormData.callback)
                this.FormData.callback();
        }
    }

    public checkChange(mistouch: boolean = false) {
        if (mistouch && this.mCheckBoxMistouch) {
            this.mClickNum++;
            if (this.mClickNum == this.mVideoNum) {
                moosnow.platform.showVideo(() => { });
            }
            if (this.mClickNum >= this.mCanNum) {
                this.checked.active = this.mCheckedVideo
                this.unchecked.active = !this.mCheckedVideo;
                this.mCheckedVideo = !this.mCheckedVideo
            }
            return;
        }

        this.checked.active = this.mCheckedVideo
        this.unchecked.active = !this.mCheckedVideo;
        this.mCheckedVideo = !this.mCheckedVideo
    }

    public mLevelCoinNum: number = 0;
    public mLevelShareCoinNum: number = 0;
    private mCanNum: number = 0;
    private mCheckBoxMistouch: boolean = false;
    private mClickNum: number = 0;
    private mVideoNum: number = 4;
    public onShow(data) {



        moosnow.http.getAllConfig(res => {
            this.mCanNum = 3;// MathUtils.probabilitys(res.checkBoxProbabilitys) + 1;
            this.mCheckBoxMistouch = true;// res.checkBoxMistouch == 1
        })

        this.mLevelCoinNum = this.FormData.coinNum;
        this.mLevelShareCoinNum = this.FormData.coinNum;
        this.videoText.getComponent(cc.Label).string = `${this.FormData.videoText}`
        this.coinNum.getComponent(cc.Label).string = `${Common.formatMoney(this.mLevelCoinNum)}`
        this.addListener();
        this.mCheckedVideo = true;
        this.checkChange();
        moosnow.platform.stopRecord();
        moosnow.platform.showBanner();
    }

    public willHide() {
        this.removeListener();
        moosnow.platform.hideBanner();
    }
}
