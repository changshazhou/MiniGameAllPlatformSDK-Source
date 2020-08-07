/**
 * 广告结果
 */
export default class moosnowAdRow {
    /**
     * 微信小程序的ID  
     */
    public appid: string = "";
    public boxAppid: string = "";
    public desc: string = "";
    public img: string = "";
    public path: string = "";
    public title: string = "";
    public atlas: string = "";
    /**
     * oppo跳转需要使用
     */
    public pkgName: string = "";
    public extraData: any = "";
    /**
     * 位置描述
     */
    public position: string = "";
    /**
     * 取消时的回调
     */
    public onCancel: Function = null;

    /**
     * 显示的顺序
     */
    public index: number = 0

    /**
    * 点击后是否刷新
    */
    public refresh: boolean = false

    
    public showIds: Array<moosnowAdRow> = null;

    public source: Array<moosnowAdRow> = null;


}