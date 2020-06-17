import BaseLogic from "./BaseLogic";
import moosnowAdRow from "../../model/moosnowAdRow";
export default class AdViewItem extends BaseLogic {
    logo: cc.Sprite;
    title: cc.Label;
    animLogo: cc.Sprite;
    nameBg: cc.Sprite;
    changeView: boolean;
    mAdItem: moosnowAdRow;
    onClickAd(): void;
    private findNextAd;
    private onAdViewChange;
    onShow(): void;
    onHide(): void;
    addListener(): void;
    removeListener(): void;
    willShow(cell: moosnowAdRow): void;
    refreshImg(cell: moosnowAdRow): void;
}
