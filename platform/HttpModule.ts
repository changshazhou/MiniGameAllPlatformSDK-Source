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
        this.postData('channel/validUser.html')
    }
    /**
      * Loading加载完成
      */
    public clickBanner() {
        this.postData('channel/clickBanner.html')
    }

    /**
     * Loading加载完成
     */
    public clickVideo() {
        this.postData('channel/clickVideo.html')
    }

    /**
     * 
     */
    public exportUser() {
        this.postData('channel/exportUser.html')
    }




    /**
     * 
     * @param url 
     */
    private postData(url) {
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
    * 统计开始游戏
    * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
    */
    public startGame(level) {
        if (window["wx"])
            window['wx'].aldStage.onStart({
                stageId: level, //关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
                stageName: level,//关卡名称，该字段必传
                userId: moosnow.data.getToken() //用户ID
            });
    }
    /**
     * 统计结束游戏
     * @param {string} level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     * @param {boolean} isWin 是否成功
     */
    public endGame(level, isWin) {
        if (!window["wx"]) return;
        var event = isWin ? "complete" : "fail";
        var desc = isWin ? "关卡完成" : "关卡失败";
        window['wx'].aldStage.onEnd({
            stageId: level, //关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
            stageName: level,//关卡名称，该字段必传
            userId: moosnow.data.getToken(), //用户ID
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
    public videoPoint(type, info, level) {
        if (!window["wx"]) return;
        var name = type == 0 ? "点击视频" : "观看完成视频";
        window['wx'].aldSendEvent(name, { info, level: level + "" });
    }
}

