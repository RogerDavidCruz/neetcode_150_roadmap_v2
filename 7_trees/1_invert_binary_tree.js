/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) return null

        //swap children nodes
        const temp = root.left;
        root.left = root.right;
        root.right = temp;

        //recurse on subtress
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}

/*
P: root (tree)
R: root (tree)
E: root = [1,2,3,4,5,6,7] --> [1,3,2,7,6,5,4]
P: Traversal type: DFS (Depth-First Search), Preorder
Work at the node first (swap), then recurse to its children.
DFS goes deep down a branch before backtracking (fits recursion nicely).

Time: O(n) — each node is visited once and swapped in O(1).
Space: O(h) — recursion call stack where h is the tree height

*/