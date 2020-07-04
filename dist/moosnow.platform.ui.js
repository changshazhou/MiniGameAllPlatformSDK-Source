(function () {
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
            var self = this;
            var id = setInterval(function () {
                if (callback)
                    callback.apply(self);
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
        return BaseModule;
    }());

    var BaseEntityModule = /** @class */ (function (_super) {
        __extends(BaseEntityModule, _super);
        function BaseEntityModule() {
            var _this = _super.call(this) || this;
            _this.entityLogics = [];
            _this._serializeId = 0;
            _this.paused = true;
            _this.prefabPath = "prefab/entity/";
            _this.mEntity3DPools = [];
            _this.mEntity3DLogics = [];
            _this.entityPools = [];
            _this.mIsSlow = true;
            _this.entityLogics = [];
            _this.mEntity3DPools = [];
            _this.mEntity3DLogics = [];
            _this._serializeId = 0;
            return _this;
            // this.resume();
            // window["moosnow"].entity = this;
        }
        BaseEntityModule.prototype.update = function (dt) {
            if (this.paused)
                return;
            for (var i = 0; i < this.entityLogics.length; i++) {
                var element = this.entityLogics[i];
                element.onFwUpdate(dt);
            }
        };
        BaseEntityModule.prototype.pause = function () {
            this.paused = true;
        };
        BaseEntityModule.prototype.resume = function () {
            this.paused = false;
        };
        BaseEntityModule.prototype.getAllEntity = function (name) {
            return this.entityLogics.filter(function (item) { return item.poolName == name; });
        };
        /**
         *
         * @param name 名称
         * @param parentNode  父节点
         * @param data 传输的数据
         * @param uiRoot 基础的路径
         */
        BaseEntityModule.prototype.showEntity = function (name, parentNode, data, uiRoot) {
        };
        BaseEntityModule.prototype.hideEntity = function (logic, data, isDestory) {
            if (isDestory === void 0) { isDestory = false; }
        };
        BaseEntityModule.prototype.hideAllEntity = function (name, isDestory) {
            if (isDestory === void 0) { isDestory = false; }
        };
        return BaseEntityModule;
    }(BaseModule));

    var CocosEntityModule = /** @class */ (function (_super) {
        __extends(CocosEntityModule, _super);
        function CocosEntityModule() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.prefabPath = "moosnow/prefab/entity/";
            return _this;
        }
        CocosEntityModule.prototype.preload = function (name, callback) {
            cc.loader.loadRes(this.prefabPath + '' + name, cc.Prefab, function (error, resource) {
                if (callback)
                    callback(error, resource);
            });
        };
        CocosEntityModule.prototype.showEntity = function (name, parentNode, data, uiRoot) {
            var logic = this._showEntity(name, uiRoot);
            logic.id = this._serializeId--;
            logic.node.parent = parentNode;
            logic.willShow(data);
            logic.node.active = true;
            logic.node.zIndex = logic.id;
            logic.onShow(data);
            this.entityLogics.push(logic);
            return logic;
        };
        CocosEntityModule.prototype._createEntity = function (name, uiRoot) {
            var prefab;
            if (Common.isString(name))
                prefab = this._getPrefabByName(name, uiRoot);
            else
                prefab = name;
            return cc.instantiate(prefab);
        };
        CocosEntityModule.prototype._showEntity = function (name, uiRoot) {
            var pool = this._getOrNewEntityPool(name);
            var entity = pool.get();
            if (entity == null) {
                entity = this._createEntity(name, uiRoot);
            }
            var logic = this._findComponent(entity, "EntityLogic");
            logic.poolName = pool.name;
            return logic;
        };
        CocosEntityModule.prototype._getPrefabByName = function (name, uiRoot) {
            var rootPath = this.prefabPath || uiRoot;
            var profab = cc.loader.getRes(rootPath + '' + name, cc.Prefab);
            return profab;
        };
        CocosEntityModule.prototype._getOrNewEntityPool = function (name) {
            var poolName = this._getPoolName(name);
            var pool = this._getEntityPool(poolName);
            if (pool == null) {
                pool = this._newEntityPool(poolName);
            }
            return pool;
        };
        CocosEntityModule.prototype._getPoolName = function (name) {
            var poolName = "";
            var engine = Common.getEngine();
            if (engine == ENGINE_TYPE.COCOS && Common.isObject(name)) {
                poolName = name.name;
            }
            else if (engine == ENGINE_TYPE.LAYA && Common.isObject(name)) {
                poolName = name.json.name;
            }
            else
                poolName = "" + name;
            return poolName;
        };
        CocosEntityModule.prototype._getEntityPool = function (name) {
            for (var i = 0; i < this.entityPools.length; i++) {
                var pool = this.entityPools[i];
                if (pool.name === name) {
                    return pool;
                }
            }
            return null;
        };
        CocosEntityModule.prototype._newEntityPool = function (name) {
            var pool = new cc.NodePool(name);
            pool.name = name;
            this.entityPools.push(pool);
            return pool;
        };
        CocosEntityModule.prototype.hideEntity = function (logic, data, isDestory) {
            if (isDestory === void 0) { isDestory = false; }
            this._hideEntity(logic, data, isDestory);
        };
        CocosEntityModule.prototype.hideAllEntity = function (name, isDestory) {
            if (isDestory === void 0) { isDestory = false; }
            for (var i = 0; i < this.entityLogics.length; i++) {
                var item = this.entityLogics[i];
                if (item.poolName == name) {
                    this.hideEntity(item, null, isDestory);
                    i--;
                }
            }
        };
        CocosEntityModule.prototype._hideEntity = function (logic, data, isDestory) {
            if (isDestory === void 0) { isDestory = false; }
            if (isDestory) {
                logic.willHide(data);
                logic.node.active = false;
                logic.onHide(data);
                logic.destroy();
            }
            else {
                var pool = this._getOrNewEntityPool(logic.poolName);
                logic.willHide(data);
                pool.put(logic.node);
                logic.node.active = false;
                logic.onHide(data);
            }
            cc.js.array.remove(this.entityLogics, logic);
        };
        return CocosEntityModule;
    }(BaseEntityModule));

    var FormModel = /** @class */ (function () {
        function FormModel() {
            this.name = "";
            this.node = null;
            this.UIForm = null;
            this.zIndex = 0;
            this.name = "";
            this.node = null;
            this.UIForm = null;
            this.zIndex = 0;
        }
        return FormModel;
    }());
    /**
      * HASDO:
      * 1栈方式管理UI，
      * 2缓存UI
      * 3入栈（显示UI）
      * 4出栈（关闭UI）
      * 5关闭指定UI
      *
      * TODO:
      * 1上层UI遮盖下层UI逻辑回调
      * 2设置label默认字体
      * 3按需清理缓存
      *
      * ISSUE
      * 1由于UI是异步加载，导致UI栈顺序会错乱 (fixed)
      * 2连续push相同UI（待测试）
      */
    var BaseUIModule = /** @class */ (function (_super) {
        __extends(BaseUIModule, _super);
        function BaseUIModule() {
            var _this = _super.call(this) || this;
            _this.rootCanvas = null;
            _this.layerIndex = 0;
            _this.UIRoot = "";
            _this.UIFormStack = [];
            _this.cachedUIForms = [];
            _this.toastForm = null;
            _this.layerIndex = 0;
            _this.UIRoot = 'prefab/ui/'; //定义resources目录下存放UI预设的目录
            _this.UIFormStack = [];
            _this.cachedUIForms = [];
            _this.toastForm = null;
            return _this;
        }
        BaseUIModule.prototype.showToast = function (msg) {
            var _this = this;
            var self = this;
            if (self.toastForm == null) {
                this._createUINode('toastForm', 1000, function (node, index) {
                    cc.Canvas.instance.node.addChild(node);
                    self.toastForm = _this._findComponent(node, "toastForm");
                    node.zIndex = index;
                    self.toastForm.show(msg);
                });
            }
            else {
                self.toastForm.show(msg);
            }
        };
        /**
         * 显示一个ui
         * @param {string} name  prefab/ui/目录下的预设名字
         * @param {Object} data 携带的自定义数据
         * @param {Function} callback ui显示后回调:(formModel,data:Object)
         * @param {string} uiRoot 指定根目录
         */
        BaseUIModule.prototype.pushUIForm = function (name, data, callback, uiRoot) {
            var self = this;
            var cachedFormModel = this._getUINodeFromCacheByName(name);
            if (cachedFormModel == null) {
                this._createUIFormModel(name, function (formModel) {
                    self._showUIForm(formModel, data);
                    if (callback) {
                        callback(formModel, data);
                    }
                }, uiRoot);
            }
            else {
                //缓存取出
                cachedFormModel.zIndex = this.layerIndex++;
                this.UIFormStack.push(cachedFormModel);
                this._showUIForm(cachedFormModel, data);
                if (callback) {
                    callback(cachedFormModel, data);
                }
            }
        };
        /**
         * 从栈顶隐藏一个UI
         * @param {bool} destroy 是否销毁
         */
        BaseUIModule.prototype.pop = function (destroy, cb) {
            if (destroy === void 0) { destroy = false; }
            if (this.UIFormStack.length == 0)
                return;
            var formModel = this.UIFormStack.pop();
            if (destroy) {
                this._destroyUIForm(formModel, null);
            }
            else {
                this._hideUIForm(formModel, null, cb);
            }
        };
        /**
        * 获取一个UIForm
        * @param {string} name
        */
        BaseUIModule.prototype.getUIFrom = function (name) {
            for (var i = 0; i < this.UIFormStack.length; i++) {
                var formModel = this.UIFormStack[i];
                if (formModel.name == name) {
                    return formModel.UIForm;
                }
            }
        };
        /**
         * 隐藏某个UI
         * @param {string} name 预设名
         * @param {any} data 携带的自定义数据
         */
        BaseUIModule.prototype.hideUIForm = function (name, data, cb) {
            if (typeof name == "string") {
                for (var i = 0; i < this.UIFormStack.length; i++) {
                    var formModel = this.UIFormStack[i];
                    if (formModel.name == name) {
                        this._hideUIForm(formModel, data, cb);
                    }
                }
            }
            else {
                for (var i = 0; i < this.UIFormStack.length; i++) {
                    var formModel = this.UIFormStack[i];
                    if (formModel == name) {
                        this._hideUIForm(formModel, data, cb);
                    }
                }
            }
        };
        BaseUIModule.prototype.hideAllUIForm = function () {
            for (var i = this.UIFormStack.length - 1; i >= 0; i--) {
                var formModel = this.UIFormStack[i];
                this._hideUIForm(formModel, null);
            }
        };
        BaseUIModule.prototype.destroyUIForm = function (name, data) {
            for (var i = 0; i < this.UIFormStack.length; i++) {
                var formModel = this.UIFormStack[i];
                if (formModel.name == name) {
                    this._destroyUIForm(formModel, data);
                }
            }
        };
        BaseUIModule.prototype._formatUIFormName = function (name) {
            return name.replace(/\//g, "_");
        };
        /**
         * 实例化resource下ui目录的prefab
         * @param {Int} formId 层级
         * @param {string} name resources下的路径
         * @param {Function} callback 参数 node
         */
        BaseUIModule.prototype._createUINode = function (name, formId, callback, uiRoot) {
            var path = this.UIRoot + name;
            if (uiRoot)
                path = uiRoot + name;
            cc.loader.loadRes(path, cc.Prefab, function (err, prefab) {
                if (err)
                    console.warn("\u9884\u5236\u4F53\u4E0D\u5B58\u5728\uFF1A" + name + " path : " + path);
                var formNode = cc.instantiate(prefab);
                if (callback)
                    callback(formNode, formId);
            });
        };
        /**
         * 创建一个formModel
         * @param {string} name
         * @param {Function} callback (node, index)
         */
        BaseUIModule.prototype._createUIFormModel = function (name, callback, uiRoot) {
            var _this = this;
            //防止异步加载UI层级错乱方案
            //1异步加载预设前初始化一个model,记录将要加载的预设名以及zindex
            //2异步时传入该zindex，在加载完成时回调返回该zindex
            //3循环匹配UIStack，判断取出zindex和name相等的model，赋值UIForm和node
            var self = this;
            var formModel = new FormModel();
            formModel.name = name;
            var formId = this.layerIndex++;
            formModel.zIndex = formId;
            this.UIFormStack.push(formModel);
            this._createUINode(name, formId, function (node, index) {
                for (var i = 0; i < self.UIFormStack.length; i++) {
                    var tempFormModel = self.UIFormStack[i];
                    if (tempFormModel.zIndex == index && tempFormModel.name == node.name) {
                        if (node == null) {
                            _this._removeStack(i);
                            return;
                        }
                        else {
                            var form = _this._findComponent(node, "UIForm");
                            form.formName = name;
                            tempFormModel.UIForm = form;
                            tempFormModel.node = node;
                            if (callback) {
                                callback(formModel);
                            }
                            return;
                        }
                    }
                }
            }, uiRoot);
        };
        BaseUIModule.prototype._getUINodeFromCacheByName = function (name) {
            for (var i = 0; i < this.cachedUIForms.length; i++) {
                var element = this.cachedUIForms[i];
                if (element.node != null && element.name == name) {
                    this.cachedUIForms.splice(i, 1);
                    return element;
                }
            }
            return null;
        };
        BaseUIModule.prototype._showUIForm = function (formModel, data) {
            cc.Canvas.instance.node.addChild(formModel.node);
            formModel.UIForm.willShow(data);
            formModel.node.active = true;
            if (data && !isNaN(data.zIndex))
                formModel.node.zIndex = data.zIndex;
            else
                formModel.node.zIndex = formModel.zIndex;
            formModel.UIForm.onShow(data);
            if (formModel.UIForm.isPopEffect) {
                var owner = formModel.node;
                Common.popOpenAnim(owner);
            }
        };
        BaseUIModule.prototype._hideUIForm = function (formModel, data, cb) {
            formModel.UIForm.willHide(data);
            formModel.UIForm.onHide(data);
            this._removeStack(formModel);
            this.cachedUIForms.push(formModel);
            if (formModel.UIForm.isPopEffect) {
                var owner = formModel.node;
                Common.popCloseAnim(owner, function () {
                    formModel.node.active = false;
                    formModel.node.removeFromParent(false);
                    // formModel.node.removeSelf();
                    if (cb)
                        cb();
                });
            }
            else {
                formModel.UIForm.hideAnim(function () {
                    formModel.node.active = false;
                    formModel.node.removeFromParent(false);
                    // formModel.node.removeSelf();
                    if (cb)
                        cb();
                });
            }
        };
        BaseUIModule.prototype._destroyUIForm = function (formModel, data) {
            formModel.UIForm.willHide(data);
            formModel.node.removeFromParent();
            formModel.UIForm.onHide(data);
            formModel.node.active = false;
            this._removeStack(formModel);
            formModel.node.destroy();
        };
        BaseUIModule.prototype._removeStack = function (removeItem) {
            var _this = this;
            if (isNaN(removeItem)) {
                this.UIFormStack.forEach(function (item, idx) {
                    if (item == removeItem) {
                        _this.UIFormStack.splice(idx, 1);
                    }
                });
            }
            else
                this.UIFormStack.splice(removeItem, 1);
        };
        return BaseUIModule;
    }(BaseModule));

    /**
      * HASDO:
      * 1栈方式管理UI，
      * 2缓存UI
      * 3入栈（显示UI）
      * 4出栈（关闭UI）
      * 5关闭指定UI
      *
      * TODO:
      * 1上层UI遮盖下层UI逻辑回调
      * 2设置label默认字体
      * 3按需清理缓存
      *
      * ISSUE
      * 1由于UI是异步加载，导致UI栈顺序会错乱 (fixed)
      * 2连续push相同UI（待测试）
      */
    var CocosUIModule = /** @class */ (function (_super) {
        __extends(CocosUIModule, _super);
        function CocosUIModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CocosUIModule;
    }(BaseUIModule));

    var EventType = /** @class */ (function () {
        function EventType() {
        }
        EventType.VIBRATESWITCH_CHANGED = "VIBRATESWITCH_CHANGED";
        EventType.SOUNDSWITCH_CHANGED = "SOUNDSWITCH_CHANGED";
        EventType.MUSICSWITCH_CHANGED = "MUSICSWITCH_CHANGED";
        EventType.ON_PLATFORM_SHOW = "ON_PLATFORM_SHOW";
        EventType.ON_PLATFORM_HIDE = "ON_PLATFORM_HIDE";
        EventType.ON_BANNER_HIDE = "ON_BANNER_HIDE";
        EventType.ON_AD_SHOW = "ON_AD_SHOW";
        EventType.AD_VIEW_CHANGE = "AD_VIEW_CHANGE";
        EventType.AD_VIEW_REFRESH = "AD_VIEW_REFRESH";
        EventType.COIN_CHANGED = "COIN_CHANGED";
        return EventType;
    }());

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
        * 扩展1
        */
        EXTEND1: 1024,
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

    var BaseForm = /** @class */ (function (_super) {
        __extends(BaseForm, _super);
        function BaseForm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
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
         * @param logic
         */
        BaseForm.prototype.initForm = function (logic) {
            this.initProperty(logic);
        };
        BaseForm.prototype.willShow = function (data) {
            this.mFormData = data;
        };
        BaseForm.prototype.onShow = function (data) {
        };
        BaseForm.prototype.willHide = function (data) {
        };
        BaseForm.prototype.onHide = function (data) {
        };
        return BaseForm;
    }(BaseModule));

    var ROOT_CONFIG = {
        UI_ROOT: "moosnow/prefab/ui/",
        ENTITY_ROOT: "moosnow/prefab/entity/"
    };

    var AdForm = /** @class */ (function (_super) {
        __extends(AdForm, _super);
        function AdForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pauseContainer = null;
            _this.pauseView = null;
            _this.pauseLayout = null;
            _this.centerContainer = null;
            _this.centerView = null;
            _this.centerLayout = null;
            _this.exportContainer = null;
            _this.exportView = null;
            _this.exportLayout = null;
            _this.exportClose = null;
            _this.exportMask = null;
            _this.exportCloseTxt = null;
            _this.floatContainer = null;
            _this.floatFull = null;
            _this.bannerContainer = null;
            _this.bannerView = null;
            _this.bannerLayout = null;
            _this.endContainer = null;
            _this.endView = null;
            _this.endLayout = null;
            _this.failContainer = null;
            _this.failView = null;
            _this.failLayout = null;
            _this.gameOverContainer = null;
            _this.gameOverView = null;
            _this.gameOverLayout = null;
            _this.respawnContainer = null;
            _this.respawnScrollView = null;
            _this.respawnLayout = null;
            _this.playerDiedContainer = null;
            _this.playerDiedScrollView = null;
            _this.playerDiedLayout = null;
            _this.leftContainer = null;
            _this.leftView = null;
            _this.leftLayout = null;
            _this.rightView = null;
            _this.rightLayout = null;
            _this.sideContainer = null;
            _this.sideView = null;
            _this.sideLayout = null;
            _this.btnSideShow = null;
            _this.btnSideHide = null;
            _this.extend1Container = null;
            _this.extend1View = null;
            _this.extend1Layout = null;
            _this.extend2Container = null;
            _this.extend2View = null;
            _this.extend2Layout = null;
            _this.extend3Container = null;
            _this.extend3View = null;
            _this.extend3Layout = null;
            _this.extend4Container = null;
            _this.extend4View = null;
            _this.extend4Layout = null;
            _this.topContainer = null;
            _this.topView = null;
            _this.topLayout = null;
            _this.mAdItemList = [];
            _this.mScrollVec = [];
            _this.mChangeLen = 0;
            _this.mIndex = 999;
            _this.mShowAd = moosnow.AD_POSITION.NONE;
            _this.mPrevShowAd = moosnow.AD_POSITION.NONE;
            _this.mEndLogic = [];
            _this.mFloatIndex = 0;
            _this.mFloatRefresh = 3;
            _this.mFloatCache = {};
            _this.mSecond = 3;
            return _this;
        }
        AdForm.prototype.setPosition = function (source, position, callback, refresh) {
            if (position === void 0) { position = ""; }
            if (refresh === void 0) { refresh = false; }
            var retValue = Common.deepCopy(source);
            retValue.forEach(function (item) {
                item.position = position;
                item.onCancel = callback;
                item.refresh = refresh;
            });
            return retValue;
        };
        AdForm.prototype.loadAd = function (entityName, callback) {
            var _this = this;
            moosnow.entity.preload(entityName, function () {
                moosnow.ad.getAd(function (res) {
                    _this.mAdData = res;
                    if (res.indexLeft.length == 0)
                        return;
                    if (callback)
                        callback(res);
                });
            });
        };
        /**
         * 绑定导出数据
         * @param container 列表容器节点，显示/隐藏  的核心节点
         * @param scrollView
         * @param layout cc.Layout
         * @param position 位置信息，将提交到统计后台用于分析
         * @param entityName  需要绑定的预制体
         * @param callback  跳转取消时的回调函数
         */
        AdForm.prototype.initView = function (container, scrollView, layout, position, entityName, callback) {
            var _this = this;
            if (!entityName) {
                console.warn('entityName is null 无法初始化 ');
                return;
            }
            this.loadAd(entityName, function (res) {
                var source = _this.setPosition(res.indexLeft, position, callback);
                source.forEach(function (item, idx) {
                    var adItemCtl = moosnow.entity.showEntity(entityName, layout.node, item);
                    _this.mAdItemList.push(adItemCtl);
                });
                _this.pushScroll(scrollView, layout);
            });
        };
        AdForm.prototype.pushScroll = function (scrollView, layout) {
        };
        AdForm.prototype.addEvent = function () {
            moosnow.event.addListener(EventType.AD_VIEW_CHANGE, this, this.onAdChange);
        };
        AdForm.prototype.removeEvent = function () {
            moosnow.event.removeListener(EventType.AD_VIEW_CHANGE, this);
        };
        AdForm.prototype.onAdChange = function (data) {
            this.mChangeLen++;
            if (this.mChangeLen > 1 && data.showAd != AD_POSITION.RECOVER) {
                this.mPrevShowAd = this.mShowAd;
                this.mPrevBackCall = this.mBackCall;
            }
            if (data.showAd == AD_POSITION.RECOVER) {
                data.showAd = this.mPrevShowAd;
                data.callback = this.mPrevBackCall;
            }
            this.displayChange(data.showAd, data.callback);
            this.onAfterShow(this.mIndex);
        };
        /**
         *
         * @param zindex
         */
        AdForm.prototype.onAfterShow = function (zindex) {
        };
        /**
          *
          * @param data
          */
        AdForm.prototype.willShow = function (data) {
            _super.prototype.willShow.call(this, data);
            this.mAdItemList = [];
            this.mScrollVec = [];
            this.addEvent();
            if (data)
                this.displayChange(data.showAd, data.callback);
            else
                this.displayChange(AD_POSITION.NONE, null);
        };
        AdForm.prototype.displayChange = function (data, callback) {
            if (callback === void 0) { callback = null; }
            var curApp = moosnow.getAppPlatform();
            if (moosnow.APP_PLATFORM.WX == curApp
                || curApp == moosnow.APP_PLATFORM.OPPO
                || curApp == moosnow.APP_PLATFORM.BYTEDANCE) {
                this.mShowAd = data;
                this.displayAd(true);
                this.mBackCall = callback;
            }
            else {
                this.onBack();
            }
        };
        AdForm.prototype.onBack = function () {
            if (this.mBackCall) {
                this.mBackCall();
            }
        };
        AdForm.prototype.sideOut = function () {
        };
        AdForm.prototype.sideIn = function () {
        };
        /**
         * 绑定广告数据-固定显示6个导出
         * @param container 列表容器节点，显示/隐藏  的核心节点
         * @param layout cc.Layout
         * @param position 位置信息，将提交到统计后台用于分析
         * @param entityName 需要绑定的预制体
         * @param callback 跳转取消时的回调函数
         */
        AdForm.prototype.initFiexdView = function (container, layout, position, entityName, callback) {
            var _this = this;
            this.loadAd(entityName, function (res) {
                if (_this.mEndLogic) {
                    for (var i = 0; i < _this.mEndLogic.length; i++) {
                        moosnow.entity.hideEntity(_this.mEndLogic[i], {});
                    }
                    _this.mEndLogic = [];
                }
                var banner = _this.setPosition(res.indexLeft, position, callback, true);
                var endAd = [];
                var showIds = [];
                for (var i = 0; i < 6; i++) {
                    var item = banner.length > i ? banner[i] : banner[0];
                    showIds.push({
                        appid: item.appid,
                        position: item.position,
                        index: i
                    });
                    endAd.push(item);
                }
                endAd.forEach(function (item) {
                    var adRow = __assign(__assign({}, item), { showIds: showIds, source: banner });
                    var logic = moosnow.entity.showEntity(entityName, layout, adRow);
                    _this.mEndLogic.push(logic);
                    return false;
                });
            });
        };
        AdForm.prototype.willHide = function () {
            this.removeEvent();
            this.mAdItemList.forEach(function (item) {
                moosnow.entity.hideEntity(item, null);
            });
            this.mAdItemList = [];
            this.mScrollVec = [];
        };
        /**
         *
         * @param parentNode 父节点
         * @param prefabs 匹配的预制体
         * @param points 需要显示的坐标点
         * @param entityName  需要绑定的预制体
         * @param callback  跳转取消时的回调函数
         */
        AdForm.prototype.initFloatAd = function (parentNode, prefabs, points, position, callback) {
            var _this = this;
            cc.loader.loadResDir(moosnow.entity.prefabPath, cc.Prefab, function () {
                moosnow.ad.getAd(function (res) {
                    _this.mAdData = res;
                    if (res.indexLeft.length == 0)
                        return;
                    var source = _this.setPosition(res.indexLeft, position, callback, true);
                    var showIds = [];
                    prefabs.forEach(function (prefabName, idx) {
                        var showIndex = idx;
                        if (showIndex > source.length - 1)
                            showIndex = 0;
                        var adRow = source[showIndex];
                        showIds.push({
                            appid: adRow.appid,
                            position: adRow.position,
                            index: idx
                        });
                        var point = points[idx];
                        adRow.x = point.x;
                        adRow.y = point.y;
                        adRow.source = source;
                        adRow.showIds = showIds;
                        var logic = moosnow.entity.showEntity(prefabName, parentNode, adRow);
                        _this.mFloatCache[idx] = {
                            index: showIndex,
                            logic: logic,
                        };
                        _this.floatAnim(logic.node);
                    });
                    _this.updateFloat(source);
                    _this.schedule(function () {
                        _this.updateFloat(source);
                    }, _this.mFloatRefresh);
                });
            });
        };
        AdForm.prototype.floatAnim = function (floatNode) {
        };
        AdForm.prototype.updateFloat = function (source) {
            for (var key in this.mFloatCache) {
                var showIndex = this.mFloatCache[key].index;
                var logic = this.mFloatCache[key].logic;
                if (showIndex < source.length - 1)
                    showIndex++;
                else
                    showIndex = 0;
                this.mFloatCache[key].index = showIndex;
                logic.refreshImg(source[showIndex]);
            }
        };
        AdForm.prototype.hasAd = function (ad) {
            return (this.mShowAd & ad) == ad;
        };
        AdForm.prototype.showExportClose = function () {
            this.mSecond -= 1;
            this.exportCloseTxt.active = true;
            var closeLabel = this.exportCloseTxt.getComponent(cc.Label);
            if (this.mSecond <= 0) {
                this.exportClose.active = true;
                this.exportCloseTxt.active = false;
                this.unschedule(this.showExportClose);
                return;
            }
            closeLabel.string = "\u5269\u4F59" + this.mSecond + "\u79D2\u53EF\u5173\u95ED";
        };
        AdForm.prototype.displayAd = function (visible) {
            this.floatContainer.active = visible && this.hasAd(AD_POSITION.FLOAT);
            this.bannerContainer.active = visible && this.hasAd(AD_POSITION.BANNER);
            this.centerContainer.active = visible && this.hasAd(AD_POSITION.CENTER);
            this.leftContainer.active = visible && this.hasAd(AD_POSITION.LEFTRIGHT);
            this.exportMask.active = visible && this.hasAd(AD_POSITION.MASK);
            this.sideContainer.active = visible && this.hasAd(AD_POSITION.SIDE);
            this.endContainer.active = visible && this.hasAd(AD_POSITION.EXPORT_FIXED);
            this.topContainer.active = visible && this.hasAd(AD_POSITION.TOP);
            this.extend1Container.active = visible && this.hasAd(AD_POSITION.EXTEND1);
            this.extend2Container.active = visible && this.hasAd(AD_POSITION.EXTEND2);
            this.extend3Container.active = visible && this.hasAd(AD_POSITION.EXTEND3);
            this.extend4Container.active = visible && this.hasAd(AD_POSITION.EXTEND4);
            this.exportContainer.active = visible && this.hasAd(AD_POSITION.EXPORT);
            this.showClose(visible);
            this.showInviteBox(visible);
        };
        AdForm.prototype.showClose = function (visible) {
            this.exportClose.active = false;
            this.exportCloseTxt.active = false;
            this.unschedule(this.showExportClose);
            if (visible && this.hasAd(AD_POSITION.BACK)) {
                if (this.hasAd(AD_POSITION.WAIT)) {
                    this.mSecond = 3;
                    this.showExportClose();
                    this.schedule(this.showExportClose, 1);
                }
                else {
                    this.exportClose.active = true;
                    this.exportCloseTxt.active = false;
                }
            }
            else {
                this.exportClose.active = false;
                this.exportCloseTxt.active = false;
            }
        };
        AdForm.prototype.showInviteBox = function (visible) {
            var _this = this;
            if (visible && this.hasAd(AD_POSITION.EXPORT)) {
                moosnow.http.getAllConfig(function (res) {
                    if (res) {
                        if (res.exportAutoNavigate == 1)
                            moosnow.platform.navigate2Mini(_this.mAdData.indexLeft[Common.randomNumBoth(0, _this.mAdData.indexLeft.length - 1)]);
                        if (res.exportAutoInvite)
                            _this._createInviteBox();
                    }
                });
            }
            if (visible && this.hasAd(AD_POSITION.BANNER)) {
                moosnow.http.getAllConfig(function (res) {
                    _this._createInviteBox();
                    if (res) {
                        if (res.bannerAutoInvite)
                            _this._createInviteBox();
                    }
                });
            }
            if (visible && this.hasAd(AD_POSITION.SIDE)) {
                moosnow.http.getAllConfig(function (res) {
                    if (res) {
                        if (res.sideAutoInvite)
                            _this._createInviteBox();
                    }
                });
            }
        };
        AdForm.prototype._createInviteBox = function () {
            var _this = this;
            var entityName = "inviteBox";
            moosnow.entity.preload(entityName, function () {
                moosnow.http.getAllConfig(function (res) {
                    if (res) {
                        var inviteDelay = isNaN(res.inviteDelay) ? 0 : parseFloat(res.inviteDelay);
                        if (inviteDelay > 0)
                            _this.scheduleOnce(function () {
                                moosnow.entity.showEntity(entityName, cc.Canvas.instance.node, {}, ROOT_CONFIG.ENTITY_ROOT);
                            }, inviteDelay);
                        else
                            moosnow.entity.showEntity(entityName, cc.Canvas.instance.node, {});
                    }
                    else
                        moosnow.entity.showEntity(entityName, cc.Canvas.instance.node, {});
                });
            });
        };
        AdForm.prototype.onFwUpdate = function () {
        };
        return AdForm;
    }(BaseForm));

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
        return CocosNodeEvent;
    }(NodeEvent));

    var CocosAdForm = /** @class */ (function (_super) {
        __extends(CocosAdForm, _super);
        function CocosAdForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.mMoveSpeed = 2;
            return _this;
        }
        CocosAdForm.prototype.addEvent = function () {
            if (this.exportClose)
                this.exportClose.on(CocosNodeEvent.TOUCH_END, this.onBack, this);
            if (this.btnSideShow)
                this.btnSideShow.on(CocosNodeEvent.TOUCH_START, this.sideOut, this);
            if (this.btnSideHide)
                this.btnSideHide.on(CocosNodeEvent.TOUCH_START, this.sideIn, this);
            _super.prototype.addEvent.call(this);
        };
        CocosAdForm.prototype.removeEvent = function () {
            if (this.exportClose)
                this.exportClose.off(CocosNodeEvent.TOUCH_END, this.onBack, this);
            if (this.btnSideShow)
                this.btnSideShow.off(CocosNodeEvent.TOUCH_START, this.sideOut, this);
            if (this.btnSideHide)
                this.btnSideHide.off(CocosNodeEvent.TOUCH_START, this.sideIn, this);
            _super.prototype.removeEvent.call(this);
        };
        CocosAdForm.prototype.floatAnim = function (floatNode) {
            floatNode.runAction(cc.sequence(cc.rotateTo(0.3, 10), cc.rotateTo(0.6, -10), cc.rotateTo(0.3, 0), cc.scaleTo(0.3, 0.8), cc.scaleTo(0.3, 1)).repeatForever());
        };
        CocosAdForm.prototype.sideOut = function () {
            var _this = this;
            var wxsys = moosnow.platform.getSystemInfoSync();
            var statusBarHeight = 0;
            var notchHeight = 0;
            if (wxsys) {
                statusBarHeight = wxsys.statusBarHeight || 0;
                notchHeight = wxsys.notchHeight || 0;
            }
            this.sideView.node.runAction(cc.sequence(cc.moveTo(1, statusBarHeight + notchHeight + this.sideView.node.width + 20, 0), cc.callFunc(function () {
                _this.btnSideShow.active = false;
                _this.btnSideHide.active = true;
            })));
        };
        CocosAdForm.prototype.sideIn = function () {
            var _this = this;
            this.sideView.node.runAction(cc.sequence(cc.moveTo(1, 0, 0), cc.callFunc(function () {
                _this.btnSideShow.active = true;
                _this.btnSideHide.active = false;
            })));
        };
        CocosAdForm.prototype.pushScroll = function (scrollView, layout) {
            if (layout.type == cc.Layout.Type.GRID) {
                if (scrollView.vertical) {
                    this.mScrollVec.push({
                        scrollView: scrollView,
                        move2Up: false
                    });
                }
                else {
                    this.mScrollVec.push({
                        scrollView: scrollView,
                        move2Left: false
                    });
                }
            }
            else if (layout.type == cc.Layout.Type.HORIZONTAL) {
                this.mScrollVec.push({
                    scrollView: scrollView,
                    move2Left: false
                });
            }
            else if (layout.type == cc.Layout.Type.VERTICAL) {
                this.mScrollVec.push({
                    scrollView: scrollView,
                    move2Up: false
                });
            }
        };
        CocosAdForm.prototype.onFwUpdate = function () {
            for (var i = 0; i < this.mScrollVec.length; i++) {
                var item = this.mScrollVec[i];
                var scrollView = item.scrollView;
                if (scrollView.isScrolling())
                    continue;
                var scrollOffset = scrollView.getMaxScrollOffset();
                var maxH = scrollOffset.y / 2 + 20;
                var maxW = scrollOffset.x / 2 + 20;
                var contentPos = scrollView.getContentPosition();
                if (item.move2Up == true) {
                    if (contentPos.y > maxH) {
                        item.move2Up = false;
                    }
                    item.scrollView.setContentPosition(new cc.Vec2(contentPos.x, contentPos.y + this.mMoveSpeed));
                }
                else if (item.move2Up == false) {
                    if (contentPos.y < -maxH) {
                        item.move2Up = true;
                    }
                    item.scrollView.setContentPosition(new cc.Vec2(contentPos.x, contentPos.y - this.mMoveSpeed));
                }
                if (item.move2Left == true) {
                    if (contentPos.x > maxW) {
                        item.move2Left = false;
                    }
                    item.scrollView.setContentPosition(new cc.Vec2(contentPos.x + this.mMoveSpeed, contentPos.y));
                }
                else if (item.move2Left == false) {
                    if (contentPos.x < -maxW) {
                        item.move2Left = true;
                    }
                    item.scrollView.setContentPosition(new cc.Vec2(contentPos.x - this.mMoveSpeed, contentPos.y));
                }
            }
        };
        return CocosAdForm;
    }(AdForm));

    var MISTOUCH_BANNER_TYPE;
    (function (MISTOUCH_BANNER_TYPE) {
        MISTOUCH_BANNER_TYPE[MISTOUCH_BANNER_TYPE["AUTO_HIDE"] = 1] = "AUTO_HIDE";
        MISTOUCH_BANNER_TYPE[MISTOUCH_BANNER_TYPE["MAST"] = 2] = "MAST";
    })(MISTOUCH_BANNER_TYPE || (MISTOUCH_BANNER_TYPE = {}));

    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var UIFormSetting = /** @class */ (function () {
        function UIFormSetting() {
        }
        UIFormSetting.append = function (setting) {
            this.mSetting = __assign(__assign({}, this.mSetting), setting);
        };
        Object.defineProperty(UIFormSetting, "mapping", {
            get: function () {
                return this.mSetting;
            },
            enumerable: true,
            configurable: true
        });
        UIFormSetting.convertUIName = function (mappingForm) {
            if (!mappingForm) {
                console.warn("convertUIName fail  mappingForm is null ");
                return null;
            }
            var curApp = moosnow.getAppPlatform();
            if (mappingForm[curApp])
                return mappingForm[curApp];
            else if (mappingForm[moosnow.APP_PLATFORM.WX])
                return mappingForm[moosnow.APP_PLATFORM.WX];
            else {
                console.warn("convertUIName fail ", mappingForm);
                return null;
            }
            return null;
        };
        Object.defineProperty(UIFormSetting, "AdForm", {
            get: function () {
                return this.convertUIName(this.mapping.adForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIFormSetting, "CoinForm", {
            get: function () {
                return this.convertUIName(this.mapping.coinForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIFormSetting, "ShareForm", {
            get: function () {
                return this.convertUIName(this.mapping.shareForm);
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(UIFormSetting, "TotalForm", {
            get: function () {
                return this.convertUIName(this.mapping.totalForm);
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(UIFormSetting, "EndForm", {
            /**
             * 结束页
             */
            get: function () {
                return this.convertUIName(this.mapping.endForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIFormSetting, "ToastForm", {
            get: function () {
                return this.convertUIName(this.mapping.toastForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIFormSetting, "PauseForm", {
            get: function () {
                return this.convertUIName(this.mapping.pauseForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIFormSetting, "RespawnForm", {
            get: function () {
                return this.convertUIName(this.mapping.respawnForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIFormSetting, "SetForm", {
            get: function () {
                return this.convertUIName(this.mapping.setForm);
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(UIFormSetting, "PrizeForm", {
            get: function () {
                return this.convertUIName(this.mapping.prizeForm);
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(UIFormSetting, "MistouchForm", {
            get: function () {
                return this.convertUIName(this.mapping.mistouchForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIFormSetting, "TryForm", {
            get: function () {
                return this.convertUIName(this.mapping.tryForm);
            },
            enumerable: true,
            configurable: true
        });
        UIFormSetting.mSetting = {
            adForm: (_a = {},
                _a[moosnow.APP_PLATFORM.WX] = "adForm",
                _a),
            pauseForm: (_b = {},
                _b[moosnow.APP_PLATFORM.WX] = "pauseForm",
                _b[moosnow.APP_PLATFORM.BYTEDANCE] = "pauseFormTT",
                _b[moosnow.APP_PLATFORM.OPPO] = "pauseFormOPPO",
                _b[moosnow.APP_PLATFORM.OPPO_ZS] = "pauseFormOPPO",
                _b[moosnow.APP_PLATFORM.VIVO] = "pauseFormOPPO",
                _b[moosnow.APP_PLATFORM.QQ] = "pauseFormTT",
                _b),
            respawnForm: (_c = {},
                _c[moosnow.APP_PLATFORM.WX] = "respawnForm",
                _c[moosnow.APP_PLATFORM.BYTEDANCE] = "respawnFormTT",
                _c[moosnow.APP_PLATFORM.OPPO] = "respawnFormOPPO",
                _c[moosnow.APP_PLATFORM.OPPO_ZS] = "respawnFormOPPO",
                _c[moosnow.APP_PLATFORM.VIVO] = "respawnFormOPPO",
                _c[moosnow.APP_PLATFORM.QQ] = "respawnFormQQ",
                _c),
            endForm: (_d = {},
                _d[moosnow.APP_PLATFORM.WX] = "endForm",
                _d[moosnow.APP_PLATFORM.BYTEDANCE] = "endFormTT",
                _d[moosnow.APP_PLATFORM.OPPO] = "endFormOPPO",
                _d[moosnow.APP_PLATFORM.OPPO_ZS] = "endFormOPPO",
                _d[moosnow.APP_PLATFORM.VIVO] = "endFormOPPO",
                _d),
            totalForm: (_e = {},
                _e[moosnow.APP_PLATFORM.WX] = "totalForm",
                _e[moosnow.APP_PLATFORM.BYTEDANCE] = "totalFormTT",
                _e[moosnow.APP_PLATFORM.QQ] = "totalFormQQ",
                _e),
            tryForm: (_f = {},
                _f[moosnow.APP_PLATFORM.WX] = "tryForm",
                _f[moosnow.APP_PLATFORM.BYTEDANCE] = "tryFormTT",
                _f[moosnow.APP_PLATFORM.QQ] = "tryFormTT",
                _f),
            mistouchForm: (_g = {},
                _g[moosnow.APP_PLATFORM.WX] = "mistouchForm",
                _g[moosnow.APP_PLATFORM.QQ] = "mistouchFormQQ",
                _g[moosnow.APP_PLATFORM.BYTEDANCE] = "mistouchFormTT",
                _g),
            prizeForm: (_h = {},
                _h[moosnow.APP_PLATFORM.BYTEDANCE] = "prizeFormTT",
                _h[moosnow.APP_PLATFORM.QQ] = "prizeForm",
                _h),
            shareForm: (_j = {},
                _j[moosnow.APP_PLATFORM.WX] = "shareFormTT",
                _j[moosnow.APP_PLATFORM.BYTEDANCE] = "shareFormTT",
                _j),
            setForm: (_k = {},
                _k[moosnow.APP_PLATFORM.WX] = "setForm",
                _k),
            toastForm: (_l = {},
                _l[moosnow.APP_PLATFORM.WX] = "toastForm",
                _l),
            coinForm: (_m = {},
                _m[moosnow.APP_PLATFORM.WX] = "coinForm",
                _m)
        };
        return UIFormSetting;
    }());

    var MistouchForm = /** @class */ (function (_super) {
        __extends(MistouchForm, _super);
        function MistouchForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.clickProgress = null;
            _this.btnBanner = null;
            _this.logo = null;
            _this.mMaxNum = 10;
            _this.mCurrentNum = 0;
            _this.mNavigateIndex = 0;
            _this.mBannerShow = false;
            _this.mShowTime = 0;
            _this.mBannerClickType = MISTOUCH_BANNER_TYPE.AUTO_HIDE;
            return _this;
        }
        Object.defineProperty(MistouchForm.prototype, "FormData", {
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        MistouchForm.prototype.initPos = function () {
        };
        MistouchForm.prototype.willShow = function (data) {
            var _this = this;
            _super.prototype.willShow.call(this, data);
            this.btnBanner.active = true;
            this.initPos();
            this.mCurrentNum = 0;
            this.mNavigateIndex = Common.randomNumBoth(3, this.mMaxNum - 2);
            this.addEvent();
            this.schedule(this.subProgress, 0.1);
            moosnow.form.showAd(moosnow.AD_POSITION.NONE, null);
            this.mBannerShow = false;
            moosnow.http.getAllConfig(function (res) {
                // this.mBannerClickType = res.bannerClickType
                _this.mBannerClickType = MISTOUCH_BANNER_TYPE.MAST;
            });
        };
        MistouchForm.prototype.willHide = function () {
            this.unschedule(this.subProgress);
            this.unschedule(this.resetProgress);
            this.removeEvent();
        };
        MistouchForm.prototype.subProgress = function () {
            if (this.mCurrentNum > 0)
                this.mCurrentNum -= 0.1;
        };
        MistouchForm.prototype.addEvent = function () {
        };
        MistouchForm.prototype.removeEvent = function () {
        };
        MistouchForm.prototype.bannerClickCallback = function (isOpend) {
            if (isOpend) {
                this.unschedule(this.onHideBanner);
                this.unschedule(this.resetProgress);
                moosnow.platform.hideBanner();
                this.mBannerShow = false;
                if (this.FormData && this.FormData.callback)
                    this.FormData.callback();
            }
        };
        MistouchForm.prototype.onLogoUp = function () {
            this.logo.position = this.mEndPos;
        };
        MistouchForm.prototype.onLogoDown = function () {
            this.logo.position = this.mBeginPos;
        };
        MistouchForm.prototype.onBannerClick = function () {
            var _this = this;
            this.onLogoDown();
            this.mCurrentNum += 1;
            if (this.mCurrentNum >= this.mNavigateIndex) {
                if (!this.mBannerShow) {
                    this.mShowTime = Date.now();
                    this.mBannerShow = true;
                    moosnow.platform.showBanner(true, function (e) {
                        console.log('banner click callback ', e);
                        _this.bannerClickCallback(e);
                    });
                    if (this.mBannerClickType == MISTOUCH_BANNER_TYPE.AUTO_HIDE) {
                        this.unschedule(this.onHideBanner);
                        this.scheduleOnce(this.onHideBanner, 2);
                    }
                    else if (this.mBannerClickType == MISTOUCH_BANNER_TYPE.MAST) {
                        this.unschedule(this.resetProgress);
                        this.scheduleOnce(this.resetProgress, 2);
                    }
                }
            }
            if (this.mCurrentNum >= this.mMaxNum) {
                moosnow.platform.hideBanner();
                this.mBannerShow = false;
                moosnow.ui.destroyUIForm(UIFormSetting.MistouchForm, null);
                if (this.FormData && this.FormData.callback)
                    this.FormData.callback(true);
            }
        };
        MistouchForm.prototype.resetProgress = function () {
            this.mCurrentNum = 0;
            moosnow.platform.hideBanner();
            this.mBannerShow = false;
        };
        MistouchForm.prototype.onHideBanner = function () {
            moosnow.platform.hideBanner();
        };
        MistouchForm.prototype.update = function () {
            this.clickProgress.progress = this.mCurrentNum / this.mMaxNum;
        };
        return MistouchForm;
    }(BaseForm));

    var CocosMistouchForm = /** @class */ (function (_super) {
        __extends(CocosMistouchForm, _super);
        function CocosMistouchForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.clickProgress = null;
            _this.btnBanner = null;
            _this.logo = null;
            return _this;
        }
        CocosMistouchForm.prototype.addEvent = function () {
            this.btnBanner.on(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
            this.btnBanner.on(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
        };
        CocosMistouchForm.prototype.removeEvent = function () {
            this.btnBanner.off(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
            this.btnBanner.off(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
            moosnow.event.removeListener(EventType.ON_PLATFORM_SHOW, this);
        };
        CocosMistouchForm.prototype.onLogoUp = function () {
            this.logo.position = this.mEndPos;
        };
        CocosMistouchForm.prototype.onLogoDown = function () {
            this.logo.position = this.mBeginPos;
        };
        CocosMistouchForm.prototype.initPos = function () {
            this.mBeginPos = this.logo.position.clone();
            this.mEndPos = this.mBeginPos.add(new cc.Vec2(0, 50));
        };
        return CocosMistouchForm;
    }(MistouchForm));

    var MistouchFormTT = /** @class */ (function (_super) {
        __extends(MistouchFormTT, _super);
        function MistouchFormTT() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.clickProgress = null;
            _this.btnReceive = null;
            _this.btnConfirm = null;
            _this.checked = null;
            _this.unchecked = null;
            _this.step1 = null;
            _this.step2 = null;
            _this.logo = null;
            _this.mMaxNum = 10;
            _this.mCurrentNum = 0;
            _this.mOpenVideo = true;
            return _this;
        }
        MistouchFormTT.prototype.willShow = function (data) {
            _super.prototype.willShow.call(this, data);
            this.step1.active = true;
            this.step2.active = false;
            this.btnConfirm.active = true;
            this.mCurrentNum = 0;
            this.mOpenVideo = true;
            this.showCheckbox();
            this.addEvent();
            this.schedule(this.subProgress, 0.1);
            moosnow.form.showAd(moosnow.AD_POSITION.NONE, null);
        };
        MistouchFormTT.prototype.willHide = function () {
            this.unschedule(this.subProgress);
            this.unschedule(this.resetProgress);
            this.removeEvent();
        };
        MistouchFormTT.prototype.subProgress = function () {
            if (this.mCurrentNum > 0)
                this.mCurrentNum -= 0.1;
        };
        MistouchFormTT.prototype.addEvent = function () {
        };
        MistouchFormTT.prototype.removeEvent = function () {
        };
        MistouchFormTT.prototype.openBox = function () {
            var _this = this;
            if (this.mOpenVideo) {
                this.btnConfirm.active = false;
                moosnow.platform.showVideo(function (res) {
                    if (res == moosnow.VIDEO_STATUS.END) {
                        if (_this.FormData && _this.FormData.callback)
                            _this.FormData.callback(true);
                        return;
                    }
                    else if (res == moosnow.VIDEO_STATUS.NOTEND) {
                        moosnow.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                    }
                    else {
                        moosnow.ui.showToast(moosnow.VIDEO_MSG.ERR);
                    }
                    _this.btnConfirm.active = true;
                });
            }
            else {
                moosnow.ui.hideUIForm(UIFormSetting.MistouchForm, null);
            }
        };
        MistouchFormTT.prototype.checkboxChange = function () {
            this.mOpenVideo = !this.mOpenVideo;
            this.showCheckbox();
        };
        MistouchFormTT.prototype.showCheckbox = function () {
            if (this.mOpenVideo) {
                this.checked.node.active = true;
            }
            else {
                this.checked.node.active = false;
            }
        };
        MistouchFormTT.prototype.playBoxAnim = function (animName) {
        };
        MistouchFormTT.prototype.onLogoUp = function () {
            // this.logo.position = this.mEndPos;
            this.playBoxAnim("prizeBox2");
        };
        MistouchFormTT.prototype.onBannerClick = function () {
            if (this.mCurrentNum > this.mMaxNum + 1)
                return;
            this.mCurrentNum += 1;
            if (this.mCurrentNum >= this.mMaxNum) {
                this.step1.active = false;
                this.step2.active = true;
                this.playBoxAnim("prizeBox1");
            }
        };
        MistouchFormTT.prototype.resetProgress = function () {
            this.mCurrentNum = 0;
        };
        MistouchFormTT.prototype.update = function () {
            var progress = this.mCurrentNum / this.mMaxNum;
            this.clickProgress.progress = progress > 1 ? 1 : progress;
        };
        return MistouchFormTT;
    }(MistouchForm));

    var CocosMistouchFormTT = /** @class */ (function (_super) {
        __extends(CocosMistouchFormTT, _super);
        function CocosMistouchFormTT() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.clickProgress = null;
            _this.btnReceive = null;
            _this.btnConfirm = null;
            _this.checked = null;
            _this.unchecked = null;
            _this.step1 = null;
            _this.step2 = null;
            _this.logo = null;
            return _this;
        }
        CocosMistouchFormTT.prototype.playBoxAnim = function (animName) {
            var anim = this.logo.getComponent(cc.Animation);
            if (!anim.getAnimationState(animName).isPlaying)
                anim.play(animName);
        };
        CocosMistouchFormTT.prototype.addEvent = function () {
            this.unchecked.node.on(CocosNodeEvent.TOUCH_END, this.checkboxChange, this);
            this.btnReceive.on(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
            this.btnReceive.on(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
            this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.openBox, this);
        };
        CocosMistouchFormTT.prototype.removeEvent = function () {
            this.unchecked.node.off(CocosNodeEvent.TOUCH_END, this.checkboxChange, this);
            this.btnReceive.off(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
            this.btnReceive.off(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
            this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.openBox, this);
        };
        return CocosMistouchFormTT;
    }(MistouchFormTT));

    var MistouchFormQQ = /** @class */ (function (_super) {
        __extends(MistouchFormQQ, _super);
        function MistouchFormQQ() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.clickProgress = null;
            _this.btnBanner = null;
            _this.logo = null;
            _this.hand = null;
            _this.pinch1 = null;
            _this.pinch2 = null;
            _this.pinch3 = null;
            _this.pinch4 = null;
            _this.pinch5 = null;
            _this.pinch6 = null;
            return _this;
        }
        MistouchFormQQ.prototype.willShow = function (data) {
            _super.prototype.willShow.call(this, data);
            this.mCurrentNum = 0;
            this.mNavigateIndex = Common.randomNumBoth(3, this.mMaxNum - 2);
            this.addEvent();
            this.schedule(this.subProgress, 0.016);
            moosnow.form.showAd(moosnow.AD_POSITION.NONE, null);
            this.mBannerShow = false;
            if (this.mistouchAppBox()) {
                this.showHand(true);
                this.showButton(false);
                this.playHandAnim();
            }
            else {
                this.showHand(false);
                this.showButton(true);
            }
            moosnow.platform.hideBanner();
        };
        MistouchFormQQ.prototype.playHandAnim = function () {
        };
        MistouchFormQQ.prototype.mistouchAppBox = function () {
            return this.FormData && this.FormData.type == 2;
        };
        MistouchFormQQ.prototype.subProgress = function () {
            if (this.mCurrentNum > 0)
                this.mCurrentNum -= 0.02;
        };
        MistouchFormQQ.prototype.initPos = function () {
        };
        MistouchFormQQ.prototype.onHideBanner = function () {
            if (this.mistouchAppBox())
                moosnow.platform.hideAppBox();
            else
                moosnow.platform.hideBanner();
        };
        MistouchFormQQ.prototype.showButton = function (isShow) {
        };
        MistouchFormQQ.prototype.showHand = function (isShow) {
        };
        MistouchFormQQ.prototype.onBannerClick = function () {
            var _this = this;
            this.mCurrentNum += 1;
            this.onLogoDown();
            this.showHand(false);
            if (this.mCurrentNum >= this.mNavigateIndex) {
                if (!this.mBannerShow) {
                    this.mShowTime = Date.now();
                    this.mBannerShow = true;
                    if (this.mistouchAppBox()) {
                        moosnow.platform.showAppBox(function () {
                            _this.bannerClickCallback(true);
                        });
                    }
                    else {
                        moosnow.platform.showBanner(true, function (e) {
                            console.log('banner click callback ', e);
                            _this.bannerClickCallback(e);
                        });
                    }
                    if (this.mBannerClickType == MISTOUCH_BANNER_TYPE.AUTO_HIDE) {
                        this.unschedule(this.onHideBanner);
                        this.scheduleOnce(this.onHideBanner, 2);
                    }
                    else if (this.mBannerClickType == MISTOUCH_BANNER_TYPE.MAST) {
                        this.unschedule(this.resetProgress);
                        this.scheduleOnce(this.resetProgress, 2);
                    }
                }
            }
            if (this.mCurrentNum >= this.mMaxNum) {
                moosnow.platform.hideBanner();
                this.mBannerShow = false;
                this.scheduleOnce(function () {
                    moosnow.ui.destroyUIForm(UIFormSetting.MistouchForm, null);
                    if (_this.FormData && _this.FormData.callback)
                        _this.FormData.callback();
                }, 0.2);
            }
        };
        return MistouchFormQQ;
    }(MistouchForm));

    var CocosMistouchFormQQ = /** @class */ (function (_super) {
        __extends(CocosMistouchFormQQ, _super);
        function CocosMistouchFormQQ() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.clickProgress = null;
            _this.btnBanner = null;
            _this.logo = null;
            _this.hand = null;
            _this.pinch1 = null;
            _this.pinch2 = null;
            _this.pinch3 = null;
            _this.pinch4 = null;
            _this.pinch5 = null;
            _this.pinch6 = null;
            return _this;
        }
        CocosMistouchFormQQ.prototype.onLogoUp = function () {
        };
        CocosMistouchFormQQ.prototype.onLogoDown = function () {
            var logoSprite = this.logo.getComponent(cc.Sprite);
            if (this.mCurrentNum < this.mMaxNum)
                logoSprite.spriteFrame = this["pinch" + ((parseInt("" + this.mCurrentNum) % 4) + 1)];
            else
                logoSprite.spriteFrame = this.pinch6;
        };
        CocosMistouchFormQQ.prototype.addEvent = function () {
            var _this = this;
            //误触appbox 广告
            if (this.mistouchAppBox()) {
                this.btnBanner.active = false;
                this.logo.on(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
                this.logo.on(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
            }
            else {
                //误触banner
                this.btnBanner.active = true;
                this.btnBanner.on(CocosNodeEvent.TOUCH_START, this.onLogoUp, this);
                this.btnBanner.on(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
            }
            moosnow.event.addListener(EventType.ON_PLATFORM_SHOW, this, function () {
                if (_this.mBannerShow)
                    _this.bannerClickCallback(true);
            });
        };
        CocosMistouchFormQQ.prototype.removeEvent = function () {
            this.btnBanner.off(CocosNodeEvent.TOUCH_END, this.onBannerClick, this);
            moosnow.event.removeListener(EventType.ON_PLATFORM_SHOW, this);
        };
        CocosMistouchFormQQ.prototype.playHandAnim = function () {
            var anim = this.hand.getComponent(cc.Animation);
            anim.play();
        };
        CocosMistouchFormQQ.prototype.showButton = function (isShow) {
            this.btnBanner.active = isShow;
        };
        CocosMistouchFormQQ.prototype.showHand = function (isShow) {
            this.hand.active = isShow;
        };
        return CocosMistouchFormQQ;
    }(MistouchFormQQ));

    var BaseLogic = /** @class */ (function (_super) {
        __extends(BaseLogic, _super);
        function BaseLogic() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 初始化
         * @param logic
         */
        BaseLogic.prototype.initForm = function (logic) {
            this.initProperty(logic);
        };
        Object.defineProperty(BaseLogic.prototype, "LogicData", {
            /**
            * 父类缓存willShow，onShow传递到实体的逻辑数据
            */
            get: function () {
                return this.mLogicData;
            },
            enumerable: true,
            configurable: true
        });
        BaseLogic.prototype.willShow = function (data) {
            this.mLogicData = data;
            this.initPosition(data);
        };
        BaseLogic.prototype.initPosition = function (data) {
        };
        BaseLogic.prototype.onShow = function (data) {
        };
        BaseLogic.prototype.willHide = function (data) {
        };
        BaseLogic.prototype.onHide = function (data) {
        };
        return BaseLogic;
    }(BaseModule));

    var AdViewItem = /** @class */ (function (_super) {
        __extends(AdViewItem, _super);
        function AdViewItem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.logo = null;
            _this.title = null;
            _this.animLogo = null;
            _this.nameBg = null;
            _this.changeView = false;
            return _this;
            // update (dt) {}
        }
        // public get LogicData(): moosnowAdRow {
        //     return this.mLogicData;
        // }
        AdViewItem.prototype.onClickAd = function () {
            var _this = this;
            var openAd = this.mAdItem;
            if (this.LogicData.refresh) {
                var nextAd = this.findNextAd();
                if (nextAd.refresh)
                    moosnow.event.sendEventImmediately(EventType.AD_VIEW_REFRESH, {
                        current: openAd,
                        next: nextAd
                    });
                this.refreshImg(nextAd);
            }
            moosnow.platform.navigate2Mini(openAd, function () { }, function () {
                if (_this.mAdItem.onCancel)
                    _this.mAdItem.onCancel(openAd);
            });
        };
        AdViewItem.prototype.findNextAd = function () {
            if (!this.LogicData.source)
                return null;
            if (!this.LogicData.showIds)
                return null;
            for (var i = 0; i < this.LogicData.source.length; i++) {
                var isShow = false;
                for (var j = 0; j < this.LogicData.showIds.length; j++) {
                    if (this.LogicData.showIds[j].appid == this.LogicData.source[i].appid
                        && this.LogicData.showIds[j].position == this.LogicData.source[i].position) {
                        isShow = true;
                    }
                }
                if (!isShow) {
                    return this.LogicData.source[i];
                }
            }
            return null;
        };
        AdViewItem.prototype.onAdViewChange = function (e) {
            if (!this.LogicData.showIds)
                return;
            if (!this.LogicData.source)
                return;
            var current = e.current, next = e.next;
            var showApps = this.LogicData.showIds;
            var sourceApps = this.LogicData.source;
            for (var i = 0; i < showApps.length; i++) {
                if (current.appid == showApps[i].appid && current.position == showApps[i].position) {
                    this.LogicData.showIds[i] = next.appid;
                }
            }
            for (var i = 0; i < sourceApps.length; i++) {
                if (next.appid == sourceApps[i].appid) {
                    this.LogicData.source.splice(i, 1);
                    this.LogicData.source.push(current);
                    break;
                }
            }
        };
        AdViewItem.prototype.onShow = function () {
            if (this.LogicData && this.LogicData.refresh)
                moosnow.event.addListener(EventType.AD_VIEW_REFRESH, this, this.onAdViewChange);
        };
        AdViewItem.prototype.onHide = function () {
            if (this.mAdItem)
                this.mAdItem.onCancel = null;
            this.removeListener();
            moosnow.event.removeListener(EventType.AD_VIEW_REFRESH, this);
        };
        AdViewItem.prototype.addListener = function () {
        };
        AdViewItem.prototype.removeListener = function () {
        };
        AdViewItem.prototype.willShow = function (cell) {
            _super.prototype.willShow.call(this, cell);
            this.addListener();
        };
        AdViewItem.prototype.refreshImg = function (cell) {
        };
        return AdViewItem;
    }(BaseLogic));

    var CocosAdViewItem = /** @class */ (function (_super) {
        __extends(CocosAdViewItem, _super);
        function CocosAdViewItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CocosAdViewItem.prototype.addListener = function () {
            this.logo.node.on(CocosNodeEvent.TOUCH_END, this.onClickAd, this);
        };
        CocosAdViewItem.prototype.removeListener = function () {
            this.logo.node.off(CocosNodeEvent.TOUCH_END, this.onClickAd, this);
        };
        CocosAdViewItem.prototype.initPosition = function (data) {
            if (data) {
                // if (data.x)
                //     this.mLogic.node.x = data.x
                // if (data.y)
                //     this.mLogic.node.y = data.y
            }
        };
        CocosAdViewItem.prototype.willShow = function (cell) {
            var _this = this;
            _super.prototype.willShow.call(this, cell);
            this.mAdItem = cell;
            cc.loader.load(cell.img, function (err, tex) {
                var spriteFrame = new cc.SpriteFrame(tex);
                _this.logo.spriteFrame = spriteFrame;
            });
            if (this.title)
                this.title.string = (cell.title);
        };
        CocosAdViewItem.prototype.refreshImg = function (cell) {
            var _this = this;
            this.mAdItem = cell;
            cc.loader.load(cell.img, function (err, tex) {
                var spriteFrame = new cc.SpriteFrame(tex);
                _this.logo.spriteFrame = spriteFrame;
            });
            if (this.title)
                this.title.string = (cell.title);
        };
        return CocosAdViewItem;
    }(AdViewItem));

    var PrizeForm = /** @class */ (function (_super) {
        __extends(PrizeForm, _super);
        function PrizeForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.coinNum = null;
            _this.btnConfirm = null;
            return _this;
        }
        Object.defineProperty(PrizeForm.prototype, "FormData", {
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        PrizeForm.prototype.initForm = function (logic) {
            this.initProperty(logic);
            // this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
        };
        PrizeForm.prototype.willHide = function () {
            // this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.closeForm, this)
        };
        PrizeForm.prototype.willShow = function (data) {
            _super.prototype.willShow.call(this, data);
            this.coinNum.string = "" + Common.formatMoney(data.coinNum);
            moosnow.platform.hideBanner();
        };
        PrizeForm.prototype.closeForm = function () {
            var _this = this;
            moosnow.ui.destroyUIForm(UIFormSetting.PrizeForm, null);
            moosnow.ui.destroyUIForm(UIFormSetting.MistouchForm, null);
            if (this.FormData.showCoinAnim == true) {
                moosnow.ui.pushUIForm(UIFormSetting.CoinForm, __assign(__assign({}, Common.deepCopy(this.FormData)), { callback: function () {
                        if (_this.FormData.callback)
                            _this.FormData.callback();
                    } }), function () { }, ROOT_CONFIG.UI_ROOT);
            }
            else {
                if (this.FormData.callback)
                    this.FormData.callback();
            }
        };
        return PrizeForm;
    }(BaseForm));

    var CocosPrizeForm = /** @class */ (function (_super) {
        __extends(CocosPrizeForm, _super);
        function CocosPrizeForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.coinNum = null;
            _this.btnConfirm = null;
            return _this;
        }
        CocosPrizeForm.prototype.initForm = function (logic) {
            this.initProperty(logic);
            this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this);
        };
        CocosPrizeForm.prototype.willHide = function () {
            this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.closeForm, this);
        };
        return CocosPrizeForm;
    }(PrizeForm));

    var PrizeFormTT = /** @class */ (function (_super) {
        __extends(PrizeFormTT, _super);
        function PrizeFormTT() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.prizeBg1 = null;
            _this.prizeBg2 = null;
            _this.btnCancel = null;
            _this.txtCoutdown = null;
            _this.btnVideo = null;
            _this.btnShare = null;
            _this.btnReceive = null;
            _this.checked = null;
            _this.unchecked = null;
            _this.isMask = true;
            _this.mChecked = false;
            _this.mTotalSecond = 10;
            _this.mCurrentSecond = 0;
            return _this;
        }
        Object.defineProperty(PrizeFormTT.prototype, "FormData", {
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        PrizeFormTT.prototype.initForm = function (logic) {
            this.initProperty(logic);
            // this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
        };
        PrizeFormTT.prototype.willShow = function (data) {
            var _this = this;
            _super.prototype.willShow.call(this, data);
            this.addListener();
            this.mChecked = false;
            this.onChecked();
            this.prizeBg1.active = false;
            this.prizeBg2.active = false;
            moosnow.http.getAllConfig(function (res) {
                if (res) {
                    if (res.prizeFormVideo == 1) {
                        _this.showVideo();
                    }
                    else if (res.prizeFormVideo == 2) {
                        _this.showShare();
                    }
                    else {
                        var precent = res && res.prizeFormVideosPrecent ? parseFloat(res.prizeFormVideosPrecent) : 0.5;
                        if (Common.randomNumBoth(0, 100) / 100.0 < precent) {
                            _this.showVideo();
                        }
                        else
                            _this.showShare();
                    }
                }
                else {
                    _this.showShare();
                }
            });
            this.mTotalSecond = 10;
            this.mCurrentSecond = 0;
            this.resumeCountdown();
            moosnow.platform.showBanner();
        };
        PrizeFormTT.prototype.onHide = function () {
            this.removeListener();
        };
        PrizeFormTT.prototype.showVideo = function () {
            this.prizeBg1.active = true;
            this.prizeBg2.active = false;
        };
        PrizeFormTT.prototype.showShare = function () {
            this.prizeBg1.active = false;
            this.prizeBg2.active = true;
        };
        PrizeFormTT.prototype.onCountdown = function () {
            this.mCurrentSecond += 1;
            var num = this.mTotalSecond - this.mCurrentSecond;
            if (num < 0) {
                this.unschedule(this.onCountdown);
                moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null);
                return;
            }
            this.txtCoutdown.string = num + "\u79D2";
        };
        PrizeFormTT.prototype.stopCountdown = function () {
            this.unschedule(this.onCountdown);
        };
        PrizeFormTT.prototype.resumeCountdown = function () {
            this.schedule(this.onCountdown, 1);
        };
        PrizeFormTT.prototype.addListener = function () {
            // this.btnCancel.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
            // this.btnVideo.on(CocosNodeEvent.TOUCH_END, this.onVideo, this)
            // this.btnReceive.on(CocosNodeEvent.TOUCH_END, this.onReceive, this)
            // this.btnShare.on(CocosNodeEvent.TOUCH_END, this.onShare, this)
            // this.unchecked.on(CocosNodeEvent.TOUCH_END, this.onChecked, this)
        };
        PrizeFormTT.prototype.removeListener = function () {
            // this.btnCancel.off(CocosNodeEvent.TOUCH_END, this.closeForm, this)
            // this.btnVideo.off(CocosNodeEvent.TOUCH_END, this.onVideo, this)
            // this.btnReceive.off(CocosNodeEvent.TOUCH_END, this.onReceive, this)
            // this.btnShare.off(CocosNodeEvent.TOUCH_END, this.onShare, this)
            // this.unchecked.off(CocosNodeEvent.TOUCH_END, this.onChecked, this)
        };
        PrizeFormTT.prototype.closeForm = function () {
            moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null);
        };
        PrizeFormTT.prototype.onChecked = function () {
        };
        PrizeFormTT.prototype.onShare = function () {
            var _this = this;
            this.stopCountdown();
            moosnow.platform.share({
                channel: ""
            }, function (shared) {
                _this.resumeCountdown();
                if (_this.FormData) {
                    if (_this.FormData.hideForm)
                        moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null);
                    if (_this.FormData.shareCallback)
                        _this.FormData.shareCallback(shared);
                }
            });
        };
        PrizeFormTT.prototype.onReceive = function () {
            if (this.mChecked)
                this.onVideo();
            else if (this.FormData) {
                if (this.FormData.hideForm)
                    moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null);
                if (this.FormData.callback)
                    this.FormData.callback();
            }
        };
        PrizeFormTT.prototype.onVideo = function () {
            var _this = this;
            this.stopCountdown();
            moosnow.platform.showVideo(function (res) {
                if (res == moosnow.VIDEO_STATUS.END) {
                    if (_this.FormData) {
                        if (_this.FormData.hideForm)
                            moosnow.ui.hideUIForm(UIFormSetting.PrizeForm, null);
                        if (_this.FormData.videoCallback)
                            _this.FormData.videoCallback();
                    }
                    return;
                }
                else if (res == moosnow.VIDEO_STATUS.ERR)
                    moosnow.ui.showToast(moosnow.VIDEO_MSG.ERR);
                else {
                    moosnow.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                }
                _this.resumeCountdown();
            });
        };
        return PrizeFormTT;
    }(BaseForm));

    var CocosPrizeFormTT = /** @class */ (function (_super) {
        __extends(CocosPrizeFormTT, _super);
        function CocosPrizeFormTT() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.coinNum = null;
            _this.btnConfirm = null;
            return _this;
        }
        CocosPrizeFormTT.prototype.onChecked = function () {
            this.mChecked = !this.mChecked;
            this.checked.active = this.mChecked;
        };
        CocosPrizeFormTT.prototype.initForm = function (logic) {
            this.initProperty(logic);
            this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this);
        };
        CocosPrizeFormTT.prototype.willHide = function () {
            this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.closeForm, this);
        };
        CocosPrizeFormTT.prototype.addListener = function () {
            this.btnCancel.on(CocosNodeEvent.TOUCH_END, this.closeForm, this);
            this.btnVideo.on(CocosNodeEvent.TOUCH_END, this.onVideo, this);
            this.btnReceive.on(CocosNodeEvent.TOUCH_END, this.onReceive, this);
            this.btnShare.on(CocosNodeEvent.TOUCH_END, this.onShare, this);
            this.unchecked.on(CocosNodeEvent.TOUCH_END, this.onChecked, this);
        };
        CocosPrizeFormTT.prototype.removeListener = function () {
            this.btnCancel.off(CocosNodeEvent.TOUCH_END, this.closeForm, this);
            this.btnVideo.off(CocosNodeEvent.TOUCH_END, this.onVideo, this);
            this.btnReceive.off(CocosNodeEvent.TOUCH_END, this.onReceive, this);
            this.btnShare.off(CocosNodeEvent.TOUCH_END, this.onShare, this);
            this.unchecked.off(CocosNodeEvent.TOUCH_END, this.onChecked, this);
        };
        return CocosPrizeFormTT;
    }(PrizeFormTT));

    var CoinForm = /** @class */ (function (_super) {
        __extends(CoinForm, _super);
        function CoinForm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CoinForm.prototype, "rootNode", {
            get: function () {
                return {};
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CoinForm.prototype, "FormData", {
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        CoinForm.prototype.flyAnim = function (logic, endVec, callback) {
        };
        CoinForm.prototype.onShow = function (data) {
            var _this = this;
            var _a = this.FormData, imgNum = _a.imgNum, coinNum = _a.coinNum, starVec = _a.starVec, endVec = _a.endVec, callback = _a.callback;
            console.log('showCoin', data);
            cc.loader.loadRes(moosnow.entity.prefabPath + 'coin', cc.Prefab, function () {
                for (var i = 0; i < imgNum; i++) {
                    var logic = moosnow.entity.showEntity("coin", _this.rootNode, {
                        x: Common.randomNumBoth(starVec.x - data.randomX, starVec.x + data.randomX),
                        y: Common.randomNumBoth(starVec.y - data.randomY, starVec.y + data.randomY)
                    });
                    _this.flyAnim(logic, endVec, callback);
                }
                _this.scheduleOnce(function () {
                    if (_this.FormData.hideForm)
                        moosnow.ui.hideUIForm(UIFormSetting.CoinForm, null);
                    if (Common.isFunction(callback))
                        callback();
                }, 2.1);
            });
        };
        return CoinForm;
    }(BaseForm));

    var CocosCoinForm = /** @class */ (function (_super) {
        __extends(CocosCoinForm, _super);
        function CocosCoinForm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CocosCoinForm.prototype, "rootNode", {
            get: function () {
                return cc.Canvas.instance.node;
            },
            enumerable: true,
            configurable: true
        });
        CocosCoinForm.prototype.flyAnim = function (logic, endVec, callback) {
            var coinNode = logic.node;
            var delayTime = Common.randomNumBoth(0, 100) / 200.0;
            coinNode.active = true;
            coinNode.runAction(cc.sequence(cc.delayTime(delayTime), cc.spawn(cc.moveTo(1, endVec.x, endVec.y), cc.fadeOut(1.0), cc.sequence(cc.scaleTo(0.8, 1.2, 1.2), cc.scaleTo(0.8, 0.8, 9.8))), cc.callFunc(function () {
                moosnow.entity.hideEntity(logic, null, true);
            })));
        };
        return CocosCoinForm;
    }(CoinForm));

    var TotalForm = /** @class */ (function (_super) {
        __extends(TotalForm, _super);
        function TotalForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.checked = null;
            _this.unchecked = null;
            _this.btnReceive = null;
            _this.levelCoin = null;
            _this.mCheckedVideo = true;
            _this.mLevelCoinNum = 0;
            _this.mLevelShareCoinNum = 0;
            return _this;
        }
        TotalForm.prototype.initForm = function (logic) {
            this.initProperty(logic);
            // this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.closeForm, this)
        };
        TotalForm.prototype.addEvent = function () {
        };
        TotalForm.prototype.removeEvent = function () {
        };
        TotalForm.prototype.onReceive = function () {
            var _this = this;
            if (this.mCheckedVideo) {
                moosnow.platform.showVideo(function (res) {
                    if (res == moosnow.VIDEO_STATUS.END) {
                        _this.openEndForm(_this.mLevelCoinNum * 5);
                    }
                    else if (res == moosnow.VIDEO_STATUS.ERR) {
                        moosnow.ui.showToast(moosnow.VIDEO_MSG.ERR);
                    }
                    else {
                        moosnow.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                    }
                });
            }
            else {
                this.openEndForm(this.mLevelCoinNum);
            }
        };
        TotalForm.prototype.openEndForm = function (coin) {
            moosnow.ui.hideUIForm(UIFormSetting.TotalForm, null);
            moosnow.ui.pushUIForm(UIFormSetting.EndForm, __assign({ coin: coin, level: this.FormData.level, levelShareCoinNum: this.mLevelShareCoinNum }, this.FormData), function () { }, ROOT_CONFIG.UI_ROOT);
        };
        TotalForm.prototype.onShareChange = function () {
            this.mCheckedVideo = !this.mCheckedVideo;
            this.changeUI();
        };
        TotalForm.prototype.changeUI = function () {
        };
        TotalForm.prototype.onShow = function (data) {
            var coin = data.coin, shareCoin = data.shareCoin;
            this.mLevelCoinNum = coin;
            this.mLevelShareCoinNum = shareCoin;
            this.levelCoin.string = "" + Common.formatMoney(this.mLevelCoinNum);
            this.addEvent();
            this.mCheckedVideo = true;
            this.changeUI();
            moosnow.platform.stopRecord();
            moosnow.platform.showBanner();
        };
        TotalForm.prototype.willHide = function () {
            this.removeEvent();
            moosnow.platform.hideBanner();
        };
        return TotalForm;
    }(BaseForm));

    var CocosTotalForm = /** @class */ (function (_super) {
        __extends(CocosTotalForm, _super);
        function CocosTotalForm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CocosTotalForm.prototype.addEvent = function () {
            this.unchecked.node.on(CocosNodeEvent.TOUCH_END, this.onShareChange, this);
            this.btnReceive.node.on(CocosNodeEvent.TOUCH_END, this.onReceive, this);
        };
        CocosTotalForm.prototype.removeEvent = function () {
            this.unchecked.node.off(CocosNodeEvent.TOUCH_END, this.onShareChange, this);
            this.btnReceive.node.off(CocosNodeEvent.TOUCH_END, this.onReceive, this);
        };
        CocosTotalForm.prototype.changeUI = function () {
            if (this.mCheckedVideo) {
                this.checked.node.active = true;
            }
            else {
                this.checked.node.active = false;
            }
        };
        return CocosTotalForm;
    }(TotalForm));

    var ShareFormTT = /** @class */ (function (_super) {
        __extends(ShareFormTT, _super);
        function ShareFormTT() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.btnShare = null;
            _this.btnBack = null;
            _this.txtCoinNum = null;
            _this.isMask = true;
            _this.mLevelShareCoinNum = 0;
            _this.mShareing = false;
            return _this;
        }
        Object.defineProperty(ShareFormTT.prototype, "FormData", {
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        ShareFormTT.prototype.initForm = function (logic) {
            this.initProperty(logic);
            this.addListener();
        };
        ShareFormTT.prototype.addListener = function () {
        };
        ShareFormTT.prototype.removeListener = function () {
        };
        ShareFormTT.prototype.onBack = function () {
            if (this.FormData.hideForm)
                moosnow.ui.hideUIForm(UIFormSetting.ShareForm, null);
            if (this.FormData && this.FormData.callback)
                this.FormData.callback();
        };
        ShareFormTT.prototype.onShow = function () {
            this.btnShare.active = true;
            this.mLevelShareCoinNum = this.FormData.shareCoinNum;
            this.txtCoinNum.string = "" + Common.formatMoney(this.mLevelShareCoinNum);
            moosnow.platform.stopRecord();
        };
        ShareFormTT.prototype.onShareVideo = function () {
            var _this = this;
            if (this.mShareing)
                return;
            this.mShareing = true;
            moosnow.http.getAllConfig(function (res) {
                if (res) {
                    if (res.shareFormVideo == 1) {
                        _this.onVideo();
                    }
                    else if (res.shareFormVideo == 2) {
                        _this.onShare();
                    }
                    else {
                        var precent = res && res.shareFormVideoPrecent ? parseFloat(res.shareFormVideoPrecent) : 0.5;
                        if (Common.randomNumBoth(0, 100) / 100.0 < precent) {
                            _this.onVideo();
                        }
                        else
                            _this.onShare();
                    }
                }
                else {
                    _this.onVideo();
                }
            });
        };
        ShareFormTT.prototype.onVideo = function () {
            var _this = this;
            moosnow.platform.showVideo(function (res) {
                _this.mShareing = false;
                if (res == moosnow.VIDEO_STATUS.END) {
                    if (_this.FormData.hideForm)
                        moosnow.ui.hideUIForm(UIFormSetting.ShareForm, null);
                    if (_this.FormData && _this.FormData.videoCallback)
                        _this.FormData.videoCallback();
                }
                else if (res == moosnow.VIDEO_STATUS.NOTEND) {
                    moosnow.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
                }
                else {
                    moosnow.ui.showToast(moosnow.VIDEO_MSG.ERR);
                }
            });
        };
        ShareFormTT.prototype.onShare = function () {
            var _this = this;
            moosnow.platform.share({
                channel: moosnow.SHARE_CHANNEL.VIDEO
            }, function (res) {
                _this.mShareing = false;
                if (res) {
                    if (_this.FormData.hideForm)
                        moosnow.ui.hideUIForm(UIFormSetting.ShareForm, null);
                    if (_this.FormData && _this.FormData.shareCallback)
                        _this.FormData.shareCallback(res);
                }
                else {
                    moosnow.ui.showToast("分享未完成");
                }
                console.log('分享结束', res);
            });
        };
        return ShareFormTT;
    }(BaseForm));

    var CocosShareFormTT = /** @class */ (function (_super) {
        __extends(CocosShareFormTT, _super);
        function CocosShareFormTT() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CocosShareFormTT.prototype.addListener = function () {
            this.btnBack.on(CocosNodeEvent.TOUCH_END, this.onBack, this);
            this.btnShare.on(CocosNodeEvent.TOUCH_END, this.onShareVideo, this);
        };
        CocosShareFormTT.prototype.removeListener = function () {
            this.btnBack.off(CocosNodeEvent.TOUCH_END, this.onBack, this);
            this.btnShare.off(CocosNodeEvent.TOUCH_END, this.onShareVideo, this);
        };
        return CocosShareFormTT;
    }(ShareFormTT));

    var AdInviteBox = /** @class */ (function (_super) {
        __extends(AdInviteBox, _super);
        function AdInviteBox() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.logo = null;
            _this.gameName = null;
            _this.userName = null;
            _this.btnConfirm = null;
            _this.btnCancel = null;
            _this.url = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/Avatar";
            return _this;
        }
        AdInviteBox.prototype.willShow = function (data) {
            var _this = this;
            _super.prototype.willShow.call(this, data);
            this.addListener();
            moosnow.http.request(this.url + "/avatar.json", {}, "GET", function (res) {
                var userName = res.name[Common.randomNumBoth(0, res.name.length - 1)];
                var logo = Common.randomNumBoth(res.logo[0], res.logo[1]);
                moosnow.ad.getAd(function (ad) {
                    var idx = Common.randomNumBoth(0, ad.indexLeft.length - 1);
                    var adRow = ad.indexLeft[idx];
                    _this.initBox(userName, _this.url + "/" + logo + ".png", adRow.title);
                    _this.mCurrentAdRow = adRow;
                });
            });
            moosnow.http.getAllConfig(function (res) {
                if (res) {
                    var inviteDelayClose = isNaN(res.inviteDelayClose) ? 0 : parseFloat(res.inviteDelayClose);
                    if (inviteDelayClose > 0) {
                        _this.unscheduleOnce(_this.onCancel);
                        _this.scheduleOnce(_this.onCancel, inviteDelayClose);
                    }
                }
            });
        };
        AdInviteBox.prototype.willHide = function () {
            this.unscheduleOnce(this.onCancel);
            this.removeListener();
        };
        AdInviteBox.prototype.initBox = function (userName, logo, gameName) {
        };
        AdInviteBox.prototype.addListener = function () {
        };
        AdInviteBox.prototype.removeListener = function () {
        };
        AdInviteBox.prototype.onConfirm = function () {
            this.onCancel();
            moosnow.platform.navigate2Mini(this.mCurrentAdRow);
        };
        AdInviteBox.prototype.onCancel = function () {
            moosnow.entity.hideAllEntity("inviteBox", null);
        };
        return AdInviteBox;
    }(BaseLogic));

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

    var CocosAdInviteBox = /** @class */ (function (_super) {
        __extends(CocosAdInviteBox, _super);
        function CocosAdInviteBox() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CocosAdInviteBox.prototype.addListener = function () {
            this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.onConfirm, this);
            this.btnCancel.on(CocosNodeEvent.TOUCH_END, this.onCancel, this);
        };
        CocosAdInviteBox.prototype.removeListener = function () {
            this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.onConfirm, this);
            this.btnCancel.off(CocosNodeEvent.TOUCH_END, this.onCancel, this);
        };
        CocosAdInviteBox.prototype.initBox = function (userName, logo, gameName) {
            var _this = this;
            cc.loader.load(logo, function (err, tex) {
                if (err)
                    return;
                var spriteFrame = new cc.SpriteFrame(tex);
                _this.logo.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            this.userName.string = Common.format(MSG.INVITE_PLAY_USER, userName);
            this.gameName.string = gameName;
        };
        return CocosAdInviteBox;
    }(AdInviteBox));

    /**
     * 页面逻辑控制
     */
    var LogicControl = /** @class */ (function () {
        function LogicControl() {
        }
        /**
         * 返回一个AdViewItem实例
         */
        LogicControl.prototype.newViewItem = function () {
            return new CocosAdViewItem();
        };
        ;
        Object.defineProperty(LogicControl.prototype, "inviteBox", {
            get: function () {
                if (!this.mAdInviteBox)
                    this.mAdInviteBox = new CocosAdInviteBox();
                return this.mAdInviteBox;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(LogicControl.prototype, "adForm", {
            get: function () {
                if (!this.mAdForm)
                    this.mAdForm = new CocosAdForm();
                return this.mAdForm;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(LogicControl.prototype, "adFormQQ", {
            get: function () {
                if (!this.mAdForm)
                    this.mAdForm = new CocosAdForm();
                return this.mAdFormQQ;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(LogicControl.prototype, "mistouchForm", {
            get: function () {
                if (!this.mMistouchForm)
                    this.mMistouchForm = new CocosMistouchForm();
                return this.mMistouchForm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LogicControl.prototype, "mistouchFormTT", {
            get: function () {
                if (!this.mMistouchFormTT)
                    this.mMistouchFormTT = new CocosMistouchFormTT();
                return this.mMistouchFormTT;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LogicControl.prototype, "mistouchFormQQ", {
            get: function () {
                if (!this.mMistouchFormQQ)
                    this.mMistouchFormQQ = new CocosMistouchFormQQ();
                return this.mMistouchFormQQ;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LogicControl.prototype, "prizeForm", {
            get: function () {
                if (!this.mPrizeForm)
                    this.mPrizeForm = new CocosPrizeForm();
                return this.mPrizeForm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LogicControl.prototype, "prizeFormTT", {
            get: function () {
                if (!this.mPrizeFormTT)
                    this.mPrizeFormTT = new CocosPrizeFormTT();
                return this.mPrizeFormTT;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LogicControl.prototype, "coinForm", {
            /**
            * 金币
            */
            get: function () {
                if (!this.mCoinForm)
                    this.mCoinForm = new CocosCoinForm();
                return this.mCoinForm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LogicControl.prototype, "totalForm", {
            /**
            * 金币
            */
            get: function () {
                if (!this.mTotalForm)
                    this.mTotalForm = new CocosTotalForm();
                return this.mTotalForm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LogicControl.prototype, "shareFormTT", {
            /**
             * 分享
             */
            get: function () {
                if (!this.mShareForm)
                    this.mShareForm = new CocosShareFormTT();
                return this.mShareForm;
            },
            enumerable: true,
            configurable: true
        });
        return LogicControl;
    }());

    /**
     * 广告结果
     */
    var UIForm = /** @class */ (function () {
        function UIForm() {
            // showOptions.create(showTotalOptions)
            // console.log('showTotalOptions', showOptions.create(showTotalOptions))
            this.mLoadedAdFrom = false;
            // showOptions.create(showEndOptions)
            // showOptions.create(showTouchOptions)
            // showOptions.create(showPrizeOptions)
            // showOptions.create(showShareOptions)
        }
        /**
         * Toast消息
         * @param msg  消息内容
         */
        UIForm.prototype.showToast = function (msg) {
            moosnow.ui.showToast(msg);
        };
        /**
         * 预加载广告
         */
        UIForm.prototype.preloadAd = function () {
            moosnow.ui.pushUIForm(UIFormSetting.AdForm, { showAd: moosnow.AD_POSITION.NONE }, null, ROOT_CONFIG.UI_ROOT);
        };
        /**
         * 显示广告
         * @param adType 广告类型
         * @param callback  有返回按钮时的回调
         * @param zIndex  层级
         */
        UIForm.prototype.showAd = function (adType, callback, zIndex) {
            var _this = this;
            if (adType === void 0) { adType = AD_POSITION.NONE; }
            if (zIndex === void 0) { zIndex = 999; }
            //
            if (moosnow.getAppPlatform() == moosnow.APP_PLATFORM.BYTEDANCE && moosnow.platform.isIphone()) {
                console.log('头条iphone 不显示广告');
                return;
            }
            if (!this.mLoadedAdFrom) {
                moosnow.ui.pushUIForm(UIFormSetting.AdForm, { showAd: moosnow.AD_POSITION.NONE }, function () {
                    _this.mLoadedAdFrom = true;
                    var adForm = moosnow.ui.getUIFrom(UIFormSetting.AdForm);
                    adForm.node.zIndex = zIndex;
                    moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback: callback, zIndex: zIndex });
                }, ROOT_CONFIG.UI_ROOT);
            }
            else {
                moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback: callback, zIndex: zIndex });
            }
        };
        /**
         * 金币动画
         * @param options
         */
        UIForm.prototype.showCoin = function (options) {
            moosnow.ui.pushUIForm(UIFormSetting.CoinForm, options, function () { }, ROOT_CONFIG.UI_ROOT);
        };
        /**
         * 显示狂点页面
         * @param callback 点击完成回调
         * @param type 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
         */
        UIForm.prototype.showMistouch = function (options) {
            moosnow.ui.pushUIForm(UIFormSetting.MistouchForm, options, function () {
            }, ROOT_CONFIG.UI_ROOT);
        };
        /**
         * 显示奖励
         * @param style 金币动画
         * @param baseNum 视频奖励领取的倍数
         * @param showCoinAnim 显示金币动画
         * @param callback
         */
        UIForm.prototype.showPrize = function (options) {
            moosnow.ui.pushUIForm(UIFormSetting.PrizeForm, options, function () {
            }, ROOT_CONFIG.UI_ROOT);
        };
        /**
         * 显示结算统计页
         * @param coinNum
         * @param callback
         */
        UIForm.prototype.showTotal = function (options) {
            moosnow.ui.pushUIForm(UIFormSetting.TotalForm, options, function () { }, ROOT_CONFIG.UI_ROOT);
        };
        /**
        * 显示结算统计页
        * @param coinNum
        * @param callback
        */
        UIForm.prototype.showEnd = function (options) {
            moosnow.ui.pushUIForm(UIFormSetting.EndForm, options, function () { }, ROOT_CONFIG.UI_ROOT);
        };
        /**
         *  showShare
         */
        UIForm.prototype.showShare = function (options) {
            moosnow.ui.pushUIForm(UIFormSetting.ShareForm, options, function () { }, ROOT_CONFIG.UI_ROOT);
        };
        return UIForm;
    }());

    var DelayMove = /** @class */ (function (_super) {
        __extends(DelayMove, _super);
        function DelayMove() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moveNode = null;
            _this.distince = -100;
            _this.showBanner = true;
            _this.pos1 = cc.Vec2.ZERO;
            _this.pos2 = cc.Vec2.ZERO;
            _this.mMistouchPosNum = 0;
            _this.mMistouchPosSecond = 2;
            return _this;
        }
        DelayMove.prototype.initPos = function () {
        };
        /**
         * 延迟移动
         * @param moveNode  需要移动的节点
         * @param distince 移动的距离
         * @param showBanner 移动后是否显示 banner
         */
        DelayMove.prototype.move = function (moveNode, distince, showBanner) {
            var _this = this;
            this.moveNode = moveNode;
            this.distince = distince;
            this.showBanner = showBanner;
            this.initPos();
            var count = moosnow.data.getCurrentMisTouchCount();
            moosnow.data.setCurrentMisTouchCount(count + 1);
            moosnow.http.getAllConfig(function (res) {
                if (!isNaN(res.mistouchPosSecond))
                    _this.mMistouchPosSecond = parseFloat(res.mistouchPosSecond);
                moosnow.http.getMistouchPosNum(function (num) {
                    _this.mMistouchPosNum = num;
                    _this.movePosition();
                });
            });
        };
        DelayMove.prototype.setPosition = function (node, visible, x, y) {
        };
        DelayMove.prototype.movePosition = function () {
            var _this = this;
            if (this.mMistouchPosNum == 0) {
                this.setPosition(this.moveNode, true, this.pos1.x, this.pos1.y);
                if (this.showBanner)
                    moosnow.platform.showBanner();
            }
            else {
                var count = moosnow.data.getCurrentMisTouchCount();
                if (count % this.mMistouchPosNum == 0) {
                    var tempButtom_1 = this.copyNode();
                    this.scheduleOnce(function () {
                        _this.onPosCallback(tempButtom_1);
                    }, this.mMistouchPosSecond);
                }
            }
        };
        DelayMove.prototype.copyNode = function () {
        };
        DelayMove.prototype.onPosCallback = function (tempButtom) {
            if (this.showBanner)
                moosnow.platform.showBanner();
            this.removeTemp(tempButtom);
            this.setPosition(this.moveNode, true, this.pos1.x, this.pos1.y);
            this.unscheduleOnce(this.onPosCallback);
        };
        DelayMove.prototype.removeTemp = function (tempButtom) {
        };
        return DelayMove;
    }(BaseModule));

    var CocosDelayMove = /** @class */ (function (_super) {
        __extends(CocosDelayMove, _super);
        function CocosDelayMove() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moveNode = null;
            _this.distince = -100;
            _this.showBanner = true;
            _this.pos1 = cc.Vec2.ZERO;
            _this.pos2 = cc.Vec2.ZERO;
            return _this;
        }
        CocosDelayMove.prototype.initPos = function () {
            if (this.pos1.x == 0 && this.pos1.y == 0) {
                this.pos1 = this.moveNode.position.clone();
                this.pos2 = this.pos1.add(new cc.Vec2(0, this.distince));
            }
            this.moveNode.active = false;
        };
        CocosDelayMove.prototype.setPosition = function (node, visible, x, y) {
            node.active = visible;
            node.x = x;
            node.y = y;
        };
        CocosDelayMove.prototype.copyNode = function () {
            var tempButtom = cc.instantiate(this.moveNode);
            tempButtom.active = true;
            this.moveNode.parent.addChild(tempButtom);
            tempButtom.x = this.pos2.x;
            tempButtom.y = this.pos2.y;
            return tempButtom;
        };
        CocosDelayMove.prototype.removeTemp = function (tempButtom) {
            tempButtom.active = false;
            tempButtom.removeFromParent();
            tempButtom.destroy();
        };
        return CocosDelayMove;
    }(DelayMove));

    var DelayShow = /** @class */ (function (_super) {
        __extends(DelayShow, _super);
        function DelayShow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.mNode = null;
            return _this;
        }
        DelayShow.prototype.show = function (node, delayTime) {
            if (delayTime === void 0) { delayTime = 3; }
            if (!node)
                return;
            this.mNode = node;
            this.hideNode();
            this.schedule(this.showNode, delayTime);
        };
        DelayShow.prototype.hide = function (node, delayTime) {
            if (delayTime === void 0) { delayTime = 3; }
            this.mNode = node;
            this.schedule(this.hideNode, delayTime);
        };
        DelayShow.prototype.clear = function () {
            this.unschedule(this.showNode);
            this.unschedule(this.hideNode);
        };
        DelayShow.prototype.hideNode = function () {
            this.mNode.active = false;
        };
        DelayShow.prototype.showNode = function () {
            this.mNode.active = true;
            this.unschedule(this.showNode);
        };
        return DelayShow;
    }(BaseModule));

    var Delay = /** @class */ (function (_super) {
        __extends(Delay, _super);
        function Delay() {
            return _super.call(this) || this;
        }
        Object.defineProperty(Delay.prototype, "DelayMove", {
            get: function () {
                if (!this.mDelayMove) {
                    this.mDelayMove = new CocosDelayMove();
                }
                return this.mDelayMove;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Delay.prototype, "DelayShow", {
            get: function () {
                if (!this.mDelayShow) {
                    this.mDelayShow = new DelayShow();
                }
                return this.mDelayShow;
            },
            enumerable: true,
            configurable: true
        });
        return Delay;
    }(BaseModule));

    var showOptions = /** @class */ (function () {
        function showOptions() {
            this._hideForm = true;
            /**
             * 扩展参数
             */
            this.extraData = {};
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
     * 唤起结算页参数
     */
    var showEndOptions = /** @class */ (function (_super) {
        __extends(showEndOptions, _super);
        function showEndOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // /**
            //  * 实例化参数
            //  */
            // public static create(): showEndOptions {
            //     return new showEndOptions();
            // }
            /**
             * 金币数量
             */
            _this.coinNum = 0;
            /**
            * 金币数量
            */
            _this.videoNum = 0;
            /**
            * 分享得到金币数量
            */
            _this.shareCoinNum = 0;
            /**
            * 通关成功 or 通关失败
            */
            _this.isWin = true;
            /**
             * 结束时的游戏关卡
             */
            _this.level = "1";
            return _this;
        }
        return showEndOptions;
    }(showOptions));

    /**
     * 奖励页参数
     */
    var showPrizeOptions = /** @class */ (function (_super) {
        __extends(showPrizeOptions, _super);
        function showPrizeOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // /**
            //  * 实例化参数
            //  */
            // public static create(): showPrizeOptions {
            //     return new showPrizeOptions();
            // }
            /**
             * 是否显示金币动画
             */
            _this.showCoinAnim = true;
            /**
             * 显示金币动画时，金币动画的参数
             */
            _this.coinOptions = null;
            /**
             *
             */
            _this.baseNum = 1;
            /**
             * 点击完成回调
             */
            _this.callback = null;
            /**
             * 分享完成回调
             */
            _this.shareCallback = null;
            /**
             * 看完视频回调
             */
            _this.videoCallback = null;
            return _this;
        }
        return showPrizeOptions;
    }(showOptions));

    /**
     * 奖励页参数
     */
    var showShareOptions = /** @class */ (function (_super) {
        __extends(showShareOptions, _super);
        function showShareOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // /**
            //  * 实例化参数
            //  */
            // public static create(): showShareOptions {
            //     return new showShareOptions();
            // }
            /**
             * 分享将获得金币数量
             */
            _this.shareCoinNum = 0;
            return _this;
        }
        return showShareOptions;
    }(showOptions));

    /**
     * 唤起结算页参数
     */
    var showTotalOptions = /** @class */ (function (_super) {
        __extends(showTotalOptions, _super);
        function showTotalOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // /**
            // * 实例化参数
            // */
            // public static create(): showTotalOptions {
            //     return new showTotalOptions();
            // }
            /**
             * 金币数量
             */
            _this.coinNum = 0;
            /**
            * 金币数量
            */
            _this.videoNum = 0;
            /**
            * 分享得到金币数量
            */
            _this.shareCoinNum = 0;
            return _this;
        }
        return showTotalOptions;
    }(showOptions));

    var showTouchOptions = /** @class */ (function (_super) {
        __extends(showTouchOptions, _super);
        function showTouchOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // /**
            // * 实例化参数
            // */
            // public static create(): showTouchOptions {
            //     return new showTouchOptions();
            // }
            /**
             * 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
             */
            _this.type = 1;
            return _this;
        }
        return showTouchOptions;
    }(showOptions));

    var vectory = /** @class */ (function () {
        function vectory() {
            this.x = 0.0;
            this.y = 0.0;
            this.z = 0.0;
        }
        return vectory;
    }());

    /**
     * 金币飞入动画
     */
    var showCoinOptions = /** @class */ (function (_super) {
        __extends(showCoinOptions, _super);
        function showCoinOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * Y方向的随机范围
             */
            _this.randomY = 100;
            /**
            * X方向的随机范围
            */
            _this.randomX = 100;
            /**
             * 金币图片数量
             */
            _this.imgNum = 30;
            /**
             * 金币数量
             */
            _this.coinNum = 0;
            /**
             * 开始位置
             */
            _this.starVec = new vectory();
            /**
             * 结束位置
             */
            _this.endVec = new vectory();
            return _this;
        }
        return showCoinOptions;
    }(showOptions));

    var moosnowUI = /** @class */ (function () {
        function moosnowUI() {
            this.showOptions = {
                endOptions: showEndOptions,
                prizeOptions: showPrizeOptions,
                shareOptions: showShareOptions,
                totalOptions: showTotalOptions,
                touchOptions: showTouchOptions,
                coinOptions: showCoinOptions
            };
            /**
             * form UI 操作
             */
            this.mForm = new UIForm();
            /**
             * form表单控制
             */
            this.mControl = new LogicControl();
            this.mEntity = new BaseEntityModule();
            this.mDelay = new Delay();
            if (!window["moosnow"]) {
                console.log('没有引入主SDK');
                return;
            }
            this.initUI();
            this.initEntity();
            window["moosnow"].ui = this.ui;
            window["moosnow"].entity = this.entity;
            window["moosnow"].form = this.form;
            window["moosnow"].control = this.control;
            window["moosnow"].delay = this.delay;
            window["moosnow"].formSetting = UIFormSetting;
        }
        moosnowUI.prototype.initUI = function () {
            this.mUi = new CocosUIModule();
        };
        moosnowUI.prototype.initEntity = function () {
            this.mEntity = new CocosEntityModule();
        };
        Object.defineProperty(moosnowUI.prototype, "ui", {
            get: function () {
                return this.mUi;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowUI.prototype, "form", {
            get: function () {
                return this.mForm;
            },
            set: function (value) {
                this.mForm = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowUI.prototype, "control", {
            get: function () {
                return this.mControl;
            },
            set: function (value) {
                this.mControl = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowUI.prototype, "entity", {
            get: function () {
                return this.mEntity;
            },
            set: function (value) {
                this.mEntity = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowUI.prototype, "delay", {
            get: function () {
                return this.mDelay;
            },
            set: function (value) {
                this.mDelay = value;
            },
            enumerable: true,
            configurable: true
        });
        return moosnowUI;
    }());
    new moosnowUI();

}());
