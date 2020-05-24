interface IResourceModule {
    /**
     * 加载resources下的cc.SpriteFrame, cc.AnimationClip, cc.Prefab
     * 不带扩展名
     * @method loadAsset
     * @param {string} url resources下路径
     * @param {string} assetType cc.SpriteFrame, cc.AnimationClip, cc.Prefab..
     * @param {Function} [callback] (err:Error,asset:cc.Asset)
     */
    loadAsset(url: any, assetType: any, callback: any): any;
    /**
    * 加载resources目录下某个目录下的指定类型的资源(用于预加载整个目录资源)
    * @param {string} dir resources下的目录
    * @param {typeof cc.Asset} type
    * @param {Function} progressCallback (precent:number)
    * @param {Function} completeCallback (err:Error,reses:Asset[])
    */
    loadAssetDir(dir: any, type: any, progressCallback: any, completeCallback: any): any;
}
