function stolen(weight, value, M) {
  let n = weight.length
  let best = []
  for (let i = 0; i < n; i++) {
    best[i] = []
    for (let j = 0; j <= M; j++) {
  	  if (i == 0) best[i][j] = j < weight[i] ? 0 : value[i]
      else best[i][j] = j < weight[i] ? best[i-1][j] : Math.max(best[i-1][j], best[i-1][j-weight[i]] + value[i])
    }
  }
  console.log(best[n-1][M])
}
