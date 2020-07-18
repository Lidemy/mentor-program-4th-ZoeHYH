function mazeSolution(maze) {
  const [H, W] = [maze.length, maze[0].length];
  const now = ['0,0'];
  const past = [];
  for (let j = 0; j < H * W; j += 1) {
    for (let i = 0; i < now.length; i += 1) {
      const [x, y] = now[0].split(',').map(Number);
      const direction = [[x + 1, y], [x - 1, y], [x, y + 1], [y, y - 1]];
      for (let k = 0; k < direction.length; k += 1) {
        const [m, n] = direction[k];
        if ((m < W) && (m > -1) && (n < H) && (n > -1) && (maze[n][m] !== '#') && (past.indexOf(`${m},${n}`) === -1)) {
          now.push(`${m},${n}`);
        }
      }
      past.push(now.shift());
    }
    if (now.indexOf(`${W - 1},${H - 1}`) !== -1) {
      console.log(j + 1);
    }
  }
}

mazeSolution([['.', '#', '.'], ['.', '.', '.'], ['#', '.', '.']]);
