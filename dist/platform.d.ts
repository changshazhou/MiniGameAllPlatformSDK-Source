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
import BaseEntityModule from "./ui/engine/BaseEntityModule";
import { BaseUIModule } from "../platform/ui/engine/BaseUIModule";
import UIForm from "../platform/ui/UIForm";
import LogicControl from "../platform/ui/LogicControl";
import Delay from "../platform/framework/Delay";
import AudioModule from "../platform/framework/AudioModule";
import ResourceModule from "../platform/framework/ResourceModule";

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
        static AD_POSITION: typeof AD_POSITION;
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
