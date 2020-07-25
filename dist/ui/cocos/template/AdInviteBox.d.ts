import BaseLogic from "./BaseLogic";
export default class AdInviteBox extends BaseLogic {
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
