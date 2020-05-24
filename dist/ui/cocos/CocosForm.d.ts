export default class CocosFrom implements IForm {
    constructor();
    registerScript(): void;
    showToast(msg: string): void;
    showAd(params: {
        showAd: any;
        callback: any;
    }): void;
    showReward(): void;
}
