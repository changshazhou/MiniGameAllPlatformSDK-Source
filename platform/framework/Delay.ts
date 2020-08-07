import BaseModule from "./BaseModule";
import DelayMove from "../ui/engine/DelayMove";
import CocosDelayMove from "../ui/cocos/CocosDelayMove";
import DelayShow from "../ui/engine/DelayShow";

export default class Delay extends BaseModule {

    constructor() {
        super();
    }

    private mDelayMove: DelayMove;
    public get DelayMove() {
        if (!this.mDelayMove) {
            this.mDelayMove = new CocosDelayMove();
        }
        return this.mDelayMove;
    }
    private mDelayShow: DelayShow;
    public get DelayShow() {
        if (!this.mDelayShow) {
            this.mDelayShow = new DelayShow();
        }
        return this.mDelayShow;
    }

}