function multiply(a, b) {
    let n = a.split('')
    let m = b.split('')
    let s = []
    let c = 0
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < n.length; j++) {
            let t = c+n[n.length-1-j]*m[m.length-1-i]
            if (typeof s[i+j] === 'number') {
                let add = Number(s[i+j])+ t % 10
                s[i+j] = add % 10
                c = Math.floor(add / 10) + Math.floor(t / 10)
            } else {
                s[i+j]= t % 10
                c = Math.floor(t / 10)
            }
        }
    }
    return s.reverse().join('')
}
