import CocosBaseForm from "./CocosBaseForm";
import CheckboxComponent from "../common/CheckboxComponent";
import showSetOptions from "../../../model/showSetOptions";

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