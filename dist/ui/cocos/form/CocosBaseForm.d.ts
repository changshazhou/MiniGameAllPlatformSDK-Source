import BaseForm from "../../engine/BaseForm";
export default class CocosBaseForm extends BaseForm {
    private downAnim;
    private upAnim;
    private mDowning;
    private mClickQuene;
    private onTouchStart;
    private onTouchEnd;
    private onTouchCancel;
    applyClickAnim(node: cc.Node, callback?: Function): void;
    removeClickAnim(node: cc.Node): void;
    findNodeByName(node: cc.Node, attrName: string): cc.Node;
    hideForm(): void;
}
