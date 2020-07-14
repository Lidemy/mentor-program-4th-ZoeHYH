function palindrome(s) {
   let r = ''
   for (let i = s.length-1 ; i > -1; i--) {
     r += s[i]
   }
   console.log(s == r? 'True' : 'False')
}
