import BaseModule from "./BaseModule";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EntityModule extends BaseModule {


    private entityLogics: Array<any> = [];
    private _serializeId: number = 0;
    private paused: boolean = true;
    public prefabPath: string = "prefab/entity/";

    private mEntity3DPools: Array<{ name: string, pool: [] }> = [];
    private mEntity3DLogics = [];


    private entityPools: Array<cc.NodePool> = [];
    private mIsSlow: boolean = true;

    constructor() {
        super();

        this.entityLogics = [];
        this.mEntity3DPools = [];
        this.mEntity3DLogics = [];
        this._serializeId = 0;


        this._serializeId = 0;

    }
    start() {
        window["moosnow"].entity = this;
        this.resume();
    }
    update(dt) {
        if (this.paused) return;
        for (let i = 0; i < this.entityLogics.length; i++) {
            let element = this.entityLogics[i];
            element.onFwUpdate(dt);
        }
    }

    pause() {
        this.paused = true;
    }

    resume() {
        this.paused = false;
    }
    public getAllEntity(name: any) {
        return this.entityLogics.filter(item => item.poolName == name);
    }
    showEntity(name, parentNode, data) {
        let logic = this._showEntity(name);
        logic.id = this._serializeId--;
        logic.node.parent = parentNode;
        logic.willShow(data);
        logic.node.active = true;
        logic.node.zIndex = logic.id;
        logic.onShow(data);
        this.entityLogics.push(logic);
        return logic;
    }

    hideEntity(logic, data, isDestory: boolean = false) {
        this._hideEntity(logic, data, isDestory);
    }

    hideAllEntity(name, isDestory: boolean = false) {
        for (let i = 0; i < this.entityLogics.length; i++) {
            let item = this.entityLogics[i];
            if (item.poolName == name) {
                this.hideEntity(item, null, isDestory);
                i--
            }
        }
    }

    private _showEntity(name) {
        let pool = this._getOrNewEntityPool(name);
        let entity = pool.get();
        if (entity == null) {
            entity = this._createEntity(name);
        }
        let logic = this._findComponent(entity, "EntityLogic");
        logic.poolName = pool.name;
        return logic;
    }

    private _hideEntity(logic, data, isDestory: boolean = false) {
        if (isDestory) {
            logic.willHide(data);
            logic.node.active = false;
            logic.onHide(data);
            logic.destroy();
        }
        else {
            let pool = this._getOrNewEntityPool(logic.poolName);
            logic.willHide(data);
            pool.put(logic.node);
            logic.node.active = false;
            logic.onHide(data);
        }
        cc.js.array.remove(this.entityLogics, logic);

    }

    private _createEntity(name) {
        let prefab = this._getPrefabByName(name);
        return cc.instantiate(prefab);
    }

    private _getPrefabByName(name) {
        var profab = cc.loader.getRes(this.prefabPath + '' + name, cc.Prefab)
        return profab;
    }

    private _getOrNewEntityPool(name) {
        let pool = this._getEntityPool(name);
        if (pool == null) {
            pool = this._newEntityPool(name);
        }
        return pool;
    }

    private _getEntityPool(name) {
        for (let i = 0; i < this.entityPools.length; i++) {
            let pool: any = this.entityPools[i];
            if (pool.name === name) {
                return pool;
            }
        }
        return null;
    }

    private _newEntityPool(name) {
        let pool: any = new cc.NodePool(name);
        pool.name = name;
        this.entityPools.push(pool);
        return pool;
    }

}   