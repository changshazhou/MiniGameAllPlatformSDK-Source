import AdForm from "./engine/AdForm";
import MistouchForm from "./engine/MistouchForm";
import CocosMistouchFormTT from "./cocos/CocosMistouchFormTT";
import CocosMistouchFormQQ from "./cocos/CocosMistouchFormQQ";
import AdFormQQ from "./engine/AdFormQQ";
import AdViewItem from "./engine/AdViewItem";
/**
 * 页面逻辑控制
 */
export default class LogicControl {
    private mAdViewItem;
    /**
     * 返回一个AdViewItem实例
     */
    newViewItem(): AdViewItem;
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
