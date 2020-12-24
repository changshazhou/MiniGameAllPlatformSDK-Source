import PlatformModule from './PlatformModule';
import Common from '../utils/Common';
import bannerStyle from '../model/bannerStyle';
import { MSG } from '../config/MSG';
import { BLOCK_HORIZONTAL, BLOCK_VERTICAL } from '../enum/BLOCK_POSITION';
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from '../enum/BANNER_POSITION';


export default class QQModule extends PlatformModule {
    public platformName: string = "qq";
    constructor() {
        super();
        this._regisiterWXCallback();
        this.initBanner();
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

    public _createBannerAd(adIndex: number, loadShow: boolean = true): string {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBannerAd) return;
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
        console.log(" 显示前先关闭 banner ")
        this.hideBanner();
        console.log(" QQModule ~ _createBannerAd ~ style", style, bannerId)
        this.banner[bannerId] = window[this.platformName].createBannerAd({
            adUnitId: bannerId,
            style
        });

        if (this.banner[bannerId]) {
            this.banner[bannerId].onResize(this._onBannerResize);
            this.banner[bannerId].onError(this._onBannerError);
            this.banner[bannerId].onLoad(this._onBannerLoad.bind(this));
        }
        return bannerId;
    }
    public _onBannerLoad() {
        console.log("banner 加载结束 bannerId");
        for (let k in this.banner) {
            if (k != this.currentBannerId) {
                this.banner[k].hide();
                this.banner[k].destroy();
                this.banner[k] = null;
                delete this.banner[k]
            }
        }
        let banner = this.banner[this.currentBannerId];
        if (banner) {
            banner.show();
        }
        else {
            console.log('banner 不存在')
        }
    }
    public _onBannerError(bannerId, err) {
        console.warn('banner___error:', err, ' bannerId ', bannerId);
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
        if (remoteOn)
            moosnow.http.getAllConfig(res => {
                if (res.mistouchNum == 0) {
                    console.log('后台关闭了banner，不执行显示')
                    return;
                }
                else {
                    console.log('后台开启了banner，执行显示')
                    this.currentBannerId = this._createBannerAd(idIndex);
                    this._showBanner();
                }
            })
        else {
            this.currentBannerId = this._createBannerAd(idIndex);
            this._showBanner();
        }

    }

    public _showBanner() {
        let banner = this.banner[this.currentBannerId]
        if (banner) {
            banner.show();
        }
        else {
            console.log('banner 不存在')
        }
    }

    public _onBannerResize(size) {
        // 尺寸调整时会触发回调         
        // 注意：如果在回调里再次调整尺寸，要确保不要触发死循环！！！  
        console.log('Resize后正式宽高:', size);
        // this._resetBanenrStyle(size);
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
        console.log(" hideBanner ~ this.banner", this.banner)
        if (this.banner)
            for (let k in this.banner) {
                this.banner[k].hide();
                this.banner[k].destroy();
                this.banner[k] = null;
                delete this.banner[k]
            }
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
}