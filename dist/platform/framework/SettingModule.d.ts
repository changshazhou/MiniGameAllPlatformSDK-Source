import BaseModule from './BaseModule';
export default class SettingModule extends BaseModule {
    constructor();
    onEnable(): void;
    getInt(k: string, defaultValue: number): number;
    getFloat(k: string, defaultValue: number): number;
    getBool(k: string, defaultValue: boolean): boolean;
    getString(k: string, defaultValue: string): string;
    getObject(k: string, defaultValue: Object): any;
    setObject(k: string, v: Object): void;
    setBool(k: string, v: boolean): void;
    setValue(k: string, v: any): void;
    /**
     * 追加整数形
     */
    appendInt(k: string, v: any): number;
    appendFloat(k: string, v: any): void;
    removeValueOfKey(key: string): void;
    removeAll(): void;
    _getValue(k: any, defaultValue: any): string;
}
