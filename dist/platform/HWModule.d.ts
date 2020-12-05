import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "../enum/BANNER_POSITION";
import bannerStyle from "../model/bannerStyle";
import PlatformModule from "./PlatformModule";
export default class HWModule extends PlatformModule {
    platformName: string;
    showBanner(remoteOn?: boolean, callback?: (isOpend: boolean) => void, horizontal?: BANNER_HORIZONTAL, vertical?: BANNER_VERTICAL, idIndex?: number, style?: bannerStyle): void;
    createRewardAD(show: boolean, idIndex?: number): void;
    _onVideoError(e: any): void;
    showNativeAd(callback: () => void): void;
    _prepareNative(isLoad?: boolean): void;
    _onNativeLoad(res: any): void;
    _onNativeError(err: any): void;
    private mClickedNativeCallback;
    private mIsClickedNative;
    clickNative(callback?: Function): void;
}
