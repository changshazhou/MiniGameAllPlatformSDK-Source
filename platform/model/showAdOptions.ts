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
    public floatPositon?: Array<vectory> = [];
    /**
     * 浮动导出模板
     */
    public floatTempletes?: Array<string> = ["floatAdItem1"];
    /**
     * 广告类型
     */
    public adType: number = AD_POSITION.NONE;
    /**
     * 如果有返回按钮的话 返回按钮回调
     */
    public callback: () => void;

    /**
     * 层级
     */
    public zIndex: number = cc.macro.MAX_ZINDEX;


    /**
     * 导出的名称，用来记录跳出的位置
     */
    public pointName: string = "";


    /**
     * 表单页面名称
     */
    public formName: string = "" || "loadingForm" || "homeForm" || "gameForm" || "endForm" || "respawnForm";

}


