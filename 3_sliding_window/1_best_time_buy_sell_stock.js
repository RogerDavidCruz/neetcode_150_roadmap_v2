class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let diff = 0,
            left = 0,
            right = 1;

        while (right < prices.length) {
            if (prices[right] > prices[left]) {
                diff = Math.max(diff, prices[right] - prices[left]);
            } else {
                left = right;
            }
            right++;
        }
        return diff;
    }
}


/*
P: array
R: num
E: [10, 1, 3, 4, 7, 0, 9] --> 8 because (9 - 1)
P: sliding window pattern in which left point starts at 0, right starts at 1
move the right pointer throughout length of array, check if the right value
is greater than left value and calculate the max difference between existing
difference and the subtraction of left and right values. Otherwise move left
to match the right pointer's value. And continue to move right pointer. 
Rturn the final difference.

Time: O(n)
Space: O(1)

*/
