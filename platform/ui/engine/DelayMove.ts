import BaseModule from "../../framework/BaseModule";

export default class DelayMove extends BaseModule {



    moveNode: cc.Node = null;
    distince: number = -100;
    showBanner: boolean = true;

    public pos1: cc.Vec2 = cc.Vec2.ZERO;
    public pos2: cc.Vec2 = cc.Vec2.ZERO;

    public mMistouchPosNum: number = 0;
    public mMistouchPosSecond: number = 4;

    public initPos() {

    }
    /**
     * 
     * @param moveNode 
     * @param distince 
     * @param showBanner 
     */
    public move(moveNode, distince, showBanner) {

        this.moveNode = moveNode;
        this.distince = distince;
        this.showBanner = showBanner;

        this.initPos();

        let count = moosnow.data.getCurrentMisTouchCount();
        moosnow.data.setCurrentMisTouchCount(count + 1);

        this.moveNode.active = false;


        moosnow.http.getAllConfig(res => {
            if (!isNaN(res.mistouchPosSecond))
                this.mMistouchPosSecond = parseFloat(res.mistouchPosSecond)
            moosnow.http.getMistouchPosNum(num => {
                this.mMistouchPosNum = num;
                this.movePosition();
            })
        })

    }


    public movePosition() {
        if (this.mMistouchPosNum == 0) {
            this.moveNode.active = true;
            this.moveNode.x = this.pos1.x;
            this.moveNode.y = this.pos1.y;
            if (this.showBanner)
                moosnow.platform.showBanner();
        }
        else {
            let count = moosnow.data.getCurrentMisTouchCount()
            if (count % this.mMistouchPosNum == 0) {
                this.copyNode();
                this.schedule(this.onPosCallback, this.mMistouchPosSecond)
            }
        }
    }

    public copyNode() {

    }

    public onPosCallback(tempButtom) {
        if (this.showBanner)
            moosnow.platform.showBanner();
        this.removeTemp(tempButtom);

        this.moveNode.active = true;
        this.moveNode.x = this.pos1.x;
        this.moveNode.y = this.pos1.y;

        this.unschedule(this.onPosCallback)
    }

    public removeTemp(tempButtom) {
        tempButtom.active = false;
        tempButtom.removeFromParent();
        tempButtom.destroy();
    }
}