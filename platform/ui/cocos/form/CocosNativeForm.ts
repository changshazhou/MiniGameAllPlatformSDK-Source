import CocosBaseForm from "./CocosBaseForm";
import nativeAdRow from "../../../model/nativeAdRow";
import CocosNodeHelper from "../helper/CocosNodeHelper";
import NodeAttribute from "../../attribute/NodeAttribute";
import showNativeOptions from "../../../model/showNativeOptions";


export default class CocosNativeForm extends CocosBaseForm {

    baseBox: cc.Node = null;
    logo: cc.Node = null;
    btnTopClose: cc.Node = null;
    btnClose: cc.Node = null;
    btnOpen: cc.Node = null;
    txtMemo: cc.Node = null;



    public get FormData(): showNativeOptions {
        return this.mFormData;
    }

    onShow(data) {
        super.onShow(data);
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        this.addListener();

        console.log('显示原生广告')
        moosnow.platform.hideBanner();
        // this.node.active = false;
        moosnow.platform.showNativeAd((row: nativeAdRow) => {
            console.log('原生广告', row)
            if (row && row.imgUrlList && row.imgUrlList.length > 0) {
                this.node.active = true;
                if (row.creativeType == 6) {
                    this.baseBox.height = this.baseBox.width / 2;
                }
                else {
                    this.baseBox.height = this.baseBox.width * (210 / 320);
                }
                CocosNodeHelper.changeText(this.txtMemo, row.desc)
                CocosNodeHelper.changeSrc(this.logo, { url: row.imgUrlList[0], width: this.logo.width, height: this.logo.height } as NodeAttribute);

            }
            else {
                if (this.FormData && this.FormData.nullCallback)
                    this.FormData.nullCallback();
                moosnow.platform.showBanner(false);
            }
        });

        moosnow.http.getAllConfig(res => {

            if (res && res.smallNativeAdClose == 1) {
                this.btnTopClose.scale = 0.7;
            }
            if (res && res.zs_native_click_switch == 1) {
                this.btnOpen.active = true;
                this.btnClose.active = false;
            }
            else {
                this.btnOpen.active = false;
                this.btnClose.active = true;
            }
        })
    }

    willHide(data) {
        this.remoteListener();
        super.willHide(data)
    }

    private addListener() {
        this.applyClickAnim(this.logo, () => {
            this.onOpenAd();
        });
        this.applyClickAnim(this.btnOpen, () => {
            this.onOpenAd()
        });
        this.applyClickAnim(this.btnTopClose, () => {
            this.onCloseAd()
        });
        this.applyClickAnim(this.btnClose, () => {
            this.onCloseAd()
        });

    }

    private remoteListener() {
        this.removeClickAnim(this.logo)
        this.removeClickAnim(this.btnOpen)
        this.removeClickAnim(this.btnTopClose)
        this.removeClickAnim(this.btnClose)
    }

    private onCloseAd() {
        if (this.FormData && this.FormData.callback)
            this.FormData.callback();
        this.hideForm();
    }

    private onOpenAd() {
        moosnow.platform.clickNative(() => {
            this.hideForm();
        });
    }

}
