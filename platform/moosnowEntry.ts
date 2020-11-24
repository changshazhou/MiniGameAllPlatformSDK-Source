import PlatformModule from "./platform/PlatformModule";
import WXModule from "./platform/WXModule";
import AdModule from "./ad/AdModule";
import { HttpModule } from "./http/HttpModule";
import OPPOModule from "./platform/OPPOModule";
import GameDataCenter from "./framework/GameDataCenter";
import SettingModule from "./framework/SettingModule";
import OPPOAdModule from "./ad/OPPOAdModule";
import Common from "./utils/Common";
import { PlatformType } from "./enum/PlatformType";
import WXAdModule from "./ad/WXAdModule";
import TTModule from "./platform/TTModule";
import QQModule from "./platform/QQModule";
import ZSOPPOAdModule from "./ad/ZSOPPOAdModule";
import ZSOPPOModule from "./platform/ZSOPPOModule";
import BDModule from "./platform/BDModule";
import { ZSHttpModule } from "./http/ZSHttpModule";

import { VIDEO_STATUS } from "./enum/VIDEO_STATUS";
import { SHARE_MSG } from "./enum/SHARE_MSG";
import { VIDEO_MSG } from "./enum/VIDEO_MSG";
import { SHARE_CHANNEL } from "./enum/SHARE_CHANNEL";
import EventModule from "./framework/EventModule";
import EventType from "./utils/EventType";
import VIVOModule from "./platform/VIVOModule";
import { AD_POSITION } from "./enum/AD_POSITION";
import ResourceModule from "./framework/ResourceModule";
import AudioModule from "./framework/AudioModule";
import UCModule from "./platform/UCModule";
import { BLOCK_HORIZONTAL, BLOCK_VERTICAL } from "./enum/BLOCK_POSITION";
import { BANNER_HORIZONTAL, BANNER_VERTICAL } from "./enum/BANNER_POSITION";
import moosnowAppConfig from "./model/moosnowAppConfig";
import FormUtil from "./ui/FormUtil";
import CocosNodeHelper from "./ui/cocos/helper/CocosNodeHelper";

export default class moosnow {
    public static VIDEO_STATUS = VIDEO_STATUS;
    public static VIDEO_MSG = VIDEO_MSG;
    public static SHARE_MSG = SHARE_MSG;
    public static BANNER_HORIZONTAL = BANNER_HORIZONTAL;
    public static BANNER_VERTICAL = BANNER_VERTICAL;
    public static BLOCK_HORIZONTAL = BLOCK_HORIZONTAL;
    public static BLOCK_VERTICAL = BLOCK_VERTICAL;
    public static SHARE_CHANNEL = SHARE_CHANNEL;
    public static APP_PLATFORM = PlatformType;
    public static PLATFORM_EVENT = EventType;
    public static Common = Common
    public static AD_POSITION = AD_POSITION;
    /**
    * 获取当前的游戏平台
    */
    public static getAppPlatform(): PlatformType {
        return Common.platform;
    }
    public static appConfig(): moosnowAppConfig {
        return Common.config;
    }
    constructor() {

    }


    private static mPlatform: PlatformModule
    public static get platform(): PlatformModule {
        if (!this.mPlatform) {
            if (Common.platform == PlatformType.WX)
                this.mPlatform = new WXModule();
            else if (Common.platform == PlatformType.OPPO)
                this.mPlatform = new OPPOModule();
            else if (Common.platform == PlatformType.VIVO)
                this.mPlatform = new VIVOModule();
            else if (Common.platform == PlatformType.OPPO_ZS) {
                this.mPlatform = new ZSOPPOModule();
            }
            else if (Common.platform == PlatformType.BYTEDANCE)
                this.mPlatform = new TTModule();
            else if (Common.platform == PlatformType.QQ)
                this.mPlatform = new QQModule();
            else if (Common.platform == PlatformType.BAIDU)
                this.mPlatform = new BDModule();
            else if (Common.platform == PlatformType.UC)
                this.mPlatform = new UCModule();
            else {
                this.mPlatform = new PlatformModule();
            }
        }
        return this.mPlatform;
    }
    /**
     * 墨雪广告
     */
    private static mAd: AdModule
    public static get ad(): AdModule {
        if (!moosnow.mAd) {
            if (Common.platform == PlatformType.WX || Common.platform == PlatformType.PC || Common.platform == PlatformType.BYTEDANCE)
                moosnow.mAd = new WXAdModule();
            else if (Common.platform == PlatformType.OPPO) {
                moosnow.mAd = new OPPOAdModule();
            }
            else if (Common.platform == PlatformType.OPPO_ZS) {
                moosnow.mAd = new ZSOPPOAdModule();
            }
            else
                moosnow.mAd = new AdModule();
        }
        return moosnow.mAd;
    }
    private static mHttp: HttpModule
    public static get http(): HttpModule {
        if (!this.mHttp) {
            if (Common.platform == PlatformType.WX)
                this.mHttp = new HttpModule();
            else if (Common.platform == PlatformType.OPPO_ZS) {
                this.mHttp = new ZSHttpModule();
            }
            else
                this.mHttp = new HttpModule();
        }
        return this.mHttp
    }
    /**
     * 本地内存
     */
    public static data = new GameDataCenter();

    public static resource = new ResourceModule();
    /**
     * 本地持久化缓存
     */
    public static setting = new SettingModule();
    /**
     * 事件消息
     */
    public static event = new EventModule();
    public static audio: AudioModule = new AudioModule();
    public static form: FormUtil = new FormUtil();
    public static nodeHelper = CocosNodeHelper;


}
window["moosnow"] = moosnow;


