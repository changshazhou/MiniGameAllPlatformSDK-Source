import BaseForm from "../engine/BaseForm";
import { MISTOUCH_BANNER_TYPE } from "../../enum/MISTOUCH_BANNER_TYPE";
import UIForms from "../../config/UIForms";
import Common from "../../utils/Common";


export default class MistouchForm extends BaseForm {


    clickProgress: any = null;
    btnBanner: any = null;
    logo: any = null;

    public mBeginPos: any;
    public mEndPos: any;

    private mMaxNum: number = 10;
    private mCurrentNum: number = 0;
    private mNavigateIndex: number = 0;
    private mBannerShow: boolean = false;
    private mShowTime: number = 0;



    private mBannerClickType: MISTOUCH_BANNER_TYPE = MISTOUCH_BANNER_TYPE.AUTO_HIDE;

    private LogicData;


    public initPos() {

    }

    willShow(data) {

        this.btnBanner.active = true;

        this.LogicData = data;

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

    private subProgress() {
        if (this.mCurrentNum > 0)
            this.mCurrentNum -= 0.1
    }
    public addEvent() {

    }
    public removeEvent() {

    }

    private bannerClickCallback(isOpend) {
        if (isOpend) {
            this.unschedule(this.onHideBanner)
            this.unschedule(this.resetProgress)
            moosnow.platform.hideBanner();
            this.mBannerShow = false;
            this.onCompleted();
        }
    }



    public onLogoUp() {
    }
    public onLogoDown() {
    }

    public onBannerClick() {
        this.onLogoDown();

        this.mCurrentNum += 1;

        if (this.mCurrentNum >= this.mNavigateIndex) {
            if (!this.mBannerShow) {
                this.mShowTime = Date.now();
                this.mBannerShow = true;
                moosnow.platform.showBanner((e) => {
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
            moosnow.ui.destroyUIForm(UIForms.MistouchForm, null)
            this.onCompleted();
        }
    }

    /**
     * 点击完成回调
     */
    public onCompleted() {

    }

    private resetProgress() {
        this.mCurrentNum = 0;
        moosnow.platform.hideBanner();
        this.mBannerShow = false;
    }

    private onHideBanner() {
        moosnow.platform.hideBanner();
    }

    update() {
        this.clickProgress.progress = this.mCurrentNum / this.mMaxNum
    }

}
