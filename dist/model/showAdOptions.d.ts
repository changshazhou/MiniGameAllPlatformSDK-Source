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
    /**
     * 广告类型
     */
    adType: number;
    /**
     * 如果有返回按钮的话 返回按钮回调
     */
    callback: () => void;
    /**
     * 层级
     */
    zIndex: number;
    /**
     * 导出的名称，用来记录跳出的位置
     */
    pointName: string;
    /**
     * 表单页面名称
     */
    formName: string;
}
