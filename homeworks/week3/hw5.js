function compare(a, b, k) {
  const [m, n] = [a.toString(10), b.toString(10)];
  let result = '';
  if (m === n) result = 'DRAW';
  if (m.length > n.length) result = k === 1 ? 'A' : 'B';
  else if (m.length < n.length) result = k === 1 ? 'B' : 'A';
  else {
    for (let i = 0; i < m.length; i += 1) {
      if (Number(m[i]) > Number(n[i])) result = k === 1 ? 'A' : 'B';
      else if (Number(m[i]) < Number(n[i])) result = k === 1 ? 'B' : 'A';
    }
  }
  return console.log(result);
}

compare(1, 2, 1);
compare(1, 2, -1);
compare(2, 2, 1);
