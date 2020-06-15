import BaseModule from "../../framework/BaseModule";

export default class DelayMove extends BaseModule {



    moveNode: cc.Node = null;
    distince: number = -100;
    showBanner: boolean = true;

    public pos1: cc.Vec2 = cc.Vec2.ZERO;
    public pos2: cc.Vec2 = cc.Vec2.ZERO;

    public mMistouchPosNum: number = 0;
    public mMistouchPosSecond: number = 2;

    public initPos() {

    }
    /**
     * 延迟移动
     * @param moveNode  需要移动的节点
     * @param distince 移动的距离
     * @param showBanner 移动后是否显示 banner
     */
    public move(moveNode, distince, showBanner) {

        this.moveNode = moveNode;
        this.distince = distince;
        this.showBanner = showBanner;

        this.initPos();

        let count = moosnow.data.getCurrentMisTouchCount();
        moosnow.data.setCurrentMisTouchCount(count + 1);

        moosnow.http.getAllConfig(res => {
            if (!isNaN(res.mistouchPosSecond))
                this.mMistouchPosSecond = parseFloat(res.mistouchPosSecond)
            moosnow.http.getMistouchPosNum(num => {
                this.mMistouchPosNum = num;
                this.movePosition();
            })
        })

    }


    public setPosition(node, visible, x, y) {

    }

    public movePosition() {
        if (this.mMistouchPosNum == 0) {
            this.setPosition(this.moveNode, true, this.pos1.x, this.pos1.y);
            if (this.showBanner)
                moosnow.platform.showBanner();
        }
        else {
            let count = moosnow.data.getCurrentMisTouchCount()
            if (count % this.mMistouchPosNum == 0) {
                let tempButtom = this.copyNode();
                this.scheduleOnce(() => {
                    this.onPosCallback(tempButtom)
                }, this.mMistouchPosSecond)
            }
        }
    }

    public copyNode() {

    }

    public onPosCallback(tempButtom) {
        if (this.showBanner)
            moosnow.platform.showBanner();
        this.removeTemp(tempButtom);

        this.setPosition(this.moveNode, true, this.pos1.x, this.pos1.y);

        this.unscheduleOnce(this.onPosCallback)
    }

    public removeTemp(tempButtom) {

    }
}