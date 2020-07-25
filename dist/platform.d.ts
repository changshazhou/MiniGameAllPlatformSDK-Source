import showEndOptions from "./model/showEndOptions";
import showPrizeOptions from "./model/showPrizeOptions";
import showShareOptions from "./model/showShareOptions";
import showTotalOptions from "./model/showTotalOptions";
import showTouchOptions from "./model/showTouchOptions";
import showCoinOptions from "./model/showCoinOptions";

import Common from "./utils/Common";
import EventType from "./utils/EventType";
import PlatformModule from "./platform/PlatformModule";
import { PlatformType } from "./enum/PlatformType";
import { HttpModule } from "./http/HttpModule";
import AdModule from "./ad/AdModule";
import SettingModule from "./framework/SettingModule";
import GameDataCenter from "./framework/GameDataCenter";
import EventModule from "./framework/EventModule";
import FormUtil from "./ui/FormUtil";
import Delay from "./framework/Delay";
import AudioModule from "./framework/AudioModule";
import ResourceModule from "./framework/ResourceModule";

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
        static BANNER_POSITION: {
            TOP: string;
            CENTER: string;
            BOTTOM: string;
            CUSTOM: string;
        }
        static SHARE_CHANNEL: {
            ARTICLE: string;
            VIDEO: string;
            TOKEN: string;
            LINK: string;
        };
        static showOptions: {
            endOptions: typeof showEndOptions,
            prizeOptions: typeof showPrizeOptions,
            shareOptions: typeof showShareOptions,
            totalOptions: typeof showTotalOptions,
            touchOptions: typeof showTouchOptions,
            coinOptions: typeof showCoinOptions
        };
        static Common: typeof Common;
        static PLATFORM_EVENT: typeof EventType;
        static APP_PLATFORM: typeof PlatformType;
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
            EXTEND1: number;
            EXTEND2: number;
            EXTEND3: number;
            EXTEND4: number;
            TOP: number,
            /**
            * 恢复到上一个状态
            */
            RECOVER: number;
        };
        static getAppPlatform(): PlatformType
        static http: HttpModule
        static platform: PlatformModule
        static ad: AdModule
        static setting: SettingModule
        static data: GameDataCenter
        static event: EventModule
        static form: FormUtil
        static delay: Delay
        static audio: AudioModule
        static resource: ResourceModule
    }
}
