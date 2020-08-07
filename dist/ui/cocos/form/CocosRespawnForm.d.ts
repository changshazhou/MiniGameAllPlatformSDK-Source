import CocosBaseForm from "./CocosBaseForm";
import showRespawnOptions from "../../../model/showRespawnOptions";
export default class CocosRespawnForm extends CocosBaseForm {
    btnVideo: cc.Node;
    btnHome: cc.Node;
    get FormData(): showRespawnOptions;
    addListener(): void;
    removeListener(): void;
    onShow(data: any): void;
    onHide(data: any): void;
    private onVideoTry;
    private onHome;
}
