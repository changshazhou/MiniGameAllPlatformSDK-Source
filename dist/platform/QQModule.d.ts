import PlatformModule from './PlatformModule';
import bannerStyle from '../model/bannerStyle';
export default class QQModule extends PlatformModule {
    platformName: string;
    constructor();
    _createBannerAd(): any;
    /**
      * 显示平台的banner广告
      * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
      * @param callback 点击回调
      * @param position banner的位置，默认底部
      * @param style 自定义样式
      */
    showBanner(remoteOn?: boolean, callback?: (isOpend: boolean) => void, position?: string, style?: bannerStyle): void;
    _showBanner(): void;
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
