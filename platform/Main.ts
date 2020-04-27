import PlatformModule from "./platform/PlatformModule";
import WXModule from "./platform/WXModule";
import AdModule from "./ad/AdModule";
import { HttpModule } from "./http/HttpModule";
import OPPOModule from "./platform/OPPOModule";
import GameDataCenter from "./framework/GameDataCenter";
import SettingModule from "./framework/SettingModule";
import OPPOAdModule from "./ad/OPPOAdModule";
import Common from "./utils/Common";
import { PlatformType } from "./enum/PlatformType";
import WXAdModule from "./ad/WXAdModule";
import TTModule from "./ad/TTModule";
import QQModule from "./platform/QQModule";
import ZSOPPOAdModule from "./ad/ZSOPPOAdModule";
import ZSOPPOModule from "./platform/ZSOPPOModule";
import { ZSHttpModule } from "./http/ZSHttpModule";

import { BANNER_POSITION } from "./enum/BANNER_POSITION";
import { VIDEO_STATUS } from "./enum/VIDEO_STATUS";
import { SHARE_MSG } from "./enum/SHARE_MSG";
import { VIDEO_MSG } from "./enum/VIDEO_MSG";

class Main {
    public VIDEO_STATUS = VIDEO_STATUS;
    public VIDEO_MSG = VIDEO_MSG;
    public SHARE_MSG = SHARE_MSG;
    public BANNER_POSITION = BANNER_POSITION;
    constructor() {
        (window["moosnow"]) = this;


        this.initPlatform();
        this.initHttp();
        this.initAd();
        this.mData = new GameDataCenter();
        this.mSetting = new SettingModule();
    }

    private initHttp() {
        if (Common.platform == PlatformType.WX)
            this.mHttp = new HttpModule();
        else if (Common.platform == PlatformType.OPPO_ZS) {
            this.mHttp = new ZSHttpModule();
        }
        else
            this.mHttp = new HttpModule();
    }

    private initPlatform() {
        if (Common.platform == PlatformType.WX)
            this.mPlatform = new WXModule();
        else if (Common.platform == PlatformType.OPPO)
            this.mPlatform = new OPPOModule();
        else if (Common.platform == PlatformType.OPPO_ZS) {
            this.mPlatform = new ZSOPPOModule();
        }
        else if (Common.platform == PlatformType.BYTEDANCE)
            this.mPlatform = new TTModule();
        else if (Common.platform == PlatformType.QQ)
            this.mPlatform = new QQModule();
        else
            this.mPlatform = new PlatformModule();
        // console.log(' cc.sys.browserType ', cc.sys.browserType, ' cc.sys.platform ', cc.sys.platform)
    }

    private initAd() {
        if (Common.platform == PlatformType.WX)
            this.mAd = new WXAdModule();
        else if (Common.platform == PlatformType.OPPO) {
            this.mAd = new OPPOAdModule();
        }
        else if (Common.platform == PlatformType.OPPO_ZS) {
            this.mAd = new ZSOPPOAdModule();
        }
        else
            this.mAd = new WXAdModule();
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