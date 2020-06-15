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

import { BANNER_POSITION } from "./enum/BANNER_POSITION";
import { VIDEO_STATUS } from "./enum/VIDEO_STATUS";
import { SHARE_MSG } from "./enum/SHARE_MSG";
import { VIDEO_MSG } from "./enum/VIDEO_MSG";
import { SHARE_CHANNEL } from "./enum/SHARE_CHANNEL";
import EventModule from "./framework/EventModule";
import EventType from "./utils/EventType";
import VIVOModule from "./platform/VIVOModule";
import { AD_POSITION } from "./enum/AD_POSITION";
import { BaseUIModule } from "./ui/engine/BaseUIModule";
import BaseEntityModule from "./ui/engine/BaseEntityModule";
import { CocosEntityModule } from "./ui/cocos/CocosEntityModule";
import { CocosUIModule } from "./ui/cocos/CocosUIModule";
import LogicControl from "./ui/LogicControl";
import UIForm from "./ui/UIForm";
import Delay from "./framework/Delay";
import ResourceModule from "./framework/ResourceModule";
import AudioModule from "./framework/AudioModule";
import showEndOptions from "./model/showEndOptions";
import showPrizeOptions from "./model/showPrizeOptions";
import showShareOptions from "./model/showShareOptions";
import showTotalOptions from "./model/showTotalOptions";
import showTouchOptions from "./model/showTouchOptions";
import showCoinOptions from "./model/showCoinOptions";

class moosnow {
    public VIDEO_STATUS = VIDEO_STATUS;
    public VIDEO_MSG = VIDEO_MSG;
    public SHARE_MSG = SHARE_MSG;
    public BANNER_POSITION = BANNER_POSITION;
    public SHARE_CHANNEL = SHARE_CHANNEL;
    public APP_PLATFORM = PlatformType;
    public PLATFORM_EVENT = EventType;
    public Common = Common
    public AD_POSITION = AD_POSITION;
    public showOptions = {
        endOptions: showEndOptions,
        prizeOptions: showPrizeOptions,
        shareOptions: showShareOptions,
        totalOptions: showTotalOptions,
        touchOptions: showTouchOptions,
        coinOptions: showCoinOptions
    };
    /**
     * 获取当前的游戏平台
     */
    public getAppPlatform(): PlatformType {
        return Common.platform;
    }
    constructor() {
        (window["moosnow"]) = this;
        this.mData = new GameDataCenter();
        this.mSetting = new SettingModule();
        this.mEvent = new EventModule();
        this.initPlatform();
        this.initHttp();
        this.initAd();
        this.initUI();
        this.initEntity();

    }

    private initUI() {
        this.mUi = new CocosUIModule();
    }

    private initEntity() {
        this.mEntity = new CocosEntityModule();
    }

    private initHttp() {
        if (Common.platform == PlatformType.WX)
            this.mHttp = new HttpModule();
        else if (Common.platform == PlatformType.OPPO_ZS) {
            this.mHttp = new ZSHttpModule();
        }
        else
            this.mHttp = new HttpModule();

    }

    private initPlatform() {
        // console.log('初始化平台', Common.platform, 'oppo', PlatformType.OPPO, 'vivo', PlatformType.VIVO)
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
        else {
            this.mPlatform = new PlatformModule();
        }

        // console.log(' cc.sys.browserType ', cc.sys.browserType, ' cc.sys.platform ', cc.sys.platform)
    }

    private initAd() {
        if (Common.platform == PlatformType.WX || Common.platform == PlatformType.PC || Common.platform == PlatformType.BYTEDANCE)
            this.mAd = new WXAdModule();
        else if (Common.platform == PlatformType.OPPO) {
            this.mAd = new OPPOAdModule();
        }
        else if (Common.platform == PlatformType.OPPO_ZS) {
            this.mAd = new ZSOPPOAdModule();
        }
        else
            this.mAd = new AdModule();
    }
    private mPlatform: PlatformModule;
    public get platform() {
        return this.mPlatform;
    }


    private mAd: AdModule;
    /**
     * 墨雪广告
     */
    public get ad() {
        return this.mAd;
    }

    private mHttp: HttpModule
    public get http() {
        return this.mHttp;
    }


    private mData: GameDataCenter = new GameDataCenter();
    /**
     * 本地内存
     */
    public get data() {
        return this.mData;
    }

    private mResource: ResourceModule = new ResourceModule();
    public get resource() {
        return this.mResource;
    }

    private mSetting: SettingModule = new SettingModule();
    /**
     * 本地持久化缓存
     */
    public get setting() {
        return this.mSetting;
    }
    /**
     * 事件消息
     */
    private mEvent: EventModule;
    public get event() {
        return this.mEvent;
    }
    /**
     * UI控制
     */
    private mUi: BaseUIModule;
    public get ui() {
        return this.mUi;
    }

    /**
     * form UI 操作
     */
    private mForm: UIForm = new UIForm();
    public get form() {
        return this.mForm;
    }

    /**
     * form表单控制
     */
    private mControl: LogicControl = new LogicControl();
    public get control() {
        return this.mControl;
    }



    private mEntity: BaseEntityModule = new BaseEntityModule();
    public get entity() {
        return this.mEntity;
    }

    private mAudio: AudioModule = null;
    public get audio() {
        return this.mAudio;
    }
    public set audio(value: AudioModule) {
        this.mAudio = value;
    }


    private mDelay: Delay = new Delay();
    public get delay() {
        return this.mDelay;
    }

}
new moosnow();