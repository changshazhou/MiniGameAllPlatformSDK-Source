
import MistouchForm from "../engine/MistouchForm";
import EventType from "../../utils/EventType";

export default class CocosMistouchForm extends MistouchForm {

    clickProgress: any = null;
    btnBanner: any = null;
    logo: any = null;

    public mBeginPos: cc.Vec2;
    public mEndPos: cc.Vec2;


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
}