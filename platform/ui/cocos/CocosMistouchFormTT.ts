import BaseForm from "../engine/BaseForm";
import UIForms from "../../config/UIForms";
import MistouchForm from "../engine/MistouchForm";
import MistouchFormTT from "../engine/MistouchFormTT";

export default class CocosMistouchFormTT extends MistouchFormTT {

    clickProgress: cc.ProgressBar = null;
    btnReceive: cc.Node = null;
    btnConfirm: cc.Node = null;
    checked: cc.Sprite = null;
    unchecked: cc.Sprite = null;
    step1: cc.Node = null;
    step2: cc.Node = null;
    logo: cc.Node = null;



}
