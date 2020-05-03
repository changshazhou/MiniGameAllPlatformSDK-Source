import PlatformModule from "./PlatformModule";
import Common from "../utils/Common";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import MathUtils from "../utils/MathUtils";
import { SHARE_CHANNEL } from "../enum/SHARE_CHANNEL";

export default class TTModule extends PlatformModule {
    public platformName: string = "tt";
    public recordRes: any = null;
    public recordCb: any = null;
    public recordNumber: number = 0;

    constructor() {
        super();
        this.initBanner();
        this.initRecord();
        this.initInter();
    }

    public prepareInter() {
        if (!window[this.platformName]) return;
        if (typeof window[this.platformName].createInterstitialAd != "function") return;

        if (Common.isEmpty(this.interId)) {
            console.warn('插屏广告ID为空，系统不加载')
            return;
        }
        this.inter = window[this.platformName].createInterstitialAd({
            adUnitId: this.interId
        });
        this.inter.onLoad(this._onInterLoad.bind(this));
        this.inter.onClose(this._onInterClose.bind(this));
        this.inter.load();
    }


    public _bottomCenterBanner(size) {
        if (this.bannerWidth != size.width) {
            let wxsys = this.getSystemInfoSync();
            let windowWidth = wxsys.windowWidth;
            let windowHeight = wxsys.windowHeight;
            this.banner.style.top = windowHeight - (size.width / 16 * 9);
            this.banner.style.left = (windowWidth - size.width) / 2;
        }
    }

    public initRecord() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].getGameRecorderManager) return;
        // if (!this.isDouyin()) return;
        this.record = window[this.platformName].getGameRecorderManager();
    }

    public clipRecord() {
        if (!this.record) return;
        this.recordNumber++;
        this.record.recordClip({
            timeRange: [2, 2]
        })
    }

    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    public startRecord(duration = 300, callback = null) {
        console.log('record startRecord');
        if (!this.record) {
            if (callback)
                callback(false);
            return;
        }

        this.recordNumber = 0;
        this.recordCb = null;
        this.recordRes = null;

        this.record.onStart(res => {
            console.log('record onStart');
            if (callback)
                callback(res);
        });

        this.record.onStop(res => {
            console.log('on stop ', res)
            if (this.recordNumber >= 4) {
                this.record.clipVideo({
                    path: res.videoPath,
                    success(r) {
                        console.log('record clip succes:', r);
                        this.recordRes = r;
                        if (this.recordCb)
                            this.recordCb(r);
                    },
                    fail() {
                        console.log('record clip fail:', res);
                        this.recordRes = res;
                        if (this.recordCb)
                            this.recordCb(res);
                    }
                })
            } else {
                this.recordRes = res;
                if (this.recordCb)
                    this.recordCb(res);
            }
        });
        this.record.start({
            duration
        });
    }

    /**
     * 停止录屏
     * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
     */
    public stopRecord(callback = null) {
        console.log(' stop Record  callback  ', !!callback);
        if (!this.record) {
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
            this.record.stop();
            console.log('record stop  ', this.recordRes)
        }
    }

    public pauseRecord() {
        if (this.record)
            this.record.pause()
    }
    public resumeRecord() {
        if (this.record)
            this.record.resume()
    }

    /**
     * 分享
     * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }  
     * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
     * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
     */
    public share(query: Object = {}, callback?: (shared: boolean) => void) {
        this.currentShareCallback = callback;
        let shareInfo = this._buildShareInfo(query);
        console.log('shareInfo:', shareInfo);
        window[this.platformName].shareAppMessage(shareInfo);
    }


    public _buildShareInfo(query: any) {
        let title = "", imageUrl = ""
        if (this.shareInfoArr.length > 0) {
            let item = this.shareInfoArr[MathUtils.randomNumBoth(0, this.shareInfoArr.length - 1)];
            title = item.title;
            imageUrl = item.img;
        }
        let channel = SHARE_CHANNEL.LINK;

        if (query && [SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO].indexOf(query.channel) != -1) {
            channel = query.channel;
        }

        return {
            channel: channel,
            title: title,
            imageUrl: imageUrl,
            query: moosnow.http._object2Query(query),
            extra: {
                videoPath: this.recordRes && this.recordRes.videoPath ? this.recordRes.videoPath : "",
                videoTopics: [title]
            },
            success() {
                if (this.currentShareCallback)
                    this.currentShareCallback(true);
            },
            fail() {
                if (this.currentShareCallback)
                    this.currentShareCallback(false);
            }
        }
    }


    public showAppBox() {

    }
}