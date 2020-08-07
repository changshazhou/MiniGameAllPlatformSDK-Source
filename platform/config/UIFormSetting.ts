export default class UIFormSetting {

    private static mSetting = {
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
            [moosnow.APP_PLATFORM.QQ]: "mistouchFormQQ",
            [moosnow.APP_PLATFORM.BYTEDANCE]: "mistouchFormTT"
        },
        prizeForm: {
            [moosnow.APP_PLATFORM.BYTEDANCE]: "prizeFormTT",
            [moosnow.APP_PLATFORM.QQ]: "prizeForm"
        },
        shareForm: {
            [moosnow.APP_PLATFORM.WX]: "shareFormTT",
            [moosnow.APP_PLATFORM.BYTEDANCE]: "shareFormTT"
        },
        setForm: {
            [moosnow.APP_PLATFORM.WX]: "setForm",
        },
        toastForm: {
            [moosnow.APP_PLATFORM.WX]: "toastForm",
        },
        coinForm: {
            [moosnow.APP_PLATFORM.WX]: "coinForm",
        },
        homeForm: {
            [moosnow.APP_PLATFORM.WX]: "homeForm",
        },
        gameForm: {
            [moosnow.APP_PLATFORM.WX]: "gameForm",
        }

    }

    public static append(setting: object) {
        this.mSetting = { ...this.mSetting, ...setting }
    }

    public static get mapping() {
        return this.mSetting;
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

    public static get CoinForm() {
        return this.convertUIName(this.mapping.coinForm)
    }

    public static get ShareForm() {
        return this.convertUIName(this.mapping.shareForm)
    };

    public static get TotalForm() {
        return this.convertUIName(this.mapping.totalForm)
    };
    /**
     * 结束页
     */
    public static get EndForm() {
        return this.convertUIName(this.mapping.endForm)
    }
    public static get ToastForm() {
        return this.convertUIName(this.mapping.toastForm)
    }
    public static get PauseForm() {
        return this.convertUIName(this.mapping.pauseForm)
    }
    public static get RespawnForm() {
        return this.convertUIName(this.mapping.respawnForm)
    }
    public static get SetForm() {
        return this.convertUIName(this.mapping.setForm)
    };
    public static get PrizeForm() {
        return this.convertUIName(this.mapping.prizeForm)
    };


    public static get MistouchForm() {
        return this.convertUIName(this.mapping.mistouchForm)
    }
    public static get TryForm() {
        return this.convertUIName(this.mapping.tryForm)
    }

    public static get HomeForm() {
        return this.convertUIName(this.mapping.homeForm)
    }
    public static get GameForm() {
        return this.convertUIName(this.mapping.gameForm)
    }

}
