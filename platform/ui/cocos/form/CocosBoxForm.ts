import CocosBaseForm from "./CocosBaseForm";
import showBoxOptions from "../../../model/showBoxOptions";
import CheckboxComponent from "../common/CheckboxComponent";
import CocosFormFactory from "../helper/CocosFormFactory";
import CocosBoxItem from "../template/CocosBoxItem";
import Common from "../../../utils/Common";
import EventType from "../../../utils/EventType";

export default class CocosBoxForm extends CocosBaseForm {

    boxLayout: cc.Node = null;
    btnReceive: cc.Node = null;
    btnNext: cc.Node = null;
    keyNum: cc.Node = null;

    public get FormData(): showBoxOptions {
        return this.mFormData;
    }

    private mTryFromVideo: boolean = true;
    public formComponents = [
        new CheckboxComponent(this.mTryFromVideo, (isChecked) => {
            this.mTryFromVideo = isChecked;
            this.btnNext.active = !isChecked;
            this.btnReceive.active = isChecked;
        })
    ];

    public onShow(data) {
        console.log("this.mTryFromVideo 1 ", this.mTryFromVideo)
        super.onShow(data);
        this.boxLayout.getComponent(cc.Layout).type = cc.Layout.Type.GRID;
        console.log("this.mTryFromVideo 2 ", this.mTryFromVideo)

        this.btnNext.active = !this.mTryFromVideo;
        this.btnReceive.active = this.mTryFromVideo;


        let idx = 0;
        for (let i = 0; i < this.FormData.rowNum; i++) {
            for (let j = 0; j < this.FormData.colNum; j++) {

                let coinNum = Common.randomNumBoth(this.FormData.coinNum[0], this.FormData.coinNum[1]);
                let videoCoinNum = Common.randomNumBoth(this.FormData.videoCoinNum[0], this.FormData.videoCoinNum[1]);
                let isVideo = this.FormData.videoNum && this.FormData.videoNum.indexOf(idx) != -1;
                moosnow.form.formFactory.createNodeByTemplate("boxItem", CocosBoxItem, {
                    coinNum,
                    videoCoinNum,
                    isVideo,
                    idx
                }, this.boxLayout)
                idx++
            }
        }
        this.addListener()
        this.updateKeyNum();

    }
    public onHide(data) {
        super.onHide(data);
        moosnow.form.formFactory.hideNodeByTemplate("boxItem", null);
        this.removeListener();
    }
    private addListener() {
        this.applyClickAnim(this.btnNext, () => {
            this.nextForm();
        })
        this.applyClickAnim(this.btnReceive, () => {
            this.onReceive();
        })

        moosnow.event.addListener(EventType.PRIZE_BOX_UNLOCAK, this, this.onPrizeBoxUnLock)
    }
    private removeListener() {
        this.removeClickAnim(this.btnNext)
        this.removeClickAnim(this.btnReceive)
        moosnow.event.removeListener(EventType.PRIZE_BOX_UNLOCAK, this)
    }

    private onPrizeBoxUnLock(prizeItem) {
        this.btnReceive.active = true;
        this.updateKeyNum();
        if (this.FormData.openCallback)
            this.FormData.openCallback(prizeItem.coinNum);
    }

    private _Receiveing: boolean = false;
    private onReceive() {
        if (this._Receiveing)
            return;
        this._Receiveing = true;
        if (this.mTryFromVideo) {
            moosnow.platform.showVideo(res => {
                switch (res) {
                    case moosnow.VIDEO_STATUS.NOTEND:
                        this._Receiveing = false;
                        moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
                        break;
                    case moosnow.VIDEO_STATUS.ERR:
                        this._Receiveing = false;
                        moosnow.form.showToast(moosnow.VIDEO_MSG.ERR);
                        break;
                    case moosnow.VIDEO_STATUS.END:
                        moosnow.data.addPrizeKey(3);
                        this.updateKeyNum();
                    default:
                        break;
                }
            })
        }
        else {
            this.nextForm();
        }
    }

    private nextForm() {
        moosnow.data.clearPrizeBox();
        moosnow.data.clearPrizeKey();
        this._Receiveing = false;
        this.hideForm();
        if (this.FormData.callback)
            this.FormData.callback();
    }

    private updateKeyNum() {
        this.keyNum.getComponent(cc.Label).string = `${moosnow.data.getPrizeKey()}`
    }

}