class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [],
            path = [];
        
        const dfs = (start) => {
            // 1) Every prefix we build is a valid subset
            res.push([...path]);

            // 2) choose next and explore forward
            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);     // choose
                dfs(i + 1);             // explore
                path.pop();             // un-choose (backtrack) removing
            }
        };

        dfs(0)
        return res
    }
}

/*
P: Array of unique integers,
R: Array of arrays (each inner array is subset)
E: Nums = [1,2,3] => [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
P: Use backtracking (DFS), 
    - keep a list called 'path' that stores the current subset being built
    - each time a position is visited, add a copy of "path" list to our result list
    - Then, from that position forward:
        - pick a number at each position, (add it to 'path')
        - call dfs() to explore deeper choose nums[i], dfs( i + 1) with the next index
        - remove the number (backtrack) and try the next one

Time: O(2^n * n) - copying paths
Space: O(n) recursion + O(2^n * n) output

Pattern used: backtracking / DFS (Generate combinations)

Some Brief Notes on Backtracking:
    - Try adding a number to the current path [].
    - Explore deeper (DFS) to build more subsets.
    - Remove the number (undo/un-choose) before trying the next one.
    → This “undo/un-choose” step is called backtracking.
    - It lets us reuse the same path list [] to explore all possible combinations.
*/