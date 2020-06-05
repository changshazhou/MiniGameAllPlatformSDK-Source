import AdViewItem from "../engine/AdViewItem";
import moosnowAdRow from "../../model/moosnowAdRow";
export default class CocosAdViewItem extends AdViewItem {
    willShow(cell: moosnowAdRow): void;
    refreshImg(cell: moosnowAdRow): void;
}
