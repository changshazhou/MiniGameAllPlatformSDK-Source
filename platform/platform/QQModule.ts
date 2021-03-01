import PlatformModule from './PlatformModule';
import Common from '../utils/Common';
import bannerStyle from '../model/bannerStyle';
import { MSG } from '../config/MSG';
import { BLOCK_HORIZONTAL, BLOCK_VERTICAL } from '../enum/BLOCK_POSITION';
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from '../enum/BANNER_POSITION';



enum BANNER_STATUS {
    NONE = 0,
    CREATE = 1,
    LOADED = 2,
    WAIT_SHOW = 4,
    SHOW = 8,
    WAIT_HIDE = 16,
    HIDE = 32,
    ERROR = 1024
}

export default class QQModule extends PlatformModule {
    public platformName: string = "qq";
    constructor() {
        super();
        this._regisiterWXCallback();
        this.schedule(this.daemonTask, 0.2)
    }

    private daemonTask() {
        for (let i = 0; i < this.banner.length; i++) {
            if (this.hasStatus(this.banner[i], BANNER_STATUS.WAIT_HIDE)) {
                this.banner[i].hide();
                this.banner[i].destroy();
                this.banner[i] = null;
                this.banner.splice(i, 1);
                i--;
            }
            else if (this.hasStatus(this.banner[i], BANNER_STATUS.ERROR)) {
                this.banner[i] = null;
                this.banner.splice(i, 1);
                i--;
            }
            else if (
                this.hasStatus(this.banner[i], BANNER_STATUS.WAIT_SHOW)
                && this.hasStatus(this.banner[i], BANNER_STATUS.LOADED)
                && !this.hasStatus(this.banner[i], BANNER_STATUS.SHOW)
            ) {
                console.log('执行显示 banner 1')
                if (this.banner[i].show) {
                    this.addStatus(this.banner[i], BANNER_STATUS.SHOW)
                    this.banner[i].show()
                        .then(() => {
                            let bannerStyle = this._getBannerPosition();
                            this.banner[i].style.top = bannerStyle.top;
                            this.banner[i].style.left = bannerStyle.left;
                        })
                }
                else {
                    this.banner.splice(i, 1);
                    i--;
                }
            }
        }
    }

    public preloadBanner(idIndex: number = -1): number {
        return -1;
    }

    private clearStatus(banner) {
        banner.status = BANNER_STATUS.NONE;
        return banner;
    }

    private addStatus(banner, ad) {
        banner.status |= ad;
        return banner;
    }
    private removeStatus(banner, ad) {
        if (this.hasStatus(banner, ad))
            banner.status ^= ad;
        return banner;
    }
    private hasStatus(banner, ad) {
        return (banner.status & ad) == ad;
    }

