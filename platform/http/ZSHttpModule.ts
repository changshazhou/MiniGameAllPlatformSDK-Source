import { HttpModule } from "./HttpModule";
import Common from "../utils/Common";

export class ZSHttpModule extends HttpModule {






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
            var url = Common.config.url + "?t=" + Date.now();
            console.log('appid ', Common.config.moosnowAppId)
            this.request(url, {
                apk_id: Common.config.moosnowAppId
            }, 'POST',
                (res) => {
                    let enabled = res.data.zs_version == Common.config.version;
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