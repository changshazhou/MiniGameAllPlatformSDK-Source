
import { ENGINE_TYPE } from "../../enum/ENGINE_TYPE";
import Common from "../../utils/Common";

export default class NodeUtil {





    public get rootNode() {
        if (Common.getEngine() == ENGINE_TYPE.COCOS) {
            return cc.Canvas.instance.node;
        }
        else if (Common.getEngine() == ENGINE_TYPE.COCOS) {
            return Laya.stage;
        }
        return {}
    }


    public getLayout(callback: Function) {
        moosnow.http.request('https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/SDK/layout.json', {}, 'GET', (res) => {
            if (res[name]) {
                callback(res[name])
            }
        })
    }


    public createImage(parent: any, url: string, x: number = 0, y: number = 0, width?: number, heigth?: number) {

    }

    public changeSrc(image: any, url: string) {

    }

    public createMask() {



    }


    public createForm(name: string) {

    }
}