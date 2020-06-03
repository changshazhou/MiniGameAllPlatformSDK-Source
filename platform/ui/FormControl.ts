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

/**
 * 广告结果
 */
export default class FormControl {
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



    private mMistouchForm: MistouchForm
    public get mistouchForm(): MistouchForm {
        if (!this.mMistouchForm)
            this.mMistouchForm = new CocosMistouchForm();
        return this.mMistouchForm;
    }

    private mMistouchFormTT: MistouchFormTT
    public get mistouchFormTT(): CocosMistouchFormTT {
        if (!this.mMistouchFormTT)
            this.mMistouchFormTT = new CocosMistouchFormTT();
        return this.mMistouchFormTT;
    }

    private mMistouchFormQQ: MistouchFormQQ
    public get mistouchFormQQ(): CocosMistouchFormQQ {
        if (!this.mMistouchFormQQ)
            this.mMistouchFormQQ = new CocosMistouchFormQQ();
        return this.mMistouchFormQQ;
    }
}