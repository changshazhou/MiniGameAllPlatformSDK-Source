
import showBoxOptions from "../../../model/showBoxOptions";
import CheckboxComponent from "../common/CheckboxComponent";
import CocosFormFactory from "../helper/CocosFormFactory";
import CocosBaseForm from "../form/CocosBaseForm";
import EventType from "../../../utils/PLATFORM_EVENT";
import Common from "../../../utils/Common";
import { VIDEO_STATUS } from "../../../enum/VIDEO_STATUS";
import { VIDEO_MSG } from "../../../enum/VIDEO_MSG";

export default class CocosBoxItem extends CocosBaseForm {

    checkdBg: cc.Node = null;
    opend: cc.Node = null;
    lockd: cc.Node = null;
    video: cc.Node = null;

    coinNum: cc.Node = null;

    public get FormData(): any {
        return this.mFormData;
    }
    willShow(data) {
        super.willShow(data);
        this.initItem(data);
        this.addListener();
    }
    willHide(data) {
        super.willHide(data);
        this.removeListener();
    }
    public addListener() {
        this.applyClickAnim(this.node, () => {
            this.onCheck();
        })
        moosnow.event.addListener(EventType.PRIZE_BOX_UNLOCAK, this, this.onCheckChange)
    }


    public removeListener() {
        this.removeClickAnim(this.node)
        moosnow.event.removeListener(EventType.PRIZE_BOX_UNLOCAK, this)
    }

    public initItem(data) {
        this.coinNum.active = data.coinNum > 0;
        let cacheItem = moosnow.data.getUserPrizeBoxById(data.idx)
        if (cacheItem) {
            this.coinNum.getComponent(cc.Label).string = `${Common.formatMoney(cacheItem.coinNum)}`;
            this.opend.active = true;
            this.lockd.active = false
            this.video.active = false
        }
        else {
            this.opend.active = false;
            this.lockd.active = true
            this.video.active = this.FormData.isVideo;
        }
        this.checkdBg.active = false;
    }


    private onCheckChange(prizeItem) {
        let cacheItem = moosnow.data.getUserPrizeBoxById(this.FormData.idx)
        if (cacheItem) {
            this.coinNum.active = true;
            this.coinNum.getComponent(cc.Label).string = `${Common.formatMoney(cacheItem.coinNum)}`;
            this.opend.active = true;
            this.lockd.active = false
            this.video.active = false

        }
        else {
            this.coinNum.active = false;
            this.video.active = this.FormData.isVideo;
            this.opend.active = false;
            this.lockd.active = true
        }
    }

    private _opening: boolean = false;
    private onCheck() {
        if (this._opening)
            return;
        this._opening = true;
        if (this.FormData.videoNum) {
            moosnow.platform.showVideo(res => {
                this._opening = false;
                switch (res) {
                    case VIDEO_STATUS.NOTEND:
                        moosnow.form.showToast(VIDEO_MSG.NOTEND);
                        break;
                    case VIDEO_STATUS.ERR:
                        moosnow.form.showToast(VIDEO_MSG.ERR);
                        break;
                    case VIDEO_STATUS.END:
                        moosnow.data.lockPrizeBox(this.FormData.idx, 1, this.FormData.coinNum)
                        moosnow.event.sendEventImmediately(EventType.PRIZE_BOX_UNLOCAK, this.FormData)
                    default:
                        break;
                }
            })
        }
        else {
            let keyNum = moosnow.data.getPrizeKey();
            if (keyNum > 0) {
                moosnow.data.addPrizeKey(-1)
                moosnow.data.lockPrizeBox(this.FormData.idx, 0, this.FormData.coinNum)
                moosnow.event.sendEventImmediately(EventType.PRIZE_BOX_UNLOCAK, this.FormData);

            }
            else {
                this._opening = false;
                moosnow.form.showToast("钥匙不足")
                moosnow.event.sendEventImmediately(EventType.PRIZE_BOX_UNLOCAK, this.FormData)
            }
        }
    }
}