
import FormUtil from "./ui/FormUtil";
import Delay from "./framework/Delay";
import showEndOptions from "./model/showEndOptions";
import showPrizeOptions from "./model/showPrizeOptions";
import showShareOptions from "./model/showShareOptions";
import showTotalOptions from "./model/showTotalOptions";
import showTouchOptions from "./model/showMistouchOptions";
import showCoinOptions from "./model/showCoinOptions";
import CocosNodeHelper from "./ui/cocos/helper/CocosNodeHelper";

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
        window["moosnow"].form = new FormUtil();
        window["moosnow"].nodeHelper = CocosNodeHelper;
        // window["moosnow"].delay = this.delay
    }
    
}
new moosnowUI();