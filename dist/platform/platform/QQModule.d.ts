import PlatformModule from './PlatformModule';
export default class QQModule extends PlatformModule {
    platformName: string;
    constructor();
    _createBannerAd(): any;
    /**
       *
       * @param callback 点击回调
       * @param position banner的位置，默认底部
       * @param style 自定义样式
       */
    showBanner(callback?: Function, position?: string, style?: bannerStyle): void;
    _bottomCenterBanner(size: any): void;
    _resetBanenrStyle(size: any): void;
    /**
     * 盒子广告
     * @param callback 关闭回调
     * @param remoteOn 被后台开关控制
     */
    showAppBox(callback?: Function, remoteOn?: boolean): void;
    hideAppBox(callback?: Function): void;
    private mOnBoxCallback;
    private onBoxClose;
}
