import PlatformModule from "./PlatformModule";
import nativeAdRow from "../model/nativeAdRow";
import moosnowAdRow from "../model/moosnowAdRow";

export default class OPPOModule extends PlatformModule {

    public platformName: string = "qg";
    public appSid: string = "";
    public baseUrl = "https://api.liteplay.com.cn/";

    private nativeIndex: number = 0;
    private nativeAd: any;
    private mNativeAds: Array<nativeAdRow>;
    private nativeShowCount: number = 0;
    public nativeShowCountLimit: number = 2;
    constructor() {

        super();
        this.initAdService();

    }


    /**
    * 检查当前版本的导出广告是否开启
    * @param {string} version 
    * @param {*} callback 
    * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
    */
    public checkVersionAd(version: string, callback) {
        moosnow.http.loadCfg(res => {
            callback((res.zs_version == version))
        })
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
    public showBanner(callback) {
        this.bannerCb = callback;
        if (!window[this.platformName]) {
            return;
        }
        if (this.banner) {
            let now = Date.now();
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

    /**
     * 游戏登录
     * @param callback 
     * @param fail 
     */
    public login(callback?: Function, fail?: Function) {

        moosnow.http.getAllConfig(res => {

        });

        let self = this;

        let userToken = moosnow.data.getToken();
        if (userToken) {
            self.getUserToken("", userToken, callback)
        }
        else {
            window[this.platformName].login({
                success(res) {
                    if (res.code) {
                        //发起网络请求
                        self.getUserToken(res.code, "", callback)
                    } else {
                        // (window[this.platformName] as any).showModal({
                        //     title: "提示",
                        //     content: "网络有点开小差了,",
                        //     confirmText: "重启游戏",
                        //     showCancel: false,
                        //     cancelColor: '#000000',
                        //     confirmColor: '#3CC51F',
                        //     fail: null,
                        //     complete: null,
                        //     success(res) {
                        //         window[self.platformName].exitMiniProgram({
                        //             success: () => {
                        //                 let item = {
                        //                     appid: "wx840e2e246968f224",
                        //                     img: "",
                        //                     path: ""
                        //                 } as moosnowAdRow
                        //                 moosnow.platform.navigate2Mini(item)
                        //             }
                        //         })
                        //     }
                        // })
                    }
                }
            })
        }
    }

    /**
     * 
     * @param code 
     * @param user_id 
     * @param callback 
     */
    private getUserToken(code, user_id, callback?) {

        let options = window[this.platformName].getLaunchOptionsSync();
        let channel_id = options.query && options.query.channel_id ? options.query.channel_id : "0";
        let channel_appid = options.referrerInfo && options.referrerInfo.appId ? options.referrerInfo.appId : "0";

        moosnow.data.setChannelAppId(channel_appid);
        moosnow.data.setChannelId(channel_id);

        if (window[this.platformName] && window[this.platformName].aldSendEvent) {
            window[this.platformName].aldSendEvent("来源", {
                origin: options.referrerInfo ? options.referrerInfo.appId : '未知',
                path: options.query.from || 0
            })
        }

        moosnow.http.request(`${this.baseUrl}api/channel/login.html`, {
            appid: moosnow.platform.moosnowConfig.moosnowAppId,
            code: code,
            user_id: user_id,
            channel_id: channel_id,
            channel_appid: channel_appid
        }, "POST", (respone) => {
            if (respone.code == 0 && respone.data && respone.data.user_id) {
                moosnow.data.setToken(respone.data.user_id);
            }
            callback(respone)
        }, () => {
            //如果出错，不影响游戏
            callback({})
        });
    }
}