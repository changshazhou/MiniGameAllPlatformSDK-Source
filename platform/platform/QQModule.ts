import PlatformModule from './PlatformModule';
import { BANNER_POSITION } from '../enum/BANNER_POSITION';
import Common from '../utils/Common';
import bannerStyle from '../model/bannerStyle';
import { MSG } from '../config/MSG';
import { BLOCK_POSITION } from '../enum/BLOCK_POSITION';


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
            console.warn(MSG.BANNER_KEY_IS_NULL)
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
      * 显示平台的banner广告
      * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
      * @param callback 点击回调
      * @param position banner的位置，默认底部
      * @param style 自定义样式
      */
    public showBanner(remoteOn: boolean = true, callback?: (isOpend: boolean) => void, position: string = BANNER_POSITION.BOTTOM, style?: bannerStyle) {
        console.log(MSG.BANNER_SHOW)
        this.bannerCb = callback;
        this.isBannerShow = true;
        if (!window[this.platformName]) {
            return;
        }
        this.bannerPosition = position;
        this.bannerStyle = style;

        if (remoteOn)
            moosnow.http.getAllConfig(res => {
                if (res.mistouchNum == 0) {
                    console.log('后台关闭了banner，不执行显示')
                    return;
                }
                else {
                    console.log('后台开启了banner，执行显示')
                    this._showBanner();
                }
            })
        else
            this._showBanner();

    }

    public _showBanner() {
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


    public showBlock(position: BLOCK_POSITION = BLOCK_POSITION.NONE, orientation: number = 1, size: number = 5) {
        if (!window[this.platformName]) return;
        if (!window[this.platformName].createBlockAd) return;
        if (this.block) {
            this.block.destroy();
        }
        this.block = window[this.platformName].createBlockAd({
            adUnitId: this.blockId,
            orientation: orientation == 1 ? "landscape" : "vertical",
            size,
            style: {
                left: 16,
                top: 16
            }
        })
        this.block.onLoad(this._onBlockLoad.bind(this))
        this.block.onError(this._onBlockError.bind(this))
        this.block.onResize(this._onBlockResize.bind(this))
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

    private _hasPosition(position) {
        return (this.blockPosition & position) == position;
    }
    public _onBlockResize(size) {
        let wxsys = this.getSystemInfoSync();
        let windowWidth = wxsys.windowWidth;
        let windowHeight = wxsys.windowHeight;
        let top = 0;
        let left = 0;
        if (this._hasPosition(BLOCK_POSITION.TOP)) {
            top = 16;
        }
        else if (this._hasPosition(BLOCK_POSITION.CENTER)) {
            top = (windowHeight - this.blockHeigth) / 2;
        }
        else if (this._hasPosition(BLOCK_POSITION.BOTTOM)) {
            top = windowHeight - this.blockHeigth - 16;
        }

        if (this._hasPosition(BLOCK_POSITION.LEFT)) {
            left = 16;
        }
        else if (this._hasPosition(BLOCK_POSITION.RIGHT)) {
            top = windowWidth - this.blockWidth - 16;
        }
        this.block.style.top = top;
        this.block.style.left = left;
        console.log(MSG.BANNER_RESIZE, this.block.style, 'set top ', top)
    }
}