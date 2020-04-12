import BaseModule from "./BaseModule";


let ErrorType = {
    ONERROR: "HTTP协议链接出错",
    ONTIMEOUT: "HTTP协议链接超时",
    POSTERROR: "HTTP协议请求出错",
    RETURNERROR: "服务器返回错误code"
};
let GAME_COMMAND = {
    VERIFY_USER: 1,
    CREATE_ROLE: 2,
    CAPTAIN: 3

}
export class HttpModule extends BaseModule {

    private appid: string = "";
    private secret: string = "";
    private versionNumber: string = "";
    public version: string = "1_0_3";
    public baseUrl: string = "https://api.liteplay.com.cn/";

    constructor() {
        super();
    }
    onEnable() {

    }

    /**
     * 
     * @param {*} url 
     * @param {*} data 
     * @param {*} method 
     * @param {*} success 
     * @param {*} fail 
     * @param {*} complete 
     */
    public request(url: string, data: any, method: 'POST' | 'GET', success?: Function, fail?: Function, complete?: Function) {
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
                    }
                    catch (e) {
                        console.error('json parse error ', response)
                        if (fail)
                            fail(e);
                    }
                    // }
                    if (success)
                        success(result);
                }
                else {
                    console.error('error ', response)
                    if (fail)
                        fail(response);
                }
            }
            else {
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
            xhr.send(this._object2Query(data));
        }
        else {
            xhr.send();
        }

    }
    private _object2Query(obj) {
        var args = []
        for (var k in obj)
            args.push(k + "=" + obj[k])
        return args.join("&"); // 返回对象  
    }

    public isDisableArea(callback) {

    }

    /**
       * Loading加载完成
       */
    public finishLoading() {
        this.remote('channel/validUser.html')
    }
    /**
      * Loading加载完成
      */
    public clickBanner() {
        this.remote('channel/clickBanner.html')
    }

    /**
     * Loading加载完成
     */
    public clickVideo() {
        this.remote('channel/clickVideo.html')
    }

    /**
     * 
     */
    public exportUser() {
        this.remote('channel/exportUser.html')
    }




    /**
     * 
     * @param url 
     */
    private remote(url) {
        let userToken = moosnow.data.getToken();
        if (userToken && moosnow.data.getChannelId() != "0" && moosnow.data.getChannelAppId() != "0")
            moosnow.http.request(`${this.baseUrl}${url}`, {
                appid: window["moosnowAppId"],
                user_id: userToken,
                channel_id: moosnow.data.getChannelId(),
                channel_appid: moosnow.data.getChannelAppId()
            }, "POST", (respone) => {

            });
    }



    /**
     * 数据打点
     * @param name  打点名称
     */
    public point(name, data: any = null) {
        if (moosnow.platform.getPlatform() == 'wx') {
            (window['wx'] as any).aldSendEvent(name, data);
        }
    }

    /**
     * 开始游戏
     * @param lvIndex 
     */
    public startGame(lvIndex) {
        let nowLevel = `${lvIndex}.${lvIndex}`;
        moosnow.startGame(nowLevel)
    }
    /**
     * 结束游戏
     * @param isWin 
     * @param level 
     */
    public endGame(isWin, level) {
        // let level = Lite.data.getCurrentLevel();
        let nowLevel = `${level}.${level}`;
        moosnow.endGame(nowLevel, isWin)
    }
}

