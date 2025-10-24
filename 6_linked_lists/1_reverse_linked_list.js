/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Iterative solution
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let previousNode = null,
            currentNode = head;
        
        while (currentNode !== null) {
            // 1. Save next before we overwrite
            let nextNode = currentNode.next;

            // 2. Reverse the pointer
            currentNode.next = previousNode;

            // 3. Advance both pointers forward
            previousNode = currentNode;
            currentNode = nextNode;
        }

        // previousNode is the new head
        return previousNode;
    }
}

/*
P: list of nodes
R: list of nodes
E: head = [0,1,2,3] ---> [3,2,1,0]
P: Traverse the list with three-pointer technique (prev, curr, next) pointers, 
reversing iteratively each link until all nodes point backward

Time: O(n)
Space: O(1) iterarively solution, vs O(n) recursive call stack solution

*/
