import PlatformModule from "./PlatformModule";
import moosnowAdRow from "../model/moosnowAdRow";
import Common from "../utils/Common";

export default class OPPOModule extends PlatformModule {

    public platformName: string = "qg";
    public appSid: string = "";
    public baseUrl = "https://api.liteplay.com.cn/";

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
    public checkVersion(version: string, callback) {
        moosnow.http.loadCfg(res => {
            callback((res.zs_version == version))
        })
    }
    private initAdService() {
        if (!window[this.platformName])
            return;
        let self = this;
        window[this.platformName].initAdService({
            isDebug: true,
            appId: this.moosnowConfig.moosnowAppId,
            success: (res) => {
                console.log(`初始化广告`);
                self.initBanner();
                self.initInter();
                self._prepareNative();
            },
            fail: (res) => {
                console.warn(`初始化广告错误 ${res.code}  ${res.msg}`);
            },
            complete: (res) => {
                console.log("initAdService  complete");
            }
        })
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
        // 跳转小游戏按钮，支持最低平台版本号'1044' (minPlatformVersion>='1044')
        if (this.supportVersion(1044)) {
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

    }

    public supportVersion(version: string | number) {
        return window['Global'] && window['Global'].platformVersion >= version
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
            if (!this.supportVersion(1040)) {
                if (Common.isFunction(callback))
                    callback({})
                return;
            }
            window[this.platformName].login({
                success: (res) => {
                    if (res.code) {
                        //发起网络请求
                        self.getUserToken(res.code, "", callback)
                    } else {
                        if (Common.isFunction(callback))
                            callback({})
                    }
                },
                fail: (res) => {
                    if (Common.isFunction(callback))
                        callback({})
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


        if (!this.supportVersion(1050)) {
            if (Common.isFunction(callback))
                callback({});
            return;
        }
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
            if (Common.isFunction(callback))
                callback(respone)
        }, () => {
            //如果出错，不影响游戏
            if (Common.isFunction(callback))
                callback({})
        });
    }
}