import PlatformModule from "./PlatformModule";
import nativeAdRow from "../model/nativeAdRow";
import moosnowAdRow from "../model/moosnowAdRow";

export default class OPPOModule extends PlatformModule {

    public platformName: string = "qg";
    public appSid: string = "";
    public interInterval: number = 30;
    public interSize: number = 5;
    public config: any = {};

    public auditVersion: boolean = false;


    private nativeIndex: number = 0;
    private nativeAd: any;
    private mNativeAds: Array<nativeAdRow>;
    private nativeShowCount: number = 0;
    public nativeShowCountLimit: number = 2;
    constructor() {

        super();
        this.initAdService();



    }
    private initAdService() {
        if (!window[this.platformName])
            return;
        window[this.platformName].initAdService({
            isDebug: true,
            appId: this.moosnowConfig.moosnowAppId,
            success: function (res) {
                console.log(`初始化广告`);
                this.initBanner();
                this.initInter();
                this._prepareNative();
            },
            fail: function (res) {
                console.warn(`初始化广告错误 ${res.code}  ${res.msg}`);
            },
            complete: function (res) {
                console.log("initAdService  complete");
            }
        })
    }


    public mShowInter: boolean = false;
    public prepareInter(show = false) {
        if (!window[this.platformName]) return;
        if (typeof window[this.platformName].createInsertAd != "function") return;

        this.mShowInter = show
        this.inter = window[this.platformName].createInsertAd({
            posId: this.interId
        });
        this.inter.onLoad(this._onInterLoad.bind(this));
        this.inter.onClose(this._onInterClose.bind(this));
        this.inter.onError(this._onInterError.bind(this));
        this.inter.onShow(this._onInterShow.bind(this));
        this.inter.load();
    }
    private _onInterShow() {
        console.log('inter onShow ')
    }
    public _onInterLoad() {
        this.interShowCount = 0;
        this.isInterLoaded = true;
        if (this.mShowInter)
            this.showInter();
    }

    private mPrevInter = -1;
    private mInterLen = 0;
    public showInter() {
        if (!this.inter) return;
        if (this.mInterLen > this.config.interSize)
            return;
        if (this.isInterLoaded) {
            let now = Date.now();
            this._showInter();
        }
    }
    private _showInter() {
        this.mInterLen += 1;
        // this.inter.hide();
        this.inter.show();
    }


    //--------------原生广告---------------

    public initNative() {
        if (!window[this.platformName]) return;
        this._prepareNative();
    }

    private _prepareNative() {

        if (!window[this.platformName]) return;
        if (typeof window[this.platformName].createNativeAd != "function") return;

        if (this.moosnowConfig.nativeId.length == 0) {
            return;
        }
        if (this.nativeIndex > this.moosnowConfig.nativeId.length - 1)
            this.nativeIndex = 0;

        if (this.nativeAd)
            this.nativeAd.destroy();

        this.nativeAd = window[this.platformName].createNativeAd({
            posId: this.moosnowConfig.nativeId[this.nativeIndex]
        })
        this.nativeAd.onLoad(this._onNativeLoad.bind(this));
        this.nativeAd.onError(this._onNativeError.bind(this));
        this.nativeAd.load()
    }

    public reloadNativeAd() {
        this.nativeAd.load()
    }

    public showNativeAd(callback: (res) => {}) {

        if (this.mNativeAds) {
            this.mNativeAds.forEach(item => {
                if (this.nativeAd)
                    this.nativeAd.reportAdShow({
                        adId: item.adId
                    })
            })
        }

        this.nativeShowCount++;
        if (this.bannerShowCount >= this.bannerShowCountLimit) {
            this.reloadNativeAd();
        }
        callback(this.mNativeAds)
    }


    public _onNativeLoad(res) {
        console.log("原生广告", res.adList)
        if (res.adList.length == 0) {
            this.nativeAd.offLoad();
            this.nativeAd.offError();
            this.nativeAd.destroy();
        }
        this.mNativeAds = res.adList;
    }
    public _onNativeError(e) {
        if (e.code == 20003) {
            this.nativeIndex += 1;
            console.log('使用新ID加载原生广告', e)
            this._prepareNative();
        }

    }
    public nativeAdClick(e) {
        if (this.mNativeAds.length > 0 && this.nativeAd)
            this.nativeAd.reportAdClick({
                adId: this.mNativeAds[0].adId
            })
        console.log('触发原生广告', e)
    }


