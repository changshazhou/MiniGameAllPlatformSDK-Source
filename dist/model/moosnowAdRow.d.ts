/**
 * 广告结果
 */
export default class moosnowAdRow {
    /**
     * 微信小程序的ID
     */
    appid: string;
    boxAppid: string;
    desc: string;
    img: string;
    path: string;
    title: string;
    atlas: string;
    /**
     * oppo跳转需要使用
     */
    pkgName: string;
    extraData: any;
    /**
     * 位置描述
     */
    position: string;
    /**
     * 取消时的回调
     */
    onCancel: Function;
    /**
     * 显示的顺序
     */
    index: number;
    /**
    * 点击后是否刷新
    */
    refresh: boolean;
}
