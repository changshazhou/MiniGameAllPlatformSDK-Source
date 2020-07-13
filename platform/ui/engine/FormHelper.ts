import NodeAttribute from "./NodeAttribute"

export default class FormHelper {

    public static getLayout(url: string, callback: (attr) => void) {
        moosnow.http.request(url, {}, 'GET', (res) => {
            callback(res)
        })
    }

    public static createChild(parent, children: Array<NodeAttribute>) {


    }

    public static createForm(name: string, parent?: cc.Node) {

    }
}