import CocosBaseForm from "../form/CocosBaseForm";
import MathUtils from "../../../utils/MathUtils";
import CocosBaseComponent from "./CocosBaseComponent";

export default class CheckboxComponent extends CocosBaseComponent {
    checked: cc.Node = null;
    unchecked: cc.Node = null;


    public mCheckedVideo: boolean = true;

    public addListener() {
        this.applyClickAnim(this.unchecked, () => {
            this.checkToggle(true);
        })
        this.applyClickAnim(this.checked, () => {
            this.checkToggle(true);
        })
    }
    public removeListener() {
        this.removeClickAnim(this.checked)
        this.removeClickAnim(this.unchecked)
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

    private mCanNum: number = 0;
    private mCheckBoxMistouch: boolean = false;
    private mClickNum: number = 0;
    private mVideoNum: number = 4;
    public checkToggle(mistouch: boolean = false) {
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

    public onShow(data) {
        moosnow.http.getAllConfig(res => {
            this.mCanNum = MathUtils.probabilitys(res.checkBoxProbabilitys) + 1;
            this.mCheckBoxMistouch = res.checkBoxMistouch == 1
        })
        this.addListener();
        this.mCheckedVideo = true;
        this.checkToggle();
    }
    public willHide() {
        this.removeListener();
    }
}