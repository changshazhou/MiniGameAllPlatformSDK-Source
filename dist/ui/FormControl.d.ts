import AdForm from "./engine/AdForm";
import MistouchForm from "./engine/MistouchForm";
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
}
