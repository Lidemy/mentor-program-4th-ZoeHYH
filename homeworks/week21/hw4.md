## 為什麼我們需要 React？可以不用嗎？

可以吧，不過 React 以 Component 為單位建立網頁，如果有很多重複的 UI 元件需要建立，使用 Component 加迴圈，可以省下很多建立與修改的時間，滿方便的。
另外， JS、HTML、CSS 都寫在一起，可以輕鬆的控制 DOM 與網頁事件。

## React 的思考模式跟以前的思考模式有什麼不一樣？

以 Component 為單位建立網頁，要判斷哪些可以重複使用要單獨建立 Component，甚至拆分到不同檔案裡。

更注意 State 與 Props 的運用，一開始不習慣會有很多 bug，常常在調整處理事件的函式。

上層的 State 只能在上層管理，如果要在下層對上層的 State 做特定動作，例如覆寫 State 值，要在上層先實作出能接收值並覆寫 State 的函式，再把函式透過 Props 傳進下層的 Component，下層 Component 透過呼叫該函式完成覆寫。

## state 跟 props 的差別在哪裡？

State 是這個 Component 用來儲存並管理狀態用的，Props 是一個物件，管理上層使用這個 Component 時傳進來的值、變數或函數。
