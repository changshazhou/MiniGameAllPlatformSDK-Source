import { HttpModule } from "./framework/HttpModule"
import PlatformModule from "./platform/PlatformModule"
import AdModule from "./ad/AdModule"
import SettingModule from "./framework/SettingModule"
import GameDataCenter from "./framework/GameDataCenter"


// export { } // 这个必须有，将文件转化为模块

declare global {
    class moosnow {
        static initPlatform: Function
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