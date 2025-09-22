class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1) Count frequency per number
        const freq = new Map();
        for (const value of nums){
            freq.set(value, (freq.get(value) || 0) + 1);
        }
        
        // 2) Turn the map into an array of [num, freq]
        const entries = Array.from(freq.entries());

        // 3) Sort by frequency (descending)
        entries.sort((a,b) => b[1] - a[1])

        // 4) New array with k entries freq
        const topKEntries = entries.slice(0,k);

        // 5) Pull out num value from [numVal, freqVal]
        const result = [];
        for (const entry of topKEntries) {
            const num = entry[0];
            result.push(num);
        }

        return result;
    }
}

/*
P: array and int
R: array with the k most freq int
E: [1,2,2,2,4,5,5,5], k =3 ---> [2,5]
P: a hashmap can loop through the array
   count the instances for each num. 
   then push into array the num that 
   matches to the kth element.

    Time: O(n log n) (because of the sort)
    Space: O(n)
*/