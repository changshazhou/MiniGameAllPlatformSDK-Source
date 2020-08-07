import AdModule from "./AdModule";
import Common from "../utils/Common";
import { ROOT_CONFIG } from "../config/ROOT_CONFIG";

export default class OPPOAdModule extends AdModule {

    public getRemoteAd(cb) {
        let url = `${ROOT_CONFIG.HTTP_ROOT}/exportConfig/${Common.config.moosnowAppId}.json?t=${Date.now()}`;
        moosnow.http.request(url, {}, 'GET',
            (res) => {
                cb(res)
                console.log('WXAdModule getRemoteAd', res)
            },
            () => {
                super.getRemoteAd(cb);
                console.log('getRemoteAd fail');
            },
            () => {
                console.log('getRemoteAd complete');
            }
        );
    }


}