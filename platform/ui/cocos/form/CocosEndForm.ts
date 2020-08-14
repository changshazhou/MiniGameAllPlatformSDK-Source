import CocosNodeEvent from "../enum/CocosNodeEvent";
import CocosBaseForm from "./CocosBaseForm";
import showEndOptions from "../../../model/showEndOptions";

export default class CocosEndForm extends CocosBaseForm {

    public btnBack: cc.Node = null;
    public btnContinue: cc.Node = null;


    /**
     * 父类缓存willShow，onShow传递到实体的逻辑数据
     */
    public get FormData(): showEndOptions {
        return this.mFormData;
    }


    private addListener() {
        this.applyClickAnim(this.btnBack, () => {
            this.onBack();
        })
        this.applyClickAnim(this.btnContinue, () => {
            this.onBack();
        })
    }
    private removeListener() {
        this.removeClickAnim(this.btnBack)
    }
    willShow(data) {
        super.willShow(data)
        moosnow.platform.stopRecord(() => {
            let sys = moosnow.platform.getSystemInfoSync();
            moosnow.http.getAllConfig(res => {
                moosnow.platform.showShareButton({
                    left: sys.windowWidth - res.shareBtnWidth,
                    top: sys.windowHeight - 70
                })
            })
            moosnow.platform.hideBanner();
            moosnow.platform.hideShareButton();

        });
    }
    onShow(data) {
        this.addListener();

    }
    willHide() {
        this.removeListener();

    }

    private onBack() {
        this.hideForm();
        if (this.FormData.callback)
            this.FormData.callback();
    }

}