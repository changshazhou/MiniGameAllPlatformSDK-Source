import CocosBaseComponent from "./CocosBaseComponent";
export default class CheckboxComponent extends CocosBaseComponent {
    private checkedName;
    private uncheckedName;
    private toggleCallback;
    mCheckedVideo: boolean;
    /**
     * 变化回调
     * @param isChecked
     * @param callback
     */
    constructor(isChecked?: boolean, callback?: (isChecked: any) => void, checkedName?: string, uncheckedName?: string);
    private addListener;
    private removeListener;
    onReceive(): void;
    private mCanNum;
    private mCheckBoxMistouch;
    private mClickNum;
    private mCheckBoxVideoNum;
    checkToggle(): void;
    onShow(data: any): void;
    private updateCheckbox;
    private checkCallback;
    willHide(): void;
}
