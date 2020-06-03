import BaseModule from "../../framework/BaseModule";


export default class BaseEntityModule extends BaseModule {


    public entityLogics: Array<any> = [];
    public _serializeId: number = 0;
    public paused: boolean = true;
    public prefabPath: string = "prefab/entity/";

    public mEntity3DPools: Array<{ name: string, pool: [] }> = [];
    public mEntity3DLogics: [] = [];


    public entityPools: Array<cc.NodePool> = [];
    public mIsSlow: boolean = true;

    constructor() {
        super();

        this.entityLogics = [];
        this.mEntity3DPools = [];
        this.mEntity3DLogics = [];
        this._serializeId = 0;
        // this.resume();
        // window["moosnow"].entity = this;
    }
    update(dt) {
        if (this.paused) return;
        for (let i = 0; i < this.entityLogics.length; i++) {
            let element = this.entityLogics[i];
            element.onFwUpdate(dt);
        }
    }

    public pause() {
        this.paused = true;
    }

    public resume() {
        this.paused = false;
    }

    public getAllEntity(name: any) {
        return this.entityLogics.filter(item => item.poolName == name);
    }
    public showEntity(name, parentNode, data) {

    }

    public hideEntity(logic, data, isDestory: boolean = false) {

    }

    public hideAllEntity(name, isDestory: boolean = false) {

    }




}   