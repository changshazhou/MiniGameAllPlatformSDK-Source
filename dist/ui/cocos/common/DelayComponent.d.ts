import CocosBaseComponent from "./CocosBaseComponent";
export default class DelayComponent extends CocosBaseComponent {
    /**
     * 变化回调
     * @param isChecked
     * @param callback
     */
    constructor(isChecked: any, callback: (isChecked: any) => void);
    checked: cc.Node;
    unchecked: cc.Node;
    private toggleCallback;
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
    private checkCallback;
    willHide(): void;
}
