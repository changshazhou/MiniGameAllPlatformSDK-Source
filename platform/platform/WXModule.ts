import PlatformModule from './PlatformModule';
/**
 * 微信平台
 */
export default class WXModule extends PlatformModule {

    public platformName: string = "wx";
    private baseUrl = "https://api.liteplay.com.cn/";
    constructor() {
        super();
        this.initBanner();
        this.initInter();
    }

    /**
     * 游戏登录
     * @param callback 
     * @param fail 
     */
    public login(callback: Function, fail?: Function) {

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
        });
    }
}