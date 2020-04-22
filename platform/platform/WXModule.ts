import PlatformModule from './PlatformModule';
import Common from '../utils/Common';
/**
 * 微信平台
 */
export default class WXModule extends PlatformModule {

    public platformName: string = "wx";
    public baseUrl = "https://api.liteplay.com.cn/";
    private versionRet: boolean = null;
    constructor() {
        super();
        this.initBanner();
        this.initInter();
    }
    /**
    * 检查当前版本的导出广告是否开启
    * @param {string} version 
    * @param {*} callback 
    * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
    */
    public checkVersionAd(version: string, callback) {
        if (this.versionRet != null) {
            callback(this.versionRet);
            return;
        } else {
            var url = this.baseUrl + 'wx_list/getAppConfig';
            var signParams = {
                appid: this.moosnowConfig.moosnowAppId,
            };
            let data = signParams;
            moosnow.http.request(url, data, 'POST',
                (res) => {
                    this.versionRet = res.data.version != version;
                    console.log("获取广告开关：", this.versionRet);
                    callback(this.versionRet);
                },
                () => {
                    console.log('checkVersion fail');
                },
                () => {
                    console.log('checkVersion complete');
                }
            );
        }
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
                        if (Common.isFunction(callback))
                            callback();
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
            if (Common.isFunction(callback))
                callback(respone)
        }, () => {
            //如果出错，不影响游戏

            if (Common.isFunction(callback))
                callback({})
        });
    }
}