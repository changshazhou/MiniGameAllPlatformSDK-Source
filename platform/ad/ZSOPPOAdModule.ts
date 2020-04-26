import AdModule from "./AdModule";
import moosnowAdRow from "../model/moosnowAdRow";

export default class ZSOPPOAdModule extends AdModule {

    public getRemoteAd(cb: Function) {
        let url = 'https://platform.qwpo2018.com/api/apk_ad/index';
        var signParams = {
            apk_id: moosnow.platform.moosnowConfig.moosnowAppId,
        };
        let data = signParams;
        moosnow.http.request(url, data, 'POST',
            (res) => {
                let arr = res.data;
                arr.sort(() => Math.random() > 0.5 ? 1 : -1);
                console.log('接口数据', res.data);
                if (cb) {
                    var retValue: Array<moosnowAdRow> = [];
                    for (var i = 0; i < arr.length; i++) {
                        var item = arr[i];
                        let row = new moosnowAdRow();
                        row.appid = item.link_appid;
                        row.img = item.link_img;
                        row.path = item.link_path;
                        row.title = item.link_name;
                        row.pkgName = item.link_page;
                        row.desc = item.link_des;
                        retValue.push(row)
                    }
                    cb(retValue);
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