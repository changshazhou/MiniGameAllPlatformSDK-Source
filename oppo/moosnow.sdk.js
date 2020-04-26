var conf = {
    sdkAppId: window["moosnowConfig"]["moosnowAppId"],
    appConfig: window["moosnowConfig"].url,
    version: window["moosnowConfig"].version,
};//

; (function () {
    function sdk() {
        // ...
    }

    /**
     * *******************************************************************************
     */
    var baseUrl = "https://api.liteplay.com.cn/admin/";
    var versionRet = null;
    var misTouchNum = null;
    var inDisabledRegion = false;
    var cfgData = null;
    var areaData = null;
    var userKey = "liteplay_userid";

    function _object2Query(obj) {
        var args = []
        for (var k in obj)
            args.push(k + "=" + obj[k])
        return args.join("&"); // 返回对象  
    }

    function request(url, data, method, success, fail, complete) {
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
                        result = JSON.parse(response)
                    } catch (e) {
                        console.error('json parse error ', response)
                        if (fail)
                            fail(e);
                    }
                    // }
                    if (success)
                        success(result);
                } else {
                    console.error('error ', response)
                    if (fail)
                        fail(response);
                }
            } else {
                // cc.log('caller state change  ', xhr)
                // console.log('caller state change  ', xhr)
            }
        };
        xhr.timeout = 3000;
        xhr.ontimeout = function (event) {
            console.error('error ', event)
            if (fail)
                fail(event);
        }
        xhr.open(method, url, true);
        if (method == "POST") {
            xhr.open('POST', url);
            xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
            xhr.send(_object2Query(data));
        } else {
            xhr.send();
        }
    }

    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        uuid = uuid.replace(/-/g, "");
        return uuid;
    }

    function setUserId(userid) {
        localStorage.setItem(userKey, userid);
    }

    function getUserId() {
        let userid = localStorage.getItem(userKey);
        if (!userid) {
            userid = generateUUID();
            this.setUserId(userid);
        }
        return userid;
    }

    function navigateCallback(appId, toid) {

        let url = 'https://platform.qwpo2018.com/api/apk_ad/click_log';
        let openId = getUserId();
        var signParams = {
            user_id: openId,
            apk_id: conf.sdkAppId,
            appid: appId,
            link_id: appId,
        };

        let data = signParams
        request(url, data, 'POST',
            (res) => {
                console.log('upload navigate success', res)
            },
            (res) => {
                console.log('upload navigate fail', res)
            },
            () => {
                console.log('upload navigate complete');
            });
    }

    function getRemoteAd(cb) {
        let url = 'https://platform.qwpo2018.com/api/apk_ad/index';
        var signParams = {
            apk_id: conf.sdkAppId,
        };
        let data = signParams;
        request(url, data, 'POST',
            (res) => {
                let arr = res.data;
                arr.sort(() => Math.random() > 0.5 ? 1 : -1);
                if (cb) {
                    var retValue = []
                    for (var i = 0; i < arr.length; i++) {
                        var item = arr[i]
                        retValue.push({
                            appid: item.link_appid,
                            boxAppid: "",
                            desc: item.link_des,
                            img: item.link_img,
                            path: item.link_path,
                            title: item.link_name,
                            pkgName: item.link_page,
                            atlas: ""
                        })
                    }
                    cb(retValue);
                }
            },
            () => {
                console.log('getRemoteAd fail');
            },
            () => {
                console.log('getRemoteAd complete');
            }
        );
    }
    var getCache = function () {
        window.moosnow = window.moosnow || {}
        // window.zs.cache = window.zs.cache || {}
        return window.moosnow.cache
    }
    var setCache = function (val) {
        window.moosnow = window.moosnow || {}
        window.moosnow.cache = val
    }

    var isFun = function (fun) {
        if (typeof fun == 'function')
            return true
        return false
    }

    /**
     * 获取广告数据
     * @param {*} callback 
     * @returns  more 更多好玩 个人中心的广告 现已经不用了
     *   promotion 首页推广   首页开始按钮下的广告
     *   indexFloat 首页浮动广告 首页右上的广告
     *   indexLeft 首页侧栏
     *   gameFloat 游戏页浮动广告 
     *   endPage 结束页广告
     */
    var getAd = function (callback) {
        let cache = getCache();
        if (cache) {
            for (let k in cache) {
                cache[k].sort(item => Math.random() > 0.5 ? 1 : -1)
            }
            callback(cache)
        }
        else
            getRemoteAd(function (res) {
                let retValue = initRetValue();
                res.forEach(item => {
                    retValue = formatRow(retValue, item);
                })
                setCache(retValue)
                callback(retValue)

            })
    }
    var cacheImage = null;
    let cacheKey = `cacheUrl`
    var initRetValue = function () {
        let retValue = {
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
        }
        return retValue;
    }
    var formatRow = function (retValue, item) {
        retValue.indexLeft.push(item)
        retValue.indexFloat.push(item)
        retValue.indexBanner.push(item)
        retValue.gameEndPage.push(item)
        retValue.gameRespawnPage.push(item)
        retValue.exportPage.push(item)
        return retValue;
    }


    /**
     * 跳转成功之后数据上报
     * @param {number} row  从loadAd接口中返回的数组项   @example indexLeft[0]
     * @param {string} userid  小游戏中的用户Id
     */
    var collect = function (row, userid) {
        let n = Date.now();
        if ((window.lastCollect && n < window.lastCollect - 1000)) {
            return;
        }
        window.lastCollect = n;
        let cache = getCache();
        let openSuccess = false;
        for (var k in cache) {
            let adArr = cache[k];
            for (let i = 0; i < adArr.length; i++) {
                let item = adArr[i];
                if (item.appid == row.appid) {
                    openSuccess = true;
                    navigateCallback(conf.sdkAppId, row.appid, userid)
                    break;
                }
            }
            if (openSuccess)
                break;
        }
    }

    var prevNavigate = Date.now();

    /**
     * 跳转小程序
     * @param {*} row    从loadAd接口中返回的数组项   @example indexLeft[0]
     * @param {*} openid 小游戏中的用户openid
     * @param {function} success 接口调用成功的回调函数
     * @param {function} fail 接口调用失败的回调函数
     * @param {function} complete 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    var navigate2Mini = function (row, success, fail, complete) {

        if (Date.now() - prevNavigate < 300) {
            console.log('>>>>>>>>>>>>>>>>>>>>> ')
            return;
        }
        prevNavigate = Date.now();

        if (!window.qg) {
            if (isFun(success))
                success();
            return;
        }
        let { appid, path, toid, extraData, pkgName } = row;
        extraData = extraData || {};
        qg.navigateToMiniGame({
            pkgName: pkgName,
            path: path||"?a=1",
            extraData: extraData,
            success: () => {
                collect(row)
                if (isFun(success))
                    success();
            },
            fail: () => {
                if (isFun(fail))
                    fail();
            },
            complete: () => {
                if (isFun(complete))
                    complete();
            }
        })
    }
    /**
     * 统计开始游戏
     * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     */
    var startGame = function (level) {

    }
    /**
     * 统计结束游戏
     * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     * @param {boolean} isWin 是否成功
     */
    var endGame = function (level, isWin) {

    }
    /**
     * 视频统计
     * @param {number} type 0：视频点击 1：视频观看完成
     * @param {string} info 信息 ex:“领取三倍金币”
     * @param {string} level 关卡数
     */
    var videoPoint = function (type, info, level) {

    }
    /**
     * 通用打点
     * @param {string} name 打点名称
     * @param {Object} data data中的value必须为字符串，ex:{level:"1",info:"3倍领取"}
     */
    var point = function (name, data = null) {

    }

    /**
     * 检查当前版本的导出广告是否开启
     * @param {string} version 
     * @param {*} callback 
     * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
     */
    function checkVersion(version, callback) {
        loadCfg(res => {
            callback((res.zs_version == version))
        })
    }

    /**
     * 获取误点间隔次数，启动游戏时调用
     * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
     */
    function getMisTouchNum(callback) {
        loadCfg(res => {
            callback(parseInt(res.mistouchNum))
        })
    }
    /**
      * 获取位移间隔次数，启动游戏时调用
      * @param {Funtion} callback 回调参数为mistouchPosNum:int，当misTouchNum=0时关闭误点，当mistouchPosNum=n(0除外)时，每隔n次，触发误点1次
      */
    function getMistouchPosNum(callback) {
        loadCfg(res => {
            callback(parseInt(res.mistouchPosNum))
        })
    }





    function getBannerShowCountLimit(callback) {
        loadCfg(res => {
            if (isNaN(res.bannerShowCountLimit))
                callback(5);
            else
                callback(parseInt(res.bannerShowCountLimit))
        })
    }


    function getAllConfig(callback) {
        loadCfg(res => {
            callback(res)
        })
    }

    function loadCfg(callback) {
        if (cfgData) {
            callback(cfgData);
        }
        else {
            var url = 'https://platform.qwpo2018.com/api/list_config/index';
            console.log('appid ', conf.sdkAppId)
            request(url, {
                apk_id: conf.sdkAppId
            }, 'POST',
                (res) => {
                    let enabled = res.data.zs_version == conf.version;
                    cfgData = Object.assign(res.data, {
                        mistouchNum: res.data.zs_switch,
                        mistouchPosNum: res.data.zs_switch,
                        showNative: enabled,
                        showInter: enabled,
                        showExportAd: enabled,
                        lureNative: res.zs_native_click_switch == 1,
                        lureExportAd: res.zs_jump_switch == 1,
                        bannerShowCountLimit: 10
                    })
                    callback(cfgData);
                },
                () => {
                    callback(null);
                    console.log('load config json fail');
                }
            );
        }

    }

    function platformLogin(success, fail) {
        if (window["qg"])
            qg.login({
                success: function (res) {
                    // var data = JSON.stringify(res.data);
                    // console.log(res.data.token);
                    var url = "https://platform.qwpo2018.com/api/oppo_login/index";
                    request(url, {
                        apk_id: conf.sdkAppId,
                        code: res.data.token
                    }, 'POST', (res2) => {
                        setUserId(res2.data.user_id)
                        if (success)
                            success(res2.data)
                        console.log('platformLogin success ', res2)
                    }, (res2) => {
                        if (success)
                            success(null);
                        console.log('platformLogin fail ', res2)
                    })
                },
                fail: function (res) {
                    if (fail)
                        fail(res)
                }
            });
        else
            if (success)
                success()
    }


    function formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    }

    function formatTime(date) {
        // const year = date.getFullYear()
        // const month = date.getMonth() + 1
        // const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        // const second = date.getSeconds()
        return [hour, minute].map(formatNumber).join(':');
        // return [year, month, day].map(formatNumber).join('/')
        // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    }

    sdk.getAd = getAd;
    sdk.navigate2Mini = navigate2Mini;
    sdk.startGame = startGame;
    sdk.endGame = endGame;
    sdk.videoPoint = videoPoint;
    sdk.point = point;
    sdk.checkVersion = checkVersion;
    sdk.getMisTouchNum = getMisTouchNum;
    sdk.getMistouchPosNum = getMistouchPosNum;
    sdk.getBannerShowCountLimit = getBannerShowCountLimit;
    sdk.getAllConfig = getAllConfig;
    window.moosnow = {
        getAd,
        navigate2Mini,
        startGame,
        endGame,
        videoPoint,
        point,
        checkVersion,
        getMisTouchNum,
        getMistouchPosNum,
        getBannerShowCountLimit,
        getAllConfig,
        platformLogin
    }
    let options = {};
    if (window["wx"] && window["wx"].aldSendEvent) {
        options = wx.getLaunchOptionsSync();
        window["wx"].aldSendEvent("来源", {
            origin: options.referrerInfo ? '未知' : options.referrerInfo.appId,
            path: options.query.from || 0
        })
    }

    var moduleName = sdk;
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = moduleName;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () { return moduleName; });
    } else {
        this.moduleName = moduleName;
    }
}).call(function () {
    return this || (typeof window !== 'undefined' ? window : global);
});

