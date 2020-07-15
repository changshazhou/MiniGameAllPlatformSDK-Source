
import TotalForm from "../../engine/TotalForm";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import CocosBaseForm from "./CocosBaseForm";

export default class CocosTotalForm extends CocosBaseForm {

    checked: cc.Node = null;
    unchecked: cc.Node = null;
    btnReceive: cc.Node = null;
    levelCoin: cc.Label = null;
    public mCheckedVideo: boolean = true;



    public addListener() {
        this.applyClickAnim(this.unchecked, () => {
            this.onContinue();
        })
        this.applyClickAnim(this.btnReceive, () => {
            this.onReceive();
        })
    }
    public removeListener() {
        this.removeClickAnim(this.unchecked)
        this.removeClickAnim(this.btnReceive)
    }
    public onReceive() {
        if (this.mCheckedVideo) {
            moosnow.platform.showVideo(res => {
                if (res == moosnow.VIDEO_STATUS.END) {

                }
                else if (res == moosnow.VIDEO_STATUS.ERR) {
                }
                else {
                }
            })
        }
        else {

        }
    }
    public changeUI() {
        if (this.mCheckedVideo) {
            this.checked.active = true;
        }
        else {
            this.checked.active = false;
        }
    }
}
