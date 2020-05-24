import moosnowAdRow from "./moosnowAdRow";
/**
 * 广告返回结果, 结果中所提供的位置仅仅是建议性的，用户可根据实际情况使用所返回的数据
 * 例如 indexBanner 建议是放在首页底部, 用户也可以放置于游戏中
 */
export default class moosnowResult {
    /**
    * 首页底部广告
    */
    indexBanner: Array<moosnowAdRow>;
    /**
     * 首页右上角浮动广告
     */
    indexFloat: Array<moosnowAdRow>;
    /**
     * 首页侧栏
     */
    indexLeft: Array<moosnowAdRow>;
    /**
     * 游戏结束
     */
    gameEndPage: Array<moosnowAdRow>;
    /**
     * 复活页
     */
    gameRespawnPage: Array<moosnowAdRow>;
    /**
     * 导出页
     */
    exportPage: Array<moosnowAdRow>;
}
