function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;

    let midRow: number;
    let midCol: number;

    while (top <= bottom) {
        midRow = top + Math.floor((bottom - top) / 2);
        if (matrix[midRow][0] > target) {
            bottom = midRow - 1;
        } else if (matrix[midRow][n - 1] < target) {
            top = midRow + 1;
        } else {
            while (left <= right) {
                midCol = left + Math.floor((right - left) / 2);
                if (matrix[midRow][midCol] === target) {
                    return true;
                }
                if (matrix[midRow][midCol] < target) {
                    left = midCol + 1;
                } else {
                    right = midCol - 1;
                }
            }
            return false;
        }
    }

    return false;
}
