class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let length = 0;
        let chars = new Set();
        let char = "";

        for (let i = 0; i < s.length; i++) {
            length = 0;
            chars.clear();
            for (let j = i; j < s.length; j++) {
                char = s[j];
                if (chars.has(char)) {
                    break;
                }
                chars.add(char);
                length++;
            }
            if (length > maxLength) {
                maxLength = length;
            }
        }

        return maxLength;
    }
}
