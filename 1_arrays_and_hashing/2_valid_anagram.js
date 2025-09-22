class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let count = new Map();

        for (let i = 0; i < s.length; i++) {
            const charS = s[i];
            const charT = t[i];
            count.set(charS, (count.get(charS) || 0) + 1);
            count.set(charT, (count.get(charT) || 0) - 1);
        }

        for (const [_,v] of count) {
            if (v !== 0) return false;
        }
        return true;
    }
}

/*
P: two strings
R: boolean
E: "racecar" and "carrace" = true
P: use new Map()
   increment and decrement characters for both in one loop
   destructoring check values of map only

Time: O(n)
    - One pass over strings (n). 
    - Final pass over up to k keys (k ≤ n). → n + k ≈ n.

Space: O(k) (≤ O(n))
    - Map holds one count per distinct char.
    - If fixed alphabet (e.g., 26 letters) and you use an array: O(1)
*/