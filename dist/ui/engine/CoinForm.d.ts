import BaseForm from "./BaseForm";
import showCoinOptions from "../../model/showCoinOptions";
export default class CoinForm extends BaseForm {
    get rootNode(): {};
    get FormData(): showCoinOptions;
    flyAnim(logic: any, endVec: any, callback: any): void;
    onShow(data: any): void;
}
