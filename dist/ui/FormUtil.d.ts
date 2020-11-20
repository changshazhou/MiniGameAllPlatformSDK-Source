import showCoinOptions from "../model/showCoinOptions";
import showTotalOptions from "../model/showTotalOptions";
import showEndOptions from "../model/showEndOptions";
import showMistouchOptions from "../model/showMistouchOptions";
import showPrizeOptions from "../model/showPrizeOptions";
import showShareOptions from "../model/showShareOptions";
import showPauseOptions from "../model/showPauseOptions";
import showTryOptions from "../model/showTryOptions";
import showSetOptions from "../model/showSetOptions";
import showBoxOptions from "../model/showBoxOptions";
import showAdOptions from "../model/showAdOptions";
import loadAdOptions from "../model/loadAdOptions";
import FormFactory from "./engine/FormFactory";
import showNativeOptions from "../model/showNativeOptions";
import vectory from "../../dist/model/Vectory";
import showRespawnOptions from "../model/showRespawnOptions";
import showFailOptions from "../model/showFailOptions";
import CheckboxComponent from "./cocos/common/CheckboxComponent";
/**
 * 广告结果
 */
export default class FormUtil {
    formFactory: FormFactory;
    constructor();
    mCheckbox: CheckboxComponent;
    /**
     * 初始化多选框状态
     * @param defaultChecked 默认选择状态
     * @param callback checkboxToggle 触发的回调 isChecked 表示选择状态
     */
    initCheckboxState(defaultChecked?: boolean, callback?: (isChecked: any) => void): void;
    /**
     * 执行点击
     */
    checkboxToggle(): void;
    private mBaseForm;
    /**
     * 增加点击效果和事件回调
     * @param node
     * @param callback
     * @param stopPropagation
     * @param once
     */
    applyClickAnim(node: cc.Node, callback?: Function, stopPropagation?: boolean, once?: boolean): void;
    /**
     * 删除点击效果和事件回调
     * @param node
     */
    removeClickAnim(node: cc.Node): void;
    /**
     * Toast消息
     * @param msg  消息内容
     */
    showToast(msg: string): void;
    showNativeAd(options: showNativeOptions): void;
    loadAd(options: loadAdOptions): void;
    /**
     * 显示广告
     * @param adType 广告类型
     * @param callback  有返回按钮时的回调
     * @param points  层级
     * @param templetes  层级
     * @param zIndex  层级
     */
    showAd(adType: number, callback: () => void, points?: Array<vectory>, templetes?: Array<string>, zIndex?: number, pointName?: string, formName?: string): void;
    /**
     * 显示广告
     * @param options
     */
    showAd2(options: showAdOptions): void;
    hideAd(callback: Function): void;
    /**
     * 金币动画
     * @param options
     */
    showCoin(options: showCoinOptions): void;
    /**
     * 显示狂点页面
     * @param options
     */
    showMistouch(options: showMistouchOptions): void;
    /**
     * 显示奖励
     * @param style 金币动画
     * @param baseNum 视频奖励领取的倍数
     * @param showCoinAnim 显示金币动画
     * @param callback
     */
    showPrize(options: showPrizeOptions): void;
    /**
     * 显示结算统计页
     * @param coinNum
     * @param callback
     */
    showTotal(options: showTotalOptions): void;
    /**
    * 显示结算统计页
    * @param coinNum
    * @param callback
    */
    showEnd(options: showEndOptions): void;
    /**
        * 显示复活页面
        * @param coinNum
        * @param callback
        */
    showRespawn(options: showRespawnOptions): void;
    /**
     * 显示失败页面
     * @param coinNum
     * @param callback
     */
    showFail(options: showFailOptions): void;
    /**
      * 显示结算统计页
      * @param coinNum
      * @param callback
      */
    showPause(options: showPauseOptions): void;
    /**
     *  showShare
     */
    showShare(options: showShareOptions): void;
    /**
    *  showShare
    */
    showTry(options: showTryOptions): void;
    /**
     *  showShare
     */
    showSet(options: showSetOptions): void;
    /**
        *  showShare
        */
    showBox(options: showBoxOptions): void;
    /**
     * 显示窗体  此方法只会显示UI内容，不包含任何逻辑,一般用于自定义窗体
     * @param formName FormLayout 中的枚举值或者 字符串
     */
    createForm(formName: string): void;
    /**
     * 隐藏窗体
     * @param formName FormLayout 中的枚举值或者 字符串
     */
    hideForm(formName: string): void;
}
