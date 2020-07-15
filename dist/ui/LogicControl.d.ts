import AdForm from "./engine/AdForm";
import MistouchForm from "./engine/MistouchForm";
import CocosMistouchFormTT from "./cocos/CocosMistouchFormTT";
import CocosMistouchFormQQ from "./cocos/CocosMistouchFormQQ";
import AdFormQQ from "./engine/AdFormQQ";
import AdViewItem from "./engine/AdViewItem";
import PrizeForm from "./engine/prizeForm";
import PrizeFormTT from "./engine/PrizeFormTT";
import CoinForm from "./engine/CoinForm";
import TotalForm from "./engine/TotalForm";
import ShareFormTT from "./engine/ShareFormTT";
import AdInviteBox from "./engine/AdInviteBox";
/**
 * 页面逻辑控制
 */
export default class LogicControl {
    private mAdViewItem;
    /**
     * 返回一个AdViewItem实例
     */
    newViewItem(): AdViewItem;
    private mAdInviteBox;
    get inviteBox(): AdInviteBox;
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
    private mPrizeForm;
    get prizeForm(): PrizeForm;
    private mPrizeFormTT;
    get prizeFormTT(): PrizeFormTT;
    private mCoinForm;
    /**
    * 金币
    */
    get coinForm(): CoinForm;
    private mTotalForm;
    /**
    * 金币
    */
    get totalForm(): TotalForm;
    private mShareForm;
    /**
     * 分享
     */
    get shareFormTT(): ShareFormTT;
    test(): void;
}
