import PlatformModule from "./PlatformModule";
export default class BDModule extends PlatformModule {
    constructor();
    platformName: string;
    appSid: string;
    recordRes: any;
    recordCb: any;
    _createBannerAd(): any;
    createRewardAD(show: any): void;
    initRecord(): void;
    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    startRecord(duration?: number, callback?: any): void;
    /**
     * 停止录屏
     * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
     */
    stopRecord(callback?: any): void;
}
