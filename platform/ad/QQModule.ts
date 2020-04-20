import PlatformModule from "../platform/PlatformModule";

export default class QQModule extends PlatformModule {
    constructor() {
        super();
    }
    public platformName: string = "qq";
    public bannerId: string = "";
    public videoId: string = "";

    public _bottomCenterBanner() {

    }

    public _createBannerAd() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;

        let height = Math.round(this.bannerWidth / 300 * 72.8071);
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.screenWidth;
        let windowHeight = wxsys.screenHeight;
        let centerPos = (windowWidth - this.bannerWidth) / 2;
        let top = windowHeight - height;

        let banner = window[this.platformName].createBannerAd({
            adUnitId: this.bannerId,
            style: {
                top: top,
                lef: centerPos,
                width: this.bannerWidth
            }
        });
        return banner;
    }
}