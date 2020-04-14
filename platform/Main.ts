import PlatformModule from "./PlatformModule";
import WXModule from "./WXModule";
import AdModule from "./AdModule";
import { HttpModule } from "./HttpModule";

class Main {
    constructor() {
        (window["moosnow"]) = this;
        this.initPlatform();
        this.mHttp = new HttpModule();
        this.mAd = new AdModule();
    }
    private mPlatform: PlatformModule;
    public get platform() {
        return this.mPlatform;
    }
    private initPlatform() {
        if (window['wx'])
            this.mPlatform = new WXModule();
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

}
new Main();