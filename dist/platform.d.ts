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
import LogicControl from "./ui/LogicControl";
import UIForm from "./ui/UIForm";
import Delay from "./framework/Delay";
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
        static Common: typeof Common;
        static EVENT_TYPE: typeof EventType;
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
    }
}