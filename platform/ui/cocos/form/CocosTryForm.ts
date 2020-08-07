import CocosBaseForm from "./CocosBaseForm";
import showTryOptions from "../../../model/showTryOptions";
import { VIDEO_STATUS } from "../../../enum/VIDEO_STATUS";
import CocosFormFactory from "../helper/CocosFormFactory";
import { VIDEO_MSG } from "../../../enum/VIDEO_MSG";
import CocosNodeHelper from "../helper/CocosNodeHelper";
import CheckboxComponent from "../common/CheckboxComponent";
import NodeAttribute from "../../attribute/NodeAttribute";

export default class CocosTryForm extends CocosBaseForm {

    logo: cc.Node = null;
    btnVideo: cc.Node = null;
    btnNext: cc.Node = null;
    btnTry: cc.Node = null;

    private mCheckedVideo: boolean = false;
    public formComponents = [
        new CheckboxComponent(this.mCheckedVideo, (isChecked) => {
            this.mCheckedVideo = isChecked;
            if (this.btnNext)
                this.btnNext.active = isChecked;
            if (this.btnTry)
                this.btnTry.active = !isChecked;
        })
    ];

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
        this.applyClickAnim(this.btnTry, () => {
            this.onTextTry();
        })
    }
    public removeListener() {
        this.removeClickAnim(this.btnVideo)
        this.removeClickAnim(this.btnNext)
        this.removeClickAnim(this.btnTry)
    }

    public onShow(data) {
        super.onShow(data);
        CocosNodeHelper.changeSrc(this.logo, { url: this.FormData.skinUrl } as NodeAttribute);
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

    private onNext() {
        this.hideForm();
        if (this.FormData.callback)
            this.FormData.callback();
    }

    private onTextTry() {
        if (this.mCheckedVideo)
            this.onVideoTry();
        else
            this.onNext();
    }

}