'use strict';

/**
 * 与えられた整数が17で割り切れるかどうかを返す関数
 * @param {number} num 
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
