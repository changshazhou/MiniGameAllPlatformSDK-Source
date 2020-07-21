import CocosBaseForm from "../form/CocosBaseForm";
export default class CocosBoxItem extends CocosBaseForm {
    checkdBg: cc.Node;
    opend: cc.Node;
    lockd: cc.Node;
    video: cc.Node;
    coinNum: cc.Node;
    get FormData(): any;
    willShow(data: any): void;
    willHide(data: any): void;
    addListener(): void;
    removeListener(): void;
    initItem(data: any): void;
    private onCheckChange;
    private _opening;
    private onCheck;
}
