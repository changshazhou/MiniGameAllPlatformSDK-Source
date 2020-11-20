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
import TTModule from "./platform/TTModule";
import QQModule from "./platform/QQModule";
import ZSOPPOAdModule from "./ad/ZSOPPOAdModule";
import ZSOPPOModule from "./platform/ZSOPPOModule";
import BDModule from "./platform/BDModule";
import { ZSHttpModule } from "./http/ZSHttpModule";

import { VIDEO_STATUS } from "./enum/VIDEO_STATUS";
import { SHARE_MSG } from "./enum/SHARE_MSG";
import { VIDEO_MSG } from "./enum/VIDEO_MSG";
import { SHARE_CHANNEL } from "./enum/SHARE_CHANNEL";
import EventModule from "./framework/EventModule";
import EventType from "./utils/EventType";
import VIVOModule from "./platform/VIVOModule";
import { AD_POSITION } from "./enum/AD_POSITION";
import ResourceModule from "./framework/ResourceModule";
import AudioModule from "./framework/AudioModule";
import UCModule from "./platform/UCModule";
import { BLOCK_HORIZONTAL, BLOCK_VERTICAL } from "./enum/BLOCK_POSITION";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "./enum/BANNER_POSITION";
import moosnowAppConfig from "./model/moosnowAppConfig";

export default class moosnow {
    public VIDEO_STATUS = VIDEO_STATUS;
    public VIDEO_MSG = VIDEO_MSG;
    public SHARE_MSG = SHARE_MSG;
    public BANNER_HORIZONTAL = BANNER_HORIZONTAL;
    public BANNER_VERTICAL = BANNER_VERTICAL;
    public BLOCK_HORIZONTAL = BLOCK_HORIZONTAL;
    public BLOCK_VERTICAL = BLOCK_VERTICAL;
    public SHARE_CHANNEL = SHARE_CHANNEL;
    public APP_PLATFORM = PlatformType;
    public PLATFORM_EVENT = EventType;
    public Common = Common
    public AD_POSITION = AD_POSITION;
    /**
    * 获取当前的游戏平台
    */
    public getAppPlatform(): PlatformType {
        return Common.platform;
    }
    public appConfig(): moosnowAppConfig {
        return Common.config;
    }
    constructor() {
        (window["moosnow"]) = this;
        this.mData = new GameDataCenter();
        this.mSetting = new SettingModule();

        this.initPlatform();
        this.initHttp();
        this.initAd();
        this.mAudio = new AudioModule();

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
        // console.log('初始化平台', Common.platform, 'oppo', PlatformType.OPPO, 'vivo', PlatformType.VIVO)
        if (Common.platform == PlatformType.WX)
            this.mPlatform = new WXModule();
        else if (Common.platform == PlatformType.OPPO)
            this.mPlatform = new OPPOModule();
        else if (Common.platform == PlatformType.VIVO)
            this.mPlatform = new VIVOModule();
        else if (Common.platform == PlatformType.OPPO_ZS) {
            this.mPlatform = new ZSOPPOModule();
        }
        else if (Common.platform == PlatformType.BYTEDANCE)
            this.mPlatform = new TTModule();
        else if (Common.platform == PlatformType.QQ)
            this.mPlatform = new QQModule();
        else if (Common.platform == PlatformType.BAIDU)
            this.mPlatform = new BDModule();
        else if (Common.platform == PlatformType.UC)
            this.mPlatform = new UCModule();
        else {
            this.mPlatform = new PlatformModule();
        }

        // console.log(' cc.sys.browserType ', cc.sys.browserType, ' cc.sys.platform ', cc.sys.platform)
    }

    private initAd() {
        if (Common.platform == PlatformType.WX || Common.platform == PlatformType.PC || Common.platform == PlatformType.BYTEDANCE)
            this.mAd = new WXAdModule();
        else if (Common.platform == PlatformType.OPPO) {
            this.mAd = new OPPOAdModule();
        }
        else if (Common.platform == PlatformType.OPPO_ZS) {
            this.mAd = new ZSOPPOAdModule();
        }
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

    private mResource: ResourceModule = new ResourceModule();
    public get resource() {
        return this.mResource;
    }

    private mSetting: SettingModule = new SettingModule();
    /**
     * 本地持久化缓存
     */
    public get setting() {
        return this.mSetting;
    }
    /**
     * 事件消息
     */
    private mEvent: EventModule = new EventModule();
    public get event() {
        return this.mEvent;
    }


    private mAudio: AudioModule;
    public get audio() {
        return this.mAudio;
    }
    public set audio(value: AudioModule) {
        this.mAudio = value;
    }



}
new moosnow();

