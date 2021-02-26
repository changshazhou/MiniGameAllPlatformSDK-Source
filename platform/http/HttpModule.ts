import BaseModule from "../framework/BaseModule";
import Common from "../utils/Common";
import { APP_PLATFORM } from "../enum/APP_PLATFORM";
import { MSG } from "../config/MSG";
import { ENGINE_TYPE } from "../enum/ENGINE_TYPE";
import ROOT_CONFIG from "../config/ROOT_CONFIG";


let ErrorType = {
    ONERROR: "HTTP协议链接出错",
    ONTIMEOUT: "HTTP协议链接超时",
    POSTERROR: "HTTP协议请求出错",
    RETURNERROR: "服务器返回错误code"
};
let GAME_COMMAND = {
    VERIFY_USER: 1,
    CREATE_ROLE: 2,
    CAPTAIN: 3
}


export class HttpModule extends BaseModule {

    private appid: string = "";
    private secret: string = "";
    private versionNumber: string = "";
    public version: string = "2.1.0";
    public baseUrl: string = "https://api.liteplay.com.cn/";
    private instanceTime: number = 0
    constructor() {
        super();
        this.instanceTime = Date.now();
        let versionUrl = `${ROOT_CONFIG.HTTP_ROOT}/SDK/version.json?t=` + Date.now();
        if (Common.platform == APP_PLATFORM.PC) {
            this.request(versionUrl, {}, 'GET', (res) => {
                if (this.version < res.version) {
                    console.warn(`您的SDK版本号[${this.version}]不是最新版本，请尽快升级，最新版本[${res.version}]  下载地址：${res.download}`)
                    if (!Common.isEmpty(res.memo))
                        console.warn(`${res.memo}`)
                }

            })
        }
        else if (Common.platform == APP_PLATFORM.WX && window["wx"]) {
            this.request(versionUrl, {}, 'GET', (res) => {
                let aldVersion = window["wx"]["aldVersion"]
                if (!aldVersion || (aldVersion && aldVersion < res.aldVersion))
                    console.warn(`阿拉丁文件错误，请重新下载${res.aldUrl}`)
            })
        }



        this.getShareInfo((data) => {
            moosnow.platform.initShare(data);
        });

        this.loadCfg((res) => {
            console.log('remote config ', res)
        })

    }


    private mLaunchOptions: any = {};
    private get appLaunchOptions() {
        if (Common.isEmpty(this.mLaunchOptions)) {
            if (moosnow.platform && moosnow.platform.getLaunchOption)
                this.mLaunchOptions = moosnow.platform.getLaunchOption();
        }

        return this.mLaunchOptions;
    }




