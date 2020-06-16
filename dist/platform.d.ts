import PlatformModule from "./platform/PlatformModule";
import AdModule from "./ad/AdModule";
import { HttpModule } from "./http/HttpModule";
import GameDataCenter from "./framework/GameDataCenter";
import SettingModule from "./framework/SettingModule";
import Common from "./utils/Common";
import { PlatformType } from "./enum/PlatformType";
import EventModule from "./framework/EventModule";
import EventType from "./utils/EventType";
import { BaseUIModule } from "./ui/engine/BaseUIModule";
import BaseEntityModule from "./ui/engine/BaseEntityModule";
import LogicControl from "./ui/LogicControl";
import UIForm from "./ui/UIForm";
import Delay from "./framework/Delay";
import ResourceModule from "./framework/ResourceModule";
import AudioModule from "./framework/AudioModule";

import showEndOptions from "./model/showEndOptions";
import showPrizeOptions from "./model/showPrizeOptions";
import showShareOptions from "./model/showShareOptions";
import showTotalOptions from "./model/showTotalOptions";
import showTouchOptions from "./model/showTouchOptions";
import showCoinOptions from "./model/showCoinOptions";

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
        };
        static getAppPlatform(): PlatformType
        static http: HttpModule
        static platform: PlatformModule
        static ad: AdModule
        static setting: SettingModule
        static data: GameDataCenter
        static event: EventModule
        static ui: BaseUIModule
        static entity: BaseEntityModule
        static form: UIForm
        static control: LogicControl
        static delay: Delay
        static audio: AudioModule
        static resource: ResourceModule
    }
}
