export default class showOptions {
    /**
     * 实例化参数
     */
    static create<T extends showOptions>(c: {
        new (): T;
    }): T;
    private _hideForm?;
    /**
     * 完成后是否隐藏 默认 true
     */
    get hideForm(): boolean;
    set hideForm(value: boolean);
    /**
     * 扩展参数
     */
    extraData?: Object;
    zIndex?: number;
}
