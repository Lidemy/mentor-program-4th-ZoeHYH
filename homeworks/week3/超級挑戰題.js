function stolen(weight, value, M) {
  const n = weight.length;
  const best = [];
  for (let i = 0; i < n; i += 1) {
    best[i] = [];
    for (let j = 0; j <= M; j += 1) {
      if (i === 0) best[i][j] = j < weight[i] ? 0 : value[i];
      else {
        best[i][j] = j < weight[i] ? best[i - 1][j]
          : Math.max(best[i - 1][j], best[i - 1][j - weight[i]] + value[i]);
      }
    }
  }
  console.log(best[n - 1][M]);
}

stolen([9, 5, 2], [100, 60, 70], 10);
