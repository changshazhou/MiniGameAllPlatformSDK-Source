(function () {
    'use strict';

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

    var FormKeyValue = /** @class */ (function () {
        function FormKeyValue(formNode, formLogic) {
            this.formNode = null;
            this.formLogic = null;
            this.formNode = formNode;
            this.formLogic = formLogic;
        }
        return FormKeyValue;
    }());
    var FormQuene = /** @class */ (function () {
        function FormQuene(name, formNode, formLogic) {
            this.formName = "";
            this.quene = [];
            this.formName = name;
            this.quene.push(new FormKeyValue(formNode, formLogic));
        }
        FormQuene.prototype.addForm = function (formNode, formLogic) {
            this.quene.push(new FormKeyValue(formNode, formLogic));
        };
        FormQuene.prototype.addFormKV = function (kv) {
            this.quene.push(kv);
        };
        return FormQuene;
    }());
    var FormFactory = /** @class */ (function () {
        function FormFactory() {
            this.mLayoutQuene = [];
        }
        Object.defineProperty(FormFactory, "instance", {
            get: function () {
                if (!this.mInstance)
                    this.mInstance = new FormFactory();
                return this.mInstance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormFactory, "formQuene", {
            get: function () {
                return this._FormQuene;
            },
            enumerable: true,
            configurable: true
        });
        ;
        FormFactory.cachedQuene = function () {
            return this._CachedQuene;
        };
        FormFactory.addFrom2Cached = function (name, formKV) {
            var cacheQuene = null;
            for (var i = 0; i < this._CachedQuene.length; i++) {
                var item = this._CachedQuene[i];
                if (item.formName == name) {
                    cacheQuene = item;
                    break;
                }
            }
            if (cacheQuene)
                cacheQuene.addFormKV(formKV);
            else
                this._CachedQuene.push(new FormQuene(name, formKV.formNode, formKV.formLogic));
        };
        /**
         * 从缓存中取form
         * @param name
         */
        FormFactory.getFormFromCached = function (name) {
            for (var i = 0; i < this.formQuene.length; i++) {
                var item = this.formQuene[i];
                if (item.formName == name) {
                    for (var j = 0; j < item.quene.length; j++) {
                        item.quene.splice(j, 1);
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
        FormFactory.addForm2Quene = function (name, formNode, formLogic) {
            var idx = -1;
            for (var i = 0; i < this._FormQuene.length; i++) {
                var item = this._FormQuene[i];
                if (item.formName == name) {
                    idx = i;
                    break;
                }
            }
            console.log('addForm2Quene 1 ', this._FormQuene);
            if (idx != -1) {
                this._FormQuene[idx].addForm(formNode, formLogic);
            }
            else
                this._FormQuene.push(new FormQuene(name, formNode, formLogic));
            console.log('addForm2Quene 2 ', this._FormQuene);
        };
        /**
         * 从队列里移除Form
         * @param name
         * @param formNode
         */
        FormFactory.removeFormFromQuene = function (name, formKV, callback) {
            for (var i = 0; i < this.formQuene.length; i++) {
                var item = this.formQuene[i];
                if (item.formName == name) {
                    for (var j = 0; j < item.quene.length; j++) {
                        if (item.quene[j] == formKV) {
                            item.quene.splice(j, 1);
                            this.addFrom2Cached(name, formKV);
                            if (callback)
                                callback(formKV);
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
        FormFactory.removeAllFormFromQuene = function (name, callback) {
            for (var i = 0; i < this.formQuene.length; i++) {
                var item = this.formQuene[i];
                if (item.formName == name) {
                    for (var j = 0; j < item.quene.length; j++) {
                        var formKeyValue = item.quene[j];
                        item.quene.splice(j, 1);
                        this.addFrom2Cached(name, formKeyValue);
                        if (callback)
                            callback(formKeyValue);
                        j--;
                    }
                    break;
                }
            }
        };
        FormFactory.prototype.getLayout = function (url, callback) {
            var _this = this;
            if (!this.mCachedLayout) {
                this.mLayoutQuene.push(callback);
                if (this.mLayoutQuene.length == 1)
                    moosnow.http.request(url, {}, 'GET', function (res) {
                        _this.mCachedLayout = res;
                        _this.mLayoutQuene.forEach(function (item) {
                            item(res);
                        });
                        _this.mLayoutQuene = [];
                    });
            }
            else
                callback(this.mCachedLayout);
        };
        FormFactory.prototype.showForm = function (name, formLogic, formData, parent, remoteLayout, layoutOptions) {
            if (remoteLayout === void 0) { remoteLayout = true; }
            if (layoutOptions === void 0) { layoutOptions = null; }
        };
        FormFactory.prototype.hideForm = function (name, formNode, formData) {
        };
        FormFactory.mInstance = null;
        FormFactory._FormQuene = [];
        FormFactory._CachedQuene = [];
        return FormFactory;
    }());

    var NodeHelper = /** @class */ (function () {
        function NodeHelper() {
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
        NodeHelper.changeSrc = function (image, url) {
        };
        NodeHelper.createMask = function (parent) {
        };
        NodeHelper.nodeNum = 0;
        return NodeHelper;
    }());

    var ROOT_CONFIG = {
        UI_ROOT: "moosnow/prefab/ui/",
        ENTITY_ROOT: "moosnow/prefab/entity/",
        HTTP_ROOT: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com",
    };

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

    var BaseForm = /** @class */ (function (_super) {
        __extends(BaseForm, _super);
        function BaseForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.formComponents = [];
            _this.mNodeMap = [];
            return _this;
        }
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

    var CocosNodeHelper = /** @class */ (function (_super) {
        __extends(CocosNodeHelper, _super);
        function CocosNodeHelper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CocosNodeHelper, "canvasNode", {
            get: function () {
                return cc.Canvas.instance.node;
            },
            enumerable: true,
            configurable: true
        });
        CocosNodeHelper.createNode = function (name) {
            if (!name) {
                name = this.getNodeName();
            }
            var node = new cc.Node();
            node.name = name;
            return node;
        };
        CocosNodeHelper.createImage = function (parent, imgCfg) {
            var node = this.createNode(imgCfg.name);
            node.addComponent(cc.Sprite);
            this.changeSrc(node, imgCfg.url);
            node.x = imgCfg.x;
            node.y = imgCfg.y;
            node.width = imgCfg.width == "canvasWidth" ? this.canvasNode.width : parseInt("" + imgCfg.width);
            node.height = imgCfg.height == "canvasHeight" ? this.canvasNode.height : parseInt("" + imgCfg.height);
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
            var node = this.createNode(textCfg.name);
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
            node.width = textCfg.width == "canvasWidth" ? this.canvasNode.width : parseInt("" + textCfg.width);
            node.height = textCfg.height == "canvasHeight" ? this.canvasNode.height : parseInt("" + textCfg.height);
            parent.addChild(node);
            return node;
        };
        CocosNodeHelper.changeSrc = function (image, url, callback) {
            var sprite = image.getComponent(cc.Sprite);
            if (url) {
                var isRemote = url.indexOf("http") != -1;
                if (cc.resources)
                    if (!isRemote)
                        cc.resources.load(url, cc.SpriteFrame, function (err, spriteFrame) {
                            if (err) {
                                console.log(' cc.resources.load ', err);
                                return;
                            }
                            sprite.spriteFrame = spriteFrame;
                            if (callback)
                                callback();
                        });
                    else {
                        cc.assetManager.loadRemote(url, cc.SpriteFrame, function (err, tex) {
                            if (err) {
                                console.log(' cc.assetManager.loadRemote ', err);
                                return;
                            }
                            var spriteFrame = new cc.SpriteFrame(tex);
                            sprite.spriteFrame = spriteFrame;
                            if (callback)
                                callback();
                        });
                    }
                else {
                    cc.loader.load(url, function (err, tex) {
                        if (err) {
                            console.log(' cc.loader.load ', err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(tex);
                        sprite.spriteFrame = spriteFrame;
                        if (callback)
                            callback();
                    });
                }
            }
        };
        CocosNodeHelper.createMask = function (parent, maskUrl) {
            if (maskUrl === void 0) { maskUrl = undefined; }
            var skin = ROOT_CONFIG.HTTP_ROOT + "/SDK/layout/img_mask.png";
            var mask = this.createNode("img_mask");
            var sprite = mask.addComponent(cc.Sprite);
            var widget = mask.addComponent(cc.Widget);
            widget.isAlignLeft = widget.isAlignTop = widget.isAlignRight = widget.isAlignBottom = true;
            widget.left = widget.top = widget.right = widget.bottom = 0;
            this.changeSrc(mask, skin, function () {
                sprite.type = cc.Sprite.Type.SLICED;
                sprite.spriteFrame.insetBottom = 1;
                sprite.spriteFrame.insetTop = 1;
                sprite.spriteFrame.insetLeft = 1;
                sprite.spriteFrame.insetRight = 1;
                mask.width = parent.width;
                mask.height = parent.height;
            });
            parent.addChild(mask);
            mask.zIndex = -1;
            mask.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
        };
        CocosNodeHelper.onMaskMouseDown = function (e) {
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
        return CocosNodeHelper;
    }(NodeHelper));

    var NodeAttribute = /** @class */ (function () {
        function NodeAttribute() {
            this.x = 0;
            this.y = 0;
            this.width = 0;
            this.height = 0;
            this.url = "";
            this.isMask = false;
            this.maskUrl = "";
            this.child = null;
            this.event = [];
            this.type = "";
        }
        NodeAttribute.parse = function (json) {
            return __assign(__assign({}, new NodeAttribute()), json);
        };
        return NodeAttribute;
    }());

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

    var CocosFormFactory = /** @class */ (function (_super) {
        __extends(CocosFormFactory, _super);
        function CocosFormFactory() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CocosFormFactory, "instance", {
            get: function () {
                if (!this.mInstance)
                    this.mInstance = new CocosFormFactory();
                return this.mInstance;
            },
            enumerable: true,
            configurable: true
        });
        CocosFormFactory.prototype._createChild = function (parent, children) {
            for (var i = 0; i < children.length; i++) {
                var jsonCfg = children[i];
                var node = null;
                var nodeCfg = null;
                if (jsonCfg.type == 'text') {
                    nodeCfg = TextAttribute.parse(jsonCfg);
                    node = CocosNodeHelper.createText(parent, nodeCfg);
                }
                else {
                    nodeCfg = TextAttribute.parse(jsonCfg);
                    node = CocosNodeHelper.createImage(parent, nodeCfg);
                }
                if (nodeCfg.child && nodeCfg.child.length > 0) {
                    this._createChild(node, nodeCfg.child);
                }
            }
        };
        CocosFormFactory.prototype._createUINode = function (formCfg, formLogic, formData) {
            var formNode = CocosNodeHelper.createImage(CocosNodeHelper.canvasNode, formCfg);
            if (formCfg.isMask)
                CocosNodeHelper.createMask(formNode, formCfg.maskUrl);
            this._createChild(formNode, formCfg.child);
            var logic = new formLogic();
            logic.initForm(formNode);
            logic.willShow(formData);
            formNode.active = true;
            logic.onShow(formNode);
            FormFactory.addForm2Quene(formCfg.name, formNode, logic);
        };
        CocosFormFactory.prototype.hideForm = function (name, formNode, formData) {
            if (formNode) {
                FormFactory.removeFormFromQuene(name, formNode, function (formKV) {
                    formKV.formLogic.willHide(formData);
                    formKV.formNode.active = false;
                    formKV.formLogic.onHide(formData);
                });
            }
            else
                FormFactory.removeAllFormFromQuene(name, function (formKV) {
                    formKV.formLogic.willHide(formData);
                    formKV.formNode.active = false;
                    formKV.formLogic.onHide(formData);
                });
        };
        CocosFormFactory.prototype.showForm = function (name, formLogic, formData, parent, remoteLayout, layoutOptions) {
            var _this = this;
            if (remoteLayout === void 0) { remoteLayout = true; }
            if (layoutOptions === void 0) { layoutOptions = null; }
            if (!parent)
                parent = CocosNodeHelper.canvasNode;
            var formKV = FormFactory.getFormFromCached(name);
            if (formKV) {
                parent.addChild(formKV.formNode);
                formKV.formLogic.willShow(formData);
                formKV.formNode.active = true;
                formKV.formLogic.onShow(formData);
                FormFactory.addForm2Quene(name, formKV);
            }
            else {
                var url = 'https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/Game/demo/layout.json';
                if (remoteLayout) {
                    this.getLayout(url, function (res) {
                        if (res[name]) {
                            var formCfg = NodeAttribute.parse(res[name]);
                            formCfg.name = name;
                            _this._createUINode(formCfg, formLogic, formData);
                            console.log('_createUINode ', Date.now());
                        }
                    });
                }
                else {
                    this._createUINode(layoutOptions, formLogic, formData);
                }
            }
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
        CocosBaseForm.prototype.onTouchStart = function (e) {
            console.log('onMouseDown');
            this.downAnim(e.getCurrentTarget());
            if (this.mDowning)
                return;
            this.mDowning = true;
        };
        CocosBaseForm.prototype.onTouchEnd = function (e) {
            var _this = this;
            console.log('onMouseUp');
            this.upAnim(e.getCurrentTarget(), function () {
                if (_this.mClickQuene[e.getCurrentTarget().uuid])
                    _this.mClickQuene[e.getCurrentTarget().uuid]();
            });
        };
        CocosBaseForm.prototype.onTouchCancel = function (e) {
            this.upAnim(e.getCurrentTarget());
        };
        CocosBaseForm.prototype.applyClickAnim = function (node, callback) {
            if (node && node.uuid) {
                this.mClickQuene[node.uuid] = callback;
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

    var CocosEndForm = /** @class */ (function (_super) {
        __extends(CocosEndForm, _super);
        function CocosEndForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.btnBack = null;
            return _this;
        }
        Object.defineProperty(CocosEndForm.prototype, "FormData", {
            /**
             * 父类缓存willShow，onShow传递到实体的逻辑数据
             */
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        CocosEndForm.prototype.addListener = function () {
            var _this = this;
            this.applyClickAnim(this.btnBack, function () {
                _this.onBack();
            });
        };
        CocosEndForm.prototype.removeListener = function () {
            this.removeClickAnim(this.btnBack);
        };
        CocosEndForm.prototype.willShow = function (data) {
            _super.prototype.willShow.call(this, data);
            moosnow.platform.stopRecord(function () {
                var sys = moosnow.platform.getSystemInfoSync();
                moosnow.http.getAllConfig(function (res) {
                    moosnow.platform.showShareButton({
                        left: sys.windowWidth - res.shareBtnWidth,
                        top: sys.windowHeight - 70
                    });
                });
                moosnow.platform.hideBanner();
                moosnow.platform.hideShareButton();
            });
        };
        CocosEndForm.prototype.onShow = function (data) {
            this.addListener();
        };
        CocosEndForm.prototype.willHide = function () {
            this.removeListener();
        };
        CocosEndForm.prototype.onBack = function () {
            if (this.FormData.callback)
                this.FormData.callback();
        };
        return CocosEndForm;
    }(CocosBaseForm));

    var CocosPauseForm = /** @class */ (function (_super) {
        __extends(CocosPauseForm, _super);
        function CocosPauseForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.btnContinue = null;
            _this.btnHome = null;
            _this.btnReplay = null;
            _this.isMask = false;
            return _this;
            // update (dt) {}
        }
        CocosPauseForm.prototype.addListener = function () {
            var _this = this;
            this.applyClickAnim(this.btnContinue, function () {
                _this.onContinue();
            });
            this.applyClickAnim(this.btnHome, function () {
                _this.onToHome();
            });
            this.applyClickAnim(this.btnReplay, function () {
                _this.onReplay();
            });
        };
        CocosPauseForm.prototype.removeListener = function () {
            this.removeClickAnim(this.btnContinue);
            this.removeClickAnim(this.btnHome);
            this.removeClickAnim(this.btnReplay);
        };
        CocosPauseForm.prototype.willShow = function (data) {
            this.addListener();
            moosnow.platform.hideBanner();
        };
        CocosPauseForm.prototype.willHide = function (data) {
            this.removeListener();
        };
        CocosPauseForm.prototype.onShow = function () {
            moosnow.platform.pauseRecord();
        };
        CocosPauseForm.prototype.onContinue = function () {
            CocosFormFactory.instance.hideForm("pauseForm", null, null);
        };
        CocosPauseForm.prototype.onToHome = function () {
            moosnow.platform.stopRecord();
        };
        CocosPauseForm.prototype.onReplay = function () {
            moosnow.platform.stopRecord(function () {
                moosnow.platform.startRecord();
            });
        };
        return CocosPauseForm;
    }(CocosBaseForm));

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
         * @param callback
         */
        function CheckboxComponent(callback) {
            var _this = _super.call(this) || this;
            _this.checked = null;
            _this.unchecked = null;
            _this.mCheckedVideo = true;
            _this.mCanNum = 0;
            _this.mCheckBoxMistouch = false;
            _this.mClickNum = 0;
            _this.mVideoNum = 4;
            _this.toggleCallback = callback;
            return _this;
        }
        CheckboxComponent.prototype.addListener = function () {
            var _this = this;
            this.applyClickAnim(this.unchecked, function () {
                _this.checkToggle(true);
            });
            this.applyClickAnim(this.checked, function () {
                _this.checkToggle(true);
            });
        };
        CheckboxComponent.prototype.removeListener = function () {
            this.removeClickAnim(this.checked);
            this.removeClickAnim(this.unchecked);
        };
        CheckboxComponent.prototype.onReceive = function () {
            var _this = this;
            if (this.mCheckedVideo) {
                moosnow.platform.showVideo(function (res) {
                    if (res == moosnow.VIDEO_STATUS.END) {
                        if (_this.FormData.videoCallback)
                            _this.FormData.videoCallback();
                    }
                    else if (res == moosnow.VIDEO_STATUS.ERR) {
                    }
                    else {
                    }
                });
            }
            else {
                if (this.FormData.callback)
                    this.FormData.callback();
            }
        };
        CheckboxComponent.prototype.checkToggle = function (mistouch) {
            if (mistouch === void 0) { mistouch = false; }
            if (mistouch && this.mCheckBoxMistouch) {
                this.mClickNum++;
                if (this.mClickNum == this.mVideoNum) {
                    moosnow.platform.showVideo(function () { });
                }
                if (this.mClickNum >= this.mCanNum) {
                    this.checked.active = this.mCheckedVideo;
                    this.unchecked.active = !this.mCheckedVideo;
                    this.sendEventImmediately();
                    this.mCheckedVideo = !this.mCheckedVideo;
                }
                return;
            }
            this.checked.active = this.mCheckedVideo;
            this.unchecked.active = !this.mCheckedVideo;
            this.sendEventImmediately();
            this.mCheckedVideo = !this.mCheckedVideo;
        };
        CheckboxComponent.prototype.onShow = function (data) {
            var _this = this;
            moosnow.http.getAllConfig(function (res) {
                _this.mCanNum = MathUtils.probabilitys(res.checkBoxProbabilitys) + 1;
                _this.mCheckBoxMistouch = res.checkBoxMistouch == 1;
            });
            this.addListener();
            this.mCheckedVideo = true;
            this.checkToggle();
            this.sendEventImmediately();
        };
        CheckboxComponent.prototype.sendEventImmediately = function () {
            if (this.toggleCallback)
                this.toggleCallback(this.mCheckedVideo);
        };
        CheckboxComponent.prototype.willHide = function () {
            this.removeListener();
        };
        return CheckboxComponent;
    }(CocosBaseComponent));

    var CocosTotalForm = /** @class */ (function (_super) {
        __extends(CocosTotalForm, _super);
        function CocosTotalForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.checked = null;
            _this.unchecked = null;
            _this.btnContinue = null;
            _this.coinNum = null;
            _this.videoText = null;
            _this.mCheckedVideo = false;
            _this.formComponents = [
                new CheckboxComponent(function (e) {
                    _this.mCheckedVideo = e;
                })
            ];
            _this.mLevelCoinNum = 0;
            _this.mLevelShareCoinNum = 0;
            return _this;
        }
        Object.defineProperty(CocosTotalForm.prototype, "FormData", {
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        CocosTotalForm.prototype.addListener = function () {
            var _this = this;
            this.applyClickAnim(this.btnContinue, function () {
                _this.onReceive();
            });
        };
        CocosTotalForm.prototype.removeListener = function () {
            this.removeClickAnim(this.btnContinue);
        };
        CocosTotalForm.prototype.onReceive = function () {
            var _this = this;
            if (this.mCheckedVideo) {
                moosnow.platform.showVideo(function (res) {
                    if (res == moosnow.VIDEO_STATUS.END) {
                        if (_this.FormData.videoCallback)
                            _this.FormData.videoCallback();
                    }
                    else if (res == moosnow.VIDEO_STATUS.ERR) {
                    }
                    else {
                    }
                });
            }
            else {
                if (this.FormData.callback)
                    this.FormData.callback();
            }
        };
        CocosTotalForm.prototype.onShow = function (data) {
            _super.prototype.onShow.call(this, data);
            this.mLevelCoinNum = this.FormData.coinNum;
            this.mLevelShareCoinNum = this.FormData.coinNum;
            this.videoText.getComponent(cc.Label).string = "" + this.FormData.videoText;
            this.coinNum.getComponent(cc.Label).string = "" + Common.formatMoney(this.mLevelCoinNum);
            this.addListener();
            moosnow.platform.stopRecord();
            moosnow.platform.showBanner();
        };
        CocosTotalForm.prototype.willHide = function (data) {
            _super.prototype.willHide.call(this, data);
            this.removeListener();
            moosnow.platform.hideBanner();
        };
        return CocosTotalForm;
    }(CocosBaseForm));

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
            this.node.on(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
            this.node.zIndex = cc.macro.MAX_ZINDEX;
            this.msgText.getComponent(cc.Label).string = msg;
            this.node.active = true;
            this.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1)));
            this.scheduleOnce(this.hide, 1);
        };
        CocosToastForm.prototype.willHide = function () {
            this.node.off(CocosNodeEvent.TOUCH_START, this.onMaskMouseDown, this);
        };
        CocosToastForm.prototype.hide = function () {
            // this.node.active = false;
            CocosFormFactory.instance.hideForm("toastForm", null);
        };
        return CocosToastForm;
    }(CocosBaseForm));

    var VIDEO_STATUS = {
        END: "__video_end",
        NOTEND: "__video_not_end",
        ERR: "__video_error"
    };

    var VIDEO_MSG = {
        ERR: "视频正在加载中,请稍后",
        NOTEND: "请完整观看完视频！"
    };

    var CocosTryForm = /** @class */ (function (_super) {
        __extends(CocosTryForm, _super);
        function CocosTryForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.logo = null;
            _this.btnVideo = null;
            _this.btnNext = null;
            _this.mCheckedVideo = false;
            _this.formComponents = [
                new CheckboxComponent(function (e) {
                    _this.mCheckedVideo = e;
                })
            ];
            return _this;
        }
        Object.defineProperty(CocosTryForm.prototype, "FormData", {
            get: function () {
                return this.mFormData;
            },
            enumerable: true,
            configurable: true
        });
        CocosTryForm.prototype.addListener = function () {
            var _this = this;
            this.applyClickAnim(this.btnVideo, function () {
                _this.onVideoTry();
            });
            this.applyClickAnim(this.btnNext, function () {
                _this.onNext();
            });
        };
        CocosTryForm.prototype.removeListener = function () {
            this.removeClickAnim(this.btnVideo);
            this.removeClickAnim(this.btnNext);
        };
        CocosTryForm.prototype.onShow = function (data) {
            _super.prototype.onShow.call(this, data);
            CocosNodeHelper.changeSrc(this.logo, this.FormData.skinUrl);
            this.addListener();
        };
        CocosTryForm.prototype.onHide = function (data) {
            _super.prototype.onHide.call(this, data);
            this.removeListener();
        };
        CocosTryForm.prototype.onVideoTry = function () {
            var _this = this;
            moosnow.platform.showVideo(function (res) {
                if (res == VIDEO_STATUS.END) {
                    if (_this.FormData.videoCallback)
                        _this.FormData.videoCallback();
                }
                else if (res == VIDEO_STATUS.ERR) {
                    moosnow.form.showToast(VIDEO_MSG.ERR);
                }
                else if (res == VIDEO_STATUS.NOTEND) {
                    moosnow.form.showToast(VIDEO_MSG.NOTEND);
                }
            });
        };
        CocosTryForm.prototype.onNext = function () {
            if (this.FormData.callback)
                this.FormData.callback();
        };
        return CocosTryForm;
    }(CocosBaseForm));

    /**
     * 广告结果
     */
    var FormFactory$1 = /** @class */ (function () {
        function FormFactory() {
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
        FormFactory.prototype.showToast = function (msg) {
            CocosFormFactory.instance.showForm("toastForm", CocosToastForm, msg);
        };
        /**
         *  预加载广告
         * @param callback
         */
        FormFactory.prototype.preloadAd = function (callback) {
        };
        /**
         * 显示广告
         * @param adType 广告类型
         * @param callback  有返回按钮时的回调
         * @param zIndex  层级
         */
        FormFactory.prototype.showAd = function (adType, callback, zIndex) {
            if (adType === void 0) { adType = AD_POSITION.NONE; }
            if (zIndex === void 0) { zIndex = 999; }
            //
            if (moosnow.getAppPlatform() == moosnow.APP_PLATFORM.BYTEDANCE && moosnow.platform.isIphone()) {
                console.log('头条iphone 不显示广告');
                return;
            }
            moosnow.event.sendEventImmediately(EventType.AD_VIEW_CHANGE, { showAd: adType, callback: callback, zIndex: zIndex });
        };
        /**
         * 金币动画
         * @param options
         */
        FormFactory.prototype.showCoin = function (options) {
        };
        /**
         * 显示狂点页面
         * @param callback 点击完成回调
         * @param type 类型 仅对QQ平台生效 1 是按钮点击  2 动画点击
         */
        FormFactory.prototype.showMistouch = function (options) {
        };
        /**
         * 显示奖励
         * @param style 金币动画
         * @param baseNum 视频奖励领取的倍数
         * @param showCoinAnim 显示金币动画
         * @param callback
         */
        FormFactory.prototype.showPrize = function (options) {
        };
        /**
         * 显示结算统计页
         * @param coinNum
         * @param callback
         */
        FormFactory.prototype.showTotal = function (options) {
            CocosFormFactory.instance.showForm("totalForm", CocosTotalForm, options);
        };
        /**
        * 显示结算统计页
        * @param coinNum
        * @param callback
        */
        FormFactory.prototype.showEnd = function (options) {
            CocosFormFactory.instance.showForm("endForm", CocosEndForm, options);
        };
        /**
          * 显示结算统计页
          * @param coinNum
          * @param callback
          */
        FormFactory.prototype.showPause = function (options) {
            CocosFormFactory.instance.showForm("pauseForm", CocosPauseForm, options);
        };
        /**
         *  showShare
         */
        FormFactory.prototype.showShare = function (options) {
            CocosFormFactory.instance.showForm("pauseForm", CocosPauseForm, options);
        };
        /**
        *  showShare
        */
        FormFactory.prototype.showTry = function (options) {
            CocosFormFactory.instance.showForm("tryForm", CocosTryForm, options);
        };
        FormFactory.prototype.createForm = function (formName) {
            CocosFormFactory.instance.showForm(formName, CocosEndForm, {});
        };
        return FormFactory;
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
     * 唤起结算页参数
     */
    var showEndOptions = /** @class */ (function (_super) {
        __extends(showEndOptions, _super);
        function showEndOptions() {
            return _super !== null && _super.apply(this, arguments) || this;
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
            return _super !== null && _super.apply(this, arguments) || this;
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
            /**
             * 金币数量
             */
            _this.coinNum = 0;
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
            this.mFormFactory = new FormFactory$1();
            this.mDelay = new Delay();
            if (!window["moosnow"]) {
                console.log('没有引入主SDK');
                return;
            }
            window["moosnow"].form = this.formFactory;
            window["moosnow"].delay = this.delay;
        }
        Object.defineProperty(moosnowUI.prototype, "ui", {
            get: function () {
                return this.mUi;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(moosnowUI.prototype, "formFactory", {
            get: function () {
                return this.mFormFactory;
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