    public mBannerWidth = 320;
    public get bannerWidth(): number {
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        //横屏模式
        if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth)) {
            if (windowWidth < 320) {
                this.mBannerWidth = windowWidth;
            }
            else {
                this.mBannerWidth = 320
            }
        }
        else {
            //竖屏
            this.mBannerWidth = windowWidth;
        }
        return this.mBannerWidth;
    };
    public set bannerWidth(value) {
        this.mBannerWidth = value
    }
    public bannerHeigth = Math.round(this.bannerWidth / 300 * 72.8071);
    public banner: Array<any> = [];
    public bannerIndex: number = 0;
    public _createBannerAd(adIndex: number, loadShow: boolean = true): string {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;

        this.daemonTask();
        let hasShow = false;
        for (let i = 0; i < this.banner.length; i++) {
            if (this.hasStatus(this.banner[i], BANNER_STATUS.SHOW) && !this.hasStatus(this.banner[i], BANNER_STATUS.WAIT_HIDE)) {
                let bannerStyle = this._getBannerPosition();
                this.banner[i].style.top = bannerStyle.top;
                this.banner[i].style.left = bannerStyle.left;
                hasShow = true;
                break;
            }
        }
        if (hasShow) {
            console.log('当前有banner显示  取消创建')
            return;
        }


        let bannerId = this.getBannerId(adIndex);
        if (Common.isEmpty(bannerId)) {
            console.warn(MSG.BANNER_KEY_IS_NULL)
            return;
        }
        let height = this.bannerHeigth = Math.round(320 / 300 * 72.8071);
        let bannerStyle = this._getBannerPosition();
        let style = {
            top: bannerStyle.top,
            left: bannerStyle.left,
            width: 320,
            height: height
        }
        console.log(" QQModule ~ _createBannerAd ~ style", style, bannerId)
        let banner = window[this.platformName].createBannerAd({
            adUnitId: bannerId,
            style
        });
        this.clearStatus(banner);
        this.addStatus(banner, BANNER_STATUS.CREATE);
        this.addStatus(banner, BANNER_STATUS.WAIT_SHOW);

        banner.bannerShowCount = 0;
        banner.bannerShowTime = Date.now();
        banner.bannerIndex = this.bannerIndex;
        if (banner) {
            banner.onResize(this._onBannerResize.bind(this, banner.bannerIndex));
            banner.onError(this._onBannerError.bind(this, banner.bannerIndex));
            banner.onLoad(this._onBannerLoad.bind(this, banner.bannerIndex));
        }
        this.bannerIndex++;
        this.banner.push(banner);
    }
    public _onBannerLoad(bannerIndex) {
        console.log("QQModule ~ _onBannerLoad ~ this.banner", this.banner)
        for (let i = 0; i < this.banner.length; i++) {
            if (this.banner[i].bannerIndex == bannerIndex) {
                this.banner[i] = this.addStatus(this.banner[i], BANNER_STATUS.LOADED)
            }
        }
        this.daemonTask();
    }
    public _onBannerError(bannerIndex, err) {
        console.warn('banner___error:', err, ' bannerIndex ', bannerIndex);
        for (let i = 0; i < this.banner.length; i++) {
            if (this.banner[i].bannerIndex == bannerIndex) {
                this.banner[i] = this.addStatus(this.banner[i], BANNER_STATUS.ERROR)
            }
        }
        this.daemonTask();
    }
    /**
      * 显示平台的banner广告
      * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
      * @param callback 点击回调
      * @param position banner的位置，默认底部
      * @param style 自定义样式
      */
    public showBanner(remoteOn: boolean = true, callback?: (isOpend: boolean) => void, horizontal: BANNER_HORIZONTAL = BANNER_HORIZONTAL.CENTER, vertical: BANNER_VERTICAL = BANNER_VERTICAL.BOTTOM, idIndex: number = -1, style?: bannerStyle) {
        console.log(MSG.BANNER_SHOW)
        this.bannerCb = callback;
        this.isBannerShow = true;
        if (!window[this.platformName]) {
            return;
        }
        this.bannerHorizontal = horizontal;
        this.bannerVertical = vertical;
        this.bannerStyle = style;
        this.daemonTask();
        if (remoteOn)
            moosnow.http.getAllConfig(res => {
                if (res.mistouchNum == 0) {
                    console.log('后台关闭了banner，不执行显示')
                    return;
                }
                else {
                    console.log('后台开启了banner，执行显示')
                    this._createBannerAd(idIndex);
                    this._showBanner();
                }
            })
        else {
            this._createBannerAd(idIndex);
            this._showBanner();
        }

    }

    public _showBanner() {
        for (let i = 0; i < this.banner.length; i++) {
            if (!this.hasStatus(this.banner[i], BANNER_STATUS.HIDE)
                && !this.hasStatus(this.banner[i], BANNER_STATUS.WAIT_HIDE)
            ) {
                this.banner[i] = this.addStatus(this.banner[i], BANNER_STATUS.WAIT_SHOW)
            }
        }
    }

    public _onBannerResize(bannerIndex, size) {
        // 尺寸调整时会触发回调         
        // 注意：如果在回调里再次调整尺寸，要确保不要触发死循环！！！  
        console.log('Resize后正式宽高:', size);
        let bannerStyle = this._getBannerPosition();
        for (let i = 0; i < this.banner.length; i++) {
            if (this.banner[i].bannerIndex == bannerIndex) {
                this.banner[i].style.top = bannerStyle.top;
                this.banner[i].style.left = bannerStyle.left;
                this.banner[i].style.width = size.width;
                this.banner[i].style.height = size.height
            }
        }
    }



    /**
     * 盒子广告
     * @param callback 关闭回调
     * @param remoteOn 被后台开关控制
     */
    public showAppBox(callback?: Function, remoteOn: boolean = true) {
        if (!window[this.platformName]) {
            if (callback)
                callback();
            return
        };
        if (!window[this.platformName].createAppBox) {
            if (callback)
                callback();
            return
        };;
        this.mOnBoxCallback = callback;
        console.log("showAppBox");
        moosnow.http.getAllConfig(res => {
            if (remoteOn) {
                if (res && res.showAppBox == 1) {
                    if (!this.box) {
                        this.box = window[this.platformName].createAppBox({
                            adUnitId: this.boxId
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
                        adUnitId: this.boxId
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
    /**
     * 隐藏banner
     */
    public hideBanner() {
        console.log(" QQModule ~ hideBanner ~ this.banner 1", this.banner)
        for (let i = 0; i < this.banner.length; i++) {
            this.addStatus(this.banner[i], BANNER_STATUS.WAIT_HIDE)
        }
        this.daemonTask();
        console.log(" QQModule ~ hideBanner ~ this.banner 2", this.banner)
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


    public showBlock(horizontal: BLOCK_HORIZONTAL = BLOCK_HORIZONTAL.CENTER, vertical: BLOCK_VERTICAL = BLOCK_VERTICAL.TOP, orientation: number = 1, size: number = 5) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBlockAd) return;
        if (this.block) {
            this.block.destroy();
        }
        this.blockHorizontal = horizontal;
        this.blockVertical = vertical;
        let style = this._getBlockPosition()
        console.log("QQModule -> showBlock -> style", style)
        this.block = window[this.platformName].createBlockAd({
            adUnitId: this.getBlockId(),
            orientation: orientation == 1 ? "landscape" : "vertical",
            size,
            style: {
                left: style.left,
                top: style.top,
            }
        })
        console.log("QQModule -> showBlock ->  this.block", this.block)
        this.block.onLoad(this._onBlockLoad.bind(this))
        this.block.onError(this._onBlockError.bind(this))
        this.block.onResize(this._onBlockResize.bind(this))
    }

    public hideBlock() {
        if (this.block)
            this.block.hide();
    }



    public _onBlockLoad(res) {
        console.log("QQModule -> _onBlockLoad -> res", res)
        this.block.show()
            .then((showResult) => {
                console.log("QQModule -> _onBlockLoad -> showResult", showResult)
            })

    }
    public _onBlockError(res) {
        console.log("QQModule -> _onBlockError -> res", res)
    }

    private _getBlockPosition() {

        let horizontal: BLOCK_HORIZONTAL = this.blockHorizontal;
        let vertical: BLOCK_VERTICAL = this.blockVertical;

        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let top = 0;
        let left = 0;
        if (vertical == BLOCK_VERTICAL.TOP) {
            top = 16;
        }
        else if (vertical == BLOCK_VERTICAL.CENTER) {
            top = (windowHeight - this.blockHeigth) / 2;
        }
        else if (vertical == BLOCK_VERTICAL.BOTTOM) {
            top = windowHeight - this.blockHeigth - 16;
        }

        if (horizontal == BLOCK_HORIZONTAL.LEFT) {
            left = 16;
        }
        else if (horizontal == BLOCK_HORIZONTAL.RIGHT) {
            left = windowWidth - this.blockWidth - 16;
            if (vertical == BLOCK_VERTICAL.TOP) {
                left = windowWidth - this.blockWidth - 150;
            }
        }
        else if (horizontal == BLOCK_HORIZONTAL.CENTER) {
            left = (windowWidth - this.blockWidth) / 2;
        }

        console.log("QQModule -> _getBlockPosition -> left", left, 'top', top)
        // return {
        //     left: 16,
        //     top: 16,
        // }
        return {
            left,
            top,
        }
    }
    public _onBlockResize(size) {
        let style = this._getBlockPosition()
        console.log("QQModule -> _onBlockResize -> style", style)
        this.block.style.top = style.top;
        this.block.style.left = style.left;
        console.log('重置block位置', style)
    }

    //--------------插屏广告---------------
    public initInter() {

    }
    public prepareInter() {

    }
    public showInter() {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createInterstitialAd) return;
        if (Common.isEmpty(this.interId)) {
            console.warn(MSG.INTER_KEY_IS_NULL);
            return;
        }
        if (!this.inter) {
            this.inter = window[this.platformName].createInterstitialAd({
                adUnitId: this.interId
            });
            console.log('创建插屏')
            this.inter.onLoad(this._onInterLoad);
            this.inter.onClose(this._onInterClose);
            this.inter.onError(this._onInterError)
        }

        let p = this.inter.load();
        if (p) {
            p.then((res) => {
                this.inter.show();
                // console.error('load ok ', res)
            }).catch((err) => {
                console.error('load error ', err)
            })

        }
    }
    public _onInterError(res) {
        console.log('插屏加载错误', res)
    }
    public _onInterLoad() {

        console.log('插屏加载完成')
    }
    public _onInterClose() {
        // this.inter.load();
    }
}