    /**
     * 请求服务
     * @param {*} url 
     * @param {*} data 
     * @param {*} method 
     * @param {*} success 
     * @param {*} fail 
     * @param {*} complete 
     */
    public request(url: string, data: any, method: 'POST' | 'GET', success?: Function, fail?: Function, complete?: Function) {
        let newUrl = "";
        newUrl = url;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var response = xhr.responseText;
                if (xhr.status >= 200 && xhr.status < 400) {
                    var result = {};
                    try {
                        result = JSON.parse(response)
                    }
                    catch (e) {
                        console.error('json parse error ', response)
                        // if (fail)
                        //     fail(e);
                        result = response
                    }
                    // }
                    if (success)
                        success(result);
                }
                else {
                    console.warn('error ', response)
                    if (fail)
                        fail(response);
                }
            }
            else {
                // cc.log('caller state change  ', xhr)
                // console.log('caller state change  ', xhr)
            }
        };
        xhr.timeout = 10000;
        xhr.ontimeout = function (event) {
            console.error('error ', event)
            if (fail)
                fail(event);
        }

        if (method == "POST") {
            xhr.open('POST', newUrl);
            xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
            xhr.send(this._object2Query(data));
        }
        else {
            xhr.open(method, newUrl, true);
            xhr.send();
        }
    }
    public _object2Query(obj) {
        var args = []
        for (var k in obj)
            args.push(k + "=" + obj[k])
        return args.join("&"); // 返回对象  
    }

    public isDisableArea(callback) {

    }

    /**
     * Loading加载完成
     */
    public finishLoading() {
        if (window["kwaigame"])
            window["kwaigame"].readyGo();
        this.point("加载完成", {
            time: Date.now() - this.instanceTime
        });
    }
    /**
      * 点击了banner
      */
    public clickBanner() {
        // this.point("点击了banner", {
        // });
    }

    /**
     * 看完了视频
     */
    public clickVideo() {
        // this.point("点击视频", {
        // });
    }

    /**
     * 导出跳转
     */
    public exportUser() {
        // this.postData('api/channel/exportUser.html')
    }

    /**
     * 跳转记录
     * @param jump_appid 
     * @param callback 
     */
    public navigate(row: any, callback: (res) => void) {
        let userToken = moosnow.data.getToken();
        let options = moosnow.platform.getLaunchOption();
        let fromAppId = options.referrerInfo ? options.referrerInfo.appId : '未知'
        let wxgamecid = "";
        if (options.query && options.query.wxgamecid)
            wxgamecid = options.query.wxgamecid
        let query = options.query;
        let appid = Common.config.moosnowAppId;
        let tag = (moosnow.data as any).getNavigateToken(appid)
        let navigateData = {
            scene_no: Common.isEmpty(options.scene) ? "" : options.scene,
            source_appid: Common.isEmpty(fromAppId) ? "" : fromAppId,
            query,
            wechat_channel: wxgamecid,
            title: row.title,
            position: row.position,
            jump_app_icon: row.atlas || row.img,
            appid,
            uid: userToken,
            jump_appid: row.appid,
            jump_app_name: row.title,
            tag
        }
        console.log('navigate navigateData', navigateData);

        let url = `${this.baseUrl}api/jump/record`;

        if (Common.platform == APP_PLATFORM.OPPO) {
            url = `${this.baseUrl}api/jump_oppo/record`;
        }

        this.request(url, navigateData, "POST", (respone) => {
            console.log('navigate success ', respone)
            if (callback)
                callback(respone.data)
        });
    }


    /**
     * 跳转完成
     * @param code 
     */
    public navigateEnd(code: string) {
        let url = `${this.baseUrl}api/jump/success`
        if (Common.platform == APP_PLATFORM.OPPO) {
            url = `${this.baseUrl}api/jump_oppo/success`;
        }
        console.log('navigateEnd code ', code)
        this.request(url, {
            tag: code
        }, "POST", (respone) => {
            console.log('navigateEnd code ', code, respone)
        });
    }

    /**
     * 数据打点
     * @param name  打点名称
     */
    public point(name: string, data: any = null) {
        this.getAllConfig(res => {
            if ((res && res.aldMonitorOn == 1)) {
                if (Common.platform == APP_PLATFORM.WX) {
                    if (window['wx'] && window['wx'].aldSendEvent)
                        (window['wx'] as any).aldSendEvent(name, data);
                }
                else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
                    if (window['tt'] && window["tt"].reportAnalytics)
                        window["tt"].reportAnalytics(name, data);
                }
            }
        })
    }

    /**
    * 统计开始游戏
    * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
    */
    public startGame(level: string) {
        let e = {
            stageId: "" + level, //关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
            stageName: "" + level,//关卡名称，该字段必传
            userId: moosnow.data.getToken() //用户ID
        }
        if (Common.platform == APP_PLATFORM.WX) {
            if (window['wx'] && window['wx'].aldStage)
                window['wx'].aldStage.onStart(e);
            else
                console.warn(MSG.ALD_FILE_NO_IMPORT)
        }
        else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
            this.point("startgame", e)
        }
        else
            console.log("startGame -> e", e)
    }
    /**
     * 统计结束游戏
     * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     * @param {boolean} isWin 是否成功
     */
    public endGame(level: string, isWin: boolean) {
        var event = isWin ? "complete" : "fail";
        var desc = isWin ? "关卡完成" : "关卡失败";
        let e = {
            stageId: "" + level, //关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
            stageName: "" + level,//关卡名称，该字段必传
            userId: moosnow.data.getToken(), //用户ID
            event: event,   //关卡完成  关卡进行中，用户触发的操作    该字段必传
            params: {
                desc: desc   //描述
            }
        }
        if (Common.platform == APP_PLATFORM.WX) {
            if (window['wx'] && window['wx'].aldStage)
                window['wx'].aldStage.onEnd(e);
            else
                console.warn(MSG.ALD_FILE_NO_IMPORT)
        }
        else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
            this.point(isWin ? 'gameEnd' : 'gameFail', {
                stageId: "" + level, //关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
                stageName: "" + level,//关卡名称，该字段必传
                userId: moosnow.data.getToken(), //用户ID
            })
        }
        else
            console.log("startGame -> e", e)

    }
    /**
     * 视频统计
     * @param {number} type 0：视频点击 1：视频观看完成
     * @param {string} info 信息 ex:“领取三倍金币”
     * @param {string} level 关卡数
     */
    public videoPoint(type, info: string, level: string) {
        var name = type == 0 ? "点击视频" : "观看完成视频";
        let e = { info, level: level + "" }
        if (Common.platform == APP_PLATFORM.WX) {
            this.point(name, e)
        }
        else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
            this.point(type == 0 ? 'clickVideo' : 'endVideo', e)
        }
        else
            console.log("startGame -> e", e)


    }


    /**
     * 
     * @param callback 
     */
    public getAllConfig(callback: Function) {
        this.loadCfg(res => {
            if (res.inWhite) {
                callback({
                    ...res,
                    exportAutoNavigate: 1,
                    isLimitArea: 0
                })
            }
            else {
                this.loadArea(res2 => {
                    this.disableAd(res, res2, (disable) => {
                        let exportAutoNavigate = 0;
                        if (disable) {
                            //exportAutoNavigate 是否自动唤起跳转（强导） 0 关闭 1 开启(受屏蔽地区影响) 2开启（不受屏蔽地区影响）

                            if (res.exportAutoNavigate == 1)
                                exportAutoNavigate = 0;
                            if (res.exportAutoNavigate == 2)
                                exportAutoNavigate = 1;

                            callback({
                                isLimitArea: 1,
                                ...res,
                                ...this.getCfg(false),
                                site01: []
                            })
                        }
                        else {
                            if (res.exportAutoNavigate == 1)
                                exportAutoNavigate = 1
                            if (res.exportAutoNavigate == 2)
                                exportAutoNavigate = 1;
                            callback({
                                ...res,
                                exportAutoNavigate,
                                isLimitArea: 0
                            })
                        }
                    })
                })
            }

        })
    }


    public cfgData = null;
    public areaData = null;
    public _cfgQuene = [];

    private getCfg(open: boolean) {
        let cfg = {
            checkBoxMistouch: 0,
            checkBoxProbabilitys: [100, 0, 0, 0, 0],
            mistouchNum: 0,
            mistouchPosNum: 0,
            bannerShowCountLimit: 1,
            exportBtnNavigate: 0,
            exportAutoNavigate: 0,
            delayShow: 0,
            showAppBox: 0,
            zs_native_click_switch: 0,
            zs_jump_switch: 0,
            mx_native_click_switch: 0,
            mx_jump_switch: 0,
            mistouchInterval: 0,
            nativeErrorShowInter: 0,
            bannerErrorShowInter: 0,
            isStartMistouch: 0,
            isStartVideo: 0,
            loadingAdOn: 0,
            isBlockClose: 0,
            SkinForceAd: 0,
            CancelToSkip: 0,
            SliceSkip: 0,
            ForceSkip02: 0,
            ForceSkip01: 0,
            GameCenterWudian: 0,
            SkinWudian: 0,
            GGPopWudian: 0,
            GamingEndFlashBanner: 0,
            FlashBanner01: 0,
            RewardOffsetBanner: 0
        }
        if (open) {
            for (let key in cfg) {
                if (!isNaN(cfg[key]))
                    cfg[key] = 1
            }
        }
        return cfg;
    }

    /**
     * 
     * @param res 
     * @param applyRemote 使用后台数据
     */
    private defaultCfg(res, applyRemote: boolean) {
        let cfg: any = this.getCfg(false);
        if (res) {
            console.warn("defaultCfg -> moosnow.data.getToken()", moosnow.data.getToken())
            console.warn("defaultCfg -> res.whitelist", res.whitelist)
            if (res.whitelist) {
                let token = moosnow.data.getToken();
                let inWhite = false;
                if (token != "")
                    for (let i = 0; i < res.whitelist.length; i++) {
                        if (token == res.whitelist[i]) {
                            inWhite = true;
                            break;
                        }
                    }
                if (inWhite) {
                    console.warn("白名单前 -> cfg", cfg)
                    cfg = {
                        inWhite,
                        ...cfg,
                        ...this.getCfg(true)
                    }
                    console.warn("白名单后 -> cfg", cfg)
                }
            }

            if (applyRemote) {
                console.warn("使用后台数据前 -> cfg", cfg)
                cfg = {
                    ...cfg,
                    ...res
                }
                console.warn("使用后台数据后 -> cfg", cfg)
            }
            else {
                console.warn("不使用后台数据前 -> cfg", cfg)
                cfg = {
                    ...res,
                    ...cfg
                }
                console.warn("不使用后台数据后 -> cfg", cfg)
            }
        }

        if (moosnow.platform) {
            if (res) {
                if (!isNaN(res.bannerShowCountLimit))
                    moosnow.platform.bannerShowCountLimit = parseInt(res.bannerShowCountLimit);
                if (!isNaN(res.bannerLimitType))
                    moosnow.platform.bannerLimitType = parseInt(res.bannerLimitType);
                if (!isNaN(res.bannerShowTimeLimit))
                    moosnow.platform.bannerShowTimeLimit = parseInt(res.bannerShowTimeLimit);
            }
        }
        return cfg;
    }

    public loadCfg(callback) {
        if (!Common.isEmpty(this.cfgData)) {
            callback(this.cfgData);
        }
        else {
            this._cfgQuene.push(callback);
            if (this._cfgQuene.length > 1)
                return

            var url = "";
            if (Common.config.url)
                url = Common.config.url + "?t=" + Date.now();
            else
                url = `${ROOT_CONFIG.HTTP_ROOT}/config/${Common.config.moosnowAppId}.json?t=${Date.now()}`;

            this.request(url, {}, 'GET',
                (res) => {
                    ["bannerId", "interId", "blockId", "boxId", "nativeId", "videoId", "gameBannerId", "gamePortalId"]
                        .forEach((key, idx) => {
                            if (res.hasOwnProperty(key)) {
                                Common.config[key] = res[key]
                            }
                        })

                    let versionRet = moosnow.platform.checkLog(res.version);
                    if (!versionRet) {
                        this.cfgData = this.defaultCfg(res, false)
                        console.log('版本关闭----------------', this.cfgData);
                    }
                    else {
                        //总开关控制
                        let mistouchOn = res && res.mistouchOn == 1 ? true : false;
                        if (!mistouchOn) {
                            console.log('总开关已关闭----------------', this.cfgData);
                        }
                        this.cfgData = this.defaultCfg(res, mistouchOn)
                    }
                    this._cfgQuene.forEach(item => {
                        item(this.cfgData);
                    })
                    this._cfgQuene = [];
                },
                () => {
                    let cfg = this.defaultCfg(null, false)
                    this._cfgQuene.forEach(item => {
                        item(cfg);
                    })
                    this._cfgQuene = [];
                    console.log('load config json fail');
                }
            );
        }

    }
    private _localQuene = [];
    public loadArea(callback) {
        if (this.areaData) {
            callback(this.areaData)
        }
        else {

            this._localQuene.push(callback);
            if (this._localQuene.length > 1)
                return;

            let ipUrl = `${this.baseUrl}admin/wx_config/getLocation`;
            this.request(ipUrl, {}, 'GET', (res2) => {
                this.areaData = res2;
                this._localQuene.forEach(item => {
                    item(this.areaData)
                })
                this._localQuene = [];
            }, () => {
                this._localQuene.forEach(item => {
                    item(this.areaData)
                })
                this._localQuene = [];
            })
        }

    }

    public getForceExport(callback) {
        this.loadCfg(res => {
            this.loadArea(res2 => {
                this.disabledForceExport(res, res2, (disable) => {
                    callback(disable)
                })
            })
        })

    }

    public disabledForceExport(res, res2, callback) {
        let curTime = Common.formatTime(new Date())
        let inDisabledRegion = false;
        if (res.disabledForceExport) {
            for (let i = 0; i < res.disabledForceExport.length; i++) {
                let region = res.disabledForceExport[i];
                if (res2.data.city.indexOf(region) != -1
                    || res2.data.province.indexOf(region) != -1
                    || res2.data.area.indexOf(region) != -1) {
                    inDisabledRegion = true;
                    break;
                }
            }
        }

        if (inDisabledRegion) {
            if (res.forceExportTime && res.forceExportTime.length == 2) {
                if (curTime > res.forceExportTime[0] && curTime < res.forceExportTime[1]) {
                    callback(true)
                }
                else {
                    callback(false)
                }
            }

            else {
                callback(true)
            }
        }
        else {
            callback(false)
        }
    }

    public getBannerShowCountLimit(callback) {
        this.loadCfg(res => {
            if (isNaN(res.bannerShowCountLimit))
                callback(5);
            else
                callback(parseInt(res.bannerShowCountLimit))
        })
    }



    private disableAd(res, res2, callback) {
        let curTime = Common.formatTime(new Date())
        let inDisabledRegion = false;
        if (res && res.disabledRegion) {
            for (let i = 0; i < res.disabledRegion.length; i++) {
                let region = res.disabledRegion[i];
                if (res2 && res2.data && (res2.data.city.indexOf(region) != -1
                    || res2.data.province.indexOf(region) != -1
                    || res2.data.area.indexOf(region) != -1)) {
                    inDisabledRegion = true;
                    break;
                }
            }
        }
        if (this.appLaunchOptions && res) {

            console.log('后台禁止场景 1 ', res.seachEntryScene);
            console.log('后台禁止场景 2 ', res.shareEntryScene);
            console.log('进入时的场景 ', this.appLaunchOptions.scene);

            if ((res.seachEntryOn == 1 && res.seachEntryScene && res.seachEntryScene.indexOf(this.appLaunchOptions.scene) != -1)
                || (res.shareEntryOn == 1 && res.shareEntryScene && res.shareEntryScene.indexOf(this.appLaunchOptions.scene) != -1)) {
                callback(true)
                console.log('后台禁止场景 ', this.appLaunchOptions.scene);
                return;
            }
        }
        if (inDisabledRegion) {
            if (res.disabledTime && res.disabledTime.length == 2) {
                if (curTime > res.disabledTime[0] && curTime < res.disabledTime[1]) {
                    callback(true)
                }
                else {
                    callback(false)
                }
            }

            else {
                callback(true)
            }
        }
        else {
            callback(false)
        }

    }

    public getShareInfo(cb) {
        this.request(`${ROOT_CONFIG.HTTP_ROOT}/share/${Common.config.moosnowAppId}.json`, {
            appid: Common.config.moosnowAppId
        }, "GET", (res) => {
            cb(res);
            moosnow.platform.initShare(res);
        }, () => {
            this.request(`${this.baseUrl}admin/wx_share/getShare`, {
                appid: Common.config.moosnowAppId
            }, "POST", (res) => {
                console.log('分享数据', res.data)
                cb(res.data);
                moosnow.platform.initShare(res.data);
            });
        });
    }
}

