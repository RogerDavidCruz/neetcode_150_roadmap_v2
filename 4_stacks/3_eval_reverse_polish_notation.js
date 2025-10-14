class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let valueStack = [];

        const operator = {
            '+' : (left, right) => left + right,
            '-' : (left, right) => left - right,
            '*' : (left, right) => left * right,
            '/' : (left, right) => Math.trunc(left / right),
        };

        for (const token of tokens) {
            if (token in operator) {
                const rightOperand = valueStack.pop(); //second pop = right side
                const leftOperand = valueStack.pop(); // first pop = left side
                const computedValue = operator[token](leftOperand, rightOperand);
                valueStack.push(computedValue);
            } else {
                valueStack.push(Number(token));
            }
        }
        return valueStack.pop();
    }
}

/*
P: array of strings w/ num and operator
R: num
E: ["1","2","+","3","*","4","-"]  // ((1+2)*3) - 4 = 5
P: initialize empty stack then for each token:
  - if token is number → push Number(token)
  - else (operator):
    - right = pop(), left = pop()
    - compute = apply operator(left, right)  // use Math.trunc(left/right) for "/"
    - push compute
- return pop() from stack

Time: O(n)
Space: O(n)
*/
