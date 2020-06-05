import BaseLogic from "./BaseLogic";
import moosnowAdRow from "../../model/moosnowAdRow";
export default class AdViewItem extends BaseLogic {
    logo: cc.Sprite;
    title: cc.Label;
    animLogo: cc.Sprite;
    nameBg: cc.Sprite;
    changeView: boolean;
    mAdItem: moosnowAdRow;
    initItem(): void;
    private onClickAd;
    private findNextAd;
    private onAdViewChange;
    onShow(): void;
    onHide(): void;
    willShow(cell: moosnowAdRow): void;
    refreshImg(cell: moosnowAdRow): void;
}
