import PlatformModule from "./PlatformModule";
import WXModule from "./WXModule";

class Main {
    constructor() {
        this.initPlatform();
        (window["moosnow"] as any) = this;
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

}
new Main();