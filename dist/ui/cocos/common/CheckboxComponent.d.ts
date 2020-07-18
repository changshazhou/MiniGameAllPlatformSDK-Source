import CocosBaseComponent from "./CocosBaseComponent";
export default class CheckboxComponent extends CocosBaseComponent {
    checked: cc.Node;
    unchecked: cc.Node;
    mCheckedVideo: boolean;
    addListener(): void;
    removeListener(): void;
    onReceive(): void;
    private mCanNum;
    private mCheckBoxMistouch;
    private mClickNum;
    private mVideoNum;
    checkToggle(mistouch?: boolean): void;
    onShow(data: any): void;
    willHide(): void;
}
