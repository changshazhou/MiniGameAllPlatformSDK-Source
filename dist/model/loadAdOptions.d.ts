import showOptions from "./showOptions";
import vectory from "./Vectory";
/**
 * 金币飞入动画
 */
export default class loadAdOptions extends showOptions {
    zIndex?: number;
    floatPositon?: Array<vectory>;
    floatTempletes?: Array<string>;
    callback?: Function;
}
