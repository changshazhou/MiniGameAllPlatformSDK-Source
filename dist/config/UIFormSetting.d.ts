export default class UIFormSetting {
    private static mSetting;
    static append(setting: object): void;
    static get mapping(): {
        adForm: {
            [x: number]: string;
        };
        pauseForm: {
            [x: number]: string;
        };
        respawnForm: {
            [x: number]: string;
        };
        endForm: {
            [x: number]: string;
        };
        totalForm: {
            [x: number]: string;
        };
        tryForm: {
            [x: number]: string;
        };
        mistouchForm: {
            [x: number]: string;
        };
        prizeForm: {
            [x: number]: string;
        };
        shareForm: {
            [x: number]: string;
        };
        setForm: {
            [x: number]: string;
        };
        toastForm: {
            [x: number]: string;
        };
        coinForm: {
            [x: number]: string;
        };
        homeForm: {
            [x: number]: string;
        };
        gameForm: {
            [x: number]: string;
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
    static get HomeForm(): any;
    static get GameForm(): any;
}
