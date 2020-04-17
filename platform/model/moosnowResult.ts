import moosnowAdRow from "./moosnowAdRow";

/**
 * 广告返回结果, 结果中所提供的位置仅仅是建议性的，用户可根据实际情况使用所返回的数据
 * 例如 indexBanner 建议是放在首页底部, 用户也可以放置于游戏中
 */
export default class moosnowResult {
    /**
    * 首页底部广告
    */
    public indexBanner: Array<moosnowAdRow> = [];
    /**
     * 首页右上角浮动广告
     */
    public indexFloat: Array<moosnowAdRow> = [];
    /**
     * 首页侧栏
     */
    public indexLeft: Array<moosnowAdRow> = [];
    /**
     * 游戏结束
     */
    public gameEndPage: Array<moosnowAdRow> = [];

    /**
     * 复活页
     */
    public gameRespawnPage: Array<moosnowAdRow> = [];

    /**
     * 导出页
     */
    public exportPage: Array<moosnowAdRow> = [];
}
