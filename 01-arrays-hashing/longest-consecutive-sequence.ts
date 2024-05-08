function longestConsecutive(nums: number[]): number {
    let longest = 0;
    let current = 0;

    const set = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        current = 0;
        const prevExists = set.has(nums[i] - 1);
        if (!prevExists) {
            let nextExists: boolean;
            let num = nums[i];
            do {
                num++;
                nextExists = set.has(num);
                current++;
            } while (nextExists);
        }
        if (current > longest) {
            longest = current;
        }
    }

    return longest;
}
