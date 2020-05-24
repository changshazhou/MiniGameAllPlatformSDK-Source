import { HttpModule } from "./HttpModule";
export declare class ZSHttpModule extends HttpModule {
    /**
     * 获取误点间隔次数，启动游戏时调用
     * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
     */
    getMisTouchNum(callback: any): void;
    /**
     * 获取位移间隔次数，启动游戏时调用
     * @param {Funtion} callback 回调参数为mistouchPosNum:int，当misTouchNum=0时关闭误点，当mistouchPosNum=n(0除外)时，每隔n次，触发误点1次
     */
    getMistouchPosNum(callback: any): void;
    getBannerShowCountLimit(callback: any): void;
    getAllConfig(callback: any): void;
    loadCfg(callback: any): void;
}
