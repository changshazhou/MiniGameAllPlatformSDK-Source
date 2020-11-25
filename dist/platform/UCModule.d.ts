import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "../enum/BANNER_POSITION";
import bannerStyle from "../model/bannerStyle";
import PlatformModule from "./PlatformModule";
export default class UCModule extends PlatformModule {
    platformName: string;
    constructor();
    private mGravity;
    _prepareBanner(): void;
    _createBannerAd(): any;
    /**
     * 显示平台的banner广告
     * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
     * @param callback 点击回调
     * @param position banner的位置，默认底部
     * @param style 自定义样式
     */
    showBanner(remoteOn?: boolean, callback?: (isOpend: boolean) => void, horizontal?: BANNER_HORIZONTAL, vertical?: BANNER_VERTICAL, adIndex?: number, style?: bannerStyle): void;
    _showBanner(): void;
    /**
    * 隐藏banner
    */
    hideBanner(): void;
    createRewardAD(show: any): void;
}
