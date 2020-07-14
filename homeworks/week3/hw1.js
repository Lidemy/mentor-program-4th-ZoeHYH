function printStar(num) {
  let stars = []
  for (let i = 0; i < Number(num); i++) {
    stars[i] = ''
    for (let j = 0; j < i+1 ; j++) {
      stars[i] += '*'
    }
    console.log(stars[i])
  }
}
