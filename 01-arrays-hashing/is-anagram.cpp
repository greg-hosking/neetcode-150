class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.size() != t.size()) {
            return false;
        }
        
        map<char, int> sCounts;
        map<char, int> tCounts;

        for (int i = 0; i < s.size(); i++) {
            sCounts[s[i]]++;
            tCounts[t[i]]++;
        }

        for (int i = 0; i < sCounts.size(); i++) {
            if (sCounts[i] != tCounts[i]) {
                return false;
            }
        }
        return true;
    }
};
