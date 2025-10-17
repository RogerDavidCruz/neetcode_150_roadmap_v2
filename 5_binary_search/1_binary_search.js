class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            let val = nums[mid];

            if (val === target) return mid;

            if (val < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}

/*
P: array of nums and num
R: num (index)
E: [-1,0,2,4,6,8] & 6 ---> 4
P: maintain inclusive window [left, right]; 
compute middle; compare middle value to target;
shrink to the half that can still contain the target; 
return -1 if window becomes empty.
*/