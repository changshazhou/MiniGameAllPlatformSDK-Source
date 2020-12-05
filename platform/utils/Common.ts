import { APP_PLATFORM } from "../enum/APP_PLATFORM";
import { ENGINE_TYPE } from "../enum/ENGINE_TYPE";
import { moosnowConfig } from "../../window";
import moosnowAppConfig from "../model/moosnowAppConfig";

export default class Common {
    //

    //for循环  
    static titleCase(s) {
        var i, ss = s.toLowerCase().split(/\s+/);
        for (i = 0; i < ss.length; i++) {
            ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);
        }
        return ss.join(' ');
    }
    static numFixed(num, len) {
        return parseFloat(parseFloat(num).toFixed(len))
    }
    static parseMoney(value) {
        if (isNaN(value))
            return 0.00;
        return parseFloat(parseFloat(value).toFixed(2))
    }
    static objKeySort(obj) {//排序的函数
        var newkey = Object.keys(obj).sort();
        //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
        var newObj = {};//创建一个新的对象，用于存放排好序的键值对
        for (var i = 0; i < newkey.length; i++) {//遍历newkey数组
            newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
        }
        return newObj;//返回排好序的新对象
    }
    static isObject(x) {
        var type = typeof x;
        return x !== null && (type === 'object' || type === 'function');
    }
    static object2Query(obj) {
        var args = []
        for (var k in obj)
            args.push(k + "=" + obj[k])
        return args.join("&"); // 返回对象  
    }
    static isFunction(fun) {
        if (typeof fun == 'function')
            return true
        return false
    }
    static isEmpty(obj) {
        if (typeof obj == 'object') {
            var name
            for (name in obj)
                return false
            return true
        }
        else if (obj === null || obj === undefined || obj === 'null' || obj === 'undefined' || obj === '')
            return true

        return false
    }
    static formatTime(date) {
        // const year = date.getFullYear()
        // const month = date.getMonth() + 1
        // const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        // const second = date.getSeconds()
        return [hour, minute].map(this.formatNumber).join(':');
        // return [year, month, day].map(formatNumber).join('/')
        // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    }
    static formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    }

    /**
     * 复制源对象属性到目标上
     * @param {*} from 
     * @param {*} target 
     */
    public static copy(from, target) {
        for (let k in from) {
            target[k] = from[k]
        }
    }
    public static randomNumBoth(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入
        return num;
    }

    public static randomFloat(Min, Max) {
        return Min + Math.random() * Max
    }

    public static randomToRatio(start: number, end: number, range: number): boolean {
        var num: number = this.randomNumBoth(start, end);
        if (num <= range) {
            return true;
        }
        return false;
    }

    public static generateUUID(): string {
        var d = new Date().getTime();
        var uuid: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    static isNumber(obj) {
        return typeof obj == 'number' || Object.prototype.toString.call(obj) == '[object Number]';
    }

    static isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
    }

    static isString(obj) {
        return Object.prototype.toString.call(obj) === "[object String]";
    }

    private static mPlatform: APP_PLATFORM
    /**
     * 获取当前的运行平台
     * PC状态下会返回debug平台
     * debug没有时 默认返回微信平台
     */
    static get platform(): APP_PLATFORM {
        if (this.mPlatform) {
            return this.mPlatform;
        }
        let winCfg = window["moosnowConfig"];
        if (window['tt'])
            this.mPlatform = APP_PLATFORM.BYTEDANCE
        else if (window['swan'])
            this.mPlatform = APP_PLATFORM.BAIDU
        else if (window['qq'])
            this.mPlatform = APP_PLATFORM.QQ
        else if (window['qg']) {
            if (window["qg"] && window["qg"].getSystemInfoSync) {
                let sys = window["qg"].getSystemInfoSync();
                console.log('平台判断', JSON.stringify(sys));
                if (sys && sys.brand && sys.brand.toLocaleLowerCase().indexOf("vivo") != -1) {
                    this.mPlatform = APP_PLATFORM.VIVO;
                }
                else if (winCfg.oppo && winCfg.oppo.url && winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                    this.mPlatform = APP_PLATFORM.OPPO_ZS
                else {
                    this.mPlatform = APP_PLATFORM.OPPO
                }
            }
            else if (winCfg.oppo && winCfg.oppo.url && winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                this.mPlatform = APP_PLATFORM.OPPO_ZS
            else {
                this.mPlatform = APP_PLATFORM.OPPO
            }

        }
        else if (window['uc'])
            this.mPlatform = APP_PLATFORM.UC
        else if (window['hbs'])
            this.mPlatform = APP_PLATFORM.HW
        else if (window['wx'])
            this.mPlatform = APP_PLATFORM.WX
        else {
            if (winCfg.debug && winCfg[winCfg.debug]) {
                if (winCfg.debug == "wx")
                    this.mPlatform = APP_PLATFORM.WX
                else if (winCfg.debug == "oppo")
                    if (winCfg.oppo && winCfg.oppo.url && winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                        this.mPlatform = APP_PLATFORM.OPPO_ZS
                    else
                        this.mPlatform = APP_PLATFORM.OPPO
                else if (winCfg.debug == "bd")
                    this.mPlatform = APP_PLATFORM.BAIDU
                else if (winCfg.debug == "byte")
                    this.mPlatform = APP_PLATFORM.BYTEDANCE
                else if (winCfg.debug == "qq")
                    this.mPlatform = APP_PLATFORM.QQ
                else if (winCfg.debug == "vivo")
                    this.mPlatform = APP_PLATFORM.VIVO
                else if (winCfg.debug == "uc")
                    this.mPlatform = APP_PLATFORM.UC
                else if (winCfg.debug == "hw")
                    this.mPlatform = APP_PLATFORM.HW
                else
                    this.mPlatform = APP_PLATFORM.PC
            }
            else
                this.mPlatform = APP_PLATFORM.PC
        }
        return this.mPlatform;

    }

    static get isOnlyUI() {
        return window["onlyUI"] == true;
    }

    static get isPC() {
        return cc.sys.browserType === cc.sys.BROWSER_TYPE_CHROME
    }

    static get config(): moosnowAppConfig {
        let winCfg = window["moosnowConfig"];
        let config;
        if (Common.platform == APP_PLATFORM.WX)
            config = winCfg.wx;
        else if (Common.platform == APP_PLATFORM.OPPO || Common.platform == APP_PLATFORM.OPPO_ZS)
            config = winCfg.oppo;
        else if (Common.platform == APP_PLATFORM.VIVO)
            config = winCfg.vivo;
        else if (Common.platform == APP_PLATFORM.QQ)
            config = winCfg.qq;
        else if (Common.platform == APP_PLATFORM.BAIDU)
            config = winCfg.bd;
        else if (Common.platform == APP_PLATFORM.BYTEDANCE)
            config = winCfg.byte;
        else if (Common.platform == APP_PLATFORM.HW)
            config = winCfg.hw;
        else
            config = winCfg.wx;
        return config;
    }
    static colorRGB2Hex(color) {
        var rgb = color.split(',');
        var r = parseInt(rgb[0].split('(')[1]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2].split(')')[0]);

        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
    }


    static deepCopy(obj): object | [] {
        //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
        var objClone = Array.isArray(obj) ? [] : {};
        //进行深拷贝的不能为空，并且是对象或者是
        if (obj && typeof obj === "object") {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === "object") {
                        objClone[key] = this.deepCopy(obj[key]);
                    } else {
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }

    static getEngine() {
        if (window[ENGINE_TYPE.COCOS]) {
            return ENGINE_TYPE.COCOS
        }
        else if (window[ENGINE_TYPE.LAYA]) {
            return ENGINE_TYPE.LAYA
        }
        else
            return ENGINE_TYPE.NONE;
    }


    static popOpenAnim(node: cc.Node, callback?: Function) {
        if (this.getEngine() == ENGINE_TYPE.COCOS) {
            node.scale = 0.8;
            node.runAction(
                cc.sequence(
                    cc.scaleTo(0.1, 1.2, 1.2),
                    cc.scaleTo(0.1, 1, 1),
                    cc.callFunc(() => {
                        if (callback)
                            callback();
                    }, this)
                )
            )
            return;
        }
        callback();

    }

    static popCloseAnim(node: cc.Node, callback?: Function) {
        if (this.getEngine() == ENGINE_TYPE.COCOS) {
            node.scale = 1;
            node.runAction(cc.sequence(
                cc.scaleTo(0.1, 0, 0),
                cc.callFunc(() => {
                    if (callback)
                        callback();
                }, this)
            ))
            return;
        }
        callback();
    }
    /*格式化字符，类似于C# String.Format */
    static format(str: string, ...rep: string[]) {
        if (typeof (str) == "undefined" || str == null || str == '' || str == 'undefined') return str;
        for (var i = 0; i < rep.length; i++) {
            var re = new RegExp('\\{' + (i) + '\\}', 'gm');
            str = str.replace(re, rep[i]);
        }
        return str;
    }
    static formatMoney(value: number) {
        let retValue: any = "0";
        if (isNaN(value))
            value = 0;
        if (value < 9999) {
            retValue = parseInt(`${value}`);
        }
        else if (value < 9999999) {
            retValue = parseFloat(`${value / 1000}`).toFixed(2) + "K";
        }
        else if (value < 9999999999) {
            retValue = parseFloat(`${value / 1000000}`).toFixed(2) + "M";
        }
        else if (value < 9999999999999) {
            retValue = parseFloat(`${value / 1000000000}`).toFixed(2) + "G";
        }
        else if (value < 9999999999999999) {
            retValue = parseFloat(`${value / 1000000000000}`).toFixed(2) + "T";
        }
        else if (value < 9999999999999999999)
            retValue = parseFloat(`${value / 1000000000000000}`).toFixed(2) + "P";
        else if (value < 9999999999999999999999)
            retValue = parseFloat(`${value / 1000000000000000000}`).toFixed(2) + "E";
        else
            retValue = parseFloat(`${value / 1000000000000000000000}`).toFixed(2) + "B";
        return retValue;
    }
}