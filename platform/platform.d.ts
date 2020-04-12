import { HttpModule } from "./HttpModule"
import PlatformModule from "./PlatformModule"
import AdModule from "./AdModule"
import SettingModule from "./SettingModule"
import GameDataCenter from "./GameDataCenter"


// export { } // 这个必须有，将文件转化为模块

declare global {
    class moosnow {
        static http: HttpModule
        static platform: PlatformModule
        static ad: AdModule
        static setting: SettingModule
        static data: GameDataCenter
    }
}

// declare class HttpModule {
//     public request: Function
// }
// declare class PlatformModule {
//     public videoLoading: boolean;
//     public videoCb: Function
//     public getPlatform: Function
// }
// declare class Lite {
//     static http: HttpModule
//     static platform: PlatformModule
// }