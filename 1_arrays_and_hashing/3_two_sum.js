class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
  twoSum(nums, target) {
    const indexByValue = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;

        if (indexByValue.has(complement)) {
            const j = indexByValue.get(complement);
            return j < i ? [j,i] : [i,j];
        }
        indexByValue.set(current, i);
    }
  }

}

    /*
    P: array of sums
    R: array of indices
    E: [1,2,3,4] target = 6, result [1,3]
    P: two pointers approach (only if can SORT array) if first on left and other pointer
        moves until end of array to see if target reach or not. If
        not then move first pointer. 

        Brute Force: use two for loops, Time: O(n²), Space: O(1)

        Hashmap approach (this solution): 
        Time: O(n) average — one pass
        Space: O(n) - in the worst case the map stores up to all n elements.
    */