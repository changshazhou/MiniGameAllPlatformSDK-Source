import PlatformModule from "./platform/PlatformModule";
import WXModule from "./platform/WXModule";
import AdModule from "./ad/AdModule";
import { HttpModule } from "./framework/HttpModule";
import OPPOModule from "./platform/OPPOModule";
import GameDataCenter from "./framework/GameDataCenter";
import SettingModule from "./framework/SettingModule";
import OPPOAdModule from "./ad/OPPOAdModule";
import Common from "./utils/Common";
import { PlatformType } from "./enum/PlatformType";

class Main {
    constructor() {
        (window["moosnow"]) = this;
        
        this.initPlatform();
        this.mHttp = new HttpModule();
        this.initAd();
        this.mData = new GameDataCenter();
        this.mSetting = new SettingModule();
    }
    private initPlatform() {
        if (Common.platform == PlatformType.WX)
            this.mPlatform = new WXModule();
        else if (Common.platform == PlatformType.OPPO)
            this.mPlatform = new OPPOModule();
        else
            this.mPlatform = new PlatformModule();
        // console.log(' cc.sys.browserType ', cc.sys.browserType, ' cc.sys.platform ', cc.sys.platform)
    }

    private initAd() {
        if (Common.platform == PlatformType.WX)
            this.mAd = new AdModule();
        else if (Common.platform == PlatformType.OPPO)
            this.mAd = new OPPOAdModule();
        else
            this.mAd = new AdModule();
    }


    private mPlatform: PlatformModule;
    public get platform() {
        return this.mPlatform;
    }


    private mAd: AdModule;
    /**
     * 墨雪广告
     */
    public get ad() {
        return this.mAd;
    }

    private mHttp: HttpModule
    public get http() {
        return this.mHttp;
    }


    private mData: GameDataCenter = new GameDataCenter();
    /**
     * 本地内存
     */
    public get data() {
        return this.mData;
    }

    private mSetting: SettingModule = new SettingModule();
    /**
     * 本地持久化缓存
     */
    public get setting() {
        return this.mSetting;
    }


}
new Main();