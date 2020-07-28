import moosnowAdRow from "../../../model/moosnowAdRow";
import CocosBaseForm from "../form/CocosBaseForm";
export default class CocosAdViewItem extends CocosBaseForm {
    logo: cc.Node;
    title: cc.Node;
    animLogo: cc.Node;
    nameBg: cc.Node;
    mAdItem: moosnowAdRow;
    addListener(): void;
    removeListener(): void;
    initPosition(data: any): void;
    willShow(cell: moosnowAdRow): void;
    refreshImg(cell: moosnowAdRow): void;
    private updateUI;
    onClickAd(): void;
    private findNextAd;
    private onAdViewChange;
    onShow(data: any): void;
    onHide(data: any): void;
}
