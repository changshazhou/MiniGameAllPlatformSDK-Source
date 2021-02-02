import PlatformModule from './PlatformModule';
import bannerStyle from '../model/bannerStyle';
import { BLOCK_HORIZONTAL, BLOCK_VERTICAL } from '../enum/BLOCK_POSITION';
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from '../enum/BANNER_POSITION';
export default class QQModule extends PlatformModule {
    platformName: string;
    constructor();
    mBannerWidth: number;
    get bannerWidth(): number;
    set bannerWidth(value: number);
    bannerHeigth: number;
    _createBannerAd(adIndex: number, loadShow?: boolean): string;
    _onBannerLoad(): void;
    _onBannerError(bannerId: any, err: any): void;
    /**
      * 显示平台的banner广告
      * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
      * @param callback 点击回调
      * @param position banner的位置，默认底部
      * @param style 自定义样式
      */
    showBanner(remoteOn?: boolean, callback?: (isOpend: boolean) => void, horizontal?: BANNER_HORIZONTAL, vertical?: BANNER_VERTICAL, idIndex?: number, style?: bannerStyle): void;
    _showBanner(): void;
    _onBannerResize(size: any): void;
    /**
     * 盒子广告
     * @param callback 关闭回调
     * @param remoteOn 被后台开关控制
     */
    showAppBox(callback?: Function, remoteOn?: boolean): void;
    /**
     * 隐藏banner
     */
    hideBanner(): void;
    hideAppBox(callback?: Function): void;
    private mOnBoxCallback;
    private onBoxClose;
    showBlock(horizontal?: BLOCK_HORIZONTAL, vertical?: BLOCK_VERTICAL, orientation?: number, size?: number): void;
    hideBlock(): void;
    _onBlockLoad(res: any): void;
    _onBlockError(res: any): void;
    private _getBlockPosition;
    _onBlockResize(size: any): void;
    initInter(): void;
    prepareInter(): void;
    showInter(): void;
    _onInterError(res: any): void;
    _onInterLoad(): void;
    _onInterClose(): void;
}
