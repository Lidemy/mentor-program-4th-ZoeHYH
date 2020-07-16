function printStar(num) {
  const stars = [];
  for (let i = 0; i < Number(num); i += 1) {
    stars[i] = '';
    for (let j = 0; j < i + 1; j += 1) stars[i] += '*';
    console.log(stars[i]);
  }
}

printStar(5);
