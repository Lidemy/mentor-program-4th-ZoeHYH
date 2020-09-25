印出：
2
2
undefined

對變數呼叫函數時，傳進函數的 this 值就會是該變數，而直接使用函數，沒有變數傳進函數，this 就會等於環境的預設值，瀏覽器是`window`，Node.js 是`global`。
1. `obj.inner.hello()`傳進`.hello()`的就是`obj.inner`，而`.hello()`會印出`this.value`，也就是 2。
2. `obj2.hello()`傳進`.hello()`的就是`obj2`，而`obj2`等於`obj.inner`，印出 2。
3. `hello()`沒有傳進 this 值，非嚴格模式下，this 會等於預設值，預設值沒有設定`value`這個 key，所以印出 undefined。