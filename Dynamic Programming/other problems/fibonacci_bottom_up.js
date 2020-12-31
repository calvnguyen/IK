
function fib(n) {
	result = new Array(3);

	result[0] = 0;
	result[1] = 1;

	for (let i = 2; i <= n; i++) {
		result[i % 3] = result[(i-1) % 3] + result[(i-2) % 3]; 
	}

	return result[n % 3];
}

console.log(fib(6));