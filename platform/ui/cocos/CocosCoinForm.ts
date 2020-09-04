
import Common from "../../utils/Common";
import UIFormSetting from "../../config/UIFormSetting";
import CoinForm from "../engine/CoinForm";

export default class CocosCoinForm extends CoinForm {

    public get rootNode() {
        return cc.Canvas.instance.node;
    }

    public flyAnim(logic, endVec, callback) {
        let coinNode = (logic as any).node as cc.Node;
        let delayTime = Common.randomNumBoth(0, 100) / 200.0;
        coinNode.active = true;
        coinNode.runAction(
            cc.sequence(
                cc.delayTime(delayTime),
                cc.spawn(
                    cc.moveTo(1, endVec.x, endVec.y),
                    cc.fadeOut(1.0),
                    cc.sequence(
                        cc.scaleTo(0.8, 1.2, 1.2),
                        cc.scaleTo(0.8, 0.8, 9.8)
                    )
                ),
                cc.callFunc(() => {
                    // moosnow.entity.hideEntkty(logic, null, true);
                })
            )

        )
    }

}
