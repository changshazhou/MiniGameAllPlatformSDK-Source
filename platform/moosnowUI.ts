
import { BaseUIModule } from "./ui/engine/BaseUIModule";
import BaseEntityModule from "./ui/engine/BaseEntityModule";
import { CocosEntityModule } from "./ui/cocos/CocosEntityModule";
import { CocosUIModule } from "./ui/cocos/CocosUIModule";
import LogicControl from "./ui/LogicControl";
import UIForm from "./ui/UIForm";
import Delay from "./framework/Delay";
import showEndOptions from "./model/showEndOptions";
import showPrizeOptions from "./model/showPrizeOptions";
import showShareOptions from "./model/showShareOptions";
import showTotalOptions from "./model/showTotalOptions";
import showTouchOptions from "./model/showTouchOptions";
import showCoinOptions from "./model/showCoinOptions";
import UIFormSetting from "./config/UIFormSetting";

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
        window["moosnow"].formSetting = UIFormSetting

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