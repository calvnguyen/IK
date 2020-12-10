
/*
How Many Binary Search Trees With n Nodes?

Write a function that returns the number of distinct binary search trees that can be constructed with n nodes.
For the purpose of this exercise, do solve the problem using recursion first even if you see some non-recursive approaches.

Example One

Input: 1
Output: 1


Example Two

Input: 2
Output: 2

Suppose the values are 1 and 2, then the two trees that are possible are

   (2)               (1)

  /          and       \

(1)                     (2)


Example Three

Input: 3
Output: 5

Suppose the values are 1, 2, 3 then the possible trees are

       (3)

      /

    (2)

   /

(1)


   (3)

  /

(1)

   \

   (2)


(1)

   \

    (2)

      \

       (3)


(1)

   \

    (3)

   /

(2)


   (2)

  /   \

(1)    (3)


Notes

Input Parameters: Function has one argument: n.
Output: Function must return an integer value.
*/

/* Approach: Use the Catalan number formula (https://en.wikipedia.org/wiki/Catalan_number)

The number of binary search trees that will be formed with N keys can be calculated by simply evaluating the corresponding number in Catalan Number series. 
First few Catalan numbers for n = 0, 1, 2, 3, … are 1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, …
Catalan numbers satisfy the following recursive formula: 

Total no of Binary Trees are = factorial(2n)! / (factorial(n+1) * factorial(n))...

Evaluated in a series...

T(n) = Sum(i to n) [T(i-1) * T(n-i)]   


Furthermore...

Number of binary search trees = (Number of Left binary search sub-trees) * (Number of Right binary search sub-trees) * (Ways to choose the root)

In a BST, only the relative ordering between the elements matter. So, without any loss on generality, we can assume the distinct elements in the tree are 1, 2, 3, 4, ...., n. 
Also, let the number of BST be represented by f(n) for n elements.

Now we have the multiple cases for choosing the root.

Choose 1 as root, no element can be inserted on the left sub-tree. n-1 elements will be inserted on the right sub-tree.
Choose 2 as root, 1 element can be inserted on the left sub-tree. n-2 elements can be inserted on the right sub-tree.
Choose 3 as root, 2 element can be inserted on the left sub-tree. n-3 elements can be inserted on the right sub-tree.
...... Similarly, for i-th element as the root, i-1 elements can be on the left and n-i on the right.

These sub-trees are itself BST, thus, we can summarize the formula as:

f(n) = f(0)f(n-1) + f(1)f(n-2) + .......... + f(n-1)f(0)

Example:
Base cases, f(0) = 1, as there is exactly 1 way to make a BST with 0 nodes. f(1) = 1, as there is exactly 1 way to make a BST with 1 node.

*/

function how_many_BSTs(n) {
  // 0 or 1
  if (n <= 1) {
    return 1;
  }
  let count = 0;
  // find the nth Catalan number
  for (let i = 1; i < n + 1; i++) {
    // i is the root of the tree
    const leftSubtreesCount = how_many_BSTs(i - 1);
    const rightSubtreesCount = how_many_BSTs(n - i);
    count += (leftSubtreesCount * rightSubtreesCount);
  }
  return count;
}

console.log(how_many_BSTs(1));
console.log(how_many_BSTs(2));
console.log(how_many_BSTs(3));
console.log(how_many_BSTs(5));