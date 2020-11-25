import PlatformModule from "./platform/PlatformModule";
import WXModule from "./platform/WXModule";
import AdModule from "./ad/AdModule";
import { HttpModule } from "./http/HttpModule";
import GameDataCenter from "./framework/GameDataCenter";
import SettingModule from "./framework/SettingModule";
import Common from "./utils/Common";
import { PlatformType } from "./enum/APP_PLATFORM";
import WXAdModule from "./ad/WXAdModule";

import { BANNER_POSITION } from "./enum/BANNER_POSITION";
import { VIDEO_STATUS } from "./enum/VIDEO_STATUS";
import { SHARE_MSG } from "./enum/SHARE_MSG";
import { VIDEO_MSG } from "./enum/VIDEO_MSG";
import { SHARE_CHANNEL } from "./enum/SHARE_CHANNEL";
import EventModule from "./framework/EventModule";
import EventType from "./utils/PLATFORM_EVENT";
import { AD_POSITION } from "./enum/AD_POSITION";
import ResourceModule from "./framework/ResourceModule";
import AudioModule from "./framework/AudioModule";

class moosnow {
    public VIDEO_STATUS = VIDEO_STATUS;
    public VIDEO_MSG = VIDEO_MSG;
    public SHARE_MSG = SHARE_MSG;
    public BANNER_POSITION = BANNER_POSITION;
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
    constructor() {
        (window["moosnow"]) = this;
        this.mData = new GameDataCenter();
        this.mSetting = new SettingModule();
        this.mEvent = new EventModule();

        this.initPlatform();
        this.initHttp();
        this.initAd();

    }

    private initHttp() {
        this.mHttp = new HttpModule();
    }

    private initPlatform() {
        this.mPlatform = new WXModule();
    }

    private initAd() {
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
    private mEvent: EventModule;
    public get event() {
        return this.mEvent;
    }


    private mAudio: AudioModule = null;
    public get audio() {
        return this.mAudio;
    }
    public set audio(value: AudioModule) {
        this.mAudio = value;
    }



}
new moosnow();