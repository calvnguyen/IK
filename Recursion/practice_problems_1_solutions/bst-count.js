
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

function how_many_BSTs(n) {
  if (n <= 1) {
    return 1;
  }
  let count = 0;
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