import BaseLogic from "./BaseLogic";
import EventType from "../../utils/EventType";
import moosnowAdRow from "../../model/moosnowAdRow";

export default class AdViewItem extends BaseLogic {


    public logo: cc.Sprite = null;
    public title: cc.Label = null;
    public animLogo: cc.Sprite = null;
    public nameBg: cc.Sprite = null;
    public changeView: boolean = false;

    public mAdItem: moosnowAdRow;
    public initItem() {

    }

    public onClickAd() {
        let openAd = { ...this.mAdItem }
        if (this.changeView) {
            let nextAd = this.findNextAd();
            moosnow.event.sendEventImmediately(EventType.AD_VIEW_REFRESH, {
                current: openAd,
                next: nextAd
            })
            let callback = this.mAdItem.onCancel
            console.log('回调函数', !!callback)
            this.refreshImg({ ...nextAd, onCancel: callback });
        }
        moosnow.platform.navigate2Mini(openAd, () => { }, () => {
            if (this.mAdItem.onCancel)
                this.mAdItem.onCancel();
        })
    }

    private findNextAd(): moosnowAdRow {
        if (!this.LogicData.source)
            return null
        if (!this.LogicData.showAppId)
            return null
        for (let i = 0; i < this.LogicData.source.length; i++) {
            let isShow = false;
            for (let j = 0; j < this.LogicData.showAppId.length; j++) {
                if (this.LogicData.showAppId[j].appid == this.LogicData.source[i].appid) {
                    isShow = true;
                }
            }
            if (!isShow) {
                return this.LogicData.source[i];
            }
        }
        return null;
    }

    private onAdViewChange(e) {
        let { current, next } = e;
        for (let i = 0; i < this.LogicData.showAppId.length; i++) {
            if (current.appid == this.LogicData.showAppId[i]) {
                this.LogicData.showAppId[i] = next.appid;
            }
        }
        for (let i = 0; i < this.LogicData.source.length; i++) {
            if (next.appid == this.LogicData.source[i].appid) {
                this.LogicData.source.splice(i, 1)
                this.LogicData.source.push(current);
                break;
            }
        }
    }

    public onShow() {
        if (this.LogicData.onCancel) {
            console.log('ad view item ', this.LogicData)
        }
        if (this.changeView) {
            moosnow.event.addListener(EventType.AD_VIEW_REFRESH, this, this.onAdViewChange)
        }
    }

    public onHide() {
        if (this.mAdItem)
            this.mAdItem.onCancel = null;
        moosnow.event.removeListener(EventType.AD_VIEW_REFRESH, this);
    }



    public willShow(cell: moosnowAdRow) {
        super.willShow(cell);
    }




    public refreshImg(cell: moosnowAdRow) {
    }


    // update (dt) {}
}
