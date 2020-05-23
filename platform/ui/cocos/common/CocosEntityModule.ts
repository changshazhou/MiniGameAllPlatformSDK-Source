
const { ccclass, property } = cc._decorator;


import Common from '../../../utils/Common';
import CocosToastForm from './CocosToastForm';
import CocosUIForm from './CocosUIForm';
import { IUIModule } from '../../engine/IUIModule';
import EntityModule from '../../../framework/EntityModule';

export class CocosEntityModule extends EntityModule {

    @property(cc.Node)
    rootCanvas: cc.Node = null;

    public prefabPath: string = "prefab/entity/";

    constructor() {
        super();
    }

}
