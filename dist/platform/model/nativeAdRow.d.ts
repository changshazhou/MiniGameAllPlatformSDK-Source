export default class nativeAdRow {
    /**
     * 广告标识，用来上报曝光与点击
     */
    adId: string;
    /**
     * 广告标题
     */
    title: string;
    /**
     * 广告描述
     */
    desc: string;
    /**
     * 推广应用的 Icon 图标
     */
    icon: string;
    /**
     * 广告图片
     */
    imgUrlList: Array<string>;
    /**
     * “广告”标签图片
     */
    logoUrl: string;
    /**
     * 点击按钮文本描述
     */
    clickBtnTxt: string;
    /**
     * 获取广告类型，取值说明：
        0：无
        1：纯文字
        2：图片
        3：图文混合
        4：视频
        6. 640x320 大小图文混合
        7. 320x210 大小图文单图
        8. 320x210 大小图文多图
     */
    creativeType: number;
    /**
        获取广告点击之后的交互类型，取值说明：
        0：无
        1：浏览类
        2：下载类
        3：浏览器（下载中间页广告）
        4：打开应用首页
        5：打开应用详情页
   */
    interactionType: number;
}
