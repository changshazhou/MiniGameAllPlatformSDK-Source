import vectory from "./Vectory";
import loadAdOptions from "./loadAdOptions";
/**
 * 金币飞入动画
 */
export default class showAdOptions extends loadAdOptions {
    /**
     * 浮动导出位置
     */
    floatPositon?: Array<vectory>;
    /**
     * 浮动导出模板
     */
    floatTempletes?: Array<string>;
    adType: number;
    callback: () => void;
}
