import CocosBaseForm from "./CocosBaseForm";
import showRespawnOptions from "../../../model/showRespawnOptions";
import { VIDEO_STATUS } from "../../../enum/VIDEO_STATUS";
import { VIDEO_MSG } from "../../../enum/VIDEO_MSG";

export default class CocosRespawnForm extends CocosBaseForm {

    btnVideo: cc.Node = null;
    btnHome: cc.Node = null;


    public get FormData(): showRespawnOptions {
        return this.mFormData;
    }

    public addListener() {
        this.applyClickAnim(this.btnVideo, () => {
            this.onVideoTry();
        })
        this.applyClickAnim(this.btnHome, () => {
            this.onHome();
        })
    }
    public removeListener() {
        this.removeClickAnim(this.btnVideo)
        this.removeClickAnim(this.btnHome)
    }

    public onShow(data) {
        super.onShow(data);
        this.addListener();
    }

    public onHide(data) {
        super.onHide(data);
        this.removeListener();
    }
    private onVideoTry() {
        moosnow.platform.showVideo(res => {
            if (res == VIDEO_STATUS.END) {
                this.hideForm();
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

    private onHome() {
        this.hideForm();
        if (this.FormData.callback)
            this.FormData.callback();
    }
}