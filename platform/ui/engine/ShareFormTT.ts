import UIForms from "../../config/UIForms";
import Common from "../../utils/Common";
import BaseForm from "./BaseForm";
import showShareOptions from "../../model/showShareOptions";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShareFormTT extends BaseForm {

    @property(cc.Node)
    btnShare: cc.Node = null;

    @property(cc.Node)
    btnBack: cc.Node = null;


    @property(cc.Label)
    txtCoinNum: cc.Label = null;

    public isMask: boolean = true;


    public get FormData(): showShareOptions {
        return this.mFormData;
    }

    initForm(logic) {
        this.initProperty(logic);
        this.addListener();

    }

    public addListener() {

    }

    public removeListener() {

    }


    public onBack() {
        if (this.FormData.hideForm)
            moosnow.ui.hideUIForm(UIForms.ShareForm, null);
        if (this.FormData && this.FormData.callback)
            this.FormData.callback();
    }

    public mLevelShareCoinNum: number = 0;
    onShow() {
        this.btnShare.active = true;
        this.mLevelShareCoinNum = this.FormData.shareCoinNum;
        this.txtCoinNum.string = `${Common.formatMoney(this.mLevelShareCoinNum)}`;
        moosnow.platform.stopRecord();
    }
    private mShareing: boolean = false;
    onShareVideo() {
        if (this.mShareing) return;
        this.mShareing = true;
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
            this.mShareing = false;
            if (res == moosnow.VIDEO_STATUS.END) {
                if (this.FormData.hideForm)
                    moosnow.ui.hideUIForm(UIForms.ShareForm, null);
                if (this.FormData && this.FormData.videoCallback)
                    this.FormData.videoCallback();
            }
            else if (res == moosnow.VIDEO_STATUS.NOTEND) {
                moosnow.ui.showToast(moosnow.VIDEO_MSG.NOTEND)
            }
            else {
                moosnow.ui.showToast(moosnow.VIDEO_MSG.ERR)
            }

        });
    }

    private onShare() {
        moosnow.platform.share({
            channel: moosnow.SHARE_CHANNEL.VIDEO
        }, (res) => {
            this.mShareing = false;
            if (res) {
                if (this.FormData.hideForm)
                    moosnow.ui.hideUIForm(UIForms.ShareForm, null);
                if (this.FormData && this.FormData.shareCallback)
                    this.FormData.shareCallback(res);
            }
            else {
                moosnow.ui.showToast("分享未完成")
            }

            console.log('分享结束', res)
        });
    }


}
