import CocosBaseForm from "../form/CocosBaseForm";
import MathUtils from "../../../utils/MathUtils";
import CocosBaseComponent from "./CocosBaseComponent";
import EventType from "../../../utils/PLATFORM_EVENT";
import { VIDEO_STATUS } from "../../../enum/VIDEO_STATUS";
import { MSG } from "../../../config/MSG";
import { VIDEO_MSG } from "../../../enum/VIDEO_MSG";

export default class DelayComponent extends CocosBaseComponent {


    /**
     * 变化回调
     * @param isChecked 
     * @param callback 
     */
    constructor(isChecked, callback: (isChecked) => void) {
        super();
        this.toggleCallback = callback;
        this.mCheckedVideo = isChecked;
    }
    checked: cc.Node = null;
    unchecked: cc.Node = null;

    private toggleCallback: Function
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
                this.checkCallback();
                this.mCheckedVideo = !this.mCheckedVideo

            }
            return;
        }

        this.checked.active = this.mCheckedVideo
        this.unchecked.active = !this.mCheckedVideo;
        this.checkCallback();
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
        this.checkCallback();
    }

    private checkCallback() {
        if (this.toggleCallback)
            this.toggleCallback(this.mCheckedVideo);
    }

    public willHide() {
        this.removeListener();
    }
}