import PlatformModule from "../platform/PlatformModule";
export default class TTModule extends PlatformModule {
    constructor();
    platformName: string;
    bannerId: string;
    videoId: string;
    recordRes: any;
    recordCb: any;
    recordNumber: number;
    _bottomCenterBanner(size: any): void;
    initRecord(): void;
    clipRecord(): void;
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
