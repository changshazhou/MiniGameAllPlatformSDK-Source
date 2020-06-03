
import MistouchForm from "../engine/MistouchForm";
import EventType from "../../utils/EventType";
import { MISTOUCH_BANNER_TYPE } from "../../enum/MISTOUCH_BANNER_TYPE";
import UIForms from "../../config/UIForms";
import MistouchFormQQ from "../engine/MistouchFormQQ";

export default class CocosMistouchFormQQ extends MistouchFormQQ {
    clickProgress: any = null;
    btnBanner: any = null;
    logo: any = null;
    hand: any = null;
    pinch1: any = null;
    pinch2: any = null;
    pinch3: any = null;
    pinch4: any = null;
    pinch5: any = null;
    pinch6: any = null;
    public mBeginPos: any;
    public mEndPos: any;


}