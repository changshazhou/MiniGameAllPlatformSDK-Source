export default class CocosResourceModule extends cc.Component implements IResourceModule {

    constructor() {
        super();
    }

    onEnable() {

    }

    /**
     * 加载resources下的cc.SpriteFrame, cc.AnimationClip, cc.Prefab
     * 不带扩展名
     * @method loadAsset
     * @param {String} url resources下路径
     * @param {typeof cc.Asset} assetType cc.SpriteFrame, cc.AnimationClip, cc.Prefab..
     * @param {Function} [callback] (err:Error,asset:cc.Asset)
     * @param {typeof cc.Asset} callback.asset cc.SpriteFrame, cc.AnimationClip, cc.Prefab..
     */
    loadAsset(url, assetType, callback) {
        let res = cc.loader.getRes(url, assetType);
        if (res) {
            if (callback) {
                callback(null, res);
            }
            return;
        }
        cc.loader.loadRes(url, assetType, function (err, asset) {
            if (callback) {
                callback(err, asset);
            }
        });
    }

    /**
    * 加载resources目录下某个目录下的指定类型的资源(用于预加载整个目录资源)
    * @param {string} dir resources下的目录
    * @param {typeof cc.Asset} type 
    * @param {Function} progressCallback (precent:number)
    * @param {Function} completeCallback (err:Error,reses:Asset[])
    */
    loadAssetDir(dir, type, progressCallback, completeCallback) {
        cc.loader.loadResDir(dir, type, (completedCount, totalCount, item) => {
            let precent = completedCount / totalCount * 100;
            precent = Math.ceil(precent);
            if (progressCallback) {
                progressCallback(precent);
            }
        }, (err, res) => {
            if (completeCallback) {
                completeCallback(err, res);
            }
        });
    }

    onDisable() {
    }
}