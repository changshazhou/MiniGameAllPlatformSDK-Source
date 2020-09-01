import moosnowAdRow from "../../../model/moosnowAdRow";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import CocosBaseForm from "../form/CocosBaseForm";
import EventType from "../../../utils/EventType";
import CocosNodeHelper from "../helper/CocosNodeHelper";
import NodeAttribute from "../../attribute/NodeAttribute";

export default class CocosAdViewItem extends CocosBaseForm {

    public logo: cc.Node = null;
    public title: cc.Node = null;
    public animLogo: cc.Node = null;
    public nameBg: cc.Node = null;
    public mAdItem: moosnowAdRow;


    private mLogoWidth: number
    private mLogoHeight: number

    private addListener() {
        this.logo.on(CocosNodeEvent.TOUCH_END, this.onClickAd, this)
    }

    private removeListener() {
        this.logo.off(CocosNodeEvent.TOUCH_END, this.onClickAd, this)
    }


    public initPosition(data) {

    }



    public willShow(cell: moosnowAdRow) {
        super.willShow(cell);
        this.mAdItem = cell;
        this.addListener();
    }



    public refreshImg(cell: moosnowAdRow) {
        this.mAdItem = cell;
        this.updateUI();
    }

    private updateUI() {
        let { width, height } = this.logo;
        // console.log('logo complete 1', this.mAdItem.title, "logo ", this.logo.width, this.logo.height, "node ", this.node.width, this.node.height)
        CocosNodeHelper.changeSrc(this.logo, { url: this.mAdItem.img } as NodeAttribute, () => {
            // console.log('logo complete 2 ', this.mAdItem.title, "logo ", this.logo.width, this.logo.height, "node ", this.node.width, this.node.height)
            this.logo.width = width;
            this.logo.height = height;
            // console.log('logo complete 3 ', this.mAdItem.title, "logo ", this.logo.width, this.logo.height, "node ", this.node.width, this.node.height)
        });



        CocosNodeHelper.changeText(this.title, this.mAdItem.title);
    }

    public onClickAd() {
        let openAd = this.mAdItem
        if (this.FormData && this.FormData.refresh) {
            let nextAd = this.findNextAd();
            if (nextAd.refresh)
                moosnow.event.sendEventImmediately(EventType.AD_VIEW_REFRESH, {
                    current: openAd,
                    next: nextAd
                })
            this.refreshImg(nextAd);
        }
        moosnow.platform.navigate2Mini(openAd, () => { }, () => {
            if (this.mAdItem && this.mAdItem.onCancel)
                this.mAdItem.onCancel(openAd);
        })
    }

    private findNextAd(): moosnowAdRow {
        if (!this.FormData.source)
            return null
        if (!this.FormData.showIds)
            return null
        for (let i = 0; i < this.FormData.source.length; i++) {
            let isShow = false;
            for (let j = 0; j < this.FormData.showIds.length; j++) {
                if (this.FormData.showIds[j].appid == this.FormData.source[i].appid
                    && this.FormData.showIds[j].position == this.FormData.source[i].position) {
                    isShow = true;
                }
            }
            if (!isShow) {
                return this.FormData.source[i];
            }
        }
        return null;
    }

    private onAdViewChange(e) {
        if (!this.FormData.showIds) return;
        if (!this.FormData.source) return;
        let { current, next } = e;

        let showApps = this.FormData.showIds;
        let sourceApps = this.FormData.source;

        for (let i = 0; i < showApps.length; i++) {
            if (current.appid == showApps[i].appid && current.position == showApps[i].position) {
                this.FormData.showIds[i] = next.appid;
            }
        }
        for (let i = 0; i < sourceApps.length; i++) {
            if (next.appid == sourceApps[i].appid) {
                this.FormData.source.splice(i, 1)
                this.FormData.source.push(current);
                break;
            }
        }
    }

    public onShow(data) {
        super.onShow(data)
        this.updateUI();
        moosnow.event.addListener(EventType.AD_VIEW_REFRESH, this, this.onAdViewChange)
    }

    public onHide(data) {
        super.onHide(data)
        if (this.mAdItem)
            this.mAdItem.onCancel = null;
        this.removeListener();
        moosnow.event.removeListener(EventType.AD_VIEW_REFRESH, this);
    }
}