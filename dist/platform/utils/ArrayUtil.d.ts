export default class ArrayUtil {
    shuffle(array: any): any;
    /**
      * Array.indexOf
      * @param searchArray
      * @param searchElement
      * @returns {Number} 找不到返回-1
      */
    indexOf(searchArray: any, searchElement: any): number;
    /**
      * 交换位置
      * @param replaceArray
      * @param fromIndex
      * @param toIndex
      */
    replace(replaceArray: any, fromIndex: any, toIndex: any): void;
    /**
      * 合并
      * @param mergefrom
      * @param mergeto
      */
    merge(mergefrom: any, mergeto: any): any;
    /**
      * 克隆
      * @param from
      * @returns {Array}
      */
    static clone(from: any): any[];
    /**
     *
     */
    static remove(origin: any, item: any): void;
}
