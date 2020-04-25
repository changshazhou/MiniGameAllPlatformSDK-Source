import { PlatformType } from "../enum/PlatformType";

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
    static isWeChat() {
        return !!window["wx"];
    }
    static isQQPlay() {
        return false
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

    static get platform(): PlatformType {
        let winCfg = window["moosnowConfig"]
        if (window['tt'])
            return PlatformType.BYTEDANCE
        else if (window['swan'])
            return PlatformType.BAIDU
        else if (window['qq'])
            return PlatformType.QQ
        else if (window['qg']) {
            if (winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                return PlatformType.OPPO_ZS
            else
                return PlatformType.OPPO
        }
        else if (window['wx'])
            return PlatformType.WX
        else
            return PlatformType.PC
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
}