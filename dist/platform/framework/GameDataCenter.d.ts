import BaseModule from "./BaseModule";
export default class GameDataCenter extends BaseModule {
    private TOKEN;
    private mUserToken;
    getToken(): string;
    setToken(v: any): void;
    private mChannel_id;
    getChannelId(): string;
    setChannelId(value: any): void;
    private mChannel_appid;
    getChannelAppId(): string;
    setChannelAppId(value: any): void;
}
