import CocosAdFrom from "./cocos/CocosAdForm";
import AdForm from "./engine/AdForm";

/**
 * 广告结果
 */
export default class FormControl {
    private mAdForm: AdForm
    /**
     * 广告form
     */
    public get adForm() {
        if (!this.mAdForm)
            this.mAdForm = new CocosAdFrom();
        return this.mAdForm;
    };
}