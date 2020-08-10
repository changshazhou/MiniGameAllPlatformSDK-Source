import BaseForm from "../../engine/BaseForm";
import clickQueneItem from "../../../model/clickQueneItem";
export default class CocosBaseForm extends BaseForm {
    private downAnim;
    private upAnim;
    private mDowning;
    private mClickQuene;
    getClickQueneItem(e: cc.Event.EventTouch): clickQueneItem;
    private onTouchStart;
    private onTouchEnd;
    private onTouchCancel;
    /**
     * 应用点击动画
     * @param node
     * @param callback
     * @param stopPropagation
     * @param once
     */
    applyClickAnim(node: cc.Node, callback?: Function, stopPropagation?: boolean, once?: boolean): void;
    removeClickAnim(node: cc.Node): void;
    findNodeByName(node: cc.Node, attrName: string): cc.Node;
}
