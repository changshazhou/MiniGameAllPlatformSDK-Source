import BaseForm from "../engine/BaseForm";
import { MISTOUCH_BANNER_TYPE } from "../../enum/MISTOUCH_BANNER_TYPE";
import UIFormSetting from "../../config/UIFormSetting";
import Common from "../../utils/Common";
import showTouchOptions from "../../model/showTouchOptions";
import BaseModule from "../../framework/BaseModule";


export default class MistouchForm extends BaseForm {


    clickProgress: any = null;
    btnBanner: any = null;
    logo: any = null;

    public mBeginPos: any;
    public mEndPos: any;

    public mMaxNum: number = 10;
    public mCurrentNum: number = 0;
    public mNavigateIndex: number = 0;
    public mBannerShow: boolean = false;
    public mShowTime: number = 0;



    public mBannerClickType: MISTOUCH_BANNER_TYPE = MISTOUCH_BANNER_TYPE.AUTO_HIDE;

    public get FormData(): showTouchOptions {
        return this.mFormData;
    }


    public initPos() {

    }

    willShow(data) {
        super.willShow(data);
        this.btnBanner.active = true;

        this.initPos();

        this.mCurrentNum = 0;
        this.mNavigateIndex = Common.randomNumBoth(3, this.mMaxNum - 2);
        this.addEvent();
        this.schedule(this.subProgress, 0.1)
        moosnow.form.showAd(moosnow.AD_POSITION.NONE, null)


        this.mBannerShow = false;

        moosnow.http.getAllConfig(res => {
            // this.mBannerClickType = res.bannerClickType
            this.mBannerClickType = MISTOUCH_BANNER_TYPE.MAST;
        })

    }
    willHide() {
        this.unschedule(this.subProgress)
        this.unschedule(this.resetProgress)
        this.removeEvent();

    }

    public subProgress() {
        if (this.mCurrentNum > 0)
            this.mCurrentNum -= 0.1
    }
    public addEvent() {

    }
    public removeEvent() {

    }

    public bannerClickCallback(isOpend) {
        if (isOpend) {
            this.unschedule(this.onHideBanner)
            this.unschedule(this.resetProgress)
            moosnow.platform.hideBanner();
            this.mBannerShow = false;
            if (this.FormData && this.FormData.callback)
                this.FormData.callback();
        }
    }

    public onLogoUp() {
        this.logo.position = this.mEndPos;
    }
    public onLogoDown() {
        this.logo.position = this.mBeginPos;
    }


    public onBannerClick() {
        this.onLogoDown();

        this.mCurrentNum += 1;

        if (this.mCurrentNum >= this.mNavigateIndex) {
            if (!this.mBannerShow) {
                this.mShowTime = Date.now();
                this.mBannerShow = true;
                moosnow.platform.showBanner(true, (e) => {
                    console.log('banner click callback ', e)
                    this.bannerClickCallback(e);
                });
                if (this.mBannerClickType == MISTOUCH_BANNER_TYPE.AUTO_HIDE) {
                    this.unschedule(this.onHideBanner)
                    this.scheduleOnce(this.onHideBanner, 2)
                }
                else if (this.mBannerClickType == MISTOUCH_BANNER_TYPE.MAST) {
                    this.unschedule(this.resetProgress)
                    this.scheduleOnce(this.resetProgress, 2)
                }

            }
        }
        if (this.mCurrentNum >= this.mMaxNum) {
            moosnow.platform.hideBanner();
            this.mBannerShow = false;
            moosnow.ui.destroyUIForm(UIFormSetting.MistouchForm, null)
            if (this.FormData && this.FormData.callback)
                this.FormData.callback(true);
        }
    }

    public resetProgress() {
        this.mCurrentNum = 0;
        moosnow.platform.hideBanner();
        this.mBannerShow = false;
    }

    public onHideBanner() {
        moosnow.platform.hideBanner();
    }

    update() {
        this.clickProgress.progress = this.mCurrentNum / this.mMaxNum
    }

}
