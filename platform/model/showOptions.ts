export default class showOptions {

    /**
     * 实例化参数
     */
    public static create<T extends showOptions>(c: { new(): T; }): T {
        return new c();
    }

    private _hideForm: boolean = true;
    /**
     * 完成后是否隐藏 默认 true
     */
    get hideForm(): boolean {
        return this._hideForm
    }
    set hideForm(value: boolean) {
        this._hideForm = value;
    }
    /**
     * 扩展参数
     */
    public extraData: Object = {}

}