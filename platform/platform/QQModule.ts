import PlatformModule from './PlatformModule';
import { BANNER_POSITION } from '../enum/BANNER_POSITION';
import Common from '../utils/Common';
export default class QQModule extends PlatformModule {
    public platformName: string = "qq";
    constructor() {
        super();

        this.initBanner();

    }

    /**
       * 
       * @param callback 点击回调
       * @param position banner的位置，默认底部
       * @param style 自定义样式
       */
    public showBanner(callback?: Function, position: string = BANNER_POSITION.BOTTOM, style?: bannerStyle) {
        console.log('显示banner')
        this.bannerCb = callback;
        this.isBannerShow = true;
        if (!window[this.platformName]) {
            return;
        }
        this.bannerPosition = position;
        this.bannerStyle = style;

        this._resetBanenrStyle({

        });
        if (this.banner) {
            this.banner.show()
                .then(() => {
                    this._resetBanenrStyle({

                    });
                })
        }
    }
    public _bottomCenterBanner(size) {
        console.log('size', size)
        if (Common.isEmpty(size)) {
            console.log('设置的banner尺寸为空,不做调整')
            return;
        }
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        this.bannerWidth = size.width;
        this.bannerHeigth = size.height;



        this.banner.style.left = (windowWidth - size.width) / 2;
        console.log('banner位置或大小被重新设置 ', this.banner.style, 'set top ', top)

    }

    public _resetBanenrStyle(size) {
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let top = 0;
        if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
            top = windowHeight - this.bannerHeigth;
        }
        else if (this.bannerPosition == BANNER_POSITION.CENTER)
            top = (windowHeight - this.bannerHeigth) / 2;
        else if (this.bannerPosition == BANNER_POSITION.TOP)
            top = 0;
        else
            top = this.bannerStyle.top;

        this.banner.style.top = top;
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