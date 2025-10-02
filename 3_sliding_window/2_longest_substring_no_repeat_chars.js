class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let diffLength = 0,
            left = 0,
            right = 0; // start window at 0
        const lastSeen = new Map(); //char - last index

        while (right < s.length) {
            const char = s[right];

            // if char in current window, move left
            if (lastSeen.has(char) && lastSeen.get(char) >= left) {
                left = lastSeen.get(char) + 1;
            }
            // update last seen index of char
            lastSeen.set(char, right);

            // update best window size
            diffLength = Math.max(diffLength, right - left + 1);

            // expand the window
            right++;
        }
        return diffLength;
    }
}


/*
P: string
R: num 
E: "azxyzxyz" --> 4 --- (azxy) longest w/out duplicate chars
P: use sliding window pattern, start with left = 0, and right = 0
lastseen variable map to store last index per char. 
If s[right] was seen inside window (lastSeen[ch] ≥ left), 
move left to lastSeen[ch]+1. Update lastSeen[ch] = right and 
best = max(best, right-left+1).


Time: O(n) - each index moves forward at once;
Space: O(min(n, Σ)) - Σ = alphabet size, ascii that's <= 128.
*/
