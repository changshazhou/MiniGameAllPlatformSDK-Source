interface IUIForm {
    formName: string;
    isPopEffect: boolean;
    hideAnim(cb: any): any;
    FormData: any;
    addMask(): void;
    removeMask(): void;
    willShow(data?: any): any;
    onShow(data: any): any;
    willHide(data: any): any;
    onHide(data: any): any;
}
