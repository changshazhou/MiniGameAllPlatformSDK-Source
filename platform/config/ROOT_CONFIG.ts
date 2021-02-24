export default class ROOT_CONFIG {
    constructor() {

    }
    public static UI_ROOT: "moosnow/prefab/ui/";
    public static ENTITY_ROOT: "moosnow/prefab/entity/";
    public static get HTTP_ROOT() {
        let retValue = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com";
        if (window && window["HTTP_ROOT"]) {
            retValue = window["HTTP_ROOT"]
        }
        return retValue;
    }
}