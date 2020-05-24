import PlatformModule from "../platform/PlatformModule";
export default class QQModule extends PlatformModule {
    constructor();
    platformName: string;
    bannerId: string;
    videoId: string;
    _bottomCenterBanner(): void;
    _createBannerAd(): any;
}
