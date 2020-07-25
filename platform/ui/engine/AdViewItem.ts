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

    // public get LogicData(): moosnowAdRow {
    //     return this.mLogicData;
    // }

    public onClickAd() {
        let openAd = this.mAdItem
        if (this.LogicData.refresh) {
            let nextAd = this.findNextAd();
            if (nextAd.refresh)
                moosnow.event.sendEventImmediately(EventType.AD_VIEW_REFRESH, {
                    current: openAd,
                    next: nextAd
                })
            this.refreshImg(nextAd);
        }
        moosnow.platform.navigate2Mini(openAd, () => { }, () => {
            if (this.mAdItem.onCancel)
                this.mAdItem.onCancel(openAd);
        })
    }

    private findNextAd(): moosnowAdRow {
        if (!this.LogicData.source)
            return null
        if (!this.LogicData.showIds)
            return null
        for (let i = 0; i < this.LogicData.source.length; i++) {
            let isShow = false;
            for (let j = 0; j < this.LogicData.showIds.length; j++) {
                if (this.LogicData.showIds[j].appid == this.LogicData.source[i].appid
                    && this.LogicData.showIds[j].position == this.LogicData.source[i].position) {
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
        if (!this.LogicData.showIds) return;
        if (!this.LogicData.source) return;
        let { current, next } = e;

        let showApps = this.LogicData.showIds;
        let sourceApps = this.LogicData.source;

        for (let i = 0; i < showApps.length; i++) {
            if (current.appid == showApps[i].appid && current.position == showApps[i].position) {
                this.LogicData.showIds[i] = next.appid;
            }
        }
        for (let i = 0; i < sourceApps.length; i++) {
            if (next.appid == sourceApps[i].appid) {
                this.LogicData.source.splice(i, 1)
                this.LogicData.source.push(current);
                break;
            }
        }
    }

    public onShow() {
        if (this.LogicData && this.LogicData.refresh)
            moosnow.event.addListener(EventType.AD_VIEW_REFRESH, this, this.onAdViewChange)
    }

    public onHide() {
        if (this.mAdItem)
            this.mAdItem.onCancel = null;
        this.removeListener();
        moosnow.event.removeListener(EventType.AD_VIEW_REFRESH, this);
    }


    public addListener() {

    }

    public removeListener() {

    }


    public willShow(cell: moosnowAdRow) {
        super.willShow(cell);
        this.addListener();
    }




    public refreshImg(cell: moosnowAdRow) {
    }


    // update (dt) {}
}
