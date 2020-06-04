
import MistouchForm from "./MistouchForm";
import EventType from "../../utils/EventType";
import { MISTOUCH_BANNER_TYPE } from "../../enum/MISTOUCH_BANNER_TYPE";
import UIForms from "../../config/UIForms";
import Common from "../../utils/Common";

export default class MistouchFormQQ extends MistouchForm {
    clickProgress: any = null;
    btnBanner: any = null;
    logo: any = null;
    hand: any = null;
    pinch1: any = null;
    pinch2: any = null;
    pinch3: any = null;
    pinch4: any = null;
    pinch5: any = null;
    pinch6: any = null;
    public mBeginPos: any;
    public mEndPos: any;



    willShow(data) {
        super.willShow(data);

        this.mCurrentNum = 0;
        this.mNavigateIndex = Common.randomNumBoth(3, this.mMaxNum - 2);
        this.addEvent();
        this.schedule(this.subProgress, 0.016)
        moosnow.form.showAd(moosnow.AD_POSITION.NONE, null)


        this.mBannerShow = false;


        if (this.mistouchAppBox()) {
            this.hand.active = true;
            this.btnBanner.active = false;
        }
        else {
            this.hand.active = false;
            this.btnBanner.active = true;
        }
        moosnow.platform.hideBanner();
    }

    public mistouchAppBox() {
        return this.FormData && this.FormData.mistouchType == 4
    }

    public subProgress() {
        if (this.mCurrentNum > 0)
            this.mCurrentNum -= 0.02
    }

    public initPos() {

    }

    public onHideBanner() {
        if (this.mistouchAppBox())
            moosnow.platform.hideAppBox();
        else
            moosnow.platform.hideBanner();

    }

    public onBannerClick() {

        this.mCurrentNum += 1;
        this.onLogoDown();

        if (this.mCurrentNum >= this.mNavigateIndex) {
            if (!this.mBannerShow) {
                this.mShowTime = Date.now();
                this.mBannerShow = true;
                if (this.mistouchAppBox()) {
                    moosnow.platform.showAppBox(() => {
                        this.bannerClickCallback(true);
                    })
                }
                else {
                    moosnow.platform.showBanner((e) => {
                        console.log('banner click callback ', e)
                        this.bannerClickCallback(e);
                    });

                }


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
            this.scheduleOnce(() => {
                moosnow.ui.destroyUIForm(UIForms.MistouchForm, null)
                if (this.FormData && this.FormData.onCompleted)
                    this.FormData.onCompleted();
            }, 0.2)

        }
    }
}