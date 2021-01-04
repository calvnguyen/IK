/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    // solving this problem amounts to determining whether a subset of nums
    // that does not contain the entirety of nums sums to the sum of all
    // the elements of nums / 2
    let sum = nums.reduce((acc, v) => acc + v, 0) / 2;
    
    // quickly handle edge case where sum is odd, no equal partition possible
    if (sum !== parseInt(sum)) {
        return false;
    }
    
    // create a dp table of dimensions (nums.length + 1) X (sum(nums))
    // the first dimension indicates the number of items from nums being considered
    // the second dimension indicates a target sum, and dp[i][j] should be true
    // if a subset of the elements from 0 .. i in nums can can be be used to 
    // create a sum of j
    const dp = [];
    for (let i = 0; i < nums.length + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            dp[i][j] = false;
        }
    }
    
    // it is possible to create a subset with sum of 0 using any set (the empty set)
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = true;
    }
    
    // it is not possible to create a sum > 0 without any elements for all sums j
    for (let j = 0; j < dp.length; j++) {
        dp[0][j] = false;
    }
    
    // you can make a sum of 0 with an empty set
    dp[0][0] = true
    
    // for each index (i - 1) in nums from which subsets are considered
    for (let i = 1; i <= nums.length; i++) {
        
        // for all possible target sums j on the interval 1 to sum(nums) / 2
        for (let j = 1; j <= sum; j++) {
            
            // if it was possible to create the current sum using all numbers except for the previous
            // then it is possible to create that sum using a subset of the set of those numbers + the current number
            if (dp[i - 1][j] === true) {
                dp[i][j] = true;
            }
            
            // if it is possible to make a subset with a sum equal to the current target sum - nums[i - 1]
            // using the previous elements then it is possible to make the current target sum using all elements
            else if (dp[i - 1][j - nums[i]] === true) {
                dp[i][j] = true;
                
            }
            
            // it was not possible to create the current sum using the previous elements, and the there is no previously
            // computed subset which to add the current element to whose sum would then equal the current target sum j
            else {
                dp[i][j] = false;
            }
        }
    }
    
    // if dp[nums.length][sum] is true, then it was possible to create a subset from the set containing all elements 
    // but the last which was equal to the sum of all the (sum of all elements / 2) - (the last element),
    // therefore by adding the last element we can create a subset with a sum of (sum of all elements / 2)
    // using a subset of all the elements, and it follows that since the we make a subset whose sum is
    // exactly (sum of all elements / 2), the elements not included in this subset will also be equal
    // to (sum of all elements / 2) and there is a way to partition the elements such that both sides
    // have an equal sum.
    return dp[nums.length][sum];
};