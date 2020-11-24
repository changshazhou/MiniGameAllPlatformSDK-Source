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
import { BLOCK_HORIZONTAL, BLOCK_VERTICAL } from "./enum/BLOCK_POSITION";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "./enum/BANNER_POSITION";
import moosnowAppConfig from "./model/moosnowAppConfig";
import FormUtil from "./ui/FormUtil";
import CocosNodeHelper from "./ui/cocos/helper/CocosNodeHelper";
declare global {
    class moosnow {
        static VIDEO_STATUS: {
            END: string;
            NOTEND: string;
            ERR: string;
        };
        static VIDEO_MSG: {
            ERR: string;
            NOTEND: string;
        };
        static SHARE_MSG: {
            FAIL: string;
        };
        static BANNER_HORIZONTAL: typeof BANNER_HORIZONTAL;
        static BANNER_VERTICAL: typeof BANNER_VERTICAL;
        static BLOCK_HORIZONTAL: typeof BLOCK_HORIZONTAL;
        static BLOCK_VERTICAL: typeof BLOCK_VERTICAL;
        static SHARE_CHANNEL: {
            ARTICLE: string;
            VIDEO: string;
            TOKEN: string;
            LINK: string;
        };
        static APP_PLATFORM: typeof PlatformType;
        static PLATFORM_EVENT: typeof EventType;
        static Common: typeof Common;
        static AD_POSITION: {
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
        static getAppPlatform(): PlatformType;
        static appConfig(): moosnowAppConfig;
        constructor();
        private initHttp;
        private initPlatform;
        private initAd;
        static platform: PlatformModule;
        /**
         * 墨雪广告
         */
        static ad: AdModule;
        static http: HttpModule;
        /**
         * 本地内存
         */
        static data: GameDataCenter;
        static resource: ResourceModule;
        /**
         * 本地持久化缓存
         */
        static setting: SettingModule;
        /**
         * 事件消息
         */
        static event: EventModule;
        static audio: AudioModule;
        static form: FormUtil;
        static nodeHelper: typeof CocosNodeHelper;
    }

}