import { PlatformType } from "../enum/PlatformType";
export default class Common {
    static titleCase(s: any): any;
    static numFixed(num: any, len: any): number;
    static parseMoney(value: any): number;
    static objKeySort(obj: any): {};
    static isWeChat(): boolean;
    static isQQPlay(): boolean;
    static isObject(x: any): boolean;
    static object2Query(obj: any): string;
    static isFunction(fun: any): boolean;
    static isEmpty(obj: any): boolean;
    static formatTime(date: any): string;
    static formatNumber(n: any): any;
    /**
     * 复制源对象属性到目标上
     * @param {*} from
     * @param {*} target
     */
    static copy(from: any, target: any): void;
    static randomNumBoth(Min: any, Max: any): any;
    static randomFloat(Min: any, Max: any): any;
    static randomToRatio(start: number, end: number, range: number): boolean;
    static generateUUID(): string;
    static isNumber(obj: any): boolean;
    static isArray(obj: any): boolean;
    static isString(obj: any): boolean;
    private static mPlatform;
    /**
     * 获取当前的运行平台
     * PC状态下会返回debug平台
     * debug没有时 默认返回微信平台
     */
    static get platform(): PlatformType;
    static deepCopy(obj: any): object | [];
    static getEngine(instance: any): string;
    static popOpenAnim(node: cc.Node, callback?: Function): void;
    static popCloseAnim(node: cc.Node, callback?: Function): void;
    static formatMoney(value: number): any;
}
