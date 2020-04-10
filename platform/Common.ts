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
    static formatMoney(value: number) {
        let retValue: any = "0";
        if (isNaN(value))
            value = 0;
        if (value < 1000) {
            retValue = parseInt(`${value}`);
        }
        else if (value < 1000000) {
            retValue = parseFloat(`${value / 1000}`).toFixed(2) + "K";
        }
        else if (value < 1000000000) {
            retValue = parseFloat(`${value / 1000000}`).toFixed(2) + "M";
        }
        else if (value < 1000000000000) {
            retValue = parseFloat(`${value / 1000000000}`).toFixed(2) + "G";
        }
        else if (value < 1000000000000000) {
            retValue = parseFloat(`${value / 1000000000000}`).toFixed(2) + "T";
        }
        else if (value < 1000000000000000000)
            retValue = parseFloat(`${value / 1000000000000000}`).toFixed(2) + "P";
        else if (value < 1000000000000000000000)
            retValue = parseFloat(`${value / 1000000000000000000}`).toFixed(2) + "E";
        else
            retValue = parseFloat(`${value / 1000000000000000000000}`).toFixed(2) + "B";
        return retValue;
    }
    static formatDiamond(value) {
        let retValue: string = "0";
        if (isNaN(value))
            value = 0;
        if (value < 9999) {
            retValue = parseFloat(value).toFixed(0);
        }
        else if (value < 9999999) {
            retValue = parseFloat(`${value / 1000}`).toFixed(0) + "K";
        }
        else {
            retValue = parseFloat(`${value / 1000000}`).toFixed(0) + "M";
        }
        return retValue;
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
    /*格式化字符，类似于C# String.Format */
    static format() {
        var str = arguments[0];
        if (typeof (str) == "undefined" || str == null || str == '' || str == 'undefined') return str;
        for (var i = 1; i < arguments.length; i++) {
            var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
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
    static dateFtt(fmt, date) { //author: meizz   
        var o = {
            "M+": date.getMonth() + 1,                 //月份   
            "d+": date.getDate(),                    //日   
            "h+": date.getHours(),                   //小时   
            "m+": date.getMinutes(),                 //分   
            "s+": date.getSeconds(),                 //秒   
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
            "S": date.getMilliseconds()             //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    static formatTime(date) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        return [year, month, day].map(this.formatNumber).join('/')
        // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    }
    static millisecondToDate(msd: number): string {
        return this.secondToDate(msd / 1000)
    }
    static secondToDate(time: number): string {
        let retValue: string = "";
        if (time) {
            if (time < 60) {
                retValue = this.formatNumber(0) + ":" + this.formatNumber(time)
            }
            if (time > 60 && time < 60 * 60) {
                let minute = parseInt(`${time / 60.0}`)
                let second = time - minute * 60;
                retValue = this.formatNumber(minute) + ":" + this.formatNumber(second)
            }
        }
        return retValue;
    }
    //补零
    static getzf(num: number): string {
        let retValue: string = "";
        if (parseInt(`${num}`) < 10) {
            retValue = '0' + num;
        }
        else
            retValue = `${num}`
        return retValue;
    }
    static formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    }
    static colorRGB2Hex(color) {
        var rgb = color.split(',');
        var r = parseInt(rgb[0].split('(')[1]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2].split(')')[0]);

        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
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
    /**
     * 转换速度
     */
    static convertSpeed(speed, delta) {
        if (delta > 167)
            delta = 16.67
        return (speed * (delta / 1000.0));
    }
    static randName() {
        var names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var randName = "";
        for (var int = 0; int < 8; int++) {
            var rand = names[this.randomNumBoth(0, names.length - 1)];
            if (rand) randName += rand;
        }
        randName += this.randomNumBoth(100, 999);
        return randName;
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


}