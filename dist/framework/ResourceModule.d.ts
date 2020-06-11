import BaseModule from './BaseModule';
export default class ResourceModule extends BaseModule {
    constructor();
    onEnable(): void;
    /**
     * 加载resources下的cc.SpriteFrame, cc.AnimationClip, cc.Prefab
     * 不带扩展名
     * @method loadAsset
     * @param {String} url resources下路径
     * @param {typeof cc.Asset} assetType cc.SpriteFrame, cc.AnimationClip, cc.Prefab..
     * @param {Function} [callback] (err:Error,asset:cc.Asset)
     * @param {typeof cc.Asset} callback.asset cc.SpriteFrame, cc.AnimationClip, cc.Prefab..
     */
    loadAsset(url: any, assetType: any, callback: any): void;
    /**
    * 加载resources目录下某个目录下的指定类型的资源(用于预加载整个目录资源) 仅COCOS支持
    * @param {string} dir resources下的目录
    * @param {typeof cc.Asset} type
    * @param {Function} progressCallback (precent:number)
    * @param {Function} completeCallback (err:Error,reses:Asset[])
    */
    loadAssetDir(dir: any, type: any, progressCallback: any, completeCallback: any): void;
    onDisable(): void;
}
