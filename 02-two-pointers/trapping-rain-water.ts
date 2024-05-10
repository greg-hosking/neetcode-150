function trap(height: number[]): number {
    let area = 0;
    let water = 0;

    let left = 0;
    let right = 0;
    let highestRight = -1;
    let found = false;
    while (left < height.length - 1) {
        // Keep going until we find the left wall.
        if (height[left] === 0) {
            left++;
            continue;
        }
        // Left wall found.
        right = left + 1;
        highestRight = -1;
        found = false;
        while (right < height.length) {
            if (height[right] >= height[left]) {
                if (right - left === 1) {
                    // No rain can be collected here...
                    left = right;
                    break;
                }
                area =
                    (right - left - 1) * Math.min(height[left], height[right]);
                for (let i = left + 1; i < right; i++) {
                    area -= height[i];
                }
                water += area;
                left = right;
                found = true;
                break;
            } else if (
                highestRight === -1 ||
                height[right] > height[highestRight]
            ) {
                highestRight = right;
            }
            right++;
        }

        // If we're out here, we didn't find an immediately same height or taller wall...
        if (!found) {
            if (highestRight === -1) {
                continue;
            }
            if (highestRight - left === 1) {
                // No rain can be collected here...
                left = highestRight;
                continue;
            }
            area =
                (highestRight - left - 1) *
                Math.min(height[left], height[highestRight]);
            for (let i = left + 1; i < highestRight; i++) {
                area -= height[i];
            }
            water += area;
            left = highestRight;
        }
    }

    return water;
}
