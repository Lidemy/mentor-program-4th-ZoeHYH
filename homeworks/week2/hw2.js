function capitalize(str) {
  let newStr = typeof str[0] === 'string' ? str[0].toUpperCase() : str[0]
  for (let i=1; i<str.length;i++) newStr += str[i]
  return newStr
}

console.log(capitalize('hello'));
