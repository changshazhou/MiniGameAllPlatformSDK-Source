import CocosBaseForm from "./CocosBaseForm";
import showTryOptions from "../../../model/showTryOptions";
import { VIDEO_STATUS } from "../../../enum/VIDEO_STATUS";
import CocosFormFactory from "../helper/CocosFormFactory";
import { VIDEO_MSG } from "../../../enum/VIDEO_MSG";
import CocosNodeHelper from "../helper/CocosNodeHelper";

export default class CocosTryForm extends CocosBaseForm {

    logo: cc.Node = null;
    btnVideo: cc.Node = null;
    btnNext: cc.Node = null;

    public get FormData(): showTryOptions {
        return this.mFormData;
    }

    public addListener() {
        this.applyClickAnim(this.btnVideo, () => {
            this.onVideoTry();
        })
        this.applyClickAnim(this.btnNext, () => {
            this.onNext();
        })
    }
    public removeListener() {
        this.removeClickAnim(this.btnVideo)
        this.removeClickAnim(this.btnNext)
    }

    public onShow(data) {
        CocosNodeHelper.changeSrc(this.logo, this.FormData.skinUrl);
        this.addListener();
    }

    public onHide() {
        this.removeListener();
    }
    private onVideoTry() {
        moosnow.platform.showVideo(res => {
            if (res == VIDEO_STATUS.END) {
                if (this.FormData.videoCallback)
                    this.FormData.videoCallback();
            }
            else if (res == VIDEO_STATUS.ERR) {
                moosnow.form.showToast(VIDEO_MSG.ERR)
            }
            else if (res == VIDEO_STATUS.NOTEND) {
                moosnow.form.showToast(VIDEO_MSG.NOTEND)
            }
        })
    }

    private onNext() {
        if (this.FormData.callback)
            this.FormData.callback();
    }

}