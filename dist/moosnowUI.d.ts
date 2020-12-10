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
}
