import BaseModule from "./BaseModule";
import Common from "../utils/Common";
import EventType from "../utils/EventType";

export default class GameDataCenter extends BaseModule {

    private TOKEN: string = "token";
    private COIN: string = "COIN";

    private mUserToken: string = "";
    private VIBRATE_SWITCH: string = "VIBRATE_SWITCH";
    private USER_PRIZE_KEY = "USER_PRIZE_KEY";

    private mCoin: number = 0;
    /***********
     * 金币
     */

    public initCoin(num: number) {
        if (moosnow.setting._getValue(this.COIN, null) == null)
            moosnow.setting.setValue(this.COIN, num);
    }

    public getCoin() {
        if (this.mCoin == 0)
            this.mCoin = moosnow.setting.getInt(this.COIN, 0);
        return this.mCoin;
    }
    public subCoin(v: number) {
        this.mCoin -= v;
        moosnow.event.sendEventImmediately(EventType.COIN_CHANGED, this.mCoin);
    }
    public addCoin(v: number) {
        this.mCoin += v
        moosnow.event.sendEventImmediately(EventType.COIN_CHANGED, this.mCoin);
    }
    public setCoin(v: number) {
        this.mCoin = v;
        moosnow.event.sendEventImmediately(EventType.COIN_CHANGED, this.mCoin);
    }
    public saveCoin() {
        moosnow.setting.setValue(this.COIN, this.mCoin);
        // Lite.event.sendEventImmediately(EventType.COIN_CHANGED, this.mCoin);
    }

    getToken() {
        if (Common.isEmpty(this.mUserToken))
            this.mUserToken = moosnow.setting.getString(this.TOKEN, "");
        return this.mUserToken
    }
    setToken(v) {
        moosnow.setting.setValue(this.TOKEN, v);
    }

    private mCurrentMisTouchCount: number = 0;
    getCurrentMisTouchCount() {
        // if (!this.mCurrentMisTouchCount)
        //     this.mCurrentMisTouchCount = Lite.setting.getInt(this.MIS_TOUCH_POS_COUNT, 0);
        return this.mCurrentMisTouchCount
    }
    setCurrentMisTouchCount(num: number) {
        this.mCurrentMisTouchCount = num;
        // Lite.setting.setValue(this.MIS_TOUCH_POS_COUNT, num);
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

    //振动
    getVibrateSetting(): boolean {
        return moosnow.setting.getBool(this.VIBRATE_SWITCH, true);
    }
    setVibrateSetting(on: boolean) {
        moosnow.setting.setBool(this.VIBRATE_SWITCH, on);
        moosnow.event.sendEventImmediately(EventType.VIBRATESWITCH_CHANGED, on);
    }

    private mPrizeBox;
    public getPrizeBox() {
        if (!this.mPrizeBox)
            this.mPrizeBox = {}
        return this.mPrizeBox;
    }


    
    public clearPrizeBox() {
        this.mPrizeBox = {}
    }
    public lockPrizeBox(prizeId: number, type: number, coinNum: number = 0) {
        let userBox = this.getPrizeBox();
        userBox[prizeId] = {
            prizeId: prizeId,
            type: type == 0 ? 0 : 1,
            coinNum
        }
        this.mPrizeBox = userBox
    }
    public getUserPrizeBoxById(prizeId: number) {
        let userBox = this.getPrizeBox();
        return userBox[prizeId];
    }

    private mPrizeKey: number;
    public getPrizeKey() {
        if (this.mPrizeKey == null)
            this.mPrizeKey = 3
        return this.mPrizeKey
    }

    public addPrizeKey(keyNum) {
        this.mPrizeKey += keyNum
    }


    public clearPrizeKey() {
        this.mPrizeKey = null;
        moosnow.setting.setValue(this.USER_PRIZE_KEY, "")
    }

}