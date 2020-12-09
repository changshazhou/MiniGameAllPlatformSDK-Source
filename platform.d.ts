import PlatformModule from "./dist/platform/PlatformModule";
import AdModule from "./dist/ad/AdModule";
import { HttpModule } from "./dist/http/HttpModule";
import GameDataCenter from "./dist/framework/GameDataCenter";
import SettingModule from "./dist/framework/SettingModule";
import Common from "./dist/utils/Common";
import { PlatformType } from "./enum/PlatformType";
import EventModule from "./dist/framework/EventModule";
import EventType from "./utils/EventType";
import ResourceModule from "./dist/framework/ResourceModule";
import AudioModule from "./dist/framework/AudioModule";
import { BLOCK_HORIZONTAL, BLOCK_VERTICAL } from "./dist/enum/BLOCK_POSITION";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "./dist/enum/BANNER_POSITION";
import moosnowAppConfig from "./dist/model/moosnowAppConfig";
import FormUtil from "./dist/ui/FormUtil";
import CocosNodeHelper from "./dist/ui/cocos/helper/CocosNodeHelper";
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