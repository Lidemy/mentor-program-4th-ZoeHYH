/* eslint-disable no-bitwise */

function halfAdder(a, b) {
  const sum = a ^ b;
  const carry = a & b;
  return [sum, carry];
}

function fullAdder(a, b, c) {
  const [sum1, carry1] = halfAdder(a, b);
  const [sum2, carry2] = halfAdder(sum1, c);
  return [sum2, carry1 ^ carry2];
}

function adder(a, b) {
  let [m, n] = [a, b];
  let result = 0;
  let mask = 1;
  let carry = 0;
  while (m > 0 || n > 0 || carry > 0) {
    const [sum, c] = fullAdder(m & 1, n & 1, carry);
    carry = c;
    m >>= 1;
    n >>= 1;
    result |= sum ? mask : 0;
    mask <<= 1;
  }
  return result;
}

console.log(adder(99, 68));

/* eslint-enable */
