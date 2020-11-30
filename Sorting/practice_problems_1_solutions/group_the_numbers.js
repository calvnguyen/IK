
/*
Group the numbers
You are given an integer array arr of size n. Group and rearrange them (in-place) into evens and odds in such a way that group of all even integers appears on the left side and group of all odd integers appears on the right side. 

Example

Input: [1, 2, 3, 4]

Output: [4, 2, 1, 3]



Order does not matter. Other valid solutions are: 

[2, 4, 1, 3]

[2, 4, 3, 1]

[4, 2, 3, 1]

Notes

Input Parameters: There is only one argument: Integer array arr.


Output: Return the same integer array, with evens on left side and odds on the right side. 

There is no need to preserve order within odds or within evens.


Constraints:

1 <= n <= 10^5
arr contains only positive integers.
arr may contain duplicate numbers.
Solution with linear time complexity and constant auxiliary space is expected.
*/

function solve(arr) {
    if (!arr || arr.length === 1) {
        return arr;
    }
    
	let left = 0;
	let right = arr.length - 1;


	while ( left < right) {
	    // both are in wrong places (left mod is 1 [odd], right mod is 0 [even]), swap  
		if (arr[left] % 2 > arr[right] % 2) {
			let temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
		}
        
        // only left is in correct position, move left
		if (arr[left] % 2 === 0) {
			left++;
		}
        
        // only right is in correct position, move right
		if (arr[right] % 2 === 1) {
			right--;
		}
	}


	return arr;

}
