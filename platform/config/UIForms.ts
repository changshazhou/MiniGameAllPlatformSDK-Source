export default class UIForms {


    private static get mapping() {

        return {
            adForm: {
                [moosnow.APP_PLATFORM.WX]: "adForm"
            },
            pauseForm: {
                [moosnow.APP_PLATFORM.WX]: "pauseForm",
                [moosnow.APP_PLATFORM.BYTEDANCE]: "pauseFormTT",
                [moosnow.APP_PLATFORM.OPPO]: "pauseFormOPPO",
                [moosnow.APP_PLATFORM.OPPO_ZS]: "pauseFormOPPO",
                [moosnow.APP_PLATFORM.VIVO]: "pauseFormOPPO",
                [moosnow.APP_PLATFORM.QQ]: "pauseFormTT"
            },
            respawnForm: {
                [moosnow.APP_PLATFORM.WX]: "respawnForm",
                [moosnow.APP_PLATFORM.BYTEDANCE]: "respawnFormTT",
                [moosnow.APP_PLATFORM.OPPO]: "respawnFormOPPO",
                [moosnow.APP_PLATFORM.OPPO_ZS]: "respawnFormOPPO",
                [moosnow.APP_PLATFORM.VIVO]: "respawnFormOPPO",
                [moosnow.APP_PLATFORM.QQ]: "respawnFormQQ"
            },
            endForm: {
                [moosnow.APP_PLATFORM.WX]: "endForm",
                [moosnow.APP_PLATFORM.BYTEDANCE]: "endFormTT",
                [moosnow.APP_PLATFORM.OPPO]: "endFormOPPO",
                [moosnow.APP_PLATFORM.OPPO_ZS]: "endFormOPPO",
                [moosnow.APP_PLATFORM.VIVO]: "endFormOPPO"
            },
            totalForm: {
                [moosnow.APP_PLATFORM.WX]: "totalForm",
                [moosnow.APP_PLATFORM.BYTEDANCE]: "totalFormTT",
                [moosnow.APP_PLATFORM.QQ]: "totalFormQQ"
            },
            tryForm: {
                [moosnow.APP_PLATFORM.WX]: "tryForm",
                [moosnow.APP_PLATFORM.BYTEDANCE]: "tryFormTT",
                [moosnow.APP_PLATFORM.QQ]: "tryFormTT"
            },
            mistouchForm: {
                [moosnow.APP_PLATFORM.WX]: "mistouchForm",
                [moosnow.APP_PLATFORM.QQ]: "mistouchFormQQ"
            },
        }
    }


    public static convertUIName(mappingForm) {
        if (!mappingForm) {
            console.warn(`convertUIName fail  mappingForm is null `)
            return null;
        }
        let curApp = moosnow.getAppPlatform();
        if (mappingForm[curApp])
            return mappingForm[curApp]
        else if (mappingForm[moosnow.APP_PLATFORM.WX])
            return mappingForm[moosnow.APP_PLATFORM.WX]
        else {
            console.warn(`convertUIName fail `, mappingForm)
            return null
        }
        return null
    }

    public static get AdForm() {
        return this.convertUIName(this.mapping.adForm)
    }
    public static HomeForm = "homeForm";
    public static SkinForm = "skinForm";
    public static GameForm = "gameForm";
    public static CoinForm = "coinForm";
    public static PrevHomeForm = "prevHomeForm";
    /**
     * 结算页
     */
    public static get TotalForm() {
        return this.convertUIName(this.mapping.totalForm)
    };
    /**
     * 结束页
     */
    public static get EndForm() {
        return this.convertUIName(this.mapping.endForm)
    }
    public static ToastForm = "toastForm";

    public static get PauseForm() {
        return this.convertUIName(this.mapping.pauseForm)
    }
    public static get RespawnForm() {
        return this.convertUIName(this.mapping.respawnForm)
    }
    public static SetForm = "setForm";
    public static PrizeForm = "prizeForm";


    public static get MistouchForm() {
        return this.convertUIName(this.mapping.mistouchForm)
    }
    public static get TryForm() {
        return this.convertUIName(this.mapping.tryForm)
    }
}
