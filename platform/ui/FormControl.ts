import CocosAdFrom from "./cocos/CocosAdForm";
import AdForm from "./engine/AdForm";
import CocosMistouchForm from "./cocos/CocosMistouchForm";
import MistouchForm from "./engine/MistouchForm";

/**
 * 广告结果
 */
export default class FormControl {
    private mAdForm: AdForm
    /**
     * 广告form
     */
    public get adForm(): AdForm {
        if (!this.mAdForm)
            this.mAdForm = new CocosAdFrom();
        return this.mAdForm;
    };


    private mMistouchForm: MistouchForm
    public get mistouchForm(): MistouchForm {
        if (!this.mMistouchForm)
            this.mMistouchForm = new CocosMistouchForm();
        return this.mMistouchForm;
    }
}