import AdInviteBox from "../engine/AdInviteBox";
import Common from "../../utils/Common";
import { MSG } from "../../config/MSG";
import CocosNodeEvent from "./CocosNodeEvent";


export default class CocosAdInviteBox extends AdInviteBox {



    public addListener() {
        this.confirm.on(CocosNodeEvent.TOUCH_END, this, this.onConfirm)
        this.cancel.on(CocosNodeEvent.TOUCH_END, this, this.onCancel)
    }
    public removeListener() {
        this.confirm.off(CocosNodeEvent.TOUCH_END, this, this.onConfirm)
        this.cancel.on(CocosNodeEvent.TOUCH_END, this, this.onCancel)
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