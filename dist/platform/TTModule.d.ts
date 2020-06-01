import PlatformModule from "./PlatformModule";
export default class TTModule extends PlatformModule {
    platformName: string;
    recordRes: any;
    recordCb: any;
    recordNumber: number;
    bannerWidth: number;
    constructor();
    prepareInter(): void;
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
    pauseRecord(): void;
    resumeRecord(): void;
    /**
     * 分享
     * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }
     * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
     * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
     */
    share(query?: Object, callback?: (shared: boolean) => void): void;
    _buildShareInfo(query: any): {
        channel: string;
        title: string;
        imageUrl: string;
        query: any;
        extra: {
            videoPath: any;
            videoTopics: string[];
        };
        success: () => void;
        fail: (e: any) => void;
    };
    private mBannerLoaded;
    _onBannerLoad(): void;
    _prepareBanner(): void;
    _resetBanenrStyle(size: any): void;
    /**
    *
    * @param callback 点击回调
    * @param position banner的位置，默认底部
    * @param style 自定义样式
    */
    showBanner(callback?: Function, position?: string, style?: bannerStyle): void;
    showAppBox(): void;
    showAppBox2(): void;
}
