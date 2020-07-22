import CocosBaseForm from "./CocosBaseForm";
import CheckboxComponent from "../common/CheckboxComponent";
import showSetOptions from "../../../model/showSetOptions";
export default class CocosSetForm extends CocosBaseForm {
    get FormData(): showSetOptions;
    formComponents: CheckboxComponent[];
    willShow(data: any): void;
    willHide(data: any): void;
    private vibrateSwitch;
    private musicSwitch;
}
