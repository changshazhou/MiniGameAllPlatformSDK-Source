import AdViewItem from "../engine/AdViewItem";
import moosnowAdRow from "../../model/moosnowAdRow";
import CocosNodeEvent from "./CocosNodeEvent";

export default class CocosAdViewItem extends AdViewItem {


    public addListener() {
        this.logo.node.on(CocosNodeEvent.TOUCH_END, this.onClickAd, this)
    }

    public removeListener() {
        this.logo.node.off(CocosNodeEvent.TOUCH_END, this.onClickAd, this)
    }


    public initPosition(data) {
        if (data) {
            // if (data.x)
            //     this.mLogic.node.x = data.x
            // if (data.y)
            //     this.mLogic.node.y = data.y
        }
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