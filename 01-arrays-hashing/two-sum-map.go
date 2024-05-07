func twoSum(nums []int, target int) []int {
    numsMap := make(map[int]int)
    for i, num := range nums {
        if j, found := numsMap[target - num]; found {
            return []int{j, i}
        }
        numsMap[num] = i
    }
    return nil
}