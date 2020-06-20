import AdInviteBox from "../engine/AdInviteBox";
import Common from "../../utils/Common";
import { MSG } from "../../config/MSG";
import CocosNodeEvent from "./CocosNodeEvent";


export default class CocosAdInviteBox extends AdInviteBox {



    public addListener() {
        this.btnConfirm.on(CocosNodeEvent.TOUCH_END, this.onConfirm, this)
        this.btnCancel.on(CocosNodeEvent.TOUCH_END, this.onCancel, this)
    }
    public removeListener() {
        this.btnConfirm.off(CocosNodeEvent.TOUCH_END, this.onConfirm, this);
        this.btnCancel.off(CocosNodeEvent.TOUCH_END, this.onCancel, this);
    }

    public initBox(userName, logo, gameName) {
        cc.loader.load(logo, (err, tex) => {
            if (err)
                return;
            let spriteFrame = new cc.SpriteFrame(tex);
            (this.logo as cc.Node).getComponent(cc.Sprite).spriteFrame = spriteFrame;

        });
        (this.userName as cc.Label).string = Common.format(MSG.INVITE_PLAY_USER, userName);
        (this.gameName as cc.Label).string = gameName;

    }

}