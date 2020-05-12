export default class ArrayUtil {
    shuffle(array) {
        var iLength = array.length,
            i = iLength,
            mTemp,
            iRandom;
        while (i--) {
            if (i !== (iRandom = Math.floor(Math.random() * iLength))) {
                mTemp = array[i];
                array[i] = array[iRandom];
                array[iRandom] = mTemp;
            }
        }
        return array;
    }

    /**
      * Array.indexOf
      * @param searchArray
      * @param searchElement
      * @returns {Number} 找不到返回-1
      */
    indexOf(searchArray, searchElement) {
        var result = -1;
        for (var i = 0, length = searchArray.length; i < length; i++) {
            if (searchArray[i] == searchElement) {
                result = i;
                break;
            }
        }
        return result;
    }

    /**
      * 交换位置
      * @param replaceArray
      * @param fromIndex
      * @param toIndex
      */
    replace(replaceArray, fromIndex, toIndex) {
        var from = replaceArray[fromIndex];
        var to = replaceArray[toIndex];
        replaceArray[toIndex] = from;
        replaceArray[fromIndex] = to;
    }

    /**
      * 合并
      * @param mergefrom
      * @param mergeto
      */
    merge(mergefrom, mergeto) {
        for (var i = 0, length = mergefrom.length; i < length; i++) {
            mergeto.push(mergefrom[i]);
        }
        return mergeto;
    }

    /**
      * 克隆
      * @param from
      * @returns {Array}
      */
    static clone(from) {
        var newarray = new Array();
        newarray = from.slice(0);
        return newarray;
    }
    /**
     * 
     */
    static remove(origin, item) {
        for (let i = 0; i < origin.length; i++) {
            if (origin[i] == item) {
                origin.splice(i, 1)
                i--;
                return;
            }
        }
    }
}