    /************************************ */
    public _createBannerAd() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;
        let banner = window[this.platformName].createBannerAd({
            posId: this.bannerId,
        });
        banner.onError((err) => {
            console.log('banner error ', err);
        })
        return banner;
    }
    private mBannerSize = 0;
    private mPrevBanner = -1
    public showBanner() {
        if (!window[this.platformName]) {
            return;
        }
        if (this.banner) {
            let now = Date.now();
            if (this.mPrevBanner == -1 || now - this.mPrevBanner > this.config.bannerInterval * 1000) {
                this.mPrevBanner = now;
                this.banner.hide();
                let promiseShow = this.banner.show();
                this.mBannerSize += 1;
                if (promiseShow && promiseShow.catch)
                    promiseShow.catch(err => {
                        console.log('广告组件出现问题', err);
                    });

            }
        }
    }

    private showRewardAD: boolean = false;
    public createRewardAD(show) {
        // if (this.videoLoading) {
        //     return;
        // }
        this.showRewardAD = show;
        if (!window[this.platformName])
            return;
        if (!window[this.platformName].createRewardedVideoAd) {
            return;
        }
        // if (this.video) {
        //     this.video.offClose();
        //     this.video.offError();
        //     this.video.offLoad();
        //     this.video.offLoad();
        //     this.video.offRewarded();
        //     this.video.offVideoStart();
        //     this.video.destroy();
        //     this.video = null;
        // }

        if (!this.video) {
            this.video = window[this.platformName].createRewardedVideoAd({
                posId: this.videoId
            });
            this.video.onError(this._onVideoError.bind(this))
            this.video.onClose(this._onVideoClose.bind(this))
            this.video.onLoad(this._onVideoLoad.bind(this))
            this.video.onRewarded(function () {
                console.log("onRewarded");
            })
            this.video.onVideoStart(function () {
                console.log("onVideoStart");
            })
            this.video.load();
        }
        else {
            this.video.load();
        }
        // if (this.showRewardAD) {
        //     let p = this.video.show(function (e) {
        //         console.log("show call 1", e);
        //     }).catch((e) => {
        //         console.log("show catch 1", e);
        //     });
        //     console.log('video show result 1 ', p)
        // }
    }
    public _onVideoLoad() {
        if (this.showRewardAD) {
            let p = this.video.show(function (e) {
                console.log("show call 2", e);
            }).catch((e) => {
                console.log("show catch 2", e);
            });
            console.log('video show result 1 ', p)
        }
    }

    public prevNavigate = Date.now();
    /**
     * 跳转到指定App
     * @param row 
     * @param success 
     * @param fail 
     * @param complete 
     */
    public navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function) {


        if (Date.now() - this.prevNavigate < 300) {
            console.log('>>>>>>>>>>>>>>>>>>>>> ')
            return;
        }
        this.prevNavigate = Date.now();

        if (!window[this.platformName]) {
            if (success)
                success();
            return;
        }
        let { appid, path, extraData, pkgName } = row;
        extraData = extraData || {};
        window[this.platformName].navigateToMiniGame({
            appId: appid,
            path: path,
            pkgName: pkgName,
            extraData: extraData,
            success: () => {
                if (window[this.platformName] && window[this.platformName].aldSendEvent) {
                    window[this.platformName].aldSendEvent('跳转', {
                        position: row.position,
                        appid,
                        img: row.atlas || row.img
                    })
                }
                moosnow.http.exportUser();
                this.navigateCallback(appid);
                if (success)
                    success();
            },
            fail: (err) => {
                console.log('navigateToMiniProgram error ', err)
                if (fail)
                    fail();
            },
            complete: () => {
                if (complete)
                    complete();
            }
        })
    }

    private navigateCallback(appId) {

        let url = 'https://platform.qwpo2018.com/api/apk_ad/click_log';
        let openId = moosnow.data.getToken();
        var signParams = {
            user_id: openId,
            apk_id: moosnow.platform.moosnowConfig.moosnowAppId,
            appid: appId,
            link_id: appId,
        };

        let data = signParams
        moosnow.http.request(url, data, 'POST',
            (res) => {
                console.log('upload navigate success', res)
            },
            (res) => {
                console.log('upload navigate fail', res)
            },
            () => {
                console.log('upload navigate complete');
            });
    }
}