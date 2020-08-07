import CocosBaseForm from "./CocosBaseForm";
import CheckboxComponent from "../common/CheckboxComponent";
import showSetOptions from "../../../model/showSetOptions";
import CocosNodeEvent from "../enum/CocosNodeEvent";
import CocosNodeHelper from "../helper/CocosNodeHelper";

export default class CocosSetForm extends CocosBaseForm {

    public bg: cc.Node = null;

    public get FormData(): showSetOptions {
        return this.mFormData;
    }

    public formComponents = [
        new CheckboxComponent(moosnow.data.getVibrateSetting(), (isChecked) => {
            this.vibrateSwitch(isChecked);
        }, "vibrateOn", "vibrateOff"),
        new CheckboxComponent(moosnow.audio.isMute, (isChecked) => {
            this.musicSwitch(isChecked);
        }, "musicOn", "musicOff"),
    ];
    private addListener() {
        this.node.on(CocosNodeEvent.TOUCH_START, this.hideForm, this)
        CocosNodeHelper.addStopPropagation(this.bg)
    }
    private removeListener() {
        this.node.off(CocosNodeEvent.TOUCH_START, this.hideForm, this)
        CocosNodeHelper.removeStopPropagation(this.bg)
    }

    willShow(data) {
        super.willShow(data)
        this.addListener();
    }
    willHide(data) {
        super.willShow(data)
        this.removeListener();
    }

    private vibrateSwitch(isChecked) {
        moosnow.data.setVibrateSetting(isChecked);
        if (this.FormData.vibrateCallback)
            this.FormData.vibrateCallback(isChecked)
    }
    private musicSwitch(isChecked) {
        moosnow.audio.isMute = isChecked;
        if (this.FormData.musicCallback)
            this.FormData.musicCallback(isChecked)

    }

}