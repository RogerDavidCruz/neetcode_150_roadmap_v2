class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    // remove non-alphanumeric characters
    const newS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // far left and far right pointers
    let left = 0, 
        right = newS.length - 1;

    // conditional loop move pointers
    while (left < right) {
      if (newS[left] !== newS[right]){
        return false;
      }
      left++; 
      right--;
    }
    return true;
    }
}

/*
    P: string
    R: boolean
    E: "firetruck" --> false, "Madam I'm Adam" ---> true
    P: using two pointers pattern start, and use conditional loop
        to move pointers while checking each string element 
        as both pointers move towards each other when they match
        character otherwise return false

    Time: o(n)
    Space: o(n) for newstring
*/
