/**
 * @namespace Arrays.Utils
 * @description Set of functions that you can use to access the elements of an
 * array or manipulate it.
 *
 * @public
 *
 * @author Yair Rodriguez
 * @copyright Copyright © 2016 Yair Rodriguez.
 *
 * @version 1.0.0
 * @since 1.0.0
 *
 * @license MIT
 */

/**
 * @memberof Arrays.Utils
 *
 * @function
 *
 * @name copy
 * @description Make an array *deep copy*, so that each of the original array’s
 * elements is actually copied to the new array’s elements.
 *
 * @param {Array} old - The array which is going to be copied.
 * @returns {Array} The new array with every value copied.
 *
 * @see {@link https://github.com/yairodriguez/algorithms/blob/0.2.0/UsingArrays/tests/arrays/utils.spec.js}
 *
 * @example
 * let nums = [];
 *
 * for (let i = 0; i <= 100; ++i) {
 *   nums[i] = i;
 * }
 *
 * const sameNums = copy(nums);
 *
 * nums[0] = 400;
 *
 * console.log(sameNums[0]); // 0
 */
export const copy = old => {
  let value = [];

  for (let i = 0; i <= old.length; ++i) {
    value[i] = old[i];
  }

  return value;
};
