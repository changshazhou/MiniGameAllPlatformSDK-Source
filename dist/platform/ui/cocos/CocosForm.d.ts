export default class CocosFrom implements IForm {
    constructor();
    registerScript(): void;
    showToast(msg: string): void;
    /**
     *
     * @param params
     */
    showAd(params: {
        showAd: any;
        callback: any;
    }): void;
    showReward(): void;
}
