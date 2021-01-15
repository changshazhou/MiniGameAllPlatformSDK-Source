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

    var APP_PLATFORM;
    (function (APP_PLATFORM) {
        /**
         * 微信
         */
        APP_PLATFORM[APP_PLATFORM["WX"] = 0] = "WX";
        /**
         * 字节跳动
         */
        APP_PLATFORM[APP_PLATFORM["BYTEDANCE"] = 1] = "BYTEDANCE";
        /**
         * OPPO
         */
        APP_PLATFORM[APP_PLATFORM["OPPO"] = 2] = "OPPO";
        /**
         * OPPO
         */
        APP_PLATFORM[APP_PLATFORM["OPPO_ZS"] = 3] = "OPPO_ZS";
        /**
         * 百度
         */
        APP_PLATFORM[APP_PLATFORM["BAIDU"] = 4] = "BAIDU";
        /**
         * QQ
         */
        APP_PLATFORM[APP_PLATFORM["QQ"] = 5] = "QQ";
        /**
         * PC电脑
         */
        APP_PLATFORM[APP_PLATFORM["PC"] = 6] = "PC";
        /**
         * VIVO
         */
        APP_PLATFORM[APP_PLATFORM["VIVO"] = 7] = "VIVO";
        /**
        * VIVO
        */
        APP_PLATFORM[APP_PLATFORM["UC"] = 8] = "UC";
        /**
        * VIVO
        */
        APP_PLATFORM[APP_PLATFORM["HW"] = 9] = "HW";
    })(APP_PLATFORM || (APP_PLATFORM = {}));

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
                    this.mPlatform = APP_PLATFORM.BYTEDANCE;
                else if (window['swan'])
                    this.mPlatform = APP_PLATFORM.BAIDU;
                else if (window['qq'])
                    this.mPlatform = APP_PLATFORM.QQ;
                else if (window['qg']) {
                    if (window["qg"] && window["qg"].getSystemInfoSync) {
                        var sys = window["qg"].getSystemInfoSync();
                        console.log('平台判断', JSON.stringify(sys));
                        if (sys && sys.brand && sys.brand.toLocaleLowerCase().indexOf("vivo") != -1) {
                            this.mPlatform = APP_PLATFORM.VIVO;
                        }
                        else if (winCfg.oppo && winCfg.oppo.url && winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                            this.mPlatform = APP_PLATFORM.OPPO_ZS;
                        else {
                            this.mPlatform = APP_PLATFORM.OPPO;
                        }
                    }
                    else if (winCfg.oppo && winCfg.oppo.url && winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                        this.mPlatform = APP_PLATFORM.OPPO_ZS;
                    else {
                        this.mPlatform = APP_PLATFORM.OPPO;
                    }
                }
                else if (window['uc'])
                    this.mPlatform = APP_PLATFORM.UC;
                else if (window['hbs'])
                    this.mPlatform = APP_PLATFORM.HW;
                else if (window['wx'])
                    this.mPlatform = APP_PLATFORM.WX;
                else {
                    if (winCfg.debug && winCfg[winCfg.debug]) {
                        if (winCfg.debug == "wx")
                            this.mPlatform = APP_PLATFORM.WX;
                        else if (winCfg.debug == "oppo")
                            if (winCfg.oppo && winCfg.oppo.url && winCfg.oppo.url.indexOf("platform.qwpo2018.com") != -1)
                                this.mPlatform = APP_PLATFORM.OPPO_ZS;
                            else
                                this.mPlatform = APP_PLATFORM.OPPO;
                        else if (winCfg.debug == "bd")
                            this.mPlatform = APP_PLATFORM.BAIDU;
                        else if (winCfg.debug == "byte")
                            this.mPlatform = APP_PLATFORM.BYTEDANCE;
                        else if (winCfg.debug == "qq")
                            this.mPlatform = APP_PLATFORM.QQ;
                        else if (winCfg.debug == "vivo")
                            this.mPlatform = APP_PLATFORM.VIVO;
                        else if (winCfg.debug == "uc")
                            this.mPlatform = APP_PLATFORM.UC;
                        else if (winCfg.debug == "hw")
                            this.mPlatform = APP_PLATFORM.HW;
                        else
                            this.mPlatform = APP_PLATFORM.PC;
                    }
                    else
                        this.mPlatform = APP_PLATFORM.PC;
                }
                return this.mPlatform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Common, "isOnlyUI", {
            get: function () {
                return window["onlyUI"] == true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Common, "isPC", {
            get: function () {
                return cc.sys.browserType === cc.sys.BROWSER_TYPE_CHROME;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Common, "config", {
            get: function () {
                var winCfg = window["moosnowConfig"];
                var config;
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
            this.mScheduleIndex = 0;
            this.mMaping = {};
        }
        BaseModule.prototype.schedule = function (callback, time) {
            var arg = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                arg[_i - 2] = arguments[_i];
            }
            var self = this;
            // this.mMaping[this.mScheduleIndex] = callback;
            var handle = setInterval(function () {
                if (callback)
                    callback.apply.apply(callback, __spreadArrays([self], arg));
            }, time * 1000, self);
            this.mIntervalArr[this.mScheduleIndex] = {
                handle: handle,
                callback: callback
            };
            this.mScheduleIndex++;
        };
        BaseModule.prototype.unschedule = function (callback) {
            for (var idx in this.mIntervalArr) {
                if (this.mIntervalArr[idx].callback == callback) {
                    clearInterval(parseInt(this.mIntervalArr[idx].handle));
                }
            }
        };
        BaseModule.prototype.scheduleOnce = function (callback, time) {
            var arg = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                arg[_i - 2] = arguments[_i];
            }
            var self = this;
            var handle = setTimeout(function () {
                clearTimeout(handle);
                if (callback)
                    callback.apply.apply(callback, __spreadArrays([self], arg));
            }, time * 1000);
            this.mTimeoutArr[this.mScheduleIndex] = {
                handle: handle,
                callback: callback
            };
            this.mScheduleIndex++;
        };
        BaseModule.prototype.unscheduleOnce = function (callback) {
            for (var idx in this.mTimeoutArr) {
                if (this.mTimeoutArr[idx].callback == callback) {
                    clearInterval(parseInt(this.mTimeoutArr[idx].handle));
                }
            }
        };
        BaseModule.schedule = function (callback, time) {
            var arg = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                arg[_i - 2] = arguments[_i];
            }
            var self = this;
            // this.mMaping[this.mScheduleIndex] = callback;
            var handle = setInterval(function () {
                if (callback)
                    callback.apply.apply(callback, __spreadArrays([self], arg));
            }, time * 1000, self);
            this.mIntervalArr[this.mScheduleIndex] = {
                handle: handle,
                callback: callback
            };
            this.mScheduleIndex++;
        };
        BaseModule.unschedule = function (callback) {
            for (var idx in this.mIntervalArr) {
                if (this.mIntervalArr[idx].callback == callback) {
                    clearInterval(parseInt(this.mIntervalArr[idx].handle));
                }
            }
        };
        BaseModule.scheduleOnce = function (callback, time) {
            var self = this;
            var handle = setTimeout(function () {
                clearTimeout(handle);
                if (callback)
                    callback.apply(self);
            }, time * 1000);
            this.mTimeoutArr[this.mScheduleIndex] = {
                handle: handle,
                callback: callback
            };
            this.mScheduleIndex++;
        };
        BaseModule.unscheduleOnce = function (callback) {
            for (var idx in this.mTimeoutArr) {
                if (this.mTimeoutArr[idx].callback == callback) {
                    clearInterval(parseInt(this.mTimeoutArr[idx].handle));
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
        BaseModule.mScheduleIndex = 0;
        return BaseModule;
    }());

    var BANNER_HORIZONTAL = /** @class */ (function () {
        function BANNER_HORIZONTAL() {
        }
        BANNER_HORIZONTAL.NONE = 0;
        BANNER_HORIZONTAL.LEFT = 1;
        BANNER_HORIZONTAL.RIGHT = 2;
        BANNER_HORIZONTAL.CENTER = 8;
        return BANNER_HORIZONTAL;
    }());
    /**
     * 垂直方向
     */
    var BANNER_VERTICAL = /** @class */ (function () {
        function BANNER_VERTICAL() {
        }
        BANNER_VERTICAL.NONE = 16;
        BANNER_VERTICAL.TOP = 32;
        BANNER_VERTICAL.CENTER = 64;
        BANNER_VERTICAL.BOTTOM = 128;
        return BANNER_VERTICAL;
    }());

    var VIDEO_STATUS = {
        END: "__video_end",
        NOTEND: "__video_not_end",
        ERR: "__video_error"
    };

    var PLATFORM_EVENT = /** @class */ (function () {
        function PLATFORM_EVENT() {
        }
        PLATFORM_EVENT.VIBRATESWITCH_CHANGED = "VIBRATESWITCH_CHANGED";
        PLATFORM_EVENT.SOUNDSWITCH_CHANGED = "SOUNDSWITCH_CHANGED";
        PLATFORM_EVENT.MUSICSWITCH_CHANGED = "MUSICSWITCH_CHANGED";
        PLATFORM_EVENT.ON_PLATFORM_SHOW = "ON_PLATFORM_SHOW";
        PLATFORM_EVENT.ON_PLATFORM_HIDE = "ON_PLATFORM_HIDE";
        PLATFORM_EVENT.ON_BANNER_ERROR = "ON_BANNER_ERROR";
        PLATFORM_EVENT.ON_BANNER_HIDE = "ON_BANNER_HIDE";
        PLATFORM_EVENT.ON_FLASH_BANNER_HIDE = "ON_FLASH_BANNER_HIDE";
        PLATFORM_EVENT.ON_AD_SHOW = "ON_AD_SHOW";
        PLATFORM_EVENT.AD_VIEW_CHANGE = "AD_VIEW_CHANGE";
        PLATFORM_EVENT.AD_VIEW_REFRESH = "AD_VIEW_REFRESH";
        PLATFORM_EVENT.COIN_CHANGED = "COIN_CHANGED";
        PLATFORM_EVENT.RANDOWM_NAVIGATE = "RANDOWM_NAVIGATE";
        PLATFORM_EVENT.COMPONENT_CHECKBOX_TOGGLE = "COMPONENT_CHECKBOX_TOGGLE";
        PLATFORM_EVENT.PRIZE_BOX_UNLOCAK = "PRIZE_BOX_UNLOCAK";
        PLATFORM_EVENT.NAVIGATE_TO_MINI = "NAVIGATE_TO_MINI";
        return PLATFORM_EVENT;
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

    var BLOCK_HORIZONTAL = /** @class */ (function () {
        function BLOCK_HORIZONTAL() {
        }
        BLOCK_HORIZONTAL.NONE = 0;
        BLOCK_HORIZONTAL.LEFT = 1;
        BLOCK_HORIZONTAL.RIGHT = 2;
        BLOCK_HORIZONTAL.CENTER = 8;
        return BLOCK_HORIZONTAL;
    }());
    /**
     * 垂直方向
     */
    var BLOCK_VERTICAL = /** @class */ (function () {
        function BLOCK_VERTICAL() {
        }
        BLOCK_VERTICAL.NONE = 16;
        BLOCK_VERTICAL.TOP = 32;
        BLOCK_VERTICAL.CENTER = 64;
        BLOCK_VERTICAL.BOTTOM = 128;
        return BLOCK_VERTICAL;
    }());

    // var videoLoading: boolean = false;
    // var videoCb = null;
    var PlatformModule = /** @class */ (function (_super) {
        __extends(PlatformModule, _super);
        function PlatformModule() {
            var _this = _super.call(this) || this;
            _this.baseUrl = "https://api.liteplay.com.cn/";
            _this.currentShortCall = null;
            _this.shareFail = null;
            _this.vibrateOn = false;
            _this.systemInfo = null;
            _this.block = null;
            _this.banner = {};
            _this.video = {};
            _this.inter = null;
            _this.native = null;
            _this.box = null;
            _this.platformName = "wx";
            _this.bannerErrorQuene = [];
            _this.nativeIdIndex = 0;
            _this.mBannerWidth = 300;
            _this.bannerHeigth = 96;
            _this.bannerHorizontal = BANNER_HORIZONTAL.NONE;
            _this.bannerVertical = BANNER_VERTICAL.NONE;
            _this.bannerShowCount = 0;
            _this.bannerShowCountLimit = 3;
            _this.bannerShowTime = 0;
            _this.bannerShowTimeLimit = 15;
            _this.bannerLimitType = 0;
            _this.bannerCb = null;
            _this.bannerStyle = null;
            _this.isBannerShow = false;
            _this.blockWidth = 300;
            _this.blockHeigth = 96;
            _this.blockHorizontal = BLOCK_HORIZONTAL.NONE;
            _this.blockVertical = BLOCK_VERTICAL.NONE;
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
            _this.navigateEnd = true;
            _this.preloadBannerId = "";
            _this.isLoaded = false;
            // this._regisiterWXCallback();
            _this.initShare(true);
            _this.share_clickTime = null; //分享拉起时间
            _this.currentShareCallback = null; //模拟分享回调
            _this.shareFail = false;
            _this.updateProgram();
            _this.initRecord();
            return _this;
        }
        PlatformModule.prototype.getAdId = function (idArray, index) {
            if (index === void 0) { index = 0; }
            if (idArray instanceof Array) {
                if (idArray.length > 0) {
                    if (index < 0) {
                        return idArray[Common.randomNumBoth(0, idArray.length - 1)];
                    }
                    else if (idArray.length - 1 < index) {
                        console.warn("id\u6570\u7EC4\u5C0F\u4E8E\u4F20\u5165\u7D22\u5F15\u503C\uFF0C\u672C\u6B21\u4F7F\u7528" + idArray[0] + "\uFF0C\u8BF7\u68C0\u67E5\u4EE3\u7801", idArray, index);
                        return idArray[0];
                    }
                    return idArray[index];
                }
                else {
                    console.warn('Id 配置为空');
                    return null;
                }
            }
            else {
                return idArray;
            }
        };
        PlatformModule.prototype.getBannerId = function (idx) {
            if (idx === void 0) { idx = 0; }
            return this.getAdId(Common.config.bannerId, idx);
        };
        ;
        PlatformModule.prototype.getBlockId = function (idx) {
            if (idx === void 0) { idx = 0; }
            return this.getAdId(Common.config.blockId, idx);
        };
        ;
        PlatformModule.prototype.getVideoId = function (idx) {
            if (idx === void 0) { idx = 0; }
            return this.getAdId(Common.config.videoId, idx);
        };
        ;
        Object.defineProperty(PlatformModule.prototype, "interId", {
            get: function () {
                return this.getAdId(Common.config.interId, -1);
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(PlatformModule.prototype, "boxId", {
            get: function () {
                return this.getAdId(Common.config.boxId, -1);
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(PlatformModule.prototype, "nativeId", {
            get: function () {
                return this.getAdId(Common.config.nativeId, -1);
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(PlatformModule.prototype, "bannerWidth", {
            get: function () {
                var wxsys = this.getSystemInfoSync();
                var windowWidth = wxsys.windowWidth;
                //横屏模式
                if (wxsys.windowHeight < wxsys.windowWidth) {
                    if (windowWidth < 300) {
                        this.mBannerWidth = windowWidth;
                    }
                    else {
                        this.mBannerWidth = 300;
                    }
                }
                else {
                    //竖屏
                    this.mBannerWidth = windowWidth;
                }
                return this.mBannerWidth;
            },
            set: function (value) {
                this.mBannerWidth = value;
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
                appid: Common.config.moosnowAppId,
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
            var configVersion = Common.config.version;
            var versionRet = remoteVersion != configVersion;
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
                if (token == "") {
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
        PlatformModule.prototype.navigate2Video = function (videoid) {
        };
        PlatformModule.prototype.getClipboardData = function (success, fail) {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].getClipboardData)
                return;
            window[this.platformName].getClipboardData({
                success: function (res) {
                    if (success)
                        success(res.data);
                    console.log("" + res.data);
                },
                fail: function (res) {
                    if (fail)
                        fail(res);
                    console.log("getClipboardData\u8C03\u7528\u5931\u8D25");
                },
            });
        };
        PlatformModule.prototype.setClipboardData = function (msg, success, fail) {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].setClipboardData)
                return;
            window[this.platformName].setClipboardData({
                data: msg,
                success: function (res) {
                    if (success)
                        success(res);
                    console.log("setClipboardData\u8C03\u7528\u6210\u529F");
                },
                fail: function (res) {
                    if (fail)
                        fail(res);
                    console.log("setClipboardData\u8C03\u7528\u5931\u8D25");
                },
            });
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
            if (Date.now() - this.prevNavigate < 500) {
                console.log(MSG.NAVIGATE_FAST);
                return;
            }
            this.prevNavigate = Date.now();
            if (!this.navigateEnd) {
                console.log("跳转未结束");
                return;
            }
            this.navigateEnd = false;
            if (!window[this.platformName]) {
                this.scheduleOnce(function () {
                    _this.navigateEnd = true;
                }, 2);
                if (fail)
                    fail();
                // if (success)
                //     success();
                return;
            }
            var launchOption = this.getLaunchOption();
            var appid = row.appid, path = row.path, extraData = row.extraData;
            extraData = extraData || {};
            var param = {
                position: row.position,
                appid: appid,
                img: row.atlas || row.img,
                scene: launchOption.scene,
                wxgamecid: launchOption.query.wxgamecid
            };
            moosnow.http.point("打开跳转", param);
            moosnow.http.navigate(row, function (res) { });
            window[this.platformName].navigateToMiniProgram({
                appId: appid,
                path: path,
                extraData: extraData,
                success: function () {
                    console.log('跳转参数', param);
                    moosnow.http.point("跳转", param);
                    moosnow.http.navigateEnd(moosnow.data.getNavigateToken(appid));
                    if (success)
                        success();
                },
                fail: function (err) {
                    moosnow.data.resetNavigateToken();
                    console.log('跳转失败 ', err, ' fail callback ', !!fail);
                    if (fail)
                        fail();
                },
                complete: function () {
                    moosnow.event.sendEventImmediately(PLATFORM_EVENT.NAVIGATE_TO_MINI, param);
                    _this.navigateEnd = true;
                    moosnow.data.resetNavigateToken();
                    if (complete)
                        complete();
                }
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
            if (!this.mLaunchOption) {
                if (window[this.platformName]) {
                    if (window[this.platformName].getEnterOptionsSync)
                        this.mLaunchOption = window[this.platformName].getEnterOptionsSync();
                    if (window[this.platformName].getLaunchOptionsSync)
                        this.mLaunchOption = window[this.platformName].getLaunchOptionsSync();
                }
                else {
                    this.mLaunchOption = {};
                }
            }
            return this.mLaunchOption;
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
        /**
         * 裁剪视频
         * @param timeRange 默认[2,2] 裁剪视频时保留的前后时长
         * @param callback 剪切完成时回调
         */
        PlatformModule.prototype.clipRecord = function (timeRange, callback) {
            if (timeRange === void 0) { timeRange = [2, 2]; }
        };
        ;
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
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_SHOW, res);
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
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_HIDE, res);
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
            // this._prepareBanner()
        };
        PlatformModule.prototype._prepareBanner = function (bannerId) {
            if (!window[this.platformName].createBannerAd)
                return;
            var style = this._getBannerPosition();
            if (!Common.isEmpty(this.banner[bannerId])) {
                this.destroyBanner(bannerId);
            }
            console.log("\u4F7F\u7528id[" + bannerId + "]\u521B\u5EFAbanner");
            this.banner[bannerId] = window[this.platformName].createBannerAd({
                adUnitId: bannerId,
                adIntervals: 30,
                style: {
                    top: style.top,
                    left: style.left,
                    width: this.bannerWidth
                }
            });
            this.banner[bannerId].isLoaded = false;
            this.banner[bannerId].bannerShowCount = 0;
            this.banner[bannerId].bannerShowTime = Date.now();
            if (this.banner[bannerId]) {
                this.banner[bannerId].onResize(this._onBannerResize.bind(this, bannerId));
                this.banner[bannerId].onError(this._onBannerError.bind(this, bannerId));
                this.banner[bannerId].onLoad(this._onBannerLoad.bind(this, bannerId));
            }
        };
        /**
         * 创建banner
         * @param adIndex
         * @return bannerId
         */
        PlatformModule.prototype._createBannerAd = function (adIndex) {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var bannerId = this.getBannerId(adIndex);
            if (Common.isEmpty(bannerId)) {
                console.warn(MSG.BANNER_KEY_IS_NULL);
                return;
            }
            if (!Common.isEmpty(this.banner[bannerId]))
                return bannerId;
            else {
                this._prepareBanner(bannerId);
            }
            return bannerId;
        };
        PlatformModule.prototype.triggerBannerError = function (bannerId) {
            if (this.bannerErrorQuene[bannerId].isError
                && this.bannerErrorQuene[bannerId].isShow) {
                moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_ERROR, {
                    bannerId: bannerId,
                    horizontal: this.bannerHorizontal,
                    vertical: this.bannerVertical
                });
                this.bannerErrorQuene[bannerId] = null;
            }
        };
        PlatformModule.prototype._onBannerLoad = function (bannerId) {
            console.log("PlatformModule ~ _onBannerLoad ~ bannerId", bannerId);
            this.bannerErrorQuene[bannerId] = null;
            this.bannerShowCount = 0;
        };
        PlatformModule.prototype._onBannerError = function (bannerId, err) {
            console.warn('banner___error:', err);
            this.banner[bannerId] = null;
            this.isBannerShow = false;
            if (!this.bannerErrorQuene[bannerId])
                this.bannerErrorQuene[bannerId] = {};
            this.bannerErrorQuene[bannerId].isError = true;
            this.triggerBannerError(bannerId);
        };
        PlatformModule.prototype._onBannerResize = function (bannerId, size) {
            console.log("_bottomCenterBanner -> size", size);
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var owner = this.banner[bannerId];
            if (owner) {
                if (owner.style) {
                    if (!isNaN(owner.style.realWidth))
                        this.bannerWidth = owner.style.realWidth;
                    if (!isNaN(owner.style.realHeight))
                        this.bannerHeigth = owner.style.realHeight;
                }
                else {
                    console.warn("_onBannerResize -> owner 1", owner);
                }
            }
            if (this.bannerStyle)
                this.applyCustomStyle({
                    banner: owner
                });
            else if (owner && owner.style) {
                owner.style.left = (windowWidth - size.width) / 2;
            }
            else {
                console.warn("_onBannerResize -> owner 2", owner);
            }
        };
        PlatformModule.prototype._resetBanenrStyle = function (e) {
            console.log("PlatformModule ~ _resetBanenrStyle ~ size", e);
            if (this.bannerStyle) {
                this.applyCustomStyle(e);
            }
            else {
                var style = this._getBannerPosition();
                if (e.banner) {
                    e.banner.style.top = style.top;
                    e.banner.style.left = style.left;
                    console.log(MSG.BANNER_RESIZE, e.banner.style, 'set top ', top);
                }
            }
        };
        PlatformModule.prototype.applyCustomStyle = function (e) {
            for (var key in this.bannerStyle) {
                if (e.banner)
                    e.banner.style[key] = this.bannerStyle[key];
            }
        };
        PlatformModule.prototype._getBannerPosition = function () {
            var horizontal = this.bannerHorizontal;
            var vertical = this.bannerVertical;
            // console.log("_getBannerPosition -> horizontal", horizontal)
            // console.log("_getBannerPosition -> vertical", vertical)
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var top = 0;
            var left = 0;
            if (vertical == BANNER_VERTICAL.TOP) {
                top = 0;
            }
            else if (vertical == BANNER_VERTICAL.CENTER) {
                top = (windowHeight - this.bannerHeigth) / 2;
            }
            else if (vertical == BANNER_VERTICAL.BOTTOM) {
                top = windowHeight - this.bannerHeigth;
            }
            if (horizontal == BANNER_HORIZONTAL.LEFT) {
                left = 0;
            }
            else if (horizontal == BANNER_HORIZONTAL.RIGHT) {
                left = windowWidth - this.bannerWidth;
            }
            else if (horizontal == BANNER_HORIZONTAL.CENTER) {
                left = (windowWidth - this.bannerWidth) / 2;
            }
            console.log("PlatformModule ~ _getBannerPosition ~ left", left, top);
            return {
                left: left,
                top: top,
            };
        };
        /**
         * @ 预加载banner ，返回 banner id 的 index
         * @ 随机banner的时候有用
         * @param idIndex
         */
        PlatformModule.prototype.preloadBanner = function (idIndex) {
            if (idIndex === void 0) { idIndex = -1; }
            this.preloadBannerId = this._createBannerAd(idIndex);
            return this.getPreloadBannerIndex();
        };
        /**
         * 获取preload
         */
        PlatformModule.prototype.getPreloadBannerIndex = function () {
            var arr = Common.config.bannerId;
            if (arr instanceof Array) {
                return arr.indexOf(this.preloadBannerId);
            }
            return 0;
        };
        /**
          * 显示平台的banner广告
          * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
          * @param callback 点击回调
          * @param horizontal banner的位置，默认底部
          * @param vertical banner的位置，默认底部
          * @param idIndex id顺序 -1 会随机
          * @param style 自定义样式
          */
        PlatformModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (idIndex === void 0) { idIndex = -1; }
            console.log(MSG.BANNER_SHOW);
            this.bannerCb = callback;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerHorizontal = horizontal;
            this.bannerVertical = vertical;
            this.bannerStyle = style;
            this._hideBanner();
            this.currentBannerId = this._createBannerAd(idIndex);
            if (!this.bannerErrorQuene[this.currentBannerId])
                this.bannerErrorQuene[this.currentBannerId] = {};
            this.bannerErrorQuene[this.currentBannerId].isShow = true;
            this.triggerBannerError(this.currentBannerId);
            if (this.mTimeoutId) {
                clearTimeout(this.mTimeoutId);
                this.mTimeoutId = null;
            }
            moosnow.http.getAllConfig(function (res) {
                if (res.BannerAll == 0) {
                    console.log('后台关闭所有banner BannerAll == 0 发送 ON_BANNER_ERROR 事件');
                    moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_ERROR, {
                        horizontal: _this.bannerHorizontal,
                        vertical: _this.bannerVertical
                    });
                    return;
                }
                if (remoteOn)
                    if (res.mistouchNum == 0) {
                        console.log('后台关闭了banner 发送 ON_BANNER_ERROR 事件');
                        moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_ERROR, {
                            horizontal: _this.bannerHorizontal,
                            vertical: _this.bannerVertical
                        });
                        return;
                    }
                    else {
                        console.log('后台开启了banner，执行显示');
                        _this._showBanner();
                    }
                else
                    _this._showBanner();
            });
        };
        PlatformModule.prototype.showScreenOutBanner = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            this.hideScreenOutBanner();
            var bannerId = this.getBannerId(-1);
            this.mScreenOutBanner = window[this.platformName].createBannerAd({
                adUnitId: bannerId,
                adIntervals: 30,
                style: {
                    top: -300,
                    left: -300,
                    width: this.bannerWidth
                }
            });
            this.mScreenOutBanner.onResize(function (res) {
                console.log('外部banner onResize', res);
            });
            this.mScreenOutBanner.onError(function (err) {
                console.log('外部banner onError', err);
            });
            this.mScreenOutBanner.onLoad(function (err) {
                console.log('外部banner onLoad', err);
            });
            this.mScreenOutBanner.show();
        };
        PlatformModule.prototype.hideScreenOutBanner = function () {
            if (this.mScreenOutBanner) {
                this.mScreenOutBanner.hide();
                this.mScreenOutBanner.destroy();
                this.mScreenOutBanner = null;
            }
        };
        PlatformModule.prototype._showBanner = function (auto) {
            var _this = this;
            if (auto === void 0) { auto = true; }
            var banner = this.banner[this.currentBannerId];
            if (banner) {
                banner.hide();
                /**
                 * 先设置位置
                 */
                this._resetBanenrStyle({
                    banner: banner,
                    width: banner.style.width,
                    height: banner.style.realHeight
                });
                var p = banner.show();
                p && p.then(function () {
                    /**
                     * 再微调，banner 大小可能跟上一个有变化
                     */
                    _this._resetBanenrStyle({
                        banner: banner,
                        width: banner.style.width,
                        height: banner.style.realHeight
                    });
                });
                if (auto)
                    this.schedule(this.refreshBanner, this.bannerShowTimeLimit, [this.currentBannerId]);
            }
        };
        PlatformModule.prototype.refreshBanner = function (bannerId) {
            this._prepareBanner(bannerId);
            this._showBanner(false);
        };
        /**
         * 会自动隐藏的banner
         * 一般用游戏中
         * @param horizontal banner的位置，默认底部
         * @param vertical banner的位置，默认底部
         * @param idIndex id顺序 -1 会随机
         */
        PlatformModule.prototype.showAutoBanner = function (horizontal, vertical, idIndex) {
            var _this = this;
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (idIndex === void 0) { idIndex = -1; }
            console.log('执行自动显示和隐藏Banner功能');
            moosnow.http.getAllConfig(function (res) {
                if (res && res.gameBanner == 1) {
                    _this.showBanner(true, function () { }, horizontal, vertical, idIndex);
                    var time = isNaN(res.gameBanenrHideTime) ? 1.5 : parseFloat(res.gameBanenrHideTime);
                    _this.mTimeoutId = setTimeout(function () {
                        console.log('自动隐藏时间已到，开始隐藏Banner');
                        _this.hideBanner();
                    }, time * 1000);
                }
                else {
                    console.log('后台关闭了auto banner');
                }
            });
        };
        /**
         * 游戏结束时的自动banner
         * @param horizontal banner的位置，默认底部
         * @param vertical banner的位置，默认底部
         * @param idIndex id顺序 -1 会随机
         */
        PlatformModule.prototype.showFlashBanner = function (horizontal, vertical, idIndex) {
            var _this = this;
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (idIndex === void 0) { idIndex = -1; }
            moosnow.http.getAllConfig(function (res) {
                if (!res)
                    return;
                var flashBannerDelayTime = isNaN(res.FlashBannerDelayTime) ? 0 : res.FlashBannerDelayTime;
                var flashBannerContinueTime = isNaN(res.FlashBannerContinueTime) ? 1.5 : parseFloat(res.FlashBannerContinueTime);
                _this.unscheduleOnce(_this.showFlashBannerCallback);
                _this.scheduleOnce(_this.showFlashBannerCallback, flashBannerDelayTime, [flashBannerContinueTime, horizontal, vertical, idIndex]);
            });
        };
        PlatformModule.prototype.showFlashBannerCallback = function (continueTime, horizontal, vertical, idIndex) {
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (idIndex === void 0) { idIndex = -1; }
            this.showBanner(true, function () { }, horizontal, vertical, idIndex);
            this.unscheduleOnce(this.hideFlashBannerCallback);
            this.scheduleOnce(this.hideFlashBannerCallback, continueTime);
        };
        PlatformModule.prototype.hideFlashBannerCallback = function () {
            this.hideBanner();
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_FLASH_BANNER_HIDE, null);
        };
        PlatformModule.prototype.exitApplication = function () {
        };
        /**
         * 连续不断的显示和隐藏 banner
         * @param position
         */
        PlatformModule.prototype.showIntervalBanner = function (horizontal, vertical) {
            var _this = this;
            if (horizontal === void 0) { horizontal = BLOCK_HORIZONTAL.NONE; }
            if (vertical === void 0) { vertical = BLOCK_VERTICAL.NONE; }
            console.log('执行 showIntervalBanner');
            moosnow.http.getAllConfig(function (res) {
                var gameBannerInterval = res && !isNaN(res.gameBannerInterval) ? parseFloat(res.gameBannerInterval) : 20;
                // this.showAutoBanner(horizontal, vertical);
                _this.schedule(_this.showAutoBanner, gameBannerInterval, [horizontal, vertical]);
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
            this.unschedule(this.refreshBanner);
            console.log("hideBanner ~ this.banner", this.banner);
            if (!this.banner)
                return;
            this._hideBanner();
            if (!this.banner[this.currentBannerId])
                return;
            this.banner[this.currentBannerId].bannerShowCount++;
            if (this.banner[this.currentBannerId].bannerShowCount >= this.bannerShowCountLimit) {
                console.log('次数满足,销毁banner');
                this.destroyBanner(this.currentBannerId);
            }
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_BANNER_HIDE, null);
        };
        PlatformModule.prototype._hideBanner = function () {
            for (var k in this.banner) {
                if (this.banner[k] && this.banner[k].hide) {
                    this.banner[k].hide();
                }
            }
        };
        PlatformModule.prototype.destroyBanner = function (bannerId) {
            this.banner[bannerId].offResize(this._onBannerResize);
            this.banner[bannerId].offError(this._onBannerError);
            this.banner[bannerId].offLoad(this._onBannerLoad);
            this.banner[bannerId].destroy();
            this.banner[bannerId] = null;
        };
        //------------广告video------------
        PlatformModule.prototype.initVideo = function () {
            this.createRewardAD(false);
        };
        PlatformModule.prototype.createRewardAD = function (show, idIndex) {
            var _this = this;
            if (idIndex === void 0) { idIndex = 0; }
            if (this.videoLoading) {
                return;
            }
            if (!window[this.platformName]) {
                if (moosnow.platform.videoCb)
                    moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!window[this.platformName].createRewardedVideoAd) {
                if (moosnow.platform.videoCb)
                    moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            var videoId = this.getVideoId(idIndex);
            if (Common.isEmpty(videoId)) {
                console.warn(MSG.VIDEO_KEY_IS_NULL);
                if (moosnow.platform.videoCb)
                    moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!this.video[videoId]) {
                this.video[videoId] = window[this.platformName].createRewardedVideoAd({
                    adUnitId: videoId
                });
                if (!this.video[videoId]) {
                    console.warn('创建视频广告失败');
                    return;
                }
                this.video[videoId].onError(this._onVideoError);
                this.video[videoId].onClose(this._onVideoClose);
                this.video[videoId].onLoad(this._onVideoLoad);
            }
            moosnow.platform.videoLoading = true;
            moosnow.platform.videoPlaying = false;
            this.video[videoId].load()
                .then(function () {
                if (show) {
                    moosnow.platform.videoPlaying = true;
                    _this.video[videoId].show().then(function () { }).catch(function (err) {
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
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_SHOW, null);
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
         * @param position
         */
        PlatformModule.prototype.showVideo = function (completeCallback, idIndex) {
            if (completeCallback === void 0) { completeCallback = null; }
            if (idIndex === void 0) { idIndex = 0; }
            console.log('显示video');
            moosnow.platform.videoCb = completeCallback;
            this.createRewardAD(true, idIndex);
        };
        //--------------插屏广告---------------
        PlatformModule.prototype.initInter = function () {
            this.prepareInter();
        };
        PlatformModule.prototype.prepareInter = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createInterstitialAd)
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
         * this.node.on(cc.Node.PLATFORM_EVENT.TOUCH_END, () => {
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
        PlatformModule.prototype.hasShortcutInstalled = function (success, fail) {
            success(false);
        };
        PlatformModule.prototype.installShortcut = function (success, message, fail) {
            if (message === void 0) { message = "方便下次快速启动"; }
        };
        PlatformModule.prototype.showBlock = function (horizontal, vertical, orientation, size) {
            if (horizontal === void 0) { horizontal = BLOCK_HORIZONTAL.NONE; }
            if (vertical === void 0) { vertical = BLOCK_VERTICAL.NONE; }
            if (orientation === void 0) { orientation = 1; }
            if (size === void 0) { size = 5; }
        };
        PlatformModule.prototype.hideBlock = function () {
        };
        /**
         * 屏蔽iphone关闭退出按钮
         */
        PlatformModule.prototype.hideExitButton = function () {
            var _this = this;
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createVideo)
                return;
            if (!this.isIphone())
                return;
            if (this.isLoaded) {
                return;
            }
            this.isLoaded = true;
            moosnow.http.getAllConfig(function (res) {
                var isBlockClose = res && res.isBlockClose == 1;
                if (isBlockClose) {
                    var sysInfo = _this.getSystemInfoSync();
                    var width = sysInfo.screenWidth;
                    var height = sysInfo.screenHeight;
                    var url = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/video/1.mp4";
                    var video = window['wx'].createVideo({
                        x: 0,
                        y: 0,
                        width: width,
                        height: height,
                        src: url,
                        objectFit: "contain",
                        controls: !1,
                        autoplay: !0,
                        showCenterPlayBtn: !1,
                        enableProgressGesture: !1
                    });
                    if (sysInfo.model.indexOf("iPhone") != -1) {
                        console.log("苹果手机 播放视频");
                        video.requestFullScreen();
                    }
                    video.onEnded(function (e) {
                        video.destroy();
                        console.log("video.destroy");
                    });
                }
            });
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
            // setTimeout(() => {
            //     this.initVideo();
            // }, 1)
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
            var fromAppId = options.referrerInfo ? options.referrerInfo.appId : '未知';
            var wxgamecid = "";
            if (options && options.query)
                wxgamecid = options.query.wxgamecid;
            moosnow.data.setChannelAppId(channel_appid);
            moosnow.data.setChannelId(channel_id);
            if (window[this.platformName] && window[this.platformName].aldSendEvent) {
                window[this.platformName].aldSendEvent("来源", {
                    origin: fromAppId,
                    path: options.query.from || 0
                });
            }
            moosnow.http.request(this.baseUrl + "api/channel/login.html", {
                appid: Common.config.moosnowAppId,
                code: code,
                user_id: user_id,
                channel_id: channel_id,
                channel_appid: channel_appid,
                wxgamecid: wxgamecid,
                scene: scene,
                fromApp: fromAppId
            }, "POST", function (respone) {
                console.log("WXModule -> getUserToken -> respone", respone);
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
                        this.cacheImage = storageVal.data;
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
            _this.instanceTime = 0;
            _this.mLaunchOptions = {};
            _this.cfgData = null;
            _this.areaData = null;
            _this._cfgQuene = [];
            _this._localQuene = [];
            _this.instanceTime = Date.now();
            var versionUrl = ROOT_CONFIG.HTTP_ROOT + "/SDK/version.json?t=" + Date.now();
            if (Common.platform == APP_PLATFORM.PC) {
                _this.request(versionUrl, {}, 'GET', function (res) {
                    if (_this.version < res.version) {
                        console.warn("\u60A8\u7684SDK\u7248\u672C\u53F7[" + _this.version + "]\u4E0D\u662F\u6700\u65B0\u7248\u672C\uFF0C\u8BF7\u5C3D\u5FEB\u5347\u7EA7\uFF0C\u6700\u65B0\u7248\u672C[" + res.version + "]  \u4E0B\u8F7D\u5730\u5740\uFF1A" + res.download);
                        if (!Common.isEmpty(res.memo))
                            console.warn("" + res.memo);
                    }
                });
            }
            else if (Common.platform == APP_PLATFORM.WX && window["wx"]) {
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
                if (Common.isEmpty(this.mLaunchOptions)) {
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
            this.point("加载完成", {
                time: Date.now() - this.instanceTime
            });
        };
        /**
          * 点击了banner
          */
        HttpModule.prototype.clickBanner = function () {
            // this.point("点击了banner", {
            // });
        };
        /**
         * 看完了视频
         */
        HttpModule.prototype.clickVideo = function () {
            // this.point("点击视频", {
            // });
        };
        /**
         * 导出跳转
         */
        HttpModule.prototype.exportUser = function () {
            // this.postData('api/channel/exportUser.html')
        };
        /**
         * 跳转记录
         * @param jump_appid
         * @param callback
         */
        HttpModule.prototype.navigate = function (row, callback) {
            var userToken = moosnow.data.getToken();
            var options = moosnow.platform.getLaunchOption();
            var fromAppId = options.referrerInfo ? options.referrerInfo.appId : '未知';
            var wxgamecid = "";
            if (options.query && options.query.wxgamecid)
                wxgamecid = options.query.wxgamecid;
            var query = options.query;
            var appid = Common.config.moosnowAppId;
            var tag = moosnow.data.getNavigateToken(appid);
            var navigateData = {
                scene_no: Common.isEmpty(options.scene) ? "" : options.scene,
                source_appid: Common.isEmpty(fromAppId) ? "" : fromAppId,
                query: query,
                wechat_channel: wxgamecid,
                title: row.title,
                position: row.position,
                jump_app_icon: row.atlas || row.img,
                appid: appid,
                uid: userToken,
                jump_appid: row.appid,
                jump_app_name: row.title,
                tag: tag
            };
            console.log('navigate navigateData', navigateData);
            var url = this.baseUrl + "api/jump/record";
            if (Common.platform == APP_PLATFORM.OPPO) {
                url = this.baseUrl + "api/jump_oppo/record";
            }
            this.request(url, navigateData, "POST", function (respone) {
                console.log('navigate success ', respone);
                if (callback)
                    callback(respone.data);
            });
        };
        /**
         * 跳转完成
         * @param code
         */
        HttpModule.prototype.navigateEnd = function (code) {
            var url = this.baseUrl + "api/jump/success";
            if (Common.platform == APP_PLATFORM.OPPO) {
                url = this.baseUrl + "api/jump_oppo/success";
            }
            console.log('navigateEnd code ', code);
            this.request(url, {
                tag: code
            }, "POST", function (respone) {
                console.log('navigateEnd code ', code, respone);
            });
        };
        /**
         * 数据打点
         * @param name  打点名称
         */
        HttpModule.prototype.point = function (name, data) {
            if (data === void 0) { data = null; }
            this.getAllConfig(function (res) {
                if ((res && res.aldMonitorOn == 1)) {
                    if (Common.platform == APP_PLATFORM.WX) {
                        if (window['wx'] && window['wx'].aldSendEvent)
                            window['wx'].aldSendEvent(name, data);
                    }
                    else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
                        if (window['tt'] && window["tt"].reportAnalytics)
                            window["tt"].reportAnalytics(name, data);
                    }
                }
            });
        };
        /**
        * 统计开始游戏
        * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
        */
        HttpModule.prototype.startGame = function (level) {
            var e = {
                stageId: "" + level,
                stageName: "" + level,
                userId: moosnow.data.getToken() //用户ID
            };
            if (Common.platform == APP_PLATFORM.WX) {
                if (window['wx'] && window['wx'].aldStage)
                    window['wx'].aldStage.onStart(e);
                else
                    console.warn(MSG.ALD_FILE_NO_IMPORT);
            }
            else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
                this.point("startgame", e);
            }
            else
                console.log("startGame -> e", e);
        };
        /**
         * 统计结束游戏
         * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
         * @param {boolean} isWin 是否成功
         */
        HttpModule.prototype.endGame = function (level, isWin) {
            var event = isWin ? "complete" : "fail";
            var desc = isWin ? "关卡完成" : "关卡失败";
            var e = {
                stageId: "" + level,
                stageName: "" + level,
                userId: moosnow.data.getToken(),
                event: event,
                params: {
                    desc: desc //描述
                }
            };
            if (Common.platform == APP_PLATFORM.WX) {
                if (window['wx'] && window['wx'].aldStage)
                    window['wx'].aldStage.onEnd(e);
                else
                    console.warn(MSG.ALD_FILE_NO_IMPORT);
            }
            else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
                this.point(isWin ? 'gameEnd' : 'gameFail', {
                    stageId: "" + level,
                    stageName: "" + level,
                    userId: moosnow.data.getToken(),
                });
            }
            else
                console.log("startGame -> e", e);
        };
        /**
         * 视频统计
         * @param {number} type 0：视频点击 1：视频观看完成
         * @param {string} info 信息 ex:“领取三倍金币”
         * @param {string} level 关卡数
         */
        HttpModule.prototype.videoPoint = function (type, info, level) {
            var name = type == 0 ? "点击视频" : "观看完成视频";
            var e = { info: info, level: level + "" };
            if (Common.platform == APP_PLATFORM.WX) {
                this.point(name, e);
            }
            else if (Common.platform == APP_PLATFORM.BYTEDANCE) {
                this.point(type == 0 ? 'clickVideo' : 'endVideo', e);
            }
            else
                console.log("startGame -> e", e);
        };
        /**
         *
         * @param callback
         */
        HttpModule.prototype.getAllConfig = function (callback) {
            var _this = this;
            this.loadCfg(function (res) {
                if (res.inWhite) {
                    callback(__assign(__assign({}, res), { exportAutoNavigate: 1, isLimitArea: 0 }));
                }
                else {
                    _this.loadArea(function (res2) {
                        _this.disableAd(res, res2, function (disable) {
                            var exportAutoNavigate = 0;
                            if (disable) {
                                //exportAutoNavigate 是否自动唤起跳转（强导） 0 关闭 1 开启(受屏蔽地区影响) 2开启（不受屏蔽地区影响）
                                if (res.exportAutoNavigate == 1)
                                    exportAutoNavigate = 0;
                                if (res.exportAutoNavigate == 2)
                                    exportAutoNavigate = 1;
                                callback(__assign(__assign({ isLimitArea: 1 }, res), _this.getCfg(false)));
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
                }
            });
        };
        HttpModule.prototype.getCfg = function (open) {
            var cfg = {
                checkBoxMistouch: 0,
                checkBoxProbabilitys: [100, 0, 0, 0, 0],
                mistouchNum: 0,
                mistouchPosNum: 0,
                bannerShowCountLimit: 1,
                exportBtnNavigate: 0,
                exportAutoNavigate: 0,
                delayShow: 0,
                showAppBox: 0,
                zs_native_click_switch: 0,
                zs_jump_switch: 0,
                mx_native_click_switch: 0,
                mx_jump_switch: 0,
                mistouchInterval: 0,
                nativeErrorShowInter: 0,
                bannerErrorShowInter: 0,
                isStartMistouch: 0,
                isStartVideo: 0,
                loadingAdOn: 0,
                isBlockClose: 0,
                SkinForceAd: 0,
                CancelToSkip: 0,
                SliceSkip: 0,
                ForceSkip02: 0,
                ForceSkip01: 0,
                GameCenterWudian: 0,
                SkinWudian: 0,
                GGPopWudian: 0,
                GamingEndFlashBanner: 0,
                FlashBanner01: 0,
                RewardOffsetBanner: 0
            };
            if (open) {
                for (var key in cfg) {
                    if (!isNaN(cfg[key]))
                        cfg[key] = 1;
                }
            }
            return cfg;
        };
        /**
         *
         * @param res
         * @param applyRemote 使用后台数据
         */
        HttpModule.prototype.defaultCfg = function (res, applyRemote) {
            var cfg = this.getCfg(false);
            if (res) {
                console.warn("defaultCfg -> moosnow.data.getToken()", moosnow.data.getToken());
                console.warn("defaultCfg -> res.whitelist", res.whitelist);
                if (res.whitelist) {
                    var token = moosnow.data.getToken();
                    var inWhite = false;
                    if (token != "")
                        for (var i = 0; i < res.whitelist.length; i++) {
                            if (token == res.whitelist[i]) {
                                inWhite = true;
                                break;
                            }
                        }
                    if (inWhite) {
                        console.warn("白名单前 -> cfg", cfg);
                        cfg = __assign(__assign({ inWhite: inWhite }, cfg), this.getCfg(true));
                        console.warn("白名单后 -> cfg", cfg);
                    }
                }
                if (applyRemote) {
                    console.warn("使用后台数据前 -> cfg", cfg);
                    cfg = __assign(__assign({}, cfg), res);
                    console.warn("使用后台数据后 -> cfg", cfg);
                }
                else {
                    console.warn("不使用后台数据前 -> cfg", cfg);
                    cfg = __assign(__assign({}, res), cfg);
                    console.warn("不使用后台数据后 -> cfg", cfg);
                }
            }
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
            return cfg;
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
                    if (res.bannerId)
                        Common.config.bannerId = res.bannerId;
                    if (res.interId)
                        Common.config.interId = res.interId;
                    if (res.blockId)
                        Common.config.blockId = res.blockId;
                    if (res.boxId)
                        Common.config.boxId = res.boxId;
                    if (res.nativeId)
                        Common.config.nativeId = res.nativeId;
                    if (res.videoId)
                        Common.config.videoId = res.videoId;
                    var versionRet = moosnow.platform.checkLog(res.version);
                    if (!versionRet) {
                        _this.cfgData = _this.defaultCfg(res, false);
                        console.log('版本关闭----------------', _this.cfgData);
                    }
                    else {
                        //总开关控制
                        var mistouchOn = res && res.mistouchOn == 1 ? true : false;
                        if (!mistouchOn) {
                            console.log('总开关已关闭----------------', _this.cfgData);
                        }
                        _this.cfgData = _this.defaultCfg(res, mistouchOn);
                    }
                    _this._cfgQuene.forEach(function (item) {
                        item(_this.cfgData);
                    });
                    _this._cfgQuene = [];
                }, function () {
                    var cfg = _this.defaultCfg(null, false);
                    _this._cfgQuene.forEach(function (item) {
                        item(cfg);
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
                console.log('进入时的场景 ', this.appLaunchOptions.scene);
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
            _this.bannerHeight = 96;
            _this.mBannerWidth = 760;
            _this.interLoadedShow = false;
            _this.prevNavigate = Date.now();
            _this.mIsClickedNative = false;
            _this._regisiterWXCallback();
            _this.initAdService();
            return _this;
        }
        Object.defineProperty(OPPOModule.prototype, "bannerWidth", {
            get: function () {
                var wxsys = this.getSystemInfoSync();
                var windowWidth = wxsys.windowWidth;
                //横屏模式
                if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth)) {
                    if (windowWidth < 760) {
                        this.mBannerWidth = windowWidth;
                    }
                    else {
                        this.mBannerWidth = 760;
                    }
                }
                else {
                    //竖屏
                    this.mBannerWidth = windowWidth;
                }
                return this.mBannerWidth;
            },
            set: function (value) {
                this.mBannerWidth = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        OPPOModule.prototype.initAdService = function () {
            if (!window[this.platformName])
                return;
            var self = this;
            if (window[this.platformName].initAdService) {
                window[this.platformName].initAdService({
                    isDebug: true,
                    appId: Common.config.moosnowAppId,
                    success: function (res) {
                        console.log("\u521D\u59CB\u5316\u5E7F\u544A");
                        // self.initBanner();
                        // self.initInter();
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
                // self.initBanner();
                // self.initInter();
                self._prepareNative();
            }
            moosnow.event.addListener(PLATFORM_EVENT.ON_PLATFORM_SHOW, this, this.onAppShow);
        };
        /**
          * 游戏登录
          * @param callback
          * @param fail
          */
        OPPOModule.prototype.login = function (callback, fail) {
            var _this = this;
            moosnow.http.getAllConfig(function (res) {
            });
            var userToken = moosnow.data.getToken();
            if (userToken && !isNaN(userToken)) {
                this.getUserToken("", userToken, callback);
            }
            else {
                if (window[this.platformName] && window[this.platformName].login)
                    window[this.platformName].login({
                        success: function (res) {
                            console.log("login ~ res.data.token", res.data.token);
                            _this.getUserToken(res.data.token, "", callback);
                        },
                        fail: function (res) {
                            // errCode、errMsg
                            _super.prototype.login.call(_this, callback, fail);
                        }
                    }).then(function (res) {
                        if (res.data.token) {
                            // 使用token进行服务端对接
                            _this.getUserToken(res.data.token, "", callback);
                        }
                    }, function (err) {
                        _super.prototype.login.call(_this, callback, fail);
                    });
            }
        };
        /**
         *
         * @param code
         * @param user_id
         * @param callback
         */
        OPPOModule.prototype.getUserToken = function (code, user_id, callback) {
            var options = this.getLaunchOption();
            var scene = options.scene || "";
            var channel_id = options.query && options.query.channel_id ? options.query.channel_id : "0";
            var channel_appid = options.referrerInfo && options.referrerInfo.appId ? options.referrerInfo.appId : "0";
            var fromAppId = options.referrerInfo ? options.referrerInfo.appId : '未知';
            var wxgamecid = "";
            if (options.query && options.query.wxgamecid)
                wxgamecid = options.query.wxgamecid;
            moosnow.data.setChannelAppId(channel_appid);
            moosnow.data.setChannelId(channel_id);
            if (window[this.platformName] && window[this.platformName].aldSendEvent) {
                window[this.platformName].aldSendEvent("来源", {
                    origin: fromAppId,
                    path: options.query.from || 0
                });
            }
            var params = {
                appid: Common.config.moosnowAppId,
                code: code,
                user_id: user_id,
                channel_id: channel_id,
                channel_appid: channel_appid,
                wxgamecid: wxgamecid,
                scene: scene,
                fromApp: fromAppId
            };
            console.log('token params', params);
            moosnow.http.request(this.baseUrl + "api/login/oppo", params, "POST", function (respone) {
                console.log("WXModule -> getUserToken -> respone.data", respone.data);
                if (respone.code == 0 && respone.data && respone.data.user_id) {
                    moosnow.data.setToken(respone.data.user_id);
                }
                if (Common.isFunction(callback))
                    callback(respone);
            }, function () {
                //如果出错，不影响游戏
                if (Common.isFunction(callback))
                    callback();
            });
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
            moosnow.http.point("打开跳转", row);
            moosnow.http.navigate(row, function (res) { });
            window[this.platformName].navigateToMiniGame({
                appId: appid,
                path: path,
                pkgName: pkgName || appid,
                extraData: extraData,
                success: function () {
                    moosnow.http.point("跳转", row);
                    moosnow.http.navigateEnd(moosnow.data.getNavigateToken(appid));
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
                    moosnow.data.resetNavigateToken();
                    console.log('navigateToMiniProgram error ', err);
                    if (fail)
                        fail();
                },
                complete: function () {
                    moosnow.data.resetNavigateToken();
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
                this.banner.offResize(this._onBannerResize);
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
            this.hideBanner();
            this.banner = this._createBannerAd();
            this.banner.onResize(this._onBannerResize.bind(this));
            this.banner.onError(this._onBannerError.bind(this));
            this.banner.onLoad(this._onBannerLoad.bind(this));
            this.banner.onHide(this._onBannerHide.bind(this));
        };
        OPPOModule.prototype._createBannerAd = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var style = {
                left: 0,
                top: 0,
                width: this.bannerWidth,
                height: this.bannerHeight
            };
            var pos = this._getBannerPosition();
            var finalStyle = __assign(__assign({}, style), pos);
            var banner = window[this.platformName].createBannerAd({
                adUnitId: this.getBannerId(),
                style: finalStyle
            });
            console.log(" create banner ", banner, 'param style ', finalStyle);
            return banner;
        };
        OPPOModule.prototype._onBannerResize = function (size) {
            // let wxsys = this.getSystemInfoSync();
            // let windowWidth = wxsys.windowWidth;
            // let windowHeight = wxsys.windowHeight;
            // let statusBarHeight = wxsys.statusBarHeight;
            // let notchHeight = wxsys.notchHeight || 0
            // this.bannerWidth = size.width;
            // this.bannerHeigth = size.height;
            // this.banner.style.left = (windowWidth - size.width) / 2;
            // let styleTop = windowHeight - this.bannerHeigth;
            // if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
            //     styleTop = windowHeight - this.bannerHeigth;
            // }
            // else if (this.bannerPosition == BANNER_POSITION.CENTER)
            //     styleTop = (windowHeight - this.bannerHeigth) / 2;
            // else if (this.bannerPosition == BANNER_POSITION.TOP) {
            //     if (this.isLandscape(wxsys.windowHeight, wxsys.windowWidth))
            //         styleTop = 0
            //     else
            //         styleTop = statusBarHeight + notchHeight
            // }
            // else
            //     styleTop = this.bannerStyle.top;
            // this.banner.style.top = styleTop;
            console.log('_bottomCenterBanner  ', this.banner);
        };
        OPPOModule.prototype._getBannerPosition = function () {
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.screenWidth;
            var windowHeight = wxsys.screenHeight;
            var statusBarHeight = wxsys.statusBarHeight;
            var notchHeight = wxsys.notchHeight || 0;
            var horizontal = this.bannerHorizontal;
            var vertical = this.bannerVertical;
            var top = 0;
            var left = 0;
            if (vertical == BANNER_VERTICAL.TOP) {
                // if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth))
                //     top = 0
                // else
                top = statusBarHeight + notchHeight;
            }
            else if (vertical == BANNER_VERTICAL.CENTER) {
                top = (windowHeight - this.bannerHeigth) / 2;
            }
            else if (vertical == BANNER_VERTICAL.BOTTOM) {
                top = windowHeight - this.bannerHeigth - 16;
            }
            if (horizontal == BANNER_HORIZONTAL.LEFT) {
                left = 0;
            }
            else if (horizontal == BANNER_HORIZONTAL.RIGHT) {
                left = windowWidth - this.bannerWidth;
            }
            else if (horizontal == BANNER_HORIZONTAL.CENTER) {
                left = (windowWidth - this.bannerWidth) / 2;
            }
            console.log("OPPOModule -> _getBannerPosition -> left", left, 'top', top);
            // return {
            //     left: 16,
            //     top: 16,
            // }
            return {
                left: left,
                top: top,
            };
        };
        OPPOModule.prototype._resetBanenrStyle = function (size) {
            var style = this._getBannerPosition();
            if (this.banner)
                this.banner.style = {
                    top: style.top,
                    left: style.left,
                    width: size.width,
                    height: size.height
                };
            console.log('_resetBanenrStyle this.banner ', this.banner, 'set style ', style);
        };
        OPPOModule.prototype._onBannerHide = function () {
            console.log('banner 已隐藏 ');
        };
        /**
         * 显示平台的banner广告
         * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
         * @param callback 点击回调
         * @param position banner的位置，默认底部
         * @param style 自定义样式
         */
        OPPOModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (idIndex === void 0) { idIndex = 0; }
            console.log(MSG.BANNER_SHOW);
            this.bannerCb = callback;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerHorizontal = horizontal;
            this.bannerVertical = vertical;
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
        OPPOModule.prototype._showBanner = function () {
            this._prepareBanner();
            if (this.banner) {
                this._resetBanenrStyle({
                    width: this.banner.style.width,
                    height: this.banner.style.height
                });
                var t = this.banner.show();
                if (t) {
                    t.then(function () {
                        console.log('显示成功后');
                        // this.scheduleOnce(() => {
                        //     
                        //     this._resetBanenrStyle({
                        //         width: this.banner.style.width,
                        //         height: this.banner.style.height
                        //     });
                        // }, 0.5)
                    });
                }
            }
        };
        OPPOModule.prototype.hideBanner = function () {
            console.log(MSG.HIDE_BANNER);
            if (!window[this.platformName]) {
                return;
            }
            if (this.banner && this.banner.hide) {
                this.banner.hide();
                this.banner.offResize(null);
                this.banner.offError(null);
                this.banner.offLoad(null);
                this.banner.offHide(null);
                this.banner.destroy();
                this.banner = null;
            }
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
            if (!Common.isEmpty(this.video)) {
                this.video.offClose(moosnow.platform._onVideoClose);
                this.video.offError(moosnow.platform._onVideoError);
                this.video.offLoad(moosnow.platform._onVideoLoad);
            }
            else {
                if (Common.isEmpty(this.getVideoId())) {
                    console.warn(MSG.VIDEO_KEY_IS_NULL);
                    return;
                }
                this.video = window[this.platformName].createRewardedVideoAd({
                    adUnitId: this.getVideoId()
                });
            }
            this.video.onError(moosnow.platform._onVideoError);
            this.video.onClose(moosnow.platform._onVideoClose);
            this.video.onLoad(moosnow.platform._onVideoLoad);
            moosnow.platform.videoLoading = true;
            this.video.load();
        };
        OPPOModule.prototype._onVideoLoad = function () {
            console.log(MSG.VIDEO_LOAD_COMPLETED);
            moosnow.platform.videoLoading = false;
            if (moosnow.platform.video) {
                moosnow.platform.video.show();
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
                adUnitId: parseInt("" + this.nativeId)
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
        OPPOModule.prototype.hasShortcutInstalled = function (success, fail) {
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
                },
                fail: function (res) {
                    if (fail)
                        fail(res);
                }
            });
        };
        OPPOModule.prototype.installShortcut = function (success, message, fail) {
            if (message === void 0) { message = "方便下次快速启动"; }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].installShortcut)
                return;
            window[this.platformName].installShortcut({
                message: message,
                success: function (status) {
                    if (success)
                        success(status);
                    console.log('创建成功');
                },
                fail: function (res) {
                    if (fail)
                        fail(res);
                }
            });
        };
        OPPOModule.prototype.exitApplication = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].exitApplication)
                return;
            window[this.platformName].exitApplication();
        };
        return OPPOModule;
    }(PlatformModule));

    var GameDataCenter = /** @class */ (function (_super) {
        __extends(GameDataCenter, _super);
        function GameDataCenter() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.TOKEN = "MOOSNOW_SDK_TOKEN";
            _this.COIN = "MOOSNOW_SDK_COIN";
            _this.NAVIGATE_TOKEN = "MOOSNOW_SDK_NAVIGATE_TOKEN";
            _this.mUserToken = "";
            _this.VIBRATE_SWITCH = "MOOSNOW_VIBRATE_SWITCH";
            _this.USER_PRIZE_KEY = "MOOSNOW_USER_PRIZE_KEY";
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
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.COIN_CHANGED, this.mCoin);
        };
        GameDataCenter.prototype.addCoin = function (v) {
            this.mCoin += v;
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.COIN_CHANGED, this.mCoin);
        };
        GameDataCenter.prototype.setCoin = function (v) {
            this.mCoin = v;
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.COIN_CHANGED, this.mCoin);
        };
        GameDataCenter.prototype.saveCoin = function () {
            moosnow.setting.setValue(this.COIN, this.mCoin);
            // Lite.event.sendEventImmediately(PLATFORM_EVENT.COIN_CHANGED, this.mCoin);
        };
        GameDataCenter.prototype.getToken = function () {
            if (Common.isEmpty(this.mUserToken))
                this.mUserToken = moosnow.setting.getString(this.TOKEN, "");
            return this.mUserToken;
        };
        GameDataCenter.prototype.setToken = function (v) {
            moosnow.setting.setValue(this.TOKEN, v);
        };
        GameDataCenter.prototype.getNavigateToken = function (appid) {
            if (Common.isEmpty(this.mNavigateToken)) {
                this.mNavigateToken = Date.now() + "_" + appid + "_" + this.getToken();
            }
            return this.mNavigateToken;
        };
        GameDataCenter.prototype.resetNavigateToken = function () {
            this.mNavigateToken = null;
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
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.VIBRATESWITCH_CHANGED, on);
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
            if (window["cc"] && window["cc"].sys && window["cc"].sys.localStorage) {
                window["cc"].sys.localStorage.removeItem(key);
            }
            else if (window["Laya"] && window["Laya"].LocalStorage)
                window["Laya"].LocalStorage.removeItem(key);
            else
                window.localStorage.removeItem(key);
        };
        SettingModule.prototype.removeAll = function () {
            if (window["cc"] && window["cc"].sys && window["cc"].sys.localStorage) {
            }
            else if (window["Laya"] && window["Laya"].LocalStorage)
                Laya.LocalStorage.clear();
            else
                window.localStorage.clear();
        };
        //-------------------------------------------------
        SettingModule.prototype._getValue = function (k, defaultValue) {
            var value = "";
            if (window["cc"] && window["cc"].sys && window["cc"].sys.localStorage)
                value = window["cc"].sys.localStorage.getItem(k);
            else if (window["Laya"] && window["Laya"].LocalStorage)
                value = window["Laya"].LocalStorage.getItem(k);
            else
                value = window.localStorage.getItem(k);
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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.mErrorNum = 0;
            return _this;
        }
        WXAdModule.prototype.getRemoteAd = function (cb) {
            var _this = this;
            var url = ROOT_CONFIG.HTTP_ROOT + "/exportConfig/" + Common.config.moosnowAppId + ".json?t=" + Date.now();
            moosnow.http.request(url, {}, 'GET', function (res) {
                cb(res);
                console.log('WXAdModule getRemoteAd', res);
            }, function (error) {
                _this.mErrorNum++;
                if (_this.mErrorNum < 4) {
                    _this.getRemoteAd(cb);
                }
                else {
                    _this.mErrorNum = 0;
                    _this.repairAd(cb);
                }
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
            _this._regisiterWXCallback();
            _this._registerTTCallback();
            _this.initRecord();
            return _this;
        }
        Object.defineProperty(TTModule.prototype, "bannerWidth", {
            get: function () {
                return this.mBannerWidth;
            },
            set: function (value) {
                this.mBannerWidth = value;
            },
            enumerable: true,
            configurable: true
        });
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
        TTModule.prototype._onBannerResize = function (bannerId, size) {
            // if (this.bannerWidth != size.width) {
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            this.bannerWidth = size.width;
            this.bannerHeigth = isNaN(size.height) ? (this.bannerWidth / 16) * 9 : size.height; // 根据系统约定尺寸计算出广告高度
            var top = windowHeight - this.bannerHeigth;
            //     console.log('bannerWidth ', this.bannerWidth, 'bannerHeigth', this.bannerHeigth, 'top', top)
            var style = this._getBannerPosition();
            if (this.banner[bannerId]) {
                this.banner[bannerId].style.top = style.top;
                this.banner[bannerId].style.left = style.left;
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
        /**
         * 裁剪视频
         * @param timeRange 默认[2,2] 裁剪视频时保留的前后时长
         * @param callback 剪切完成时回调
         */
        TTModule.prototype.clipRecord = function (timeRange, callback) {
            if (timeRange === void 0) { timeRange = [2, 2]; }
            if (!this.recordObj)
                return;
            this.recordNumber++;
            console.log('clipRecord', this.recordNumber);
            this.recordObj.recordClip({
                timeRange: timeRange,
                success: function (r) {
                    console.log('clipRecord 成功 ', r);
                    if (Common.isFunction(callback))
                        callback(r);
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
                if (_this.recordNumber >= 1) {
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
            //"https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/1.mp4";//
            var videoPath = (this.recordRes && this.recordRes.videoPath) ? this.recordRes.videoPath : "";
            console.log('video path ', videoPath);
            return {
                channel: channel,
                title: title,
                imageUrl: imageUrl,
                query: moosnow.http._object2Query(query),
                extra: {
                    videoPath: videoPath,
                    videoTopics: [title],
                    withVideoId: true,
                },
                success: function (res) {
                    console.log('share video success :', res);
                    _this.shareVideoId = res.videoId;
                    if (_this.currentShareCallback)
                        _this.currentShareCallback(true);
                },
                fail: function (e) {
                    console.log('share video fail ', e);
                    console.log('index of : ', e.errMsg.indexOf('short'));
                    if (e && e.errMsg && e.errMsg.indexOf('short') != -1 && _this.currentShortCall) {
                        console.log('时间太短 执行回调', _this.currentShortCall.toString());
                        _this.currentShortCall(e);
                        return;
                    }
                    if (_this.currentShareCallback)
                        _this.currentShareCallback(false);
                }
            };
        };
        TTModule.prototype.navigate2Video = function (videoId) {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].navigateToVideoView)
                return;
            console.log("navigate2Video id ", videoId || this.shareVideoId, videoId, this.shareVideoId);
            if (!(videoId || this.shareVideoId))
                return;
            window[this.platformName].navigateToVideoView({
                videoId: videoId || this.shareVideoId,
                success: function (res) {
                    /* res结构： {errMsg: string } */
                    console.log("navigate2Video success ", res);
                },
                fail: function (err) {
                    console.log("navigate2Video err ", err);
                    if (err.errCode === 1006) {
                        // tt.showToast({
                        //     title: "something wrong with your network",
                        // });
                    }
                },
            });
        };
        TTModule.prototype._onBannerLoad = function (bannerId) {
            if (this.banner[bannerId] && !this.banner[bannerId].isLoaded) {
                this.banner[bannerId].isLoaded = true;
                this.banner[bannerId].show();
            }
        };
        // public _prepareBanner() {
        //     super._prepareBanner();
        // }
        /**
         * 显示平台的banner广告
         * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
         * @param callback 点击回调
         * @param position banner的位置，默认底部
         * @param style 自定义样式
         */
        TTModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (idIndex === void 0) { idIndex = 0; }
            // if (this.isBannerShow)
            //     return;
            console.log(MSG.BANNER_SHOW);
            this.bannerCb = callback;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerHorizontal = horizontal;
            this.bannerVertical = vertical;
            this.bannerStyle = style;
            this.currentBannerId = this._createBannerAd(idIndex);
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
            var banner = this.banner[this.currentBannerId];
            if (banner) {
                banner.hide();
                /**
                 * 先设置位置
                 */
                this._resetBanenrStyle({
                    banner: banner,
                    width: banner.style.width,
                    height: banner.style.realHeight
                });
                if (banner.isLoaded) {
                    var showPromise = banner.show();
                    showPromise && showPromise
                        .then(function () {
                        /**
                         * 再微调，banner 大小可能跟上一个有变化
                         */
                        _this._resetBanenrStyle({
                            banner: banner,
                            width: banner.style.width,
                            height: banner.style.realHeight
                        });
                    });
                }
            }
        };
        TTModule.prototype._resetBanenrStyle = function (e) {
            console.log("🚀 ~ file: TTModule.ts ~ line 376 ~ TTModule ~ _resetBanenrStyle ~ e", e);
            if (this.bannerStyle) {
                this.applyCustomStyle(e);
            }
            else {
                var style = this._getBannerPosition();
                console.log("🚀 ~ file: TTModule.ts ~ line 384 ~ TTModule ~ _resetBanenrStyle ~ style", style);
                e.banner.style.top = style.top;
                e.banner.style.left = style.left;
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
                var moreGames = window[this.platformName].createMoreGamesBanner({
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
                moreGames.show();
                moreGames.onTap(function () {
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
            _this.mBannerWidth = 320;
            _this.bannerHeigth = Math.round(_this.bannerWidth / 300 * 72.8071);
            _this._regisiterWXCallback();
            _this.initBanner();
            return _this;
        }
        Object.defineProperty(QQModule.prototype, "bannerWidth", {
            get: function () {
                var wxsys = this.getSystemInfoSync();
                var windowWidth = wxsys.windowWidth;
                //横屏模式
                if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth)) {
                    if (windowWidth < 320) {
                        this.mBannerWidth = windowWidth;
                    }
                    else {
                        this.mBannerWidth = 320;
                    }
                }
                else {
                    //竖屏
                    this.mBannerWidth = windowWidth;
                }
                return this.mBannerWidth;
            },
            set: function (value) {
                this.mBannerWidth = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        QQModule.prototype._createBannerAd = function (adIndex, loadShow) {
            if (loadShow === void 0) { loadShow = true; }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var bannerId = this.getBannerId(adIndex);
            if (Common.isEmpty(bannerId)) {
                console.warn(MSG.BANNER_KEY_IS_NULL);
                return;
            }
            var height = this.bannerHeigth = Math.round(320 / 300 * 72.8071);
            var bannerStyle = this._getBannerPosition();
            var style = {
                top: bannerStyle.top,
                left: bannerStyle.left,
                width: 320,
                height: height
            };
            console.log(" 显示前先关闭 banner ");
            this.hideBanner();
            console.log(" QQModule ~ _createBannerAd ~ style", style, bannerId);
            this.banner[bannerId] = window[this.platformName].createBannerAd({
                adUnitId: bannerId,
                style: style
            });
            if (this.banner[bannerId]) {
                this.banner[bannerId].onResize(this._onBannerResize);
                this.banner[bannerId].onError(this._onBannerError);
                this.banner[bannerId].onLoad(this._onBannerLoad.bind(this));
            }
            return bannerId;
        };
        QQModule.prototype._onBannerLoad = function () {
            console.log("banner 加载结束 bannerId");
            for (var k in this.banner) {
                if (k != this.currentBannerId) {
                    this.banner[k].hide();
                    this.banner[k].destroy();
                    this.banner[k] = null;
                    delete this.banner[k];
                }
            }
            var banner = this.banner[this.currentBannerId];
            if (banner) {
                banner.show();
            }
            else {
                console.log('banner 不存在');
            }
        };
        QQModule.prototype._onBannerError = function (bannerId, err) {
            console.warn('banner___error:', err, ' bannerId ', bannerId);
        };
        /**
          * 显示平台的banner广告
          * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
          * @param callback 点击回调
          * @param position banner的位置，默认底部
          * @param style 自定义样式
          */
        QQModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (idIndex === void 0) { idIndex = -1; }
            console.log(MSG.BANNER_SHOW);
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerHorizontal = horizontal;
            this.bannerVertical = vertical;
            this.bannerStyle = style;
            if (remoteOn)
                moosnow.http.getAllConfig(function (res) {
                    if (res.mistouchNum == 0) {
                        console.log('后台关闭了banner，不执行显示');
                        return;
                    }
                    else {
                        console.log('后台开启了banner，执行显示');
                        _this.currentBannerId = _this._createBannerAd(idIndex);
                        _this._showBanner();
                    }
                });
            else {
                this.currentBannerId = this._createBannerAd(idIndex);
                this._showBanner();
            }
        };
        QQModule.prototype._showBanner = function () {
            var banner = this.banner[this.currentBannerId];
            if (banner) {
                banner.show();
            }
            else {
                console.log('banner 不存在');
            }
        };
        QQModule.prototype._onBannerResize = function (size) {
            // 尺寸调整时会触发回调         
            // 注意：如果在回调里再次调整尺寸，要确保不要触发死循环！！！  
            console.log('Resize后正式宽高:', size);
            // this._resetBanenrStyle(size);
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
                                adUnitId: _this.boxId
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
                            adUnitId: _this.boxId
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
        /**
         * 隐藏banner
         */
        QQModule.prototype.hideBanner = function () {
            console.log(" hideBanner ~ this.banner", this.banner);
            if (this.banner)
                for (var k in this.banner) {
                    this.banner[k].hide();
                    this.banner[k].destroy();
                    this.banner[k] = null;
                    delete this.banner[k];
                }
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
        QQModule.prototype.showBlock = function (horizontal, vertical, orientation, size) {
            if (horizontal === void 0) { horizontal = BLOCK_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BLOCK_VERTICAL.TOP; }
            if (orientation === void 0) { orientation = 1; }
            if (size === void 0) { size = 5; }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBlockAd)
                return;
            if (this.block) {
                this.block.destroy();
            }
            this.blockHorizontal = horizontal;
            this.blockVertical = vertical;
            var style = this._getBlockPosition();
            console.log("QQModule -> showBlock -> style", style);
            this.block = window[this.platformName].createBlockAd({
                adUnitId: this.getBlockId(),
                orientation: orientation == 1 ? "landscape" : "vertical",
                size: size,
                style: {
                    left: style.left,
                    top: style.top,
                }
            });
            console.log("QQModule -> showBlock ->  this.block", this.block);
            this.block.onLoad(this._onBlockLoad.bind(this));
            this.block.onError(this._onBlockError.bind(this));
            this.block.onResize(this._onBlockResize.bind(this));
        };
        QQModule.prototype.hideBlock = function () {
            if (this.block)
                this.block.hide();
        };
        QQModule.prototype._onBlockLoad = function (res) {
            console.log("QQModule -> _onBlockLoad -> res", res);
            this.block.show()
                .then(function (showResult) {
                console.log("QQModule -> _onBlockLoad -> showResult", showResult);
            });
        };
        QQModule.prototype._onBlockError = function (res) {
            console.log("QQModule -> _onBlockError -> res", res);
        };
        QQModule.prototype._getBlockPosition = function () {
            var horizontal = this.blockHorizontal;
            var vertical = this.blockVertical;
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var top = 0;
            var left = 0;
            if (vertical == BLOCK_VERTICAL.TOP) {
                top = 16;
            }
            else if (vertical == BLOCK_VERTICAL.CENTER) {
                top = (windowHeight - this.blockHeigth) / 2;
            }
            else if (vertical == BLOCK_VERTICAL.BOTTOM) {
                top = windowHeight - this.blockHeigth - 16;
            }
            if (horizontal == BLOCK_HORIZONTAL.LEFT) {
                left = 16;
            }
            else if (horizontal == BLOCK_HORIZONTAL.RIGHT) {
                left = windowWidth - this.blockWidth - 16;
                if (vertical == BLOCK_VERTICAL.TOP) {
                    left = windowWidth - this.blockWidth - 150;
                }
            }
            else if (horizontal == BLOCK_HORIZONTAL.CENTER) {
                left = (windowWidth - this.blockWidth) / 2;
            }
            console.log("QQModule -> _getBlockPosition -> left", left, 'top', top);
            // return {
            //     left: 16,
            //     top: 16,
            // }
            return {
                left: left,
                top: top,
            };
        };
        QQModule.prototype._onBlockResize = function (size) {
            var style = this._getBlockPosition();
            console.log("QQModule -> _onBlockResize -> style", style);
            this.block.style.top = style.top;
            this.block.style.left = style.left;
            console.log('重置block位置', style);
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
                apk_id: Common.config.moosnowAppId,
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
                            apk_id: Common.config.moosnowAppId,
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
                apk_id: Common.config.moosnowAppId,
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
            if (Common.isEmpty(this.getBannerId())) {
                console.warn(MSG.BANNER_KEY_IS_NULL);
                return;
            }
            var banner = window[this.platformName].createBannerAd({
                adUnitId: this.getBannerId(),
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
                    adUnitId: this.getVideoId(),
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
                var url = Common.config.url + "?t=" + Date.now();
                console.log('appid ', Common.config.moosnowAppId);
                this.request(url, {
                    apk_id: Common.config.moosnowAppId
                }, 'POST', function (res) {
                    var enabled = res.data.zs_version == Common.config.version;
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
        * @param {boolean} once 监听事件触发后的回调
        */
        EventModule.prototype.addListener = function (eventName, target, callback, once) {
            if (once === void 0) { once = false; }
            this._addListener(eventName, target, once, callback);
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
                        if (listener.once) {
                            if (this._eventList[i].listeners[j]) {
                                ArrayUtil.remove(this._eventList[i].listeners, listener);
                                i--;
                            }
                        }
                        callback.call(target, data);
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
            _this.mBannerWidth = 720;
            _this.bannerHeight = 114;
            _this.interLoadedShow = false;
            _this.prevNavigate = Date.now();
            _this.mMinInterval = 10;
            _this.mMinHideInterval = 5;
            _this.mIsClickedNative = false;
            _this._regisiterWXCallback();
            _this.initAdService();
            return _this;
        }
        VIVOModule.prototype.initAdService = function () {
            // this.initBanner();
            // this.initInter();
            this._prepareNative();
            moosnow.event.addListener(PLATFORM_EVENT.ON_PLATFORM_SHOW, this, this.onAppShow);
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
        VIVOModule.prototype._getBannerPosition = function () {
            var horizontal = this.bannerHorizontal;
            var vertical = this.bannerVertical;
            var wxsys = this.getSystemInfoSync();
            // console.log("🚀 ~ file: VIVOModule.ts ~ line 214 ~ VIVOModule ~ _getBannerPosition ~ wxsys", wxsys)
            var windowWidth = wxsys.screenWidth;
            var windowHeight = wxsys.screenHeight;
            var statusBarHeight = wxsys.statusBarHeight;
            var notchHeight = wxsys.notchHeight || 0;
            if (this.banner && this.banner.style) {
                if (!isNaN(this.bannerWidth))
                    this.banner.style.width = this.bannerWidth;
                if (!isNaN(this.bannerHeight))
                    this.banner.style.height = this.bannerHeight;
            }
            var top = 0;
            var left = 0;
            if (vertical == BANNER_VERTICAL.TOP) {
                if (this.isLandscape(wxsys.screenHeight, wxsys.screenWidth))
                    top = 0;
                else
                    top = statusBarHeight + notchHeight;
            }
            else if (vertical == BANNER_VERTICAL.CENTER) {
                top = (windowHeight - this.bannerHeigth) / 2;
            }
            else if (vertical == BANNER_VERTICAL.BOTTOM) {
                top = windowHeight - this.bannerHeigth;
            }
            if (horizontal == BANNER_HORIZONTAL.LEFT) {
                left = 0;
            }
            else if (horizontal == BANNER_HORIZONTAL.RIGHT) {
                left = windowWidth - this.bannerWidth;
            }
            else if (horizontal == BANNER_HORIZONTAL.CENTER) {
                left = (windowWidth - this.bannerWidth) / 2;
            }
            console.log("VIVOModule -> _getBannerPosition -> top,left", top, left);
            // return {
            //     left: 16,
            //     top: 16,
            // }
            return {
                left: left,
                top: top,
            };
        };
        VIVOModule.prototype._createBannerAd = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var nowTime = Date.now();
            if (!this.mShowTime)
                this.mShowTime = nowTime;
            else if (this.mShowTime && (nowTime - this.mShowTime <= this.mMinInterval * 1000)) {
                console.log("banner\u521B\u5EFA\u592A\u9891\u7E41\u4E86 " + this.mMinInterval + "\u79D2\u5185\u53EA\u80FD\u663E\u793A\u4E00\u6B21");
                return;
            }
            this.mShowTime = Date.now();
            if (Common.isEmpty(this.getBannerId())) {
                console.warn(MSG.BANNER_KEY_IS_NULL);
                return;
            }
            var style = this._getBannerPosition();
            var banner = window[this.platformName].createBannerAd({
                posId: this.getBannerId(),
                style: {
                    left: style.left,
                    top: style.top,
                    width: this.bannerWidth,
                    height: this.bannerHeight
                }
            });
            return banner;
        };
        VIVOModule.prototype.getNotchHeight = function () {
            var retVal = 0;
            if (window[this.platformName].getNotchHeightSync)
                retVal = window[this.platformName].getNotchHeightSync().height;
            return retVal;
        };
        VIVOModule.prototype._onBannerResize = function (size) {
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
        /**
          * 显示平台的banner广告
          * @param remoteOn 是否被后台开关控制 默认 true，误触的地方传 true  普通的地方传 false
          * @param callback 点击回调
          * @param position banner的位置，默认底部
          * @param style 自定义样式
          */
        VIVOModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (idIndex === void 0) { idIndex = 0; }
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName])
                return;
            this.bannerHorizontal = horizontal;
            this.bannerVertical = vertical;
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
            if (this.banner && this.banner.hide) {
                this.banner.hide();
                this.banner.destroy();
                this.banner = null;
            }
            this.banner = this._createBannerAd();
            if (!(this.banner && this.banner.show))
                return;
            var adshow = this.banner.show();
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
            if (!window[this.platformName]) {
                return;
            }
            var nowTime = Date.now();
            if (!this.mHideTime)
                this.mHideTime = nowTime;
            else if (this.mHideTime && nowTime - this.mHideTime <= this.mMinHideInterval * 1000) {
                console.log("banner\u9690\u85CF\u592A\u9891\u7E41\u4E86 " + this.mMinHideInterval + "\u79D2\u5185\u53EA\u9690\u85CF\u4E00\u6B21");
                return;
            }
            this.mHideTime = nowTime;
            if (this.banner && this.banner.hide) {
                console.log("隐藏和销毁banner");
                this.banner.hide();
                this.banner.destroy();
                this.banner = null;
            }
        };
        VIVOModule.prototype.createRewardAD = function (show, idIndex) {
            if (idIndex === void 0) { idIndex = 0; }
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
            if (Common.isEmpty(this.getVideoId())) {
                console.warn(MSG.VIDEO_KEY_IS_NULL);
                return;
            }
            if (!this.mVideoTime) {
                this.mVideoTime = Date.now();
            }
            else {
                if (Date.now() - this.mVideoTime < 10 * 1000) {
                    if (moosnow.platform.videoCb) {
                        moosnow.platform.videoCb(VIDEO_STATUS.ERR);
                    }
                    return;
                }
                else {
                    this.mVideoTime = Date.now();
                }
            }
            var videoId = this.getVideoId(idIndex);
            if (!this.video[videoId]) {
                moosnow.platform.videoLoading = true;
                this.video = window[this.platformName].createRewardedVideoAd({
                    posId: videoId
                });
                this.video.onError(this._onVideoError.bind(this));
                this.video.onClose(this._onVideoClose.bind(this));
                this.video.onLoad(this._onVideoLoad.bind(this));
            }
            else
                this.video[videoId].load();
        };
        VIVOModule.prototype._onVideoLoad = function () {
            var _this = this;
            console.log(MSG.VIDEO_LOAD_COMPLETED);
            moosnow.platform.videoLoading = false;
            if (this.video) {
                this.video.show()
                    .then(function () {
                    _this.videoPlaying = true;
                    moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_HIDE, {});
                    console.log('激励视频广告展示完成');
                }).catch(function (err) {
                    console.log('激励视频广告展示失败', JSON.stringify(err));
                    if (moosnow.platform.videoCb) {
                        moosnow.platform.videoCb(VIDEO_STATUS.ERR);
                    }
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
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.ON_PLATFORM_SHOW, {});
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
            this._destroyNative();
            this.native = window[this.platformName].createNativeAd({
                posId: this.nativeId
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
                    if (_this.nativeCb)
                        _this.nativeCb(null);
                }
            });
        };
        VIVOModule.prototype._destroyNative = function () {
            this.nativeLoading = false;
            if (this.native) {
                this.native.offLoad(); // 移除原生广告加载成功回调
                this.native.offError(); // 移除失败回调
                this.native.destroy(); // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
            }
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
                            _this.nativeCb(null);
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
        VIVOModule.prototype.hasShortcutInstalled = function (success, fail) {
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
                },
                fail: function (res) {
                    if (fail)
                        fail(res);
                }
            });
        };
        VIVOModule.prototype.installShortcut = function (success, message, fail) {
            if (message === void 0) { message = "方便下次快速启动"; }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].installShortcut)
                return;
            window[this.platformName].installShortcut({
                message: message,
                success: function (status) {
                    if (success)
                        success(status);
                    console.log('创建成功');
                },
                fail: function (res) {
                    if (fail)
                        fail(res);
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
            this.isMute = moosnow.setting.getBool(this.IS_MUTE, false);
            this.isMuteMusic = moosnow.setting.getBool(this.IS_MUTE_MUSIC, false);
        };
        return AudioModule;
    }(BaseModule));

    var UCModule = /** @class */ (function (_super) {
        __extends(UCModule, _super);
        function UCModule() {
            var _a;
            var _this = _super.call(this) || this;
            _this.platformName = "uc";
            _this.mGravity = (_a = {},
                _a[BANNER_HORIZONTAL.CENTER + "_" + BANNER_VERTICAL.TOP] = 1,
                _a[BANNER_HORIZONTAL.CENTER + "_" + BANNER_VERTICAL.CENTER] = 4,
                _a[BANNER_HORIZONTAL.CENTER + "_" + BANNER_VERTICAL.BOTTOM] = 7,
                _a[BANNER_HORIZONTAL.LEFT + "_" + BANNER_VERTICAL.BOTTOM] = 6,
                _a[BANNER_HORIZONTAL.RIGHT + "_" + BANNER_VERTICAL.BOTTOM] = 8,
                _a);
            if (!window[_this.platformName])
                return _this;
            if (!window[_this.platformName].setEnableDebug)
                return _this;
            // 打开调试
            window[_this.platformName].setEnableDebug({
                enableDebug: Common.config["enableDebug"] == true,
                complete: function (data) {
                    console.log('uc.setEnableDebug openDebug. ');
                },
            });
            if (!window[_this.platformName].requestScreenOrientation)
                return _this;
            window[_this.platformName].requestScreenOrientation({
                orientaiton: Common.config["orientaiton"] == "portrait" ? 1 : 2,
                success: function (res) {
                    console.log(res);
                },
                fail: function (res) {
                    console.error(res);
                },
            });
            return _this;
        }
        UCModule.prototype._prepareBanner = function () {
        };
        UCModule.prototype._createBannerAd = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createBannerAd)
                return;
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var left = (windowWidth - this.bannerWidth) / 2;
            this.bannerShowTime = Date.now();
            var gravity = this.mGravity[this.bannerHorizontal + "_" + this.bannerVertical];
            if (isNaN(gravity))
                gravity = 7;
            var banner = window[this.platformName].createBannerAd({
                style: {
                    gravity: gravity,
                    width: this.bannerWidth
                }
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
        UCModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, adIndex, style) {
            var _this = this;
            if (remoteOn === void 0) { remoteOn = true; }
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (adIndex === void 0) { adIndex = 0; }
            console.log(MSG.BANNER_SHOW);
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerHorizontal = horizontal;
            this.bannerVertical = vertical;
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
            else {
                this._showBanner();
            }
        };
        UCModule.prototype._showBanner = function () {
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
                this.banner.hide();
                this.banner.destroy();
                this.banner = null;
            }
            this.banner = this._createBannerAd();
            if (this.banner) {
                this.banner.onError(this._onBannerError.bind(this));
                this.banner.onLoad(this._onBannerLoad.bind(this));
                this.banner.show();
            }
        };
        /**
        * 隐藏banner
        */
        UCModule.prototype.hideBanner = function () {
            if (this.banner) {
                this.banner.hide();
                this.banner.destroy();
                this.banner = null;
            }
        };
        UCModule.prototype.createRewardAD = function (show) {
            var _this = this;
            if (this.videoLoading) {
                return;
            }
            if (!window[this.platformName]) {
                if (moosnow.platform.videoCb)
                    moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!window[this.platformName].createRewardedVideoAd) {
                if (moosnow.platform.videoCb)
                    moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            var videoId = this.getVideoId();
            if (Common.isEmpty(videoId)) {
                console.warn(MSG.VIDEO_KEY_IS_NULL);
                if (moosnow.platform.videoCb)
                    moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!this.video) {
                this.video = window[this.platformName].createRewardVideoAd();
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
                    moosnow.platform.videoPlaying = true;
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
        return UCModule;
    }(PlatformModule));

    var NodeAttribute = /** @class */ (function () {
        function NodeAttribute() {
            this.x = 0;
            this.y = 0;
            this.width = "canvasWidth";
            this.height = "canvasHeight";
            this.url = "";
            this.isMask = false;
            this.maskUrl = "";
            this.child = null;
            this.event = [];
            this.type = "";
            this.active = true;
            this.widget = null;
            this.grid = null;
            this.zIndex = 0;
            this.stopPropagation = false;
        }
        NodeAttribute.parse = function (json) {
            var temp = __assign(__assign({}, new NodeAttribute()), json);
            return temp;
        };
        NodeAttribute.convertStr2Enum = function (ev, key, def) {
            if (ev.hasOwnProperty(key)) {
                return ev[key];
            }
            return def;
        };
        return NodeAttribute;
    }());

    /**
     * UI节点和逻辑
     */
    var LayoutFormKeyValue = /** @class */ (function () {
        function LayoutFormKeyValue() {
            this.formNode = null;
            this.formLogic = null;
            // constructor(formNode, formLogic) {
            //     this.formNode = formNode;
            //     this.formLogic = formLogic;
            // }
        }
        return LayoutFormKeyValue;
    }());
    /**
     * 节点缓存
     */
    var LayoutFormQuene = /** @class */ (function () {
        function LayoutFormQuene() {
            // constructor(name, formNode, formLogic) {
            //     this.formName = name;
            //     // this.quene.push(new LayoutFormKeyValue(formNode, formLogic))
            // }
            this.formName = "";
            this.mQuene = [];
            // public addForm(formNode, formLogic) {
            //     this.quene.push(new LayoutFormKeyValue(formNode, formLogic));
            // }
            // public addFormKV(kv: LayoutFormKeyValue) {
            //     this.quene.push(kv);
            // }
        }
        Object.defineProperty(LayoutFormQuene.prototype, "quene", {
            /**
             * 节点队列
             */
            get: function () {
                return this.mQuene;
            },
            set: function (value) {
                // debugger
                this.mQuene = value;
            },
            enumerable: true,
            configurable: true
        });
        return LayoutFormQuene;
    }());
    var FormFactory = /** @class */ (function () {
        function FormFactory() {
            this.layoutUrl = ROOT_CONFIG.HTTP_ROOT + "/layout/" + Common.config.moosnowAppId + "/layout.json";
            this.templatesUrl = ROOT_CONFIG.HTTP_ROOT + "/layout/" + Common.config.moosnowAppId + "/templates.json";
            this.maskUrl = ROOT_CONFIG.HTTP_ROOT + "/layout/" + Common.config.moosnowAppId + "/img_mask.png";
            this.mFormQuene = [];
            this.mCachedLayoutQuene = [];
            this.mLayoutQuene = [];
            this.mTemplatesQuene = [];
        }
        Object.defineProperty(FormFactory.prototype, "layoutQuene", {
            get: function () {
                return this.mFormQuene;
            },
            set: function (value) {
                this.mFormQuene = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(FormFactory.prototype, "cachedLayoutQuene", {
            get: function () {
                return this.mCachedLayoutQuene;
            },
            set: function (value) {
                this.mCachedLayoutQuene = value;
            },
            enumerable: true,
            configurable: true
        });
        FormFactory.prototype.destory = function () {
            this.cachedLayoutQuene = [];
            this.layoutQuene = [];
        };
        FormFactory.prototype.addFrom2Cached = function (name, formKV) {
            var cacheIdx = -1;
            for (var i = 0; i < this.cachedLayoutQuene.length; i++) {
                var item = this.cachedLayoutQuene[i];
                if (item.formName == name) {
                    cacheIdx = i;
                    break;
                }
            }
            if (cacheIdx != -1) {
                this.cachedLayoutQuene[cacheIdx].quene.push(formKV);
            }
            else {
                var item = new LayoutFormQuene();
                item.formName = name;
                item.quene.push(formKV);
                this.cachedLayoutQuene.push(item);
            }
        };
        /**
         * 从缓存中取form
         * @param name
         */
        FormFactory.prototype.getFormFromCached = function (name) {
            for (var i = 0; i < this.cachedLayoutQuene.length; i++) {
                var item = this.cachedLayoutQuene[i];
                if (item.formName == name) {
                    for (var j = 0; j < item.quene.length; j++) {
                        var cacheForm = item.quene.splice(j, 1);
                        if (item.quene.length == 0) {
                            this.cachedLayoutQuene.splice(i, 1);
                        }
                        return item.quene[j];
                    }
                    break;
                }
            }
            return null;
        };
        /**
         * 添加Form节点到队列
         * @param name
         * @param formNode
         * @param formLogic
         */
        FormFactory.prototype.addForm2Quene = function (name, formNode, formLogic) {
            var idx = -1;
            for (var i = 0; i < this.layoutQuene.length; i++) {
                var item = this.layoutQuene[i];
                if (item.formName == name) {
                    idx = i;
                    break;
                }
            }
            // console.log('addForm2Quene 1 ', this._FormQuene)
            if (idx != -1) {
                var kv = new LayoutFormKeyValue();
                kv.formNode = formNode;
                kv.formLogic = formLogic;
                this.layoutQuene[idx].quene.push(kv);
            }
            else {
                var quene = new LayoutFormQuene();
                quene.formName = name;
                var kv = new LayoutFormKeyValue();
                kv.formNode = formNode;
                kv.formLogic = formLogic;
                quene.quene.push(kv);
                this.layoutQuene.push(quene);
            }
        };
        FormFactory.prototype.hasFormInQuene = function (name) {
            var idx = -1;
            for (var i = 0; i < this.layoutQuene.length; i++) {
                var item = this.layoutQuene[i];
                if (item.formName == name) {
                    idx = i;
                    break;
                }
            }
            return idx != -1;
        };
        /**
         * 根据逻辑类回收
         * @param item
         * @param idx
         * @param callback
         * @param num
         */
        FormFactory.prototype.recoverFormLogic = function (item, idx, callback, num) {
            var _this = this;
            if (num === void 0) { num = 1; }
            var formKVs = item.quene.splice(idx, num);
            if (item.quene.length == 0) {
                for (var i = 0; i < this.layoutQuene.length; i++) {
                    if (item == this.layoutQuene[i]) {
                        this.layoutQuene.splice(i, 1);
                        break;
                    }
                }
            }
            formKVs.forEach(function (formKV) {
                _this.addFrom2Cached(item.formName, formKV);
            });
            if (callback) {
                if (formKVs.length == 1)
                    callback(formKVs[0]);
                else
                    callback(formKVs);
            }
        };
        FormFactory.prototype.removeFormByLogic = function (logic, callback) {
            for (var i = 0; i < this.layoutQuene.length; i++) {
                var item = this.layoutQuene[i];
                for (var j = 0; j < item.quene.length; j++) {
                    if (item.quene[j].formLogic == logic) {
                        this.recoverFormLogic(item, j, callback);
                        break;
                    }
                }
            }
        };
        /**
         * 从队列里移除Form
         * @param name
         * @param formNode
         */
        FormFactory.prototype.removeFormFromQuene = function (name, formKV, callback) {
            for (var i = 0; i < this.layoutQuene.length; i++) {
                var item = this.layoutQuene[i];
                if (item.formName == name) {
                    for (var j = 0; j < item.quene.length; j++) {
                        if (item.quene[j] == formKV) {
                            this.recoverFormLogic(item, j, callback);
                            break;
                        }
                    }
                    break;
                }
            }
        };
        /**
         * 从队列里移除所有
         * @param name
         */
        FormFactory.prototype.removeAllFormFromQuene = function (name, callback) {
            for (var i = 0; i < this.layoutQuene.length; i++) {
                var item = this.layoutQuene[i];
                if (item.formName == name) {
                    for (var j = 0; j < item.quene.length; j++) {
                        this.recoverFormLogic(item, j, callback);
                        j--;
                    }
                    break;
                }
            }
        };
        /**
         * 根据名称和节点获取 FormKeyValue
         * @param name
         * @param formNode
         */
        FormFactory.prototype.getKVByName = function (name, formNode) {
            var kvs = this.getKVsByName(name);
            if (kvs) {
                for (var i = 0; i < kvs.length; i++) {
                    if (kvs[i].formNode == formNode) {
                        return kvs[i];
                    }
                }
            }
        };
        FormFactory.prototype.getKVsByName = function (name) {
            var idx = -1;
            for (var i = 0; i < this.layoutQuene.length; i++) {
                var item = this.layoutQuene[i];
                if (item.formName == name) {
                    idx = i;
                    break;
                }
            }
            // console.log('addForm2Quene 1 ', this._FormQuene)
            if (idx != -1) {
                return this.layoutQuene[idx].quene;
            }
            return [];
        };
        /**
         * 更新layout缓存，非专业人员不要使用！！
         * @param res
         */
        FormFactory.prototype.setLayout = function (res) {
            this.mCachedLayout = res;
        };
        FormFactory.prototype.getLayout = function (callback) {
            var _this = this;
            if (!this.mCachedLayout) {
                this.mLayoutQuene.push(callback);
                if (this.mLayoutQuene.length == 1)
                    moosnow.http.request(this.layoutUrl, {}, 'GET', function (res) {
                        _this.mCachedLayout = res;
                        console.log('getLayout call num ', _this.mLayoutQuene.length);
                        _this.mLayoutQuene.forEach(function (item) {
                            item(res);
                        });
                        _this.mLayoutQuene = [];
                    });
            }
            else
                callback(this.mCachedLayout);
        };
        /**
         * 更新模板缓存 ，非专业人员不要使用！！
         * @param res
         */
        FormFactory.prototype.setTemplates = function (res) {
            this.mCachedTemplates = res;
        };
        FormFactory.prototype.getTemplates = function (callback) {
            var _this = this;
            if (!this.mCachedTemplates) {
                this.mTemplatesQuene.push(callback);
                if (this.mTemplatesQuene.length == 1)
                    moosnow.http.request(this.templatesUrl, {}, 'GET', function (res) {
                        _this.mCachedTemplates = res;
                        _this.mTemplatesQuene.forEach(function (item) {
                            item(res);
                        });
                        _this.mTemplatesQuene = [];
                    });
            }
            else
                callback(this.mCachedTemplates);
        };
        FormFactory.prototype.getTemplate = function (tempName, callback) {
            this.getTemplates(function (res) {
                var tempCfg = res[tempName];
                if (tempCfg) {
                    var formCfg = NodeAttribute.parse(tempCfg);
                    callback(formCfg);
                }
            });
        };
        FormFactory.prototype.showForm = function (options) {
        };
        FormFactory.prototype.hideFormByLogic = function (logic, callback) {
        };
        FormFactory.prototype.hideForm = function (name, formNode, formData) {
        };
        FormFactory.prototype.createNodeByTemplate = function (name, tempLogic, tempData, parent, remoteLayout, layoutOptions) {
            if (remoteLayout === void 0) { remoteLayout = true; }
            if (layoutOptions === void 0) { layoutOptions = null; }
        };
        FormFactory.prototype.hideNodeByTemplate = function (name, formNode, formData) {
        };
        return FormFactory;
    }());

    var NodeHelper = /** @class */ (function (_super) {
        __extends(NodeHelper, _super);
        function NodeHelper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NodeHelper, "canvasNode", {
            get: function () {
                return cc.Canvas.instance.node;
            },
            enumerable: true,
            configurable: true
        });
        NodeHelper.getNodeName = function () {
            this.nodeNum++;
            return 'createNode' + this.nodeNum;
        };
        NodeHelper.createNode = function () {
        };
        NodeHelper.createImage = function (parent, imgCfg) {
        };
        NodeHelper.createText = function (parent, textCfg) {
        };
        NodeHelper.changeSrc = function (image, imgCfg) {
        };
        NodeHelper.createMask = function (parent) {
        };
        NodeHelper.nodeNum = 0;
        return NodeHelper;
    }(BaseModule));

    var BaseForm = /** @class */ (function (_super) {
        __extends(BaseForm, _super);
        function BaseForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.mOwner = null;
            _this.formComponents = [];
            _this.mNodeMap = [];
            return _this;
        }
        Object.defineProperty(BaseForm.prototype, "node", {
            get: function () {
                if (this.mOwner)
                    return this.mOwner;
                else
                    return {};
            },
            set: function (value) {
                this.mOwner = value;
            },
            enumerable: true,
            configurable: true
        });
        BaseForm.prototype.start = function () {
        };
        Object.defineProperty(BaseForm.prototype, "FormData", {
            /**
             * 父类缓存willShow，onShow传递到实体的逻辑数据
             */
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化
         * @param node
         */
        BaseForm.prototype.initForm = function (node) {
            this.node = node;
            for (var v in this) {
                if (!Common.isFunction(this[v])) {
                    var findNode = this.findNodeByName(node, v);
                    if (findNode)
                        this[v] = findNode;
                    this.mNodeMap.push(v);
                }
            }
            for (var i = 0; i < this.formComponents.length; i++) {
                this.formComponents[i].initForm(node);
            }
        };
        BaseForm.prototype.disable = function () {
            var _this = this;
            this.node = null;
            this.mNodeMap.forEach(function (v) {
                _this[v] = null;
            });
            this.formComponents.forEach(function (item) {
                item.disable();
            });
            this.formComponents = [];
        };
        BaseForm.prototype.findNodeByName = function (node, attrName) {
            return null;
        };
        BaseForm.prototype.willShow = function (data) {
            this.mFormData = data;
            if (data && this.node) {
                if (data.x)
                    this.node.x = data.x;
                if (data.y)
                    this.node.y = data.y;
                if (data.zIndex)
                    this.node.zIndex = data.zIndex;
            }
            this.formComponents.forEach(function (item) {
                item.willShow(data);
            });
        };
        BaseForm.prototype.onShow = function (data) {
            this.formComponents.forEach(function (item) {
                item.onShow(data);
            });
        };
        BaseForm.prototype.willHide = function (data) {
            this.formComponents.forEach(function (item) {
                item.willHide(data);
            });
        };
        BaseForm.prototype.onHide = function (data) {
            this.formComponents.forEach(function (item) {
                item.onHide(data);
            });
        };
        BaseForm.prototype.hideForm = function () {
            moosnow.form.formFactory.hideFormByLogic(this);
        };
        return BaseForm;
    }(BaseModule));

    var NodeEvent = /** @class */ (function (_super) {
        __extends(NodeEvent, _super);
        function NodeEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NodeEvent, "TOUCH_START", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NodeEvent, "TOUCH_END", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        return NodeEvent;
    }(BaseForm));

    var CocosNodeEvent = /** @class */ (function (_super) {
        __extends(CocosNodeEvent, _super);
        function CocosNodeEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CocosNodeEvent, "TOUCH_START", {
            get: function () {
                return cc.Node.EventType.TOUCH_START;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CocosNodeEvent, "TOUCH_END", {
            get: function () {
                return cc.Node.EventType.TOUCH_END;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CocosNodeEvent, "TOUCH_CANCEL", {
            get: function () {
                return cc.Node.EventType.TOUCH_CANCEL;
            },
            enumerable: true,
            configurable: true
        });
        return CocosNodeEvent;
    }(NodeEvent));

    var LayoutAttribute = /** @class */ (function (_super) {
        __extends(LayoutAttribute, _super);
        function LayoutAttribute() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.layoutType = cc.Layout.Type.GRID;
            _this.resizeMode = cc.Layout.ResizeMode.CONTAINER;
            _this.startAxis = cc.Layout.AxisDirection.HORIZONTAL;
            _this.left = 30;
            _this.top = 30;
            _this.right = 30;
            _this.bottom = 30;
            _this.spacingX = 30;
            _this.spacingY = 30;
            return _this;
        }
        LayoutAttribute.parse = function (json) {
            var retValue = __assign(__assign({}, new LayoutAttribute()), json);
            retValue.layoutType = NodeAttribute.convertStr2Enum(cc.Layout.Type, json.layoutType, cc.Layout.Type.GRID);
            retValue.resizeMode = NodeAttribute.convertStr2Enum(cc.Layout.ResizeMode, json.resizeMode, cc.Layout.ResizeMode.CONTAINER);
            retValue.startAxis = NodeAttribute.convertStr2Enum(cc.Layout.AxisDirection, json.startAxis, cc.Layout.AxisDirection.HORIZONTAL);
            return retValue;
        };
        return LayoutAttribute;
    }(NodeAttribute));

    var WidgetAttribute = /** @class */ (function (_super) {
        __extends(WidgetAttribute, _super);
        function WidgetAttribute(isAlignLeft, isAlignTop, isAlignRight, isAlignBottom, left, top, right, bottom) {
            if (isAlignLeft === void 0) { isAlignLeft = false; }
            if (isAlignTop === void 0) { isAlignTop = false; }
            if (isAlignRight === void 0) { isAlignRight = false; }
            if (isAlignBottom === void 0) { isAlignBottom = false; }
            if (left === void 0) { left = 0; }
            if (top === void 0) { top = 0; }
            if (right === void 0) { right = 0; }
            if (bottom === void 0) { bottom = 0; }
            var _this = _super.call(this) || this;
            _this.isAlignLeft = false;
            _this.isAlignTop = false;
            _this.isAlignRight = false;
            _this.isAlignBottom = false;
            _this.left = 0;
            _this.top = 0;
            _this.right = 0;
            _this.bottom = 0;
            _this.isAlignLeft = isAlignLeft;
            _this.isAlignTop = isAlignTop;
            _this.isAlignRight = isAlignRight;
            _this.isAlignBottom = isAlignBottom;
            _this.left = left;
            _this.top = top;
            _this.right = right;
            _this.bottom = bottom;
            return _this;
        }
        WidgetAttribute.parse = function (json) {
            return __assign(__assign({}, new WidgetAttribute()), json);
        };
        return WidgetAttribute;
    }(NodeAttribute));

    var ChangeQuene = /** @class */ (function () {
        function ChangeQuene() {
        }
        return ChangeQuene;
    }());
    var CocosNodeHelper = /** @class */ (function (_super) {
        __extends(CocosNodeHelper, _super);
        function CocosNodeHelper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CocosNodeHelper, "canvasNode", {
            get: function () {
                if (!this.mRootNode)
                    this.mRootNode = cc.Canvas.instance.node;
                return cc.Canvas.instance.node;
                // return cc.director.getScene();
            },
            set: function (value) {
                this.mRootNode = value;
            },
            enumerable: true,
            configurable: true
        });
        CocosNodeHelper.createNode = function (name, nodeCfg) {
            if (!name) {
                name = this.getNodeName();
            }
            var node = new cc.Node();
            node.name = name;
            if (nodeCfg) {
                node.active = nodeCfg.active;
                node.zIndex = this.convertIndex(nodeCfg.zIndex);
                if (nodeCfg.stopPropagation)
                    this.addStopPropagation(node);
            }
            return node;
        };
        CocosNodeHelper.createImage = function (parent, imgCfg) {
            var node = this.createNode(imgCfg.name, imgCfg);
            var sprite = node.addComponent(cc.Sprite);
            sprite.type = cc.Sprite.Type.SIMPLE;
            sprite.sizeMode = cc.Sprite.SizeMode.TRIMMED;
            sprite.trim = true;
            node.width = this.convertWidth(imgCfg.width);
            node.height = this.convertHeight(imgCfg.height);
            // console.log('createImage  1 ', node.width, node.height)
            this.changeSrc(node, imgCfg, function () {
                // node.width = this.convertWidth(imgCfg.width);
                // node.height = this.convertHeight(imgCfg.height);
                // console.log('createImage  2 ', node.width, node.height);
            });
            node.x = imgCfg.x;
            node.y = imgCfg.y;
            parent.addChild(node);
            return node;
        };
        /**
         * 16进制颜色转换为RGB色值
         * @method hexColor
         */
        CocosNodeHelper.colorHex2RGB = function (hexColor) {
            if (hexColor.substr(0, 1) == "#")
                hexColor = hexColor.substring(1);
            hexColor = hexColor.toLowerCase();
            var b = new Array();
            for (var x = 0; x < 3; x++) {
                b[0] = hexColor.substr(x * 2, 2);
                b[3] = "0123456789abcdef";
                b[1] = b[0].substr(0, 1);
                b[2] = b[0].substr(1, 1);
                b[20 + x] = b[3].indexOf(b[1]) * 16 + b[3].indexOf(b[2]);
            }
            //return b[20] + "," + b[21] + "," + b[22];
            return new cc.Color(b[20], b[21], b[22]);
        };
        CocosNodeHelper.createText = function (parent, textCfg) {
            var node = this.createNode(textCfg.name, textCfg);
            node.color = this.colorHex2RGB(textCfg.color);
            var txt = node.addComponent(cc.Label);
            txt.enableWrapText = false;
            txt.overflow = cc.Label.Overflow.SHRINK;
            txt.fontSize = textCfg.fontSize;
            txt.lineHeight = textCfg.lineHeight;
            var horizontalAlign = cc.Label.HorizontalAlign[textCfg.horizontalAlign.toUpperCase()];
            txt.horizontalAlign = horizontalAlign ? horizontalAlign : cc.Label.HorizontalAlign.CENTER;
            txt.verticalAlign = cc.Label.VerticalAlign.CENTER;
            txt.useSystemFont = true;
            if (textCfg.text)
                txt.string = textCfg.text;
            node.x = textCfg.x;
            node.y = textCfg.y;
            node.width = this.convertWidth(textCfg.width);
            node.height = this.convertWidth(textCfg.height);
            parent.addChild(node);
            return node;
        };
        CocosNodeHelper.createLayout = function (parent, layoutCfg) {
            var node = this.createNode(layoutCfg.name, layoutCfg);
            var layout = node.addComponent(cc.Layout);
            layout.paddingLeft = layoutCfg.left;
            layout.paddingTop = layoutCfg.top;
            layout.paddingRight = layoutCfg.right;
            layout.paddingBottom = layoutCfg.bottom;
            layout.spacingX = layoutCfg.spacingX;
            layout.spacingY = layoutCfg.spacingY;
            layout.startAxis = layoutCfg.startAxis;
            node.x = layoutCfg.x;
            node.y = layoutCfg.y;
            node.width = this.convertWidth(layoutCfg.width);
            node.height = this.convertWidth(layoutCfg.height);
            parent.addChild(node);
            return node;
        };
        CocosNodeHelper.createProgressBar = function (parent, progressBarCfg) {
            var node = this.createNode(progressBarCfg.name, progressBarCfg);
            var progressBar = node.addComponent(cc.ProgressBar);
            var sprite = node.addComponent(cc.Sprite);
            this.changeSrc(node, progressBarCfg);
            progressBar.mode = cc.ProgressBar.Mode.HORIZONTAL; // progressBarCfg.mode;
            progressBar.totalLength = 300;
            progressBar.progress = 0.1;
            node.x = progressBarCfg.x;
            node.y = progressBarCfg.y;
            node.width = this.convertWidth(progressBarCfg.width);
            node.height = this.convertWidth(progressBarCfg.height);
            if (progressBarCfg.child && progressBarCfg.child.length > 0) {
                var bar = this.createImage(node, NodeAttribute.parse(progressBarCfg.child[0]));
                progressBar.barSprite = bar.getComponent(cc.Sprite);
            }
            parent.addChild(node);
            return node;
        };
        CocosNodeHelper.createScroll = function (parent, scrollCfg) {
        };
        CocosNodeHelper.createView = function (parent, viewCfg) {
            var container = this.createImage(parent, viewCfg);
            container.width = this.convertWidth(viewCfg.scroll.width);
            container.height = this.convertHeight(viewCfg.scroll.height);
            if (viewCfg.widget) {
                this.createWidget(container, WidgetAttribute.parse(viewCfg.widget));
            }
            var scrollNode = this.createNode(viewCfg.name + '_scroll', viewCfg);
            var scroll = scrollNode.addComponent(cc.ScrollView);
            scroll.horizontal = !!viewCfg.scroll.horizontal;
            scroll.vertical = !!viewCfg.scroll.vertical;
            scroll.horizontalScrollBar = null;
            scroll.verticalScrollBar = null;
            scrollNode.width = this.convertWidth(viewCfg.scroll.width);
            scrollNode.height = this.convertHeight(viewCfg.scroll.height);
            container.addChild(scrollNode);
            if (viewCfg.layout.widget) {
                this.createWidget(scrollNode, viewCfg.layout.widget);
            }
            var view = this.createNode(viewCfg.name + "_view");
            view.addComponent(cc.Mask);
            this.createWidget(view, new WidgetAttribute(true, true, true, true, 0, 0, 0, 0));
            scrollNode.addChild(view);
            viewCfg.layout.name = viewCfg.name + '_layout';
            var layoutNode = this.createLayout(view, LayoutAttribute.parse(viewCfg.layout));
            layoutNode.width = this.convertWidth(viewCfg.layout.width);
            layoutNode.height = this.convertHeight(viewCfg.layout.height);
            scroll.content = layoutNode;
            return {
                viewContainer: container,
                layoutNode: layoutNode
            };
        };
        CocosNodeHelper.createWidget = function (view, widgetCfg) {
            var widget = view.addComponent(cc.Widget);
            widget.isAlignLeft = widgetCfg.isAlignLeft;
            widget.isAlignTop = widgetCfg.isAlignTop;
            widget.isAlignRight = widgetCfg.isAlignRight;
            widget.isAlignBottom = widgetCfg.isAlignBottom;
            widget.left = widgetCfg.left;
            widget.top = widgetCfg.top;
            widget.right = widgetCfg.right;
            widget.bottom = widgetCfg.bottom;
            widget.updateAlignment();
            // if (widgetCfg.isAlignBottom) {
            //     view.y = -(view.parent.height - view.height) / 2 + widgetCfg.bottom
            // }
            return view;
        };
        CocosNodeHelper.addToSrcQuene = function (image, imgCfg, callback) {
            var existsCall = false;
            for (var i = 0; i < this.srcQuene.length; i++) {
                if (this.srcQuene[i].node == image) {
                    existsCall = true;
                    this.srcQuene[i] = {
                        node: image,
                        imgCfg: imgCfg,
                        callback: callback
                    };
                    break;
                }
            }
            if (!existsCall) {
                this.srcQuene.push({
                    node: image,
                    imgCfg: imgCfg,
                    callback: callback
                });
            }
        };
        CocosNodeHelper.getSrcQuene = function (image) {
            var retValue = null;
            for (var i = 0; i < this.srcQuene.length; i++) {
                if (this.srcQuene[i].node == image) {
                    retValue = this.srcQuene[i];
                    break;
                }
            }
            return retValue;
        };
        CocosNodeHelper.applySrcQuene = function (image, tex, imgCfg) {
            var queneItem = this.getSrcQuene(image);
            if (queneItem && queneItem.imgCfg == imgCfg) {
                // console.log('applySrcQuene', image.node.name, tex.url)
                this.updateSprite(image, tex);
                this.checkSize(image, this.convertWidth(queneItem.imgCfg.width), this.convertHeight(queneItem.imgCfg.height));
                // this.schedule(this.checkSize, 0.16, [image, queneItem.imgCfg.width, queneItem.imgCfg.height])
                this.setSpriteGrid(queneItem.imgCfg, image);
                this.clearSrcQuene(image);
            }
        };
        CocosNodeHelper.clearSrcQuene = function (image) {
            for (var i = 0; i < this.srcQuene.length; i++) {
                if (this.srcQuene[i].node == image) {
                    this.srcQuene.splice(i, 1);
                    i--;
                }
            }
        };
        CocosNodeHelper.changeSrc = function (image, imgCfg, callback) {
            var _this = this;
            var sprite;
            if (image instanceof cc.Node)
                sprite = image.getComponent(cc.Sprite);
            else
                sprite = image;
            this.addToSrcQuene(sprite, imgCfg, callback);
            if (imgCfg.url) {
                var isRemote = imgCfg.url.indexOf("http") != -1;
                if (isRemote) {
                    if (cc.assetManager && cc.assetManager.loadRemote) {
                        cc.assetManager.loadRemote(imgCfg.url, cc.Texture2D, function (err, tex) {
                            if (err) {
                                console.log(' cc.assetManager.loadRemote ', err);
                                return;
                            }
                            _this.applySrcQuene(sprite, tex, imgCfg);
                        });
                    }
                    else
                        cc.loader.load(imgCfg.url, function (err, tex) {
                            if (err) {
                                console.log(' cc.loader.load ', err);
                                return;
                            }
                            _this.applySrcQuene(sprite, tex, imgCfg);
                        });
                }
                else {
                    var res = cc.loader.getRes(imgCfg.url);
                    if (res) {
                        this.applySrcQuene(sprite, res, imgCfg);
                        return;
                    }
                    cc.loader.loadRes(imgCfg.url, cc.Texture2D, function (err, tex) {
                        _this.applySrcQuene(sprite, tex, imgCfg);
                    });
                }
            }
        };
        CocosNodeHelper.updateSprite = function (sprite, tex) {
            var spriteFrame = new cc.SpriteFrame(tex);
            sprite.spriteFrame = spriteFrame;
        };
        CocosNodeHelper.checkSize = function (sprite, width, height) {
            if (sprite.node.width == width && sprite.node.height == height) {
                this.unschedule(this.checkSize);
                return;
            }
            sprite.node.width = width;
            sprite.node.height = height;
        };
        CocosNodeHelper.setSpriteGrid = function (imgCfg, sprite) {
            if (imgCfg.grid) {
                sprite.type = cc.Sprite.Type.SLICED;
                sprite.spriteFrame.insetLeft = imgCfg.grid.left;
                sprite.spriteFrame.insetTop = imgCfg.grid.top;
                sprite.spriteFrame.insetRight = imgCfg.grid.right;
                sprite.spriteFrame.insetBottom = imgCfg.grid.bottom;
                // (sprite as any).markForUpdateRenderData(true);
            }
        };
        CocosNodeHelper.changeText = function (text, msg) {
            if (!text) {
                // console.log('对象不存在,赋值失败')
                return;
            }
            var lab = text.getComponent(cc.Label);
            if (lab) {
                lab.string = msg;
            }
        };
        CocosNodeHelper.createMask = function (parent, maskUrl) {
            if (maskUrl === void 0) { maskUrl = undefined; }
            var skin = moosnow.form.formFactory.maskUrl;
            var mask = this.createNode("img_mask");
            var sprite = mask.addComponent(cc.Sprite);
            this.changeSrc(mask, { url: skin }, function () {
            });
            parent.addChild(mask);
            mask.zIndex = -1;
            this.addStopPropagation(mask);
        };
        CocosNodeHelper.addStopPropagation = function (node) {
            if (Common.isOnlyUI && Common.isPC)
                return;
            if (node)
                node.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
        };
        CocosNodeHelper.removeStopPropagation = function (node) {
            if (node)
                node.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
        };
        CocosNodeHelper.onMaskMouseDown = function (e) {
            console.log('阻止事件传递, node name ', e.getCurrentTarget().name);
            e.stopPropagation();
        };
        CocosNodeHelper.findNodeByName = function (node, attrName) {
            var targetNode = null;
            for (var i = 0; i < node.childrenCount; i++) {
                var child = node.children[i];
                if (child.name == attrName) {
                    targetNode = child;
                    break;
                }
                else {
                    var node_1 = this.findNodeByName(child, attrName);
                    if (node_1) {
                        targetNode = node_1;
                        break;
                    }
                }
            }
            return targetNode;
        };
        CocosNodeHelper.convertWidth = function (width) {
            var retValue = this.canvasNode.width;
            if (!isNaN(width)) {
                return parseInt("" + width);
            }
            return retValue;
        };
        CocosNodeHelper.convertHeight = function (height) {
            var retValue = this.canvasNode.height;
            if (!isNaN(height)) {
                return parseInt("" + height);
            }
            return retValue;
        };
        CocosNodeHelper.convertIndex = function (zindex) {
            if (!isNaN(zindex)) {
                return parseInt("" + zindex);
            }
            return 0;
        };
        CocosNodeHelper.srcQuene = [];
        return CocosNodeHelper;
    }(NodeHelper));

    var TextAttribute = /** @class */ (function (_super) {
        __extends(TextAttribute, _super);
        function TextAttribute() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
            * 文本内容的水平对齐方式
            */
            _this.horizontalAlign = "center";
            _this.color = "#ffffff";
            _this.fontSize = 32;
            _this.lineHeight = 32;
            _this.text = "";
            return _this;
        }
        TextAttribute.parse = function (json) {
            return __assign(__assign({}, new TextAttribute()), json);
        };
        return TextAttribute;
    }(NodeAttribute));

    var ProgressBarAttribute = /** @class */ (function (_super) {
        __extends(ProgressBarAttribute, _super);
        function ProgressBarAttribute() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.mode = cc.ProgressBar.Mode.HORIZONTAL;
            return _this;
        }
        ProgressBarAttribute.parse = function (json) {
            return __assign(__assign({}, new ProgressBarAttribute()), json);
        };
        return ProgressBarAttribute;
    }(NodeAttribute));

    var ScrollAttribute = /** @class */ (function (_super) {
        __extends(ScrollAttribute, _super);
        function ScrollAttribute() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.horizontal = true;
            _this.vertical = true;
            return _this;
        }
        return ScrollAttribute;
    }(NodeAttribute));

    var ViewAttribute = /** @class */ (function (_super) {
        __extends(ViewAttribute, _super);
        function ViewAttribute() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.scroll = new ScrollAttribute();
            _this.layout = new LayoutAttribute();
            return _this;
        }
        ViewAttribute.parse = function (json) {
            return __assign(__assign({}, new ViewAttribute()), json);
        };
        return ViewAttribute;
    }(NodeAttribute));

    var LayoutType = /** @class */ (function () {
        function LayoutType() {
        }
        LayoutType.image = "image";
        LayoutType.progressBar = "progressBar";
        LayoutType.text = "text";
        LayoutType.layout = "layout";
        LayoutType.view = "view";
        LayoutType.widget = "widget";
        return LayoutType;
    }());

    var CocosFormFactory = /** @class */ (function (_super) {
        __extends(CocosFormFactory, _super);
        function CocosFormFactory() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CocosFormFactory.prototype._createChild = function (parent, children) {
            for (var i = 0; i < children.length; i++) {
                var jsonCfg = children[i];
                var node = this.createNode(parent, jsonCfg);
            }
        };
        CocosFormFactory.prototype.createNode = function (parent, jsonCfg) {
            var node = null;
            var nodeCfg = null;
            if (jsonCfg.type == LayoutType.progressBar) {
                nodeCfg = ProgressBarAttribute.parse(jsonCfg);
                node = CocosNodeHelper.createProgressBar(parent, nodeCfg);
                if (nodeCfg.child && nodeCfg.child.length > 1) {
                    nodeCfg.child.splice(0, 1);
                    this._createChild(node, nodeCfg.child);
                }
            }
            else if (jsonCfg.type == LayoutType.view) {
                nodeCfg = ViewAttribute.parse(jsonCfg);
                var viewRet = CocosNodeHelper.createView(parent, nodeCfg);
                node = viewRet.viewContainer;
                if (nodeCfg.child && nodeCfg.child.length > 0) {
                    this._createChild(node, nodeCfg.child);
                }
            }
            else {
                if (jsonCfg.type == LayoutType.text) {
                    nodeCfg = TextAttribute.parse(jsonCfg);
                    node = CocosNodeHelper.createText(parent, nodeCfg);
                }
                else if (jsonCfg.type == LayoutType.layout) {
                    nodeCfg = LayoutAttribute.parse(jsonCfg);
                    node = CocosNodeHelper.createLayout(parent, nodeCfg);
                }
                else if (jsonCfg.type == LayoutType.widget) {
                    nodeCfg = WidgetAttribute.parse(jsonCfg);
                    node = CocosNodeHelper.createWidget(parent, nodeCfg);
                }
                else {
                    nodeCfg = NodeAttribute.parse(jsonCfg);
                    node = CocosNodeHelper.createImage(parent, nodeCfg);
                }
                if (jsonCfg.widget) {
                    CocosNodeHelper.createWidget(node, WidgetAttribute.parse(jsonCfg.widget));
                }
                if (nodeCfg.child && nodeCfg.child.length > 0) {
                    this._createChild(node, nodeCfg.child);
                }
            }
            return node;
        };
        CocosFormFactory.prototype._createUINode = function (formCfg, formLogic, formData, parent) {
            if (!parent)
                parent = CocosNodeHelper.canvasNode;
            var formNode = this.createNode(parent, formCfg);
            if (formCfg.isMask)
                CocosNodeHelper.createMask(formNode, formCfg.maskUrl);
            // this._createChild(formNode, formCfg.child);
            var logic = new formLogic();
            logic.initForm(formNode);
            this.logicShow(logic, formNode, formData);
            this.addForm2Quene(formCfg.name, formNode, logic);
            return formNode;
        };
        CocosFormFactory.prototype.hideFormByLogic = function (logic, formData) {
            var _this = this;
            this.removeFormByLogic(logic, function (formKV) {
                if (formKV instanceof Array) {
                    formKV.forEach(function (item) {
                        _this.logicHide(item.formLogic, item.formNode, formData);
                    });
                }
                else {
                    _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                }
            });
        };
        CocosFormFactory.prototype.logicShow = function (formLogic, formNode, formData) {
            if (Common.isOnlyUI && Common.isPC) {
                console.warn('UI编辑模式，取消业务逻辑');
                return;
            }
            formLogic.willShow(formData);
            formNode.active = true;
            formLogic.onShow(formData);
        };
        CocosFormFactory.prototype.logicHide = function (formLogic, formNode, formData) {
            if (Common.isOnlyUI && Common.isPC) {
                console.warn('UI编辑模式，取消业务逻辑');
                return;
            }
            formLogic.willHide(formData);
            formNode.active = true;
            formLogic.onHide(formData);
            formNode.x = 0;
            formNode.y = 0;
            formNode.removeFromParent();
        };
        CocosFormFactory.prototype.hideForm = function (name, formNode, formData) {
            var _this = this;
            if (formNode) {
                this.removeFormFromQuene(name, formNode, function (formKV) {
                    _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                });
            }
            else
                this.removeAllFormFromQuene(name, function (formKV) {
                    _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                });
        };
        CocosFormFactory.prototype.showForm = function (options) {
            var _this = this;
            if (!!options.showOnce) {
                if (this.hasFormInQuene(options.name)) {
                    return;
                }
            }
            if (!options.parent)
                options.parent = CocosNodeHelper.canvasNode;
            var formKV = this.getFormFromCached(options.name);
            if (formKV) {
                options.parent.addChild(formKV.formNode);
                this.logicShow(formKV.formLogic, formKV.formNode, options.formData);
                this.addForm2Quene(options.name, formKV.formNode, formKV.formLogic);
            }
            else {
                if (options.remoteLayout) {
                    this.getLayout(function (res) {
                        if (res[options.name]) {
                            var formCfg = res[options.name];
                            formCfg.name = options.name;
                            var node = _this._createUINode(formCfg, options.formLogic, options.formData, options.parent);
                            if (options.callback)
                                options.callback(node);
                        }
                    });
                }
                else {
                    var node = this._createUINode(options.layoutOptions, options.formLogic, options.formData);
                    if (options.callback)
                        options.callback(node);
                }
            }
        };
        CocosFormFactory.prototype.createNodeByTemplate = function (name, tempLogic, tempData, parent, remoteLayout, layoutOptions) {
            var _this = this;
            if (remoteLayout === void 0) { remoteLayout = true; }
            if (layoutOptions === void 0) { layoutOptions = null; }
            if (!parent)
                parent = CocosNodeHelper.canvasNode;
            var formKV = this.getFormFromCached(name);
            if (formKV) {
                parent.addChild(formKV.formNode);
                this.logicShow(formKV.formLogic, formKV.formNode, tempData);
                this.addForm2Quene(name, formKV.formNode, formKV.formLogic);
            }
            else {
                if (remoteLayout) {
                    this.getTemplates(function (res) {
                        var tempCfg = res[name];
                        if (tempCfg) {
                            var formCfg = NodeAttribute.parse(tempCfg);
                            formCfg.name = name;
                            var node = _this._createUINode(formCfg, tempLogic, tempData, parent);
                            // console.log('createNodeByTemplate ', formCfg)
                        }
                    });
                }
                else {
                    var node = this._createUINode(layoutOptions, tempLogic, tempData);
                }
            }
        };
        CocosFormFactory.prototype.hideNodeByTemplate = function (name, formNode, formData) {
            var _this = this;
            if (formNode) {
                this.removeFormFromQuene(name, formNode, function (formKV) {
                    _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                });
            }
            else
                this.removeAllFormFromQuene(name, function (formKV) {
                    _this.logicHide(formKV.formLogic, formKV.formNode, formData);
                });
        };
        CocosFormFactory.prototype.getTemplate = function (tempName, callback) {
            _super.prototype.getTemplate.call(this, tempName, function (tempCfg) {
                tempCfg.width = CocosNodeHelper.convertWidth(tempCfg.width);
                tempCfg.height = CocosNodeHelper.convertHeight(tempCfg.height);
                if (callback)
                    callback(tempCfg);
            });
        };
        return CocosFormFactory;
    }(FormFactory));

    var CocosBaseForm = /** @class */ (function (_super) {
        __extends(CocosBaseForm, _super);
        function CocosBaseForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.mDowning = false;
            _this.mClickQuene = {};
            return _this;
        }
        CocosBaseForm.prototype.downAnim = function (node) {
            node.scale = 1;
            node.runAction(cc.sequence(cc.scaleTo(0.1, 0.7, 0.7), cc.callFunc(function () {
                // this.mouseUpEffect();
            }, this)));
        };
        CocosBaseForm.prototype.upAnim = function (node, callback) {
            var _this = this;
            node.stopAllActions();
            node.scale = 0.7;
            node.runAction(cc.sequence(cc.scaleTo(0.1, 1, 1), cc.callFunc(function () {
                _this.mDowning = false;
                if (callback)
                    callback();
            }, this)));
        };
        CocosBaseForm.prototype.getClickQueneItem = function (e) {
            var queneId = e.getCurrentTarget().uuid;
            var retVal = this.mClickQuene[queneId];
            if (retVal)
                return retVal;
            else
                return null;
        };
        CocosBaseForm.prototype.setClickQueneItem = function (e, clicking) {
            var queneId = e.getCurrentTarget().uuid;
            if (this.mClickQuene[queneId])
                this.mClickQuene[queneId].clicking = clicking;
        };
        CocosBaseForm.prototype.onTouchStart = function (e) {
            var quene = this.getClickQueneItem(e);
            if (!quene)
                return;
            if (quene.once && quene.clicking)
                return;
            moosnow.audio.playClickEffect();
            this.downAnim(quene.node);
            if (this.mDowning)
                return;
            this.mDowning = true;
        };
        CocosBaseForm.prototype.onTouchEnd = function (e) {
            var _this = this;
            var quene = this.getClickQueneItem(e);
            if (!quene)
                return;
            if (quene.once && quene.clicking)
                return;
            this.setClickQueneItem(e, true);
            console.log('onTouchEnd');
            this.upAnim(quene.node, function () {
                if (quene && quene.callback)
                    quene.callback();
                _this.setClickQueneItem(e, false);
            });
            if (quene && quene.stopPropagation)
                e.stopPropagation();
        };
        CocosBaseForm.prototype.onTouchCancel = function (e) {
            var _this = this;
            var quene = this.getClickQueneItem(e);
            if (!quene)
                return;
            // if (quene.once && quene.clicking) return;
            console.log('onTouchCancel');
            this.upAnim(quene.node, function () {
                _this.setClickQueneItem(e, false);
            });
        };
        /**
         * 应用点击动画
         * @param node
         * @param callback
         * @param stopPropagation
         * @param once
         */
        CocosBaseForm.prototype.applyClickAnim = function (node, callback, stopPropagation, once) {
            if (stopPropagation === void 0) { stopPropagation = false; }
            if (once === void 0) { once = true; }
            if (Common.isOnlyUI && Common.isPC)
                return;
            if (node && node.uuid) {
                this.mClickQuene[node.uuid] = {
                    node: node,
                    stopPropagation: stopPropagation,
                    callback: callback,
                    once: once,
                    clicking: false
                };
                node.on(CocosNodeEvent.TOUCH_START, this.onTouchStart, this);
                node.on(CocosNodeEvent.TOUCH_END, this.onTouchEnd, this);
                node.on(CocosNodeEvent.TOUCH_CANCEL, this.onTouchCancel, this);
            }
            else {
                console.log('缺少对象，无法绑定事件');
            }
        };
        CocosBaseForm.prototype.removeClickAnim = function (node) {
            if (node && node.uuid) {
                this.mClickQuene[node.uuid] = null;
                delete this.mClickQuene[node.uuid];
                node.off(CocosNodeEvent.TOUCH_START, this.onTouchStart, this);
                node.off(CocosNodeEvent.TOUCH_END, this.onTouchEnd, this);
                node.off(CocosNodeEvent.TOUCH_CANCEL, this.onTouchCancel, this);
            }
        };
        CocosBaseForm.prototype.findNodeByName = function (node, attrName) {
            return CocosNodeHelper.findNodeByName(node, attrName);
        };
        return CocosBaseForm;
    }(BaseForm));

    var CocosToastForm = /** @class */ (function (_super) {
        __extends(CocosToastForm, _super);
        function CocosToastForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.msgText = null;
            return _this;
        }
        CocosToastForm.prototype.onMaskMouseDown = function (e) {
            e.stopPropagation();
        };
        CocosToastForm.prototype.willShow = function (msg) {
            _super.prototype.willShow.call(this);
            this.node.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
            this.node.zIndex = cc.macro.MAX_ZINDEX;
            this.msgText.getComponent(cc.Label).string = msg;
            this.node.active = true;
            this.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1)));
            this.scheduleOnce(this.hide, 1);
        };
        CocosToastForm.prototype.willHide = function (data) {
            _super.prototype.willHide.call(this, data);
            this.node.off(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
        };
        CocosToastForm.prototype.hide = function () {
            // this.node.active = false;
            this.hideForm();
        };
        return CocosToastForm;
    }(CocosBaseForm));

    var showOptions = /** @class */ (function () {
        function showOptions() {
            this._hideForm = true;
            /**
             * 扩展参数
             */
            this.extraData = {};
            this.zIndex = 0;
        }
        /**
         * 实例化参数
         */
        showOptions.create = function (c) {
            return new c();
        };
        Object.defineProperty(showOptions.prototype, "hideForm", {
            /**
             * 完成后是否隐藏 默认 true
             */
            get: function () {
                return this._hideForm;
            },
            set: function (value) {
                this._hideForm = value;
            },
            enumerable: true,
            configurable: true
        });
        return showOptions;
    }());

    /**
     * 金币飞入动画
     */
    var loadAdOptions = /** @class */ (function (_super) {
        __extends(loadAdOptions, _super);
        function loadAdOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * 浮动导出位置
             */
            _this.floatPositon = [];
            /**
             * 浮动导出模板
             */
            _this.floatTempletes = ["floatAdItem1"];
            return _this;
        }
        return loadAdOptions;
    }(showOptions));

    /**
     * 金币飞入动画
     */
    var showAdOptions = /** @class */ (function (_super) {
        __extends(showAdOptions, _super);
        function showAdOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * 浮动导出位置
             */
            _this.floatPositon = [];
            /**
             * 浮动导出模板
             */
            _this.floatTempletes = ["floatAdItem1"];
            /**
             * 广告类型
             */
            _this.adType = AD_POSITION.NONE;
            /**
             * 层级
             */
            _this.zIndex = cc.macro.MAX_ZINDEX;
            /**
             * 导出的名称，用来记录跳出的位置
             */
            _this.pointName = "";
            /**
             * 表单页面名称
             */
            _this.formName = "" || "loadingForm" || "homeForm" || "gameForm" || "endForm" || "respawnForm";
            return _this;
        }
        return showAdOptions;
    }(loadAdOptions));

    var FormLayout = /** @class */ (function () {
        function FormLayout() {
        }
        FormLayout.ToastForm = "toastForm";
        FormLayout.AdForm = "adForm";
        FormLayout.MistouchForm = "mistouchForm";
        FormLayout.PrizeForm = "prizeForm";
        FormLayout.TotalForm = "totalForm";
        FormLayout.EndForm = "endForm";
        FormLayout.RespawnForm = "respawnForm";
        FormLayout.FailForm = "failForm";
        FormLayout.PauseForm = "pauseForm";
        FormLayout.ShareForm = "shareForm";
        FormLayout.TryForm = "tryForm";
        FormLayout.SetForm = "setForm";
        FormLayout.BoxForm = "boxForm";
        FormLayout.NativeForm = "nativeForm";
        return FormLayout;
    }());

    var CocosNativeForm = /** @class */ (function (_super) {
        __extends(CocosNativeForm, _super);
        function CocosNativeForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.baseBox = null;
            _this.logo = null;
            _this.btnTopClose = null;
            _this.btnClose = null;
            _this.btnOpen = null;
            _this.txtMemo = null;
            return _this;
        }
        Object.defineProperty(CocosNativeForm.prototype, "FormData", {
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        CocosNativeForm.prototype.onShow = function (data) {
            var _this = this;
            _super.prototype.onShow.call(this, data);
            this.node.zIndex = cc.macro.MAX_ZINDEX;
            this.addListener();
            console.log('显示原生广告');
            moosnow.platform.hideBanner();
            // this.node.active = false;
            moosnow.platform.showNativeAd(function (row) {
                console.log('原生广告', row);
                if (row && row.imgUrlList && row.imgUrlList.length > 0) {
                    _this.node.active = true;
                    if (row.creativeType == 6) {
                        _this.baseBox.height = _this.baseBox.width / 2;
                    }
                    else {
                        _this.baseBox.height = _this.baseBox.width * (210 / 320);
                    }
                    CocosNodeHelper.changeText(_this.txtMemo, row.desc);
                    CocosNodeHelper.changeSrc(_this.logo, { url: row.imgUrlList[0], width: _this.logo.width, height: _this.logo.height });
                }
                else {
                    if (_this.FormData && _this.FormData.nullCallback)
                        _this.FormData.nullCallback();
                    moosnow.platform.showBanner(false);
                }
            });
            moosnow.http.getAllConfig(function (res) {
                if (res && res.smallNativeAdClose == 1) {
                    _this.btnTopClose.scale = 0.7;
                }
                if (res && res.zs_native_click_switch == 1) {
                    _this.btnOpen.active = true;
                    _this.btnClose.active = false;
                }
                else {
                    _this.btnOpen.active = false;
                    _this.btnClose.active = true;
                }
            });
        };
        CocosNativeForm.prototype.willHide = function (data) {
            this.remoteListener();
            _super.prototype.willHide.call(this, data);
        };
        CocosNativeForm.prototype.addListener = function () {
            var _this = this;
            this.applyClickAnim(this.logo, function () {
                _this.onOpenAd();
            });
            this.applyClickAnim(this.btnOpen, function () {
                _this.onOpenAd();
            });
            this.applyClickAnim(this.btnTopClose, function () {
                _this.onCloseAd();
            });
            this.applyClickAnim(this.btnClose, function () {
                _this.onCloseAd();
            });
        };
        CocosNativeForm.prototype.remoteListener = function () {
            this.removeClickAnim(this.logo);
            this.removeClickAnim(this.btnOpen);
            this.removeClickAnim(this.btnTopClose);
            this.removeClickAnim(this.btnClose);
        };
        CocosNativeForm.prototype.onCloseAd = function () {
            if (this.FormData && this.FormData.callback)
                this.FormData.callback();
            this.hideForm();
        };
        CocosNativeForm.prototype.onOpenAd = function () {
            var _this = this;
            moosnow.platform.clickNative(function () {
                _this.hideForm();
            });
        };
        return CocosNativeForm;
    }(CocosBaseForm));

    var CocosBaseComponent = /** @class */ (function (_super) {
        __extends(CocosBaseComponent, _super);
        function CocosBaseComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CocosBaseComponent;
    }(CocosBaseForm));

    var CheckboxComponent = /** @class */ (function (_super) {
        __extends(CheckboxComponent, _super);
        /**
         * 变化回调
         * @param isChecked
         * @param callback
         */
        function CheckboxComponent(isChecked, callback, checkedName, uncheckedName) {
            if (isChecked === void 0) { isChecked = true; }
            var _this = _super.call(this) || this;
            _this.checkedName = "checked";
            _this.uncheckedName = "unchecked";
            _this.mCheckedVideo = true;
            _this.mCanNum = 0;
            _this.mCheckBoxMistouch = false;
            _this.mClickNum = 0;
            _this.mCheckBoxVideoNum = 3;
            _this.toggleCallback = callback;
            _this.mCheckedVideo = isChecked;
            if (checkedName)
                _this.checkedName = checkedName;
            if (uncheckedName)
                _this.uncheckedName = uncheckedName;
            _this[_this.checkedName] = null;
            _this[_this.uncheckedName] = null;
            return _this;
            // if (callback)
            //     callback(isChecked)
        }
        CheckboxComponent.prototype.addListener = function () {
            var _this = this;
            if (this[this.uncheckedName])
                this.applyClickAnim(this[this.uncheckedName], function () {
                    _this.checkToggle();
                });
            if (this[this.checkedName])
                this.applyClickAnim(this[this.checkedName], function () {
                    _this.checkToggle();
                });
        };
        CheckboxComponent.prototype.removeListener = function () {
            if (this[this.checkedName])
                this.removeClickAnim(this[this.checkedName]);
            if (this[this.uncheckedName])
                this.removeClickAnim(this[this.uncheckedName]);
        };
        CheckboxComponent.prototype.onReceive = function () {
            var _this = this;
            if (this.mCheckedVideo) {
                moosnow.platform.showVideo(function (res) {
                    if (res == VIDEO_STATUS.END) {
                        if (_this.FormData.videoCallback)
                            _this.FormData.videoCallback();
                    }
                    else if (res == VIDEO_STATUS.ERR) {
                        moosnow.form.showToast(VIDEO_MSG.ERR);
                    }
                    else {
                        moosnow.form.showToast(VIDEO_MSG.NOTEND);
                    }
                });
            }
            else {
                if (this.FormData.callback)
                    this.FormData.callback();
            }
        };
        CheckboxComponent.prototype.checkToggle = function () {
            if (this.mCheckBoxMistouch) {
                this.mClickNum++;
                if (this.mClickNum == this.mCheckBoxVideoNum) {
                    moosnow.platform.showVideo(function () { });
                }
                if (this.mClickNum >= this.mCanNum) {
                    this.mCheckedVideo = !this.mCheckedVideo;
                    this.updateCheckbox();
                }
                this.checkCallback();
                return;
            }
            this.mCheckedVideo = !this.mCheckedVideo;
            this.updateCheckbox();
            this.checkCallback();
        };
        CheckboxComponent.prototype.onShow = function (data) {
            var _this = this;
            _super.prototype.onShow.call(this, data);
            moosnow.http.getAllConfig(function (res) {
                _this.mCanNum = MathUtils.probabilitys(res.checkBoxProbabilitys) + 1;
                _this.mCheckBoxVideoNum = res && !isNaN(res.checkBoxVideoNum) ? res.checkBoxVideoNum : 3;
                _this.mCheckBoxMistouch = res.checkBoxMistouch == 1;
            });
            this.addListener();
            this.updateCheckbox();
            this.checkCallback();
        };
        CheckboxComponent.prototype.updateCheckbox = function () {
            if (this[this.checkedName])
                this[this.checkedName].active = this.mCheckedVideo;
            if (this[this.uncheckedName])
                this[this.uncheckedName].active = !this.mCheckedVideo;
        };
        CheckboxComponent.prototype.checkCallback = function () {
            if (this.toggleCallback)
                this.toggleCallback(this.mCheckedVideo);
        };
        CheckboxComponent.prototype.willHide = function () {
            this.removeListener();
        };
        return CheckboxComponent;
    }(CocosBaseComponent));

    var showFormOptions = /** @class */ (function () {
        function showFormOptions(name, formLogic, formData) {
            this.name = "";
            this.formData = null;
            /**
             * 显示的父节点，默认cc.Canvas.instance.node 或 Laya.stage
             */
            this.parent = null;
            this.remoteLayout = true;
            this.layoutOptions = null;
            /**
             * 仅显示一个Form，如果调用多次showForm ,将无效果
             */
            this.showOnce = true;
            this.name = name;
            this.formLogic = formLogic;
            this.formData = formData;
        }
        return showFormOptions;
    }());

    /**
     * 广告结果
     */
    var FormUtil = /** @class */ (function () {
        function FormUtil() {
            this.mBaseForm = new CocosBaseForm();
            this.formFactory = new CocosFormFactory();
        }
        /**
         * 初始化多选框状态
         * @param defaultChecked 默认选择状态
         * @param callback checkboxToggle 触发的回调 isChecked 表示选择状态
         */
        FormUtil.prototype.initCheckboxState = function (defaultChecked, callback) {
            if (defaultChecked === void 0) { defaultChecked = true; }
            this.mCheckbox = new CheckboxComponent(defaultChecked, callback);
            this.mCheckbox.onShow(null);
        };
        /**
         * 执行点击
         */
        FormUtil.prototype.checkboxToggle = function () {
            this.mCheckbox.checkToggle();
        };
        /**
         * 增加点击效果和事件回调
         * @param node
         * @param callback
         * @param stopPropagation
         * @param once
         */
        FormUtil.prototype.applyClickAnim = function (node, callback, stopPropagation, once) {
            if (stopPropagation === void 0) { stopPropagation = false; }
            if (once === void 0) { once = true; }
            this.mBaseForm.applyClickAnim(node, callback, stopPropagation, once);
        };
        /**
         * 删除点击效果和事件回调
         * @param node
         */
        FormUtil.prototype.removeClickAnim = function (node) {
            this.mBaseForm.removeClickAnim(node);
        };
        /**
         * Toast消息
         * @param msg  消息内容
         */
        FormUtil.prototype.showToast = function (msg) {
            this.formFactory.showForm(new showFormOptions(FormLayout.ToastForm, CocosToastForm, msg));
        };
        FormUtil.prototype.showNativeAd = function (options) {
            this.formFactory.showForm(new showFormOptions(FormLayout.NativeForm, CocosNativeForm, options));
        };
        /**
         * 显示广告
         * @param adType 广告类型
         * @param callback  有返回按钮时的回调
         * @param points  层级
         * @param templetes  层级
         * @param zIndex  层级
         */
        FormUtil.prototype.showAd = function (adType, callback, points, templetes, zIndex, pointName, formName) {
            if (adType === void 0) { adType = 0; }
            if (zIndex === void 0) { zIndex = cc.macro.MAX_ZINDEX; }
            if (pointName === void 0) { pointName = ""; }
            if (formName === void 0) { formName = "" || "loadingForm" || "homeForm" || "gameForm" || "endForm" || "respawnForm"; }
            var options = new showAdOptions();
            options.adType = adType;
            options.zIndex = zIndex;
            options.floatPositon = points;
            options.floatTempletes = templetes;
            options.pointName = pointName;
            options.formName = formName;
            options.callback = callback;
            this.showAd2(options);
        };
        /**
         * 显示广告
         * @param options
         */
        FormUtil.prototype.showAd2 = function (options) {
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.AD_VIEW_CHANGE, {
                showAd: options.adType,
                zIndex: options.zIndex,
                points: options.floatPositon,
                templetes: options.floatTempletes,
                pointName: options.pointName,
                formName: options.formName,
                callback: options.callback,
            });
        };
        FormUtil.prototype.hideAd = function (callback) {
            moosnow.event.sendEventImmediately(PLATFORM_EVENT.AD_VIEW_CHANGE, { showAd: 0, callback: callback });
        };
        return FormUtil;
    }());

    var HWModule = /** @class */ (function (_super) {
        __extends(HWModule, _super);
        function HWModule() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.platformName = "hbs";
            _this.mIsClickedNative = false;
            return _this;
        }
        HWModule.prototype.showBanner = function (remoteOn, callback, horizontal, vertical, idIndex, style) {
            if (remoteOn === void 0) { remoteOn = true; }
            if (horizontal === void 0) { horizontal = BANNER_HORIZONTAL.CENTER; }
            if (vertical === void 0) { vertical = BANNER_VERTICAL.BOTTOM; }
            if (idIndex === void 0) { idIndex = -1; }
        };
        HWModule.prototype.createRewardAD = function (show, idIndex) {
            var _this = this;
            if (idIndex === void 0) { idIndex = 0; }
            if (this.videoLoading) {
                return;
            }
            if (!window[this.platformName]) {
                if (moosnow.platform.videoCb)
                    moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!window[this.platformName].createRewardedVideoAd) {
                if (moosnow.platform.videoCb)
                    moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            var videoId = this.getVideoId(idIndex);
            if (Common.isEmpty(videoId)) {
                console.warn(MSG.VIDEO_KEY_IS_NULL);
                if (moosnow.platform.videoCb)
                    moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (!this.video[videoId]) {
                console.log(" HWModule ~ createRewardAD ~ videoId", videoId);
                this.video[videoId] = window[this.platformName].createRewardedVideoAd({
                    adUnitId: videoId
                });
                if (!this.video[videoId]) {
                    console.warn('创建视频广告失败');
                    return;
                }
                this.video[videoId].onError(this._onVideoError);
                this.video[videoId].onClose(this._onVideoClose);
                this.video[videoId].onLoad(function () {
                    moosnow.platform.videoLoading = false;
                    if (_this.video[videoId]) {
                        _this.video[videoId].show();
                    }
                });
            }
            moosnow.platform.videoLoading = true;
            moosnow.platform.videoPlaying = false;
            this.video[videoId].load();
        };
        HWModule.prototype._onVideoError = function (e) {
            console.warn(MSG.VIDEO_ERROR_COMPLETED, JSON.stringify(e));
        };
        HWModule.prototype.showNativeAd = function (callback) {
            var _this = this;
            if (!this.native)
                this._prepareNative(true);
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
                            _this.nativeCb(null);
                            _this.showInter();
                        }
                        else {
                            _this.nativeCb(null);
                        }
                    });
                });
            }
        };
        HWModule.prototype._prepareNative = function (isLoad) {
            var _this = this;
            if (isLoad === void 0) { isLoad = false; }
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].createNativeAd)
                return;
            if (this.native)
                return;
            var adUnitId = this.nativeId;
            console.log(" HWModule ~ _prepareNative ~ adUnitId", adUnitId);
            this.native = window[this.platformName].createNativeAd({
                adUnitId: adUnitId,
                success: function (code) {
                    console.log("_prepareNative loadNativeAd : success", code);
                },
                fail: function (data, code) {
                    if (_this.nativeCb)
                        _this.nativeCb(null);
                    console.log("_prepareNative loadNativeAd fail: " + data + "," + code);
                }
            });
            this.native.onLoad(this._onNativeLoad.bind(this));
            this.native.onError(this._onNativeError.bind(this));
        };
        HWModule.prototype._onNativeLoad = function (res) {
            var _this = this;
            console.log(" HWModule ~ _onNativeLoad ~ res", JSON.stringify(res));
            this.nativeLoading = false;
            console.log(MSG.NATIVE_LOAD_COMPLETED, res);
            if (res && res.adList && res.adList.length > 0) {
                this.nativeAdResult = res.adList[res.adList.length - 1];
                if (!Common.isEmpty(this.nativeAdResult.adId)) {
                    console.log(MSG.NATIVE_REPORT);
                    console.log("HWModule ~ _onNativeLoad ~ reportAdShow ", this.nativeAdResult.adId);
                    this.native.reportAdShow({
                        adId: this.nativeAdResult.adId
                    });
                }
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(__assign(__assign({}, Common.deepCopy(this.nativeAdResult)), { desc: this.nativeAdResult && this.nativeAdResult.desc ? this.nativeAdResult.desc : "", title: this.nativeAdResult && this.nativeAdResult.title ? this.nativeAdResult.title : "" }));
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
        HWModule.prototype._onNativeError = function (err) {
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
                if (this.nativeCb)
                    this.nativeCb(null);
                console.log(MSG.NATIVE_ERROR2, err);
            }
            moosnow.http.getAllConfig(function (res) {
                if (res.nativeErrorShowInter == 1) {
                    console.log('原生加载出错，用插屏代替');
                    _this.showInter();
                }
                else {
                    if (_this.nativeCb)
                        _this.nativeCb(null);
                }
            });
        };
        HWModule.prototype.clickNative = function (callback) {
            if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
                this.mClickedNativeCallback = callback;
                this.mIsClickedNative = true;
                console.log(MSG.NATIVE_CLICK, this.nativeAdResult.adId);
                this.native.reportAdClick({
                    adId: this.nativeAdResult.adId
                });
            }
        };
        return HWModule;
    }(PlatformModule));

    var moosnow$1 = /** @class */ (function () {
        function moosnow() {
        }
        /**
        * 获取当前的游戏平台
        */
        moosnow.getAppPlatform = function () {
            return Common.platform;
        };
        moosnow.appConfig = function () {
            return Common.config;
        };
        Object.defineProperty(moosnow, "platform", {
            get: function () {
                if (!this.mPlatform) {
                    if (Common.platform == APP_PLATFORM.WX)
                        this.mPlatform = new WXModule();
                    else if (Common.platform == APP_PLATFORM.OPPO)
                        this.mPlatform = new OPPOModule();
                    else if (Common.platform == APP_PLATFORM.VIVO)
                        this.mPlatform = new VIVOModule();
                    else if (Common.platform == APP_PLATFORM.OPPO_ZS) {
                        this.mPlatform = new ZSOPPOModule();
                    }
                    else if (Common.platform == APP_PLATFORM.BYTEDANCE)
                        this.mPlatform = new TTModule();
                    else if (Common.platform == APP_PLATFORM.QQ)
                        this.mPlatform = new QQModule();
                    else if (Common.platform == APP_PLATFORM.BAIDU)
                        this.mPlatform = new BDModule();
                    else if (Common.platform == APP_PLATFORM.UC)
                        this.mPlatform = new UCModule();
                    else if (Common.platform == APP_PLATFORM.HW)
                        this.mPlatform = new HWModule();
                    else {
                        this.mPlatform = new PlatformModule();
                    }
                }
                return this.mPlatform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnow, "ad", {
            get: function () {
                if (!moosnow.mAd) {
                    if (Common.platform == APP_PLATFORM.WX || Common.platform == APP_PLATFORM.PC || Common.platform == APP_PLATFORM.BYTEDANCE)
                        moosnow.mAd = new WXAdModule();
                    else if (Common.platform == APP_PLATFORM.OPPO) {
                        moosnow.mAd = new OPPOAdModule();
                    }
                    else if (Common.platform == APP_PLATFORM.OPPO_ZS) {
                        moosnow.mAd = new ZSOPPOAdModule();
                    }
                    else
                        moosnow.mAd = new AdModule();
                }
                return moosnow.mAd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnow, "http", {
            get: function () {
                if (!this.mHttp) {
                    if (Common.platform == APP_PLATFORM.WX)
                        this.mHttp = new HttpModule();
                    else if (Common.platform == APP_PLATFORM.OPPO_ZS) {
                        this.mHttp = new ZSHttpModule();
                    }
                    else
                        this.mHttp = new HttpModule();
                }
                return this.mHttp;
            },
            enumerable: true,
            configurable: true
        });
        moosnow.VIDEO_STATUS = VIDEO_STATUS;
        moosnow.VIDEO_MSG = VIDEO_MSG;
        moosnow.SHARE_MSG = SHARE_MSG;
        moosnow.BANNER_HORIZONTAL = BANNER_HORIZONTAL;
        moosnow.BANNER_VERTICAL = BANNER_VERTICAL;
        moosnow.BLOCK_HORIZONTAL = BLOCK_HORIZONTAL;
        moosnow.BLOCK_VERTICAL = BLOCK_VERTICAL;
        moosnow.SHARE_CHANNEL = SHARE_CHANNEL;
        moosnow.APP_PLATFORM = APP_PLATFORM;
        moosnow.PLATFORM_EVENT = PLATFORM_EVENT;
        moosnow.Common = Common;
        moosnow.AD_POSITION = AD_POSITION;
        /**
         * 本地内存
         */
        moosnow.data = new GameDataCenter();
        moosnow.resource = new ResourceModule();
        /**
         * 本地持久化缓存
         */
        moosnow.setting = new SettingModule();
        /**
         * 事件消息
         */
        moosnow.event = new EventModule();
        moosnow.audio = new AudioModule();
        moosnow.form = new FormUtil();
        moosnow.nodeHelper = CocosNodeHelper;
        return moosnow;
    }());
    window["moosnow"] = moosnow$1;

    return moosnow$1;

}());
