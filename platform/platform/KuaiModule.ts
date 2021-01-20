
import { MSG } from "../config/MSG";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "../enum/BANNER_POSITION";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import bannerStyle from "../model/bannerStyle";
import Common from "../utils/Common";
import PLATFORM_EVENT from "../utils/PLATFORM_EVENT";
import PlatformModule from "./PlatformModule";

export default class KuaiModule extends PlatformModule {
    public platformName = "kwaigame";
    public recordRes: any = null;
    public recordCb: any = null;
    public recordNumber: number = 0;
    constructor() {
        super();
        this.platformName = "kwaigame";
        window[this.platformName].init({
            "appId": Common.config.moosnowAppId
        });
    }
    /**
   * 显示平台的banner广告
   * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
   * @param callback 点击回调
   * @param horizontal banner的位置，默认底部
   * @param vertical banner的位置，默认底部
   * @param idIndex id顺序 -1 会随机
   * @param style 自定义样式
   */
    public showBanner(remoteOn: boolean = true, callback?: (isOpend: boolean) => void, horizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.CENTER, vertical: BANNER_VERTICAL = BANNER_VERTICAL.BOTTOM, idIndex: number = -1, style?: bannerStyle) {
        console.log('快手没有banner')
    }

    public createRewardAD(show: boolean, idIndex: number = 0) {
        if (this.videoLoading) {
            return;
        }
        if (!window[this.platformName]) {
            if (moosnow.platform.videoCb)
                moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        if (!window[this.platformName].createRewardedVideoAd) {
            if (moosnow.platform.videoCb)
                moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        let videoId = this.getVideoId(idIndex);
        if (Common.isEmpty(videoId)) {
            console.warn(MSG.VIDEO_KEY_IS_NULL)
            if (moosnow.platform.videoCb)
                moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        
        this.video[videoId] = window[this.platformName].createRewardedVideoAd({
            adUnitId: videoId
        });
        if (!this.video[videoId]) {
            console.warn('创建视频广告失败')
            return;
        }
        this.video[videoId].onClose(this._onVideoClose);
        this.video[videoId].onReward(this._onVideoReward);
        moosnow.platform.videoLoading = true;
        moosnow.platform.videoPlaying = false;
        this.video[videoId].show({
            success: () => {
                console.log("激励视频播放成功");
                moosnow.platform.videoPlaying = true;
            },
            fail: (result) => {
                console.log("激励视频播放失败: " + JSON.stringify(result));
                this._onVideoError(result, result);
            }
        })
    }

    public _onVideoReward(result) {
        moosnow.platform.videoLoading = false;
        console.log("激励视频奖励回调: " + JSON.stringify(result));
        moosnow.platform.videoCb(VIDEO_STATUS.END);
    }

    public _onVideoClose(result) {
        moosnow.platform.videoLoading = false;
        console.log("激励视频关闭回调: " + JSON.stringify(result));
        moosnow.platform.videoCb(VIDEO_STATUS.NOTEND);
    }

    //-----------------录屏 具体逻辑在子类实现------------------
    public initRecord() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createMediaRecorder) return;
        // if (!this.isDouyin()) return;
        this.recordObj = window[this.platformName].createMediaRecorder();
    }
    /**
     * 裁剪视频
     * @param timeRange 默认[2,2] 裁剪视频时保留的前后时长
     * @param callback 剪切完成时回调
     */
    public clipRecord(timeRange: Array<number> = [2, 2], callback: (res: any) => void) {


    };
    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    public startRecord(duration = 300, callback = null) {
        if (!this.recordObj) {
            if (callback)
                callback(false);
            return;
        }

        this.recordNumber = 0;
        this.recordCb = null;
        this.recordRes = null;

        this.recordObj.onStart(res => {
            console.log('record onStart');
            if (callback)
                callback(res);
        });

        this.recordObj.onStop(res => {
            console.log('on stop ', res)
            this.recordRes = res;
            if (this.recordCb)
                this.recordCb(res);
        });
        this.recordObj.start();
    }
    /**
     * 停止录屏
     * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
     */
    public stopRecord(callback = null) {
        if (!this.recordObj) {
            if (callback)
                callback(false);
            return;
        }
        console.log('record stop recordRes ', this.recordRes)
        if (this.recordRes) {
            if (Common.isFunction(callback))
                callback(this.recordRes);
        } else {
            this.recordCb = callback;
            this.recordObj.stop();
            console.log('record stop  ', this.recordRes)
        }
    }

    public pauseRecord() {
        if (this.recordObj)
            this.recordObj.pause()
    }
    public resumeRecord() {
        if (this.recordObj)
            this.recordObj.resume()
    }

    /**
      * 分享
      * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }  
      * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
      * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
      * @param shortCall 时间过短时回调 ,err 是具体错误信息，目前只在头条分享录屏时用到
      */
    public share(query: Object = {}, callback?: (shared: boolean, msg: string) => void, shortCall?: (err: any) => void) {
        this.currentShareCallback = callback as any;
        this.currentShortCall = shortCall;
        console.log('是否有回调：', shortCall)
        this.recordObj.publishVideo({
            video: this.recordRes.videoID,
            callback: (error) => {
                if (error != null && error != undefined) {
                    callback(false, "分享录屏失败: " + JSON.stringify(error));
                    console.log("分享录屏失败: " + JSON.stringify(error));
                    return;
                }
                callback(true, "分享录屏成功: ");
                console.log("分享录屏成功");
            }
        });
    }
}