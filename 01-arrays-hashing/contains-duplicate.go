func containsDuplicate(nums []int) bool {
    set := make(map[int]struct{})
    for i := range nums {
        set[nums[i]] = struct{}{}
    }
    return len(nums) != len(set)
}