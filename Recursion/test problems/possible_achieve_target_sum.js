/*
Possible To Achieve Target Sum?

Given a set of integers and a target value k, find a non-empty subset that sums up to k.


Example One

Input: [2 4 8], k = 6

Output: True

Because 2+4=6.


Example Two

Input: [2 4 6], k = 5

Output: False

Because no subset of numbers from the input sums up to 5.


Notes

Input Parameters: Function has two arguments: an array of integers (their order doesn’t matter) and the target value  k.

Output: Function must return a boolean value.

  T(N): O(2^N)
  S(N): O(N)
*/

function check_if_sum_possible(arr, k) {
	return sumHelper(0, arr, k, false);
}


function sumHelper(start, arr, remaining, picked) {
	// base case
	if (start >= arr.length) {
		// there is at least one result subset picked
		return (picked && remaining === 0);
	}
	if (sumHelper(start + 1, arr, remaining, picked)) {
		return true;
	}
	return sumHelper(start + 1, arr, remaining - arr[start], true);
}

console.log(check_if_sum_possible([2 , 0], 2));
