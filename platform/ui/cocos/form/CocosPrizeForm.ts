import CocosBaseForm from "./CocosBaseForm";
import CheckboxComponent from "../common/CheckboxComponent";
import { VIDEO_STATUS } from "../../../enum/VIDEO_STATUS";
import { VIDEO_MSG } from "../../../enum/VIDEO_MSG";
import CocosNodeHelper from "../helper/CocosNodeHelper";
import Common from "../../../utils/Common";

export default class CocosPrizeForm extends CocosBaseForm {

    btnCancel: cc.Node = null;
    txtCountdown: cc.Node = null;
    btnVideo: cc.Node = null;
    btnShare: cc.Node = null;
    btnReceive: cc.Node = null;


    private mChecked: boolean = true;
    public formComponents = [
        new CheckboxComponent(this.mChecked, (isChecked) => {
            this.mChecked = isChecked;
        })
    ]

    private addListener() {
        this.applyClickAnim(this.btnCancel, () => {
            this.hideForm();
        })
        this.applyClickAnim(this.btnVideo, () => {
            this.onVideo();
        })
        this.applyClickAnim(this.btnReceive, () => {
            this.onReceive();
        })
        this.applyClickAnim(this.btnShare, () => {
            this.onShare();
        })
    }
    private removeListener() {
        this.removeClickAnim(this.btnCancel)
        this.removeClickAnim(this.btnVideo)
        this.removeClickAnim(this.btnReceive)
        this.removeClickAnim(this.btnShare)
    }


    willShow(data) {
        super.willShow(data)
        this.addListener();


        this.mTotalSecond = 10;
        this.mCurrentSecond = 0;
        this.resumeCountdown();
        moosnow.platform.showBanner(false);
    }
    willHide(data) {
        super.willShow(data)
        this.removeListener();
    }


    private mTotalSecond: number = 10
    private mCurrentSecond: number = 0
    private onCountdown() {
        this.mCurrentSecond += 1;
        let num = this.mTotalSecond - this.mCurrentSecond;
        if (num < 0) {
            this.unschedule(this.onCountdown);
            this.hideForm();
            return;
        }
        CocosNodeHelper.changeText(this.txtCountdown, `${num}秒`);
    }

    private stopCountdown() {
        this.unschedule(this.onCountdown)
    }

    private resumeCountdown() {
        this.schedule(this.onCountdown, 1)
    }
    private onShare() {
        this.stopCountdown();
        moosnow.platform.share({
            channel: ""
        }, (shared) => {
            this.resumeCountdown();
            if (shared) {
            }
        })
    }
    private onVideo() {
        this.stopCountdown();
        moosnow.platform.showVideo(res => {
            if (res == VIDEO_STATUS.END) {

                return;
            }
            else if (res == moosnow.VIDEO_STATUS.ERR)
                moosnow.form.showToast(VIDEO_MSG.ERR)
            else {
                moosnow.form.showToast(VIDEO_MSG.NOTEND)
            }
            this.resumeCountdown();
        })
    }

    private onReceive() {
        if (this.mChecked)
            this.onVideo();
        else {

        }
    }
}
