import FormUtil from "./ui/FormUtil";
import Delay from "./framework/Delay";
import showEndOptions from "./model/showEndOptions";
import showPrizeOptions from "./model/showPrizeOptions";
import showShareOptions from "./model/showShareOptions";
import showTotalOptions from "./model/showTotalOptions";
import showTouchOptions from "./model/showMistouchOptions";
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
    /**
     * form UI 操作
     */
    private mFormUtil;
    get formUtil(): FormUtil;
    private mDelay;
    get delay(): Delay;
    set delay(value: Delay);
}
