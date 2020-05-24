
const { ccclass, property } = cc._decorator;


import Common from '../../../utils/Common';
import CocosToastForm from './CocosToastForm';
import CocosUIForm from './CocosUIForm';
import { IUIModule } from '../../engine/IUIModule';

export class CocosUIModule extends IUIModule {

    @property(cc.Node)
    rootCanvas: cc.Node = null;

    constructor() {
        super();
        this.layerIndex = 0;
        this.UIRoot = 'moosnow/prefab/ui/';     //定义resources目录下存放UI预设的目录
        this.UIFormStack = [];
        this.cachedUIForms = [];
        this.toastForm = null;
    }
    start() {

    }

}
