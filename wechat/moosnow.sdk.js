/**
* VERSION 1.0.0
*/
var conf = {
    sdkAppId: moosnowAppId,
    appConfig: moosnowConfig
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

    function _object2Query(obj) {
        var args = []
        for (var k in obj)
            args.push(k + "=" + obj[k])
        return args.join("&"); // 返回对象  
    }

    function request(url, data, method, success, fail, complete) {
        if (!window.wx) {
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
        } else {
            wx.request({
                url: url,
                data: data,
                header: {
                    'content-type': 'application/json'
                },
                method: method,
                success(res) {
                    if (success)
                        success(res.data);
                },
                fail(res) {
                    if (fail)
                        fail(res);
                },
                complete(res) {
                    if (complete)
                        complete(res);
                }
            })
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


    function getUserId() {
        let key = "liteplay_userid";
        let userid = localStorage.getItem(key);
        if (!userid) {
            userid = generateUUID();
            localStorage.setItem(key, userid);
        }
        return userid;
    }

    function openAppSuccess(appId, toid) {
        //http://api.liteplay.com.cn/admin/box_export_static/exportStatic?appid=test111&to_appid=test222&openid=111111
        let url = baseUrl + 'wx_export_static/exportStatic';
        let openId = getUserId();
        var signParams = {
            openid: openId,
            appid: appId,
            to_appid: toid,
        };

        let data = signParams
        request(url, data, 'POST',
            () => { },
            () => {
                // console.log('openAppSuccess fail');
            },
            () => {
                // console.log('openAppSuccess complete');
            });
    }

    function getRemoteAd(cb) {
        let url = baseUrl + 'wx_export/getExport';
        var signParams = {
            appid: conf.sdkAppId,
        };


        let data = signParams;
        request(url, data, 'POST',
            (res) => {
                let arr = res.data;
                arr.sort(() => Math.random() > 0.5 ? 1 : -1);
                if (cb) {
                    cb(res.data);
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
                res.forEach(item => {
                    retValue = formatRow(retValue, item);
                })
                setCache(retValue)
                callback(retValue)

            })
    }
    var cacheImage = null;
    let cacheKey = `cacheUrl`

    var loadCacheImage = function (callback) {
        if (cacheImage) {
            callback(cacheImage);
        }
        else
            wx.getStorage({
                key: cacheKey,
                success: function (storageVal) {
                    cacheImage = storageVal.data;
                    console.log('cacheKey data  ', storageVal.data)
                },
                fail: function (e) {
                    cacheImage = {}
                    console.log('cacheKey error ', e)
                },
                complete: function () {
                    // for (let file in cacheImage) {
                    //     FileSystemManager.getFileInfo({
                    //         filePath: cacheImage[file],
                    //         success
                    //     })
                    // }

                    callback(cacheImage)
                }
            })
    }

    var getResUrl = function (localUrl) {
        for (let key in cacheImage) {
            if (cacheImage[key] == localUrl)
                return key
        }
        return ""
    }


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
        switch (item.position) {
            case '1':
                retValue.indexLeft.push(item)
                break;
            case '2':
                retValue.indexFloat.push(item)
                break;
            case '3':
                retValue.indexBanner.push(item)

                break;
            case '4':
                retValue.gameEndPage.push(item)
                break;
            case '5':
                retValue.gameRespawnPage.push(item)
                break;
            case '6':
                retValue.exportPage.push(item)
                break;
        }
        return retValue;
    }
    var convertToCacheUrl = function (imgUrl, callback) {
        if (!cacheImage[imgUrl]) {
            downloadImage(imgUrl, function (url) {
                callback(url)
            });
        }
        else {
            callback(cacheImage[imgUrl])
        }
    }
    var saveCacheUrl = function (retValue) {
        let clearItem = [];
        let fileSystemManager = wx.getFileSystemManager();
        for (let url in cacheImage) {
            let removeUrl = true;
            for (let pos in retValue) {
                for (let i = 0; i < retValue[pos].length; i++) {
                    if (retValue[pos][i].atlas == cacheImage[url] || retValue[pos][i].img == cacheImage[url]) {
                        removeUrl = false;
                    }
                }
            }
            if (removeUrl) {
                clearItem.push(url)
            }
        }
        for (let i = 0; i < clearItem.length; i++) {
            if (clearItem[i]) {
                console.log('clear file ', clearItem[i])
                try {
                    fileSystemManager.removeSavedFile(clearItem[i])
                }
                catch (e) {
                    console.log('clear file error ', clearItem[i])
                }

            }
            delete cacheImage[clearItem[i]]
        }
        if (window["wx"])
            wx.setStorage({
                key: cacheKey,
                data: cacheImage
            })
    }

    var downloadImage = function (imgUrl, callback) {
        if (window["wx"])
            wx.downloadFile({
                header: {

                },
                url: imgUrl,
                success(res) {
                    if (res.statusCode === 200) {
                        wx.saveFile({
                            tempFilePath: res.tempFilePath,
                            success: (res) => {
                                cacheImage[`${imgUrl}`] = res.savedFilePath
                                callback(res.savedFilePath)
                            },
                            fail: () => {
                                callback(imgUrl)
                            },
                            complete: () => {

                            },
                        })
                    }
                },
                fail: () => {
                    callback(imgUrl)
                },
                complete: () => {

                },
            })
        else
            callback(imgUrl)

    }

    /**
     * 跳转成功之后数据上报
     * @param {number} row  从loadAd接口中返回的数组项   @example indexLeft[0]
     * @param {string} userid  小游戏中的用户Id
     */
    var collect = function (row, userid) {
        return;
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
                    openAppSuccess(conf.sdkAppId, row.appid, userid)
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

        if (!window.wx) {
            if (isFun(success))
                success();
            return;
        }
        let { appid, path, toid, extraData } = row;
        extraData = extraData || {};
        wx.navigateToMiniProgram({
            appId: appid,
            path: path,
            extraData: extraData,
            success: () => {
                if (window["wx"] && wx.aldSendEvent) {

                    wx.aldSendEvent('跳转', {
                        position: row.position,
                        appid,
                        img: getResUrl(row.atlas || row.img)
                    })
                }

                collect(row)
                if (isFun(success))
                    success();
            },
            fail: (err) => {
                console.log('navigateToMiniProgram error ', err)
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
        if (window["wx"] && window['wx'].aldStage)
            window['wx'].aldStage.onStart({
                stageId: level, //关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
                stageName: level,//关卡名称，该字段必传
                userId: getUserId() //用户ID
            });
    }
    /**
     * 统计结束游戏
     * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     * @param {boolean} isWin 是否成功
     */
    var endGame = function (level, isWin) {
        if (!window["wx"]) return;
        var event = isWin ? "complete" : "fail";
        var desc = isWin ? "关卡完成" : "关卡失败";
        if (window['wx'].aldStage)
            window['wx'].aldStage.onEnd({
                stageId: level, //关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
                stageName: level,//关卡名称，该字段必传
                userId: getUserId, //用户ID
                event: event,   //关卡完成  关卡进行中，用户触发的操作    该字段必传
                params: {
                    desc: desc   //描述
                }
            });
    }
    /**
     * 视频统计
     * @param {number} type 0：视频点击 1：视频观看完成
     * @param {string} info 信息 ex:“领取三倍金币”
     * @param {string} level 关卡数
     */
    var videoPoint = function (type, info, level) {
        if (!window["wx"]) return;
        var name = type == 0 ? "点击视频" : "观看完成视频";
        window['wx'].aldSendEvent(name, { info, level: level + "" });
    }
    /**
     * 通用打点
     * @param {string} name 打点名称
     * @param {Object} data data中的value必须为字符串，ex:{level:"1",info:"3倍领取"}
     */
    var point = function (name, data = null) {
        if (!window["wx"]) return;
        window['wx'].aldSendEvent(name, data);
    }

    /**
     * 检查当前版本的导出广告是否开启
     * @param {string} version 
     * @param {*} callback 
     * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
     */
    function checkVersion(version, callback) {
        if (versionRet != null) {
            callback(versionRet);
            return;
        } else {
            var url = baseUrl + 'wx_list/getAppConfig';
            var signParams = {
                appid: conf.sdkAppId,
            };
            let data = signParams;
            request(url, data, 'POST',
                (res) => {
                    versionRet = res.data.version != version;
                    console.log("获取广告开关：", versionRet);
                    callback(versionRet);
                },
                () => {
                    console.log('checkVersion fail');
                },
                () => {
                    console.log('checkVersion complete');
                }
            );
        }
    }

    /**
     * 获取误点间隔次数，启动游戏时调用
     * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
     */
    function getMisTouchNum(callback) {
        loadCfg(res => {
            loadArea(res2 => {
                disableAd(res, res2, (disable) => {
                    if (disable) {
                        callback(0)
                    }
                    else {
                        callback(parseInt(res.mistouchNum))
                    }
                })
            })
        })
    }
    /**
      * 获取位移间隔次数，启动游戏时调用
      * @param {Funtion} callback 回调参数为mistouchPosNum:int，当misTouchNum=0时关闭误点，当mistouchPosNum=n(0除外)时，每隔n次，触发误点1次
      */
    function getMistouchPosNum(callback) {
        loadCfg(res => {
            loadArea(res2 => {
                disableAd(res, res2, (disable) => {
                    if (disable) {
                        callback(0)
                    }
                    else {
                        callback(parseInt(res.mistouchPosNum))
                    }
                })
            })
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
            loadArea(res2 => {
                disableAd(res, res2, (disable) => {
                    if (disable) {
                        callback({
                            mistouchNum: 0,
                            mistouchPosNum: 0,
                            bannerShowCountLimit: 5
                        })
                    }
                    else {
                        callback(res)
                    }
                })
            })
        })
    }




    function loadCfg(callback) {
        if (cfgData) {
            callback(cfgData);
        }
        else {
            var url = conf.appConfig + "?t=" + Date.now();
            request(url, {}, 'GET',
                (res) => {
                    cfgData = res;
                    callback(cfgData);
                },
                () => {
                    callback(null);
                    console.log('load config json fail');
                }
            );
        }

    }
    function loadArea(callback) {
        if (areaData) {
            callback(areaData)
        }
        else {
            let ipUrl = 'https://api.liteplay.com.cn/admin/wx_config/getLocation';
            request(ipUrl, {}, 'GET', (res2) => {
                areaData = res2;
                callback(areaData)

            }, () => {
                callback(null);
            })
        }

    }

    function getForceExport(callback) {
        loadCfg(res => {
            loadArea(res2 => {
                disabledForceExport(res, res2, (disable) => {
                    callback(disable)
                })
            })
        })

    }

    function disabledForceExport(res, res2, callback) {
        let curTime = formatTime(new Date())
        let inDisabledRegion = false;
        if (res.disabledForceExport) {
            for (let i = 0; i < res.disabledForceExport.length; i++) {
                let region = res.disabledForceExport[i];
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
                    callback(true)
                }
                else {
                    callback(false)
                }
            }

            else {
                callback(true)
            }
        }
        else {
            callback(false)
        }
    }

    function disableAd(res, res2, callback) {
        let curTime = formatTime(new Date())
        let inDisabledRegion = false;
        if (res && res.disabledRegion) {
            for (let i = 0; i < res.disabledRegion.length; i++) {
                let region = res.disabledRegion[i];
                if (res2.data.city.indexOf(region) != -1
                    || res2.data.province.indexOf(region) != -1
                    || res2.data.area.indexOf(region) != -1) {
                    inDisabledRegion = true;
                    break;
                }
            }
        }

        if (inDisabledRegion) {
            if (res.disabledTime && res.disabledTime.length == 2) {
                if (curTime > res.disabledTime[0] && curTime < res.disabledTime[1]) {
                    callback(true)
                }
                else {
                    callback(false)
                }
            }

            else {
                callback(true)
            }
        }
        else {
            callback(false)
        }

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
    sdk.getForceExport = getForceExport;
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
        getForceExport
    }
    let options = {};
    if (window["wx"] && wx.aldSendEvent) {
        options = wx.getLaunchOptionsSync();
        wx.aldSendEvent("来源", {
            origin: options.referrerInfo ? options.referrerInfo.appId : '未知',
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

