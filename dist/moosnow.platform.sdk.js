var mx = (function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var MathUtils = /** @class */ (function () {
        function MathUtils() {
        }
        MathUtils.randomNumBoth = function (Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
        };
        /**
        * 传入概率值数组，返回中标的概率下标
        * @param parr 概率数组
        */
        MathUtils.probabilitys = function (parr) {
            var arr = 0;
            var pres = __spreadArrays(parr);
            var probabilityCount = 0;
            for (var i = 0; i < pres.length; i++) {
                probabilityCount += pres[i];
            }
            if (probabilityCount != 100) {
                throw '所有概率值总和不等于100%';
            }
            var nums = new Array();
            for (var i = 0; i < pres.length; i++) {
                var element = pres[i];
                for (var index = 0; index < element; index++) {
                    nums.push(arr);
                }
                arr++;
            }
            var random = this.randomNumBoth(0, 99);
            var targetIndex = nums[random];
            return targetIndex;
        };
        return MathUtils;
    }());

    var PlatformType;
    (function (PlatformType) {
        /**
         * 微信
         */
        PlatformType[PlatformType["WX"] = 0] = "WX";
        /**
         * 字节跳动
         */
        PlatformType[PlatformType["BYTEDANCE"] = 1] = "BYTEDANCE";
        /**
         * OPPO
         */
        PlatformType[PlatformType["OPPO"] = 2] = "OPPO";
        /**
         * OPPO
         */
        PlatformType[PlatformType["OPPO_ZS"] = 3] = "OPPO_ZS";
        /**
         * 百度
         */
        PlatformType[PlatformType["BAIDU"] = 4] = "BAIDU";
        /**
         * QQ
         */
        PlatformType[PlatformType["QQ"] = 5] = "QQ";
        /**
         * PC电脑
         */
        PlatformType[PlatformType["PC"] = 6] = "PC";
        /**
         * VIVO
         */
        PlatformType[PlatformType["VIVO"] = 7] = "VIVO";
    })(PlatformType || (PlatformType = {}));

    var ENGINE_TYPE = {
        COCOS: "cc",
        LAYA: "Laya",
        NONE: ""
    };

    var Common = /** @class */ (function () {
        function Common() {
        }
        //
        //for循环  
        Common.titleCase = function (s) {
            var i, ss = s.toLowerCase().split(/\s+/);
            for (i = 0; i < ss.length; i++) {
                ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);
            }
            return ss.join(' ');
        };
        Common.numFixed = function (num, len) {
            return parseFloat(parseFloat(num).toFixed(len));
        };
        Common.parseMoney = function (value) {
            if (isNaN(value))
                return 0.00;
            return parseFloat(parseFloat(value).toFixed(2));
        };
        Common.objKeySort = function (obj) {
            var newkey = Object.keys(obj).sort();
            //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
            var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
            for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
                newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
            }
            return newObj; //返回排好序的新对象
        };
        Common.isObject = function (x) {
            var type = typeof x;
            return x !== null && (type === 'object' || type === 'function');
        };
        Common.object2Query = function (obj) {
            var args = [];
            for (var k in obj)
                args.push(k + "=" + obj[k]);
            return args.join("&"); // 返回对象  
        };
        Common.isFunction = function (fun) {
            if (typeof fun == 'function')
                return true;
            return false;
        };
        Common.isEmpty = function (obj) {
            if (typeof obj == 'object') {
                var name;
                for (name in obj)
                    return false;
                return true;
            }
            else if (obj === null || obj === undefined || obj === 'null' || obj === 'undefined' || obj === '')
                return true;
            return false;
        };
        Common.formatTime = function (date) {
            // const year = date.getFullYear()
            // const month = date.getMonth() + 1
            // const day = date.getDate()
            var hour = date.getHours();
            var minute = date.getMinutes();
            // const second = date.getSeconds()
            return [hour, minute].map(this.formatNumber).join(':');
            // return [year, month, day].map(formatNumber).join('/')
            // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
        };
        Common.formatNumber = function (n) {
            n = n.toString();
            return n[1] ? n : '0' + n;
        };
        /**
         * 复制源对象属性到目标上
         * @param {*} from
         * @param {*} target
         */
        Common.copy = function (from, target) {
            for (var k in from) {
                target[k] = from[k];
            }
        };
        Common.randomNumBoth = function (Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
        };
        Common.randomFloat = function (Min, Max) {
            return Min + Math.random() * Max;
        };
        Common.randomToRatio = function (start, end, range) {
            var num = this.randomNumBoth(start, end);
            if (num <= range) {
                return true;
            }
            return false;
        };
        Common.generateUUID = function () {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        ;
        Common.isNumber = function (obj) {
            return typeof obj == 'number' || Object.prototype.toString.call(obj) == '[object Number]';
        };
        Common.isArray = function (obj) {
            return Object.prototype.toString.call(obj) == '[object Array]';
        };
        Common.isString = function (obj) {
            return Object.prototype.toString.call(obj) === "[object String]";
        };
        Object.defineProperty(Common, "platform", {
            /**
             * 获取当前的运行平台
             * PC状态下会返回debug平台
             * debug没有时 默认返回微信平台
             */
            get: function () {
                if (this.mPlatform) {
                    return this.mPlatform;
                }
                var winCfg = window["moosnowConfig"];
                if (window['tt'])
                    this.mPlatform = PlatformType.BYTEDANCE;
                else if (window['swan'])
                    this.mPlatform = PlatformType.BAIDU;
                else if (window['qq'])
                    this.mPlatform = PlatformType.QQ;
                else if (window['qg']) {
                    if (window["qg"] && window["qg"].getSystemInfoSync) {
                        var sys = window["qg"].getSystemInfoSync();
                        console.log('平台判断', JSON.stringify(sys));
                        if (sys && sys.brand && sys.brand.toLocaleLowerCase().indexOf("vivo") != -1) {
                            this.mPlatform = PlatformType.VIVO;
                        }
                        else if (winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                            this.mPlatform = PlatformType.OPPO_ZS;
                        else {
                            this.mPlatform = PlatformType.OPPO;
                        }
                    }
                    else if (winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                        this.mPlatform = PlatformType.OPPO_ZS;
                    else {
                        this.mPlatform = PlatformType.OPPO;
                    }
                }
                else if (window['wx'])
                    this.mPlatform = PlatformType.WX;
                else {
                    if (winCfg.debug && winCfg[winCfg.debug]) {
                        if (winCfg.debug == "wx")
                            this.mPlatform = PlatformType.WX;
                        else if (winCfg.debug == "oppo")
                            if (winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                                this.mPlatform = PlatformType.OPPO_ZS;
                            else
                                this.mPlatform = PlatformType.OPPO;
                        else if (winCfg.debug == "bd")
                            this.mPlatform = PlatformType.BAIDU;
                        else if (winCfg.debug == "byte")
                            this.mPlatform = PlatformType.BYTEDANCE;
                        else if (winCfg.debug == "qq")
                            this.mPlatform = PlatformType.QQ;
                        else if (winCfg.debug == "vivo")
                            this.mPlatform = PlatformType.VIVO;
                        else
                            this.mPlatform = PlatformType.PC;
                    }
                    else
                        this.mPlatform = PlatformType.PC;
                }
                return this.mPlatform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Common, "config", {
            get: function () {
                var winCfg = window["moosnowConfig"];
                var config;
                if (Common.platform == PlatformType.WX)
                    config = winCfg.wx;
                else if (Common.platform == PlatformType.OPPO || Common.platform == PlatformType.OPPO_ZS)
                    config = winCfg.oppo;
                else if (Common.platform == PlatformType.VIVO)
                    config = winCfg.vivo;
                else if (Common.platform == PlatformType.QQ)
                    config = winCfg.qq;
                else if (Common.platform == PlatformType.BAIDU)
                    config = winCfg.bd;
                else if (Common.platform == PlatformType.BYTEDANCE)
                    config = winCfg.byte;
                else
                    config = winCfg.wx;
                return config;
            },
            enumerable: true,
            configurable: true
        });
        Common.colorRGB2Hex = function (color) {
            var rgb = color.split(',');
            var r = parseInt(rgb[0].split('(')[1]);
            var g = parseInt(rgb[1]);
            var b = parseInt(rgb[2].split(')')[0]);
            var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            return hex;
        };
        Common.deepCopy = function (obj) {
            //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
            var objClone = Array.isArray(obj) ? [] : {};
            //进行深拷贝的不能为空，并且是对象或者是
            if (obj && typeof obj === "object") {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (obj[key] && typeof obj[key] === "object") {
                            objClone[key] = this.deepCopy(obj[key]);
                        }
                        else {
                            objClone[key] = obj[key];
                        }
                    }
                }
            }
            return objClone;
        };
        Common.getEngine = function () {
            if (window[ENGINE_TYPE.COCOS]) {
                return ENGINE_TYPE.COCOS;
            }
            else if (window[ENGINE_TYPE.LAYA]) {
                return ENGINE_TYPE.LAYA;
            }
            else
                return ENGINE_TYPE.NONE;
        };
        Common.popOpenAnim = function (node, callback) {
            if (this.getEngine() == ENGINE_TYPE.COCOS) {
                node.scale = 0.8;
                node.runAction(cc.sequence(cc.scaleTo(0.1, 1.2, 1.2), cc.scaleTo(0.1, 1, 1), cc.callFunc(function () {
                    if (callback)
                        callback();
                }, this)));
                return;
            }
            callback();
        };
        Common.popCloseAnim = function (node, callback) {
            if (this.getEngine() == ENGINE_TYPE.COCOS) {
                node.scale = 1;
                node.runAction(cc.sequence(cc.scaleTo(0.1, 0, 0), cc.callFunc(function () {
                    if (callback)
                        callback();
                }, this)));
                return;
            }
            callback();
        };
        /*格式化字符，类似于C# String.Format */
        Common.format = function (str) {
            var rep = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rep[_i - 1] = arguments[_i];
            }
            if (typeof (str) == "undefined" || str == null || str == '' || str == 'undefined')
                return str;
            for (var i = 0; i < rep.length; i++) {
                var re = new RegExp('\\{' + (i) + '\\}', 'gm');
                str = str.replace(re, rep[i]);
            }
            return str;
        };
        Common.formatMoney = function (value) {
            var retValue = "0";
            if (isNaN(value))
                value = 0;
            if (value < 9999) {
                retValue = parseInt("" + value);
            }
            else if (value < 9999999) {
                retValue = parseFloat("" + value / 1000).toFixed(2) + "K";
            }
            else if (value < 9999999999) {
                retValue = parseFloat("" + value / 1000000).toFixed(2) + "M";
            }
            else if (value < 9999999999999) {
                retValue = parseFloat("" + value / 1000000000).toFixed(2) + "G";
            }
            else if (value < 9999999999999999) {
                retValue = parseFloat("" + value / 1000000000000).toFixed(2) + "T";
            }
            else if (value < 9999999999999999999)
                retValue = parseFloat("" + value / 1000000000000000).toFixed(2) + "P";
            else if (value < 9999999999999999999999)
                retValue = parseFloat("" + value / 1000000000000000000).toFixed(2) + "E";
            else
                retValue = parseFloat("" + value / 1000000000000000000000).toFixed(2) + "B";
            return retValue;
        };
        return Common;
    }());

    var BaseModule = /** @class */ (function () {
        function BaseModule() {
            this.moduleName = "";
            this.mIntervalArr = {};
            this.mTimeoutArr = {};
        }
        BaseModule.prototype.schedule = function (callback, time) {
            var arg = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                arg[_i - 2] = arguments[_i];
            }
            var self = this;
            var id = setInterval(function () {
                if (callback)
                    callback.apply.apply(callback, __spreadArrays([self], arg));
            }, time * 1000);
            console.log('BaseModule schedule ', id);
            this.mIntervalArr[id] = callback;
        };
        BaseModule.prototype.unschedule = function (callback) {
            for (var key in this.mIntervalArr) {
                if (this.mIntervalArr[key] === callback || Common.isEmpty(this.mIntervalArr[key])) {
                    clearInterval(parseInt(key));
                }
            }
        };
        BaseModule.prototype.scheduleOnce = function (callback, time) {
            var self = this;
            var id = setTimeout(function () {
                clearTimeout(id);
                if (callback)
                    callback.apply(self);
            }, time * 1000);
            this.mTimeoutArr[id] = callback;
        };
        BaseModule.prototype.unscheduleOnce = function (callback) {
            for (var key in this.mTimeoutArr) {
                if (this.mTimeoutArr[key] === callback || Common.isEmpty(this.mTimeoutArr[key])) {
                    clearTimeout(parseInt(key));
                }
            }
        };
        BaseModule.schedule = function (callback, time) {
            var arg = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                arg[_i - 2] = arguments[_i];
            }
            var self = this;
            var id = setInterval(function () {
                if (callback)
                    callback.apply.apply(callback, __spreadArrays([self], arg));
            }, time * 1000);
            console.log('BaseModule schedule ', id);
            this.mIntervalArr[id] = callback;
        };
        BaseModule.unschedule = function (callback) {
            for (var key in this.mIntervalArr) {
                if (this.mIntervalArr[key] === callback || Common.isEmpty(this.mIntervalArr[key])) {
                    clearInterval(parseInt(key));
                }
            }
        };
        BaseModule.scheduleOnce = function (callback, time) {
            var self = this;
            var id = setTimeout(function () {
                clearTimeout(id);
                if (callback)
                    callback.apply(self);
            }, time * 1000);
            this.mTimeoutArr[id] = callback;
        };
        BaseModule.unscheduleOnce = function (callback) {
            for (var key in this.mTimeoutArr) {
                if (this.mTimeoutArr[key] === callback || Common.isEmpty(this.mTimeoutArr[key])) {
                    clearTimeout(parseInt(key));
                }
            }
        };
        BaseModule.prototype.initProperty = function (form) {
            for (var v in form) {
                if (this.hasOwnProperty(v)) {
                    this[v] = form[v];
                }
            }
        };
        BaseModule.prototype.preload = function (url, callback) {
            if (callback)
                callback();
        };
        /**
         *
         */
        BaseModule.prototype._findComponent = function (node, classname) {
            var retValue = null;
            for (var i = 0; i < node._components.length; i++) {
                var logic = node._components[i];
                if (logic.willHide && logic.willShow) {
                    retValue = logic;
                    break;
                }
            }
            return retValue;
        };
        BaseModule.prototype._findComponentByName = function (instance, classname) {
            if (instance) {
                if (instance.name == classname)
                    return true;
                else
                    return this._findComponentByName(instance.$super, classname);
            }
            return false;
        };
        BaseModule.mIntervalArr = {};
        BaseModule.mTimeoutArr = {};
        return BaseModule;
    }());

    var BANNER_POSITION = {
        TOP: "__banner_top",
        CENTER: "__banner_center",
        BOTTOM: "__banner_bottom",
        CUSTOM: "__banner_custom"
    };

    var VIDEO_STATUS = {
        END: "__video_end",
        NOTEND: "__video_not_end",
        ERR: "__video_error"
    };

    var EventType = /** @class */ (function () {
        function EventType() {
        }
        EventType.VIBRATESWITCH_CHANGED = "VIBRATESWITCH_CHANGED";
        EventType.SOUNDSWITCH_CHANGED = "SOUNDSWITCH_CHANGED";
        EventType.MUSICSWITCH_CHANGED = "MUSICSWITCH_CHANGED";
        EventType.ON_PLATFORM_SHOW = "ON_PLATFORM_SHOW";
        EventType.ON_PLATFORM_HIDE = "ON_PLATFORM_HIDE";
        EventType.ON_BANNER_ERROR = "ON_BANNER_ERROR";
        EventType.ON_BANNER_HIDE = "ON_BANNER_HIDE";
        EventType.ON_AD_SHOW = "ON_AD_SHOW";
        EventType.AD_VIEW_CHANGE = "AD_VIEW_CHANGE";
        EventType.AD_VIEW_REFRESH = "AD_VIEW_REFRESH";
        EventType.COIN_CHANGED = "COIN_CHANGED";
        EventType.RANDOWM_NAVIGATE = "RANDOWM_NAVIGATE";
        EventType.COMPONENT_CHECKBOX_TOGGLE = "COMPONENT_CHECKBOX_TOGGLE";
        EventType.PRIZE_BOX_UNLOCAK = "PRIZE_BOX_UNLOCAK";
        return EventType;
    }());

    var MSG = {
        HIDE_BANNER: "隐藏banner",
        INVITE_PLAY_USER: "你的好友{0}邀请你加入",
        BANNER_KEY_IS_NULL: "banner id 没有配置",
        BANNER_SHOW: "显示BANNER",
        BANNER_RESIZE: "banner位置或大小被重新设置",
        NAVIGATE_FAST: "跳转太频繁 >>>>>>>>>>>>>>>>>>>>>",
        NAVIGATE_DATA: "跳转数据",
        SYSTEM_INFO: "设备信息",
        VIDEO_KEY_IS_NULL: "video id 没有配置",
        VIDEO_LOAD_COMPLETED: "加载video成功回调",
        VIDEO_CLOSE_COMPLETED: "video关闭回调",
        VIDEO_ERROR_COMPLETED: "video加载错误",
        NATIVE_LOAD_COMPLETED: "加载原生广告成功",
        NATIVE_ERROR: "原生广告加载出错,使用新ID加载原生广告",
        NATIVE_ERROR2: "原生广告加载出错，本次没有广告",
        NATIVE_NOT_ID_USE: "原生广告ID已经用完，本次没有广告",
        NATIVE_CLICK: "点击了原生广告",
        NATIVE_REPORT: "上报原生广告",
        NATIVE_LIST_NULL: "原生广告数据没有，回调Null",
        NATIVE_DESTROY: "原生广告销毁",
        INTER_KEY_IS_NULL: "插屏广告ID为空，系统不加载",
        ALD_FILE_NO_IMPORT: "阿拉丁文件未引入",
        PLATFORM_UNSUPPORT: "版本过低 平台不支持"
    };

    // var videoLoading: boolean = false;
    // var videoCb = null;
    var PlatformModule = /** @class */ (function (_super) {
        __extends(PlatformModule, _super);
        function PlatformModule() {
            var _this = _super.call(this) || this;
            _this.baseUrl = "https://api.liteplay.com.cn/";
            _this.currentShareCallback = null;
            _this.currentShortCall = null;
            _this.shareFail = null;
            _this.vibrateOn = false;
            _this.systemInfo = null;
            _this.banner = null;
            _this.video = null;
            _this.inter = null;
            _this.native = null;
            _this.box = null;
            _this.platformName = "wx";
            _this.mBannerId = "";
            _this.mBannerIndex = 0;
            _this.mVideoIndex = 0;
            _this.interId = "";
            _this.boxId = "";
            /**
             * https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
             */
            _this.nativeId = [];
            _this.nativeIdIndex = 0;
            _this.bannerWidth = 300;
            _this.bannerHeigth = 96;
            _this.bannerShowCount = 0;
            _this.bannerShowCountLimit = 3;
            _this.bannerShowTime = 0;
            _this.bannerShowTimeLimit = 15;
            _this.bannerLimitType = 0;
            _this.bannerCb = null;
            _this.bannerPosition = BANNER_POSITION.BOTTOM;
            _this.bannerStyle = null;
            _this.isBannerShow = false;
            _this.videoCb = null;
            _this.videoLoading = false;
            _this.videoPlaying = false;
            _this.interShowCount = 0;
            _this.interShowCountLimit = 3;
            _this.isInterLoaded = false;
            _this.nativeAdResult = null;
            _this.nativeCb = null;
            _this.nativeLoading = false;
            _this.recordObj = null;
            _this.shareInfoArr = [];
            _this.versionRet = null;
            _this.prevNavigate = Date.now();
            _this.initAppConfig();
            // this._regisiterWXCallback();
            _this.initShare(true);
            _this.share_clickTime = null; //分享拉起时间
            _this.currentShareCallback = null; //模拟分享回调
            _this.shareFail = false;
            _this.updateProgram();
            _this.initRecord();
            return _this;
        }
        Object.defineProperty(PlatformModule.prototype, "bannerId", {
            get: function () {
                var id = Common.config["bannerId"];
                if (id instanceof Array) {
                    if (this.mBannerIndex > id.length - 1)
                        this.mBannerIndex = 0;
                    // this.mBannerIndex = Common.randomNumBoth(0, id.length - 1);
                    var retValue = id[this.mBannerIndex];
                    this.mBannerIndex++;
                    console.log('使用banner id ', retValue);
                    return retValue;
                }
                else {
                    return id;
                }
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(PlatformModule.prototype, "videoId", {
            get: function () {
                var id = Common.config["videoId"];
                if (id instanceof Array) {
                    if (this.mBannerIndex > id.length - 1)
                        this.mBannerIndex = 0;
                    var retValue = id[this.mBannerIndex];
                    this.mBannerIndex++;
                    console.log('使用 video id ', retValue);
                    return retValue;
                }
                else {
                    return id;
                }
            },
            enumerable: true,
            configurable: true
        });
        ;
        PlatformModule.prototype.onEnable = function () {
        };
        PlatformModule.prototype.vibrateSwitch = function (on) {
            this.vibrateOn = on;
        };
        // lateStart() {
        //     this.updateProgram();
        //     if (!window[this.platformName]) return;
        //     Lite.event.sendEventImmediately('OnWXShow', this.getLaunchOption());
        // }
        PlatformModule.prototype.initAppConfig = function () {
            this.moosnowConfig = Common.config;
            this.interId = this.moosnowConfig["interId"];
            this.boxId = this.moosnowConfig["boxId"];
            this.nativeId = this.moosnowConfig["nativeId"];
            console.log('moosnowConfig ', JSON.stringify(this.moosnowConfig));
        };
        /***
         * 检测IphoneX
         */
        PlatformModule.prototype.isIphoneXModel = function () {
            if (!window[this.platformName])
                return;
            var sysInfo = this.getSystemInfoSync();
            if (/iphone x/.test(sysInfo.model.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        };
        /***
         * 检测Iphone
         */
        PlatformModule.prototype.isIphone = function () {
            if (!window[this.platformName])
                return;
            var sysInfo = this.getSystemInfoSync();
            if (/iphone/.test(sysInfo.model.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        };
        PlatformModule.prototype.isIphoneX = function () {
            if (!window[this.platformName])
                return;
            var sysInfo = this.getSystemInfoSync();
            var screenHeight = sysInfo.screenHeight;
            var screenWidth = sysInfo.screenWidth;
            var ratioWH = screenWidth / screenHeight;
            if (ratioWH <= 0.5 || ratioWH >= 2) {
                return true;
            }
            else {
                return false;
            }
            // let lanscape = screenHeight == 375 && screenWidth == 812;
            // let portrait = screenHeight == 812 && screenWidth == 375;
            // if (lanscape || portrait) {
            //     return true;
            // }
            // return false;
        };
        PlatformModule.prototype.compareVersion = function (v1, v2) {
            v1 = v1.split('.');
            v2 = v2.split('.');
            var len = Math.max(v1.length, v2.length);
            while (v1.length < len) {
                v1.push('0');
            }
            while (v2.length < len) {
                v2.push('0');
            }
            for (var i = 0; i < len; i++) {
                var num1 = parseInt(v1[i]);
                var num2 = parseInt(v2[i]);
                if (num1 > num2) {
                    return 1;
                }
                else if (num1 < num2) {
                    return -1;
                }
            }
            return 0;
        };
        /**
        * 检测版本是否可用
        * @param version 需要检查的版本号
        */
        PlatformModule.prototype.supportVersion = function (version) {
            var sdkVersion = this.getSystemInfoSync().SDKVersion;
            return (this.compareVersion(sdkVersion, version) >= 0);
        };
        /**
         * 是否支持函数
         * @param name
         */
        PlatformModule.prototype.supportFunction = function (name) {
            if (!window[this.platformName])
                return false;
            if (!window[this.platformName][name])
                return false;
            return true;
        };
        /**
         * 检查当前版本的导出广告是否开启
         * @param {string} version 版本号 为了兼容旧版本SDK的参数，目前已无作用，SDK会取moosnowConfig 中的version 来判断
         * @param {*} callback
         * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
         */
        PlatformModule.prototype.checkVersion = function (version, callback) {
            if (this.versionRet != null) {
                callback(this.versionRet);
                return;
            }
            else {
                this._checkConfigVersion(callback);
            }
        };
        PlatformModule.prototype._checkRemoteVersion = function (callback) {
            var _this = this;
            var url = this.baseUrl + 'admin/wx_list/getAppConfig';
            var signParams = {
                appid: this.moosnowConfig.moosnowAppId,
            };
            var data = signParams;
            moosnow.http.request(url, data, 'POST', function (res) {
                _this.versionRet = _this.checkLog(res.data.version);
                callback(_this.versionRet);
            }, function () {
                console.log('checkVersion fail');
            }, function () {
                console.log('checkVersion complete');
            });
        };
        PlatformModule.prototype._checkConfigVersion = function (callback) {
            var _this = this;
            moosnow.http.getAllConfig(function (res) {
                if (res && res.version) {
                    _this.versionRet = _this.checkLog(res.version);
                    callback(_this.versionRet);
                }
                else {
                    _this._checkRemoteVersion(callback);
                }
            });
        };
        PlatformModule.prototype.checkLog = function (remoteVersion) {
            var configVersion = moosnow.platform.moosnowConfig.version;
            var versionRet = remoteVersion == configVersion;
            console.log("\u7248\u672C\u68C0\u67E5 \u540E\u53F0\u7248\u672C" + remoteVersion + " \u914D\u7F6E\u6587\u4EF6\u7248\u672C" + configVersion);
            console.log("获取广告开关：", versionRet);
            return versionRet;
        };
        PlatformModule.prototype.isSmallWidth = function () {
            if (!window[this.platformName])
                return;
            var sysInfo = this.getSystemInfoSync();
            var screenHeight = sysInfo.screenHeight;
            var screenWidth = sysInfo.screenWidth;
            if (screenHeight < 667) {
                console.log('高度不够', screenHeight);
                return true;
            }
            return false;
        };
        PlatformModule.prototype.login = function (success, fail) {
            if (Common.isFunction(success)) {
                var token = moosnow.data.getToken();
                if (!token) {
                    token = Common.generateUUID();
                    token = token.replace(/-/g, '');
                    moosnow.data.setToken(token);
                }
                success(token);
            }
        };
        PlatformModule.prototype.postMessage = function (data) {
            if (!window[this.platformName])
                return;
            // console.log("postMessage:", data);
            if (!window[this.platformName].getOpenDataContext)
                return;
            window[this.platformName].getOpenDataContext().postMessage(data);
        };
        /**
         * 跳转到指定App
         * @param row  跳转数据
         * @param success  跳转成功
         * @param fail 跳转失败
         * @param complete  跳转完成
         */
        PlatformModule.prototype.navigate2Mini = function (row, success, fail, complete) {
            var _this = this;
            console.log(MSG.NAVIGATE_DATA, row);
            if (Date.now() - this.prevNavigate < 300) {
                console.log(MSG.NAVIGATE_FAST);
                return;
            }
            this.prevNavigate = Date.now();
            if (!window[this.platformName]) {
                if (fail)
                    fail();
                // if (success)
                //     success();
                return;
            }
            var appid = row.appid, path = row.path, extraData = row.extraData;
            extraData = extraData || {};
            moosnow.http.navigate(appid, function (res) {
                window[_this.platformName].navigateToMiniProgram({
                    appId: appid,
                    path: path,
                    extraData: extraData,
                    success: function () {
                        moosnow.http.point("跳转", {
                            position: row.position,
                            appid: appid,
                            img: row.atlas || row.img
                        });
                        moosnow.http.navigateEnd(res.code);
                        moosnow.http.exportUser();
                        if (success)
                            success();
                    },
                    fail: function (err) {
                        console.log('navigateToMini fail ', err, ' fail callback ', !!fail);
                        if (fail)
                            fail();
                    },
                    complete: function () {
                        if (complete)
                            complete();
                    }
                });
            });
        };
        /**
         * 更新版本
         */
        PlatformModule.prototype.updateProgram = function () {
            var self = this;
            if (!window[this.platformName])
                return;
            if (typeof window[this.platformName].getUpdateManager === 'function') { // 请在使用前先判断是否支持
                var updateManager_1 = window[this.platformName].getUpdateManager();
                updateManager_1.onCheckForUpdate(function (res) {
                    // 请求完新版本信息的回调
                    // console.log('是否有新版本', res.hasUpdate);
                });
                updateManager_1.onUpdateReady(function (res) {
                    self.showModal('发现新版本', '新版本已经准备好，是否更新？', '取消', '更新', function (res) {
                        if (res)
                            updateManager_1.applyUpdate();
                    });
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                });
                updateManager_1.onUpdateFailed(function () {
                    // 新的版本下载失败
                });
            }
        };
        /**
         * 短震动
         */
        PlatformModule.prototype.vibrateShort = function () {
            if (!window[this.platformName])
                return;
            if (window[this.platformName] && !window[this.platformName].vibrateShort)
                return;
            window[this.platformName].vibrateShort();
        };
        /**
         * 长震动
         */
        PlatformModule.prototype.vibrateLong = function () {
            if (!window[this.platformName])
                return;
            if (window[this.platformName] && !window[this.platformName].vibrateLong)
                return;
            window[this.platformName].vibrateLong();
        };
        PlatformModule.prototype.showLoading = function (title) {
            if (!window[this.platformName]) {
                console.log('showLoading', title);
                return;
            }
            window[this.platformName].showLoading({
                title: title,
                mask: false,
                success: null,
                fail: null,
                complete: null
            });
        };
        PlatformModule.prototype.hideLoading = function () {
            if (!window[this.platformName]) {
                return;
            }
            window[this.platformName].hideLoading();
        };
        PlatformModule.prototype.showModal = function (title, content, cancelTitle, confirmTitle, confirm) {
            if (!window[this.platformName]) {
                return;
            }
            window[this.platformName].showModal({
                title: title,
                content: content,
                cancelText: cancelTitle,
                confirmText: confirmTitle,
                showCancel: true,
                cancelColor: '#000000',
                confirmColor: '#3CC51F',
                fail: null,
                complete: null,
                success: function (res) {
                    if (res.confirm) {
                        if (confirm)
                            confirm(true);
                        // console.log('用户点击确定')
                    }
                    else if (res.cancel) {
                        if (confirm)
                            confirm(false);
                        // console.log('用户点击取消')
                    }
                }
            });
        };
        PlatformModule.prototype.showModalWithoutCancel = function (title, content, confirmTitle, confirm) {
            if (!window[this.platformName]) {
                return;
            }
            window[this.platformName].showModal({
                title: title,
                content: content,
                showCancel: false,
                confirmText: confirmTitle,
                cancelColor: '#000000',
                confirmColor: '#3CC51F',
                cancelText: '',
                fail: null,
                complete: null,
                success: function (res) {
                    if (res.confirm) {
                        if (confirm)
                            confirm(true);
                        // console.log('用户点击确定')
                    }
                    else if (res.cancel) {
                        if (confirm)
                            confirm(false);
                        // console.log('用户点击取消')
                    }
                }
            });
        };
        PlatformModule.prototype.showToast = function (title, toastType, mask) {
            if (toastType === void 0) { toastType = 'none'; }
            if (mask === void 0) { mask = false; }
            if (!window[this.platformName]) {
                return;
            }
            window[this.platformName].showToast({
                title: title,
                icon: toastType,
                duration: 2000,
                mask: mask,
                image: null,
                success: null,
                fail: null,
                complete: null
            });
        };
        PlatformModule.prototype.authOrGetUserInfo = function (callback) {
            if (!window[this.platformName]) {
                return;
            }
            var self = this;
            this.getSetting(function (setting) {
                console.log('授权信息', setting);
                if (setting['scope.userInfo']) {
                    //已经授权
                    self.getUserInfo(function (userInfo) {
                        //获取用户信息成功
                        console.log('获取用户信息：', userInfo);
                        callback(userInfo, false);
                    }, function (error) {
                        //获取用户信息失败
                        // callback(null);
                    });
                }
                else {
                    //未授权
                    self.showUserInfoButton(function (userInfo) {
                        callback(userInfo, true);
                        console.log('授权获取用户信息：', userInfo);
                    });
                }
            }, function (error) {
                //获取授权设置失败
                self.showUserInfoButton(function (userInfo) {
                    callback(userInfo, true);
                    console.log('授权获取用户信息：', userInfo);
                });
            });
        };
        PlatformModule.prototype.showUserInfoButton = function (callback) {
            var obj = {
                type: 'text',
                text: '',
                style: this._initLoginButton(),
            };
            var btn = window[this.platformName].createUserInfoButton(obj);
            btn.onTap(function (res) {
                if (res.userInfo && res.userInfo.nickName) {
                    //授权成功
                    callback(res.userInfo);
                    btn.hide();
                }
                else {
                    //授权失败
                    callback(null);
                }
            });
            btn.show();
        };
        PlatformModule.prototype.getSetting = function (success, fail) {
            window[this.platformName].getSetting({
                success: function (res) {
                    success(res.authSetting);
                    // res.authSetting = {
                    //   "scope.userInfo": true,
                    //   "scope.userLocation": true
                    // }
                },
                fail: function () {
                    fail();
                },
                complete: null,
            });
        };
        PlatformModule.prototype.getUserInfo = function (success, fail) {
            window[this.platformName].getUserInfo({
                success: function (res) {
                    success(res.userInfo);
                },
                fail: function () {
                    fail();
                },
                withCredentials: false,
                complete: null,
                lang: 'en',
            });
        };
        /**
         * 获取游戏启动参数
         * 返回值
         * scene	number	场景值
         * query	Object	启动参数
         * isSticky	boolean	当前小游戏是否被显示在聊天顶部
         * shareTicket	string	shareTicket   分享到群后点击进入小游戏会有此变量
         */
        PlatformModule.prototype.getLaunchOption = function () {
            if (window[this.platformName] && window[this.platformName].getLaunchOptionsSync)
                return window[this.platformName].getLaunchOptionsSync();
            else
                return {};
        };
        /**
         * return obj
         * brand	string	手机品牌
         * model	string	手机型号
         * pixelRatio	number	设备像素比
         * screenWidth	number	屏幕宽度
         * screenHeight	number	屏幕高度
         * windowWidth	number	可使用窗口宽度
         * windowHeight	number	可使用窗口高度
         * language	string	微信设置的语言
         * version	string	微信版本号
         * system	string	操作系统版本
         * platform	string	客户端平台
         * fontSizeSetting	number	用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。	>= 1.5.0
         * SDKVersion	string	客户端基础库版本	                                >= 1.1.0
         * benchmarkLevel	number	性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好(目前设备最高不到50)	                                >= 1.8.0
         * battery	number	电量，范围 1 - 100	                                   >= 1.9.0
         * wifiSignal	number	wifi 信号强度，范围 0 - 4	                        >= 1.9.0
         */
        PlatformModule.prototype.getSystemInfoSync = function () {
            if (this.systemInfo == null) {
                if (window[this.platformName] && window[this.platformName].getSystemInfoSync)
                    this.systemInfo = window[this.platformName].getSystemInfoSync();
                else
                    this.systemInfo = {};
                console.log(MSG.SYSTEM_INFO, this.systemInfo);
            }
            return this.systemInfo;
        };
        /**
         * 横屏还是竖屏
         * @param windowHeight
         * @param windowWidth
         */
        PlatformModule.prototype.isLandscape = function (windowHeight, windowWidth) {
            return windowHeight < windowWidth;
        };
        //-----------------分享------------------
        PlatformModule.prototype.initShare = function (shareInfoArr) {
            var _this = this;
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].showShareMenu)
                return;
            this.shareInfoArr = shareInfoArr;
            window[this.platformName].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline'],
                success: null,
                fail: null,
                complete: null
            });
            if (window[this.platformName].onShareAppMessage)
                window[this.platformName].onShareAppMessage(function () {
                    return _this._buildShareInfo();
                });
            if (window[this.platformName].onShareTimeline)
                // 绑定分享参数
                window[this.platformName].onShareTimeline(function () {
                    return _this._buildShareInfo();
                });
        };
        PlatformModule.prototype.getShareInfo = function (ticket, success, fail) {
            if (fail === void 0) { fail = null; }
            if (!window[this.platformName]) {
                return;
            }
            window[this.platformName].getShareInfo({
                shareTicket: ticket,
                success: function (res) {
                    success(res.encryptedData, res.iv);
                },
                fail: function () {
                    if (fail)
                        fail();
                },
                complete: null,
            });
        };
        /**
         * 分享
         * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }
         * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
         * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
         * @param shortCall 时间过短时回调 ,err 是具体错误信息，目前只在头条分享录屏时用到
         */
        PlatformModule.prototype.share = function (query, callback, shortCall) {
            if (query === void 0) { query = {}; }
            if (!window[this.platformName]) {
                if (callback)
                    callback(true);
                return;
            }
            this.currentShareCallback = callback;
            this.currentShortCall = shortCall;
            this.share_clickTime = Date.now();
            this.shareFail = false;
            this._share(query);
        };
        PlatformModule.prototype.shareWithoutCheck = function (query, callback) {
            if (query === void 0) { query = {}; }
            if (!window[this.platformName]) {
                if (callback)
                    callback(true);
            }
            this.currentShareCallback = callback;
            this.share_clickTime = 1;
            this.shareFail = false;
            this._share(query);
        };
        PlatformModule.prototype._share = function (query) {
            if (query === void 0) { query = null; }
            if (!window[this.platformName]) {
                this.currentShareCallback(true);
                return;
            }
            ;
            ;
            if (!window[this.platformName].shareAppMessage) {
                this.currentShareCallback(true);
                return;
            }
            ;
            var self = this;
            var shareInfo = this._buildShareInfo(query);
            console.log('分享数据：', shareInfo);
            window[this.platformName].shareAppMessage(shareInfo);
        };
        //构建分享内容
        PlatformModule.prototype._buildShareInfo = function (query) {
            if (query === void 0) { query = null; }
            var title = "", imageUrl = "";
            if (this.shareInfoArr.length > 0) {
                var item = this.shareInfoArr[MathUtils.randomNumBoth(0, this.shareInfoArr.length - 1)];
                title = item.title;
                imageUrl = item.img;
            }
            var shareInfo = {
                title: title,
                imageUrl: imageUrl,
                query: query,
            };
            return shareInfo;
        };
        PlatformModule.prototype._onShareback = function () {
            var _this = this;
            var self = this;
            setTimeout(function () {
                if (_this.share_clickTime && _this.currentShareCallback) {
                    // console.log('分享回来:',this.shareFail);
                    if (_this.shareFail) {
                        _this.currentShareCallback(false);
                    }
                    else {
                        if (_this.share_clickTime == 1 || (Date.now() - _this.share_clickTime >= 3 * 1000)) {
                            //分享成功
                            _this.currentShareCallback(true);
                            // console.log('分享成功',this.shareFail);
                        }
                        else {
                            _this.currentShareCallback(false);
                            // console.log('分享失败',this.shareFail);
                        }
                    }
                }
                _this.shareFail = false;
                _this.currentShareCallback = null;
                _this.share_clickTime = null;
            }, 100);
        };
        PlatformModule.prototype._initLoginButton = function () {
            if (!window[this.platformName])
                return;
            var wxsys = window[this.platformName].getSystemInfoSync();
            var style = {
                left: 0,
                top: 0,
                width: wxsys.screenWidth,
                height: wxsys.screenHeight,
                lineHeight: 40,
                // backgroundColor: '#de0000',
                color: '#ffffff',
                type: 'text',
                text: '获取用户信息',
                textAlign: 'center',
                fontSize: 28,
            };
            return style;
        };
        //-----------------录屏 具体逻辑在子类实现------------------
        PlatformModule.prototype.initRecord = function () { };
        PlatformModule.prototype.clipRecord = function () { };
        /**
         * 开始录屏
         * @param duration 录屏时长
         * @param callback 如果不是抖音回调参数=false
         */
        PlatformModule.prototype.startRecord = function (duration, callback) {
            if (duration === void 0) { duration = 300; }
            if (callback === void 0) { callback = null; }
            if (!this.recordObj) {
                if (callback)
                    callback(false);
                return;
            }
        };
        /**
         * 停止录屏
         * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
         */
        PlatformModule.prototype.stopRecord = function (callback) {
            if (callback === void 0) { callback = null; }
            if (!this.recordObj) {
                if (callback)
                    callback(false);
                return;
            }
        };
        PlatformModule.prototype.pauseRecord = function () {
        };
        PlatformModule.prototype.resumeRecord = function () {
        };
        /**
         *
         * @param style
         * @param timeRange
         * @param callback
         */
        PlatformModule.prototype.showShareButton = function (style, timeRange, callback) {
        };
        PlatformModule.prototype.hideShareButton = function () {
        };
        //-----------------注册事件------------------
        /**
         * 注册微信各种回调
         */
        PlatformModule.prototype._regisiterWXCallback = function () {
            if (!window[this.platformName])
                return;
            this._regisiterOnShow();
            this._regisiterOnHide();
        };
        PlatformModule.prototype._regisiterOnShow = function () {
            if (!window[this.platformName].onShow)
                return;
            var self = this;
            window[this.platformName].onShow(function (res) {
                self._onShowCallback(res);
            });
        };
        PlatformModule.prototype._onShowCallback = function (res) {
            this._onShareback();
            console.log('on show ', res);
            moosnow.event.sendEventImmediately(EventType.ON_PLATFORM_SHOW, res);
        };
        PlatformModule.prototype._regisiterOnHide = function () {
            if (!window[this.platformName].onHide)
                return;
            var self = this;
            window[this.platformName].onHide(function (res) {
                self._onHideCallback(res);
            });
        };
        PlatformModule.prototype._onHideCallback = function (res) {
            //Lite.log.log('WX_hide');
            console.log('on show ', res);
            moosnow.event.sendEventImmediately(EventType.ON_PLATFORM_HIDE, res);
            console.log('on hide ', res);
            var isOpend = res && ((res.targetAction == 8 || res.targetAction == 9 || res.targetAction == 10) && res.targetPagePath.length > 50);
            if (isOpend) {
                moosnow.http.clickBanner();
            }
            if (this.bannerCb) {
                this.bannerCb(isOpend);
            }
            else {
                console.log('banner callback is null ');
            }
        };
        //-----------------Banner广告------------------
        PlatformModule.prototype.initBanner = function () {
            if (!window[this.platformName])
                return;
            this._prepareBanner();
        };
        PlatformModule.prototype._prepareBanner = function () {
            if (!window[this.platformName].createBannerAd)
                return;
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            //横屏模式
            if (wxsys.windowHeight < wxsys.windowWidth) {
                if (windowWidth < this.bannerWidth) {
                    this.bannerWidth = windowWidth;
                }
            }
            else {
                //竖屏
                this.bannerWidth = windowWidth;
            }
            if (this.banner) {
                this.banner.offResize(this._bottomCenterBanner);
                this.banner.offError(this._onBannerError);
                this.banner.offLoad(this._onBannerLoad);
                this.banner.destroy();
                this.banner = null;
            }
            this.banner = this._createBannerAd();
            if (this.banner) {
                this.banner.onResize(this._bottomCenterBanner.bind(this));
                this.banner.onError(this._onBannerError.bind(this));
                this.banner.onLoad(this._onBannerLoad.bind(this));
            }
        };
        PlatformModule.prototype._createBannerAd = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var left = (windowWidth - this.bannerWidth) / 2;
            var bannerId = this.bannerId;
            if (Common.isEmpty(bannerId)) {
                console.warn(MSG.BANNER_KEY_IS_NULL);
                return;
            }
            this.bannerShowTime = Date.now();
            var banner = window[this.platformName].createBannerAd({
                adUnitId: bannerId,
                style: {
                    top: windowHeight - this.bannerHeigth,
                    left: left,
                    width: this.bannerWidth
                }
            });
            return banner;
        };
        PlatformModule.prototype._onBannerLoad = function () {
            this.bannerShowCount = 0;
        };
        PlatformModule.prototype._onBannerError = function (err) {
            console.warn('banner___error:', err.errCode, err.errMsg);
            this.banner = null;
            this.isBannerShow = false;
            moosnow.event.sendEventImmediately(EventType.ON_BANNER_HIDE, null);
            moosnow.event.sendEventImmediately(EventType.ON_BANNER_ERROR, null);
        };
        PlatformModule.prototype._bottomCenterBanner = function (size) {
            // if (Common.isEmpty(size)) {
            //     console.log('设置的banner尺寸为空,不做调整')
            //     return;
            // }
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            // let windowHeight = wxsys.windowHeight;
            // this.banner.style.height = size.height;
            this.banner.style.left = (windowWidth - size.width) / 2;
            // this.banner.style.top = windowHeight - size.height;
            this.bannerWidth = this.banner.style.realWidth;
            this.bannerHeigth = this.banner.style.realHeight;
            console.log('_bottomCenterBanner', this.banner.style);
        };
        PlatformModule.prototype._resetBanenrStyle = function (size) {
            if (Common.isEmpty(size)) {
                console.log('设置的banner尺寸为空,不做调整');
                return;
            }
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var top = 0;
            if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
                top = windowHeight - this.bannerHeigth;
            }
            else if (this.bannerPosition == BANNER_POSITION.CENTER)
                top = (windowHeight - this.bannerHeigth) / 2;
            else if (this.bannerPosition == BANNER_POSITION.TOP)
                top = 0;
            if (this.bannerStyle) {
                this.banner.style = this.bannerStyle;
            }
            else {
                this.banner.style.top = top;
                console.log(MSG.BANNER_RESIZE, this.banner.style, 'set top ', top);
            }
        };
        /**
          * 显示平台的banner广告
          * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
          * @param callback 点击回调
          * @param position banner的位置，默认底部
          * @param style 自定义样式
          */
        PlatformModule.prototype.showBanner = function (remoteOn, callback, position, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            console.log(MSG.BANNER_SHOW);
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerPosition = position;
            this.bannerStyle = style;
            if (this.mTimeoutId) {
                clearTimeout(this.mTimeoutId);
                this.mTimeoutId = null;
            }
            if (remoteOn)
                moosnow.http.getAllConfig(function (res) {
                    if (res.mistouchNum == 0) {
                        console.log('后台关闭了banner，不执行显示');
                        return;
                    }
                    else {
                        console.log('后台开启了banner，执行显示');
                        _this._showBanner();
                    }
                });
            else
                this._showBanner();
        };
        PlatformModule.prototype._showBanner = function () {
            var _this = this;
            if (this.banner) {
                console.log('show banner style ', this.banner.style);
                this.banner.hide();
                var showPromise = this.banner.show();
                showPromise && showPromise
                    .then(function () {
                    _this._resetBanenrStyle({
                        width: _this.banner.style.width,
                        height: _this.banner.style.realHeight
                    });
                });
            }
        };
        /**
         * 会自动隐藏的banner
         * 一般用游戏中
         * @param position banner的位置，默认底部
         */
        PlatformModule.prototype.showAutoBanner = function (position) {
            var _this = this;
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            console.log('执行自动显示和隐藏Banner功能');
            moosnow.http.getAllConfig(function (res) {
                if (res && res.gameBanner == 1) {
                    moosnow.platform.showBanner(true, function () { }, position);
                    var time = isNaN(res.gameBanenrHideTime) ? 1 : parseFloat(res.gameBanenrHideTime);
                    _this.mTimeoutId = setTimeout(function () {
                        console.log('自动隐藏时间已到，开始隐藏Banner');
                        if (_this.isBannerShow) {
                            _this.hideBanner();
                        }
                        else {
                            _this.hideBanner();
                        }
                    }, time * 1000);
                }
            });
        };
        PlatformModule.prototype.exitApplication = function () {
        };
        /**
         * 连续不断的显示和隐藏 banner
         * @param position
         */
        PlatformModule.prototype.showIntervalBanner = function (position) {
            var _this = this;
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            console.log('执行 showIntervalBanner');
            moosnow.http.getAllConfig(function (res) {
                var gameBannerInterval = res && !isNaN(res.gameBannerInterval) ? parseFloat(res.gameBannerInterval) : 20;
                _this.showAutoBanner(position);
                _this.schedule(_this.showAutoBanner, gameBannerInterval, [position]);
            });
        };
        /**
         * 取消banner
         */
        PlatformModule.prototype.clearIntervalBanner = function () {
            console.log('执行 clearIntervalBanner');
            this.unschedule(this.showAutoBanner);
        };
        /**
         * 隐藏banner
         */
        PlatformModule.prototype.hideBanner = function () {
            console.log(MSG.HIDE_BANNER);
            if (!this.isBannerShow)
                return;
            this.isBannerShow = false;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerShowCount++;
            if (this.banner) {
                if (this.bannerLimitType == 0) {
                    if (this.bannerShowCount >= this.bannerShowCountLimit) {
                        console.log('次数满足,销毁banner');
                        this.banner.hide();
                        this.banner.destroy();
                        this.banner = null;
                        this._prepareBanner();
                        // console.log('banner---destory');
                    }
                    else {
                        this.banner.hide();
                    }
                }
                else {
                    if (Date.now() - this.bannerShowTime > this.bannerShowTimeLimit * 1000) {
                        console.log('时间满足，销毁banner');
                        this.banner.hide();
                        this.banner.destroy();
                        this.banner = null;
                        this._prepareBanner();
                    }
                    else {
                        console.log('时间太短，隐藏banner');
                        this.banner.hide();
                    }
                }
            }
            else {
                this._prepareBanner();
            }
        };
        //------------广告video------------
        PlatformModule.prototype.initVideo = function () {
            this.createRewardAD(false);
        };
        PlatformModule.prototype.createRewardAD = function (show) {
            var _this = this;
            if (moosnow.platform.videoLoading) {
                return;
            }
            if (!window[this.platformName]) {
                moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!window[this.platformName].createRewardedVideoAd) {
                moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            var videoId = this.videoId;
            if (Common.isEmpty(videoId)) {
                console.warn(MSG.VIDEO_KEY_IS_NULL);
                moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!this.video) {
                this.video = window[this.platformName].createRewardedVideoAd({
                    adUnitId: videoId
                });
                if (!this.video) {
                    console.warn('创建视频广告失败');
                    return;
                }
                this.video.onError(this._onVideoError);
                this.video.onClose(this._onVideoClose);
                this.video.onLoad(this._onVideoLoad);
            }
            moosnow.platform.videoLoading = true;
            moosnow.platform.videoPlaying = false;
            this.video.load()
                .then(function () {
                if (show) {
                    _this.video.show().then(function () { }).catch(function (err) {
                        _this._onVideoError(err.errMsg, err.errCode);
                        console.log(err.errMsg);
                    });
                }
            }).catch(function (err) {
                _this._onVideoError(err.errMsg, err.errCode);
                console.log(err.errMsg);
            });
        };
        PlatformModule.prototype._onVideoError = function (msg, code) {
            console.log(MSG.VIDEO_ERROR_COMPLETED, msg, code);
            moosnow.platform.videoLoading = false;
            moosnow.platform.videoPlaying = false;
            if (moosnow.platform.videoCb) {
                moosnow.platform.videoCb(VIDEO_STATUS.ERR);
                moosnow.platform.videoCb = null;
            }
        };
        PlatformModule.prototype._onVideoClose = function (isEnd) {
            console.log(MSG.VIDEO_CLOSE_COMPLETED, isEnd.isEnded);
            moosnow.platform.videoLoading = false;
            moosnow.platform.videoPlaying = false;
            if (!!isEnd.isEnded) {
                moosnow.http.clickVideo();
            }
            if (moosnow.platform.videoCb) {
                var ret_1 = (!!isEnd.isEnded) ? VIDEO_STATUS.END : VIDEO_STATUS.NOTEND;
                setTimeout(function () {
                    moosnow.platform.videoCb(ret_1);
                }, 50);
            }
        };
        PlatformModule.prototype._onVideoLoad = function () {
            console.log(MSG.VIDEO_LOAD_COMPLETED);
            moosnow.platform.videoLoading = false;
        };
        /**
         * 唤起视频
         * @param completeCallback
         */
        PlatformModule.prototype.showVideo = function (completeCallback) {
            if (completeCallback === void 0) { completeCallback = null; }
            console.log('显示video');
            moosnow.platform.videoCb = completeCallback;
            this.createRewardAD(true);
        };
        //--------------插屏广告---------------
        PlatformModule.prototype.initInter = function () {
            this.prepareInter();
        };
        PlatformModule.prototype.prepareInter = function () {
            if (!window[this.platformName])
                return;
            if (typeof window[this.platformName].createInterstitialAd != "function")
                return;
            if (!this.supportVersion('2.8.0'))
                return;
            if (Common.isEmpty(this.interId)) {
                console.warn(MSG.INTER_KEY_IS_NULL);
                return;
            }
            this.inter = window[this.platformName].createInterstitialAd({
                adUnitId: this.interId
            });
            this.inter.onLoad(this._onInterLoad.bind(this));
            this.inter.onClose(this._onInterClose.bind(this));
            // this.inter.load();
        };
        PlatformModule.prototype.showInter = function () {
            if (!this.inter)
                return;
            if (this.isInterLoaded)
                this.inter.show();
        };
        PlatformModule.prototype._onInterLoad = function () {
            this.interShowCount = 0;
            this.isInterLoaded = true;
            console.log('插屏广告加载完成');
        };
        PlatformModule.prototype._onInterClose = function () {
            this.interShowCount++;
            if (this.interShowCount >= this.interShowCountLimit) {
                this.isInterLoaded = false;
                this.inter.load();
            }
        };
        PlatformModule.prototype._onInterError = function (err) {
            console.log("\u63D2\u5C4F\u5E7F\u544A\u51FA\u9519\uFF1A", err);
        };
        PlatformModule.prototype._prepareNative = function () {
        };
        PlatformModule.prototype._onNativeLoad = function (res) {
        };
        PlatformModule.prototype._onNativeError = function (err) {
        };
        PlatformModule.prototype._destroyNative = function () {
        };
        /**
         * 目前只有OPPO平台有此功能
         * 返回原生广告数据，开发者根据返回的数据来展现
         * 没有广告返回null
         *
         *
         * 例如 cocos
         * let adData=moosnow.platform.getNativeAd();
         * cc.loader.load(adData.imgUrlList[0], (err, texture) => {
         *   adImg.active = true
         *   adImg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
         * })
         *
         * 例如 laya
         * let adData=moosnow.platform.getNativeAd();
         * new Laya.Image().skin=adData.imgUrlList[0];
         *
         * @param callback 回调函数
         */
        PlatformModule.prototype.showNativeAd = function (callback) {
            if (Common.isFunction(callback))
                callback();
        };
        /**
         * 目前只有OPPO平台有此功能
         * 用户点击了展示原生广告的图片时，使用此方法
         * 例如 cocos
         * this.node.on(cc.Node.EventType.TOUCH_END, () => {
         *     moosnow.platform.clickNative();
         * }, this)
         *
         *
         * 例如 laya
         * (new Laya.Image()).on(Laya.Event.MOUSE_UP, this, () => {
         *     moosnow.platform.clickNative();
         * })
         *
         */
        PlatformModule.prototype.clickNative = function (callback) {
        };
        /**
        * 盒子广告
        * @param callback 关闭回调
        * @param remoteOn 被后台开关控制
        */
        PlatformModule.prototype.showAppBox = function (callback, remoteOn) {
            if (remoteOn === void 0) { remoteOn = true; }
            if (Common.isFunction(callback))
                callback();
        };
        /**
         *
         * @param callback
         */
        PlatformModule.prototype.hideAppBox = function (callback) {
            if (Common.isFunction(callback))
                callback();
        };
        /**
         * 平台数据上报
         * @param name
         * @param value
         */
        PlatformModule.prototype.reportMonitor = function (name, value) {
        };
        /**
         * 更多游戏按钮
         * @param url
         * @param callback
         * @param style
         */
        PlatformModule.prototype.showMoreGameButton = function (url, callback, style) {
            if (style === void 0) { style = null; }
            if (callback)
                callback();
        };
        //----自定义--
        PlatformModule.prototype.initRank = function () {
            var data = {
                action: 1,
            };
            this.postMessage(data);
        };
        PlatformModule.prototype.showRank = function () {
            var data = {
                action: 10,
            };
            this.postMessage(data);
        };
        PlatformModule.prototype.updateUserScore = function (score) {
            var data = {
                action: 13,
                data: score,
            };
            this.postMessage(data);
        };
        PlatformModule.prototype.hideRank = function () {
            var data = {
                action: 20,
            };
            this.postMessage(data);
        };
        /**
         * 用户是否关注抖音号
         * @param success
         * @param fail
         */
        PlatformModule.prototype.checkFollowAwemeSate = function (success, fail) {
            if (success)
                success(true);
        };
        /**
         * 调用后跳转个人主页，并且回调关注成功/失败回调，异步回调接口
         * @param success
         * @param fail
         */
        PlatformModule.prototype.openAwemeUserProile = function (success, fail) {
            if (success)
                success(true);
        };
        PlatformModule.prototype.hasShortcutInstalled = function (success) {
            success(false);
        };
        PlatformModule.prototype.installShortcut = function (success, message) {
            if (message === void 0) { message = "方便下次快速启动"; }
        };
        PlatformModule.prototype.onDisable = function () {
        };
        return PlatformModule;
    }(BaseModule));

    /**
     * 微信平台
     */
    var WXModule = /** @class */ (function (_super) {
        __extends(WXModule, _super);
        function WXModule() {
            var _this = _super.call(this) || this;
            _this.platformName = "wx";
            _this.writeTime = 0;
            _this.recordCb = null;
            _this._regisiterWXCallback();
            _this.initBanner();
            _this.initInter();
            return _this;
        }
        /**
         * 游戏登录
         * @param callback
         * @param fail
         */
        WXModule.prototype.login = function (callback, fail) {
            moosnow.http.getAllConfig(function (res) {
            });
            var self = this;
            var userToken = moosnow.data.getToken();
            if (userToken) {
                self.getUserToken("", userToken, callback);
            }
            else {
                if (window[this.platformName] && window[this.platformName].login)
                    window[this.platformName].login({
                        success: function (res) {
                            if (res.code) {
                                //发起网络请求
                                self.getUserToken(res.code, "", callback);
                            }
                            else {
                                if (Common.isFunction(callback))
                                    callback();
                            }
                        },
                        fail: function () {
                        }
                    });
                else {
                    _super.prototype.login.call(this, callback, fail);
                }
            }
        };
        /**
         *
         * @param code
         * @param user_id
         * @param callback
         */
        WXModule.prototype.getUserToken = function (code, user_id, callback) {
            var options = this.getLaunchOption();
            var scene = options.scene;
            var channel_id = options.query && options.query.channel_id ? options.query.channel_id : "0";
            var channel_appid = options.referrerInfo && options.referrerInfo.appId ? options.referrerInfo.appId : "0";
            moosnow.data.setChannelAppId(channel_appid);
            moosnow.data.setChannelId(channel_id);
            var fromApp = options.referrerInfo ? options.referrerInfo.appId : '未知';
            if (window[this.platformName] && window[this.platformName].aldSendEvent) {
                window[this.platformName].aldSendEvent("来源", {
                    origin: fromApp,
                    path: options.query.from || 0
                });
            }
            moosnow.http.request(this.baseUrl + "api/channel/login.html", {
                appid: Common.config.moosnowAppId,
                code: code,
                user_id: user_id,
                channel_id: channel_id,
                channel_appid: channel_appid,
                scene: scene, fromApp: fromApp
            }, "POST", function (respone) {
                if (respone.code == 0 && respone.data && respone.data.user_id) {
                    moosnow.data.setToken(respone.data.user_id);
                }
                if (Common.isFunction(callback))
                    callback(respone);
            }, function () {
                //如果出错，不影响游戏
                if (Common.isFunction(callback))
                    callback({});
            });
        };
        WXModule.prototype.initRecord = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].getGameRecorder)
                return;
            // if (!this.isDouyin()) return;
            this.recordObj = window[this.platformName].getGameRecorder();
        };
        /**
         * 开始录屏
         * @param duration 录屏时长
         * @param callback 如果不是抖音回调参数=false
         */
        WXModule.prototype.startRecord = function (duration, callback) {
            var _this = this;
            if (duration === void 0) { duration = 300; }
            if (callback === void 0) { callback = null; }
            console.log('record startRecord');
            if (!this.recordObj) {
                if (callback)
                    callback(false);
                return;
            }
            this.recordObj.start()
                .then(function (res) {
                _this.recordObj.on('timeUpdate', function (res) {
                    console.log("\u89C6\u9891\u65F6\u957F: " + res.currentTime);
                    _this.writeTime = Math.min(res.currentTime, 60000);
                });
                _this.recordObj.on('start', function () {
                    if (callback)
                        callback();
                });
                // stop 事件的回调函数的执行表示录制完成
                _this.recordObj.on('stop', function (res) {
                    console.log("\u5BF9\u5C40\u56DE\u653E\u65F6\u957F: ", res);
                    if (_this.recordCb)
                        _this.recordCb(res);
                });
            });
        };
        /**
        * 停止录屏
        * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
        */
        WXModule.prototype.stopRecord = function (callback) {
            var _this = this;
            if (callback === void 0) { callback = null; }
            console.log(' stop Record  callback  ', !!callback);
            if (!this.recordObj) {
                if (callback)
                    callback(false);
                return;
            }
            this.recordCb = callback;
            var stopPromise = this.recordObj.stop();
            stopPromise && stopPromise.then(function (res) {
                if (!res.error.code) {
                    _this.recordObj.off('timeUpdate');
                    // this.showShareButton(
                    //     () => {
                    //     }
                    // );
                }
                console.log(' stop Record  then  ', res);
            })
                .catch(function (res) {
                console.log(' stop Record  catch  ', res);
            });
        };
        WXModule.prototype.pauseRecord = function () {
            if (this.recordObj) {
                this.recordObj.pause();
            }
        };
        WXModule.prototype.resumeRecord = function () {
            if (this.recordObj) {
                this.recordObj.resume();
            }
        };
        WXModule.prototype.showShareButton = function (style, timeRange, callback) {
            var _this = this;
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createGameRecorderShareButton)
                return;
            if (!timeRange)
                timeRange = [[0, this.writeTime]];
            moosnow.http.getAllConfig(function (res) {
                //     sys.pixelRatio
                // if (style.left == "center") {
                //     let sys = this.getSystemInfoSync();
                //     style.left = (sys.windowWidth - 168) / 2
                // }
                _this.mShareButton = window[_this.platformName].createGameRecorderShareButton({
                    // 样式参数
                    style: __assign(__assign({ left: 10, top: 150, height: 50 }, style), { color: '#ffffff', textAlign: 'center', fontSize: 16, borderRadius: 4, iconMarginRight: 16, paddingLeft: 1, paddingRight: 30 }),
                    // 按钮的背景图片
                    text: res.shareButtonText || "",
                    image: res.shareBgImage || "",
                    icon: res.shareIconImage || "",
                    // 分享参数
                    share: {
                        query: 'a=1&b=2',
                        // 背景音乐的路径
                        bgm: '',
                        timeRange: timeRange
                    }
                });
                _this.mShareButton.show();
                _this.mShareButton.onTap(function (res) {
                    console.log("\u9519\u8BEF\u7801\uFF1A" + res.error.code + "\uFF0C\u9519\u8BEF\u4FE1\u606F\uFF1A" + res.error.message);
                    if (callback)
                        callback(res);
                });
            });
        };
        WXModule.prototype.hideShareButton = function () {
            if (this.mShareButton) {
                this.mShareButton.hide();
            }
        };
        return WXModule;
    }(PlatformModule));

    var AdModule = /** @class */ (function (_super) {
        __extends(AdModule, _super);
        function AdModule() {
            var _this = _super.call(this) || this;
            _this.baseUrl = "https://api.liteplay.com.cn/admin/";
            _this.cacheImage = null;
            _this.cacheKey = "cacheUrl";
            _this.getResUrl = function (localUrl) {
                for (var key in this.this.cacheImage) {
                    if (this.this.cacheImage[key] == localUrl)
                        return key;
                }
                return "";
            };
            _this.convertToCacheUrl = function (imgUrl, callback) {
                if (!this.cacheImage[imgUrl]) {
                    this.downloadImage(imgUrl, function (url) {
                        callback(url);
                    });
                }
                else {
                    callback(this.cacheImage[imgUrl]);
                }
            };
            _this.saveCacheUrl = function (retValue) {
                var clearItem = [];
                var fileSystemManager = window["wx"].getFileSystemManager();
                for (var url in this.cacheImage) {
                    var removeUrl = true;
                    for (var pos in retValue) {
                        for (var i = 0; i < retValue[pos].length; i++) {
                            if (retValue[pos][i].atlas == this.cacheImage[url] || retValue[pos][i].img == this.cacheImage[url]) {
                                removeUrl = false;
                            }
                        }
                    }
                    if (removeUrl) {
                        clearItem.push(url);
                    }
                }
                for (var i = 0; i < clearItem.length; i++) {
                    if (clearItem[i]) {
                        console.log('clear file ', clearItem[i]);
                        try {
                            fileSystemManager.removeSavedFile(clearItem[i]);
                        }
                        catch (e) {
                            console.log('clear file error ', clearItem[i]);
                        }
                    }
                    delete this.cacheImage[clearItem[i]];
                }
                if (window["wx"])
                    window["wx"].setStorage({
                        key: this.cacheKey,
                        data: this.cacheImage,
                        success: function () { },
                        fail: function () { },
                        complete: function () { }
                    });
            };
            _this.mMemory = {};
            _this.getCache = function () {
                return this.mMemory;
            };
            _this.setCache = function (val) {
                this.mMemory = val;
            };
            return _this;
        }
        /**
         * 随机去除重复数据
         * @param source
         */
        AdModule.prototype.getDistinctAd = function (source) {
            var retValue = [];
            var retValue2 = [];
            //第一步随机打乱    
            var temp = source.sort(function (a, b) {
                return Math.random() > 0.5 ? 1 : -1;
            });
            for (var i = 0; i < temp.length; i++) {
                var item = temp[i];
                var append = true;
                for (var j = 0; j < retValue.length; j++) {
                    var retItem = retValue[j];
                    if (retItem.appid == item.appid) {
                        append = false;
                        break;
                    }
                }
                if (append)
                    retValue.push(item);
                else
                    retValue2.push(item);
            }
            return __spreadArrays(retValue, retValue2);
        };
        /**
         * 获取广告数据 目前仅有indexLeft提供使用
         * @param {Function} callback
         * @returns  more 更多好玩 个人中心的广告 现已经不用了
         *   promotion 首页推广   首页开始按钮下的广告
         *   indexFloat 首页浮动广告 首页右上的广告
         *   indexLeft 首页侧栏
         *   gameFloat 游戏页浮动广告
         *   endPage 结束页广告
         */
        AdModule.prototype.getAd = function (callback) {
            var _this = this;
            var cache = this.getCache();
            if (!Common.isEmpty(cache.indexLeft)) {
                var distinctAd = this.getDistinctAd(cache.indexLeft);
                var temp = __assign(__assign({}, cache), { indexLeft: distinctAd });
                callback(temp);
            }
            else
                this.getRemoteAd(function (res) {
                    var retValue = _this.initRetValue();
                    // if (window["wx"])
                    //     loadCacheImage(() => {
                    //         res.forEach(item => {
                    //             let remoteUrl = item.atlas ? item.atlas : item.img
                    //             convertToCacheUrl(remoteUrl, function (url) {
                    //                 if (item.atlas)
                    //                     item.atlas = url;
                    //                 if (item.img)
                    //                     item.img = url;
                    //                 retValue = formatRow(retValue, item);
                    //                 if ((retValue.indexLeft.length
                    //                     + retValue.indexFloat.length
                    //                     + retValue.indexBanner.length
                    //                     + retValue.gameEndPage.length
                    //                     + retValue.gameRespawnPage.length
                    //                     + retValue.exportPage.length
                    //                 ) == res.length) {
                    //                     saveCacheUrl(retValue);
                    //                     setCache(retValue)
                    //                     callback(retValue)
                    //                 }
                    //             })
                    //         })
                    //     })
                    // else {
                    // }
                    res.forEach(function (item) {
                        retValue = _this.formatRow(retValue, item);
                    });
                    _this.setCache(retValue);
                    var distinctAd = _this.getDistinctAd(retValue.indexLeft);
                    var temp = __assign(__assign({}, cache), { indexLeft: distinctAd });
                    callback(temp);
                });
        };
        AdModule.prototype.getRemoteAd = function (cb) {
            cb([]);
        };
        AdModule.prototype.loadCacheImage = function (callback) {
            var _this = this;
            if (this.cacheImage) {
                callback(this.cacheImage);
            }
            else
                wx.getStorage({
                    key: this.cacheKey,
                    success: function (storageVal) {
                        this.this.cacheImage = storageVal.data;
                        console.log('cacheKey data  ', storageVal.data);
                    },
                    fail: function () {
                        _this.cacheImage = {};
                        console.log('cacheKey error ');
                    },
                    complete: function () {
                        callback(this.this.cacheImage);
                    }
                });
        };
        AdModule.prototype.initRetValue = function () {
            var retValue = {
                /**
                 * 首页开始按钮下的广告
                 */
                indexBanner: [],
                /**
                 * 首页右上的浮动广告
                 */
                indexFloat: [],
                /**
                 * 首页侧栏
                 */
                indexLeft: [],
                /**
                 * 游戏结束
                 */
                gameEndPage: [],
                /**
                 * 复活页
                 */
                gameRespawnPage: [],
                /**
                 * 导出页
                 */
                exportPage: [],
            };
            return retValue;
        };
        AdModule.prototype.formatRow = function (retValue, item) {
            switch (item.position) {
                case '1':
                    retValue.indexLeft.push(item);
                    break;
                case '2':
                    retValue.indexFloat.push(item);
                    break;
                case '3':
                    retValue.indexBanner.push(item);
                    break;
                case '4':
                    retValue.gameEndPage.push(item);
                    break;
                case '5':
                    retValue.gameRespawnPage.push(item);
                    break;
                case '6':
                    retValue.exportPage.push(item);
                    break;
                default:
                    retValue.indexLeft.push(item);
                    break;
            }
            return retValue;
        };
        AdModule.prototype.downloadImage = function (imgUrl, callback) {
            if (window["wx"])
                wx.downloadFile({
                    header: {},
                    url: imgUrl,
                    success: function (res) {
                        var _this = this;
                        if (res.statusCode === 200) {
                            wx.saveFile({
                                tempFilePath: res.tempFilePath,
                                success: function (res) {
                                    _this.cacheImage["" + imgUrl] = res.savedFilePath;
                                    callback(res.savedFilePath);
                                },
                                fail: function () {
                                    callback(imgUrl);
                                },
                                complete: function () {
                                },
                            });
                        }
                    },
                    fail: function () {
                        callback(imgUrl);
                    },
                    complete: function () {
                    },
                });
            else
                callback(imgUrl);
        };
        return AdModule;
    }(BaseModule));

    var ROOT_CONFIG = {
        UI_ROOT: "moosnow/prefab/ui/",
        ENTITY_ROOT: "moosnow/prefab/entity/",
        HTTP_ROOT: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com",
    };

    var ErrorType = {
        ONERROR: "HTTP协议链接出错",
        ONTIMEOUT: "HTTP协议链接超时",
        POSTERROR: "HTTP协议请求出错",
        RETURNERROR: "服务器返回错误code"
    };
    var GAME_COMMAND = {
        VERIFY_USER: 1,
        CREATE_ROLE: 2,
        CAPTAIN: 3
    };
    var HttpModule = /** @class */ (function (_super) {
        __extends(HttpModule, _super);
        function HttpModule() {
            var _this = _super.call(this) || this;
            _this.appid = "";
            _this.secret = "";
            _this.versionNumber = "";
            _this.version = "2.1.0";
            _this.baseUrl = "https://api.liteplay.com.cn/";
            _this.mLaunchOptions = {};
            _this.cfgData = null;
            _this.areaData = null;
            _this._cfgQuene = [];
            _this._localQuene = [];
            var versionUrl = ROOT_CONFIG.HTTP_ROOT + "/SDK/version.json?t=" + Date.now();
            if (Common.platform == PlatformType.PC) {
                _this.request(versionUrl, {}, 'GET', function (res) {
                    if (_this.version < res.version) {
                        console.warn("\u60A8\u7684SDK\u7248\u672C\u53F7[" + _this.version + "]\u4E0D\u662F\u6700\u65B0\u7248\u672C\uFF0C\u8BF7\u5C3D\u5FEB\u5347\u7EA7\uFF0C\u6700\u65B0\u7248\u672C[" + res.version + "]  \u4E0B\u8F7D\u5730\u5740\uFF1A" + res.download);
                        if (!Common.isEmpty(res.memo))
                            console.warn("" + res.memo);
                    }
                });
            }
            else if (Common.platform == PlatformType.WX && window["wx"]) {
                _this.request(versionUrl, {}, 'GET', function (res) {
                    var aldVersion = window["wx"]["aldVersion"];
                    if (!aldVersion || (aldVersion && aldVersion < res.aldVersion))
                        console.warn("\u963F\u62C9\u4E01\u6587\u4EF6\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u4E0B\u8F7D" + res.aldUrl);
                });
            }
            _this.getShareInfo(function (data) {
                moosnow.platform.initShare(data);
            });
            _this.loadCfg(function (res) {
                console.log('remote config ', res);
            });
            return _this;
        }
        Object.defineProperty(HttpModule.prototype, "appLaunchOptions", {
            get: function () {
                if (!this.mLaunchOptions) {
                    if (moosnow.platform && moosnow.platform.getLaunchOption)
                        this.mLaunchOptions = moosnow.platform.getLaunchOption();
                }
                return this.mLaunchOptions;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 请求服务
         * @param {*} url
         * @param {*} data
         * @param {*} method
         * @param {*} success
         * @param {*} fail
         * @param {*} complete
         */
        HttpModule.prototype.request = function (url, data, method, success, fail, complete) {
            var newUrl = "";
            newUrl = url;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    var response = xhr.responseText;
                    if (xhr.status >= 200 && xhr.status < 400) {
                        var result = {};
                        try {
                            result = JSON.parse(response);
                        }
                        catch (e) {
                            console.error('json parse error ', response);
                            if (fail)
                                fail(e);
                        }
                        // }
                        if (success)
                            success(result);
                    }
                    else {
                        console.warn('error ', response);
                        if (fail)
                            fail(response);
                    }
                }
                else {
                    // cc.log('caller state change  ', xhr)
                    // console.log('caller state change  ', xhr)
                }
            };
            xhr.timeout = 10000;
            xhr.ontimeout = function (event) {
                console.error('error ', event);
                if (fail)
                    fail(event);
            };
            if (method == "POST") {
                xhr.open('POST', newUrl);
                xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
                xhr.send(this._object2Query(data));
            }
            else {
                xhr.open(method, newUrl, true);
                xhr.send();
            }
        };
        HttpModule.prototype._object2Query = function (obj) {
            var args = [];
            for (var k in obj)
                args.push(k + "=" + obj[k]);
            return args.join("&"); // 返回对象  
        };
        HttpModule.prototype.isDisableArea = function (callback) {
        };
        /**
           * Loading加载完成
           */
        HttpModule.prototype.finishLoading = function () {
            this.postData('api/channel/validUser.html');
        };
        /**
          * 点击了banner
          */
        HttpModule.prototype.clickBanner = function () {
            this.postData('api/channel/clickBanner.html');
        };
        /**
         * 看完了视频
         */
        HttpModule.prototype.clickVideo = function () {
            this.postData('api/channel/clickVideo.html');
        };
        /**
         * 导出跳转
         */
        HttpModule.prototype.exportUser = function () {
            this.postData('api/channel/exportUser.html');
        };
        /**
         * 跳转记录
         * @param jump_appid
         * @param callback
         */
        HttpModule.prototype.navigate = function (jump_appid, callback) {
            var userToken = moosnow.data.getToken();
            this.request(this.baseUrl + "api/jump/record", {
                appid: Common.config.moosnowAppId,
                uid: userToken,
                jump_appid: jump_appid,
            }, "POST", function (respone) {
                console.log('navigate', respone);
                if (callback)
                    callback(respone.data);
            });
        };
        /**
         * 跳转完成
         * @param code
         */
        HttpModule.prototype.navigateEnd = function (code) {
            this.request(this.baseUrl + "api/jump/status", {
                code: code
            }, "POST", function (respone) {
                console.log('navigateEnd code ', code, respone);
            });
        };
        /**
         *
         * @param url
         */
        HttpModule.prototype.postData = function (url) {
            var userToken = moosnow.data.getToken();
            if (!Common.isEmpty(userToken) && moosnow.data.getChannelId() != "0" && moosnow.data.getChannelAppId() != "0") {
                try {
                    this.request("" + this.baseUrl + url, {
                        appid: Common.config.moosnowAppId,
                        user_id: userToken,
                        channel_id: moosnow.data.getChannelId(),
                        channel_appid: moosnow.data.getChannelAppId()
                    }, "POST", function (respone) {
                    });
                }
                catch (e) {
                    console.log('postData error ', e);
                }
            }
        };
        /**
         * 数据打点
         * @param name  打点名称
         */
        HttpModule.prototype.point = function (name, data) {
            if (data === void 0) { data = null; }
            if (Common.platform == PlatformType.WX) {
                if (window['wx'] && window['wx'].aldSendEvent)
                    window['wx'].aldSendEvent(name, data);
            }
        };
        /**
        * 统计开始游戏
        * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
        */
        HttpModule.prototype.startGame = function (level) {
            if (Common.platform == PlatformType.WX)
                if (window['wx'] && window['wx'].aldStage)
                    window['wx'].aldStage.onStart({
                        stageId: "" + level,
                        stageName: "" + level,
                        userId: moosnow.data.getToken() //用户ID
                    });
                else
                    console.warn(MSG.ALD_FILE_NO_IMPORT);
        };
        /**
         * 统计结束游戏
         * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
         * @param {boolean} isWin 是否成功
         */
        HttpModule.prototype.endGame = function (level, isWin) {
            if (Common.platform != PlatformType.WX)
                return;
            var event = isWin ? "complete" : "fail";
            var desc = isWin ? "关卡完成" : "关卡失败";
            if (window['wx'] && window['wx'].aldStage)
                window['wx'].aldStage.onEnd({
                    stageId: "" + level,
                    stageName: "" + level,
                    userId: moosnow.data.getToken(),
                    event: event,
                    params: {
                        desc: desc //描述
                    }
                });
            else
                console.warn(MSG.ALD_FILE_NO_IMPORT);
        };
        /**
         * 视频统计
         * @param {number} type 0：视频点击 1：视频观看完成
         * @param {string} info 信息 ex:“领取三倍金币”
         * @param {string} level 关卡数
         */
        HttpModule.prototype.videoPoint = function (type, info, level) {
            if (Common.platform != PlatformType.WX)
                return;
            var name = type == 0 ? "点击视频" : "观看完成视频";
            if (window['wx'] && window['wx'].aldSendEvent)
                window['wx'].aldSendEvent(name, { info: info, level: level + "" });
            else
                console.warn(MSG.ALD_FILE_NO_IMPORT);
        };
        /**
         *
         * @param callback
         */
        HttpModule.prototype.getAllConfig = function (callback) {
            var _this = this;
            this.loadCfg(function (res) {
                _this.loadArea(function (res2) {
                    _this.disableAd(res, res2, function (disable) {
                        var exportAutoNavigate = 0;
                        if (disable) {
                            //exportAutoNavigate 是否自动唤起跳转（强导） 0 关闭 1 开启(受屏蔽地区影响) 2开启（不受屏蔽地区影响）
                            if (res.exportAutoNavigate == 1)
                                exportAutoNavigate = 0;
                            if (res.exportAutoNavigate == 2)
                                exportAutoNavigate = 1;
                            callback(__assign(__assign({}, res), { mistouchNum: 0, mistouchPosNum: 0, mistouchInterval: 0, exportBtnNavigate: 0, checkBoxMistouch: 0, exportAutoNavigate: exportAutoNavigate, bannerShowCountLimit: 1, isLimitArea: 1, nativeErrorShowInter: 0, bannerErrorShowInter: 0 }));
                        }
                        else {
                            if (res.exportAutoNavigate == 1)
                                exportAutoNavigate = 1;
                            if (res.exportAutoNavigate == 2)
                                exportAutoNavigate = 1;
                            callback(__assign(__assign({}, res), { exportAutoNavigate: exportAutoNavigate, isLimitArea: 0 }));
                        }
                    });
                });
            });
        };
        HttpModule.prototype.loadCfg = function (callback) {
            var _this = this;
            if (!Common.isEmpty(this.cfgData)) {
                callback(this.cfgData);
            }
            else {
                this._cfgQuene.push(callback);
                if (this._cfgQuene.length > 1)
                    return;
                var url = "";
                if (Common.config.url)
                    url = Common.config.url + "?t=" + Date.now();
                else
                    url = ROOT_CONFIG.HTTP_ROOT + "/config/" + Common.config.moosnowAppId + ".json?t=" + Date.now();
                this.request(url, {}, 'GET', function (res) {
                    //总开关控制
                    var mistouchOn = res && res.mistouchOn == 1 ? true : false;
                    if (!mistouchOn)
                        console.log('总开关已关闭----------------');
                    _this.cfgData = __assign(__assign({ checkBoxProbabilitys: [100, 0, 0, 0, 0] }, Common.deepCopy(res)), { zs_native_click_switch: res && res.mx_native_click_switch ? res.mx_native_click_switch : 0, zs_jump_switch: res && res.mx_jump_switch ? res.mx_jump_switch : 0, mistouchNum: mistouchOn ? res.mistouchNum : 0, mistouchPosNum: mistouchOn ? res.mistouchPosNum : 0, mistouchInterval: mistouchOn ? res.mistouchInterval : 0, exportAutoNavigate: mistouchOn ? res.exportAutoNavigate : 0, exportBtnNavigate: mistouchOn ? res.exportBtnNavigate : 0, checkBoxMistouch: mistouchOn ? res.checkBoxMistouch : 0, nativeErrorShowInter: mistouchOn ? res.nativeErrorShowInter : 0, bannerErrorShowInter: mistouchOn ? res.bannerErrorShowInter : 0 });
                    if (moosnow.platform) {
                        if (res) {
                            if (!isNaN(res.bannerShowCountLimit))
                                moosnow.platform.bannerShowCountLimit = parseInt(res.bannerShowCountLimit);
                            if (!isNaN(res.bannerLimitType))
                                moosnow.platform.bannerLimitType = parseInt(res.bannerLimitType);
                            if (!isNaN(res.bannerShowTimeLimit))
                                moosnow.platform.bannerShowTimeLimit = parseInt(res.bannerShowTimeLimit);
                        }
                    }
                    _this._cfgQuene.forEach(function (item) {
                        item(_this.cfgData);
                    });
                    _this._cfgQuene = [];
                }, function () {
                    _this._cfgQuene.forEach(function (item) {
                        item({
                            checkBoxMistouch: 0,
                            checkBoxProbabilitys: [100, 0, 0, 0, 0],
                            mistouchNum: 0,
                            mistouchPosNum: 0,
                            bannerShowCountLimit: 1,
                            exportAutoNavigate: 0
                        });
                    });
                    _this._cfgQuene = [];
                    console.log('load config json fail');
                });
            }
        };
        HttpModule.prototype.loadArea = function (callback) {
            var _this = this;
            if (this.areaData) {
                callback(this.areaData);
            }
            else {
                this._localQuene.push(callback);
                if (this._localQuene.length > 1)
                    return;
                var ipUrl = this.baseUrl + "admin/wx_config/getLocation";
                this.request(ipUrl, {}, 'GET', function (res2) {
                    _this.areaData = res2;
                    _this._localQuene.forEach(function (item) {
                        item(_this.areaData);
                    });
                    _this._localQuene = [];
                }, function () {
                    _this._localQuene.forEach(function (item) {
                        item(_this.areaData);
                    });
                    _this._localQuene = [];
                });
            }
        };
        HttpModule.prototype.getForceExport = function (callback) {
            var _this = this;
            this.loadCfg(function (res) {
                _this.loadArea(function (res2) {
                    _this.disabledForceExport(res, res2, function (disable) {
                        callback(disable);
                    });
                });
            });
        };
        HttpModule.prototype.disabledForceExport = function (res, res2, callback) {
            var curTime = Common.formatTime(new Date());
            var inDisabledRegion = false;
            if (res.disabledForceExport) {
                for (var i = 0; i < res.disabledForceExport.length; i++) {
                    var region = res.disabledForceExport[i];
                    if (res2.data.city.indexOf(region) != -1
                        || res2.data.province.indexOf(region) != -1
                        || res2.data.area.indexOf(region) != -1) {
                        inDisabledRegion = true;
                        break;
                    }
                }
            }
            if (inDisabledRegion) {
                if (res.forceExportTime && res.forceExportTime.length == 2) {
                    if (curTime > res.forceExportTime[0] && curTime < res.forceExportTime[1]) {
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                }
                else {
                    callback(true);
                }
            }
            else {
                callback(false);
            }
        };
        /**
         * 获取误点间隔次数，启动游戏时调用
         * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
         */
        HttpModule.prototype.getMisTouchNum = function (callback) {
            var _this = this;
            this.loadCfg(function (res) {
                _this.loadArea(function (res2) {
                    _this.disableAd(res, res2, function (disable) {
                        if (disable) {
                            callback(0);
                            console.log('getMisTouchNum', 0, 'disableAd', disable);
                        }
                        else {
                            callback(parseInt(res.mistouchNum));
                            console.log('getMisTouchNum', res.mistouchNum, 'disableAd', disable);
                        }
                    });
                });
            });
        };
        /**
          * 获取位移间隔次数，启动游戏时调用
          * @param {Funtion} callback 回调参数为mistouchPosNum:int，当misTouchNum=0时关闭误点，当mistouchPosNum=n(0除外)时，每隔n次，触发误点1次
          */
        HttpModule.prototype.getMistouchPosNum = function (callback) {
            var _this = this;
            this.loadCfg(function (res) {
                _this.loadArea(function (res2) {
                    _this.disableAd(res, res2, function (disable) {
                        if (disable) {
                            callback(0);
                            console.log('getMistouchPosNum', 0, 'disableAd', disable);
                        }
                        else {
                            callback(parseInt(res.mistouchPosNum));
                            console.log('getMistouchPosNum', res.mistouchPosNum, 'disableAd', disable);
                        }
                    });
                });
            });
        };
        HttpModule.prototype.getBannerShowCountLimit = function (callback) {
            this.loadCfg(function (res) {
                if (isNaN(res.bannerShowCountLimit))
                    callback(5);
                else
                    callback(parseInt(res.bannerShowCountLimit));
            });
        };
        HttpModule.prototype.disableAd = function (res, res2, callback) {
            var curTime = Common.formatTime(new Date());
            var inDisabledRegion = false;
            if (res && res.disabledRegion) {
                for (var i = 0; i < res.disabledRegion.length; i++) {
                    var region = res.disabledRegion[i];
                    if (res2 && res2.data && (res2.data.city.indexOf(region) != -1
                        || res2.data.province.indexOf(region) != -1
                        || res2.data.area.indexOf(region) != -1)) {
                        inDisabledRegion = true;
                        break;
                    }
                }
            }
            if (this.appLaunchOptions && res) {
                console.log('后台禁止场景 1 ', res.seachEntryScene);
                console.log('后台禁止场景 2 ', res.shareEntryScene);
                if ((res.seachEntryOn == 1 && res.seachEntryScene && res.seachEntryScene.indexOf(this.appLaunchOptions.scene) != -1)
                    || (res.shareEntryOn == 1 && res.shareEntryScene && res.shareEntryScene.indexOf(this.appLaunchOptions.scene) != -1)) {
                    callback(true);
                    console.log('后台禁止场景 ', this.appLaunchOptions.scene);
                    return;
                }
            }
            if (inDisabledRegion) {
                if (res.disabledTime && res.disabledTime.length == 2) {
                    if (curTime > res.disabledTime[0] && curTime < res.disabledTime[1]) {
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                }
                else {
                    callback(true);
                }
            }
            else {
                callback(false);
            }
        };
        HttpModule.prototype.getShareInfo = function (cb) {
            var _this = this;
            this.request(ROOT_CONFIG.HTTP_ROOT + "/share/" + Common.config.moosnowAppId + ".json", {
                appid: Common.config.moosnowAppId
            }, "GET", function (res) {
                cb(res);
                moosnow.platform.initShare(res);
            }, function () {
                _this.request(_this.baseUrl + "admin/wx_share/getShare", {
                    appid: Common.config.moosnowAppId
                }, "POST", function (res) {
                    console.log('分享数据', res.data);
                    cb(res.data);
                    moosnow.platform.initShare(res.data);
                });
            });
        };
        return HttpModule;
    }(BaseModule));

    var OPPOModule = /** @class */ (function (_super) {
        __extends(OPPOModule, _super);
        function OPPOModule() {
            var _this = _super.call(this) || this;
            _this.platformName = "qg";
            _this.appSid = "";
            _this.bannerWidth = 760;
            _this.bannerHeight = 96;
            _this.interLoadedShow = false;
            _this.prevNavigate = Date.now();
            _this.mIsClickedNative = false;
            _this._regisiterWXCallback();
            _this.initAdService();
            return _this;
        }
        OPPOModule.prototype.initAdService = function () {
            if (!window[this.platformName])
                return;
            var self = this;
            if (window[this.platformName].initAdService) {
                window[this.platformName].initAdService({
                    isDebug: true,
                    appId: this.moosnowConfig.moosnowAppId,
                    success: function (res) {
                        console.log("\u521D\u59CB\u5316\u5E7F\u544A");
                        self.initBanner();
                        self.initInter();
                        self._prepareNative();
                    },
                    fail: function (res) {
                        console.warn("\u521D\u59CB\u5316\u5E7F\u544A\u9519\u8BEF " + res.code + "  " + res.msg);
                    },
                    complete: function (res) {
                        console.log("initAdService  complete");
                    }
                });
            }
            else {
                console.log("\u521D\u59CB\u5316\u5E7F\u544A");
                self.initBanner();
                self.initInter();
                self._prepareNative();
            }
            moosnow.event.addListener(EventType.ON_PLATFORM_SHOW, this, this.onAppShow);
        };
        /**
         * 跳转到指定App
         * @param row
         * @param success
         * @param fail
         * @param complete
         */
        OPPOModule.prototype.navigate2Mini = function (row, success, fail, complete) {
            var _this = this;
            console.log(MSG.NAVIGATE_DATA, row);
            if (Date.now() - this.prevNavigate < 300) {
                console.log(MSG.NAVIGATE_FAST);
                return;
            }
            this.prevNavigate = Date.now();
            if (!window[this.platformName]) {
                if (success)
                    success();
                return;
            }
            var appid = row.appid, path = row.path, extraData = row.extraData, pkgName = row.pkgName;
            extraData = extraData || {};
            // 跳转小游戏按钮，支持最低平台版本号'1044' (minPlatformVersion>='1044')
            if (!this.supportVersion(1044)) {
                console.log(MSG.PLATFORM_UNSUPPORT);
                return;
            }
            window[this.platformName].navigateToMiniGame({
                appId: appid,
                path: path,
                pkgName: pkgName || appid,
                extraData: extraData,
                success: function () {
                    if (window[_this.platformName] && window[_this.platformName].aldSendEvent) {
                        window[_this.platformName].aldSendEvent('跳转', {
                            position: row.position,
                            appid: appid,
                            img: row.atlas || row.img
                        });
                    }
                    moosnow.http.exportUser();
                    if (success)
                        success();
                },
                fail: function (err) {
                    console.log('navigateToMiniProgram error ', err);
                    if (fail)
                        fail();
                },
                complete: function () {
                    if (complete)
                        complete();
                }
            });
        };
        OPPOModule.prototype.supportVersion = function (version) {
            var oppoSys = this.getSystemInfoSync();
            return oppoSys.platformVersion >= version;
        };
        /**
         * 游戏登录
         * @param callback
         * @param fail
         */
        // public login(callback?: Function, fail?: Function) {
        //     moosnow.http.getAllConfig(res => {
        //     });
        //     let self = this;
        //     let userToken = moosnow.data.getToken();
        //     if (userToken) {
        //         self.getUserToken("", userToken, callback)
        //     }
        //     else {
        //         if (!this.supportVersion(1040)) {
        //             if (Common.isFunction(callback))
        //                 callback({})
        //             return;
        //         }
        //         window[this.platformName].login({
        //             success: (res) => {
        //                 if (res.code) {
        //                     //发起网络请求
        //                     self.getUserToken(res.code, "", callback)
        //                 } else {
        //                     if (Common.isFunction(callback))
        //                         callback({})
        //                 }
        //             },
        //             fail: (res) => {
        //                 if (Common.isFunction(callback))
        //                     callback({})
        //             }
        //         })
        //     }
        // }
        /**
         *
         * @param code
         * @param user_id
         * @param callback
         */
        // private getUserToken(code, user_id, callback?) {
        //     if (!this.supportVersion(1050)) {
        //         if (Common.isFunction(callback))
        //             callback({});
        //         return;
        //     }
        //     let options = window[this.platformName].getLaunchOptionsSync();
        //     let channel_id = options.query && options.query.channel_id ? options.query.channel_id : "0";
        //     let channel_appid = options.referrerInfo && options.referrerInfo.appId ? options.referrerInfo.appId : "0";
        //     moosnow.data.setChannelAppId(channel_appid);
        //     moosnow.data.setChannelId(channel_id);
        //     if (window[this.platformName] && window[this.platformName].aldSendEvent) {
        //         window[this.platformName].aldSendEvent("来源", {
        //             origin: options.referrerInfo ? options.referrerInfo.appId : '未知',
        //             path: options.query.from || 0
        //         })
        //     }
        //     moosnow.http.request(`${this.baseUrl}api/channel/login.html`, {
        //         appid: moosnow.platform.moosnowConfig.moosnowAppId,
        //         code: code,
        //         user_id: user_id,
        //         channel_id: channel_id,
        //         channel_appid: channel_appid
        //     }, "POST", (respone) => {
        //         if (respone.code == 0 && respone.data && respone.data.user_id) {
        //             moosnow.data.setToken(respone.data.user_id);
        //         }
        //         if (Common.isFunction(callback))
        //             callback(respone)
        //     }, () => {
        //         //如果出错，不影响游戏
        //         if (Common.isFunction(callback))
        //             callback({})
        //     });
        // }
        OPPOModule.prototype._onBannerError = function (err) {
            console.warn('banner___error:', err.errCode, ' msg ', err.errMsg);
            if (this.banner) {
                this.banner.hide();
                this.banner.offResize(this._bottomCenterBanner);
                this.banner.offError(this._onBannerError);
                this.banner.offLoad(this._onBannerLoad);
                this.banner.offHide();
                this.banner.destroy();
                this.banner = null;
            }
        };
        OPPOModule.prototype._prepareBanner = function () {
            if (!window[this.platformName].createBannerAd)
                return;
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            //横屏模式 
            if (this.isLandscape(wxsys.windowHeight, wxsys.windowWidth)) {
                if (windowWidth < this.bannerWidth) {
                    this.bannerWidth = windowWidth;
                }
            }
            else {
                //竖屏
                this.bannerWidth = windowWidth;
            }
            if (this.banner) {
                this.banner.offResize(this._bottomCenterBanner);
                this.banner.offError(this._onBannerError);
                this.banner.offLoad(this._onBannerLoad);
                this.banner.offHide();
            }
            this.banner = this._createBannerAd();
            this.banner.onResize(this._bottomCenterBanner.bind(this));
            this.banner.onError(this._onBannerError.bind(this));
            this.banner.onLoad(this._onBannerLoad.bind(this));
            this.banner.onHide(this._onBannerHide.bind(this));
        };
        OPPOModule.prototype._createBannerAd = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var left = (windowWidth - this.bannerWidth) / 2;
            if (Common.isEmpty(this.bannerId)) {
                console.warn(MSG.BANNER_KEY_IS_NULL);
                return;
            }
            var styleTop = windowHeight - this.bannerHeigth;
            var banner = window[this.platformName].createBannerAd({
                adUnitId: this.bannerId,
                style: {
                    top: styleTop,
                    left: left,
                    width: this.bannerWidth
                }
            });
            return banner;
        };
        OPPOModule.prototype._bottomCenterBanner = function (size) {
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var statusBarHeight = wxsys.statusBarHeight;
            var notchHeight = wxsys.notchHeight || 0;
            this.bannerWidth = size.width;
            this.bannerHeigth = size.height;
            this.banner.style.left = (windowWidth - size.width) / 2;
            var styleTop = windowHeight - this.bannerHeigth;
            if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
                styleTop = windowHeight - this.bannerHeigth;
            }
            else if (this.bannerPosition == BANNER_POSITION.CENTER)
                styleTop = (windowHeight - this.bannerHeigth) / 2;
            else if (this.bannerPosition == BANNER_POSITION.TOP) {
                if (this.isLandscape(wxsys.windowHeight, wxsys.windowWidth))
                    styleTop = 0;
                else
                    styleTop = statusBarHeight + notchHeight;
            }
            else
                styleTop = this.bannerStyle.top;
            this.banner.style.top = styleTop;
            console.log('_bottomCenterBanner  ', this.banner.style);
        };
        OPPOModule.prototype._resetBanenrStyle = function (size) {
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var statusBarHeight = wxsys.statusBarHeight;
            var notchHeight = wxsys.notchHeight || 0;
            if (!isNaN(this.bannerWidth))
                this.banner.style.width = this.bannerWidth;
            if (!isNaN(this.bannerHeight))
                this.banner.style.height = this.bannerHeight;
            var styleTop = windowHeight - this.bannerHeigth;
            if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
                styleTop = windowHeight - this.bannerHeigth;
            }
            else if (this.bannerPosition == BANNER_POSITION.CENTER)
                styleTop = (windowHeight - this.bannerHeigth) / 2;
            else if (this.bannerPosition == BANNER_POSITION.TOP) {
                if (this.isLandscape(wxsys.windowHeight, wxsys.windowWidth))
                    styleTop = 0;
                else
                    styleTop = statusBarHeight + notchHeight;
            }
            else
                styleTop = this.bannerStyle.top;
            this.banner.style.top = styleTop;
            console.log('_resetBanenrStyle ', this.banner.style, 'set styleTop ', styleTop);
        };
        OPPOModule.prototype._onBannerHide = function () {
            console.log('banner 已隐藏 ');
        };
        OPPOModule.prototype.destroyBanner = function () {
            if (this.banner) {
                this.banner.hide();
                this.banner.offResize(this._bottomCenterBanner);
                this.banner.offError(this._onBannerError);
                this.banner.offLoad(this._onBannerLoad);
                this.banner.offHide();
                this.banner.destroy();
                this.banner = null;
            }
        };
        /**
         * 显示平台的banner广告
         * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
         * @param callback 点击回调
         * @param position banner的位置，默认底部
         * @param style 自定义样式
         */
        OPPOModule.prototype.showBanner = function (remoteOn, callback, position, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            console.log(MSG.BANNER_SHOW);
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName]) {
                return;
            }
            if (remoteOn)
                moosnow.http.getAllConfig(function (res) {
                    if (res.mistouchNum == 0) {
                        console.log('后台关闭了banner，不执行显示');
                        return;
                    }
                    else {
                        console.log('后台开启了banner，执行显示');
                        _this._showBanner();
                    }
                });
            else
                this._showBanner();
        };
        OPPOModule.prototype._showBanner = function () {
            var _this = this;
            if (this.banner) {
                this._resetBanenrStyle({
                    width: this.banner.style.width,
                    height: this.banner.style.height
                });
                this.banner.show();
                setTimeout(function () {
                    _this._resetBanenrStyle({
                        width: _this.banner.style.width,
                        height: _this.banner.style.height
                    });
                }, 500);
            }
            else {
                this.initBanner();
            }
        };
        OPPOModule.prototype.hideBanner = function () {
            console.log(MSG.HIDE_BANNER);
            if (!this.isBannerShow)
                return;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerShowCount++;
            if (this.banner) {
                if (this.bannerShowCount >= this.bannerShowCountLimit) {
                    console.log('banner destroy');
                    this.banner.hide();
                    this.banner.offResize(this._bottomCenterBanner);
                    this.banner.offError(this._onBannerError);
                    this.banner.offLoad(this._onBannerLoad);
                    this.banner.offHide();
                    this.banner.destroy();
                    this.banner = null;
                    console.log('重新创建banner');
                    this._prepareBanner();
                }
                else {
                    this.banner.hide();
                }
            }
            else {
                this._prepareBanner();
            }
            this.isBannerShow = false;
        };
        OPPOModule.prototype.createRewardAD = function (show) {
            if (moosnow.platform.videoLoading) {
                return;
            }
            if (!window[this.platformName]) {
                moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!window[this.platformName].createRewardedVideoAd) {
                return;
            }
            if (this.video) {
                this.video.offClose(this._onVideoClose);
                this.video.offError(this._onVideoError);
                this.video.offLoad(this._onVideoLoad);
            }
            else {
                if (Common.isEmpty(this.videoId)) {
                    console.warn(MSG.VIDEO_KEY_IS_NULL);
                    return;
                }
                this.video = window[this.platformName].createRewardedVideoAd({
                    adUnitId: this.videoId
                });
            }
            this.video.onError(this._onVideoError.bind(this));
            this.video.onClose(this._onVideoClose.bind(this));
            this.video.onLoad(this._onVideoLoad.bind(this));
            moosnow.platform.videoLoading = true;
            this.video.load();
        };
        OPPOModule.prototype._onVideoLoad = function () {
            console.log(MSG.VIDEO_LOAD_COMPLETED);
            moosnow.platform.videoLoading = false;
            if (this.video) {
                this.video.show();
            }
        };
        OPPOModule.prototype.prepareInter = function () {
            if (Common.isEmpty(this.interId)) {
                console.warn(MSG.INTER_KEY_IS_NULL);
                return;
            }
            if (!window[this.platformName])
                return;
            if (this.supportVersion("1061")) {
                if (typeof window[this.platformName].createInterstitialAd != "function")
                    return;
                this.inter = window[this.platformName].createInterstitialAd({
                    adUnitId: this.interId
                });
                this.inter.onLoad(this._onInterLoad.bind(this));
                this.inter.onClose(this._onInterClose.bind(this));
                this.inter.load();
            }
            else {
                if (typeof window[this.platformName].createInsertAd != "function")
                    return;
                this.inter = window[this.platformName].createInsertAd({
                    adUnitId: this.interId
                });
                this.inter.onLoad(this._onInterLoad.bind(this));
                this.inter.onShow(this._onInterOnShow.bind(this));
                this.inter.load();
            }
        };
        ;
        OPPOModule.prototype.showInter = function () {
            if (this.inter)
                this.inter.show();
            else
                this.interLoadedShow = true;
        };
        OPPOModule.prototype._onInterLoad = function () {
            if (this.interLoadedShow) {
                if (this.inter) {
                    this.inter.show();
                }
                else
                    this.interLoadedShow = false;
            }
        };
        OPPOModule.prototype._onInterOnShow = function () {
            if (this.inter)
                this.inter.load();
        };
        OPPOModule.prototype.showAutoBanner = function () {
            console.log(' oppo 不支持自动');
        };
        OPPOModule.prototype.reportMonitor = function (name, value) {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].reportMonitor)
                return;
            window[this.platformName].reportMonitor('game_scene', 0);
        };
        OPPOModule.prototype._prepareNative = function () {
            if (!window[this.platformName])
                return;
            if (typeof window[this.platformName].createNativeAd != "function")
                return;
            this.native = window[this.platformName].createNativeAd({
                adUnitId: parseInt("" + this.nativeId[this.nativeIdIndex])
            });
            this.native.onLoad(this._onNativeLoad.bind(this));
            this.native.onError(this._onNativeError.bind(this));
            this.nativeLoading = true;
            // this.native.load()
        };
        OPPOModule.prototype._onNativeLoad = function (res) {
            this.nativeLoading = false;
            console.log(MSG.NATIVE_LOAD_COMPLETED, res);
            if (res && res.adList && res.adList.length > 0) {
                this.nativeAdResult = res.adList[0];
                if (!Common.isEmpty(this.nativeAdResult.adId)) {
                    console.log(MSG.NATIVE_REPORT);
                    this.native.reportAdShow({
                        adId: this.nativeAdResult.adId
                    });
                }
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(Common.deepCopy(this.nativeAdResult));
                }
            }
            else {
                console.log(MSG.NATIVE_LIST_NULL);
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(null);
                }
            }
        };
        OPPOModule.prototype._onNativeError = function (err) {
            this.nativeLoading = false;
            this.nativeAdResult = null;
            if (err.code == 20003) {
                if (this.nativeIdIndex < this.nativeId.length - 1) {
                    console.log(MSG.NATIVE_ERROR, err);
                    this.nativeIdIndex += 1;
                    this._destroyNative();
                    this._prepareNative();
                    this.nativeCb(null);
                }
                else {
                    console.log(MSG.NATIVE_NOT_ID_USE);
                    this.nativeIdIndex = 0;
                    if (Common.isFunction(this.nativeCb)) {
                        this.nativeCb(null);
                    }
                }
            }
            else {
                console.log(MSG.NATIVE_ERROR2, err);
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(null);
                }
            }
        };
        OPPOModule.prototype._destroyNative = function () {
            this.nativeLoading = false;
            this.native.offLoad(); // 移除原生广告加载成功回调
            this.native.offError(); // 移除失败回调
            this.native.destroy(); // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
            console.log(MSG.NATIVE_DESTROY);
        };
        /**
        * 目前只有OPPO平台有此功能
        * 返回原生广告数据，开发者根据返回的数据来展现
        * 没有广告返回null
        *
        *
        * 例如 cocos
        * let adData=moosnow.platform.getNativeAd();
        * cc.loader.load(adData.imgUrlList[0], (err, texture) => {
        *   adImg.active = true
        *   adImg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
        * })
        *
        * 例如 laya
        * let adData=moosnow.platform.getNativeAd();
        * new Laya.Image().skin=adData.imgUrlList[0];
        *
        * @param callback 回调函数
        */
        OPPOModule.prototype.showNativeAd = function (callback) {
            this.nativeCb = callback;
            if (this.native)
                this.native.load();
            // if (!this.nativeLoading && !Common.isEmpty(this.nativeAdResult)) {
            //     let nativeData = Common.deepCopy(this.nativeAdResult)
            //     callback(nativeData)
            // }
        };
        /**
         * 目前只有OPPO平台有此功能
         * 用户点击了展示原生广告的图片时，使用此方法
         * 例如 cocos
         * this.node.on(CocosNodeEvent.TOUCH_END, () => {
         *     moosnow.platform.clickNative();
         * }, this)
         *
         *
         * 例如 laya
         * (new Laya.Image()).on(Laya.Event.MOUSE_UP, this, () => {
         *     moosnow.platform.clickNative();
         * })
         *
         */
        OPPOModule.prototype.clickNative = function (callback) {
            if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
                this.mClickedNativeCallback = callback;
                this.mIsClickedNative = true;
                console.log(MSG.NATIVE_NOT_ID_USE, this.nativeAdResult.adId);
                this.native.reportAdClick({
                    adId: this.nativeAdResult.adId
                });
            }
        };
        OPPOModule.prototype.onAppShow = function () {
            if (this.mIsClickedNative) {
                this.mIsClickedNative = false;
                if (Common.isFunction(this.mClickedNativeCallback))
                    this.mClickedNativeCallback();
            }
        };
        return OPPOModule;
    }(PlatformModule));

    var GameDataCenter = /** @class */ (function (_super) {
        __extends(GameDataCenter, _super);
        function GameDataCenter() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.TOKEN = "token";
            _this.COIN = "COIN";
            _this.mUserToken = "";
            _this.VIBRATE_SWITCH = "VIBRATE_SWITCH";
            _this.USER_PRIZE_KEY = "USER_PRIZE_KEY";
            _this.mCoin = 0;
            _this.mCurrentMisTouchCount = 0;
            _this.mChannel_id = "0";
            _this.mChannel_appid = "0";
            return _this;
        }
        /***********
         * 金币
         */
        GameDataCenter.prototype.initCoin = function (num) {
            if (moosnow.setting._getValue(this.COIN, null) == null)
                moosnow.setting.setValue(this.COIN, num);
        };
        GameDataCenter.prototype.getCoin = function () {
            if (this.mCoin == 0)
                this.mCoin = moosnow.setting.getInt(this.COIN, 0);
            return this.mCoin;
        };
        GameDataCenter.prototype.subCoin = function (v) {
            this.mCoin -= v;
            moosnow.event.sendEventImmediately(EventType.COIN_CHANGED, this.mCoin);
        };
        GameDataCenter.prototype.addCoin = function (v) {
            this.mCoin += v;
            moosnow.event.sendEventImmediately(EventType.COIN_CHANGED, this.mCoin);
        };
        GameDataCenter.prototype.setCoin = function (v) {
            this.mCoin = v;
            moosnow.event.sendEventImmediately(EventType.COIN_CHANGED, this.mCoin);
        };
        GameDataCenter.prototype.saveCoin = function () {
            moosnow.setting.setValue(this.COIN, this.mCoin);
            // Lite.event.sendEventImmediately(EventType.COIN_CHANGED, this.mCoin);
        };
        GameDataCenter.prototype.getToken = function () {
            if (Common.isEmpty(this.mUserToken))
                this.mUserToken = moosnow.setting.getString(this.TOKEN, "");
            return this.mUserToken;
        };
        GameDataCenter.prototype.setToken = function (v) {
            moosnow.setting.setValue(this.TOKEN, v);
        };
        GameDataCenter.prototype.getCurrentMisTouchCount = function () {
            // if (!this.mCurrentMisTouchCount)
            //     this.mCurrentMisTouchCount = Lite.setting.getInt(this.MIS_TOUCH_POS_COUNT, 0);
            return this.mCurrentMisTouchCount;
        };
        GameDataCenter.prototype.setCurrentMisTouchCount = function (num) {
            this.mCurrentMisTouchCount = num;
            // Lite.setting.setValue(this.MIS_TOUCH_POS_COUNT, num);
        };
        GameDataCenter.prototype.getChannelId = function () {
            return this.mChannel_id;
        };
        GameDataCenter.prototype.setChannelId = function (value) {
            this.mChannel_id = value;
        };
        GameDataCenter.prototype.getChannelAppId = function () {
            return this.mChannel_appid;
        };
        GameDataCenter.prototype.setChannelAppId = function (value) {
            this.mChannel_appid = value;
        };
        //振动
        GameDataCenter.prototype.getVibrateSetting = function () {
            return moosnow.setting.getBool(this.VIBRATE_SWITCH, true);
        };
        GameDataCenter.prototype.setVibrateSetting = function (on) {
            moosnow.setting.setBool(this.VIBRATE_SWITCH, on);
            moosnow.event.sendEventImmediately(EventType.VIBRATESWITCH_CHANGED, on);
        };
        GameDataCenter.prototype.getPrizeBox = function () {
            if (!this.mPrizeBox)
                this.mPrizeBox = {};
            return this.mPrizeBox;
        };
        GameDataCenter.prototype.clearPrizeBox = function () {
            this.mPrizeBox = {};
        };
        GameDataCenter.prototype.lockPrizeBox = function (prizeId, type, coinNum) {
            if (coinNum === void 0) { coinNum = 0; }
            var userBox = this.getPrizeBox();
            userBox[prizeId] = {
                prizeId: prizeId,
                type: type == 0 ? 0 : 1,
                coinNum: coinNum
            };
            this.mPrizeBox = userBox;
        };
        GameDataCenter.prototype.getUserPrizeBoxById = function (prizeId) {
            var userBox = this.getPrizeBox();
            return userBox[prizeId];
        };
        GameDataCenter.prototype.getPrizeKey = function () {
            if (this.mPrizeKey == null)
                this.mPrizeKey = 3;
            return this.mPrizeKey;
        };
        GameDataCenter.prototype.addPrizeKey = function (keyNum) {
            this.mPrizeKey += keyNum;
        };
        GameDataCenter.prototype.clearPrizeKey = function () {
            this.mPrizeKey = null;
            moosnow.setting.setValue(this.USER_PRIZE_KEY, "");
        };
        return GameDataCenter;
    }(BaseModule));

    var SettingModule = /** @class */ (function (_super) {
        __extends(SettingModule, _super);
        function SettingModule() {
            return _super.call(this) || this;
        }
        SettingModule.prototype.onEnable = function () {
        };
        SettingModule.prototype.getInt = function (k, defaultValue) {
            var v = this._getValue(k, defaultValue);
            return parseInt(v);
        };
        SettingModule.prototype.getFloat = function (k, defaultValue) {
            var v = this._getValue(k, defaultValue);
            return parseFloat(v);
        };
        SettingModule.prototype.getBool = function (k, defaultValue) {
            var defaultValueTemp;
            if (defaultValue == true) {
                defaultValueTemp = 'true';
            }
            else {
                defaultValueTemp = 'false';
            }
            var v = this.getString(k, defaultValueTemp);
            if (v == 'true') {
                return true;
            }
            return false;
        };
        SettingModule.prototype.getString = function (k, defaultValue) {
            return this._getValue(k, defaultValue);
        };
        SettingModule.prototype.getObject = function (k, defaultValue) {
            var v = this._getValue(k, defaultValue);
            if (!v || v == '') {
                return null;
            }
            return JSON.parse(v);
        };
        //---------------------------------------------
        SettingModule.prototype.setObject = function (k, v) {
            var vStr = '';
            if (v) {
                vStr = JSON.stringify(v);
            }
            this.setValue(k, vStr);
        };
        SettingModule.prototype.setBool = function (k, v) {
            if (v == true) {
                this.setValue(k, 'true');
            }
            else {
                this.setValue(k, 'false');
            }
        };
        SettingModule.prototype.setValue = function (k, v) {
            window.localStorage.setItem(k, v);
        };
        /**
         * 追加整数形
         */
        SettingModule.prototype.appendInt = function (k, v) {
            var vint = this.getInt(k, 0);
            var v2Save = parseInt(v) + vint;
            this.setValue(k, v2Save);
            return v2Save;
        };
        SettingModule.prototype.appendFloat = function (k, v) {
            var vf = this.getFloat(k, 0);
            var v2Save = parseFloat(v) + vf;
            this.setValue(k, v2Save);
        };
        //-------------------------------------------------
        SettingModule.prototype.removeValueOfKey = function (key) {
            window.localStorage.removeItem(key);
        };
        SettingModule.prototype.removeAll = function () {
            window.localStorage.clear();
        };
        //-------------------------------------------------
        SettingModule.prototype._getValue = function (k, defaultValue) {
            var value = window.localStorage.getItem(k);
            if (value == null || value == '') {
                value = defaultValue;
            }
            return value;
        };
        return SettingModule;
    }(BaseModule));

    var OPPOAdModule = /** @class */ (function (_super) {
        __extends(OPPOAdModule, _super);
        function OPPOAdModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OPPOAdModule.prototype.getRemoteAd = function (cb) {
            var _this = this;
            var url = ROOT_CONFIG.HTTP_ROOT + "/exportConfig/" + Common.config.moosnowAppId + ".json?t=" + Date.now();
            moosnow.http.request(url, {}, 'GET', function (res) {
                cb(res);
                console.log('WXAdModule getRemoteAd', res);
            }, function () {
                _super.prototype.getRemoteAd.call(_this, cb);
                console.log('getRemoteAd fail');
            }, function () {
                console.log('getRemoteAd complete');
            });
        };
        return OPPOAdModule;
    }(AdModule));

    var WXAdModule = /** @class */ (function (_super) {
        __extends(WXAdModule, _super);
        function WXAdModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WXAdModule.prototype.getRemoteAd = function (cb) {
            var _this = this;
            var url = ROOT_CONFIG.HTTP_ROOT + "/exportConfig/" + Common.config.moosnowAppId + ".json?t=" + Date.now();
            moosnow.http.request(url, {}, 'GET', function (res) {
                cb(res);
                console.log('WXAdModule getRemoteAd', res);
            }, function (error) {
                _this.repairAd(cb);
                console.log('getRemoteAd fail');
            }, function () {
                console.log('getRemoteAd complete');
            });
        };
        WXAdModule.prototype.repairAd = function (cb) {
            var url = this.baseUrl + 'wx_export/getExport';
            var signParams = {
                appid: Common.config.moosnowAppId
            };
            var data = signParams;
            moosnow.http.request(url, data, 'POST', function (res) {
                var arr = res.data;
                arr.sort(function () { return Math.random() > 0.5 ? 1 : -1; });
                if (cb) {
                    cb(res.data);
                }
            }, function () {
                cb([]);
                console.log('getRemoteAd fail');
            }, function () {
                console.log('getRemoteAd complete');
            });
        };
        return WXAdModule;
    }(AdModule));

    var SHARE_CHANNEL = {
        ARTICLE: "article",
        VIDEO: "video",
        TOKEN: "token",
        LINK: ""
    };

    /**
     * banner位置
     */
    var appLaunchOption = /** @class */ (function () {
        function appLaunchOption() {
        }
        return appLaunchOption;
    }());

    var TTModule = /** @class */ (function (_super) {
        __extends(TTModule, _super);
        function TTModule() {
            var _this = _super.call(this) || this;
            _this.platformName = "tt";
            _this.recordRes = null;
            _this.recordCb = null;
            _this.recordNumber = 0;
            _this.moreGameCb = null;
            _this.mBannerLoaded = false;
            _this._regisiterWXCallback();
            _this._registerTTCallback();
            _this.initBanner();
            _this.initRecord();
            // this.initInter();
            _this.bannerWidth = 208;
            return _this;
        }
        TTModule.prototype._registerTTCallback = function () {
            var _this = this;
            if (!window[this.platformName])
                return;
            // 监听弹窗关闭
            if (window[this.platformName].onMoreGamesModalClose)
                window[this.platformName].onMoreGamesModalClose(function (res) {
                    console.log("modal closed", res);
                    if (_this.moreGameCb)
                        _this.moreGameCb(0);
                });
            // 监听小游戏跳转
            if (window[this.platformName].onNavigateToMiniGameBox) {
                window[this.platformName].onNavigateToMiniGameBox(function (res) {
                    console.log('onNavigateToMiniGameBox', res);
                });
            }
            else if (window[this.platformName].onNavigateToMiniProgram)
                window[this.platformName].onNavigateToMiniProgram(function (res) {
                    console.log('onNavigateToMiniProgram', res);
                });
        };
        TTModule.prototype.showInter = function () {
            var _this = this;
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createInterstitialAd)
                return;
            if (Common.isEmpty(this.interId)) {
                console.warn(MSG.INTER_KEY_IS_NULL);
                return;
            }
            if (this.inter) {
                this.inter.destroy();
            }
            this.inter = window[this.platformName].createInterstitialAd({
                adUnitId: this.interId
            });
            var p = this.inter.load();
            p && p.then(function () {
                _this.inter.show();
            })
                .catch(function (err) {
                console.log(err);
            });
        };
        TTModule.prototype._bottomCenterBanner = function (size) {
            // if (this.bannerWidth != size.width) {
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            this.bannerWidth = size.width;
            this.bannerHeigth = size.height; // (this.bannerWidth / 16) * 9; // 根据系统约定尺寸计算出广告高度
            var top = windowHeight - this.bannerHeigth;
            //     console.log('bannerWidth ', this.bannerWidth, 'bannerHeigth', this.bannerHeigth, 'top', top)
            if (this.banner) {
                this.banner.style.top = top;
                this.banner.style.left = (windowWidth - this.bannerWidth) / 2;
            }
            // }
        };
        TTModule.prototype.initRecord = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].getGameRecorderManager)
                return;
            // if (!this.isDouyin()) return;
            this.recordObj = window[this.platformName].getGameRecorderManager();
        };
        TTModule.prototype.clipRecord = function () {
            if (!this.recordObj)
                return;
            this.recordNumber++;
            console.log('clipRecord', this.recordNumber);
            this.recordObj.recordClip({
                timeRange: [2, 2],
                success: function (r) {
                    console.log('clipRecord 成功 ', r);
                }
            });
        };
        /**
         * 开始录屏
         * @param duration 录屏时长
         * @param callback 如果不是抖音回调参数=false
         */
        TTModule.prototype.startRecord = function (duration, callback) {
            var _this = this;
            if (duration === void 0) { duration = 300; }
            if (callback === void 0) { callback = null; }
            console.log('record startRecord');
            if (!this.recordObj) {
                if (callback)
                    callback(false);
                return;
            }
            this.recordNumber = 0;
            this.recordCb = null;
            this.recordRes = null;
            this.recordObj.onStart(function (res) {
                console.log('record onStart');
                if (callback)
                    callback(res);
            });
            var recordRes = this.recordRes;
            this.recordObj.onStop(function (res) {
                console.log('on stop ', res);
                if (_this.recordNumber >= 4) {
                    _this.recordObj.clipVideo({
                        path: res.videoPath,
                        success: function (r) {
                            console.log('record clip succes:', r);
                            _this.recordRes = r;
                            console.log('record clip recordRes :', _this.recordRes);
                            if (_this.recordCb)
                                _this.recordCb(r);
                        },
                        fail: function () {
                            console.log('record clip fail:', res);
                            _this.recordRes = res;
                            if (_this.recordCb)
                                _this.recordCb(res);
                        }
                    });
                }
                else {
                    _this.recordRes = res;
                    if (_this.recordCb)
                        _this.recordCb(res);
                }
            });
            this.recordObj.start({
                duration: duration
            });
        };
        /**
         * 停止录屏
         * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
         */
        TTModule.prototype.stopRecord = function (callback) {
            if (callback === void 0) { callback = null; }
            console.log(' stop Record  callback  ', !!callback);
            if (!this.recordObj) {
                if (callback)
                    callback(false);
                return;
            }
            console.log('record stop recordRes ', this.recordRes);
            if (this.recordRes) {
                if (Common.isFunction(callback))
                    callback(this.recordRes);
            }
            else {
                this.recordCb = callback;
                this.recordObj.stop();
                console.log('record stop  ', this.recordRes);
            }
        };
        TTModule.prototype.pauseRecord = function () {
            if (this.recordObj)
                this.recordObj.pause();
        };
        TTModule.prototype.resumeRecord = function () {
            if (this.recordObj)
                this.recordObj.resume();
        };
        /**
          * 分享
          * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }
          * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
          * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
          * @param shortCall 时间过短时回调 ,err 是具体错误信息，目前只在头条分享录屏时用到
          */
        TTModule.prototype.share = function (query, callback, shortCall) {
            if (query === void 0) { query = {}; }
            this.currentShareCallback = callback;
            this.currentShortCall = shortCall;
            console.log('是否有回调：', shortCall);
            var shareInfo = this._buildShareInfo(query);
            console.log('shareInfo:', shareInfo);
            if (!window[this.platformName]) {
                this.currentShareCallback(true);
                return;
            }
            ;
            ;
            if (!window[this.platformName].shareAppMessage) {
                this.currentShareCallback(true);
                return;
            }
            ;
            window[this.platformName].shareAppMessage(shareInfo);
        };
        TTModule.prototype._buildShareInfo = function (query) {
            var _this = this;
            var title = "", imageUrl = "";
            if (this.shareInfoArr.length > 0) {
                var item = this.shareInfoArr[MathUtils.randomNumBoth(0, this.shareInfoArr.length - 1)];
                title = item.title;
                imageUrl = item.img;
            }
            var channel = SHARE_CHANNEL.LINK;
            if (query && [SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO].indexOf(query.channel) != -1) {
                channel = query.channel;
            }
            // console.log('this. recordRes ', this.recordRes)
            var videoPath = (this.recordRes && this.recordRes.videoPath) ? this.recordRes.videoPath : "";
            console.log('video path ', videoPath);
            return {
                channel: channel,
                title: title,
                imageUrl: imageUrl,
                query: moosnow.http._object2Query(query),
                extra: {
                    videoPath: videoPath,
                    videoTopics: [title]
                },
                success: function () {
                    console.log('share video success ');
                    if (_this.currentShareCallback)
                        _this.currentShareCallback(true);
                },
                fail: function (e) {
                    console.log('share video fail ', e);
                    console.log('index of : ', e.errMsg.indexOf('short'));
                    if (e && e.errMsg && e.errMsg.indexOf('short') != -1 && _this.currentShortCall) {
                        console.log('时间太短 执行回调', _this.currentShortCall);
                        _this.currentShortCall(e);
                    }
                    if (_this.currentShareCallback)
                        _this.currentShareCallback(false);
                }
            };
        };
        TTModule.prototype._onBannerLoad = function () {
            this.bannerShowCount = 0;
            this.mBannerLoaded = true;
            if (this.isBannerShow) {
                this.showBanner();
            }
        };
        TTModule.prototype._prepareBanner = function () {
            this.mBannerLoaded = false;
            _super.prototype._prepareBanner.call(this);
        };
        TTModule.prototype._resetBanenrStyle = function (size) {
            if (Common.isEmpty(size)) {
                console.log('设置的banner尺寸为空,不做调整');
                return;
            }
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            // if (Common.getEngine() == ENGINE_TYPE.COCOS) {
            //     windowWidth = cc.Canvas.instance.node.width;
            //     windowHeight = cc.Canvas.instance.node.height;
            // }
            // if (Common.getEngine() == ENGINE_TYPE.LAYA) {
            //     windowWidth = Laya.stage.width;
            //     windowHeight = Laya.stage.height;
            // }
            var top = 0;
            if (this.isLandscape(windowHeight, windowWidth)) {
                if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
                    top = windowHeight - this.bannerHeigth - 30;
                }
                else if (this.bannerPosition == BANNER_POSITION.CENTER)
                    top = (windowHeight - this.bannerHeigth) / 2;
                else if (this.bannerPosition == BANNER_POSITION.TOP)
                    top = 0;
            }
            else {
                if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
                    top = windowHeight - this.bannerHeigth - 30;
                }
                else if (this.bannerPosition == BANNER_POSITION.CENTER)
                    top = (windowHeight - this.bannerHeigth) / 2;
                else if (this.bannerPosition == BANNER_POSITION.TOP)
                    top = 0;
            }
            if (this.bannerStyle) {
                this.banner.style = this.bannerStyle;
            }
            else {
                this.banner.style.top = top;
                console.log(MSG.BANNER_RESIZE, this.banner.style, this.banner);
            }
        };
        /**
         * 显示平台的banner广告
         * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
         * @param callback 点击回调
         * @param position banner的位置，默认底部
         * @param style 自定义样式
         */
        TTModule.prototype.showBanner = function (remoteOn, callback, position, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            // if (this.isBannerShow)
            //     return;
            console.log(MSG.BANNER_SHOW);
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!this.mBannerLoaded) {
                return;
            }
            if (!window[this.platformName]) {
                return;
            }
            this.bannerPosition = position;
            this.bannerStyle = style;
            if (remoteOn)
                moosnow.http.getAllConfig(function (res) {
                    if (res.mistouchNum == 0) {
                        console.log('后台关闭了banner，不执行显示');
                        return;
                    }
                    else {
                        console.log('后台开启了banner，执行显示');
                        _this._showBanner();
                    }
                });
            else
                this._showBanner();
        };
        TTModule.prototype._showBanner = function () {
            var _this = this;
            if (this.banner) {
                console.log('show banner style ', this.banner.style);
                this.banner.hide();
                this._resetBanenrStyle({
                    width: this.banner.style.width,
                    height: this.banner.style.realHeight
                });
                var showPromise = this.banner.show();
                showPromise && showPromise
                    .then(function () {
                    _this._resetBanenrStyle({
                        width: _this.banner.style.width,
                        height: _this.banner.style.realHeight
                    });
                });
            }
        };
        /**
        * 盒子广告
        * @param callback 关闭回调
        * @param remoteOn 被后台开关控制
        */
        TTModule.prototype.showAppBox = function (callback, remoteOn) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            this.moreGameCb = callback;
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].showMoreGamesModal)
                return;
            moosnow.http.getAllConfig(function (res) {
                if (remoteOn) {
                    if (res && res.showAppBox == 1) {
                        _this._showMoreGamesModal();
                    }
                }
                else {
                    _this._showMoreGamesModal();
                }
            });
        };
        TTModule.prototype._getAppLaunchOptions = function (callback) {
            var appLaunchOptions = [];
            moosnow.ad.getAd(function (res) {
                if (res.indexLeft.length == 0)
                    return;
                res.indexLeft.forEach(function (item) {
                    var opt = new appLaunchOption();
                    opt.appId = item.appid;
                    opt.query = item.path || "1=1";
                    opt.extraData = item.extraData || {};
                    appLaunchOptions.push(opt);
                });
                console.log('appLaunchOptions', appLaunchOptions);
                callback(appLaunchOptions);
            });
        };
        TTModule.prototype._showMoreGamesModal = function () {
            var _this = this;
            var systemInfo = this.getSystemInfoSync();
            // iOS 不支持，建议先检测再使用
            if (systemInfo.platform == "ios")
                return;
            // 打开互跳弹窗
            this._getAppLaunchOptions(function (appLaunchOptions) {
                console.log('_showMoreGamesModal appLaunchOption', appLaunchOptions);
                var banner = window[_this.platformName].showMoreGamesModal({
                    appLaunchOptions: appLaunchOptions,
                    success: function (res) {
                        console.log("show app box success", res);
                    },
                    fail: function (res) {
                        console.log("show app box fail", res);
                    }
                });
            });
        };
        TTModule.prototype.showMoreGameBanner = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createMoreGamesBanner)
                return;
            var systemInfo = this.getSystemInfoSync();
            if (systemInfo.platform == "ios")
                return;
            // iOS 不支持，建议先检测再使用
            if (systemInfo.platform !== "ios") {
                // 打开互跳弹窗
                var appLaunchOptions_1 = [];
                moosnow.ad.getAd(function (res) {
                    if (res.indexLeft.length == 0)
                        return;
                    res.indexLeft.forEach(function (item) {
                        var opt = new appLaunchOption();
                        opt.appId = item.appid;
                        opt.query = item.path || "1=1";
                        opt.extraData = item.extraData || {};
                        appLaunchOptions_1.push(opt);
                    });
                });
                var banner = window[this.platformName].createMoreGamesBanner({
                    style: {
                        left: 20,
                        top: 0,
                        width: 150,
                        height: 40
                    },
                    appLaunchOptions: appLaunchOptions_1,
                    success: function (res) {
                        console.log("show app box success", res.errMsg);
                    },
                    fail: function (res) {
                        console.log("show app box fail", res.errMsg);
                    }
                });
                banner.show();
                banner.onTap(function () {
                    console.log("点击跳转游戏盒子");
                });
            }
        };
        TTModule.prototype.showMoreGameButton = function (url, callback, style) {
            var _this = this;
            if (style === void 0) { style = null; }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createMoreGamesButton)
                return;
            var ttsys = this.getSystemInfoSync();
            var defaultStyle = {
                left: ttsys.windowWidth - 80 - 30,
                top: 40,
                width: 80,
                height: 80,
                lineHeight: 80,
                backgroundColor: "#ff0000",
                textColor: "#ffffff",
                textAlign: "center",
                fontSize: 16,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: "#ff0000"
            };
            var buttonStyle = __assign(__assign({}, defaultStyle), style);
            if (!this._moreGameBotton)
                this._getAppLaunchOptions(function (appLaunchOptions) {
                    cc.loader.loadRes('texture/game/more.png', cc.Texture2D, function (error, tex) {
                        if (error)
                            return;
                        _this._moreGameBotton = window[_this.platformName].createMoreGamesButton({
                            type: "image",
                            image: tex.url,
                            actionType: "box",
                            style: buttonStyle,
                            appLaunchOptions: appLaunchOptions,
                            onNavigateToMiniGame: function (res) {
                                console.log("跳转其他小游戏", res);
                                if (callback)
                                    callback(1, res);
                            }
                        });
                        _this._moreGameBotton.show();
                        _this._moreGameBotton.onTap(function () {
                            console.log("点击更多游戏");
                            if (callback)
                                callback(2, null);
                        });
                    });
                });
            else
                this._moreGameBotton.show();
        };
        TTModule.prototype.hideMoreGameButton = function () {
            if (this._moreGameBotton) {
                this._moreGameBotton.hide();
                // this._moreGameBotton.destory();
            }
        };
        /***
         * 检测Iphone
         */
        TTModule.prototype.isIphone = function () {
            if (!window[this.platformName])
                return false;
            var systemInfo = this.getSystemInfoSync();
            if (systemInfo.platform == "ios")
                return true;
            return false;
        };
        TTModule.prototype.navigate2Mini = function (row, success, fail, complete) {
            console.log('tt navigate2Mini ');
            this.showAppBox(function () {
                console.log('tt showAppBox close ');
            }, false);
        };
        /**
          * 调用后跳转个人主页，并且回调关注成功/失败回调，异步回调接口
          * @param success
          * @param fail
          */
        TTModule.prototype.checkFollowAwemeSate = function (success, fail) {
            if (!window[this.platformName]) {
                success(true);
                return;
            }
            if (!window[this.platformName].checkFollowAwemeState) {
                success(true);
                return;
            }
            window[this.platformName].checkFollowAwemeState({
                success: function (res) {
                    console.log('---- check success, res:', res);
                    var hasFollowed = res.hasFollowed;
                    success(hasFollowed);
                },
                fail: function (err) {
                    fail(err);
                    // console.log('---- check fail,', err)
                },
                complete: function (res) {
                    // console.log('---- check complete, res: ', res)
                }
            });
        };
        /**
         * 调用后跳转个人主页，并且回调关注成功/失败回调，异步回调接口
         * @param success
         * @param fail
         */
        TTModule.prototype.openAwemeUserProile = function (success, fail) {
            if (!window[this.platformName]) {
                success(true);
                return;
            }
            if (!window[this.platformName].openAwemeUserProfile) {
                success(true);
                return;
            }
            window[this.platformName].openAwemeUserProfile({
                success: function (res) {
                    console.log('---- open success, res: ', res);
                    var hasFollowed = res.hasFollowed;
                    success(hasFollowed);
                },
                fail: function (err) {
                    // console.log('---- open fail, err: ', err)
                    fail(err);
                },
                complete: function (res) {
                    // console.log('---- open complete, res: ',res)
                }
            });
        };
        return TTModule;
    }(PlatformModule));

    var QQModule = /** @class */ (function (_super) {
        __extends(QQModule, _super);
        function QQModule() {
            var _this = _super.call(this) || this;
            _this.platformName = "qq";
            _this._regisiterWXCallback();
            _this.initBanner();
            return _this;
        }
        QQModule.prototype._createBannerAd = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var height = this.bannerHeigth = Math.round(this.bannerWidth / 300 * 72.8071);
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.screenWidth;
            var windowHeight = wxsys.screenHeight;
            var centerPos = (windowWidth - this.bannerWidth) / 2;
            var top = windowHeight - height / 2;
            if (Common.isEmpty(this.bannerId)) {
                console.warn(MSG.BANNER_KEY_IS_NULL);
                return;
            }
            console.log('create banner by banner id ', this.bannerId);
            var style = {
                top: top,
                left: centerPos,
                width: this.bannerWidth,
                height: height
            };
            console.log('create banner style ', style);
            var banner = window[this.platformName].createBannerAd({
                adUnitId: this.bannerId,
                style: style
            });
            return banner;
        };
        /**
          * 显示平台的banner广告
          * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
          * @param callback 点击回调
          * @param position banner的位置，默认底部
          * @param style 自定义样式
          */
        QQModule.prototype.showBanner = function (remoteOn, callback, position, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            console.log(MSG.BANNER_SHOW);
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerPosition = position;
            this.bannerStyle = style;
            if (remoteOn)
                moosnow.http.getAllConfig(function (res) {
                    if (res.mistouchNum == 0) {
                        console.log('后台关闭了banner，不执行显示');
                        return;
                    }
                    else {
                        console.log('后台开启了banner，执行显示');
                        _this._showBanner();
                    }
                });
            else
                this._showBanner();
        };
        QQModule.prototype._showBanner = function () {
            var _this = this;
            if (this.banner) {
                var t = this.banner.show();
                if (t)
                    t.then(function () {
                        _this._resetBanenrStyle({});
                    });
            }
        };
        QQModule.prototype._bottomCenterBanner = function (size) {
            // 尺寸调整时会触发回调         
            // 注意：如果在回调里再次调整尺寸，要确保不要触发死循环！！！  
            console.log('Resize后正式宽高:', size.width, size.height);
            // this._resetBanenrStyle(size);
        };
        QQModule.prototype._resetBanenrStyle = function (size) {
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var top = 0;
            if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
                top = windowHeight - this.bannerHeigth;
            }
            else if (this.bannerPosition == BANNER_POSITION.CENTER)
                top = (windowHeight - this.bannerHeigth) / 2;
            else if (this.bannerPosition == BANNER_POSITION.TOP)
                top = 0;
            else
                top = this.bannerStyle.top;
            if (this.banner && this.banner.style)
                this.banner.style.top = top;
        };
        /**
         * 盒子广告
         * @param callback 关闭回调
         * @param remoteOn 被后台开关控制
         */
        QQModule.prototype.showAppBox = function (callback, remoteOn) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createAppBox)
                return;
            this.mOnBoxCallback = callback;
            console.log("showAppBox");
            moosnow.http.getAllConfig(function (res) {
                if (remoteOn) {
                    if (res && res.showAppBox == 1) {
                        if (!_this.box) {
                            _this.box = window[_this.platformName].createAppBox({
                                adUnitId: _this.moosnowConfig.boxId
                            });
                            _this.box.onClose(_this.onBoxClose.bind(_this));
                        }
                        _this.box.load()
                            .then(function () {
                            _this.box.show();
                        });
                    }
                    else {
                        if (Common.isFunction(_this.mOnBoxCallback))
                            _this.mOnBoxCallback(-1);
                        console.log('后台不允许显示Box，如有需要请联系运营');
                    }
                }
                else {
                    if (!_this.box) {
                        _this.box = window[_this.platformName].createAppBox({
                            adUnitId: _this.moosnowConfig.boxId
                        });
                        _this.box.onClose(_this.onBoxClose.bind(_this));
                    }
                    _this.box.load()
                        .then(function () {
                        _this.box.show();
                    });
                }
            });
        };
        QQModule.prototype.hideAppBox = function (callback) {
            var _this = this;
            if (this.box) {
                this.box.offClose(this.onBoxClose);
                var promise_1 = this.box.destroy();
                console.log('box destroy ', promise_1);
                if (promise_1) {
                    promise_1
                        .then(function () {
                        console.log('destroy successfully ', promise_1);
                        _this.box = null;
                        if (Common.isFunction(callback))
                            callback(true);
                    })
                        .catch(function () {
                        console.log('destroy fail ', promise_1);
                        _this.box = null;
                        if (Common.isFunction(callback))
                            callback(false);
                    });
                }
            }
        };
        QQModule.prototype.onBoxClose = function () {
            if (Common.isFunction(this.mOnBoxCallback))
                this.mOnBoxCallback(0);
        };
        return QQModule;
    }(PlatformModule));

    /**
     * 广告结果
     */
    var moosnowAdRow = /** @class */ (function () {
        function moosnowAdRow() {
            /**
             * 微信小程序的ID
             */
            this.appid = "";
            this.boxAppid = "";
            this.desc = "";
            this.img = "";
            this.path = "";
            this.title = "";
            this.atlas = "";
            /**
             * oppo跳转需要使用
             */
            this.pkgName = "";
            this.extraData = "";
            /**
             * 位置描述
             */
            this.position = "";
            /**
             * 取消时的回调
             */
            this.onCancel = null;
            /**
             * 显示的顺序
             */
            this.index = 0;
            /**
            * 点击后是否刷新
            */
            this.refresh = false;
            this.showIds = null;
            this.source = null;
        }
        return moosnowAdRow;
    }());

    var ZSOPPOAdModule = /** @class */ (function (_super) {
        __extends(ZSOPPOAdModule, _super);
        function ZSOPPOAdModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZSOPPOAdModule.prototype.getRemoteAd = function (cb) {
            var url = 'https://platform.qwpo2018.com/api/apk_ad/index';
            var signParams = {
                apk_id: moosnow.platform.moosnowConfig.moosnowAppId,
            };
            var data = signParams;
            moosnow.http.request(url, data, 'POST', function (res) {
                var arr = res.data;
                arr.sort(function () { return Math.random() > 0.5 ? 1 : -1; });
                console.log('接口数据', res.data);
                if (cb) {
                    var retValue = [];
                    for (var i = 0; i < arr.length; i++) {
                        var item = arr[i];
                        var row = new moosnowAdRow();
                        row.appid = item.link_appid;
                        row.img = item.link_img;
                        row.path = item.link_path;
                        row.title = item.link_name;
                        row.pkgName = item.link_page;
                        row.desc = item.link_des;
                        retValue.push(row);
                    }
                    cb(retValue);
                }
            }, function () {
                cb([]);
                console.log('getRemoteAd fail');
            }, function () {
                console.log('getRemoteAd complete');
            });
        };
        return ZSOPPOAdModule;
    }(AdModule));

    var ZSOPPOModule = /** @class */ (function (_super) {
        __extends(ZSOPPOModule, _super);
        function ZSOPPOModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
        * 检查当前版本的导出广告是否开启
        * @param {string} version
        * @param {*} callback
        * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
        */
        ZSOPPOModule.prototype.checkVersion = function (version, callback) {
            var _this = this;
            moosnow.http.loadCfg(function (res) {
                var openAd = _super.prototype.checkLog.call(_this, res.zs_version);
                callback(openAd);
            });
        };
        ZSOPPOModule.prototype.login = function (success, fail) {
            if (window[this.platformName])
                window[this.platformName].login({
                    success: function (res) {
                        // var data = JSON.stringify(res.data);
                        // console.log(res.data.token);
                        var url = "https://platform.qwpo2018.com/api/oppo_login/index";
                        moosnow.http.request(url, {
                            apk_id: moosnow.platform.moosnowConfig.moosnowAppId,
                            code: res.data.token
                        }, 'POST', function (res2) {
                            moosnow.data.setToken(res2.data.user_id);
                            if (success)
                                success(res2.data);
                            console.log('platformLogin success ', res2);
                        }, function (res2) {
                            if (success)
                                success(null);
                            console.log('platformLogin fail ', res2);
                        });
                    },
                    fail: function (res) {
                        if (fail)
                            fail(res);
                    }
                });
            else if (success)
                success();
        };
        /**
         * 跳转到指定App
         * @param row
         * @param success
         * @param fail
         * @param complete
         */
        ZSOPPOModule.prototype.navigate2Mini = function (row, success, fail, complete) {
            var _this = this;
            _super.prototype.navigate2Mini.call(this, row, function () {
                _this.navigateCallback(row.appid);
                if (Common.isFunction(success))
                    success();
            }, fail, complete);
        };
        ZSOPPOModule.prototype.navigateCallback = function (appId) {
            var url = 'https://platform.qwpo2018.com/api/apk_ad/click_log';
            var openId = moosnow.data.getToken();
            var signParams = {
                user_id: openId,
                apk_id: moosnow.platform.moosnowConfig.moosnowAppId,
                appid: appId,
                link_id: appId,
            };
            var data = signParams;
            console.log('跳转数据上报', data);
            moosnow.http.request(url, data, 'POST', function (res) {
                console.log('跳转数据上报成功', res);
            }, function (res) {
                console.log('跳转数据上报失败', res);
            }, function () {
                console.log('upload navigate complete');
            });
        };
        return ZSOPPOModule;
    }(OPPOModule));

    var BDModule = /** @class */ (function (_super) {
        __extends(BDModule, _super);
        function BDModule() {
            var _this = _super.call(this) || this;
            _this.platformName = "swan";
            _this.bannerId = "";
            _this.videoId = "";
            _this.appSid = "";
            _this.recordRes = null;
            _this.recordCb = null;
            return _this;
        }
        BDModule.prototype._createBannerAd = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.screenWidth;
            var windowHeight = wxsys.screenHeight;
            if (Common.isEmpty(this.bannerId)) {
                console.warn(MSG.BANNER_KEY_IS_NULL);
                return;
            }
            var banner = window[this.platformName].createBannerAd({
                adUnitId: this.bannerId,
                appSid: this.appSid,
                style: {
                    top: windowHeight,
                    //lef: (750 - 300) / 2 / Laya.Browser.pixelRatio,
                    width: windowWidth
                }
            });
            return banner;
        };
        BDModule.prototype.createRewardAD = function (show) {
            var _this = this;
            if (this.videoLoading) {
                return;
            }
            if (!window[this.platformName].createRewardedVideoAd) {
                return;
            }
            if (this.video) {
                this.video.offClose(this._onVideoClose);
                this.video.offError(this._onVideoError);
                this.video.offLoad(this._onVideoLoad);
            }
            else {
                this.video = window[this.platformName].createRewardedVideoAd({
                    adUnitId: this.videoId,
                    appSid: this.appSid
                });
            }
            this.video.onError(this._onVideoError);
            this.video.onClose(this._onVideoClose);
            this.video.onLoad(this._onVideoLoad);
            this.videoLoading = true;
            this.video.load()
                .then(function () {
                if (show) {
                    _this.video.show().then(function () { }).catch(function (err) {
                        _this._onVideoError(err.errMsg, err.errCode);
                        console.log(err.errMsg);
                    });
                }
            }).catch(function (err) {
                _this._onVideoError(err.errMsg, err.errCode);
                console.log(err.errMsg);
            });
        };
        BDModule.prototype.initRecord = function () {
            if (!window[this.platformName])
                return;
            var brand = this.getSystemInfoSync().brand.toLowerCase();
            if (/huawei/.test(brand) || /honor/.test(brand))
                return;
            // if (!this.isDouyin()) return;
            this.recordObj = window[this.platformName].getVideoRecorderManager();
        };
        /**
         * 开始录屏
         * @param duration 录屏时长
         * @param callback 如果不是抖音回调参数=false
         */
        BDModule.prototype.startRecord = function (duration, callback) {
            var _this = this;
            if (duration === void 0) { duration = 120; }
            if (callback === void 0) { callback = null; }
            console.log('record startRecord');
            this.recordRes = null;
            this.recordCb = null;
            if (!this.recordObj) {
                if (callback)
                    callback(false);
                return;
            }
            this.recordObj.onStart(function (res) {
                console.log('record onStart');
                if (callback)
                    callback(res);
            });
            this.recordObj.onStop(function (res) {
                _this.recordRes = res;
                if (_this.recordCb) {
                    console.log('stop 2');
                    _this.recordCb(res);
                }
            });
            this.recordObj.start({
                duration: duration
            });
        };
        /**
         * 停止录屏
         * @param callback 如果不是抖音回调参数=false，如果录制成功，回调参数中录屏地址=res.videoPath
         */
        BDModule.prototype.stopRecord = function (callback) {
            if (callback === void 0) { callback = null; }
            console.log('record stopRecord');
            if (!this.recordObj) {
                if (callback)
                    callback(false);
                return;
            }
            if (this.recordRes) {
                console.log('stop 1');
                callback(this.recordRes);
            }
            else {
                this.recordCb = callback;
                this.recordObj.stop();
            }
        };
        return BDModule;
    }(PlatformModule));

    var ZSHttpModule = /** @class */ (function (_super) {
        __extends(ZSHttpModule, _super);
        function ZSHttpModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 获取误点间隔次数，启动游戏时调用
         * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
         */
        ZSHttpModule.prototype.getMisTouchNum = function (callback) {
            this.loadCfg(function (res) {
                callback(parseInt(res.mistouchNum));
            });
        };
        /**
         * 获取位移间隔次数，启动游戏时调用
         * @param {Funtion} callback 回调参数为mistouchPosNum:int，当misTouchNum=0时关闭误点，当mistouchPosNum=n(0除外)时，每隔n次，触发误点1次
         */
        ZSHttpModule.prototype.getMistouchPosNum = function (callback) {
            this.loadCfg(function (res) {
                callback(parseInt(res.mistouchPosNum));
            });
        };
        ZSHttpModule.prototype.getBannerShowCountLimit = function (callback) {
            this.loadCfg(function (res) {
                if (isNaN(res.bannerShowCountLimit))
                    callback(5);
                else
                    callback(parseInt(res.bannerShowCountLimit));
            });
        };
        ZSHttpModule.prototype.getAllConfig = function (callback) {
            this.loadCfg(function (res) {
                callback(res);
            });
        };
        ZSHttpModule.prototype.loadCfg = function (callback) {
            var _this = this;
            if (this.cfgData) {
                callback(this.cfgData);
            }
            else {
                var url = moosnow.platform.moosnowConfig.url + "?t=" + Date.now();
                console.log('appid ', moosnow.platform.moosnowConfig.moosnowAppId);
                this.request(url, {
                    apk_id: moosnow.platform.moosnowConfig.moosnowAppId
                }, 'POST', function (res) {
                    var enabled = res.data.zs_version == moosnow.platform.moosnowConfig.version;
                    _this.cfgData = __assign(__assign({}, Common.deepCopy(res.data)), { mistouchNum: res.data.zs_switch, mistouchPosNum: res.data.zs_switch, showNative: enabled, showInter: enabled, showExportAd: enabled, mx_native_click_switch: res.zs_native_click_switch == 1, mx_jump_switch: res.zs_jump_switch == 1, bannerShowCountLimit: isNaN(res.data.bannerShowCountLimit) ? 1 : res.data.bannerShowCountLimit });
                    if (moosnow.platform) {
                        moosnow.platform.bannerShowCountLimit = parseInt(res.data.bannerShowCountLimit);
                    }
                    callback(_this.cfgData);
                }, function () {
                    callback({});
                    console.log('load config json fail');
                });
            }
        };
        return ZSHttpModule;
    }(HttpModule));

    var SHARE_MSG = {
        FAIL: "请分享到群！",
    };

    var VIDEO_MSG = {
        ERR: "视频正在加载中,请稍后",
        NOTEND: "请完整观看完视频！"
    };

    var ArrayUtil = /** @class */ (function () {
        function ArrayUtil() {
        }
        ArrayUtil.prototype.shuffle = function (array) {
            var iLength = array.length, i = iLength, mTemp, iRandom;
            while (i--) {
                if (i !== (iRandom = Math.floor(Math.random() * iLength))) {
                    mTemp = array[i];
                    array[i] = array[iRandom];
                    array[iRandom] = mTemp;
                }
            }
            return array;
        };
        /**
          * Array.indexOf
          * @param searchArray
          * @param searchElement
          * @returns {Number} 找不到返回-1
          */
        ArrayUtil.prototype.indexOf = function (searchArray, searchElement) {
            var result = -1;
            for (var i = 0, length = searchArray.length; i < length; i++) {
                if (searchArray[i] == searchElement) {
                    result = i;
                    break;
                }
            }
            return result;
        };
        /**
          * 交换位置
          * @param replaceArray
          * @param fromIndex
          * @param toIndex
          */
        ArrayUtil.prototype.replace = function (replaceArray, fromIndex, toIndex) {
            var from = replaceArray[fromIndex];
            var to = replaceArray[toIndex];
            replaceArray[toIndex] = from;
            replaceArray[fromIndex] = to;
        };
        /**
          * 合并
          * @param mergefrom
          * @param mergeto
          */
        ArrayUtil.prototype.merge = function (mergefrom, mergeto) {
            for (var i = 0, length = mergefrom.length; i < length; i++) {
                mergeto.push(mergefrom[i]);
            }
            return mergeto;
        };
        /**
          * 克隆
          * @param from
          * @returns {Array}
          */
        ArrayUtil.clone = function (from) {
            var newarray = new Array();
            newarray = from.slice(0);
            return newarray;
        };
        /**
         *
         */
        ArrayUtil.remove = function (origin, item) {
            for (var i = 0; i < origin.length; i++) {
                if (origin[i] == item) {
                    origin.splice(i, 1);
                    i--;
                    return;
                }
            }
        };
        return ArrayUtil;
    }());

    var EventModule = /** @class */ (function (_super) {
        __extends(EventModule, _super);
        function EventModule() {
            var _this = _super.call(this) || this;
            _this._eventList = [];
            _this._waitingForSendList = [];
            //监听列表
            _this._eventList = [];
            //待发送队列
            _this._waitingForSendList = [];
            return _this;
        }
        /**
        * 添加一个监听者
        * @param {string} eventName 监听的事件名
        * @param {typeof Class} target 监听者
        * @param {Function} callback 监听事件触发后的回调
        */
        EventModule.prototype.addListener = function (eventName, target, callback) {
            this._addListener(eventName, target, false, callback);
        };
        /**
         * 将事件添加到发送队列里在update里发送
         * @param {string} eventName 要发送的事件名
         * @param {any} data 要发送的自定义数据
         */
        EventModule.prototype.addToSendQueue = function (eventName, data) {
            this._addToSendList(eventName, data);
        };
        /**
         * 当前帧立即发送一个事件
         * @param {String} eventName 事件名
         * @param {any} data 自定义数据
         */
        EventModule.prototype.sendEventImmediately = function (eventName, data) {
            this._sendEvent(eventName, data);
            this.onUpdate();
        };
        /**
         * 移除一个监听者
         * @param {string} eventName 事件名
         * @param {any} target 监听者
         */
        EventModule.prototype.removeListener = function (eventName, target) {
            var isEventNameAvailable = eventName != null && eventName != '';
            if (!isEventNameAvailable) {
                console.error('eventName:' + eventName + '不合法！');
                return;
            }
            for (var i = 0; i < this._eventList.length; i++) {
                var event_1 = this._eventList[i];
                if (event_1.eventName === eventName) {
                    for (var j = 0; j < event_1.listeners.length; j++) {
                        var listener = event_1.listeners[j];
                        if (listener.target === target) {
                            ArrayUtil.remove(event_1.listeners, listener);
                            break;
                        }
                    }
                    if (event_1.listeners.length == 0) {
                        ArrayUtil.remove(this._eventList, event_1);
                    }
                    break;
                }
            }
        };
        /**
         * 移除所有监听者
         */
        EventModule.prototype.removeAllListener = function () {
            this._eventList.length = 0;
            this._eventList = [];
            this._waitingForSendList.length = 0;
            this._waitingForSendList = [];
        };
        EventModule.prototype._addListener = function (eventName, target, once, callback) {
            var isEventNameAvailable = eventName != null && eventName != '';
            if (!isEventNameAvailable) {
                console.error('eventName:' + eventName + '不合法！');
                return;
            }
            var listener = new MListener();
            callback instanceof Function ? listener.callback = callback : console.error('callback不是一个方法');
            target ? listener.target = target : console.error('target为空');
            listener.once = once;
            var hasSameEvent = false;
            if (this._eventList.length > 0) {
                for (var i = 0; i < this._eventList.length; i++) {
                    var tempEvent = this._eventList[i];
                    //判断是否已经有相同事件
                    if (eventName === tempEvent.eventName) {
                        //有相同事件，则增加监听者
                        tempEvent.listeners.push(listener);
                        hasSameEvent = true;
                        return;
                    }
                }
                //没有相同事件
                if (!hasSameEvent) {
                    //创建一个新事件
                    var event_2 = new MLEvent();
                    event_2.eventName = eventName;
                    event_2.listeners.push(listener);
                    this._eventList.push(event_2);
                }
            }
            else {
                var event_3 = new MLEvent();
                event_3.eventName = eventName;
                event_3.listeners.push(listener);
                this._eventList.push(event_3);
            }
        };
        EventModule.prototype._addToSendList = function (eventName, data) {
            var isEventNameAvailable = eventName != null && eventName != '';
            if (!isEventNameAvailable) {
                console.error('eventName:' + eventName + '不合法！');
                return;
            }
            var toBeSend = {
                eventName: eventName,
                data: data
            };
            this._waitingForSendList.push(toBeSend);
        };
        EventModule.prototype._sendEvent = function (eventName, data) {
            var copyedEventList = this._eventList;
            for (var i = 0; i < copyedEventList.length; i++) {
                var event_4 = copyedEventList[i];
                if (event_4.eventName === eventName) {
                    //匹配该事件下的监听列表
                    var listeners = event_4.listeners;
                    for (var j = listeners.length - 1; j >= 0; j--) {
                        var listener = listeners[j];
                        var callback = listener.callback;
                        var target = listener.target;
                        if (!target) {
                            ArrayUtil.remove(this._eventList[i].listeners, listener);
                            j--;
                            continue;
                        }
                        callback.call(target, data);
                        if (listener.once) {
                            if (this._eventList[i].listeners[j]) {
                                ArrayUtil.remove(this._eventList[i].listeners, listener);
                                i--;
                            }
                        }
                    }
                }
            }
        };
        EventModule.prototype.onUpdate = function () {
            if (this._waitingForSendList.length == 0) {
                return;
            }
            //两种方式各有利弊，方案1发送慢  方案2和立即发送没区别
            //1一帧发送一次事件（优化方案：一帧发送n个事件，n根据情况可调整）
            //     let event = this._waitingForSendList[0];
            //     this._sendEvent(event.eventName, event.data);
            //     if (cc.js.array.contains(this._waitingForSendList, event)) {
            //         cc.js.array.remove(this._waitingForSendList, event);
            //     }
            //2当前帧发送所有事件
            for (var i = 0; i < this._waitingForSendList.length; i++) {
                var event_5 = this._waitingForSendList[i];
                this._sendEvent(event_5.eventName, event_5.data);
                ArrayUtil.remove(this._waitingForSendList, event_5);
                i--;
            }
        };
        EventModule.prototype.onDisable = function () {
        };
        return EventModule;
    }(BaseModule));
    /**
     * 监听者
     */
    var MListener = /** @class */ (function () {
        function MListener() {
            this.callback = null;
            this.target = [];
            this.once = false;
            this.callback = null;
            this.target = null;
            this.once = false;
        }
        return MListener;
    }());
    /**
     * 事件类
     */
    var MLEvent = /** @class */ (function () {
        function MLEvent() {
            this.eventName = "";
            this.listeners = [];
            this.eventName = '';
            this.listeners = [];
        }
        return MLEvent;
    }());

    var VIVOModule = /** @class */ (function (_super) {
        __extends(VIVOModule, _super);
        function VIVOModule() {
            var _this = _super.call(this) || this;
            _this.platformName = "qg";
            _this.appSid = "";
            _this.bannerWidth = 720;
            _this.bannerHeight = 114;
            _this.interLoadedShow = false;
            _this.prevNavigate = Date.now();
            _this.mMinInterval = 10;
            _this.mIsClickedNative = false;
            _this._regisiterWXCallback();
            _this.initAdService();
            return _this;
        }
        VIVOModule.prototype.initAdService = function () {
            // this.initBanner();
            // this.initInter();
            this._prepareNative();
            moosnow.event.addListener(EventType.ON_PLATFORM_SHOW, this, this.onAppShow);
        };
        /**
         * 跳转到指定App
         * @param row
         * @param success
         * @param fail
         * @param complete
         */
        VIVOModule.prototype.navigate2Mini = function (row, success, fail, complete) {
            var _this = this;
            console.log(MSG.NAVIGATE_DATA, row);
            if (Date.now() - this.prevNavigate < 300) {
                console.log(MSG.NAVIGATE_FAST);
                return;
            }
            this.prevNavigate = Date.now();
            if (!window[this.platformName]) {
                if (success)
                    success();
                return;
            }
            var appid = row.appid, path = row.path, extraData = row.extraData, pkgName = row.pkgName;
            extraData = extraData || {};
            // 跳转小游戏按钮，支持最低平台版本号'1044' (minPlatformVersion>='1044')
            if (!this.supportVersion(1044)) {
                console.log(MSG.PLATFORM_UNSUPPORT);
                return;
            }
            window[this.platformName].navigateToMiniGame({
                appId: appid,
                path: path,
                pkgName: pkgName || appid,
                extraData: extraData,
                success: function () {
                    if (window[_this.platformName] && window[_this.platformName].aldSendEvent) {
                        window[_this.platformName].aldSendEvent('跳转', {
                            position: row.position,
                            appid: appid,
                            img: row.atlas || row.img
                        });
                    }
                    moosnow.http.exportUser();
                    if (success)
                        success();
                },
                fail: function (err) {
                    console.log('navigateToMiniProgram error ', err);
                    if (fail)
                        fail();
                },
                complete: function () {
                    if (complete)
                        complete();
                }
            });
        };
        VIVOModule.prototype.supportVersion = function (version) {
            var oppoSys = this.getSystemInfoSync();
            return oppoSys.platformVersionCode >= version;
        };
        /**
         * 游戏登录
         * @param callback
         * @param fail
         */
        // public login(callback?: Function, fail?: Function) {
        //     moosnow.http.getAllConfig(res => {
        //     });
        //     let self = this;
        //     let userToken = moosnow.data.getToken();
        //     if (userToken) {
        //         self.getUserToken("", userToken, callback)
        //     }
        //     else {
        //         if (!this.supportVersion(1040)) {
        //             if (Common.isFunction(callback))
        //                 callback({})
        //             return;
        //         }
        //         window[this.platformName].login({
        //             success: (res) => {
        //                 if (res.code) {
        //                     //发起网络请求
        //                     self.getUserToken(res.code, "", callback)
        //                 } else {
        //                     if (Common.isFunction(callback))
        //                         callback({})
        //                 }
        //             },
        //             fail: (res) => {
        //                 if (Common.isFunction(callback))
        //                     callback({})
        //             }
        //         })
        //     }
        // }
        /**
         *
         * @param code
         * @param user_id
         * @param callback
         */
        // private getUserToken(code, user_id, callback?) {
        //     if (!this.supportVersion(1050)) {
        //         if (Common.isFunction(callback))
        //             callback({});
        //         return;
        //     }
        //     let options = window[this.platformName].getLaunchOptionsSync();
        //     let channel_id = options.query && options.query.channel_id ? options.query.channel_id : "0";
        //     let channel_appid = options.referrerInfo && options.referrerInfo.appId ? options.referrerInfo.appId : "0";
        //     moosnow.data.setChannelAppId(channel_appid);
        //     moosnow.data.setChannelId(channel_id);
        //     if (window[this.platformName] && window[this.platformName].aldSendEvent) {
        //         window[this.platformName].aldSendEvent("来源", {
        //             origin: options.referrerInfo ? options.referrerInfo.appId : '未知',
        //             path: options.query.from || 0
        //         })
        //     }
        //     moosnow.http.request(`${this.baseUrl}api/channel/login.html`, {
        //         appid: moosnow.platform.moosnowConfig.moosnowAppId,
        //         code: code,
        //         user_id: user_id,
        //         channel_id: channel_id,
        //         channel_appid: channel_appid
        //     }, "POST", (respone) => {
        //         if (respone.code == 0 && respone.data && respone.data.user_id) {
        //             moosnow.data.setToken(respone.data.user_id);
        //         }
        //         if (Common.isFunction(callback))
        //             callback(respone)
        //     }, () => {
        //         //如果出错，不影响游戏
        //         if (Common.isFunction(callback))
        //             callback({})
        //     });
        // }
        VIVOModule.prototype._onBannerError = function (err) {
            console.warn('banner___error:', err.errCode, ' msg ', err.errMsg);
            this.destroyBanner();
        };
        VIVOModule.prototype.getSystemInfoSync = function () {
            if (this.systemInfo == null) {
                if (window[this.platformName] && window[this.platformName].getSystemInfoSync)
                    this.systemInfo = window[this.platformName].getSystemInfoSync();
                else
                    this.systemInfo = {};
                console.log(MSG.SYSTEM_INFO, this.systemInfo);
            }
            return this.systemInfo;
        };
        VIVOModule.prototype._prepareBanner = function () {
            if (!window[this.platformName].createBannerAd)
                return;
            if (this.banner) {
                this.banner.offSize();
                this.banner.offError();
                this.banner.offLoad();
                this.banner.offClose();
                this.banner.destroy();
                this.banner = null;
            }
            this.banner = this._createBannerAd();
            if (this.banner) {
                this.banner.onSize(this._bottomCenterBanner.bind(this));
                this.banner.onError(this._onBannerError.bind(this));
                this.banner.onLoad(this._onBannerLoad.bind(this));
                this.banner.onClose(this._onBannerClose.bind(this));
            }
        };
        VIVOModule.prototype._createBannerAd = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var nowTime = Date.now();
            if (!this.mShowTime)
                this.mShowTime = nowTime;
            if (!!!this.mShowTime || ((!!this.mShowTime) && nowTime - this.mShowTime <= this.mMinInterval * 1000)) {
                console.log("banner\u521B\u5EFA\u592A\u9891\u7E41\u4E86 " + this.mMinInterval + "\u79D2\u5185\u53EA\u80FD\u663E\u793A\u4E00\u6B21");
                return;
            }
            this.mShowTime = Date.now();
            var wxsys = this.getSystemInfoSync();
            var screenWidth = wxsys.screenWidth;
            var screenHeight = wxsys.screenHeight;
            var statusBarHeight = wxsys.statusBarHeight;
            var pixelRatio = wxsys.pixelRatio;
            var notchHeight = this.getNotchHeight();
            var left = (screenWidth - this.bannerWidth) / 2;
            if (Common.isEmpty(this.bannerId)) {
                console.warn(MSG.BANNER_KEY_IS_NULL);
                return;
            }
            var styleTop = 0;
            if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
                styleTop = (screenHeight - this.bannerHeight);
            }
            else if (this.bannerPosition == BANNER_POSITION.CENTER)
                styleTop = (screenHeight - this.bannerHeight) / 2;
            else if (this.bannerPosition == BANNER_POSITION.TOP) {
                if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth))
                    styleTop = 0;
                else
                    styleTop = statusBarHeight + notchHeight;
            }
            else
                styleTop = this.bannerStyle.top;
            var style = {
                top: styleTop,
                left: left,
                width: this.bannerWidth,
                height: this.bannerHeight
            };
            console.log('_createBannerAd style', style, 'screenHeight', screenHeight, 'bannerHeigth', this.bannerHeigth);
            var banner = window[this.platformName].createBannerAd({
                posId: this.bannerId,
                style: style
            });
            return banner;
        };
        VIVOModule.prototype.getNotchHeight = function () {
            var retVal = 0;
            if (window[this.platformName].getNotchHeightSync)
                retVal = window[this.platformName].getNotchHeightSync().height;
            return retVal;
        };
        VIVOModule.prototype._bottomCenterBanner = function (size) {
            this.bannerHeight = size.realHeight;
            this.bannerWidth = size.realWidth;
            console.log('onSize callback  ', size);
        };
        VIVOModule.prototype._onBannerClose = function () {
            console.log('banner 已关闭 ');
        };
        VIVOModule.prototype._onBannerHide = function () {
            console.log('banner 已隐藏 ');
        };
        VIVOModule.prototype.destroyBanner = function () {
            if (this.banner) {
                this.banner.offResize(this._bottomCenterBanner);
                this.banner.offError(this._onBannerError);
                this.banner.offLoad(this._onBannerLoad);
                this.banner.offClose(this._onBannerClose);
                this.banner.destroy();
                this.banner = null;
            }
        };
        /**
          * 显示平台的banner广告
          * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
          * @param callback 点击回调
          * @param position banner的位置，默认底部
          * @param style 自定义样式
          */
        VIVOModule.prototype.showBanner = function (remoteOn, callback, position, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName])
                return;
            this.bannerPosition = position;
            this.bannerStyle = style;
            if (remoteOn)
                moosnow.http.getAllConfig(function (res) {
                    if (res.mistouchNum == 0) {
                        console.log('后台关闭了banner，不执行显示');
                        return;
                    }
                    else {
                        console.log('后台开启了banner，执行显示');
                        _this._showBanner();
                    }
                });
            else
                this._showBanner();
        };
        VIVOModule.prototype._showBanner = function () {
            var _this = this;
            if (!this.banner) {
                this.initBanner();
            }
            if (!this.banner)
                return;
            var adshow = this.banner.show();
            console.log('显示banner style ', this.banner);
            adshow && adshow.then(function () {
                console.log("banner广告展示成功");
            }).catch(function (err) {
                moosnow.http.getAllConfig(function (res) {
                    if (res.bannerErrorShowInter == 1) {
                        console.log('banner加载出错，用插屏代替');
                        _this.showInter();
                    }
                });
                switch (err.code) {
                    case 30003:
                        console.log("新用户1天内不能曝光Banner，请将手机时间调整为1天后，退出游戏重新进入");
                        break;
                    case 30009:
                        console.log("10秒内调用广告次数超过1次，10秒后再调用");
                        break;
                    case 30002:
                        console.log("加载广告失败，重新加载广告");
                        break;
                    default:
                        // 参考 https://minigame.vivo.com.cn/documents/#/lesson/open-ability/ad?id=广告错误码信息 对错误码做分类处理
                        console.log("banner广告展示失败");
                        console.log(JSON.stringify(err));
                        break;
                }
            });
        };
        VIVOModule.prototype.hideBanner = function () {
            console.log(MSG.HIDE_BANNER);
            if (!this.isBannerShow)
                return;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerShowCount++;
            if (this.banner) {
                this.banner.hide();
                this.destroyBanner();
            }
            this.isBannerShow = false;
        };
        VIVOModule.prototype.createRewardAD = function (show) {
            if (moosnow.platform.videoLoading) {
                return;
            }
            if (!window[this.platformName]) {
                moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!window[this.platformName].createRewardedVideoAd) {
                return;
            }
            if (Common.isEmpty(this.videoId)) {
                console.warn(MSG.VIDEO_KEY_IS_NULL);
                return;
            }
            if (!this.video) {
                moosnow.platform.videoLoading = true;
                this.video = window[this.platformName].createRewardedVideoAd({
                    posId: this.videoId
                });
                this.video.onError(this._onVideoError.bind(this));
                this.video.onClose(this._onVideoClose.bind(this));
                this.video.onLoad(this._onVideoLoad.bind(this));
            }
            else
                this.video.load();
        };
        VIVOModule.prototype._onVideoLoad = function () {
            var _this = this;
            console.log(MSG.VIDEO_LOAD_COMPLETED);
            moosnow.platform.videoLoading = false;
            if (this.video) {
                this.video.show()
                    .then(function () {
                    _this.videoPlaying = true;
                    moosnow.event.sendEventImmediately(EventType.ON_PLATFORM_HIDE, {});
                    console.log('激励视频广告展示完成');
                }).catch(function (err) {
                    console.log('激励视频广告展示失败', JSON.stringify(err));
                });
            }
        };
        VIVOModule.prototype._onVideoClose = function (isEnd) {
            console.log(MSG.VIDEO_CLOSE_COMPLETED, isEnd.isEnded);
            moosnow.platform.videoLoading = false;
            this.videoPlaying = false;
            if (!!isEnd.isEnded) {
                moosnow.http.clickVideo();
            }
            moosnow.event.sendEventImmediately(EventType.ON_PLATFORM_SHOW, {});
            if (moosnow.platform.videoCb) {
                var ret = (!!isEnd.isEnded) ? VIDEO_STATUS.END : VIDEO_STATUS.NOTEND;
                moosnow.platform.videoCb(ret);
            }
        };
        VIVOModule.prototype.prepareInter = function () {
            if (Common.isEmpty(this.interId)) {
                console.warn(MSG.INTER_KEY_IS_NULL);
                return;
            }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createInterstitialAd)
                return;
            if (this.inter) {
                this.inter.offLoad();
                this.inter.offClose();
                this.inter.offError();
                this.inter = null;
            }
            console.log('创建插屏广告');
            this.inter = window[this.platformName].createInterstitialAd({
                posId: this.interId
            });
            this.inter.onLoad(this._onInterLoad.bind(this));
            this.inter.onClose(this._onInterClose.bind(this));
            this.inter.onError(this._onInterError.bind(this));
            this.inter.load();
        };
        ;
        VIVOModule.prototype.showInter = function () {
            this.prepareInter();
        };
        VIVOModule.prototype._onInterLoad = function () {
            if (this.inter) {
                var t = this.inter.show();
                t && t.then(function () {
                    console.log('插屏广告展示完成');
                }).catch(function (err) {
                    console.log('插屏广告展示失败', err);
                });
            }
        };
        VIVOModule.prototype._onInterOnShow = function () {
            if (this.inter)
                this.inter.load();
        };
        VIVOModule.prototype.showAutoBanner = function () {
            console.log(' vivo 不支持自动');
        };
        VIVOModule.prototype.reportMonitor = function (name, value) {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].reportMonitor)
                return;
            window[this.platformName].reportMonitor('game_scene', 0);
        };
        VIVOModule.prototype._prepareNative = function (isLoad) {
            if (isLoad === void 0) { isLoad = false; }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createNativeAd)
                return;
            this.native = window[this.platformName].createNativeAd({
                posId: this.nativeId[this.nativeIdIndex]
            });
            this.native.onLoad(this._onNativeLoad.bind(this));
            this.native.onError(this._onNativeError.bind(this));
            this.nativeLoading = true;
            if (isLoad)
                this.native.load();
        };
        VIVOModule.prototype._onNativeLoad = function (res) {
            var _this = this;
            this.nativeLoading = false;
            console.log(MSG.NATIVE_LOAD_COMPLETED, res);
            if (res && res.adList && res.adList.length > 0) {
                this.nativeAdResult = res.adList[res.adList.length - 1];
                if (!Common.isEmpty(this.nativeAdResult.adId)) {
                    console.log(MSG.NATIVE_REPORT);
                    this.native.reportAdShow({
                        adId: this.nativeAdResult.adId
                    });
                }
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(Common.deepCopy(this.nativeAdResult));
                }
            }
            else {
                console.log(MSG.NATIVE_LIST_NULL);
                if (Common.isFunction(this.nativeCb)) {
                    moosnow.http.getAllConfig(function (res) {
                        if (res.nativeErrorShowInter == 1) {
                            console.log('原生加载出错，用插屏代替');
                            _this.showInter();
                        }
                        else {
                            _this.nativeCb(null);
                        }
                    });
                }
            }
        };
        VIVOModule.prototype._onNativeError = function (err) {
            var _this = this;
            this.nativeLoading = false;
            this.nativeAdResult = null;
            if (err.code == 20003) {
                if (this.nativeIdIndex < this.nativeId.length - 1) {
                    console.log(MSG.NATIVE_ERROR, err);
                    this.nativeIdIndex += 1;
                    this._destroyNative();
                }
                else {
                    console.log(MSG.NATIVE_NOT_ID_USE);
                    this.nativeIdIndex = 0;
                }
            }
            else {
                console.log(MSG.NATIVE_ERROR2, err);
            }
            moosnow.http.getAllConfig(function (res) {
                if (res.nativeErrorShowInter == 1) {
                    console.log('原生加载出错，用插屏代替');
                    _this.showInter();
                }
                else {
                    _this.nativeCb(null);
                }
            });
        };
        VIVOModule.prototype._destroyNative = function () {
            this.nativeLoading = false;
            this.native.offLoad(); // 移除原生广告加载成功回调
            this.native.offError(); // 移除失败回调
            this.native.destroy(); // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
            console.log(MSG.NATIVE_DESTROY);
        };
        /**
        * 目前只有OPPO VIVO 平台有此功能
        * 返回原生广告数据，开发者根据返回的数据来展现
        * 没有广告返回null
        *
        *
        * 例如 cocos
        * let adData=moosnow.platform.getNativeAd();
        * cc.loader.load(adData.imgUrlList[0], (err, texture) => {
        *   adImg.active = true
        *   adImg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
        * })
        *
        * 例如 laya
        * let adData=moosnow.platform.getNativeAd();
        * new Laya.Image().skin=adData.imgUrlList[0];
        *
        * @param callback 回调函数
        */
        VIVOModule.prototype.showNativeAd = function (callback) {
            var _this = this;
            this.nativeCb = callback;
            if (this.native) {
                var ret = this.native.load();
                ret && ret.then(function () {
                    console.log('原生广告加载完成');
                }).catch(function (err) {
                    console.log('原生广告加载失败');
                    moosnow.http.getAllConfig(function (res) {
                        if (res.nativeErrorShowInter == 1) {
                            console.log('原生加载出错，用插屏代替');
                            _this.showInter();
                        }
                        else {
                            _this.nativeCb(null);
                        }
                    });
                });
            }
            else {
                this._prepareNative(true);
                // if (this.native)
                //     this.native.load();
            }
        };
        /**
         * 目前只有OPPO平台有此功能
         * 用户点击了展示原生广告的图片时，使用此方法
         * 例如 cocos
         * this.node.on(CocosNodeEvent.TOUCH_END, () => {
         *     moosnow.platform.clickNative();
         * }, this)
         *
         *
         * 例如 laya
         * (new Laya.Image()).on(Laya.Event.MOUSE_UP, this, () => {
         *     moosnow.platform.clickNative();
         * })
         *
         */
        VIVOModule.prototype.clickNative = function (callback) {
            if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
                this.mClickedNativeCallback = callback;
                this.mIsClickedNative = true;
                console.log(MSG.NATIVE_CLICK, this.nativeAdResult.adId);
                this.native.reportAdClick({
                    adId: this.nativeAdResult.adId
                });
            }
        };
        VIVOModule.prototype.onAppShow = function () {
            if (this.mIsClickedNative) {
                this.mIsClickedNative = false;
                if (Common.isFunction(this.mClickedNativeCallback))
                    this.mClickedNativeCallback();
            }
        };
        VIVOModule.prototype.hasShortcutInstalled = function (success) {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].hasShortcutInstalled)
                return;
            window[this.platformName].hasShortcutInstalled({
                success: function (status) {
                    if (success)
                        success(!!status);
                    if (status) {
                        console.log('已创建');
                    }
                    else {
                        console.log('未创建');
                    }
                }
            });
        };
        VIVOModule.prototype.installShortcut = function (success, message) {
            if (message === void 0) { message = "方便下次快速启动"; }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].installShortcut)
                return;
            window[this.platformName].installShortcut({
                message: message,
                success: function (status) {
                    if (success)
                        success();
                    console.log('创建成功');
                }
            });
        };
        VIVOModule.prototype.exitApplication = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].exitApplication)
                return;
            window[this.platformName].exitApplication();
        };
        return VIVOModule;
    }(PlatformModule));

    var AD_POSITION = {
        /**
         * 不显示
         */
        NONE: 0,
        BANNER: 1,
        FLOAT: 2,
        /**
         * 侧拉广告
         */
        SIDE: 4,
        /**
         * 中部大导出
         */
        CENTER: 8,
        /**
         * 导出
         */
        EXPORT: 16,
        /**
         * 返回按钮
         */
        BACK: 32,
        /**
         * 黑色半透明遮挡
         */
        MASK: 64,
        /**
         * 延迟显示
         */
        WAIT: 128,
        /**
         * 左右两侧
         */
        LEFTRIGHT: 256,
        /**
        * 固定的六个
        */
        EXPORT_FIXED: 512,
        /**
        * 旋转入场
        */
        ROTATE: 1024,
        /**
        * 扩展2
        */
        EXTEND2: 2048,
        /**
        * 扩展3
        */
        EXTEND3: 4096,
        /**
        * 扩展4
        */
        EXTEND4: 8192,
        /**
         * 顶部
         */
        TOP: 32768,
        /**
         * 恢复到上一个状态
         */
        RECOVER: 16384,
    };

    var ResourceModule = /** @class */ (function (_super) {
        __extends(ResourceModule, _super);
        function ResourceModule() {
            return _super.call(this) || this;
        }
        ResourceModule.prototype.onEnable = function () {
        };
        /**
         * 加载resources下的cc.SpriteFrame, cc.AnimationClip, cc.Prefab
         * 不带扩展名
         * @method loadAsset
         * @param {String} url resources下路径
         * @param {typeof cc.Asset} assetType cc.SpriteFrame, cc.AnimationClip, cc.Prefab..
         * @param {Function} [callback] (err:Error,asset:cc.Asset)
         * @param {typeof cc.Asset} callback.asset cc.SpriteFrame, cc.AnimationClip, cc.Prefab..
         */
        ResourceModule.prototype.loadAsset = function (url, assetType, callback) {
            if (Common.getEngine() == ENGINE_TYPE.COCOS) {
                if (cc.resources)
                    cc.resources.load(url, assetType, function (err, asset) {
                        if (err) {
                            console.log(' cc.resources.load ', err);
                            return;
                        }
                        if (callback) {
                            callback(err, asset);
                        }
                    });
                else {
                    var res_1 = cc.loader.load(url, assetType, function (err, asset) {
                        if (err) {
                            console.log(' cc.loader.load ', err);
                            return;
                        }
                        if (callback) {
                            callback(null, res_1);
                        }
                    });
                }
            }
            else if (Common.getEngine() == ENGINE_TYPE.LAYA) {
                var res = Laya.loader.getRes(url);
                if (res) {
                    if (callback) {
                        callback(null, res);
                    }
                    return;
                }
                Laya.loader.create(url, Laya.Handler.create(this, function (res) {
                    callback(null, res);
                }), null, assetType);
            }
        };
        /**
        * 加载resources目录下某个目录下的指定类型的资源(用于预加载整个目录资源) 仅COCOS支持
        * @param {string} dir resources下的目录
        * @param {typeof cc.Asset} type
        * @param {Function} progressCallback (precent:number)
        * @param {Function} completeCallback (err:Error,reses:Asset[])
        */
        ResourceModule.prototype.loadAssetDir = function (dir, type, progressCallback, completeCallback) {
            if (Common.getEngine() == ENGINE_TYPE.COCOS) {
                cc.loader.loadResDir(dir, type, function (completedCount, totalCount, item) {
                    var precent = completedCount / totalCount * 100;
                    precent = Math.ceil(precent);
                    if (progressCallback) {
                        progressCallback(precent);
                    }
                }, function (err, res) {
                    if (completeCallback) {
                        completeCallback(err, res);
                    }
                });
            }
            else {
                console.warn("不支持loadAssetDir");
            }
        };
        ResourceModule.prototype.onDisable = function () {
        };
        return ResourceModule;
    }(BaseModule));

    var AudioModule = /** @class */ (function (_super) {
        __extends(AudioModule, _super);
        function AudioModule() {
            var _this = _super.call(this) || this;
            _this.mBtnSound = null;
            /**
                * 存储在本地声音有关的设置key（字段字符串）
                * IS_MUTE 是否所有都静音{boolean}
                * IS_MUTE_MUSIC 是否背景音乐静音{boolean}
                * IS_MUTE_SOUND 是否音效静音{boolean}
                * VOLUME_MUSIC 背景音乐音量大小{number}
                * VOLUME_SOUND 音效音量大小{number}
               */
            _this.IS_MUTE = "isMute";
            _this.IS_MUTE_MUSIC = "isMuteMusic";
            _this.IS_MUTE_SOUND = "isMuteSound";
            _this.VOLUME_MUSIC = "volumeMusic";
            _this.VOLUME_SOUND = "volumeSound";
            _this._volumeMusic = 1;
            _this._volumeSound = 1;
            _this._isMuteMusic = false;
            _this._isMuteSound = false;
            _this._isMute = false;
            return _this;
        }
        Object.defineProperty(AudioModule.prototype, "btnSound", {
            get: function () {
                return this.mBtnSound;
            },
            set: function (value) {
                this.mBtnSound = value;
            },
            enumerable: true,
            configurable: true
        });
        AudioModule.prototype.playClickEffect = function () {
            if (this.mBtnSound)
                this.playSound(this.mBtnSound);
            else {
                console.log('没有点击音效');
            }
        };
        Object.defineProperty(AudioModule.prototype, "isMuteSound", {
            /**
                * 设置获取是否静音音效音乐
               */
            get: function () {
                return this._isMuteSound;
            },
            set: function (value) {
                this._isMuteSound = value;
                //Laya.SoundManager.soundMuted = value;
                this.save();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioModule.prototype, "isMute", {
            /**
             * 设置获取是否所有静音
            */
            get: function () {
                return this._isMute;
            },
            set: function (value) {
                this._isMute = value;
                this.save();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioModule.prototype, "isMuteMusic", {
            /**
              * 设置获取是否静音背景音乐
             */
            get: function () {
                return this._isMuteMusic;
            },
            set: function (value) {
                this._isMuteMusic = value;
                //Laya.SoundManager.musicMuted = value;
                this.save();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioModule.prototype, "volumeSound", {
            /**
             * 设置获取音效声音大小
             */
            get: function () {
                return this._volumeSound;
            },
            set: function (value) {
                this._volumeSound = value;
                //Laya.SoundManager.setSoundVolume(value);
                this.save();
            },
            enumerable: true,
            configurable: true
        });
        /**
          * 播放音效
          */
        AudioModule.prototype.playSound = function (audioClip, loops, complete, soundClass, startTime) {
            if (loops === void 0) { loops = false; }
            if (complete === void 0) { complete = null; }
            if (soundClass === void 0) { soundClass = null; }
            if (startTime === void 0) { startTime = 0; }
            if (this.isMute)
                return;
            var soundId = cc.audioEngine.playEffect(audioClip, loops);
            cc.audioEngine.setFinishCallback(soundId, function (res) {
                if (complete) {
                    complete(res);
                }
                if (!loops) {
                    //cc.audioEngine.getState(soundId)==cc.audioEngine.AudioState.PLAYING
                    cc.audioEngine.stop(soundId);
                }
            });
            return soundId;
        };
        AudioModule.prototype._replayMusic = function () {
            this.playMusic(this._musicClip, this._musicLoops, this._musicComplete);
        };
        /**
         * 播放背景音乐 仅支持Laya cocos
         * @param audioClip cocos cc.AudioClip  laya 文件路径
         * @param loops 是否循环播放
         * @param complete 播放完成回调
         */
        AudioModule.prototype.playMusic = function (audioClip, loops, complete) {
            if (loops === void 0) { loops = true; }
            if (complete === void 0) { complete = null; }
            if (this.isMute)
                return;
            this._musicClip = audioClip;
            this._musicLoops = loops;
            this._musicComplete = complete;
            if (Common.getEngine() == ENGINE_TYPE.COCOS) {
                if (!cc.audioEngine)
                    return;
                if (!cc.audioEngine.playMusic)
                    return;
                var soundId = cc.audioEngine.playMusic(audioClip, loops);
                cc.audioEngine.setFinishCallback(soundId, function (res) {
                    if (complete) {
                        complete(res);
                    }
                });
                return soundId;
            }
            else if (Common.getEngine() == ENGINE_TYPE.LAYA) {
                Laya.SoundManager.playMusic("" + audioClip, 1, new Laya.Handler(this, function (res) {
                    if (complete) {
                        complete(res);
                    }
                }));
            }
        };
        /**
         * 关闭所有背景音效
         */
        AudioModule.prototype.stopMusic = function () {
            // if (this.mMusicId)
            //     cc.audioEngine.stop(this.mMusicId)
            if (Common.getEngine() == ENGINE_TYPE.COCOS)
                cc.audioEngine.stopMusic();
            else if (Common.getEngine() == ENGINE_TYPE.LAYA)
                Laya.SoundManager.stopMusic();
        };
        /**
         * 保存数据到本地
        */
        AudioModule.prototype.save = function () {
            moosnow.setting.setValue(this.IS_MUTE, "" + this.isMute);
            moosnow.setting.setValue(this.IS_MUTE_MUSIC, "" + this.isMuteMusic);
            moosnow.setting.setValue(this.IS_MUTE_SOUND, "" + this.isMuteSound);
            // cc.sys.localStorage.setItem(this.VOLUME_MUSIC, "" + this.volumeMusic);
            // cc.sys.localStorage.setItem(this.VOLUME_SOUND, "" + this.volumeSound);
        };
        AudioModule.prototype.getSave = function () {
            this.isMute = moosnow.setting.getString(this.IS_MUTE, "false") == "true" ? true : false;
            this.isMuteMusic = moosnow.setting.getString(this.IS_MUTE_MUSIC, "false") == "true" ? true : false;
        };
        return AudioModule;
    }(BaseModule));

    var moosnow$1 = /** @class */ (function () {
        function moosnow() {
            this.VIDEO_STATUS = VIDEO_STATUS;
            this.VIDEO_MSG = VIDEO_MSG;
            this.SHARE_MSG = SHARE_MSG;
            this.BANNER_POSITION = BANNER_POSITION;
            this.SHARE_CHANNEL = SHARE_CHANNEL;
            this.APP_PLATFORM = PlatformType;
            this.PLATFORM_EVENT = EventType;
            this.Common = Common;
            this.AD_POSITION = AD_POSITION;
            this.mData = new GameDataCenter();
            this.mResource = new ResourceModule();
            this.mSetting = new SettingModule();
            /**
             * 事件消息
             */
            this.mEvent = new EventModule();
            (window["moosnow"]) = this;
            this.mData = new GameDataCenter();
            this.mSetting = new SettingModule();
            this.initPlatform();
            this.initHttp();
            this.initAd();
            this.mAudio = new AudioModule();
        }
        /**
             * 获取当前的游戏平台
             */
        moosnow.prototype.getAppPlatform = function () {
            return Common.platform;
        };
        moosnow.prototype.initHttp = function () {
            if (Common.platform == PlatformType.WX)
                this.mHttp = new HttpModule();
            else if (Common.platform == PlatformType.OPPO_ZS) {
                this.mHttp = new ZSHttpModule();
            }
            else
                this.mHttp = new HttpModule();
        };
        moosnow.prototype.initPlatform = function () {
            // console.log('初始化平台', Common.platform, 'oppo', PlatformType.OPPO, 'vivo', PlatformType.VIVO)
            if (Common.platform == PlatformType.WX)
                this.mPlatform = new WXModule();
            else if (Common.platform == PlatformType.OPPO)
                this.mPlatform = new OPPOModule();
            else if (Common.platform == PlatformType.VIVO)
                this.mPlatform = new VIVOModule();
            else if (Common.platform == PlatformType.OPPO_ZS) {
                this.mPlatform = new ZSOPPOModule();
            }
            else if (Common.platform == PlatformType.BYTEDANCE)
                this.mPlatform = new TTModule();
            else if (Common.platform == PlatformType.QQ)
                this.mPlatform = new QQModule();
            else if (Common.platform == PlatformType.BAIDU)
                this.mPlatform = new BDModule();
            else {
                this.mPlatform = new PlatformModule();
            }
            // console.log(' cc.sys.browserType ', cc.sys.browserType, ' cc.sys.platform ', cc.sys.platform)
        };
        moosnow.prototype.initAd = function () {
            if (Common.platform == PlatformType.WX || Common.platform == PlatformType.PC || Common.platform == PlatformType.BYTEDANCE)
                this.mAd = new WXAdModule();
            else if (Common.platform == PlatformType.OPPO) {
                this.mAd = new OPPOAdModule();
            }
            else if (Common.platform == PlatformType.OPPO_ZS) {
                this.mAd = new ZSOPPOAdModule();
            }
            else
                this.mAd = new AdModule();
        };
        Object.defineProperty(moosnow.prototype, "platform", {
            get: function () {
                return this.mPlatform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnow.prototype, "ad", {
            /**
             * 墨雪广告
             */
            get: function () {
                return this.mAd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnow.prototype, "http", {
            get: function () {
                return this.mHttp;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnow.prototype, "data", {
            /**
             * 本地内存
             */
            get: function () {
                return this.mData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnow.prototype, "resource", {
            get: function () {
                return this.mResource;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnow.prototype, "setting", {
            /**
             * 本地持久化缓存
             */
            get: function () {
                return this.mSetting;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnow.prototype, "event", {
            get: function () {
                return this.mEvent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnow.prototype, "audio", {
            get: function () {
                return this.mAudio;
            },
            set: function (value) {
                this.mAudio = value;
            },
            enumerable: true,
            configurable: true
        });
        return moosnow;
    }());
    new moosnow$1();

    return moosnow$1;

}());
