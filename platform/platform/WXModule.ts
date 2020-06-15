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
            if (window[this.platformName] && window[this.platformName].login)
                window[this.platformName].login({
                    success: (res) => {
                        if (res.code) {
                            //发起网络请求
                            self.getUserToken(res.code, "", callback)
                        } else {
                            if (Common.isFunction(callback))
                                callback();
                        }
                    },
                    fail: () => {

                    }
                })
            else {
                super.login(callback, fail);
            }
        }
    }

    /**
     * 
     * @param code 
     * @param user_id 
     * @param callback 
     */
    private getUserToken(code, user_id, callback?) {

        let options = this.getLaunchOption();
        let scene = options.scene;
        let channel_id = options.query && options.query.channel_id ? options.query.channel_id : "0";
        let channel_appid = options.referrerInfo && options.referrerInfo.appId ? options.referrerInfo.appId : "0";

        moosnow.data.setChannelAppId(channel_appid);
        moosnow.data.setChannelId(channel_id);
        let fromApp = options.referrerInfo ? options.referrerInfo.appId : '未知'
        if (window[this.platformName] && window[this.platformName].aldSendEvent) {
            window[this.platformName].aldSendEvent("来源", {
                origin: fromApp,
                path: options.query.from || 0
            })
        }

        moosnow.http.request(`${this.baseUrl}api/channel/login.html`, {
            appid: moosnow.platform.moosnowConfig.moosnowAppId,
            code: code,
            user_id: user_id,
            channel_id: channel_id,
            channel_appid: channel_appid,
            scene, fromApp
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