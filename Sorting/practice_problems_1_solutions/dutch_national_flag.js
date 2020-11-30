/*
Dutch National Flag

Given some balls of three colors arranged in a line, rearrange them such that all the red balls go first, then green and then blue ones.

Do rearrange the balls in place. A solution that simply counts colors and overwrites the array is not the one we are looking for.

This is an important problem in search algorithms theory proposed by Dutch computer scientist Edsger Dijkstra. Dutch national flag has three colors (albeit different from ones used in this problem).



Example

Input: [G, B, G, G, R, B, R, G]

Output: [R, R, G, G, G, G, B, B]


There are a total of 2 red, 4 green and 2 blue balls. In this order they appear in the correct output.

Notes

Input Parameters: An array of characters named balls, consisting of letters from {‘R’, ‘G’, ‘B’}.

Output: Return type is void. Modify the input character array by rearranging the characters in-place.

Constraints:

1 <= n <= 100000
Do this in ONE pass over the array - NOT TWO passes, just one pass.
Solution is only allowed to use constant extra memory.
*/


function dutch_flag_sort(balls) {
	let low = 0;
	let mid = 0;
	let high = balls.length - 1;

	while (mid <= high) {
        // anything before low pointer is R
		if (balls[mid] === 'R') {
			swap(balls, low, mid);
			low++;
			mid++;
		}
		// move mid pointer on G
		else if (balls[mid] === 'G') {
			mid++;
		}
		// anything after high pointer is B
		else if (balls[mid] === 'B') {
			swap(balls, mid, high);
			high--;
		}
	}
	return balls;
}


function swap(arr, indexA, indexB) {
	let temp = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = temp;
}