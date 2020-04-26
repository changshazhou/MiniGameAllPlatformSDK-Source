import moosnowAdRow from "../model/moosnowAdRow";
import Common from "../utils/Common";
import OPPOModule from "./OPPOModule";

export default class ZSOPPOModule extends OPPOModule {
    public platformName: string = "qg";
    /**
        * 检查当前版本的导出广告是否开启
        * @param {string} version 
        * @param {*} callback 
        * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
        */
    checkVersion(version, callback) {
        moosnow.http.loadCfg(res => {
            let openAd = (res.zs_version == moosnow.platform.moosnowConfig.version)
            console.log(`版本检查 后台版本${res.zs_version} 配置文件版本${moosnow.platform.moosnowConfig.version}`)
            console.log("获取广告开关：", openAd);
            callback(openAd)
        })
    }



    login(success?: Function, fail?: Function) {
        if (window[this.platformName])
            window[this.platformName].login({
                success: function (res) {
                    // var data = JSON.stringify(res.data);
                    // console.log(res.data.token);
                    var url = "https://platform.qwpo2018.com/api/oppo_login/index";
                    moosnow.http.request(url, {
                        apk_id: moosnow.platform.moosnowConfig.moosnowAppId,
                        code: res.data.token
                    }, 'POST', (res2) => {
                        moosnow.data.setToken(res2.data.user_id)
                        if (success)
                            success(res2.data)
                        console.log('platformLogin success ', res2)
                    }, (res2) => {
                        if (success)
                            success(null);
                        console.log('platformLogin fail ', res2)
                    })
                },
                fail: function (res) {
                    if (fail)
                        fail(res)
                }
            });
        else
            if (success)
                success()
    }

    /**
     * 跳转到指定App
     * @param row 
     * @param success 
     * @param fail 
     * @param complete 
     */
    public navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function) {

        super.navigate2Mini(row, () => {
            this.navigateCallback(row.appid)
            if (Common.isFunction(success))
                success();
        }, fail, complete)


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
        let data = signParams;
        console.log('跳转数据上报', data)
        moosnow.http.request(url, data, 'POST',
            (res) => {
                console.log('跳转数据上报成功', res)
            },
            (res) => {
                console.log('跳转数据上报失败', res)
            },
            () => {
                console.log('upload navigate complete');
            });
    }

}