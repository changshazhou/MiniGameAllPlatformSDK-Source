import CocosBaseForm from "./CocosBaseForm";
import showFailOptions from "../../../model/showFailOptions";
export default class CocosFailForm extends CocosBaseForm {
    btnBack: cc.Node;
    btnVideo: cc.Node;
    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    get FormData(): showFailOptions;
    private addListener;
    private removeListener;
    private onVideo;
    onShow(data: any): void;
    willHide(): void;
    private onBack;
}
