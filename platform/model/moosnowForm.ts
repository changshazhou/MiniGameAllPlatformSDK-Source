import CocosAdFrom from "../ui/cocos/CocosAdForm";
import AdForm from "../ui/engine/AdForm";

/**
 * 广告结果
 */
export default class moosnowForm {
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