interface IUIForm {
    formName: string,
    isPopEffect: boolean,
    hideAnim(cb);
    FormData: any,
    addMask(): void;
    removeMask(): void;
    willShow(data?);
    onShow(data);
    willHide(data);
    onHide(data);
}
