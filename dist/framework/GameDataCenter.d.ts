import BaseModule from "./BaseModule";
export default class GameDataCenter extends BaseModule {
    private TOKEN;
    private COIN;
    private mUserToken;
    private VIBRATE_SWITCH;
    private USER_PRIZE_KEY;
    private mCoin;
    /***********
     * 金币
     */
    initCoin(num: number): void;
    getCoin(): number;
    subCoin(v: number): void;
    addCoin(v: number): void;
    setCoin(v: number): void;
    saveCoin(): void;
    getToken(): string;
    setToken(v: any): void;
    private mCurrentMisTouchCount;
    getCurrentMisTouchCount(): number;
    setCurrentMisTouchCount(num: number): void;
    private mChannel_id;
    getChannelId(): string;
    setChannelId(value: any): void;
    private mChannel_appid;
    getChannelAppId(): string;
    setChannelAppId(value: any): void;
    getVibrateSetting(): boolean;
    setVibrateSetting(on: boolean): void;
    private mPrizeBox;
    getPrizeBox(): any;
    clearPrizeBox(): void;
    lockPrizeBox(prizeId: number, type: number, coinNum?: number): void;
    getUserPrizeBoxById(prizeId: number): any;
    private mPrizeKey;
    getPrizeKey(): number;
    addPrizeKey(keyNum: any): void;
    clearPrizeKey(): void;
}
