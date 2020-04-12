import PlatformModule from './PlatformModule';
export default class WXModule extends PlatformModule {

    public platformName: string = "wx";
    public bannerId: string = "adunit-ea921b190e3b0d9e";
    public videoId: string = "adunit-3f5c0e00d3a7966b";
    public interId = "adunit-dbf4276f86e23075";
    public appid: string = "wxfa20fb89cc541bf8";

    private baseUrl = "https://api.liteplay.com.cn/";
    constructor() {
        super();
    }





    /**
     * 游戏登录
     * @param callback 
     */
    public gameLogin(callback) {
        let self = this
        let userToken = moosnow.data.getToken();
        if (userToken) {
            self.getUserToken(null, userToken, callback)
        }
        else {
            window[this.platformName].login({
                success(res) {
                    if (res.code) {
                        //发起网络请求
                        self.getUserToken(res.code, null, callback)
                    } else {
                        console.log('登录失败！' + res.errMsg)
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
        let channel_appid = options.referrerInfo ? "0" : options.referrerInfo.appId;

        moosnow.data.setChannelAppId(channel_appid);
        moosnow.data.setChannelId(channel_id);

        moosnow.http.request(`${this.baseUrl}api/channel/login.html`, {
            appid: window["moosnowAppId"],
            code: code,
            user_id: user_id,
            channel_id: channel_id,
            channel_appid: channel_appid
        }, "POST", (respone) => {
            if (respone.code == 0 && respone.data && respone.data.user_id) {
                moosnow.data.setToken(respone.data.user_id);
            }
            callback(respone)
        });
    }
}