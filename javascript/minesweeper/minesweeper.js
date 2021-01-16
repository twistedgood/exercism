//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  const rows = input.map(row => row.split(''));

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {

      if (rows[i][j] !== '*') {
        continue;
      }

      const hasUpper = (i > 0);
      const hasLower = (i + 1 < rows.length);
      const hasLeft = (j > 0);
      const hasRight = (j + 1 < rows[i].length);

      if (hasUpper) {
        // upper left
        if (hasLeft) {
          countUp(rows, i - 1, j - 1);
        }
        // upper
        countUp(rows, i - 1, j);
        // upper right
        if (hasRight) {
          countUp(rows, i - 1, j + 1);
        }
      }

      // left 
      if (hasLeft) {
        countUp(rows, i, j - 1);
      }
      // right
      if (hasRight) {
        countUp(rows, i, j + 1);
      }

      if (hasLower) {
        // lower left 
        if (hasLeft) {
          countUp(rows, i + 1, j - 1);
        }
        // lower 
        countUp(rows, i + 1, j);
        // lower right
        if (hasRight) {
          countUp(rows, i + 1, j + 1);
        }
      }
    }
  }

  return rows.map(row => row.join(''));
};

const countUp = (rows, i, j) => {
  const current = rows[i][j];
  if (current !== '*') {
    if (current === ' ') {
      rows[i][j] = 1;
    } else {
      rows[i][j] = current + 1;
    }
  }
};