function join(arr, concatStr) {
  let str = ''
  for (let i=0; i<arr.length; i++) str += (arr[i] + concatStr) 
  return str
}

function repeat(str, times) {
  let newStr = ''
  for (let i=0; i<times; i++) newStr += str
  return newStr
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
