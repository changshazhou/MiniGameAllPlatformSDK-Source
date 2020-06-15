import CocosAdFrom from "./cocos/CocosAdForm";
import AdForm from "./engine/AdForm";
import CocosMistouchForm from "./cocos/CocosMistouchForm";
import MistouchForm from "./engine/MistouchForm";
import CocosMistouchFormTT from "./cocos/CocosMistouchFormTT";
import CocosMistouchFormQQ from "./cocos/CocosMistouchFormQQ";
import BaseForm from "./engine/BaseForm";
import MistouchFormTT from "./engine/MistouchFormTT";
import MistouchFormQQ from "./engine/MistouchFormQQ";
import CocosAdFormQQ from "./cocos/CocosAdFormQQ";
import AdFormQQ from "./engine/AdFormQQ";
import AdViewItem from "./engine/AdViewItem";
import CocosAdViewItem from "./cocos/CocosAdViewItem";
import PrizeForm from "./engine/prizeForm";
import CocosPrizeForm from "./cocos/CocosPrizeForm";
import PrizeFormTT from "./engine/PrizeFormTT";
import CocosPrizeFormTT from "./cocos/CocosPrizeFormTT";
import CoinForm from "./engine/CoinForm";
import CocosCoinForm from "./cocos/CocosCoinForm";
import TotalForm from "./engine/TotalForm";
import CocosTotalForm from "./cocos/CocosTotalForm";
import ShareFormTT from "./engine/ShareFormTT";
import CocosShareFormTT from "./cocos/CocosShareFormTT";

/**
 * 页面逻辑控制
 */
export default class LogicControl {

    private mAdViewItem: AdViewItem;
    /**
     * 返回一个AdViewItem实例
     */
    public newViewItem(): AdViewItem {
        return new CocosAdViewItem();
    };


    private mAdForm: AdForm;
    public get adForm(): AdForm {
        if (!this.mAdForm)
            this.mAdForm = new CocosAdFrom();
        return this.mAdForm;
    };

    private mAdFormQQ: AdFormQQ;
    public get adFormQQ(): AdFormQQ {
        if (!this.mAdForm)
            this.mAdForm = new CocosAdFrom();
        return this.mAdFormQQ;
    };



    private mMistouchForm: MistouchForm;
    public get mistouchForm(): MistouchForm {
        if (!this.mMistouchForm)
            this.mMistouchForm = new CocosMistouchForm();
        return this.mMistouchForm;
    }

    private mMistouchFormTT: MistouchFormTT;
    public get mistouchFormTT(): CocosMistouchFormTT {
        if (!this.mMistouchFormTT)
            this.mMistouchFormTT = new CocosMistouchFormTT();
        return this.mMistouchFormTT;
    }

    private mMistouchFormQQ: MistouchFormQQ;
    public get mistouchFormQQ(): CocosMistouchFormQQ {
        if (!this.mMistouchFormQQ)
            this.mMistouchFormQQ = new CocosMistouchFormQQ();
        return this.mMistouchFormQQ;
    }


    private mPrizeForm: PrizeForm;
    public get prizeForm(): PrizeForm {
        if (!this.mPrizeForm)
            this.mPrizeForm = new CocosPrizeForm();
        return this.mPrizeForm;
    }

    private mPrizeFormTT: PrizeFormTT;
    public get prizeFormTT(): PrizeFormTT {
        if (!this.mPrizeFormTT)
            this.mPrizeFormTT = new CocosPrizeFormTT();
        return this.mPrizeFormTT;
    }


    private mCoinForm: CoinForm
    /**
    * 金币
    */
    public get coinForm(): CoinForm {
        if (!this.mCoinForm)
            this.mCoinForm = new CocosCoinForm();
        return this.mCoinForm;
    }


    private mTotalForm: TotalForm
    /**
    * 金币
    */
    public get totalForm(): TotalForm {
        if (!this.mTotalForm)
            this.mTotalForm = new CocosTotalForm();
        return this.mTotalForm;
    }


    private mShareForm: ShareFormTT
    /**
     * 分享
     */
    public get shareFormTT(): ShareFormTT {
        if (!this.mShareForm)
            this.mShareForm = new CocosShareFormTT();
        return this.mShareForm;
    }


}