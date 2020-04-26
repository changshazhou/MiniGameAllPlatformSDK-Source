import PlatformModule from "./PlatformModule";

export default class TTModule extends PlatformModule {
    constructor() {
        super();
    }
    public platformName: string = "tt";
    public bannerId: string = "";
    public videoId: string = "";
    public recordRes: any = null;
    public recordCb: any = null;
    public recordNumber: number = 0;
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
        console.log('record stopRecord');
        if (!this.record) {
            if (callback)
                callback(false);
            return;
        }
        if (this.recordRes) {
            callback(this.recordRes);
        } else {
            this.recordCb = callback;
            this.record.stop();
        }
    }
}