import AdViewItem from "../engine/AdViewItem";
export default class CocosAdViewItem extends AdViewItem {
    willShow(cell: moosnowAdRow): void;
    refreshImg(cell: moosnowAdRow): void;
}
