function isValidSudoku(board: string[][]): boolean {
    // Check rows and cols
    const row = new Set<string>();
    const col = new Set<string>();
    for (let i = 0; i < 9; i++) {
        row.clear();
        col.clear();
        for (let j = 0; j < 9; j++) {
            // i,j traverses the board row by row
            const rowVal = board[i][j];
            if (rowVal !== ".") {
                if (row.has(rowVal)) {
                    return false;
                }
                row.add(rowVal);
            }
            // j,i traverses the board col by col
            const colVal = board[j][i];
            if (colVal !== ".") {
                if (col.has(colVal)) {
                    return false;
                }
                col.add(colVal);
            }
        }
    }

    // Check subboxes
    const subbox = new Set<string>();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            subbox.clear();
            for (let k = i * 3; k < i * 3 + 3; k++) {
                for (let l = j * 3; l < j * 3 + 3; l++) {
                    const val = board[k][l];
                    if (val === ".") {
                        continue;
                    }
                    if (subbox.has(val)) {
                        return false;
                    }
                    subbox.add(val);
                }
            }
        }
    }

    return true;
}
