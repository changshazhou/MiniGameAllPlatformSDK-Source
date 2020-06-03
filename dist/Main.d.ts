import PlatformModule from "./platform/PlatformModule";
import AdModule from "./ad/AdModule";
import { HttpModule } from "./http/HttpModule";
import GameDataCenter from "./framework/GameDataCenter";
import SettingModule from "./framework/SettingModule";
import Common from "./utils/Common";
import { PlatformType } from "./enum/PlatformType";
import EventModule from "./framework/EventModule";
import EventType from "./utils/EventType";
import { AD_POSITION } from "./enum/AD_POSITION";
import { BaseUIModule } from "./ui/engine/BaseUIModule";
import BaseEntityModule from "./ui/engine/BaseEntityModule";
import FormControl from "./ui/FormControl";
import Form from "./ui/Form";
import Delay from "./framework/Delay";
export default class Main {
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
    AD_POSITION: typeof AD_POSITION;
    /**
     * 获取当前的游戏平台
     */
    getAppPlatform(): PlatformType;
    constructor();
    private initUI;
    private initEntity;
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
    get resource(): IResourceModule;
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
    /**
     * UI控制
     */
    private mUi;
    get ui(): BaseUIModule;
    /**
     * form UI 操作
     */
    private mForm;
    get form(): Form;
    /**
     * form表单控制
     */
    private mControl;
    get control(): FormControl;
    private mEntity;
    get entity(): BaseEntityModule;
    private mDelay;
    get delay(): Delay;
}
