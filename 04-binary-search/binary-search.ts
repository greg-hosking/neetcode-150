function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let mid: number;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }

    return -1;
}
