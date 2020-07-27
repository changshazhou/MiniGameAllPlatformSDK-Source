
import EventType from "../../../utils/EventType";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import CocosBaseForm from "./CocosBaseForm";
import Common from "../../../utils/Common";
import showMistouchOptions from "../../../model/showMistouchOptions";

export default class CocosMistouchForm extends CocosBaseForm {

    clickProgress: cc.Node = null;
    btnReceive: any = null;
    logo: any = null;

    public mBeginPos: cc.Vec2;
    public mEndPos: cc.Vec2;
    public mMaxNum: number = 10;
    public mCurrentNum: number = 0;
    public mNavigateIndex: number = 0;
    public mBannerShow: boolean = false;
    public mShowTime: number = 0;

    public addEvent() {
        this.btnReceive.on(CocosNodeEvent.TOUCH_START, this.onLogoUp, this)
        this.btnReceive.on(CocosNodeEvent.TOUCH_END, this.onBannerClick, this)
    }
    public removeEvent() {
        this.btnReceive.off(CocosNodeEvent.TOUCH_START, this.onLogoUp, this)
        this.btnReceive.off(CocosNodeEvent.TOUCH_END, this.onBannerClick, this)
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


    public mBannerClickType: number = 0;

    public get FormData(): showMistouchOptions {
        return this.mFormData;
    }

    willShow(data) {
        super.willShow(data);
        this.btnReceive.active = true;

        this.initPos();

        this.mCurrentNum = 0;
        this.mNavigateIndex = Common.randomNumBoth(3, this.mMaxNum - 2);
        this.addEvent();
        this.schedule(this.subProgress, 0.1)
        moosnow.form.showAd(moosnow.AD_POSITION.NONE, null)


        this.mBannerShow = false;

        moosnow.http.getAllConfig(res => {
            this.mBannerClickType = res.bannerClickType
        })
        this.schedule(this.onFwUpdate, 0.1)

    }
    willHide() {
        this.unschedule(this.subProgress)
        this.unschedule(this.resetProgress)
        this.removeEvent();
        this.unschedule(this.onFwUpdate);
    }

    public subProgress() {
        this.mCurrentNum -= 0.1
        if (this.mCurrentNum < 0)
            this.mCurrentNum = 0;
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
                if (this.mBannerClickType == 1) {
                    this.unschedule(this.onHideBanner)
                    this.scheduleOnce(this.onHideBanner, 2)
                }
                else if (this.mBannerClickType == 2) {
                    this.unschedule(this.resetProgress)
                    this.scheduleOnce(this.resetProgress, 2)
                }

            }
        }
        if (this.mCurrentNum >= this.mMaxNum) {
            moosnow.platform.hideBanner();
            this.mBannerShow = false;
            this.hideForm();
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

    onFwUpdate() {
        this.clickProgress.getComponent(cc.ProgressBar).progress = this.mCurrentNum / this.mMaxNum
    }
}