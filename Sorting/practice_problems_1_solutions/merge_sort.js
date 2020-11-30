
/*
Problem Statement:

You are given an array of integers. You have to sort the array using merge sort algorithm.

Input/Output Format For The Function:

Input Format:

The function contains a single argument, an integer array arr.

Output Format:

Return the sorted integer array.
*/


/*
 * Complete the 'merge_sort' function below.
 *
 * The function accepts an integer array as parameter.
 */
 
function merge_sort(arr) {
    // if only one element, return array (sorted)
    if (arr.length <= 1) { 
        return arr; 
	}
	
	let mid = Math.floor(arr.length / 2);
	// equal left half
	let left = merge_sort(arr.slice(0, mid));
	// equal right half
	let right = merge_sort(arr.slice(mid));

	return merge(left, right);
}

// helper function to merge sorted arrays back together
function merge(arr1, arr2) {
	let results = [];

	let i = 0; 
	let j = 0;

	// compare smallest value between two arrays, move pointer on the array that has the smaller value. Otherwise, move point in the array 
	// that has the larger value...
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	// push in remaining values from either array that has values left
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++
	}

	return results;
}

