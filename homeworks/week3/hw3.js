function isPrime(n) {
  const primes = [];
  for (let i = 1; i < n + 1; i += 1) {
    if (n % i === 0) primes.push(i);
    if (primes.length > 2) {
      console.log('Composite');
      break;
    }
  }
  if (primes.length < 3) console.log('Prime');
}

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
