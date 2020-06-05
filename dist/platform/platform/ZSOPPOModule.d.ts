import moosnowAdRow from "../model/moosnowAdRow";
import OPPOModule from "./OPPOModule";
export default class ZSOPPOModule extends OPPOModule {
    /**
    * 检查当前版本的导出广告是否开启
    * @param {string} version
    * @param {*} callback
    * @returns callback回调函数的参数为boolean，true：打开广告，false：关闭广告
    */
    checkVersion(version: any, callback: any): void;
    login(success?: Function, fail?: Function): void;
    /**
     * 跳转到指定App
     * @param row
     * @param success
     * @param fail
     * @param complete
     */
    navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function): void;
    private navigateCallback;
}
