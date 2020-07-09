import PlatformModule from './PlatformModule';
/**
 * 微信平台
 */
export default class WXModule extends PlatformModule {
    platformName: string;
    constructor();
    /**
     * 游戏登录
     * @param callback
     * @param fail
     */
    login(callback?: Function, fail?: Function): void;
    /**
     *
     * @param code
     * @param user_id
     * @param callback
     */
    private getUserToken;
    initRecord(): void;
    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    startRecord(duration?: number, callback?: any): void;
    writeTime: number;
    recordCb: any;
    /**
    * 停止录屏
    * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
    */
    stopRecord(callback?: any): void;
    pauseRecord(): void;
    resumeRecord(): void;
    private mShareButton;
    showShareButton(style: any, timeRange?: Array<Array<number>>, callback?: Function): void;
    hideShareButton(): void;
}
