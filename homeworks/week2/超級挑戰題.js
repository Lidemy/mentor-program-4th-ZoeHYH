function add(a,b) {
  let m = a.toString(2).split('')
  let n = b.toString(2).split('')
  let sL = (a >= b) ? m.length +1 : n.length +1
  let s = []
  let c = '0'
  for(let i = 1; i < sL+1; i++) {
    let t1 = (m.length-i < 0) ? 0 : m[m.length-i]
    let t2 = (n.length-i < 0) ? 0 : n[n.length-i]
    s[sL-i] = (t1 ^ t2) ^ c
    c = ((t1 ^ t2) & c) | (t1 & t2)
  }
  return parseInt(s.join(''),2)
}
