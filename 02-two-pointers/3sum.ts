function threeSum(nums: number[]): number[][] {
    const map = new Map<string, number>();
    nums.sort((b, a) => b - a);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                const result = JSON.stringify([
                    nums[i],
                    nums[left],
                    nums[right],
                ]);
                if (!(result in map)) {
                    map[result] = 1;
                }
                left++;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return Object.keys(map).map((item) => JSON.parse(item));
}
