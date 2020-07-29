import CocosBaseForm from "../form/CocosBaseForm";
export default class AdInviteBox extends CocosBaseForm {
    logo: any;
    gameName: any;
    userName: any;
    btnConfirm: any;
    btnCancel: any;
    private mCurrentAdRow;
    willShow(data: any): void;
    willHide(): void;
    initBox(userName: any, logo: any, gameName: any): void;
    addListener(): void;
    removeListener(): void;
    onConfirm(): void;
    onCancel(): void;
}
