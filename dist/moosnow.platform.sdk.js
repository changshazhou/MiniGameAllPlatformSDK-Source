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

    var MathUtils = /** @class */ (function () {
        function MathUtils() {
        }
        MathUtils.randomNumBoth = function (Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
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
        Common.isWeChat = function () {
            return !!window["wx"];
        };
        Common.isQQPlay = function () {
            return false;
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
        Common.getEngine = function (instance) {
            if (window[ENGINE_TYPE.COCOS] && typeof instance != "string") {
                return ENGINE_TYPE.COCOS;
            }
            else if (window[ENGINE_TYPE.LAYA] && typeof instance != "string") {
                return ENGINE_TYPE.LAYA;
            }
            else
                return ENGINE_TYPE.NONE;
        };
        Common.popOpenAnim = function (node, callback) {
            if (this.getEngine(node) == ENGINE_TYPE.COCOS) {
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
            if (this.getEngine(node) == ENGINE_TYPE.COCOS) {
                node.scale = 1;
                node.runAction(cc.sequence(cc.scaleTo(0.1, 0, 0), cc.callFunc(function () {
                    if (callback)
                        callback();
                }, this)));
                return;
            }
            callback();
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
        }
        BaseModule.prototype.schedule = function (callback, time) {
            var self = this;
            var id = setInterval(function () {
                if (callback)
                    callback.apply(self);
            }, time * 1000);
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
                if (this._findComponentByName(logic.constructor, classname)) {
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
        EventType.ON_PLATFORM_SHOW = "ON_PLATFORM_SHOW";
        EventType.ON_PLATFORM_HIDE = "ON_PLATFORM_HIDE";
        EventType.ON_BANNER_HIDE = "ON_BANNER_HIDE";
        EventType.ON_AD_SHOW = "ON_AD_SHOW";
        EventType.AD_VIEW_CHANGE = "AD_VIEW_CHANGE";
        EventType.AD_VIEW_REFRESH = "AD_VIEW_REFRESH";
        EventType.COIN_CHANGED = "COIN_CHANGED";
        return EventType;
    }());

    // var videoLoading: boolean = false;
    // var videoCb = null;
    var PlatformModule = /** @class */ (function (_super) {
        __extends(PlatformModule, _super);
        function PlatformModule() {
            var _this = _super.call(this) || this;
            _this.baseUrl = "https://api.liteplay.com.cn/";
            _this.currentShareCallback = null;
            _this.shareFail = null;
            _this.vibrateOn = false;
            _this.systemInfo = null;
            _this.banner = null;
            _this.video = null;
            _this.inter = null;
            _this.native = null;
            _this.box = null;
            _this.platformName = "wx";
            _this.bannerId = "";
            _this.videoId = "";
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
            _this.bannerCb = null;
            _this.bannerPosition = BANNER_POSITION.BOTTOM;
            _this.bannerStyle = null;
            _this.isBannerShow = false;
            _this.videoCb = null;
            _this.videoLoading = false;
            _this.interShowCount = 0;
            _this.interShowCountLimit = 3;
            _this.isInterLoaded = false;
            _this.nativeAdResult = null;
            _this.nativeCb = null;
            _this.nativeLoading = false;
            _this.record = null;
            _this.shareInfoArr = [];
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
            var winCfg = window["moosnowConfig"];
            if (Common.platform == PlatformType.WX)
                this.moosnowConfig = winCfg.wx;
            else if (Common.platform == PlatformType.OPPO || Common.platform == PlatformType.OPPO_ZS)
                this.moosnowConfig = winCfg.oppo;
            else if (Common.platform == PlatformType.VIVO)
                this.moosnowConfig = winCfg.vivo;
            else if (Common.platform == PlatformType.QQ)
                this.moosnowConfig = winCfg.qq;
            else if (Common.platform == PlatformType.BAIDU)
                this.moosnowConfig = winCfg.bd;
            else if (Common.platform == PlatformType.BYTEDANCE)
                this.moosnowConfig = winCfg.byte;
            else
                this.moosnowConfig = winCfg.wx;
            this.bannerId = this.moosnowConfig["bannerId"];
            this.videoId = this.moosnowConfig["videoId"];
            this.interId = this.moosnowConfig["interId"];
            this.boxId = this.moosnowConfig["boxId"];
            this.nativeId = this.moosnowConfig["nativeId"];
            console.log('moosnowConfig ', JSON.stringify(this.moosnowConfig));
        };
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
         * 检查当前版本的导出广告是否开启
         * @param {string} version 版本号 为了兼容旧版本SDK的参数，目前已无作用，SDK会取moosnowConfig 中的version 来判断
         * @param {*} callback
         * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
         */
        PlatformModule.prototype.checkVersion = function (version, callback) {
            callback(true);
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
            console.log('跳转数据：', row);
            if (Date.now() - this.prevNavigate < 300) {
                console.log(' 跳转太频繁 >>>>>>>>>>>>>>>>>>>>> ');
                return;
            }
            this.prevNavigate = Date.now();
            if (!window[this.platformName]) {
                if (success)
                    success();
                return;
            }
            var appid = row.appid, path = row.path, extraData = row.extraData;
            extraData = extraData || {};
            window[this.platformName].navigateToMiniProgram({
                appId: appid,
                path: path,
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
                    console.log('navigateToMini fail ', err, ' fail callback ', !!fail);
                    if (fail)
                        fail();
                },
                complete: function () {
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
        PlatformModule.prototype.vibrateShort = function () {
            if (!window[this.platformName])
                return;
            if (window[this.platformName] && !window[this.platformName].vibrateShort)
                return;
            window[this.platformName].vibrateShort();
        };
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
            if (!window[this.platformName])
                return;
            if (this.systemInfo == null) {
                if (window[this.platformName].getSystemInfoSync)
                    this.systemInfo = window[this.platformName].getSystemInfoSync();
                else
                    this.systemInfo = {};
                console.log('设备信息', this.systemInfo);
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
                success: null,
                fail: null,
                complete: null
            });
            if (window[this.platformName].onShareAppMessage)
                window[this.platformName].onShareAppMessage(function () {
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
         */
        PlatformModule.prototype.share = function (query, callback) {
            if (query === void 0) { query = {}; }
            if (!window[this.platformName]) {
                if (callback)
                    callback(true);
            }
            this.currentShareCallback = callback;
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
            if (!this.record) {
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
            if (!this.record) {
                if (callback)
                    callback(false);
                return;
            }
        };
        PlatformModule.prototype.pauseRecord = function () {
        };
        PlatformModule.prototype.resumeRecord = function () {
        };
        //-----------------注册事件------------------
        /**
         * 注册微信各种回调
         */
        PlatformModule.prototype._regisiterWXCallback = function () {
            console.log('register callback ', this.platformName, !!window[this.platformName]);
            if (!window[this.platformName])
                return;
            this._regisiterOnShow();
            this._regisiterOnHide();
        };
        PlatformModule.prototype._regisiterOnShow = function () {
            console.log('register app on show ', !!window[this.platformName].onShow);
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
            //Lite.log.log('WX_show:', res);
            moosnow.event.sendEventImmediately(EventType.ON_PLATFORM_SHOW, res);
        };
        PlatformModule.prototype._regisiterOnHide = function () {
            console.log('register app on hide ', !!window[this.platformName].onShow);
            if (!window[this.platformName].onHide)
                return;
            var self = this;
            window[this.platformName].onHide(self._onHideCallback.bind(this));
        };
        PlatformModule.prototype._onHideCallback = function (res) {
            //Lite.log.log('WX_hide');
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
            var left = (windowWidth - this.bannerWidth) / 2;
            if (Common.isEmpty(this.bannerId)) {
                console.warn('banner id is null');
                return;
            }
            var banner = window[this.platformName].createBannerAd({
                adUnitId: this.bannerId,
                style: {
                    top: 0,
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
                console.log('banner位置或大小被重新设置 ', this.banner.style, 'set top ', top);
            }
        };
        /**
         *
         * @param callback 点击回调
         * @param position banner的位置，默认底部
         * @param style 自定义样式
         */
        PlatformModule.prototype.showBanner = function (callback, position, style) {
            var _this = this;
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            // if (this.isBannerShow)
            //     return;
            console.log('显示banner');
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
            if (this.banner) {
                // let wxsys = this.getSystemInfoSync();
                // let windowWidth = wxsys.windowWidth;
                // let windowHeight = wxsys.windowHeight;
                // if (position == BannerPosition.Bottom) {
                // }
                // this.banner.top = 1
                console.log('show banner style ', this.banner.style);
                // this.hideBanner();
                this.banner.hide();
                this._resetBanenrStyle({
                    width: this.banner.style.width,
                    height: this.banner.style.realHeight
                });
                this.banner.show().then(function () {
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
         *
         */
        PlatformModule.prototype.showAutoBanner = function () {
            var _this = this;
            console.log('执行自动显示和隐藏Banner功能');
            moosnow.http.getAllConfig(function (res) {
                if (res && res.gameBanner == 1) {
                    moosnow.platform.showBanner();
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
        PlatformModule.prototype.hideBanner = function () {
            console.log('隐藏banner');
            if (!this.isBannerShow)
                return;
            this.isBannerShow = false;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerShowCount++;
            if (this.banner) {
                if (this.bannerShowCount >= this.bannerShowCountLimit) {
                    console.log('banner destroy');
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
            if (Common.isEmpty(this.videoId)) {
                console.warn(' video id is null');
                moosnow.platform.videoCb(VIDEO_STATUS.END);
                return;
            }
            if (this.video) {
                this.video.offClose(this._onVideoClose);
                this.video.offError(this._onVideoError);
                this.video.offLoad(this._onVideoLoad);
            }
            else {
                this.video = window[this.platformName].createRewardedVideoAd({
                    adUnitId: this.videoId
                });
                if (!this.video) {
                    console.warn('创建视频广告失败');
                    return;
                }
            }
            this.video.onError(this._onVideoError);
            this.video.onClose(this._onVideoClose);
            this.video.onLoad(this._onVideoLoad);
            moosnow.platform.videoLoading = true;
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
            console.log('加载video失败回调', msg, code);
            moosnow.platform.videoLoading = false;
            if (moosnow.platform.videoCb) {
                moosnow.platform.videoCb(VIDEO_STATUS.ERR);
                moosnow.platform.videoCb = null;
            }
        };
        PlatformModule.prototype._onVideoClose = function (isEnd) {
            console.log('video结束回调', isEnd.isEnded);
            moosnow.platform.videoLoading = false;
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
            console.log('加载video成功回调');
            moosnow.platform.videoLoading = false;
        };
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
                console.warn('插屏广告ID为空，系统不加载');
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
            _this.baseUrl = "https://api.liteplay.com.cn/";
            _this.versionRet = null;
            _this._regisiterWXCallback();
            _this.initBanner();
            _this.initInter();
            return _this;
        }
        /**
        * 检查当前版本的导出广告是否开启
        * @param {string} version
        * @param {*} callback
        * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
        */
        WXModule.prototype.checkVersion = function (version, callback) {
            var _this = this;
            if (this.versionRet != null) {
                callback(this.versionRet);
                return;
            }
            else {
                var url = this.baseUrl + 'admin/wx_list/getAppConfig';
                var signParams = {
                    appid: this.moosnowConfig.moosnowAppId,
                };
                var data = signParams;
                moosnow.http.request(url, data, 'POST', function (res) {
                    _this.versionRet = res.data.version != moosnow.platform.moosnowConfig.version;
                    console.log("\u7248\u672C\u68C0\u67E5 \u540E\u53F0\u7248\u672C" + res.data.verson + " \u914D\u7F6E\u6587\u4EF6\u7248\u672C" + moosnow.platform.moosnowConfig.version);
                    console.log("获取广告开关：", _this.versionRet);
                    callback(_this.versionRet);
                }, function () {
                    console.log('checkVersion fail');
                }, function () {
                    console.log('checkVersion complete');
                });
            }
        };
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
                appid: moosnow.platform.moosnowConfig.moosnowAppId,
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
            _this.version = "1.2.4";
            _this.baseUrl = "https://api.liteplay.com.cn/";
            _this.cfgData = null;
            _this.areaData = null;
            if (Common.platform == PlatformType.PC) {
                var versionUrl = 'https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/SDK/version.json?t=' + Date.now();
                _this.request(versionUrl, {}, 'GET', function (res) {
                    if (_this.version < res.version) {
                        console.warn("\u60A8\u7684SDK\u7248\u672C\u53F7[" + _this.version + "]\u4E0D\u662F\u6700\u65B0\u7248\u672C\uFF0C\u8BF7\u5C3D\u5FEB\u5347\u7EA7\uFF0C\u6700\u65B0\u7248\u672C[" + res.version + "]  \u4E0B\u8F7D\u5730\u5740\uFF1A" + res.download);
                        if (!Common.isEmpty(res.memo))
                            console.warn("" + res.memo);
                    }
                });
            }
            _this.mLaunchOptions = moosnow.platform.getLaunchOption();
            return _this;
        }
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
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    var response = xhr.responseText;
                    if (xhr.status >= 200 && xhr.status < 400) {
                        // if (method1 == "JSON") {
                        //     var result = response;
                        // } else {
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
            xhr.open(method, url, true);
            if (method == "POST") {
                xhr.open('POST', url);
                xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
                xhr.send(this._object2Query(data));
            }
            else {
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
         *
         * @param url
         */
        HttpModule.prototype.postData = function (url) {
            var userToken = moosnow.data.getToken();
            if (!Common.isEmpty(userToken) && moosnow.data.getChannelId() != "0" && moosnow.data.getChannelAppId() != "0") {
                try {
                    this.request("" + this.baseUrl + url, {
                        appid: moosnow.platform.moosnowConfig.moosnowAppId,
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
                        stageId: level,
                        stageName: level,
                        userId: moosnow.data.getToken() //用户ID
                    });
                else
                    console.warn('阿拉丁文件未引入');
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
                    stageId: level,
                    stageName: level,
                    userId: moosnow.data.getToken(),
                    event: event,
                    params: {
                        desc: desc //描述
                    }
                });
            else
                console.warn('阿拉丁文件未引入');
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
                console.warn('阿拉丁文件未引入');
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
                        if (disable) {
                            callback(__assign(__assign({}, res), { mistouchNum: 0, mistouchPosNum: 0, bannerShowCountLimit: 1 }));
                        }
                        else {
                            callback(res);
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
                var url = moosnow.platform.moosnowConfig.url + "?t=" + Date.now();
                this.request(url, {}, 'GET', function (res) {
                    _this.cfgData = __assign(__assign({}, Common.deepCopy(res)), { zs_native_click_switch: res && res.lureNative ? res.lureNative : 0, zs_jump_switch: res && res.lureExportAd ? res.lureExportAd : 0 });
                    if (moosnow.platform) {
                        moosnow.platform.bannerShowCountLimit = parseInt(res.bannerShowCountLimit);
                    }
                    callback(_this.cfgData);
                }, function () {
                    callback({
                        mistouchNum: 0,
                        mistouchPosNum: 0,
                        bannerShowCountLimit: 1
                    });
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
                var ipUrl = 'https://api.liteplay.com.cn/admin/wx_config/getLocation';
                this.request(ipUrl, {}, 'GET', function (res2) {
                    _this.areaData = res2;
                    callback(_this.areaData);
                }, function () {
                    callback(null);
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
            if (this.mLaunchOptions) {
                if ([1005, 1007, 1008, 1044].indexOf(this.mLaunchOptions.scene) != -1) {
                    callback(true);
                    console.log('mLaunchOptions', this.mLaunchOptions);
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
            this.request(this.baseUrl + "admin/wx_share/getShare", {
                appid: moosnow.platform.moosnowConfig.moosnowAppId
            }, "POST", function (res) {
                console.log('分享数据', res.data);
                cb(res.data);
                moosnow.platform.initShare(res.data);
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
            _this.baseUrl = "https://api.liteplay.com.cn/";
            _this.versionRet = null;
            _this.bannerWidth = 760;
            _this.bannerHeight = 96;
            _this.interLoadedShow = false;
            _this.prevNavigate = Date.now();
            _this.mIsClickedNative = false;
            _this._regisiterWXCallback();
            _this.initAdService();
            return _this;
        }
        /**
        * 检查当前版本的导出广告是否开启
        * @param {string} version
        * @param {*} callback
        * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
        */
        OPPOModule.prototype.checkVersion = function (version, callback) {
            var _this = this;
            if (this.versionRet != null) {
                callback(this.versionRet);
                return;
            }
            else {
                var url = this.baseUrl + 'admin/wx_list/getAppConfig';
                var signParams = {
                    appid: this.moosnowConfig.moosnowAppId,
                };
                var data = signParams;
                moosnow.http.request(url, data, 'POST', function (res) {
                    _this.versionRet = res.data.version == moosnow.platform.moosnowConfig.version;
                    console.log("\u7248\u672C\u68C0\u67E5 \u540E\u53F0\u7248\u672C" + res.data.version + " \u914D\u7F6E\u6587\u4EF6\u7248\u672C" + moosnow.platform.moosnowConfig.version);
                    console.log("获取广告开关：", _this.versionRet);
                    callback(_this.versionRet);
                }, function () {
                    console.log('checkVersion fail');
                }, function () {
                    console.log('checkVersion complete');
                });
            }
        };
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
            console.log('跳转数据：', row);
            if (Date.now() - this.prevNavigate < 300) {
                console.log(' 跳转太频繁 >>>>>>>>>>>>>>>>>>>>> ');
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
                console.log('版本过低 平台不支持跳转');
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
                console.warn('banner id is null');
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
         *
         * @param callback 点击回调
         * @param position banner的位置，默认底部
         * @param style 自定义样式
         */
        OPPOModule.prototype.showBanner = function (callback, position, style) {
            var _this = this;
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            console.log('显示banner');
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName]) {
                return;
            }
            // this.bannerPosition = position;
            // if (this.banner) {
            //     if (this.bannerPosition != position) {
            //         this.bannerPosition = position;
            //         this.bannerStyle = style;
            //         this.destroyBanner();
            //         this._prepareBanner();
            //         console.log('位置要更换,销毁重建');
            //     }
            // }
            // else {
            //     this.bannerPosition = position;
            //     this.bannerStyle = style;
            //     this.initBanner();
            // }
            if (this.banner) {
                // let wxsys = this.getSystemInfoSync();
                // let windowWidth = wxsys.windowWidth;
                // let windowHeight = wxsys.windowHeight;
                // if (position == BannerPosition.Bottom) {
                // }
                // this.banner.top = 1
                // this.banner.hide();
                // console.log('show banner style 1', this.banner.style)
                // console.log('show banner style 2', this.banner.style)
                // this.banner.hide();
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
                // .then(() => {
                //     this._resetBanenrStyle({
                //         width: this.banner.style.width,
                //         height: this.banner.style.height
                //     });
                // })
            }
            else {
                this.initBanner();
            }
        };
        OPPOModule.prototype.hideBanner = function () {
            console.log('隐藏banner');
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
                    console.warn(' video id is null');
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
            console.log('加载video成功回调');
            moosnow.platform.videoLoading = false;
            if (this.video) {
                this.video.show();
            }
        };
        OPPOModule.prototype.prepareInter = function () {
            if (Common.isEmpty(this.interId)) {
                console.warn('插屏广告ID为空，系统不加载');
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
            console.log("\u52A0\u8F7D\u539F\u751F\u5E7F\u544A\u6210\u529F", res);
            if (res && res.adList && res.adList.length > 0) {
                this.nativeAdResult = res.adList[0];
                if (!Common.isEmpty(this.nativeAdResult.adId)) {
                    console.log("\u4E0A\u62A5\u539F\u751F\u5E7F\u544A");
                    this.native.reportAdShow({
                        adId: this.nativeAdResult.adId
                    });
                }
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(Common.deepCopy(this.nativeAdResult));
                }
            }
            else {
                console.log("\u539F\u751F\u5E7F\u544A\u6570\u636E\u6CA1\u6709\uFF0C\u56DE\u8C03Null");
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
                    console.log("\u539F\u751F\u5E7F\u544A\u52A0\u8F7D\u51FA\u9519 ", err, '使用新ID加载原生广告');
                    this.nativeIdIndex += 1;
                    this._destroyNative();
                    this._prepareNative();
                }
                else {
                    console.log("\u539F\u751F\u5E7F\u544AID\u5DF2\u7ECF\u7528\u5B8C\uFF0C\u672C\u6B21\u6CA1\u6709\u5E7F\u544A");
                    this.nativeIdIndex = 0;
                    if (Common.isFunction(this.nativeCb)) {
                        this.nativeCb(null);
                    }
                }
            }
            else {
                console.log("\u539F\u751F\u5E7F\u544A\u52A0\u8F7D\u51FA\u9519\uFF0C\u672C\u6B21\u6CA1\u6709\u5E7F\u544A", err);
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
            console.log('原生广告销毁');
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
        OPPOModule.prototype.clickNative = function (callback) {
            if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
                this.mClickedNativeCallback = callback;
                this.mIsClickedNative = true;
                console.log('点击了原生广告', this.nativeAdResult.adId);
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
            var url = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/exportConfig/" + moosnow.platform.moosnowConfig.moosnowAppId + ".json?t=" + Date.now();
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
            var url = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/exportConfig/" + moosnow.platform.moosnowConfig.moosnowAppId + ".json?t=" + Date.now();
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
                appid: moosnow.platform.moosnowConfig.moosnowAppId,
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
            _this.bannerWidth = 208;
            _this.mBannerLoaded = false;
            _this._regisiterWXCallback();
            _this.initBanner();
            _this.initRecord();
            _this.initInter();
            return _this;
        }
        TTModule.prototype.prepareInter = function () {
            if (!window[this.platformName])
                return;
            if (typeof window[this.platformName].createInterstitialAd != "function")
                return;
            if (Common.isEmpty(this.interId)) {
                console.warn('插屏广告ID为空，系统不加载');
                return;
            }
            this.inter = window[this.platformName].createInterstitialAd({
                adUnitId: this.interId
            });
            this.inter.onLoad(this._onInterLoad.bind(this));
            this.inter.onClose(this._onInterClose.bind(this));
            this.inter.load();
        };
        TTModule.prototype._bottomCenterBanner = function (size) {
            if (this.bannerWidth != size.width) {
                var wxsys = this.getSystemInfoSync();
                var windowWidth = wxsys.windowWidth;
                var windowHeight = wxsys.windowHeight;
                this.bannerWidth = size.width;
                this.bannerHeigth = (this.bannerWidth / 16) * 9; // 根据系统约定尺寸计算出广告高度
                var top_1 = windowHeight - this.bannerHeigth - 10;
                console.log('bannerWidth ', this.bannerWidth, 'bannerHeigth', this.bannerHeigth, 'top', top_1);
                if (this.banner) {
                    this.banner.style.top = top_1;
                    this.banner.style.left = (windowWidth - size.width) / 2;
                }
            }
        };
        TTModule.prototype.initRecord = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].getGameRecorderManager)
                return;
            // if (!this.isDouyin()) return;
            this.record = window[this.platformName].getGameRecorderManager();
        };
        TTModule.prototype.clipRecord = function () {
            if (!this.record)
                return;
            this.recordNumber++;
            console.log('clipRecord', this.recordNumber);
            this.record.recordClip({
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
            if (!this.record) {
                if (callback)
                    callback(false);
                return;
            }
            this.recordNumber = 0;
            this.recordCb = null;
            this.recordRes = null;
            this.record.onStart(function (res) {
                console.log('record onStart');
                if (callback)
                    callback(res);
            });
            var recordRes = this.recordRes;
            this.record.onStop(function (res) {
                console.log('on stop ', res);
                if (_this.recordNumber >= 4) {
                    _this.record.clipVideo({
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
            this.record.start({
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
            if (!this.record) {
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
                this.record.stop();
                console.log('record stop  ', this.recordRes);
            }
        };
        TTModule.prototype.pauseRecord = function () {
            if (this.record)
                this.record.pause();
        };
        TTModule.prototype.resumeRecord = function () {
            if (this.record)
                this.record.resume();
        };
        /**
         * 分享
         * @param query 分享参数 { channel:moosnow.SHARE_CHANNEL.LINK }
         * SHARE_CHANNEL.LINK, SHARE_CHANNEL.ARTICLE, SHARE_CHANNEL.TOKEN, SHARE_CHANNEL.VIDEO 可选 仅字节跳动有效
         * @param callback 分享成功回调参数 = true, 分享失败回调参数 = false,
         */
        TTModule.prototype.share = function (query, callback) {
            if (query === void 0) { query = {}; }
            this.currentShareCallback = callback;
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
                    console.log('share video success ', e);
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
            var top = 0;
            if (this.bannerPosition == BANNER_POSITION.BOTTOM) {
                top = windowHeight - this.bannerHeigth - 10;
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
                console.log('banner位置或大小被重新设置 ', this.banner.style, 'set top ', top);
            }
        };
        /**
        *
        * @param callback 点击回调
        * @param position banner的位置，默认底部
        * @param style 自定义样式
        */
        TTModule.prototype.showBanner = function (callback, position, style) {
            var _this = this;
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            // if (this.isBannerShow)
            //     return;
            console.log('显示banner');
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
            if (this.banner) {
                // let wxsys = this.getSystemInfoSync();
                // let windowWidth = wxsys.windowWidth;
                // let windowHeight = wxsys.windowHeight;
                // if (position == BannerPosition.Bottom) {
                // }
                // this.banner.top = 1
                console.log('show banner style ', this.banner.style);
                // this.hideBanner();
                this.banner.hide();
                this._resetBanenrStyle({
                    width: this.banner.style.width,
                    height: this.banner.style.realHeight
                });
                this.banner.show().then(function () {
                    _this._resetBanenrStyle({
                        width: _this.banner.style.width,
                        height: _this.banner.style.realHeight
                    });
                });
            }
        };
        TTModule.prototype.showAppBox = function () {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].showMoreGamesModal)
                return;
            var systemInfo = this.getSystemInfoSync();
            if (systemInfo.platform == "ios")
                return;
            // iOS 不支持，建议先检测再使用
            if (systemInfo.platform !== "ios") {
                // 打开互跳弹窗
                var appLaunchOptions_1 = [];
                moosnow.ad.getAd(function (res) {
                    var opt = new appLaunchOption();
                    opt.appId = res.appid;
                    opt.query = res.path;
                    opt.extraData = res.extraData;
                    appLaunchOptions_1.push(opt);
                });
                var banner = window[this.platformName].showMoreGamesModal({
                    style: {
                        left: 20,
                        top: 40,
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
                // banner.show();
                // banner.onTap(() => {
                //     console.log("点击跳转游戏盒子");
                // });
            }
        };
        TTModule.prototype.showAppBox2 = function () {
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
                var appLaunchOptions_2 = [];
                moosnow.ad.getAd(function (res) {
                    var opt = new appLaunchOption();
                    opt.appId = res.appid;
                    opt.query = res.path;
                    opt.extraData = res.extraData;
                    appLaunchOptions_2.push(opt);
                });
                var banner = window[this.platformName].createMoreGamesBanner({
                    style: {
                        left: 20,
                        top: 40,
                        width: 150,
                        height: 40
                    },
                    appLaunchOptions: appLaunchOptions_2,
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
                console.warn('banner id is null');
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
           *
           * @param callback 点击回调
           * @param position banner的位置，默认底部
           * @param style 自定义样式
           */
        QQModule.prototype.showBanner = function (callback, position, style) {
            var _this = this;
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            console.log('显示banner');
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerPosition = position;
            this.bannerStyle = style;
            this._resetBanenrStyle({});
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
            this.onCancel = null;
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
            moosnow.http.loadCfg(function (res) {
                var openAd = (res.zs_version == moosnow.platform.moosnowConfig.version);
                console.log("\u7248\u672C\u68C0\u67E5 \u540E\u53F0\u7248\u672C" + res.zs_version + " \u914D\u7F6E\u6587\u4EF6\u7248\u672C" + moosnow.platform.moosnowConfig.version);
                console.log("获取广告开关：", openAd);
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
                console.warn('banner id is null');
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
            this.record = window[this.platformName].getVideoRecorderManager();
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
            if (!this.record) {
                if (callback)
                    callback(false);
                return;
            }
            this.record.onStart(function (res) {
                console.log('record onStart');
                if (callback)
                    callback(res);
            });
            this.record.onStop(function (res) {
                _this.recordRes = res;
                if (_this.recordCb) {
                    console.log('stop 2');
                    _this.recordCb(res);
                }
            });
            this.record.start({
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
            if (!this.record) {
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
                this.record.stop();
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
                moosnow.http.request(url, {
                    apk_id: moosnow.platform.moosnowConfig.moosnowAppId
                }, 'POST', function (res) {
                    var enabled = res.data.zs_version == moosnow.platform.moosnowConfig.version;
                    _this.cfgData = __assign(__assign({}, Common.deepCopy(res.data)), { mistouchNum: res.data.zs_switch, mistouchPosNum: res.data.zs_switch, showNative: enabled, showInter: enabled, showExportAd: enabled, lureNative: res.zs_native_click_switch == 1, lureExportAd: res.zs_jump_switch == 1, bannerShowCountLimit: isNaN(res.data.bannerShowCountLimit) ? 1 : res.data.bannerShowCountLimit });
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
            _this.baseUrl = "https://api.liteplay.com.cn/";
            _this.versionRet = null;
            _this.bannerWidth = 760;
            _this.bannerHeight = 96;
            _this.interLoadedShow = false;
            _this.prevNavigate = Date.now();
            _this.mMinInterval = 10;
            _this.mIsClickedNative = false;
            _this._regisiterWXCallback();
            _this.initAdService();
            return _this;
        }
        /**
        * 检查当前版本的导出广告是否开启
        * @param {string} version
        * @param {*} callback
        * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
        */
        VIVOModule.prototype.checkVersion = function (version, callback) {
            var _this = this;
            if (this.versionRet != null) {
                callback(this.versionRet);
                return;
            }
            else {
                var url = this.baseUrl + 'admin/wx_list/getAppConfig';
                var signParams = {
                    appid: this.moosnowConfig.moosnowAppId,
                };
                var data = signParams;
                moosnow.http.request(url, data, 'POST', function (res) {
                    _this.versionRet = res.data.version == moosnow.platform.moosnowConfig.version;
                    console.log("\u7248\u672C\u68C0\u67E5 \u540E\u53F0\u7248\u672C" + res.data.version + " \u914D\u7F6E\u6587\u4EF6\u7248\u672C" + moosnow.platform.moosnowConfig.version);
                    console.log("获取广告开关：", _this.versionRet);
                    callback(_this.versionRet);
                }, function () {
                    console.log('checkVersion fail');
                }, function () {
                    console.log('checkVersion complete');
                });
            }
        };
        VIVOModule.prototype.initAdService = function () {
            // this.initBanner();
            // this.initInter();
            // this._prepareNative();
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
            console.log('跳转数据：', row);
            if (Date.now() - this.prevNavigate < 300) {
                console.log(' 跳转太频繁 >>>>>>>>>>>>>>>>>>>>> ');
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
                console.log('版本过低 平台不支持跳转');
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
        VIVOModule.prototype._onBannerError = function (err) {
            console.warn('banner___error:', err.errCode, ' msg ', err.errMsg);
            this.destroyBanner();
        };
        VIVOModule.prototype._prepareBanner = function () {
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
                this.banner.offSize(this._bottomCenterBanner);
                this.banner.offError(this._onBannerError);
                this.banner.offLoad(this._onBannerLoad);
                this.banner.offClose(this._onBannerClose);
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
            if (!this.mShowTime)
                this.mShowTime = Date.now();
            else {
                if (Date.now() - this.mShowTime <= this.mMinInterval * 1000) {
                    console.log("banner\u521B\u5EFA\u592A\u9891\u7E41\u4E86 " + this.mMinInterval + "\u79D2\u5185\u53EA\u80FD\u663E\u793A\u4E00\u6B21");
                    return;
                }
            }
            var wxsys = this.getSystemInfoSync();
            var windowWidth = wxsys.windowWidth;
            var windowHeight = wxsys.windowHeight;
            var left = (windowWidth - this.bannerWidth) / 2;
            if (Common.isEmpty(this.bannerId)) {
                console.warn('banner id is null');
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
        VIVOModule.prototype._bottomCenterBanner = function (size) {
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
        VIVOModule.prototype._resetBanenrStyle = function (size) {
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
         *
         * @param callback 点击回调
         * @param position banner的位置，默认底部
         * @param style 自定义样式
         */
        VIVOModule.prototype.showBanner = function (callback, position, style) {
            if (position === void 0) { position = BANNER_POSITION.BOTTOM; }
            console.log('显示banner');
            this.bannerCb = callback;
            this.isBannerShow = true;
            if (!window[this.platformName])
                return;
            if (this.banner) {
                var adshow = this.banner.show();
                adshow && adshow.then(function () {
                    console.log("banner广告展示成功");
                }).catch(function (err) {
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
            }
            else {
                this.initBanner();
            }
        };
        VIVOModule.prototype.hideBanner = function () {
            console.log('隐藏banner');
            if (!this.isBannerShow)
                return;
            if (!window[this.platformName]) {
                return;
            }
            this.bannerShowCount++;
            if (this.banner) {
                if (this.bannerShowCount >= this.bannerShowCountLimit) {
                    this.destroyBanner();
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
            if (this.video) {
                this.video.offClose(this._onVideoClose);
                this.video.offError(this._onVideoError);
                this.video.offLoad(this._onVideoLoad);
            }
            else {
                if (Common.isEmpty(this.videoId)) {
                    console.warn(' video id is null');
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
        VIVOModule.prototype._onVideoLoad = function () {
            console.log('加载video成功回调');
            moosnow.platform.videoLoading = false;
            if (this.video) {
                this.video.show();
            }
        };
        VIVOModule.prototype.prepareInter = function () {
            if (Common.isEmpty(this.interId)) {
                console.warn('插屏广告ID为空，系统不加载');
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
        VIVOModule.prototype.showInter = function () {
            if (this.inter)
                this.inter.show();
            else
                this.interLoadedShow = true;
        };
        VIVOModule.prototype._onInterLoad = function () {
            if (this.interLoadedShow) {
                if (this.inter) {
                    this.inter.show();
                }
                else
                    this.interLoadedShow = false;
            }
        };
        VIVOModule.prototype._onInterOnShow = function () {
            if (this.inter)
                this.inter.load();
        };
        VIVOModule.prototype.showAutoBanner = function () {
            console.log(' oppo 不支持自动');
        };
        VIVOModule.prototype.reportMonitor = function (name, value) {
            if (!window[this.platformName])
                return;
            if (!window[this.platformName].reportMonitor)
                return;
            window[this.platformName].reportMonitor('game_scene', 0);
        };
        VIVOModule.prototype._prepareNative = function () {
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
        VIVOModule.prototype._onNativeLoad = function (res) {
            this.nativeLoading = false;
            console.log("\u52A0\u8F7D\u539F\u751F\u5E7F\u544A\u6210\u529F", res);
            if (res && res.adList && res.adList.length > 0) {
                this.nativeAdResult = res.adList[0];
                if (!Common.isEmpty(this.nativeAdResult.adId)) {
                    console.log("\u4E0A\u62A5\u539F\u751F\u5E7F\u544A");
                    this.native.reportAdShow({
                        adId: this.nativeAdResult.adId
                    });
                }
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(Common.deepCopy(this.nativeAdResult));
                }
            }
            else {
                console.log("\u539F\u751F\u5E7F\u544A\u6570\u636E\u6CA1\u6709\uFF0C\u56DE\u8C03Null");
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(null);
                }
            }
        };
        VIVOModule.prototype._onNativeError = function (err) {
            this.nativeLoading = false;
            this.nativeAdResult = null;
            if (err.code == 20003) {
                if (this.nativeIdIndex < this.nativeId.length - 1) {
                    console.log("\u539F\u751F\u5E7F\u544A\u52A0\u8F7D\u51FA\u9519 ", err, '使用新ID加载原生广告');
                    this.nativeIdIndex += 1;
                    this._destroyNative();
                    this._prepareNative();
                }
                else {
                    console.log("\u539F\u751F\u5E7F\u544AID\u5DF2\u7ECF\u7528\u5B8C\uFF0C\u672C\u6B21\u6CA1\u6709\u5E7F\u544A");
                    this.nativeIdIndex = 0;
                    if (Common.isFunction(this.nativeCb)) {
                        this.nativeCb(null);
                    }
                }
            }
            else {
                console.log("\u539F\u751F\u5E7F\u544A\u52A0\u8F7D\u51FA\u9519\uFF0C\u672C\u6B21\u6CA1\u6709\u5E7F\u544A", err);
                if (Common.isFunction(this.nativeCb)) {
                    this.nativeCb(null);
                }
            }
        };
        VIVOModule.prototype._destroyNative = function () {
            this.nativeLoading = false;
            this.native.offLoad(); // 移除原生广告加载成功回调
            this.native.offError(); // 移除失败回调
            this.native.destroy(); // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
            console.log('原生广告销毁');
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
        VIVOModule.prototype.showNativeAd = function (callback) {
            this.nativeCb = callback;
            if (this.native)
                this.native.load();
            else {
                this._prepareNative();
                if (this.native)
                    this.native.load();
            }
            // if (!this.nativeLoading && !Common.isEmpty(this.nativeAdResult)) {
            //     let nativeData = Common.deepCopy(this.nativeAdResult)
            //     callback(nativeData)
            // }
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
        VIVOModule.prototype.clickNative = function (callback) {
            if (this.nativeAdResult && !Common.isEmpty(this.nativeAdResult.adId)) {
                this.mClickedNativeCallback = callback;
                this.mIsClickedNative = true;
                console.log('点击了原生广告', this.nativeAdResult.adId);
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
        CENTER: 8,
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
        * 扩展1
        */
        EXTEND1: 512,
        /**
        * 扩展2
        */
        EXTEND2: 1024,
        /**
        * 扩展3
        */
        EXTEND3: 2048,
        /**
        * 扩展4
        */
        EXTEND4: 4096,
        /**
        * 扩展5
        */
        EXTEND5: 8192,
    };

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
        BaseEntityModule.prototype.showEntity = function (name, parentNode, data) {
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
        CocosEntityModule.prototype.showEntity = function (name, parentNode, data) {
            var logic = this._showEntity(name);
            logic.id = this._serializeId--;
            logic.node.parent = parentNode;
            logic.willShow(data);
            logic.node.active = true;
            logic.node.zIndex = logic.id;
            logic.onShow(data);
            this.entityLogics.push(logic);
            return logic;
        };
        CocosEntityModule.prototype._createEntity = function (name) {
            var prefab;
            if (Common.getEngine(name) == ENGINE_TYPE.NONE)
                prefab = this._getPrefabByName(name);
            else
                prefab = name;
            return cc.instantiate(prefab);
        };
        CocosEntityModule.prototype._showEntity = function (name) {
            var pool = this._getOrNewEntityPool(name);
            var entity = pool.get();
            if (entity == null) {
                entity = this._createEntity(name);
            }
            var logic = this._findComponent(entity, "EntityLogic");
            logic.poolName = pool.name;
            return logic;
        };
        CocosEntityModule.prototype._getPrefabByName = function (name) {
            var profab = cc.loader.getRes(this.prefabPath + '' + name, cc.Prefab);
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
            var engine = Common.getEngine(name);
            if (engine == ENGINE_TYPE.COCOS) {
                poolName = name.name;
            }
            else if (engine == ENGINE_TYPE.LAYA) {
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
            _this.UIRoot = 'moosnow/prefab/ui/'; //定义resources目录下存放UI预设的目录
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
         * @param {string} name  resources/UI目录下的预设名字
         * @param {Object} data 携带的自定义数据
         * @param {Function} callback ui显示后回调:(formModel,data:Object)
         */
        BaseUIModule.prototype.pushUIForm = function (name, data, callback) {
            var self = this;
            var cachedFormModel = this._getUINodeFromCacheByName(name);
            if (cachedFormModel == null) {
                this._createUIFormModel(name, function (formModel) {
                    self._showUIForm(formModel, data);
                    if (callback) {
                        callback(formModel, data);
                    }
                });
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
        BaseUIModule.prototype._createUINode = function (name, formId, callback) {
            var path = this.UIRoot + name;
            cc.loader.loadRes(path, cc.Prefab, function (err, prefab) {
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
        BaseUIModule.prototype._createUIFormModel = function (name, callback) {
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
            });
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
            _this.mAdItemList = [];
            _this.mScrollVec = [];
            _this.mIndex = 999;
            _this.mShowAd = moosnow.AD_POSITION.NONE;
            _this.mMoveSpeed = 2;
            _this.mFloatIndex = 0;
            _this.mFloatRefresh = 3;
            _this.mFloatCache = {};
            _this.mSecond = 3;
            return _this;
        }
        AdForm.prototype.setPosition = function (source, position) {
            if (position === void 0) { position = ""; }
            var retValue = Common.deepCopy(source);
            retValue.forEach(function (item) {
                item.position = position;
            });
            return retValue;
        };
        /**
         *
         * @param scrollView
         * @param layout
         * @param positionTag AD_POSITION
         * @param entityName
         */
        AdForm.prototype.initView = function (container, scrollView, layout, position, entityName) {
            var _this = this;
            if (!entityName) {
                console.warn('entityName is null 无法初始化 ');
                return;
            }
            moosnow.entity.preload(entityName, function () {
                moosnow.ad.getAd(function (res) {
                    if (res.indexLeft.length == 0)
                        return;
                    var source = _this.setPosition(res.indexLeft, "");
                    source.forEach(function (item, idx) {
                        var adItemCtl = moosnow.entity.showEntity(entityName, layout.node, item);
                        _this.mAdItemList.push(adItemCtl);
                    });
                    if (layout.type == cc.Layout.Type.GRID) {
                        if (scrollView.vertical) {
                            _this.mScrollVec.push({
                                scrollView: scrollView,
                                move2Up: false
                            });
                        }
                        else {
                            _this.mScrollVec.push({
                                scrollView: scrollView,
                                move2Left: false
                            });
                        }
                    }
                    else if (layout.type == cc.Layout.Type.HORIZONTAL) {
                        _this.mScrollVec.push({
                            scrollView: scrollView,
                            move2Left: false
                        });
                    }
                    else if (layout.type == cc.Layout.Type.VERTICAL) {
                        _this.mScrollVec.push({
                            scrollView: scrollView,
                            move2Up: false
                        });
                    }
                });
            });
        };
        AdForm.prototype.addEvent = function () {
            moosnow.event.addListener(EventType.AD_VIEW_CHANGE, this, this.onAdChange);
        };
        AdForm.prototype.removeEvent = function () {
            moosnow.event.removeListener(EventType.AD_VIEW_CHANGE, this);
        };
        AdForm.prototype.onAdChange = function (data) {
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
            if (moosnow.APP_PLATFORM.WX == curApp || curApp == moosnow.APP_PLATFORM.OPPO) {
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
        AdForm.prototype.onFwUpdate = function (dt) {
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
        AdForm.prototype.sideOut = function () {
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
        AdForm.prototype.sideIn = function () {
            var _this = this;
            this.sideView.node.runAction(cc.sequence(cc.moveTo(1, 0, 0), cc.callFunc(function () {
                _this.btnSideShow.active = true;
                _this.btnSideHide.active = false;
            })));
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
         */
        AdForm.prototype.initFloatAd = function (parentNode, prefabs, points) {
            var _this = this;
            cc.loader.loadResDir(moosnow.entity.prefabPath, cc.Prefab, function () {
                moosnow.ad.getAd(function (res) {
                    _this.mAdData = res;
                    if (res.indexLeft.length == 0)
                        return;
                    var source = __spreadArrays(res.indexLeft);
                    prefabs.forEach(function (prefabName, idx) {
                        var showIndex = idx;
                        var floatData = source[0];
                        if (showIndex > source.length - 1)
                            showIndex = 0;
                        floatData = source[showIndex];
                        var point = points[idx];
                        var adRow = __assign(__assign({}, floatData), { position: "首页浮动", x: point.x, y: point.y });
                        var logic = moosnow.entity.showEntity(prefabName, parentNode, adRow);
                        _this.mFloatCache[idx] = {
                            index: showIndex,
                            logic: logic,
                            onCancel: adRow.onCancel
                        };
                        _this.floatAnim(logic.node);
                    });
                    _this.updateFloat(Common.deepCopy(res));
                    setInterval(function () {
                        _this.updateFloat(Common.deepCopy(res));
                    }, _this.mFloatRefresh * 1000);
                });
            });
        };
        AdForm.prototype.floatAnim = function (floatNode) {
        };
        AdForm.prototype.updateFloat = function (source) {
            for (var key in this.mFloatCache) {
                var showIndex = this.mFloatCache[key].index;
                var logic = this.mFloatCache[key].logic;
                if (showIndex < source.indexLeft.length - 1)
                    showIndex++;
                else
                    showIndex = 0;
                this.mFloatCache[key].index = showIndex;
                logic.refreshImg(__assign(__assign({}, source.indexLeft[showIndex]), { onCancel: this.mFloatCache[key].onCancel }));
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
            var _this = this;
            this.floatContainer.active = visible && this.hasAd(AD_POSITION.FLOAT);
            this.bannerContainer.active = visible && this.hasAd(AD_POSITION.BANNER);
            this.centerContainer.active = visible && this.hasAd(AD_POSITION.CENTER);
            this.leftContainer.active = visible && this.hasAd(AD_POSITION.LEFTRIGHT);
            this.exportMask.active = visible && this.hasAd(AD_POSITION.MASK);
            this.sideContainer.active = visible && this.hasAd(AD_POSITION.SIDE);
            this.exportClose.active = false;
            this.exportCloseTxt.active = false;
            this.unschedule(this.showExportClose);
            if (this.hasAd(AD_POSITION.BACK)) {
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
            this.exportContainer.active = visible && this.hasAd(AD_POSITION.EXPORT);
            if (visible && this.hasAd(AD_POSITION.EXPORT)) {
                moosnow.http.getAllConfig(function (res) {
                    if (res.exportAutoNavigate == 1) {
                        moosnow.platform.navigate2Mini(_this.mAdData.indexLeft[Common.randomNumBoth(0, _this.mAdData.indexLeft.length - 1)]);
                    }
                });
            }
        };
        return AdForm;
    }(BaseForm));

    var CocosAdForm = /** @class */ (function (_super) {
        __extends(CocosAdForm, _super);
        function CocosAdForm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CocosAdForm.prototype.addEvent = function () {
            if (this.exportClose)
                this.exportClose.on(cc.Node.EventType.TOUCH_END, this.onBack, this);
            if (this.btnSideShow)
                this.btnSideShow.on(cc.Node.EventType.TOUCH_START, this.sideOut, this);
            if (this.btnSideHide)
                this.btnSideHide.on(cc.Node.EventType.TOUCH_START, this.sideIn, this);
            _super.prototype.addEvent.call(this);
        };
        CocosAdForm.prototype.removeEvent = function () {
            if (this.exportClose)
                this.exportClose.off(cc.Node.EventType.TOUCH_END, this.onBack, this);
            if (this.btnSideShow)
                this.btnSideShow.off(cc.Node.EventType.TOUCH_START, this.sideOut, this);
            if (this.btnSideHide)
                this.btnSideHide.off(cc.Node.EventType.TOUCH_START, this.sideIn, this);
            _super.prototype.removeEvent.call(this);
        };
        CocosAdForm.prototype.floatAnim = function (floatNode) {
            floatNode.runAction(cc.sequence(cc.rotateTo(0.3, 10), cc.rotateTo(0.6, -10), cc.rotateTo(0.3, 0), cc.scaleTo(0.3, 0.8), cc.scaleTo(0.3, 1)).repeatForever());
        };
        return CocosAdForm;
    }(AdForm));

    var MISTOUCH_BANNER_TYPE;
    (function (MISTOUCH_BANNER_TYPE) {
        MISTOUCH_BANNER_TYPE[MISTOUCH_BANNER_TYPE["AUTO_HIDE"] = 1] = "AUTO_HIDE";
        MISTOUCH_BANNER_TYPE[MISTOUCH_BANNER_TYPE["MAST"] = 2] = "MAST";
    })(MISTOUCH_BANNER_TYPE || (MISTOUCH_BANNER_TYPE = {}));

    var UIForms = /** @class */ (function () {
        function UIForms() {
        }
        Object.defineProperty(UIForms, "mapping", {
            get: function () {
                var _a, _b, _c, _d, _e, _f, _g;
                return {
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
                        _g),
                };
            },
            enumerable: true,
            configurable: true
        });
        UIForms.convertUIName = function (mappingForm) {
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
        Object.defineProperty(UIForms, "AdForm", {
            get: function () {
                return this.convertUIName(this.mapping.adForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIForms, "TotalForm", {
            /**
             * 结算页
             */
            get: function () {
                return this.convertUIName(this.mapping.totalForm);
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(UIForms, "EndForm", {
            /**
             * 结束页
             */
            get: function () {
                return this.convertUIName(this.mapping.endForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIForms, "PauseForm", {
            get: function () {
                return this.convertUIName(this.mapping.pauseForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIForms, "RespawnForm", {
            get: function () {
                return this.convertUIName(this.mapping.respawnForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIForms, "MistouchForm", {
            get: function () {
                return this.convertUIName(this.mapping.mistouchForm);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIForms, "TryForm", {
            get: function () {
                return this.convertUIName(this.mapping.tryForm);
            },
            enumerable: true,
            configurable: true
        });
        UIForms.HomeForm = "homeForm";
        UIForms.SkinForm = "skinForm";
        UIForms.GameForm = "gameForm";
        UIForms.CoinForm = "coinForm";
        UIForms.PrevHomeForm = "prevHomeForm";
        UIForms.ToastForm = "toastForm";
        UIForms.SetForm = "setForm";
        UIForms.PrizeForm = "prizeForm";
        return UIForms;
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
                if (this.FormData && this.FormData.onCompleted)
                    this.FormData.onCompleted();
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
                    moosnow.platform.showBanner(function (e) {
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
                moosnow.ui.destroyUIForm(UIForms.MistouchForm, null);
                if (this.FormData && this.FormData.onCompleted)
                    this.FormData.onCompleted(true);
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
            this.btnBanner.on(cc.Node.EventType.TOUCH_START, this.onLogoUp, this);
            this.btnBanner.on(cc.Node.EventType.TOUCH_END, this.onBannerClick, this);
        };
        CocosMistouchForm.prototype.removeEvent = function () {
            this.btnBanner.off(cc.Node.EventType.TOUCH_START, this.onLogoUp, this);
            this.btnBanner.off(cc.Node.EventType.TOUCH_END, this.onBannerClick, this);
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
                        if (_this.FormData && _this.FormData.onCompleted)
                            _this.FormData.onCompleted(true);
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
                moosnow.ui.hideUIForm(UIForms.MistouchForm, null);
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
            this.unchecked.node.on(cc.Node.EventType.TOUCH_END, this.checkboxChange, this);
            this.btnReceive.on(cc.Node.EventType.TOUCH_START, this.onLogoUp, this);
            this.btnReceive.on(cc.Node.EventType.TOUCH_END, this.onBannerClick, this);
            this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.openBox, this);
        };
        CocosMistouchFormTT.prototype.removeEvent = function () {
            this.unchecked.node.off(cc.Node.EventType.TOUCH_END, this.checkboxChange, this);
            this.btnReceive.off(cc.Node.EventType.TOUCH_START, this.onLogoUp, this);
            this.btnReceive.off(cc.Node.EventType.TOUCH_END, this.onBannerClick, this);
            this.btnConfirm.off(cc.Node.EventType.TOUCH_END, this.openBox, this);
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
            return this.FormData && this.FormData.mistouchType == 4;
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
                        moosnow.platform.showBanner(function (e) {
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
                    moosnow.ui.destroyUIForm(UIForms.MistouchForm, null);
                    if (_this.FormData && _this.FormData.onCompleted)
                        _this.FormData.onCompleted();
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
                this.logo.on(cc.Node.EventType.TOUCH_START, this.onLogoUp, this);
                this.logo.on(cc.Node.EventType.TOUCH_END, this.onBannerClick, this);
            }
            else {
                //误触banner
                this.btnBanner.active = true;
                this.btnBanner.on(cc.Node.EventType.TOUCH_START, this.onLogoUp, this);
                this.btnBanner.on(cc.Node.EventType.TOUCH_END, this.onBannerClick, this);
            }
            moosnow.event.addListener(EventType.ON_PLATFORM_SHOW, this, function () {
                if (_this.mBannerShow)
                    _this.bannerClickCallback(true);
            });
        };
        CocosMistouchFormQQ.prototype.removeEvent = function () {
            this.btnBanner.off(cc.Node.EventType.TOUCH_END, this.onBannerClick, this);
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
        AdViewItem.prototype.initItem = function () {
            this.logo.node.on(cc.Node.EventType.TOUCH_END, this.onClickAd, this);
        };
        AdViewItem.prototype.onClickAd = function () {
            var _this = this;
            var openAd = __assign({}, this.mAdItem);
            if (this.changeView) {
                var nextAd = this.findNextAd();
                moosnow.event.sendEventImmediately(EventType.AD_VIEW_REFRESH, {
                    current: openAd,
                    next: nextAd
                });
                var callback = this.mAdItem.onCancel;
                console.log('回调函数', !!callback);
                this.refreshImg(__assign(__assign({}, nextAd), { onCancel: callback }));
            }
            moosnow.platform.navigate2Mini(openAd, function () { }, function () {
                if (_this.mAdItem.onCancel)
                    _this.mAdItem.onCancel();
            });
        };
        AdViewItem.prototype.findNextAd = function () {
            if (!this.LogicData.source)
                return null;
            if (!this.LogicData.showAppId)
                return null;
            for (var i = 0; i < this.LogicData.source.length; i++) {
                var isShow = false;
                for (var j = 0; j < this.LogicData.showAppId.length; j++) {
                    if (this.LogicData.showAppId[j].appid == this.LogicData.source[i].appid) {
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
            var current = e.current, next = e.next;
            for (var i = 0; i < this.LogicData.showAppId.length; i++) {
                if (current.appid == this.LogicData.showAppId[i]) {
                    this.LogicData.showAppId[i] = next.appid;
                }
            }
            for (var i = 0; i < this.LogicData.source.length; i++) {
                if (next.appid == this.LogicData.source[i].appid) {
                    this.LogicData.source.splice(i, 1);
                    this.LogicData.source.push(current);
                    break;
                }
            }
        };
        AdViewItem.prototype.onShow = function () {
            if (this.LogicData.onCancel) {
                console.log('ad view item ', this.LogicData);
            }
            if (this.changeView) {
                moosnow.event.addListener(EventType.AD_VIEW_REFRESH, this, this.onAdViewChange);
            }
        };
        AdViewItem.prototype.onHide = function () {
            if (this.mAdItem)
                this.mAdItem.onCancel = null;
            moosnow.event.removeListener(EventType.AD_VIEW_REFRESH, this);
        };
        AdViewItem.prototype.willShow = function (cell) {
            _super.prototype.willShow.call(this, cell);
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
        PrizeForm.prototype.initForm = function (logic) {
            this.initProperty(logic);
            // this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.closeForm, this)
        };
        PrizeForm.prototype.willHide = function () {
            // this.btnConfirm.off(cc.Node.EventType.TOUCH_END, this.closeForm, this)
        };
        PrizeForm.prototype.willShow = function (data) {
            _super.prototype.willShow.call(this, data);
            this.coinNum.string = "" + Common.formatMoney(data.coinNum);
            moosnow.platform.hideBanner();
        };
        PrizeForm.prototype.closeForm = function () {
            var _this = this;
            moosnow.ui.destroyUIForm(UIForms.PrizeForm, null);
            moosnow.ui.destroyUIForm(UIForms.MistouchForm, null);
            if (this.FormData.showCoinAnim == true) {
                moosnow.ui.pushUIForm(UIForms.CoinForm, __assign(__assign({}, Common.deepCopy(this.FormData)), { callback: function () {
                        if (_this.FormData.onCompleted)
                            _this.FormData.onCompleted();
                    } }));
            }
            else {
                if (this.FormData.onCompleted)
                    this.FormData.onCompleted();
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
            this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.closeForm, this);
        };
        CocosPrizeForm.prototype.willHide = function () {
            this.btnConfirm.off(cc.Node.EventType.TOUCH_END, this.closeForm, this);
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
        PrizeFormTT.prototype.initForm = function (logic) {
            this.initProperty(logic);
            // this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.closeForm, this)
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
                moosnow.ui.hideUIForm(UIForms.PrizeForm, null);
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
            this.btnCancel.on(cc.Node.EventType.TOUCH_END, this.closeForm, this);
            this.btnVideo.on(cc.Node.EventType.TOUCH_END, this.onVideo, this);
            this.btnReceive.on(cc.Node.EventType.TOUCH_END, this.onReceive, this);
            this.btnShare.on(cc.Node.EventType.TOUCH_END, this.onShare, this);
            this.unchecked.on(cc.Node.EventType.TOUCH_END, this.onChecked, this);
        };
        PrizeFormTT.prototype.removeListener = function () {
            this.btnCancel.off(cc.Node.EventType.TOUCH_END, this.closeForm, this);
            this.btnVideo.off(cc.Node.EventType.TOUCH_END, this.onVideo, this);
            this.btnReceive.off(cc.Node.EventType.TOUCH_END, this.onReceive, this);
            this.btnShare.off(cc.Node.EventType.TOUCH_END, this.onShare, this);
            this.unchecked.off(cc.Node.EventType.TOUCH_END, this.onChecked, this);
        };
        PrizeFormTT.prototype.closeForm = function () {
            moosnow.ui.hideUIForm(UIForms.PrizeForm, null);
        };
        PrizeFormTT.prototype.onChecked = function () {
            this.mChecked = !this.mChecked;
            this.checked.active = this.mChecked;
        };
        PrizeFormTT.prototype.onShare = function () {
            var _this = this;
            this.stopCountdown();
            moosnow.platform.share({
                channel: ""
            }, function (shared) {
                _this.resumeCountdown();
                if (shared) {
                    _this.addCoin(_this.getCoinNum() * 2, function () {
                        moosnow.ui.hideUIForm(UIForms.PrizeForm, null);
                    });
                }
            });
        };
        PrizeFormTT.prototype.onReceive = function () {
            if (this.mChecked)
                this.onVideo();
            else
                this.addCoin(this.getCoinNum(), function () {
                    moosnow.ui.hideUIForm(UIForms.PrizeForm, null);
                });
        };
        PrizeFormTT.prototype.onVideo = function () {
            var _this = this;
            this.stopCountdown();
            moosnow.platform.showVideo(function (res) {
                if (res == moosnow.VIDEO_STATUS.END) {
                    _this.addCoin(_this.getCoinNum() * (_this.FormData && _this.FormData.baseNum ? parseFloat(_this.FormData.baseNum) : 2), function () {
                        moosnow.ui.hideUIForm(UIForms.PrizeForm, null);
                    });
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
        PrizeFormTT.prototype.getCoinNum = function () {
            var coinNum = Common.randomNumBoth(500, 600);
            return coinNum;
        };
        PrizeFormTT.prototype.addCoin = function (coinNum, callback) {
            moosnow.ui.hideUIForm(UIForms.MistouchForm, null);
            moosnow.event.sendEventImmediately(EventType.COIN_CHANGED, null);
            moosnow.ui.pushUIForm(UIForms.CoinForm, __assign(__assign({}, Common.deepCopy(this.FormData)), { coinNum: coinNum, callback: function () {
                    if (callback)
                        callback();
                } }));
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
        CocosPrizeFormTT.prototype.initForm = function (logic) {
            this.initProperty(logic);
            this.btnConfirm.on(cc.Node.EventType.TOUCH_END, this.closeForm, this);
        };
        CocosPrizeFormTT.prototype.willHide = function () {
            this.btnConfirm.off(cc.Node.EventType.TOUCH_END, this.closeForm, this);
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
        CoinForm.prototype.flyAnim = function (logic, endVec, callback) {
        };
        CoinForm.prototype.onShow = function (data) {
            var _this = this;
            var imgNum = data.imgNum, coinNum = data.coinNum, starVec = data.starVec, endVec = data.endVec, callback = data.callback;
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
                    moosnow.ui.hideUIForm(UIForms.CoinForm, null);
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
        return LogicControl;
    }());

    /**
     * 广告结果
     */
    var UIForm = /** @class */ (function () {
        function UIForm() {
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
            moosnow.ui.pushUIForm(UIForms.AdForm, { showAd: moosnow.AD_POSITION.NONE }, null);
        };
        /**
         * 显示广告
         * @param adType 广告类型
         * @param callback  有返回按钮时的回调
         * @param zIndex  层级
         */
        UIForm.prototype.showAd = function (adType, callback, zIndex) {
            if (adType === void 0) { adType = AD_POSITION.NONE; }
            if (zIndex === void 0) { zIndex = 999; }
            var adForm = moosnow.ui.getUIFrom(UIForms.AdForm);
            if (adForm) {
                adForm.node.zIndex = zIndex;
                moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback: callback });
            }
            else {
                moosnow.ui.pushUIForm(UIForms.AdForm, { showAd: moosnow.AD_POSITION.NONE }, function () {
                    var adForm = moosnow.ui.getUIFrom(UIForms.AdForm);
                    adForm.node.zIndex = zIndex;
                    moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback: callback });
                });
            }
        };
        /**
         * 金币动画
         * @param style
         * @param callback
         */
        UIForm.prototype.showCoin = function (style, callback) {
            moosnow.ui.pushUIForm(UIForms.CoinForm, __assign(__assign({}, style), { callback: function () {
                    console.log('showCoin callback ');
                    if (callback)
                        callback();
                } }), function () {
            });
        };
        /**
         * 显示狂点页面
         * @param callback 点击完成回调
         * @param type 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
         */
        UIForm.prototype.showMistouch = function (callback, type) {
            if (type === void 0) { type = 1; }
            moosnow.ui.pushUIForm(UIForms.MistouchForm, {
                mistouchType: type == 2 ? 4 : 1,
                onCompleted: function () {
                    if (callback)
                        callback();
                }
            }, function () {
            });
        };
        /**
         * 显示奖励
         * @param style 金币动画
         * @param baseNum 视频奖励领取的倍数
         * @param showCoinAnim 显示金币动画
         * @param callback
         */
        UIForm.prototype.showPrize = function (style, baseNum, showCoinAnim, callback) {
            if (showCoinAnim === void 0) { showCoinAnim = true; }
            moosnow.ui.pushUIForm(UIForms.PrizeForm, __assign(__assign({}, style), { baseNum: baseNum,
                showCoinAnim: showCoinAnim, onCompleted: function () {
                    if (callback)
                        callback();
                } }), function () {
            });
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
            _this.mMistouchPosSecond = 4;
            return _this;
        }
        DelayMove.prototype.initPos = function () {
        };
        /**
         *
         * @param moveNode
         * @param distince
         * @param showBanner
         */
        DelayMove.prototype.move = function (moveNode, distince, showBanner) {
            var _this = this;
            this.moveNode = moveNode;
            this.distince = distince;
            this.showBanner = showBanner;
            this.initPos();
            var count = moosnow.data.getCurrentMisTouchCount();
            moosnow.data.setCurrentMisTouchCount(count + 1);
            this.moveNode.active = false;
            moosnow.http.getAllConfig(function (res) {
                if (!isNaN(res.mistouchPosSecond))
                    _this.mMistouchPosSecond = parseFloat(res.mistouchPosSecond);
                moosnow.http.getMistouchPosNum(function (num) {
                    _this.mMistouchPosNum = num;
                    _this.movePosition();
                });
            });
        };
        DelayMove.prototype.movePosition = function () {
            if (this.mMistouchPosNum == 0) {
                this.moveNode.active = true;
                this.moveNode.x = this.pos1.x;
                this.moveNode.y = this.pos1.y;
                if (this.showBanner)
                    moosnow.platform.showBanner();
            }
            else {
                var count = moosnow.data.getCurrentMisTouchCount();
                if (count % this.mMistouchPosNum == 0) {
                    this.copyNode();
                    this.schedule(this.onPosCallback, this.mMistouchPosSecond);
                }
            }
        };
        DelayMove.prototype.copyNode = function () {
        };
        DelayMove.prototype.onPosCallback = function (tempButtom) {
            if (this.showBanner)
                moosnow.platform.showBanner();
            this.removeTemp(tempButtom);
            this.moveNode.active = true;
            this.moveNode.x = this.pos1.x;
            this.moveNode.y = this.pos1.y;
            this.unschedule(this.onPosCallback);
        };
        DelayMove.prototype.removeTemp = function (tempButtom) {
            tempButtom.active = false;
            tempButtom.removeFromParent();
            tempButtom.destroy();
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
            return _this;
        }
        CocosDelayMove.prototype.initPos = function () {
            if (!this.pos1)
                this.pos1 = this.moveNode.position.clone();
            if (!this.pos2)
                this.pos2 = this.pos1.add(new cc.Vec2(0, this.distince));
        };
        CocosDelayMove.prototype.copyNode = function () {
            var tempButtom = cc.instantiate(this.moveNode);
            tempButtom.active = true;
            this.moveNode.parent.addChild(tempButtom);
            tempButtom.x = this.pos2.x;
            tempButtom.y = this.pos2.y;
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
            this.schedule(this.showNode, delayTime * 1000);
        };
        DelayShow.prototype.hide = function (node, delayTime) {
            if (delayTime === void 0) { delayTime = 3; }
            this.mNode = node;
            this.schedule(this.hideNode, delayTime * 1000);
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

    var moosnowEntry = /** @class */ (function () {
        function moosnowEntry() {
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
            // private mResource: ireso;
            // public get resource() {
            //     return this.mResource;
            // }
            this.mSetting = new SettingModule();
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
            (window["moosnow"]) = this;
            this.mData = new GameDataCenter();
            this.mSetting = new SettingModule();
            this.mEvent = new EventModule();
            this.initPlatform();
            this.initHttp();
            this.initAd();
            this.initUI();
            this.initEntity();
        }
        /**
         * 获取当前的游戏平台
         */
        moosnowEntry.prototype.getAppPlatform = function () {
            return Common.platform;
        };
        moosnowEntry.prototype.initUI = function () {
            this.mUi = new CocosUIModule();
        };
        moosnowEntry.prototype.initEntity = function () {
            this.mEntity = new CocosEntityModule();
        };
        moosnowEntry.prototype.initHttp = function () {
            if (Common.platform == PlatformType.WX)
                this.mHttp = new HttpModule();
            else if (Common.platform == PlatformType.OPPO_ZS) {
                this.mHttp = new ZSHttpModule();
            }
            else
                this.mHttp = new HttpModule();
        };
        moosnowEntry.prototype.initPlatform = function () {
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
        moosnowEntry.prototype.initAd = function () {
            if (Common.platform == PlatformType.WX || Common.platform == PlatformType.PC)
                this.mAd = new WXAdModule();
            else if (Common.platform == PlatformType.OPPO || Common.platform == PlatformType.VIVO) {
                this.mAd = new OPPOAdModule();
            }
            else if (Common.platform == PlatformType.OPPO_ZS) {
                this.mAd = new ZSOPPOAdModule();
            }
            else
                this.mAd = new AdModule();
        };
        Object.defineProperty(moosnowEntry.prototype, "platform", {
            get: function () {
                return this.mPlatform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "ad", {
            /**
             * 墨雪广告
             */
            get: function () {
                return this.mAd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "http", {
            get: function () {
                return this.mHttp;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "data", {
            /**
             * 本地内存
             */
            get: function () {
                return this.mData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "setting", {
            /**
             * 本地持久化缓存
             */
            get: function () {
                return this.mSetting;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "event", {
            get: function () {
                return this.mEvent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "ui", {
            get: function () {
                return this.mUi;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "form", {
            get: function () {
                return this.mForm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "control", {
            get: function () {
                return this.mControl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "entity", {
            get: function () {
                return this.mEntity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowEntry.prototype, "delay", {
            get: function () {
                return this.mDelay;
            },
            enumerable: true,
            configurable: true
        });
        return moosnowEntry;
    }());
    new moosnowEntry();

}());
