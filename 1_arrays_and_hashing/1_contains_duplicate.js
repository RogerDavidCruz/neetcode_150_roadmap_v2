class Solution {
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length;
    }
}

/*
P: ARRAY
R: boolean
E: [2,3,4,4,9] --> true
P: use new Set to tell the frequency of the values of indeces
in the array, it returns a new set object so use .size 

Time: O(n)
Space: O(n) worst case (O(d) with d = distinct elements).
*/