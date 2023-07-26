export default function initField(nCols: number, nRows: number, mines: number) {
  const field = new Array(nCols).fill(null).map(() =>
    new Array(nRows).fill(null).map(() => ({
      hasMine: false,
    })),
  );

  // Init mines
  let minesPlaced = 0;
  do {
    const i = Math.floor(Math.random() * nCols);
    const j = Math.floor(Math.random() * nRows);
    if (!field[i][j].hasMine) {
      field[i][j].hasMine = true;
      minesPlaced++;
    }
  } while (minesPlaced < mines);

  return {
    cols: nCols,
    rows: nRows,
    totalMines: minesPlaced,
    field: initValues(field),
  };
}

function initValues(field) {
  const result = Array.from(field);
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[0].length; j++) {
      if (!result[i][j].hasMine) {
        const neighbors = getNeighboringTiles(result.length, result[0].length, i, j);
        result[i][j].value = neighbors.reduce((acc, { x, y }) => {
          if (result[x][y].hasMine) {
            acc++;
          }
          return acc;
        }, 0);
      }
    }
  }
  return result;
}

export function getNeighboringTiles(cols: number, rows: number, i: number, j: number) {
  const neighbors = [];
  if (i > 0 && j > 0) {
    neighbors.push({ x: i - 1, y: j - 1 });
  }
  if (i > 0) {
    neighbors.push({ x: i - 1, y: j });
  }
  if (j > 0) {
    neighbors.push({ x: i, y: j - 1 });
  }
  if (i < cols - 1 && j < rows - 1) {
    neighbors.push({ x: i + 1, y: j + 1 });
  }
  if (i < cols - 1) {
    neighbors.push({ x: i + 1, y: j });
  }
  if (j < rows - 1) {
    neighbors.push({ x: i, y: j + 1 });
  }
  if (i > 0 && j < rows - 1) {
    neighbors.push({ x: i - 1, y: j + 1 });
  }
  if (i < cols - 1 && j > 0) {
    neighbors.push({ x: i + 1, y: j - 1 });
  }
  return neighbors;
}
