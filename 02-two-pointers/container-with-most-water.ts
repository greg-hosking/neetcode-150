function maxArea(height: number[]): number {
    let area = 0;
    let maxArea = 0;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        area = (right - left) * Math.min(height[left], height[right]);
        if (area > maxArea) {
            maxArea = area;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
