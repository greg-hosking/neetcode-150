func twoSum(nums []int, target int) []int {
    indices := []int{-1, -1}
    sum := 0

    for i := 0; i < len(nums) - 1; i++ {
        if (i == len(nums) - 1) {
            break
        }
        for j := i + 1; j < len(nums); j++ {
            sum = nums[i] + nums[j]
            if sum == target {
                indices[0] = i
                indices[1] = j
                return indices
            }
        }
    }

    return indices
}