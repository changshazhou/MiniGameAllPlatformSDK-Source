
import MistouchForm from "../engine/MistouchForm";
import EventType from "../../utils/EventType";
import { MISTOUCH_BANNER_TYPE } from "../../enum/MISTOUCH_BANNER_TYPE";
import UIFormSetting from "../../config/UIFormSetting";
import MistouchFormQQ from "../engine/MistouchFormQQ";
import CocosNodeEvent from "./enum/CocosNodeEvent";

export default class CocosMistouchFormQQ extends MistouchFormQQ {
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

    public onLogoUp() {

    }

    public onLogoDown() {
        let logoSprite = this.logo.getComponent(cc.Sprite)
        if (this.mCurrentNum < this.mMaxNum)
            logoSprite.spriteFrame = this[`pinch${(parseInt("" + this.mCurrentNum) % 4) + 1}`];
        else
            logoSprite.spriteFrame = this.pinch6;

    }

    public addEvent() {
        //误触appbox 广告
        if (this.mistouchAppBox()) {
            this.btnBanner.active = false;
            this.logo.on(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
            this.logo.on(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
        }
        else {
            //误触banner
            this.btnBanner.active = true;
            this.btnBanner.on(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
            this.btnBanner.on(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
        }
        moosnow.event.addListener(EventType.ON_PLATFORM_SHOW, this, () => {
            if (this.mBannerShow)
                this.bannerClickCallback(true);
        })
    }
    public removeEvent() {
        this.btnBanner.off(CocosNodeEvent.TOUCH_END, this.onBannerClick, this)
        moosnow.event.removeListener(EventType.ON_PLATFORM_SHOW, this);
    }

    public playHandAnim() {
        let anim = this.hand.getComponent(cc.Animation);
        anim.play();
    }

    public showButton(isShow) {
        this.btnBanner.active = isShow;
    }
    public showHand(isShow) {
        this.hand.active = isShow;
    }
}