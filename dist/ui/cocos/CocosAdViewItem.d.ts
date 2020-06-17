import AdViewItem from "../engine/AdViewItem";
import moosnowAdRow from "../../model/moosnowAdRow";
export default class CocosAdViewItem extends AdViewItem {
    addListener(): void;
    removeListener(): void;
    initPosition(data: any): void;
    willShow(cell: moosnowAdRow): void;
    refreshImg(cell: moosnowAdRow): void;
}
