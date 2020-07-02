import BaseEntityModule from '../engine/BaseEntityModule';
export declare class CocosEntityModule extends BaseEntityModule {
    prefabPath: string;
    preload(name: any, callback: any): void;
    showEntity(name: any, parentNode: any, data?: any, uiRoot?: string): any;
    _createEntity(name: any, uiRoot?: string): any;
    _showEntity(name: any, uiRoot?: string): any;
    _getPrefabByName(name: any, uiRoot?: string): any;
    _getOrNewEntityPool(name: any): any;
    private _getPoolName;
    _getEntityPool(name: any): any;
    _newEntityPool(name: any): any;
    hideEntity(logic: any, data: any, isDestory?: boolean): void;
    hideAllEntity(name: any, isDestory?: boolean): void;
    private _hideEntity;
}
