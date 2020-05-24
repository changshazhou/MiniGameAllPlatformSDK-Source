import PlatformModule from "./PlatformModule";
import moosnowAdRow from "../model/moosnowAdRow";
import bannerStyle from "../model/bannerStyle";
export default class OPPOModule extends PlatformModule {
    platformName: string;
    appSid: string;
    baseUrl: string;
    private versionRet;
    bannerWidth: number;
    bannerHeight: number;
    private interLoadedShow;
    constructor();
    /**
    * 检查当前版本的导出广告是否开启
    * @param {string} version
    * @param {*} callback
    * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
    */
    checkVersion(version: string, callback: any): void;
    private initAdService;
    prevNavigate: number;
    /**
     * 跳转到指定App
     * @param row
     * @param success
     * @param fail
     * @param complete
     */
    navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function): void;
    supportVersion(version: string | number): boolean;
    /**
     * 游戏登录
     * @param callback
     * @param fail
     */
    /**
     *
     * @param code
     * @param user_id
     * @param callback
     */
    _onBannerError(err: any): void;
    _prepareBanner(): void;
    _createBannerAd(): any;
    _bottomCenterBanner(size: any): void;
    _resetBanenrStyle(size: any): void;
    _onBannerHide(): void;
    destroyBanner(): void;
    /**
     *
     * @param callback 点击回调
     * @param position banner的位置，默认底部
     * @param style 自定义样式
     */
    showBanner(callback?: Function, position?: string, style?: bannerStyle): void;
    hideBanner(): void;
    createRewardAD(show: any): void;
    _onVideoLoad(): void;
    prepareInter(): void;
    showInter(): void;
    _onInterLoad(): void;
    _onInterOnShow(): void;
    showAutoBanner(): void;
    reportMonitor(name: string, value: string): void;
    _prepareNative(): void;
    _onNativeLoad(res: any): void;
    _onNativeError(err: any): void;
    _destroyNative(): void;
    /**
    * 目前只有OPPO平台有此功能
    * 返回原生广告数据，开发者根据返回的数据来展现
    * 没有广告返回null
    *
    *
    * 例如 cocos
    * let adData=moosnow.platform.getNativeAd();
    * cc.loader.load(adData.imgUrlList[0], (err, texture) => {
    *   adImg.active = true
    *   adImg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
    * })
    *
    * 例如 laya
    * let adData=moosnow.platform.getNativeAd();
    * new Laya.Image().skin=adData.imgUrlList[0];
    *
    * @param callback 回调函数
    */
    showNativeAd(callback: Function): void;
    /**
     * 目前只有OPPO平台有此功能
     * 用户点击了展示原生广告的图片时，使用此方法
     * 例如 cocos
     * this.node.on(cc.Node.EventType.TOUCH_END, () => {
     *     moosnow.platform.clickNative();
     * }, this)
     *
     *
     * 例如 laya
     * (new Laya.Image()).on(Laya.Event.MOUSE_UP, this, () => {
     *     moosnow.platform.clickNative();
     * })
     *
     */
    clickNative(callback?: Function): void;
    private mClickedNativeCallback;
    private mIsClickedNative;
    private onAppShow;
}
