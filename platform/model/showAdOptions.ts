import showOptions from "./showOptions";
import vectory from "./Vectory";
import { AD_POSITION } from "../enum/AD_POSITION";
import loadAdOptions from "./loadAdOptions";

/**
 * 金币飞入动画
 */
export default class showAdOptions extends loadAdOptions {

    /**
     * 浮动导出位置
     */
    floatPositon?: Array<vectory> = [];
    /**
     * 浮动导出模板
     */
    floatTempletes?: Array<string> = ["floatAdItem1"];


    public adType: number = AD_POSITION.NONE;
    public callback: () => void;

}


