import BaseEntityModule from '../engine/BaseEntityModule';
export declare class CocosEntityModule extends BaseEntityModule {
    prefabPath: string;
    preload(name: any, callback: any): void;
    showEntity(name: any, parentNode: any, data: any): any;
    _createEntity(name: string | cc.Prefab | Laya.Prefab): any;
    _showEntity(name: string | cc.Prefab | Laya.Prefab): any;
    _getPrefabByName(name: any): any;
    _getOrNewEntityPool(name: string | cc.Prefab | Laya.Prefab): any;
    private _getEngine;
    private _getPoolName;
    _getEntityPool(name: any): any;
    _newEntityPool(name: any): any;
    hideEntity(logic: any, data: any, isDestory?: boolean): void;
    hideAllEntity(name: any, isDestory?: boolean): void;
    private _hideEntity;
}
