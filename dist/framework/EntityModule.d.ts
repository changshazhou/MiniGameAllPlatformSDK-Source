import BaseModule from "./BaseModule";
export default class EntityModule extends BaseModule {
    private entityLogics;
    private _serializeId;
    private paused;
    prefabPath: string;
    private mEntity3DPools;
    private mEntity3DLogics;
    private entityPools;
    private mIsSlow;
    constructor();
    start(): void;
    update(dt: any): void;
    pause(): void;
    resume(): void;
    getAllEntity(name: any): any[];
    showEntity(name: any, parentNode: any, data: any): any;
    hideEntity(logic: any, data: any, isDestory?: boolean): void;
    hideAllEntity(name: any, isDestory?: boolean): void;
    private _showEntity;
    private _hideEntity;
    private _createEntity;
    private _getPrefabByName;
    private _getOrNewEntityPool;
    private _getEntityPool;
    private _newEntityPool;
}
