import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "../enum/BANNER_POSITION";
import bannerStyle from "../model/bannerStyle";
import PlatformModule from "./PlatformModule";
export default class KuaiModule extends PlatformModule {
    platformName: string;
    recordRes: any;
    recordCb: any;
    recordNumber: number;
    constructor();
    /**
   * 显示平台的banner广告
   * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
   * @param callback 点击回调
   * @param horizontal banner的位置，默认底部
   * @param vertical banner的位置，默认底部
   * @param idIndex id顺序 -1 会随机
   * @param style 自定义样式
   */
    showBanner(remoteOn?: boolean, callback?: (isOpend: boolean) => void, horizontal?: BANNER_HORIZONTAL, vertical?: BANNER_VERTICAL, idIndex?: number, style?: bannerStyle): void;
    createRewardAD(show: boolean, idIndex?: number): void;
    _onVideoReward(result: any): void;
    _onVideoClose(result: any): void;
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
    share(query?: Object, callback?: (shared: boolean, msg: string) => void, shortCall?: (err: any) => void): void;
}
