function (n, m) {
  for (let i = n; i < m+1; i++) {
    let ans = 0
    let num = i.toString(10).split('')
    for (let j = 0; j < num.length; j++) {
    	num[j] = Math.pow(Number(num[j]), num.length)
        ans += num[j]
    }
    if (ans === i) {
        console.log(ans)
    }
  }
}
