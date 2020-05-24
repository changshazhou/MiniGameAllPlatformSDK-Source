window.moosnowConfig = {
    debug: "vivo",
    /**
     * 微信平台
     */
    wx: {
        bannerId: "adunit-e51b3123060eec9e",   //请填写你自己的APP banner id
        videoId: "adunit-a322f5ee40076372",    //请填写你自己的APP video id
        interId: "adunit-7c61767905a3940a", //请填写你自己的APP inter id   
        nativeId: "",
        moosnowAppId: "wxeea828178bcda2e9", //请填写你自己的APP id
        version: "1.1.0",
        url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_hzyx_config_wx.json",//游戏的配置json，如果用到了getMistouchNum,后台必须配置mistouchNum字段
    },
    oppo: {
        bannerId: "168776",
        videoId: "168781",
        interId: "168777",
        nativeId: ["168779", "168780"],
        moosnowAppId: "30251588",
        version: "1.1.0",
        url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_hzyx_config_wx.json",
    },
    vivo: {
        bannerId: "179400",
        videoId: "179406",
        interId: "168777",
        nativeId: ["179404", "179405"],
        moosnowAppId: "100006157",
        version: "1.1.0",
        url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhc_user_vivo.json",//游戏的配置json，如果用到了getMistouchNum,后台必须配置mistouchNum字段
    },
    qq: {
        bannerId: "34c452729bdb7803449ea3ecb964adb5",
        videoId: "e8b4dafd255989e8978949a0207c66c7",
        interId: "",
        boxId: "51aa10cf3cbeb175be37cf7a1a336513",
        nativeId: ["", ""],
        moosnowAppId: "1110464664",
        version: "1.1.0",
        url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhcar_config.json",//游戏的配置json，如果用到了getMistouchNum,后台必须配置mistouchNum字段
    },
    bd: {
        bannerId: "168776",
        videoId: "168781",
        interId: "168777",
        nativeId: ["168779", "168780"],
        moosnowAppId: "30251588",
        version: "1.1.0",
        url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhcar_config.json",//游戏的配置json，如果用到了getMistouchNum,后台必须配置mistouchNum字段
    },
    byte: {
        bannerId: "168776",
        videoId: "168781",
        interId: "168777",
        nativeId: ["168779", "168780"],
        moosnowAppId: "30251588",
        version: "1.1.0",
        url: "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/config/tp_zzxhcar_config.json",//游戏的配置json，如果用到了getMistouchNum,后台必须配置mistouchNum字段
    }
}