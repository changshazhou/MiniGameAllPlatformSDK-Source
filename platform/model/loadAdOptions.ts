import showOptions from "./showOptions";
import vectory from "./Vectory";

/**
 * 金币飞入动画
 */
export default class loadAdOptions extends showOptions {

    /**
     * 浮动导出位置
     */
    floatPositon?: Array<vectory> = [];
    /**
     * 浮动导出模板
     */
    floatTempletes?: Array<string> = ["floatAdItem1"];
    /**
     * 加载完成回调
     */
    callback?: Function

}


