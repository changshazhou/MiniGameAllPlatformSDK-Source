import PlatformModule from "./PlatformModule";
import WXModule from "./WXModule";
import AdModule from "./AdModule";
import { HttpModule } from "./HttpModule";
import OPPOModule from "./OPPOModule";
import GameDataCenter from "./GameDataCenter";
import SettingModule from "./SettingModule";

class Main {
    constructor() {
        (window["moosnow"]) = this;
        this.initPlatform();
        this.mHttp = new HttpModule();
        this.mAd = new AdModule();
        this.mData = new GameDataCenter();
        this.mSetting = new SettingModule();
    }
    private mPlatform: PlatformModule;
    public get platform() {
        return this.mPlatform;
    }
    private initPlatform() {
        if (window['wx'])
            this.mPlatform = new WXModule();
        else if (window['qg'])
            this.mPlatform = new OPPOModule();
        else
            this.mPlatform = new PlatformModule();
        // console.log(' cc.sys.browserType ', cc.sys.browserType, ' cc.sys.platform ', cc.sys.platform)
    }
    private mAd: AdModule;
    public get ad() {
        return this.mAd;
    }

    private mHttp: HttpModule
    public get http() {
        return this.mHttp;
    }


    private mData: GameDataCenter = new GameDataCenter();
    public get data() {
        return this.mData;
    }

    private mSetting: SettingModule = new SettingModule();
    public get setting() {
        return this.mSetting;
    }


}
new Main();