import CocosBaseComponent from "../common/CocosBaseComponent";
import showShareOptions from "../../../model/showShareOptions";
import Common from "../../../utils/Common";
import CocosFormFactory from "../helper/CocosFormFactory";
import CocosBaseForm from "./CocosBaseForm";

export default class CocosShareForm extends CocosBaseForm {

    btnShare: cc.Node = null;
    btnNext: cc.Node = null;
    coinNum: cc.Node = null;

    public get FormData(): showShareOptions {
        return this.mFormData;
    }

    onShow(data) {
        super.onShow(data);
        this.addListener();
        this.coinNum.getComponent(cc.Label).string = `${Common.formatMoney(this.FormData.shareCoinNum)}`
    }

    onHide(data) {
        super.onHide(data);
        this.removeListener();
    }

    private addListener() {
        this.applyClickAnim(this.btnShare, () => {
            this.onShareVideo();
        })
        this.applyClickAnim(this.btnNext, () => {
            this.onNext();
        })
    }
    private removeListener() {
        this.removeClickAnim(this.btnShare)
        this.removeClickAnim(this.btnNext)
    }

    private onNext() {
        this.hideForm();
        if (this.FormData.callback)
            this.FormData.callback();
    }

    private onShareVideo() {
        moosnow.http.getAllConfig(res => {
            if (res) {
                if (res.shareFormVideo == 1) {
                    this.onVideo();
                }
                else if (res.shareFormVideo == 2) {
                    this.onShare();
                }
                else {
                    let precent = res && res.shareFormVideoPrecent ? parseFloat(res.shareFormVideoPrecent) : 0.5
                    if (Common.randomNumBoth(0, 100) / 100.0 < precent) {
                        this.onVideo();
                    }
                    else
                        this.onShare();
                }
            }
            else {
                this.onVideo();
            }
        })
    }

    private onVideo() {
        moosnow.platform.showVideo(res => {
            if (res == moosnow.VIDEO_STATUS.END) {
                this.hideForm();
                if (this.FormData.shareCallback)
                    this.FormData.shareCallback(true);
            }
            else if (res == moosnow.VIDEO_STATUS.NOTEND) {
                moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND)
            }
            else {
                moosnow.form.showToast(moosnow.VIDEO_MSG.ERR)
            }
        });
    }

    private onShare() {
        moosnow.platform.share({
            channel: moosnow.SHARE_CHANNEL.VIDEO
        }, (res) => {
            this.hideForm();
            if (this.FormData.shareCallback)
                this.FormData.shareCallback(res);
            console.log('分享结束', res)
        }, (err) => {
            this.hideForm();
            if (this.FormData.shareCallback)
                this.FormData.shareCallback(err);
        });
    }

}