import { BaseUIModule } from "./ui/engine/BaseUIModule";
import BaseEntityModule from "./ui/engine/BaseEntityModule";
import LogicControl from "./ui/LogicControl";
import UIForm from "./ui/UIForm";
import Delay from "./framework/Delay";
import showEndOptions from "./model/showEndOptions";
import showPrizeOptions from "./model/showPrizeOptions";
import showShareOptions from "./model/showShareOptions";
import showTotalOptions from "./model/showTotalOptions";
import showTouchOptions from "./model/showTouchOptions";
import showCoinOptions from "./model/showCoinOptions";
export default class moosnowUI {
    showOptions: {
        endOptions: typeof showEndOptions;
        prizeOptions: typeof showPrizeOptions;
        shareOptions: typeof showShareOptions;
        totalOptions: typeof showTotalOptions;
        touchOptions: typeof showTouchOptions;
        coinOptions: typeof showCoinOptions;
    };
    constructor();
    private initUI;
    private initEntity;
    /**
     * UI控制
     */
    private mUi;
    get ui(): BaseUIModule;
    /**
     * form UI 操作
     */
    private mForm;
    get form(): UIForm;
    set form(value: UIForm);
    /**
     * form表单控制
     */
    private mControl;
    get control(): LogicControl;
    set control(value: LogicControl);
    private mEntity;
    get entity(): BaseEntityModule;
    set entity(value: BaseEntityModule);
    private mDelay;
    get delay(): Delay;
    set delay(value: Delay);
}
