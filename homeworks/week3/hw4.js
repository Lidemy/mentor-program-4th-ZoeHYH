function palindrome(s) {
  let r = '';
  for (let i = s.length - 1; i > -1; i -= 1) r += s[i];
  console.log(s === r ? 'True' : 'False');
}

palindrome('abbbba');
palindrome('ac');
