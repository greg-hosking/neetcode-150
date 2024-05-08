function productExceptSelf(nums: number[]): number[] {
    const left = new Array<number>(nums.length).fill(0);
    const right = new Array<number>(nums.length).fill(0);
    left[0] = 1;
    right[right.length - 1] = 1;

    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = left[i] * right[i];
    }
    return nums;
}
