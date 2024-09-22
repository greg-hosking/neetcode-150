class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        map<int, int> counts;
        int currNum;
        for (int i = 0; i < nums.size(); i++) {
            currNum = nums.at(i);
            if (counts[currNum] == 1) {
                return true;
            }
            counts[currNum] = 1;
        }
        return false;
    }
};
