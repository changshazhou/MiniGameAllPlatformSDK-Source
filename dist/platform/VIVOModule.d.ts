import PlatformModule from "./PlatformModule";
import moosnowAdRow from "../model/moosnowAdRow";
import bannerStyle from "../model/bannerStyle";
export default class VIVOModule extends PlatformModule {
    platformName: string;
    appSid: string;
    bannerWidth: number;
    bannerHeight: number;
    private interLoadedShow;
    constructor();
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
    getSystemInfoSync(): any;
    private mShowTime;
    private mMinInterval;
    _createBannerAd(): any;
    private getNotchHeight;
    _bottomCenterBanner(size: any): void;
    _onBannerClose(): void;
    _onBannerHide(): void;
    /**
      * 显示平台的banner广告
      * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
      * @param callback 点击回调
      * @param position banner的位置，默认底部
      * @param style 自定义样式
      */
    showBanner(remoteOn?: boolean, callback?: (isOpend: boolean) => void, position?: string, style?: bannerStyle): void;
    _showBanner(): void;
    hideBanner(): void;
    private mVideoTime;
    createRewardAD(show: any): void;
    _onVideoLoad(): void;
    _onVideoClose(isEnd: any): void;
    prepareInter(): void;
    showInter(): void;
    _onInterLoad(): void;
    _onInterOnShow(): void;
    showAutoBanner(): void;
    reportMonitor(name: string, value: string): void;
    _prepareNative(isLoad?: boolean): void;
    _onNativeLoad(res: any): void;
    _onNativeError(err: any): void;
    _destroyNative(): void;
    /**
    * 目前只有OPPO VIVO 平台有此功能
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
     * this.node.on(CocosNodeEvent.TOUCH_END, () => {
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
    hasShortcutInstalled(success: (has: any) => void, fail: (err: any) => void): void;
    installShortcut(success: () => void, message?: string): void;
    exitApplication(): void;
}
