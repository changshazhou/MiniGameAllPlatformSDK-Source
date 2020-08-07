
import FormUtil from "./ui/FormUtil";
import Delay from "./framework/Delay";
import showEndOptions from "./model/showEndOptions";
import showPrizeOptions from "./model/showPrizeOptions";
import showShareOptions from "./model/showShareOptions";
import showTotalOptions from "./model/showTotalOptions";
import showTouchOptions from "./model/showMistouchOptions";
import showCoinOptions from "./model/showCoinOptions";

export default class moosnowUI {

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
        window["moosnow"].form = this.formUtil
        // window["moosnow"].delay = this.delay
    }
    /**
     * form UI 操作
     */
    private mFormUtil: FormUtil = new FormUtil();
    public get formUtil() {
        return this.mFormUtil;
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