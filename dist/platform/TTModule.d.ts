import PlatformModule from "./PlatformModule";
import bannerStyle from "../model/bannerStyle";
import moosnowAdRow from "../model/moosnowAdRow";
export default class TTModule extends PlatformModule {
    platformName: string;
    recordRes: any;
    recordCb: any;
    recordNumber: number;
    moreGameCb: Function;
    constructor();
    private _registerTTCallback;
    showInter(): void;
    _bottomCenterBanner(size: any): void;
    initRecord(): void;
    /**
     * 裁剪视频
     * @param timeRange 默认[2,2] 裁剪视频时保留的前后时长
     * @param callback 剪切完成时回调
     */
    clipRecord(timeRange: Array<number>, callback: (res: any) => void): void;
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
      * @param shortCall 时间过短时回调 ,err 是具体错误信息，目前只在头条分享录屏时用到
      */
    share(query?: Object, callback?: (shared: boolean) => void, shortCall?: (err: any) => void): void;
    private shareVideoId;
    _buildShareInfo(query: any): {
        channel: string;
        title: string;
        imageUrl: string;
        query: string;
        extra: {
            videoPath: any;
            videoTopics: string[];
            withVideoId: boolean;
        };
        success: (res: any) => void;
        fail: (e: any) => void;
    };
    navigate2Video(videoId: any): void;
    private mBannerLoaded;
    _onBannerLoad(): void;
    _prepareBanner(): void;
    _resetBanenrStyle(size: any): void;
    /**
     * 显示平台的banner广告
     * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
     * @param callback 点击回调
     * @param position banner的位置，默认底部
     * @param style 自定义样式
     */
    showBanner(remoteOn?: boolean, callback?: (isOpend: boolean) => void, position?: string, style?: bannerStyle): void;
    _showBanner(): void;
    /**
    * 盒子广告
    * @param callback 关闭回调
    * @param remoteOn 被后台开关控制
    */
    showAppBox(callback?: Function, remoteOn?: boolean): void;
    private _getAppLaunchOptions;
    private _showMoreGamesModal;
    showMoreGameBanner(): void;
    private _moreGameBotton;
    showMoreGameButton(url: string, callback?: Function, style?: any): void;
    hideMoreGameButton(): void;
    /***
     * 检测Iphone
     */
    isIphone(): boolean;
    navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function): void;
    /**
      * 调用后跳转个人主页，并且回调关注成功/失败回调，异步回调接口
      * @param success
      * @param fail
      */
    checkFollowAwemeSate(success: (hasFollowed: any) => void, fail: (err: any) => void): void;
    /**
     * 调用后跳转个人主页，并且回调关注成功/失败回调，异步回调接口
     * @param success
     * @param fail
     */
    openAwemeUserProile(success: (hasFollowed: any) => void, fail: (err: any) => void): void;
}
