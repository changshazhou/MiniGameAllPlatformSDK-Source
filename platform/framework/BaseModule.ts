
export default class BaseModule {
    protected moduleName: string = "";

    public preload(url, callback) {
        if (callback)
            callback();
    }

    /**
     * 
     */
    _findComponent(node, classname) {
        let retValue = null;
        for (let i = 0; i < node._components.length; i++) {
            let logic = node._components[i];
            if (this._findComponentByName(logic.constructor, classname)) {
                retValue = logic;
                break;
            }
        }
        return retValue;
    }
    _findComponentByName(instance, classname) {
        if (instance) {
            if (instance.name == classname)
                return true
            else
                return this._findComponentByName(instance.$super, classname)
        }
        return false;
    }
}