import PlatformModule from './PlatformModule';
import { BANNER_POSITION } from '../enum/BANNER_POSITION';
import Common from '../utils/Common';
import bannerStyle from '../model/bannerStyle';


export default class QQModule extends PlatformModule {
    public platformName: string = "qq";
    constructor() {
        super();
        this._regisiterWXCallback();
        this.initBanner();

    }
    public _createBannerAd() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;

        let height = this.bannerHeigth = Math.round(this.bannerWidth / 300 * 72.8071);
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.screenWidth;
        let windowHeight = wxsys.screenHeight;
        let centerPos = (windowWidth - this.bannerWidth) / 2;
        let top = windowHeight - height / 2;
        if (Common.isEmpty(this.bannerId)) {
            console.warn('banner id is null')
            return;
        }
        console.log('create banner by banner id ', this.bannerId)
        let style = {
            top: top,
            left: centerPos,
            width: this.bannerWidth,
            height: height
        }
        console.log('create banner style ', style)
        let banner = window[this.platformName].createBannerAd({
            adUnitId: this.bannerId,
            style: style
        });
        return banner;
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
            let t = this.banner.show();
            if (t)
                t.then(() => {
                    this._resetBanenrStyle({

                    });
                })
        }
    }
    public _bottomCenterBanner(size) {
        // 尺寸调整时会触发回调         
        // 注意：如果在回调里再次调整尺寸，要确保不要触发死循环！！！  
        console.log('Resize后正式宽高:', size.width, size.height);
        // this._resetBanenrStyle(size);
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
        if (this.banner && this.banner.style)
            this.banner.style.top = top;
    }



    /**
     * 盒子广告
     * @param callback 关闭回调
     * @param remoteOn 被后台开关控制
     */
    public showAppBox(callback?: Function, remoteOn: boolean = true) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createAppBox) return;
        this.mOnBoxCallback = callback;
        console.log("showAppBox");
        moosnow.http.getAllConfig(res => {
            if (remoteOn) {
                if (res && res.showAppBox == 1) {
                    if (!this.box) {
                        this.box = window[this.platformName].createAppBox({
                            adUnitId: this.moosnowConfig.boxId
                        })
                        this.box.onClose(this.onBoxClose.bind(this))
                    }
                    this.box.load()
                        .then(() => {
                            this.box.show();
                        });
                }
                else {
                    if (Common.isFunction(this.mOnBoxCallback))
                        this.mOnBoxCallback(-1);
                    console.log('后台不允许显示Box，如有需要请联系运营')
                }
            }
            else {
                if (!this.box) {
                    this.box = window[this.platformName].createAppBox({
                        adUnitId: this.moosnowConfig.boxId
                    })
                    this.box.onClose(this.onBoxClose.bind(this))
                }
                this.box.load()
                    .then(() => {
                        this.box.show();
                    });
            }
        })
    }

    public hideAppBox(callback?: Function) {
        if (this.box) {
            this.box.offClose(this.onBoxClose)
            let promise = this.box.destroy();
            console.log('box destroy ', promise)
            if (promise) {
                promise
                    .then(() => {

                        console.log('destroy successfully ', promise)
                        this.box = null;
                        if (Common.isFunction(callback))
                            callback(true)
                    })
                    .catch(() => {
                        console.log('destroy fail ', promise)
                        this.box = null;
                        if (Common.isFunction(callback))
                            callback(false)
                    })
            }
        }

    }


    private mOnBoxCallback: Function
    private onBoxClose() {
        if (Common.isFunction(this.mOnBoxCallback))
            this.mOnBoxCallback(0);
    }
}