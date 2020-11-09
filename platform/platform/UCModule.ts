import { MSG } from "../config/MSG";
import { AD_POSITION } from "../enum/AD_POSITION";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "../enum/BANNER_POSITION";
import { VIDEO_STATUS } from "../enum/VIDEO_STATUS";
import bannerStyle from "../model/bannerStyle";
import Common from "../utils/Common";
import PlatformModule from "./PlatformModule";

export default class UCModule extends PlatformModule {
    public platformName: string = "uc";

    public constructor() {
        super();
        if (!window[this.platformName]) return;
        if (!window[this.platformName].setEnableDebug) return;
        // 打开调试
        window[this.platformName].setEnableDebug({
            enableDebug: Common.config["enableDebug"] == true,
            complete: (data) => {
                console.log('uc.setEnableDebug openDebug. ');
            },
        });

        if (!window[this.platformName].requestScreenOrientation) return;
        window[this.platformName].requestScreenOrientation({
            orientaiton: Common.config["orientaiton"] == "portrait" ? 1 : 2, // 1: 竖屏模式 2：横屏模式
            success: res => {
                console.log(res);
            },
            fail: res => {
                console.error(res);
            },
        });
    }

    private mGravity = {
        [`${BANNER_HORIZONTAL.CENTER}_${BANNER_VERTICAL.TOP}`]: 1,
        [`${BANNER_HORIZONTAL.CENTER}_${BANNER_VERTICAL.CENTER}`]: 4,
        [`${BANNER_HORIZONTAL.CENTER}_${BANNER_VERTICAL.BOTTOM}`]: 7,
        [`${BANNER_HORIZONTAL.LEFT}_${BANNER_VERTICAL.BOTTOM}`]: 6,
        [`${BANNER_HORIZONTAL.RIGHT}_${BANNER_VERTICAL.BOTTOM}`]: 8,
    }

    public _prepareBanner() {
        if (!window[this.platformName].createBannerAd) return;
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        //横屏模式
        if (wxsys.windowHeight < wxsys.windowWidth) {
            if (windowWidth < this.bannerWidth) {
                this.bannerWidth = windowWidth;
            }
        }
        else {
            //竖屏
            this.bannerWidth = windowWidth;
        }

        if (this.banner) {
            this.banner.offError(this._onBannerError);
            this.banner.offLoad(this._onBannerLoad);
            this.banner.destroy();
            this.banner = null;
        }
        this.banner = this._createBannerAd();
        if (this.banner) {
            this.banner.onError(this._onBannerError.bind(this));
            this.banner.onLoad(this._onBannerLoad.bind(this));
        }
    }

    public _createBannerAd() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let left = (windowWidth - this.bannerWidth) / 2;
        this.bannerShowTime = Date.now();
        let banner = window[this.platformName].createBannerAd({
            style: {
                gravity: this.mGravity[`${this.bannerHorizontal}_${this.bannerVertical}`],
                width: this.bannerWidth
            }
        });
        return banner;
    }

    /**
     * 显示平台的banner广告
     * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
     * @param callback 点击回调
     * @param position banner的位置，默认底部
     * @param style 自定义样式
     */
    public showBanner(remoteOn: boolean = true, callback?: (isOpend: boolean) => void, horizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.CENTER, vertical: BANNER_VERTICAL = BANNER_VERTICAL.BOTTOM, style?: bannerStyle) {

        console.log(MSG.BANNER_SHOW)
        this.bannerCb = callback;
        this.isBannerShow = true;
        if (!window[this.platformName]) {
            return;
        }
        this.bannerHorizontal = horizontal;
        this.bannerVertical = vertical;
        this.bannerStyle = style;

        if (this.mTimeoutId) {
            clearTimeout(this.mTimeoutId);
            this.mTimeoutId = null;
        }

        if (remoteOn)
            moosnow.http.getAllConfig(res => {
                if (res.mistouchNum == 0) {
                    console.log('后台关闭了banner，不执行显示')
                    return;
                }
                else {
                    console.log('后台开启了banner，执行显示')
                    if (this.banner) {
                        this.banner.show();
                    }
                }
            })
        else {
            if (this.banner) {
                this.banner.show();
            }
        }
    }

    public createRewardAD(show) {
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
        let videoId = this.videoId;
        if (Common.isEmpty(videoId)) {
            console.warn(MSG.VIDEO_KEY_IS_NULL)
            if (moosnow.platform.videoCb)
                moosnow.platform.videoCb(VIDEO_STATUS.END);
            return;
        }
        if (!this.video) {
            this.video = window[this.platformName].createRewardVideoAd();
            if (!this.video) {
                console.warn('创建视频广告失败')
                return;
            }
            this.video.onError(this._onVideoError);
            this.video.onClose(this._onVideoClose);
            this.video.onLoad(this._onVideoLoad);
        }
        moosnow.platform.videoLoading = true;
        moosnow.platform.videoPlaying = false;
        this.video.load()
            .then(() => {
                if (show) {
                    moosnow.platform.videoPlaying = true;
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
}