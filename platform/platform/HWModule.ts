import { MSG } from "../config/MSG";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "../enum/BANNER_POSITION";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import bannerStyle from "../model/bannerStyle";
import Common from "../utils/Common";
import PlatformModule from "./PlatformModule";

export default class HWModule extends PlatformModule {

    public platformName = "hbs";

    public showBanner(remoteOn: boolean = true, callback?: (isOpend: boolean) => void, horizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.CENTER, vertical: BANNER_VERTICAL = BANNER_VERTICAL.BOTTOM, idIndex: number = -1, style?: bannerStyle) {

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
        if (!this.video[videoId]) {
            console.log(" HWModule ~ createRewardAD ~ videoId", videoId)
            this.video[videoId] = window[this.platformName].createRewardedVideoAd({
                adUnitId: videoId
            });
            if (!this.video[videoId]) {
                console.warn('创建视频广告失败')
                return;
            }
            this.video[videoId].onError(this._onVideoError);
            this.video[videoId].onClose(this._onVideoClose);
            this.video[videoId].onLoad(() => {
                moosnow.platform.videoLoading = false;
                if (this.video[videoId]) {
                    this.video[videoId].show();
                }
            });
        }
        moosnow.platform.videoLoading = true;
        moosnow.platform.videoPlaying = false;
        this.video[videoId].load();
    }

    public _onVideoError(e) {
        console.warn(MSG.VIDEO_ERROR_COMPLETED, JSON.stringify(e));
    }

    public showNativeAd(callback: () => void) {
        if (!this.native)
            this._prepareNative(true);
        this.nativeCb = callback;
        if (this.native) {
            let ret = this.native.load();
            ret && ret.then(() => {
                console.log('原生广告加载完成');
            }).catch((err) => {

                console.log('原生广告加载失败');

                moosnow.http.getAllConfig(res => {
                    if (res.nativeErrorShowInter == 1) {
                        console.log('原生加载出错，用插屏代替');
                        this.nativeCb(null);
                        this.showInter();
                    }
                    else {
                        this.nativeCb(null);
                    }
                })

            })
        }
    }
    public _prepareNative(isLoad: boolean = false) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createNativeAd) return;
        if (this.native) return;
        let adUnitId = this.nativeId[this.nativeIdIndex]
        console.log(" HWModule ~ _prepareNative ~ adUnitId", adUnitId)
        this.native = window[this.platformName].createNativeAd({
            adUnitId,
            success: (code) => {
                console.log("_prepareNative loadNativeAd : success", code);
            },
            fail: (data, code) => {
                console.log("_prepareNative loadNativeAd fail: " + data + "," + code);
            }
        })
        this.native.onLoad(this._onNativeLoad.bind(this));
        this.native.onError(this._onNativeError.bind(this));
    }


    public _onNativeLoad(res) {
        console.log(" HWModule ~ _onNativeLoad ~ res", JSON.stringify(res))
        this.nativeLoading = false;
        console.log(MSG.NATIVE_LOAD_COMPLETED, res)
        if (res && res.adList && res.adList.length > 0) {
            this.nativeAdResult = res.adList[res.adList.length - 1];
            if (!Common.isEmpty(this.nativeAdResult.adId)) {
                console.log(MSG.NATIVE_REPORT)
                console.log("HWModule ~ _onNativeLoad ~ reportAdShow ", this.nativeAdResult.adId)
                this.native.reportAdShow({
                    adId: this.nativeAdResult.adId
                });

            }
            if (Common.isFunction(this.nativeCb)) {
                this.nativeCb(Common.deepCopy(this.nativeAdResult))
            }
        }
        else {
            console.log(MSG.NATIVE_LIST_NULL)
            if (Common.isFunction(this.nativeCb)) {
                moosnow.http.getAllConfig(res => {
                    if (res.nativeErrorShowInter == 1) {
                        console.log('原生加载出错，用插屏代替')
                        this.showInter();
                    }
                    else {
                        this.nativeCb(null)
                    }
                })

            }
        }
    }

    public _onNativeError(err) {
        this.nativeLoading = false;
        this.nativeAdResult = null;
        if (err.code == 20003) {
            if (this.nativeIdIndex < this.nativeId.length - 1) {
                console.log(MSG.NATIVE_ERROR, err,)
                this.nativeIdIndex += 1;
                this._destroyNative();
            }
            else {
                console.log(MSG.NATIVE_NOT_ID_USE)
                this.nativeIdIndex = 0;
            }
        }
        else {
            console.log(MSG.NATIVE_ERROR2, err)
        }
        moosnow.http.getAllConfig(res => {
            if (res.nativeErrorShowInter == 1) {
                console.log('原生加载出错，用插屏代替')
                this.showInter();
            }
            else {
                if (this.nativeCb)
                    this.nativeCb(null)
            }
        })
    }

    private mClickedNativeCallback: Function
    private mIsClickedNative: boolean = false;
    public clickNative(callback?: Function) {

        if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
            this.mClickedNativeCallback = callback;
            this.mIsClickedNative = true;
            console.log(MSG.NATIVE_CLICK, this.nativeAdResult.adId)
            this.native.reportAdClick({
                adId: this.nativeAdResult.adId
            })
        }
    }

}