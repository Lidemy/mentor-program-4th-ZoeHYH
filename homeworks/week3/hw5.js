function compare(A, B, K) {
  if (A == B) console.log('DRAW')
  if (A.length > B.length) console.log(K == '1' ? 'A' : 'B')
  else if (A.length == B.length) {
    for (let i = 0; i< A.length; i++) {
      if (Number(A[i]) > Number(B[i])) console.log(K === '1' ? 'A' : 'B')
      else if (Number(A[i]) == Number(B[i])) continue
      else console.log(K == '1' ? 'B' : 'A')
      return
    }
  } else console.log(K == '1' ? 'B' : 'A')
}
