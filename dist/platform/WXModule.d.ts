import PlatformModule from './PlatformModule';
/**
 * 微信平台
 */
export default class WXModule extends PlatformModule {
    platformName: string;
    constructor();
    /**
     * 游戏登录
     * @param callback
     * @param fail
     */
    login(callback?: Function, fail?: Function): void;
    /**
     *
     * @param code
     * @param user_id
     * @param callback
     */
    private getUserToken;
}
