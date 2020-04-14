declare interface moosnowAdRow {
    appid: string,
    boxAppid: string,
    desc: string,
    img: string,
    path: string,
    title: string,
    atlas: string,
    /**
     * oppo跳转需要使用
     */
    pkgName: string,
    extraData: any,
    position: string
}
/**
 * 广告返回结果, 结果中所提供的位置仅仅是建议性的，用户可根据实际情况使用所返回的数据
 * 例如 indexBanner 建议是放在首页底部, 用户也可以放置于游戏中
 */
declare interface moosnowResult {
    /**
    * 首页底部广告
    */
    indexBanner: Array<moosnowAdRow>,
    /**
     * 首页右上角浮动广告
     */
    indexFloat: Array<moosnowAdRow>,
    /**
     * 首页侧栏
     */
    indexLeft: Array<moosnowAdRow>,
    /**
     * 游戏结束
     */
    gameEndPage: Array<moosnowAdRow>,

    /**
     * 复活页
     */
    gameRespawnPage: Array<moosnowAdRow>,

    /**
     * 导出页
     */
    exportPage: Array<moosnowAdRow>,
}

declare namespace moosnow {
    /**
     * 加载广告
     * @param callback  加载完成回调
     */
    export function getAd(callback: (res: moosnowResult) => void): void;

    /**
     * 用户点击广告时调用，会自动跳转到小程序，无需用户使用 wx.navigateToMiniProgram
     * @param row 用户点击到的广告数据
     * @param success 跳转成功回调
     * @param fail 跳转失败回调
     * @param complete  跳转完成回调
     */
    export function navigate2Mini(row: moosnowAdRow, success?: Function, fail?: Function, complete?: Function): void;

    /**
     * 统计开始游戏
     * @param level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     */
    export function startGame(level: string): void;

    /**
     * 统计结束游戏
     * @param level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     * @param isWin 是否成功
     */
    export function endGame(level: string, isWin: boolean): void

    /**
     * 视频统计
     * @param type 0：视频点击 1：视频观看完成
     * @param info 信息 ex:“领取三倍金币”
     * @param level 关卡数
     */
    export function videoPoint(type: number, info: string, level: string): void

    /**
     * 通用打点
     * @param name 打点名称
     * @param data data中的value必须为字符串，ex:{level:"1",info:"3倍领取"}
     */
    export function point(name: string, data?: Object): void

    /**
     * 检查当前版本的导出广告是否开启
     * @param version 当前本地的版本号
     * @param callback callback回调函数的参数为boolean，true：打开广告，false：关闭广告
     */
    export function checkVersion(version: string, callback: Function): void


    /**
     * 获取误点间隔次数，启动游戏时调用
     * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
     */
    export function getMisTouchNum(callback: Function): void


    /**
     * 获取位移间隔次数，启动游戏时调用
     * @param {Funtion} callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，当misTouchNum=n(0除外)时，每隔n次，触发误点1次
     */
    export function getMistouchPosNum(callback: Function): void


    /**
     * 获取展现banner的最大次数
     * @param callback 
     */
    export function getBannerShowCountLimit(callback: Function): void



    /**
     * 平台登录
     * @param callback 
     */
    export function platformLogin(callback: Function): void


    /**
     * 获取后台配置数据
     * @param callback 
     */
    export function getAllConfig(callback: Function): void

    /**
     * 获取是否禁用强力导出
     * @param disable 
     */
    export function getForceExport(disable: boolean): void


}
