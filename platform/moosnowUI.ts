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

class moosnowUI {

    public showOptions = {
        endOptions: showEndOptions,
        prizeOptions: showPrizeOptions,
        shareOptions: showShareOptions,
        totalOptions: showTotalOptions,
        touchOptions: showTouchOptions,
        coinOptions: showCoinOptions
    };

    constructor() {
        if (!window["moosnow"]) {
            console.log('没有引入主SDK')
            return;
        }
        this.initUI();
        this.initEntity();

        window["moosnow"].ui = this.ui;
        window["moosnow"].entity = this.entity
        window["moosnow"].form = this.form
        window["moosnow"].control = this.control
        window["moosnow"].delay = this.delay


    }

    private initUI() {
        this.mUi = new CocosUIModule();
    }

    private initEntity() {
        this.mEntity = new CocosEntityModule();
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
    public set form(value) {
        this.mForm = value;
    }

    /**
     * form表单控制
     */
    private mControl: LogicControl = new LogicControl();
    public get control() {
        return this.mControl;
    }
    public set control(value) {
        this.mControl = value;
    }



    private mEntity: BaseEntityModule = new BaseEntityModule();
    public get entity() {
        return this.mEntity;
    }
    public set entity(value) {
        this.mEntity = value;
    }

    private mDelay: Delay = new Delay();
    public get delay() {
        return this.mDelay;
    }
    public set delay(value) {
        this.mDelay = value;
    }
}
new moosnowUI();