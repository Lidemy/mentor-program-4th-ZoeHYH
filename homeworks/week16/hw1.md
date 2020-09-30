輸出結果是：
1
3
5
2
4

JavaScript 是單執行續的程式碼，一次執行一件事，任務會被排進 stack 裡，依照順序執行。

1. 首先執行`console.log(1)`，印出 1。
2. 接著執行`setTimeout(() => { console.log(2) }, 0)`，setTimeout 會被排進瀏覽器的 WebAPIs 或 Node.js 的 C++API 的執行續裡，依程式碼，0 秒後`() => { console.log(2) }`排進任務佇列。
3. 接下來，輪到`console.log(3)`被執行，印出 3。
4. 接續執行的是`setTimeout(() => { console.log(4) }, 0)`一樣被排進 WebAPIs 或 C++API 的執行續，0 秒後`() => { console.log(4) }`排進任務佇列。
5. 然後就輪到最行一行`(() => { console.log(5) }`印出 5。

至此，1、3、5 被印出，stack 已空。

6. Event Loop 開始往空的 stack 排進任務佇列的第一項`() => { console.log(2) }`，stack 執行印出 2。
7. Event Loop 繼續往空 stack 排進任務佇列的下一個`() => { console.log(4) }`，stack 執行印出 4。

最後，2、4 也被印出，程式執行完畢。
