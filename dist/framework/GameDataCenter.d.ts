import BaseModule from "./BaseModule";
export default class GameDataCenter extends BaseModule {
    private TOKEN;
    private COIN;
    private mUserToken;
    private VIBRATE_SWITCH;
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
}
