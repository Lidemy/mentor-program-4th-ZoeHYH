function isNarcissistic(n, m) {
  for (let i = n; i < m + 1; i += 1) {
    let ans = 0;
    const num = i.toString(10).split('');
    for (let j = 0; j < num.length; j += 1) {
      num[j] = Number(num[j]) ** num.length;
      ans += num[j];
    }
    if (ans === i) console.log(ans);
  }
}

isNarcissistic(5, 200);
