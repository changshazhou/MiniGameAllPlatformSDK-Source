import AdViewItem from "../engine/AdViewItem";
import moosnowAdRow from "../../model/moosnowAdRow";
import CocosNodeEvent from "./CocosNodeEvent";

export default class CocosAdViewItem extends AdViewItem {

    public initItem() {
        this.logo.node.on(CocosNodeEvent.TOUCH_END, this.onClickAd, this)
    }

    public willShow(cell: moosnowAdRow) {
        super.willShow(cell);
        this.mAdItem = cell;
        cc.loader.load(cell.img, (err, tex) => {
            var spriteFrame = new cc.SpriteFrame(tex);
            this.logo.spriteFrame = spriteFrame;
        })
        if (this.title)
            this.title.string = (cell.title);
    }

    public refreshImg(cell: moosnowAdRow) {
        this.mAdItem = cell;
        cc.loader.load(cell.img, (err, tex) => {
            var spriteFrame = new cc.SpriteFrame(tex);
            this.logo.spriteFrame = spriteFrame;
        })
        if (this.title)
            this.title.string = (cell.title);
    }

}