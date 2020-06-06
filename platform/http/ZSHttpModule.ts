import { HttpModule } from "./HttpModule";
import Common from "../utils/Common";

export class ZSHttpModule extends HttpModule {

    /**
     * 获取误点间隔次数，启动游戏时调用
     * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
     */
    public getMisTouchNum(callback) {
        this.loadCfg(res => {
            callback(parseInt(res.mistouchNum))
        })
    }
    /**
     * 获取位移间隔次数，启动游戏时调用
     * @param {Funtion} callback 回调参数为mistouchPosNum:int，当misTouchNum=0时关闭误点，当mistouchPosNum=n(0除外)时，每隔n次，触发误点1次
     */
    public getMistouchPosNum(callback) {
        this.loadCfg(res => {
            callback(parseInt(res.mistouchPosNum))
        })
    }





    public getBannerShowCountLimit(callback) {
        this.loadCfg(res => {
            if (isNaN(res.bannerShowCountLimit))
                callback(5);
            else
                callback(parseInt(res.bannerShowCountLimit))
        })
    }


    public getAllConfig(callback) {
        this.loadCfg(res => {
            callback(res)
        })
    }

    public loadCfg(callback) {
        if (this.cfgData) {
            callback(this.cfgData);
        }
        else {
            var url = moosnow.platform.moosnowConfig.url + "?t=" + Date.now();
            console.log('appid ', moosnow.platform.moosnowConfig.moosnowAppId)
            moosnow.http.request(url, {
                apk_id: moosnow.platform.moosnowConfig.moosnowAppId
            }, 'POST',
                (res) => {
                    let enabled = res.data.zs_version == moosnow.platform.moosnowConfig.version;
                    this.cfgData = {

                        ...Common.deepCopy(res.data),
                        mistouchNum: res.data.zs_switch,
                        mistouchPosNum: res.data.zs_switch,
                        showNative: enabled,
                        showInter: enabled,
                        showExportAd: enabled,
                        mx_native_click_switch: res.zs_native_click_switch == 1,
                        mx_jump_switch: res.zs_jump_switch == 1,
                        bannerShowCountLimit: isNaN(res.data.bannerShowCountLimit) ? 1 : res.data.bannerShowCountLimit
                    }
                    if (moosnow.platform) {
                        moosnow.platform.bannerShowCountLimit = parseInt(res.data.bannerShowCountLimit);
                    }
                    callback(this.cfgData);
                },
                () => {
                    callback({});
                    console.log('load config json fail');
                }
            );
        }

    }
}