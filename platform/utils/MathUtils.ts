export default class MathUtils {

    public static randomNumBoth(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入
        return num;
    }
    /**
    * 传入概率值数组，返回中标的概率下标
    * @param parr 概率数组
    */
    public static probabilitys(parr) {
        var arr = 0;
        var pres = [...parr];
        var probabilityCount = 0;
        for (let i = 0; i < pres.length; i++) {
            probabilityCount += pres[i];
        }
        if (probabilityCount != 100) {
            throw '所有概率值总和不等于100%';
        }
        var nums = new Array();
        for (let i = 0; i < pres.length; i++) {
            const element = pres[i];
            for (let index = 0; index < element; index++) {
                nums.push(arr);
            }
            arr++;
        }
        var random = this.randomNumBoth(0, 99);
        var targetIndex = nums[random];
        return targetIndex;
    }
}