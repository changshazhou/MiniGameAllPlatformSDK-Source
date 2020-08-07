import CocosBaseForm from "./CocosBaseForm";
import showEndOptions from "../../../model/showEndOptions";
export default class CocosEndForm extends CocosBaseForm {
    btnBack: cc.Node;
    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    get FormData(): showEndOptions;
    private addListener;
    private removeListener;
    willShow(data: any): void;
    onShow(data: any): void;
    willHide(): void;
    private onBack;
}
