interface IUIModule {
    showToast(msg: string)
    /**
     * 显示一个ui
     * @param {string} name  resources/UI目录下的预设名字 
     * @param {Object} data 携带的自定义数据
     * @param {Function} callback ui显示后回调:(formModel,data:Object)
     */
    pushUIForm(name, data?, callback?);

    /**
    * 从栈顶隐藏一个UI
    * @param {bool} destroy 是否销毁
    */
    pop(destroy: boolean, cb?: any);

    /**
   * 获取一个UIForm
   * @param {string} name 
   */
    getUIFrom(name: string);

    /**
    * 隐藏某个UI
    * @param {string} name 预设名
    * @param {any} data 携带的自定义数据
    */
    hideUIForm(name: string, data: any, cb?: any);


    hideAllUIForm();

    destroyUIForm(name: string, data: any);
}