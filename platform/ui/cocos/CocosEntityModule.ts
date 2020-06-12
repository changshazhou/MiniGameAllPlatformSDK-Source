

import BaseEntityModule from '../engine/BaseEntityModule';
import { ENGINE_TYPE } from '../../enum/ENGINE_TYPE';
import Common from '../../utils/Common';

export class CocosEntityModule extends BaseEntityModule {


    public prefabPath: string = "moosnow/prefab/entity/";

    public preload(name, callback) {
        cc.loader.loadRes(this.prefabPath + '' + name, cc.Prefab, (error: Error, resource: any[]) => {
            if (callback)
                callback(error, resource)
        })
    }

    public showEntity(name, parentNode, data): any {
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


    public _createEntity(name) {
        let prefab
        if (Common.isString(name))
            prefab = this._getPrefabByName(name);
        else
            prefab = name;
        return cc.instantiate(prefab);
    }

    public _showEntity(name) {

        let pool = this._getOrNewEntityPool(name);
        let entity = pool.get();
        if (entity == null) {
            entity = this._createEntity(name);
        }
        let logic = this._findComponent(entity, "EntityLogic");
        logic.poolName = pool.name;
        return logic;
    }

    public _getPrefabByName(name) {
        var profab = cc.loader.getRes(this.prefabPath + '' + name, cc.Prefab)
        return profab;
    }

    public _getOrNewEntityPool(name) {
        let poolName = this._getPoolName(name)
        let pool = this._getEntityPool(poolName);
        if (pool == null) {
            pool = this._newEntityPool(poolName);
        }
        return pool;
    }


    private _getPoolName(name) {
        let poolName = "";
        let engine = Common.getEngine();
        if (engine == ENGINE_TYPE.COCOS && Common.isObject(name)) {
            poolName = (name as any).name
        }
        else if (engine == ENGINE_TYPE.LAYA && Common.isObject(name)) {
            poolName = (name as any).json.name
        }
        else
            poolName = "" + name;
        return poolName;
    }

    public _getEntityPool(name) {
        for (let i = 0; i < this.entityPools.length; i++) {
            let pool: any = this.entityPools[i];
            if (pool.name === name) {
                return pool;
            }
        }
        return null;
    }

    public _newEntityPool(name) {
        let pool: any = new cc.NodePool(name);
        pool.name = name;
        this.entityPools.push(pool);
        return pool;
    }

    public hideEntity(logic, data, isDestory: boolean = false) {
        this._hideEntity(logic, data, isDestory);
    }

    public hideAllEntity(name, isDestory: boolean = false) {
        for (let i = 0; i < this.entityLogics.length; i++) {
            let item = this.entityLogics[i];
            if (item.poolName == name) {
                this.hideEntity(item, null, isDestory);
                i--
            }
        }
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
}
