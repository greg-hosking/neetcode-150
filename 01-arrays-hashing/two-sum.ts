function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    let val: number;
    let diff: number;

    for (let i = 0; i < nums.length; i++) {
        val = nums[i];
        diff = target - val;
        if (map.has(diff)) {
            return [i, map.get(diff)];
        } else {
            map.set(val, i);
        }
    }
}
