import CocosBaseForm from "./CocosBaseForm";
import CheckboxComponent from "../common/CheckboxComponent";
import showSetOptions from "../../../model/showSetOptions";
import CocosNodeEvent from "../enum/CocosNodeEvent";

export default class CocosSetForm extends CocosBaseForm {

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
    public addListener() {
        this.node.on(CocosNodeEvent.TOUCH_END, this.hideForm, this)
    }
    public removeListener() {
        this.node.off(CocosNodeEvent.TOUCH_END, this.hideForm, this)
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