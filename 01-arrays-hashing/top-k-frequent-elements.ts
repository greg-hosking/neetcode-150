function topKFrequent(nums: number[], k: number): number[] {
    const counts = new Map<number, number>();

    nums.forEach((num) => {
        const value = counts.get(num) || 0;
        counts.set(num, value + 1);
    });

    const countsSorted = new Map(
        [...counts.entries()].sort((a, b) => b[1] - a[1])
    );
    const topK: number[] = [];
    for (const [key, _] of countsSorted) {
        if (topK.length < k) {
            topK.push(key);
        } else {
            break;
        }
    }

    return topK;
}
