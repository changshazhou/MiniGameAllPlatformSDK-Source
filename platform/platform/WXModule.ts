import PlatformModule from './PlatformModule';
import Common from '../utils/Common';
/**
 * 微信平台
 */
export default class WXModule extends PlatformModule {

    public platformName: string = "wx";
    constructor() {
        super();
        this._regisiterWXCallback();
        this.initBanner();
        this.initInter();
    }

    public initRecord() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].getGameRecorder) return;
        // if (!this.isDouyin()) return;
        this.recordObj = window[this.platformName].getGameRecorder();
    }

    /**
     * 开始录屏
     * @param duration 录屏时长
     * @param callback 如果不是抖音回调参数=false
     */
    public startRecord(duration = 300, callback = null) {
        console.log('record startRecord');
        if (!this.recordObj) {
            if (callback)
                callback(false);
            return;
        }

        this.recordObj.start()
            .then(res => {
                this.recordObj.on('timeUpdate', res => {
                    console.log(`视频时长: ${res.currentTime}`);
                    this.writeTime = Math.min(res.currentTime, 60000);
                });
                this.recordObj.on('start', () => {
                    if (callback)
                        callback();
                })
                // stop 事件的回调函数的执行表示录制完成
                this.recordObj.on('stop', (res) => {
                    console.log(`对局回放时长: `, res)
                    if (this.recordCb)
                        this.recordCb(res)
                })
            })

    }
    public writeTime: number = 0;
    public recordCb: any = null;
    /**
    * 停止录屏
    * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
    */
    public stopRecord(callback = null) {
        console.log(' stop Record  callback  ', !!callback);
        if (!this.recordObj) {
            if (callback)
                callback(false);
            return;
        }
        this.recordCb = callback;
        let stopPromise = this.recordObj.stop();
        stopPromise && stopPromise.then((res) => {
            if (!res.error.code) {
                this.recordObj.off('timeUpdate');
                // this.showShareButton(
                //     () => {

                //     }
                // );
            }
            console.log(' stop Record  then  ', res);
        })
            .catch((res) => {
                console.log(' stop Record  catch  ', res);
            })
    }

    public pauseRecord() {
        if (this.recordObj) {
            this.recordObj.pause();
        }
    }
    public resumeRecord() {
        if (this.recordObj) {
            this.recordObj.resume();
        }
    }
    private mShareButton: any
    public showShareButton(style: any, timeRange?: Array<Array<number>>, callback?: Function) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createGameRecorderShareButton) return;
        if (!timeRange)
            timeRange = [[0, this.writeTime]];
        moosnow.http.getAllConfig(res => {

            //     sys.pixelRatio

            // if (style.left == "center") {
            //     let sys = this.getSystemInfoSync();
            //     style.left = (sys.windowWidth - 168) / 2
            // }

            this.mShareButton = window[this.platformName].createGameRecorderShareButton({
                // 样式参数
                style: {
                    left: 10,
                    top: 150,
                    height: 50,
                    ...style,
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: 16,
                    borderRadius: 4,
                    iconMarginRight: 16,
                    paddingLeft: 1,
                    paddingRight: 30,
                },
                // 按钮的背景图片
                text: res.shareButtonText || "",
                image: res.shareBgImage || "",
                icon: res.shareIconImage || "",
                // 分享参数
                share: {
                    query: 'a=1&b=2',
                    // 背景音乐的路径
                    bgm: '',
                    timeRange: timeRange
                }
            })
            this.mShareButton.show();
            this.mShareButton.onTap(res => {
                console.log(`错误码：${res.error.code}，错误信息：${res.error.message}`)
                if (callback)
                    callback(res);
            })
        })

    }

    public hideShareButton() {
        if (this.mShareButton) {
            this.mShareButton.hide();
        }
    }
}