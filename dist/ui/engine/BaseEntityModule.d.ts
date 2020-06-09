import BaseModule from "../../framework/BaseModule";
export default class BaseEntityModule extends BaseModule {
    entityLogics: Array<any>;
    _serializeId: number;
    paused: boolean;
    prefabPath: string;
    mEntity3DPools: Array<{
        name: string;
        pool: [];
    }>;
    mEntity3DLogics: [];
    entityPools: Array<cc.NodePool>;
    mIsSlow: boolean;
    constructor();
    update(dt: any): void;
    pause(): void;
    resume(): void;
    getAllEntity(name: any): any[];
    showEntity(name: any, parentNode: any, data: any): any;
    hideEntity(logic: any, data: any, isDestory?: boolean): void;
    hideAllEntity(name: any, isDestory?: boolean): void;
}
