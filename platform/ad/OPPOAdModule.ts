import AdModule from "./AdModule";

export default class OPPOAdModule extends AdModule {

    public getRemoteAd(cb) {

        let url = 'https://platform.qwpo2018.com/api/apk_ad/index';
        var signParams = {
            apk_id:moosnow.platform.moosnowConfig.moosnowAppId,
        };
        let data = signParams;
        moosnow.http.request(url, data, 'POST',
            (res) => {
                let arr = res.data;
                arr.sort(() => Math.random() > 0.5 ? 1 : -1);
                if (cb) {
                    var retValue = []
                    for (var i = 0; i < arr.length; i++) {
                        var item = arr[i]
                        retValue.push({
                            appid: item.link_appid,
                            boxAppid: "",
                            desc: item.link_des,
                            img: item.link_img,
                            path: item.link_path,
                            title: item.link_name,
                            pkgName: item.link_page,
                            atlas: ""
                        })
                    }
                    cb(retValue);
                }
            },
            () => {
                console.log('getRemoteAd fail');
            },
            () => {
                console.log('getRemoteAd complete');
            }
        );
    }

 
}