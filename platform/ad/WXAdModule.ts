import AdModule from "./AdModule";

export default class WXAdModule extends AdModule {

    public getRemoteAd(cb) {
        let url = `https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/exportConfig/${moosnow.platform.moosnowConfig.moosnowAppId}.json?t=${Date.now()}`;
        moosnow.http.request(url, {}, 'GET',
            (res) => {
                cb(res)
                console.log('WXAdModule getRemoteAd', res)
            },
            () => {
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
            appid: moosnow.platform.moosnowConfig.moosnowAppId,
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