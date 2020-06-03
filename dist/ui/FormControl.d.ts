import AdForm from "./engine/AdForm";
import MistouchForm from "./engine/MistouchForm";
import CocosMistouchFormTT from "./cocos/CocosMistouchFormTT";
import CocosMistouchFormQQ from "./cocos/CocosMistouchFormQQ";
/**
 * 广告结果
 */
export default class FormControl {
    private mAdForm;
    /**
     * 广告form
     */
    get adForm(): AdForm;
    private mMistouchForm;
    get mistouchForm(): MistouchForm;
    private mMistouchFormTT;
    get mistouchFormTT(): CocosMistouchFormTT;
    private mMistouchFormQQ;
    get mistouchFormQQ(): CocosMistouchFormQQ;
}
