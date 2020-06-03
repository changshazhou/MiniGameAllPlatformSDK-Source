import AdForm from "./engine/AdForm";
import MistouchForm from "./engine/MistouchForm";
import CocosMistouchFormTT from "./cocos/CocosMistouchFormTT";
import CocosMistouchFormQQ from "./cocos/CocosMistouchFormQQ";
import AdFormQQ from "./engine/AdFormQQ";
/**
 * 广告结果
 */
export default class FormControl {
    private mAdForm;
    get adForm(): AdForm;
    private mAdFormQQ;
    get adFormQQ(): AdFormQQ;
    private mMistouchForm;
    get mistouchForm(): MistouchForm;
    private mMistouchFormTT;
    get mistouchFormTT(): CocosMistouchFormTT;
    private mMistouchFormQQ;
    get mistouchFormQQ(): CocosMistouchFormQQ;
}
