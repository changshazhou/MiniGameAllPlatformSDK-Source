import BaseModule from './BaseModule'
import MathUtils from './MathUtils';
import Common from './Common';
export const VIDEO_STATUS = {
    END: "__video_end",
    NOTEND: "__video_not_end",
    ERR: "__video_error"
}
export const VIDEO_MSG = {
    ERR: "今天视频已看完！请明天再试！",
    NOTEND: "请完整观看完视频！"
}
export const SHARE_MSG = {
    FAIL: "请分享到30人以上的群",
}
// var videoLoading: boolean = false;
// var videoCb = null;
export default class PlatformModule extends BaseModule {

    constructor() {
        super();
        window["moosnow"] = this as any;
    }

    public getCache() {
        return (window["moosnow"] as any).cache
    }
    public setCache(val) {
        (window["moosnow"] as any).cache = val
    }


}