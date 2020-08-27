import MathUtils from "../../../utils/MathUtils";
import CocosBaseComponent from "./CocosBaseComponent";
import { VIDEO_STATUS } from "../../../enum/VIDEO_STATUS";
import { VIDEO_MSG } from "../../../enum/VIDEO_MSG";


export default class CheckboxComponent extends CocosBaseComponent {


    private checkedName: string = "checked";
    private uncheckedName: string = "unchecked";
    private toggleCallback: Function
    public mCheckedVideo: boolean = true;
    /**
     * 变化回调
     * @param isChecked 
     * @param callback 
     */
    constructor(isChecked = true, callback?: (isChecked) => void, checkedName?: string, uncheckedName?: string) {
        super();
        this.toggleCallback = callback;
        this.mCheckedVideo = isChecked;
        if (checkedName)
            this.checkedName = checkedName;
        if (uncheckedName)
            this.uncheckedName = uncheckedName;
        this[this.checkedName] = null;
        this[this.uncheckedName] = null;
        // if (callback)
        //     callback(isChecked)
    }


    private addListener() {

        if (this[this.uncheckedName])
            this.applyClickAnim(this[this.uncheckedName], () => {
                this.checkToggle();
            })
        if (this[this.checkedName])
            this.applyClickAnim(this[this.checkedName], () => {
                this.checkToggle();
            })
    }
    private removeListener() {
        if (this[this.checkedName])
            this.removeClickAnim(this[this.checkedName])
        if (this[this.uncheckedName])
            this.removeClickAnim(this[this.uncheckedName])
    }

    public onReceive() {
        if (this.mCheckedVideo) {
            moosnow.platform.showVideo(res => {
                if (res == VIDEO_STATUS.END) {
                    if (this.FormData.videoCallback)
                        this.FormData.videoCallback();
                }
                else if (res == VIDEO_STATUS.ERR) {
                    moosnow.form.showToast(VIDEO_MSG.ERR)
                }
                else {
                    moosnow.form.showToast(VIDEO_MSG.NOTEND)
                }
            })
        }
        else {
            if (this.FormData.callback)
                this.FormData.callback();
        }
    }

    private mCanNum: number = 0;
    private mCheckBoxMistouch: boolean = false;
    private mClickNum: number = 0;
    private mCheckBoxVideoNum: number = 3;
    public checkToggle() {
        if (this.mCheckBoxMistouch) {
            this.mClickNum++;
            if (this.mClickNum == this.mCheckBoxVideoNum) {
                moosnow.platform.showVideo(() => { });
            }
            if (this.mClickNum >= this.mCanNum) {
                this.mCheckedVideo = !this.mCheckedVideo
                this.updateCheckbox();
            }
            this.checkCallback();
            return;
        }

        this.mCheckedVideo = !this.mCheckedVideo
        this.updateCheckbox();
        this.checkCallback();
    }

    public onShow(data) {
        super.onShow(data);
        moosnow.http.getAllConfig(res => {
            this.mCanNum = MathUtils.probabilitys(res.checkBoxProbabilitys) + 1;
            this.mCheckBoxVideoNum = res && !isNaN(res.checkBoxVideoNum) ? res.checkBoxVideoNum : 3
            this.mCheckBoxMistouch = res.checkBoxMistouch == 1
        })
        this.addListener();
        this.updateCheckbox();
        this.checkCallback();
    }


    private updateCheckbox() {
        if (this[this.checkedName])
            this[this.checkedName].active = this.mCheckedVideo
        if (this[this.uncheckedName])
            this[this.uncheckedName].active = !this.mCheckedVideo;
    }


    private checkCallback() {
        if (this.toggleCallback)
            this.toggleCallback(this.mCheckedVideo);
    }

    public willHide() {
        this.removeListener();
    }
}