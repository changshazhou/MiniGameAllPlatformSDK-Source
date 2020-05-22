import UIForms from "../../enum/UIFORMS";
import CocosAdFrom from "./CocosAdFrom";

export default class CocosFrom implements IForm {


    constructor() {
        this.registerScript();
    }

    public registerScript() {
        let script = [
            { name: UIForms.AdForm, script: CocosAdFrom }
        ]
        script.forEach(item => {
            moosnow.resource.loadAsset(item.name, cc.Prefab, (err, prefab) => {

            })
        })
    }

    public showToast(msg: string) {
        moosnow.ui.showToast(msg)
    }
    public showAd(params: { showAd, callback }) {
        let ad = moosnow.ui.getUIFrom(UIForms.AdForm)
        if (!ad) {
            ad = moosnow.ui.pushUIForm(UIForms.AdForm, null, () => {
                moosnow.event.sendEventImmediately("ON_AD_SHOW", { showAd: params.showAd, callback: params.callback })
            })
        }
        else {
            moosnow.event.sendEventImmediately("ON_AD_SHOW", { showAd: params.showAd, callback: params.callback })
        }

    }

    public showReward() {
        moosnow.ui.pushUIForm("");
    }

}