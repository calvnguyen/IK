
/*
Merge One Sorted Array Into Another

Given two arrays:

1) arr1 of size n, which contains n positive integers sorted in the ascending order.

2) arr2 of size (2*n) (twice the size of first), which contains n positive integers sorted in the ascending order in its first half. Second half of this array arr2 is empty. (Empty elements are marked by 0).

Write a function that takes these two arrays, and merges the first one into second one, resulting in an increasingly sorted array of (2*n) positive integers. 


Example

Input:

n = 3

arr1 = [1 3 5]

arr2 = [2 4 6 0 0 0]

Output: arr2 = [1 2 3 4 5 6]

Notes

Input Parameters: There are two arguments. First one is an integer array denoting arr1 and second one is also an integer array denoting arr2.

Output: You don't have to return anything. You just need to modify the given array arr2.


Constraints:

1 <= n <= 10^5
1 <= arr1[i] <= 2 * 10^9
1 <= arr2[i] <= 2 * 10^9 (for the first half)
arr2[i] = 0 (for the second half)
You can use only constant extra space.
0 denotes an empty space.
*/


/*
 * Complete the merger_first_into_second function below.
 */
function merger_first_into_second(arr1, arr2) {
    // the last value of arr1
	let first = arr1.length - 1;
	// the last value of arr2
	let second = (arr2.length - arr1.length) - 1;

	// index starts at end of arr2, we will override these right to left
	for (let i = arr2.length - 1; i >= 0; i--) {
		// end of first array, exit
		if (first < 0) {
			break;
		}
		// the larger array's value is greater, so replace its index value to this greater value, move left on arr2
		if (arr2[second] > arr1[first]) {
			arr2[i] = arr2[second];
			second--;
		} else {
			// the smaller array's value is greater, so replace arr2's index value to this greater value, move left on arr1
			arr2[i] = arr1[first];
			first--;
		}
	}

	return arr2;
}
