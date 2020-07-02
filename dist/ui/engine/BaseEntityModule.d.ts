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
    /**
     *
     * @param name 名称
     * @param parentNode  父节点
     * @param data 传输的数据
     * @param uiRoot 基础的路径
     */
    showEntity(name: any, parentNode: any, data?: any, uiRoot?: string): any;
    hideEntity(logic: any, data: any, isDestory?: boolean): void;
    hideAllEntity(name: any, isDestory?: boolean): void;
}
