import BaseModule from "./BaseModule";

export default class AdModule extends BaseModule {

    private baseUrl: string = "https://api.liteplay.com.cn/admin/";

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
    public getAd(callback) {
        let cache = this.getCache();
        if (cache) {
            for (let k in cache) {
                cache[k].sort(item => Math.random() > 0.5 ? 1 : -1)
            }
            callback(cache)
        }
        else
            this.getRemoteAd(function (res) {
                let retValue = this.initRetValue();
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
                    retValue = this.formatRow(retValue, item);
                })
                this.setCache(retValue)
                callback(retValue)

            })
    }

    private getRemoteAd(cb) {
        let url = this.baseUrl + 'wx_export/getExport';
        var signParams = {
            appid: window["moosnowAppId"],
        };


        let data = signParams;
        moosnow.http.request(url, data, 'POST',
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

    private cacheImage = null;
    private cacheKey: string = `cacheUrl`

    private loadCacheImage(callback) {
        if (this.cacheImage) {
            callback(this.cacheImage);
        }
        else
            wx.getStorage({
                key: this.cacheKey,
                success: function (storageVal) {
                    this.this.cacheImage = storageVal.data;
                    console.log('cacheKey data  ', storageVal.data)
                },
                fail: () => {
                    this.cacheImage = {}
                    console.log('cacheKey error ')
                },
                complete: function () {
                    callback(this.this.cacheImage)
                }
            })
    }

    private getResUrl = function (localUrl) {
        for (let key in this.this.cacheImage) {
            if (this.this.cacheImage[key] == localUrl)
                return key
        }
        return ""
    }


    private initRetValue() {
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
    private formatRow(retValue, item) {
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
    private convertToCacheUrl = function (imgUrl, callback) {
        if (!this.cacheImage[imgUrl]) {
            this.downloadImage(imgUrl, function (url) {
                callback(url)
            });
        }
        else {
            callback(this.cacheImage[imgUrl])
        }
    }
    private saveCacheUrl = function (retValue) {
        let clearItem = [];
        let fileSystemManager = window["wx"].getFileSystemManager() as any;
        for (let url in this.cacheImage) {
            let removeUrl = true;
            for (let pos in retValue) {
                for (let i = 0; i < retValue[pos].length; i++) {
                    if (retValue[pos][i].atlas == this.cacheImage[url] || retValue[pos][i].img == this.cacheImage[url]) {
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
            delete this.cacheImage[clearItem[i]]
        }
        if (window["wx"])
            window["wx"].setStorage({
                key: this.cacheKey,
                data: this.cacheImage,
                success: () => { },
                fail: () => { },
                complete: () => { }
            })
    }

    private downloadImage(imgUrl, callback) {
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
                                this.cacheImage[`${imgUrl}`] = res.savedFilePath
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
    private collect(row, userid) {

    }

    private formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    }

    private formatTime(date) {
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

    private disableAd(res, res2, callback) {
        let curTime = this.formatTime(new Date())
        let inDisabledRegion = false;
        if (res.disabledRegion) {
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


    /**
     * 
     * @param callback 
     */
    public getAllConfig(callback: Function) {
        this.loadCfg(res => {
            this.loadArea(res2 => {
                this.disableAd(res, res2, (disable) => {
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



    /**
        * 获取误点间隔次数，启动游戏时调用
        * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
        */
    private getMisTouchNum(callback) {
        this.loadCfg(res => {
            this.loadArea(res2 => {
                this.disableAd(res, res2, (disable) => {
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
    private getMistouchPosNum(callback) {
        this.loadCfg(res => {
            this.loadArea(res2 => {
                this.disableAd(res, res2, (disable) => {
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

    private getBannerShowCountLimit(callback) {
        this.loadCfg(res => {
            if (isNaN(res.bannerShowCountLimit))
                callback(5);
            else
                callback(parseInt(res.bannerShowCountLimit))
        })
    }



    private cfgData = null;
    private areaData = null;
    public loadCfg(callback) {
        if (this.cfgData) {
            callback(this.cfgData);
        }
        else {
            var url = window["moosnowConfig"] + "?t=" + Date.now();
            moosnow.http.request(url, {}, 'GET',
                (res) => {
                    this.cfgData = res;
                    callback(this.cfgData);
                },
                () => {
                    callback(null);
                    console.log('load config json fail');
                }
            );
        }

    }

    public loadArea(callback) {
        if (this.areaData) {
            callback(this.areaData)
        }
        else {
            let ipUrl = 'https://api.liteplay.com.cn/admin/wx_config/getLocation';
            moosnow.http.request(ipUrl, {}, 'GET', (res2) => {
                this.areaData = res2;
                callback(this.areaData)

            }, () => {
                callback(null);
            })
        }

    }

    private mMemory = {};
    private getCache = function () {
        return this.mMemory;
    }
    private setCache = function (val) {
        this.mMemory = val;
    }
}