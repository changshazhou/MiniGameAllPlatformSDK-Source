import PlatformModule from "./PlatformModule";
import { HttpModule } from "./HttpModule";

export default class OPPOModule extends PlatformModule {

    public platformName: string = "qg";
    public bannerId: string = "";
    public videoId: string = "";
    public appSid: string = "";
    public interId: string = "";
    public nativeIds = [];

    public interInterval: number = 30;
    public interSize: number = 5;
    public config: any = {};


    public vibrateOn = window.localStorage.getItem("Vibration") == "IN";

    private mVersion: string = "1.0.5"
    public auditVersion: boolean = false;
    constructor() {
        super();
    }

}