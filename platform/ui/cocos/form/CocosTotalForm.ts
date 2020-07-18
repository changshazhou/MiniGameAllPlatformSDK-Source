import CocosBaseForm from "./CocosBaseForm";
import Common from "../../../utils/Common";
import showTotalOptions from "../../../model/showTotalOptions";
import MathUtils from "../../../utils/MathUtils";
import CheckboxComponent from "../common/CheckboxComponent";

export default class CocosTotalForm extends CocosBaseForm {

    checked: cc.Node = null;
    unchecked: cc.Node = null;
    btnContinue: cc.Node = null;
    coinNum: cc.Node = null;
    videoText: cc.Node = null;

    private mCheckedVideo: boolean = false;
    public formComponents = [
        new CheckboxComponent((e) => {
            this.mCheckedVideo = e;
        })
    ];
    public get FormData(): showTotalOptions {

        return this.mFormData;
    }

    public addListener() {
        this.applyClickAnim(this.btnContinue, () => {
            this.onReceive();
        })
    }
    public removeListener() {
        this.removeClickAnim(this.btnContinue)
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

    public mLevelCoinNum: number = 0;
    public mLevelShareCoinNum: number = 0;
    public onShow(data) {

        super.onShow(data);

        this.mLevelCoinNum = this.FormData.coinNum;
        this.mLevelShareCoinNum = this.FormData.coinNum;
        this.videoText.getComponent(cc.Label).string = `${this.FormData.videoText}`
        this.coinNum.getComponent(cc.Label).string = `${Common.formatMoney(this.mLevelCoinNum)}`
        this.addListener();
        moosnow.platform.stopRecord();
        moosnow.platform.showBanner();
    }

    public willHide(data) {
        super.willHide(data);
        this.removeListener();
        moosnow.platform.hideBanner();
    }
}
