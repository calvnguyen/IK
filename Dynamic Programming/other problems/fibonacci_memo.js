
let memo = new Map();
function fib(n) {

	if (n === 0 || n === 1) return n;

	if (!memo.has(n)) {
		memo.set(n, fib(n-1) + fib(n-2));
	}

	return memo.get(n);
}

console.log(fib(7));
