import BaseModule from "./BaseModule";
import Common from "./Common";
import moosnowResult from "./moosnowResult";
import moosnowAdRow from "../dist/moosnowAdRow";



export default class AdModule extends BaseModule {

    private baseUrl: string = "https://api.liteplay.com.cn/admin/";

    constructor() {
        super();
    }
    /**
     * 随机去除重复数据
     * @param source 
     */
    private getDistinctAd(source) {
        let retValue: Array<moosnowAdRow> = [];

        //第一步随机打乱    
        let temp = source.sort((a, b) => {
            return Math.random() > 0.5 ? 1 : -1
        })

        for (let i = 0; i < temp.length; i++) {
            let item = temp[i] as moosnowAdRow;
            let append = true;
            for (let j = 0; j < retValue.length; j++) {
                let retItem = retValue[j];
                if (retItem.appid == item.appid) {
                    append = false
                    break;
                }
            }
            if (append)
                retValue.push(item)
        }

        return retValue;
    }
    /**
     * 获取广告数据 目前仅有indexLeft提供使用
     * @param {*} callback 
     * @returns  more 更多好玩 个人中心的广告 现已经不用了
     *   promotion 首页推广   首页开始按钮下的广告
     *   indexFloat 首页浮动广告 首页右上的广告
     *   indexLeft 首页侧栏
     *   gameFloat 游戏页浮动广告 
     *   endPage 结束页广告
     */
    public getAd(callback: (appList: moosnowResult) => {}): void {
        let cache = this.getCache();
        if (!Common.isEmpty(cache)) {
            let distinctAd = this.getDistinctAd(cache.indexLeft)
            let temp = {
                ...cache,
                indexLeft: distinctAd
            }
            callback(temp)
        }
        else
            this.getRemoteAd((res) => {
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
                let distinctAd = this.getDistinctAd(retValue.indexLeft)
                let temp = {
                    ...cache,
                    indexLeft: distinctAd
                }
                callback(temp)

            })
    }

    private getRemoteAd(cb) {
        let url = this.baseUrl + 'wx_export/getExport';
        var signParams = {
            appid: window["moosnowConfig"].moosnowAppId,
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

    private mMemory = {};
    private getCache = function () {
        return this.mMemory;
    }
    private setCache = function (val) {
        this.mMemory = val;
    }
}