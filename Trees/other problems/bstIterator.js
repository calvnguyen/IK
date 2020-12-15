function BSTIterator(root) {
    this.st = [];
    while(root !== null) {
        this.st.push(root);
        root = root.left;
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let cur = this.st.pop();
    let res = cur.val;
    // put the right child into the stack
    if(cur.right) {
        this.st.push(cur.right);
        cur = cur.right.left;
        while(cur !== null) {
            this.st.push(cur);
            cur = cur.left;
        }
    }
    return res;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.st.length > 0;
};