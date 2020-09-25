## 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。
這週更了解 JavaScript 的運作方式。
之前一直不太懂 this，感覺 this 就是一個很常出現，但不知道值會是什麼的變數，一般來說，函式裡的 this 值要看你呼叫的狀況，對哪個變數呼叫函式，那個變數就是傳進函式的 this，在 class 裡就是新建構的實例，DOM 函式就會是觸發事件的對象，而沒有傳進值的狀況下，預設值在非嚴格模式，Node.js 是 `global`，瀏覽器是`window`，嚴格模式下是`undefiend`。唯一例外的是箭頭函式，看的是定義的位置，可能會是上層的 this 值。

Event loop 的部分也讓我更理解非同步的運作方式，原來有兩個執行續在運作，一個是 JS 本身，一個是環境提供，瀏覽器的 WebAPI 或 Node.js 的 C++API，JS 本身的執行續會一件件執行被排進 stack 裡的程式碼，執行到 Ajax 時，程式碼會被推送給 WebAPI 等待 Response，同時 JS 繼續執行 stack 裡的任務，而 WebAPI 等到 Response 就會把回調函式 Callback Function，推送至任務佇列，等到 stack 內的程式碼執行完畢，Event Loop 就會把任務佇列的第一項推送進空白的 stack，重複到程式整個執行完畢。

Scope 則讓我知道 JS 是怎麼儲存變數、運行函數。
global 預設就有 Execution Context，也就是 EC，EC 裡有儲存變數的 Variable Object，也就是 VO。
每當呼叫函式，都會產生新的EC，EC 裡有 Activation Object，也就是 AO，函式版本的 VO，將函式內宣告的變數存進 AO，將 global EC 的 VO 存進 scopeChain 物件。
隨著我們使用閉包，也就是在函式內回傳新的函式，新函式的 EC 裡的 scopeChain 物件就會傳入上層 EC 的 AO 與 global EC 的 VO，藉此上層函式的變數就會被保留在回傳函式裡，而因為回傳函式尚待呼叫，底層的清除機制就不會刪除回傳函式會用到的值。