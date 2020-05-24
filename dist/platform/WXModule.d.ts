import PlatformModule from './PlatformModule';
/**
 * 微信平台
 */
export default class WXModule extends PlatformModule {
    platformName: string;
    baseUrl: string;
    private versionRet;
    constructor();
    /**
    * 检查当前版本的导出广告是否开启
    * @param {string} version
    * @param {*} callback
    * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
    */
    checkVersion(version: string, callback: any): void;
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
