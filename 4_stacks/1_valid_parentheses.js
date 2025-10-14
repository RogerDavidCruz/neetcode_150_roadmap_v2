class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 === 1) return false;

        const brackets = { ')' : '(', ']': '[', '}': '{'}
        const stack = []

        for (const char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else {
                const top = stack.pop();
                if (top !== brackets[char]) return false;
            }
        }
        return stack.length === 0;
    }
}

/*
P: string of brackets
R: boolean
E: "[()]" --> true, "{[}" ---> false
P: build a stack of open parens and then pop from the stack
   if a match closed parenthesis is found. If nothing is
   left in the stack, return true all valid parens, otherwise
   return false.

   Time: O(n) — one pass.
   Space: O(n) worst case (all opens).
*/

