import BaseModule from "./BaseModule";
import Common from "../utils/Common";

export default class GameDataCenter extends BaseModule {

    private TOKEN: string = "token";

    private mUserToken: string = "";

    getToken() {
        if (Common.isEmpty(this.mUserToken))
            this.mUserToken = moosnow.setting.getString(this.TOKEN, "");
        return this.mUserToken
    }
    setToken(v) {
        moosnow.setting.setValue(this.TOKEN, v);
    }


    private mChannel_id: string = "0";
    getChannelId() {
        return this.mChannel_id;
    }
    setChannelId(value) {
        this.mChannel_id = value
    }
    private mChannel_appid: string = "0";
    getChannelAppId() {
        return this.mChannel_appid;
    }
    setChannelAppId(value) {
        this.mChannel_appid = value
    }
}