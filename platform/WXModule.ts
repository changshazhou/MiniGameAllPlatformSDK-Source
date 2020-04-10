import PlatformModule from './PlatformModule';
import { HttpModule } from './HttpModule';
export default class WXModule extends PlatformModule {
    public platformName: string = "wx";
    public bannerId: string = "adunit-ea921b190e3b0d9e";
    public videoId: string = "adunit-3f5c0e00d3a7966b";
    public interId = "adunit-dbf4276f86e23075";
    public appid: string = "wxfa20fb89cc541bf8";

    private baseUrl = "https://api.liteplay.com.cn/admin/";
    constructor() {
        super();
    }
    getRemoteAd(cb) {
        let url = this.baseUrl + 'wx_export/getExport';
        let appid = window["moosnowAppId"]
        var signParams = {
            appid: appid,
        };


        let data = signParams;
        HttpModule.request(url, data, 'POST',
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
                if (window[this.platformName])
                    (window[this.platformName] as any).getStorage({
                        key: this.cacheKey,
                        success: function (storageVal) {
                            this.cacheImage = storageVal.data;
                            console.log('cacheKey data  ', storageVal.data)
                        },
                        fail: function (e) {
                            this.cacheImage = {}
                            console.log('cacheKey error ', e)
                        },
                        complete: function () {
                            res.forEach(item => {
                                let remoteUrl = item.atlas ? item.atlas : item.img
                                this.convertToCacheUrl(remoteUrl, function (url) {
                                    if (item.atlas)
                                        item.atlas = url;
                                    if (item.img)
                                        item.img = url;
                                    retValue = this.formatRow(retValue, item);
                                    if ((retValue.indexLeft.length
                                        + retValue.indexFloat.length
                                        + retValue.indexBanner.length
                                        + retValue.gameEndPage.length
                                        + retValue.gameRespawnPage.length
                                        + retValue.exportPage.length
                                    ) == res.length) {
                                        this.saveCacheUrl(retValue);
                                        this.setCache(retValue)
                                        callback(retValue)
                                    }
                                })
                            })

                        }
                    })
                else {
                    res.forEach(item => {
                        retValue = this.formatRow(retValue, item);
                    })
                    this.setCache(retValue)
                    callback(retValue)
                }

            })
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
    private cacheImage = {};
    private cacheKey = "";
    private convertToCacheUrl(imgUrl, callback) {
        if (!this.cacheImage[imgUrl]) {
            this.downloadImage(imgUrl, function (url) {
                callback(url)
            });
        }
        else {
            callback(this.cacheImage[imgUrl])
        }
    }
    private saveCacheUrl(retValue) {
        let clearItem = [];
        let fileSystemManager = window[this.platformName].getFileSystemManager();
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
            window[this.platformName].setStorage({
                key: this.cacheKey,
                data: this.cacheImage
            })
    }

    private downloadImage(imgUrl, callback) {
        if (window[this.platformName])
            window[this.platformName].downloadFile({
                header: {

                },
                url: imgUrl,
                success(res) {
                    if (res.statusCode === 200) {
                        (window[this.platformName] as any).saveFile({
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
}