import PlatformModule from "./platform/PlatformModule";
import AdModule from "./ad/AdModule";
import { HttpModule } from "./http/HttpModule";
import GameDataCenter from "./framework/GameDataCenter";
import SettingModule from "./framework/SettingModule";
import Common from "./utils/Common";
import { PlatformType } from "./enum/PlatformType";
import EventModule from "./framework/EventModule";
import EventType from "./utils/EventType";
import ResourceModule from "./framework/ResourceModule";
import AudioModule from "./framework/AudioModule";
export default class moosnow {
    VIDEO_STATUS: {
        END: string;
        NOTEND: string;
        ERR: string;
    };
    VIDEO_MSG: {
        ERR: string;
        NOTEND: string;
    };
    SHARE_MSG: {
        FAIL: string;
    };
    BANNER_POSITION: {
        TOP: string;
        CENTER: string;
        BOTTOM: string;
        CUSTOM: string;
        LEFT_BOTTOM: string;
        RIGHT_BOTTOM: string;
    };
    SHARE_CHANNEL: {
        ARTICLE: string;
        VIDEO: string;
        TOKEN: string;
        LINK: string;
    };
    APP_PLATFORM: typeof PlatformType;
    PLATFORM_EVENT: typeof EventType;
    Common: typeof Common;
    AD_POSITION: {
        NONE: number;
        BANNER: number;
        FLOAT: number;
        SIDE: number;
        CENTER: number;
        EXPORT: number;
        BACK: number;
        MASK: number;
        WAIT: number;
        LEFTRIGHT: number;
        EXPORT_FIXED: number;
        ROTATE: number;
        EXTEND2: number;
        EXTEND3: number;
        EXTEND4: number;
        TOP: number;
        RECOVER: number;
    };
    /**
         * 获取当前的游戏平台
         */
    getAppPlatform(): PlatformType;
    constructor();
    private initHttp;
    private initPlatform;
    private initAd;
    private mPlatform;
    get platform(): PlatformModule;
    private mAd;
    /**
     * 墨雪广告
     */
    get ad(): AdModule;
    private mHttp;
    get http(): HttpModule;
    private mData;
    /**
     * 本地内存
     */
    get data(): GameDataCenter;
    private mResource;
    get resource(): ResourceModule;
    private mSetting;
    /**
     * 本地持久化缓存
     */
    get setting(): SettingModule;
    /**
     * 事件消息
     */
    private mEvent;
    get event(): EventModule;
    private mAudio;
    get audio(): AudioModule;
    set audio(value: AudioModule);
}
