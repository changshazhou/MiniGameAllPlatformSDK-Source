
import BaseModule from './BaseModule'
export default class SettingModule extends BaseModule {

    constructor() {
        super();
    }

    onEnable() {

    }

    getInt(k: string, defaultValue: number) {
        var v = this._getValue(k, defaultValue);
        return parseInt(v);
    }

    getFloat(k: string, defaultValue: number) {
        var v = this._getValue(k, defaultValue);
        return parseFloat(v);
    }

    getBool(k: string, defaultValue: boolean) {
        let defaultValueTemp: string;
        if (defaultValue == true) {
            defaultValueTemp = 'true';
        } else {
            defaultValueTemp = 'false';
        }
        var v = this.getString(k, defaultValueTemp);
        if (v == 'true') {
            return true;
        }
        return false;
    }

    getString(k: string, defaultValue: string) {
        return this._getValue(k, defaultValue);
    }

    getObject(k: string, defaultValue: Object) {
        var v = this._getValue(k, defaultValue);
        if (!v || v == '') {
            return null;
        }
        return JSON.parse(v);
    }

    //---------------------------------------------

    setObject(k: string, v: Object) {
        let vStr: string = '';
        if (v) {
            vStr = JSON.stringify(v);
        }
        this.setValue(k, vStr);
    }

    setBool(k: string, v: boolean) {
        if (v == true) {
            this.setValue(k, 'true');
        } else {
            this.setValue(k, 'false');
        }
    }
    setValue(k: string, v: any) {
        window.localStorage.setItem(k, v);
    }

    /**
     * 追加整数形
     */
    appendInt(k: string, v: any) {
        let vint = this.getInt(k, 0);
        let v2Save = parseInt(v) + vint;
        this.setValue(k, v2Save);
        return v2Save;
    }

    appendFloat(k: string, v: any) {
        let vf = this.getFloat(k, 0);
        let v2Save = parseFloat(v) + vf;
        this.setValue(k, v2Save);
    }

    //-------------------------------------------------

    removeValueOfKey(key: string) {
        window.localStorage.removeItem(key);
    }

    removeAll() {
        window.localStorage.clear();
    }

    //-------------------------------------------------

    _getValue(k, defaultValue) {

        let value = window.localStorage.getItem(k);
        if (value == null || value == '') {
            value = defaultValue;
        }
        return value;
    }

}