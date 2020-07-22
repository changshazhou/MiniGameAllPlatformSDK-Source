import AdModule from "./AdModule";
import Common from "../utils/Common";
import { ROOT_CONFIG } from "../config/ROOT_CONFIG";

export default class WXAdModule extends AdModule {

    public getRemoteAd(cb) {
        let url = `${ROOT_CONFIG.HTTP_ROOT}/exportConfig/${Common.config.moosnowAppId}.json?t=${Date.now()}`;
        moosnow.http.request(url, {}, 'GET',
            (res) => {
                cb(res)
                console.log('WXAdModule getRemoteAd', res)
            },
            (error) => {
                this.repairAd(cb);
                console.log('getRemoteAd fail');
            },
            () => {
                console.log('getRemoteAd complete');
            }
        );
    }

    private repairAd(cb) {
        let url = this.baseUrl + 'wx_export/getExport';
        var signParams = {
            appid: Common.config.moosnowAppId
        };


        let data = signParams;
        moosnow.http.request(url, data, 'POST',
            (res) => {
                let arr = res.data;
                arr.sort(() => Math.random() > 0.5 ? 1 : -1);
                if (cb) {
                    cb(res.data);
                }
            },
            () => {
                cb([])
                console.log('getRemoteAd fail');
            },
            () => {
                console.log('getRemoteAd complete');
            }
        );
    }
}