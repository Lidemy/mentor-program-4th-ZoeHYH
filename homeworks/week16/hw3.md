由於程式碼編譯時，會有提升 Hoisting 的出現，程式碼並不是依照編寫順序執行，而是宣告語法先被寫入，首先 function 的宣告會被提升，接著是 function 被傳進的參數會接著寫入，然後是普通的宣告語法，最後程式才會按著順序執行。

所以題目被重新編譯會是：`

function fn(){
  function fn2(){
    console.log(a) //順序 3
    a = 20
    b = 100
  }
  var a
  var a
  console.log(a) //順序 1
  a = 5
  console.log(a) //順序 2
  a++
  fn2()
  console.log(a) //順序 4
}
var a = 1
fn()
console.log(a) //順序 5
a = 10
console.log(a) //順序 6
console.log(b) //順序 7
`
1. 首先 global scope 宣告 a 等於 1， fn() 執行，fn2() 被宣告，a 在 function scope 裡被提升並重新宣告，`console.log(a)`印出 undefined。
2. a 被賦值為 5，`console.log(a)`印出 5。
3. a 加 1 為 6，fn2() 執行，fn2() 裡的`console.log(a)`印出 6。
4. fn2() 內，a 賦值為 20，b 被宣告為全域變數，賦值為 200，fn2() 結束，`console.log(a)`印出 20，fn() 結束。
5. `console.log(a)`印出 1，因為 global scope 宣告的 a 為 1。
6. a 重新賦值為 10，`console.log(a)`印出 10。
7. `console.log(b)`印出 100，因為 fn2() 中`b=100`，b 為全域變數。