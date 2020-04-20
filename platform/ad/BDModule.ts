import PlatformModule from "../platform/PlatformModule";

export default class BDModule extends PlatformModule {
    constructor() {
        super();
    }
    public platformName: string = "swan";
    public bannerId: string = "";
    public videoId: string = "";
    public appSid: string = "";

    public recordRes: any = null;
    public recordCb: any = null;

    public _createBannerAd() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;
        let wxsys = this.getSystemInfoSync();

        let windowWidth = wxsys.screenWidth;
        let windowHeight = wxsys.screenHeight;

        let banner = window[this.platformName].createBannerAd({
            adUnitId: this.bannerId,
            appSid: this.appSid,
            style: {
                top: windowHeight,
                //lef: (750 - 300) / 2 / Laya.Browser.pixelRatio,
                width: windowWidth
            }
        });
        return banner;
    }

    public createRewardAD(show) {
        if (this.videoLoading) {
            return;
        }
        if (!window[this.platformName].createRewardedVideoAd) {
            return;
        }
        if (this.video) {
            this.video.offClose(this._onVideoClose);
            this.video.offError(this._onVideoError);
            this.video.offLoad(this._onVideoLoad);
        } else {
            this.video = window[this.platformName].createRewardedVideoAd({
                adUnitId: this.videoId,
                appSid: this.appSid
            });
        }
        this.video.onError(this._onVideoError);
        this.video.onClose(this._onVideoClose);
        this.video.onLoad(this._onVideoLoad);
        this.videoLoading = true;
        this.video.load()
            .then(() => {
                if (show) {
                    this.video.show().then(() => { }).catch(err => {
                        this._onVideoError(err.errMsg, err.errCode);
                        console.log(err.errMsg);
                    });
                }
            }).catch(err => {
                this._onVideoError(err.errMsg, err.errCode);
                console.log(err.errMsg);
            });
    }

    public initRecord() {
        if (!window[this.platformName]) return;
        let brand = this.getSystemInfoSync().brand.toLowerCase();
        if (/huawei/.test(brand) || /honor/.test(brand)) return;
        // if (!this.isDouyin()) return;
        this.record = window[this.platformName].getVideoRecorderManager();
    }

    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    public startRecord(duration = 120, callback = null) {
        console.log('record startRecord');
        this.recordRes = null;
        this.recordCb = null;
        if (!this.record) {
            if (callback)
                callback(false);
            return;
        }
        this.record.onStart(res => {
            console.log('record onStart');
            if (callback)
                callback(res);
        })

        this.record.onStop(res => {
            this.recordRes = res;
            if (this.recordCb) {
                console.log('stop 2');
                this.recordCb(res);
            }
        })

        this.record.start({
            duration
        });
    }
    /**
     * 停止录屏
     * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
     */
    public stopRecord(callback = null) {
        console.log('record stopRecord');
        if (!this.record) {
            if (callback)
                callback(false);
            return;
        }
        if (this.recordRes) {
            console.log('stop 1');
            callback(this.recordRes);
        } else {
            this.recordCb = callback;
            this.record.stop();
        }
    }
}