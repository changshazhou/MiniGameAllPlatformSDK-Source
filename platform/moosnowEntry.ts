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
        (window["moosnow"]) = this;
        moosnow.data = new GameDataCenter();
        moosnow.setting = new SettingModule();

        this.initPlatform();
        this.initHttp();
        this.initAd();
        moosnow.audio = new AudioModule();

    }

    private initHttp() {
        if (Common.platform == PlatformType.WX)
            moosnow.http = new HttpModule();
        else if (Common.platform == PlatformType.OPPO_ZS) {
            moosnow.http = new ZSHttpModule();
        }
        else
            moosnow.http = new HttpModule();

    }

    private initPlatform() {
        // console.log('初始化平台', Common.platform, 'oppo', PlatformType.OPPO, 'vivo', PlatformType.VIVO)
        if (Common.platform == PlatformType.WX)
            moosnow.platform = new WXModule();
        else if (Common.platform == PlatformType.OPPO)
            moosnow.platform = new OPPOModule();
        else if (Common.platform == PlatformType.VIVO)
            moosnow.platform = new VIVOModule();
        else if (Common.platform == PlatformType.OPPO_ZS) {
            moosnow.platform = new ZSOPPOModule();
        }
        else if (Common.platform == PlatformType.BYTEDANCE)
            moosnow.platform = new TTModule();
        else if (Common.platform == PlatformType.QQ)
            moosnow.platform = new QQModule();
        else if (Common.platform == PlatformType.BAIDU)
            moosnow.platform = new BDModule();
        else if (Common.platform == PlatformType.UC)
            moosnow.platform = new UCModule();
        else {
            moosnow.platform = new PlatformModule();
        }

        // console.log(' cc.sys.browserType ', cc.sys.browserType, ' cc.sys.platform ', cc.sys.platform)
    }

    private initAd() {
        if (Common.platform == PlatformType.WX || Common.platform == PlatformType.PC || Common.platform == PlatformType.BYTEDANCE)
            moosnow.ad = new WXAdModule();
        else if (Common.platform == PlatformType.OPPO) {
            moosnow.ad = new OPPOAdModule();
        }
        else if (Common.platform == PlatformType.OPPO_ZS) {
            moosnow.ad = new ZSOPPOAdModule();
        }
        else
            moosnow.ad = new AdModule();
    }
    public static platform: PlatformModule
    /**
     * 墨雪广告
     */
    public static ad: AdModule
    public static http: HttpModule;
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
    public static audio: AudioModule
    public static form: FormUtil = new FormUtil();
    public static nodeHelper = CocosNodeHelper;


}

new moosnow();


