/**
 * Time: O(n * 2^n)
 * Space: O(n * 2^n)
 * n - # of nums
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  const solutions = [];
  nums.sort((a, b) => a - b);
  findSubsets(nums, solutions, [], 0);
  return solutions;
}

/**
 * @param {number[]} nums
 * @param {number[]} solutions
 * @param {number[]} current
 * @param {number} start
 * @return {void}
 */
function findSubsets(nums, solutions, current, start) {
  solutions.push(current.slice());

  for (let i = start; i < nums.length; i++) {
    if (i !== start && nums[i] === nums[i - 1]) { // skip duplicates
      continue;
    }

    current.push(nums[i]);
    findSubsets(nums, solutions, current, i + 1);
    current.pop();
  }
}