
import MistouchForm from "./MistouchForm";
import EventType from "../../utils/EventType";
import { MISTOUCH_BANNER_TYPE } from "../../enum/MISTOUCH_BANNER_TYPE";
import UIForms from "../../config/UIForms";

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

        this.btnBanner.active = true;
        this.mCurrentNum = 0;
        this.mNavigateIndex = Common.randomNumBoth(3, this.mMaxNum - 2);
        this.addEvent();
        this.schedule(this.subProgress, 0.016)
        moosnow.form.showAd(moosnow.AD_POSITION.NONE, null)


        this.mBannerShow = false;


        if (this.mistouchAppBox()) {
            this.hand.active = true;
            let anim = this.hand.getComponent(cc.Animation);
            anim.play();
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

    public addEvent() {
        this.btnBanner.on(cc.Node.EventType.TOUCH_START, this.onLogoUp, this)
        this.btnBanner.on(cc.Node.EventType.TOUCH_END, this.onBannerClick, this)
    }
    public removeEvent() {
        this.btnBanner.off(cc.Node.EventType.TOUCH_START, this.onLogoUp, this)
        this.btnBanner.off(cc.Node.EventType.TOUCH_END, this.onBannerClick, this)
        moosnow.event.removeListener(EventType.ON_PLATFORM_SHOW, this);
    }

    public onLogoUp() {
        this.logo.position = this.mEndPos;
    }
    public onLogoDown() {
        this.logo.position = this.mBeginPos;
    }

    public initPos() {
        this.mBeginPos = this.logo.position.clone();
        this.mEndPos = this.mBeginPos.add(new cc.Vec2(0, 50));
    }

    public onHideBanner() {
        if (this.mistouchAppBox())
            moosnow.platform.hideAppBox();
        else
            moosnow.platform.hideBanner();

    }

    public onBannerClick() {
        this.onLogoDown();
        this.hand.active = false;
        this.mCurrentNum += 1;

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
            moosnow.ui.destroyUIForm(UIForms.MistouchForm, null)
            if (this.FormData && this.FormData.onCompleted)
                this.FormData.onCompleted();
        }
    }
}