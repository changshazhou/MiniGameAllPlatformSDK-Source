export default class UIFormSetting {
    private static mSetting;
    static append(setting: object): void;
    static get mapping(): {
        adForm: {
            0: string;
        };
        pauseForm: {
            0: string;
            1: string;
            2: string;
            3: string;
            7: string;
            5: string;
        };
        respawnForm: {
            0: string;
            1: string;
            2: string;
            3: string;
            7: string;
            5: string;
        };
        endForm: {
            0: string;
            1: string;
            2: string;
            3: string;
            7: string;
        };
        totalForm: {
            0: string;
            1: string;
            5: string;
        };
        tryForm: {
            0: string;
            1: string;
            5: string;
        };
        mistouchForm: {
            0: string;
            5: string;
            1: string;
        };
        prizeForm: {
            1: string;
            5: string;
        };
        shareForm: {
            0: string;
            1: string;
        };
        setForm: {
            0: string;
        };
        toastForm: {
            0: string;
        };
        coinForm: {
            0: string;
        };
    };
    static convertUIName(mappingForm: any): any;
    static get AdForm(): any;
    static get CoinForm(): any;
    static get ShareForm(): any;
    static get TotalForm(): any;
    /**
     * 结束页
     */
    static get EndForm(): any;
    static get ToastForm(): any;
    static get PauseForm(): any;
    static get RespawnForm(): any;
    static get SetForm(): any;
    static get PrizeForm(): any;
    static get MistouchForm(): any;
    static get TryForm(): any;
}
