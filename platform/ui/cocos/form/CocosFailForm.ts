import CocosBaseForm from "./CocosBaseForm";
import showFailOptions from "../../../model/showFailOptions";
import { VIDEO_STATUS } from "../../../enum/VIDEO_STATUS";
import { VIDEO_MSG } from "../../../enum/VIDEO_MSG";

export default class CocosFailForm extends CocosBaseForm {

    public btnBack: cc.Node = null;
    public btnVideo: cc.Node = null;

    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    public get FormData(): showFailOptions {
        return this.mFormData;
    }


    private addListener() {
        this.applyClickAnim(this.btnBack, () => {
            this.onBack();
        })
        this.applyClickAnim(this.btnVideo, () => {
            this.onVideo();
        })
    }
    private removeListener() {
        this.removeClickAnim(this.btnBack)
    }
    private onVideo() {
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
    onShow(data) {
        this.addListener();

    }
    willHide() {
        this.removeListener();

    }

    private onBack() {
        this.hideForm();
        if (this.FormData.callback)
            this.FormData.callback();
    }

}