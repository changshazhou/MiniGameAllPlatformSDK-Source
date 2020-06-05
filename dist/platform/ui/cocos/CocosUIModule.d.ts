import { BaseUIModule } from "../engine/BaseUIModule";
/**
  * HASDO:
  * 1栈方式管理UI，
  * 2缓存UI
  * 3入栈（显示UI）
  * 4出栈（关闭UI）
  * 5关闭指定UI
  *
  * TODO:
  * 1上层UI遮盖下层UI逻辑回调
  * 2设置label默认字体
  * 3按需清理缓存
  *
  * ISSUE
  * 1由于UI是异步加载，导致UI栈顺序会错乱 (fixed)
  * 2连续push相同UI（待测试）
  */
export declare class CocosUIModule extends BaseUIModule {
}
