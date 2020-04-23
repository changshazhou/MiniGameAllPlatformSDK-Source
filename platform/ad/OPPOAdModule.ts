import AdModule from "./AdModule";

export default class OPPOAdModule extends AdModule {

    public getRemoteAd(cb) {
        let url = `https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/exportConfig/${moosnow.platform.moosnowConfig.moosnowAppId}.json?t=${Date.now()}`;
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