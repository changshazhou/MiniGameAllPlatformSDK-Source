import BaseModule from "./BaseModule";
import DelayMove from "../ui/engine/DelayMove";
import DelayShow from "../ui/engine/DelayShow";
export default class Delay extends BaseModule {
    constructor();
    private mDelayMove;
    get DelayMove(): DelayMove;
    private mDelayShow;
    get DelayShow(): DelayShow;
}
